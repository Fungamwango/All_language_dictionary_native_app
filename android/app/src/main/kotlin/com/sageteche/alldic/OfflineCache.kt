package com.sageteche.alldic

import android.content.Context
import android.webkit.MimeTypeMap
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import com.sageteche.alldic.utils.NetworkUtils
import java.io.ByteArrayInputStream
import java.io.File
import java.io.FileInputStream
import java.io.IOException
import java.io.InputStream
import java.net.HttpURLConnection
import java.net.URL
import java.security.MessageDigest
import java.util.Locale
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.Executors

/**
 * Native stand-in for the website's service worker (sw.js).
 *
 * The app opens the live site (https://SITE_HOST/), so index.html, api.js and
 * the /api/ endpoints all work exactly as in a browser. Every GET for a site
 * file goes through here:
 *
 *  - a file the app already has (stored from an earlier visit, or bundled in
 *    the APK's assets: index.html, css, js, api/api.js and every dictionary
 *    file) is served at once, so the app opens instantly even on a slow
 *    connection, and works fully offline even on the very first launch.
 *    While online, a fresh copy is fetched in the background (once per app
 *    session) and used from the next launch. It is revalidated with its ETag,
 *    so a 1.4 MB dictionary that has not changed costs a 304, not a download.
 *  - api/api.js, the website's remotely updated app logic, is fetched network
 *    first as in the Bemba dictionary app, falling back to the stored copy and
 *    then the bundled one.
 *  - anything else is fetched network first and stored for offline use.
 *
 * /api/ endpoints (no file extension) are live data and always bypass this.
 * Static files under /api/ (api.js, the ad images) are cached like any other.
 * sw.js itself is answered with 404 so the website's own service worker never
 * installs and takes requests away from this class.
 *
 * index.html gets one addition, whichever copy is served: a <script> tag for
 * the app's own page code (res/raw/app_shim.js, served at /__app/shim.js),
 * which hides online-only features while offline. The website is untouched.
 */
class OfflineCache(private val context: Context, private val userAgent: String) {

    private val dir = File(context.filesDir, "offline_cache")
    private val refresher = Executors.newFixedThreadPool(2)
    private val refreshed = ConcurrentHashMap.newKeySet<String>()

    init {
        // A new app version ships newer bundled files than anything stored by the
        // old one, so start the stored copies afresh after every update.
        val marker  = File(dir, "version")
        val version = BuildConfig.VERSION_CODE.toString()
        if (!marker.exists() || marker.readText() != version) {
            dir.deleteRecursively()
            dir.mkdirs()
            marker.writeText(version)
        }
    }

    fun intercept(request: WebResourceRequest): WebResourceResponse? {
        val url = request.url
        if (request.method != "GET") return null
        if (url.scheme != "https" || url.host != SITE_HOST) return null
        val path = normalisePath(url.path)
        if (path == "/sw.js") return notFound()
        if (path == SHIM_PATH) return shim()
        if (isLiveData(path)) return null
        // Range requests (video seeking) cannot be replayed from a cache
        if (request.requestHeaders.keys.any { it.equals("Range", ignoreCase = true) }) return null

        val response = load(url.toString(), path)
        if (response == null && isImage(path)) return blankImage()
        return if (path == "/index.html" && response?.statusCode == 200) withShim(response) else response
    }

    private fun load(url: String, path: String): WebResourceResponse? {
        // Keyed without the query string so cache-busting parameters (?v=4) still hit offline
        val key    = sha1(path)
        val online = NetworkUtils.isOnline(context)

        if (path != NETWORK_FIRST) {
            val local = fromCache(key) ?: fromAssets(path)
            if (local != null) {
                if (online && refreshed.add(key)) refreshInBackground(url, path, key)
                return local
            }
        }
        if (online) {
            try {
                fetchAndStore(url, path, key)?.let { refreshed.add(key); return it }
            } catch (e: IOException) {
                // fall through to the stored or bundled copy
            }
        }
        return fromCache(key) ?: fromAssets(path)
    }

    private fun refreshInBackground(url: String, path: String, key: String) {
        refresher.execute {
            try {
                fetchAndStore(url, path, key)?.data?.close()
            } catch (e: IOException) {
                refreshed.remove(key)   // try again on the next request
            }
        }
    }

    /**
     * The app's additions to the page (res/raw/app_shim.js), loaded first in <head>.
     * Scripts from other sites (the website's Adsterra banner) are made async:
     * a slow ad server must never hold up the dictionary, which only starts once
     * the page has been read to the end.
     */
    private fun withShim(page: WebResourceResponse): WebResourceResponse {
        val html = page.data.use { it.readBytes() }.toString(Charsets.UTF_8)
            .replace(THIRD_PARTY_SCRIPT) { m ->
                if (m.value.contains(" async", ignoreCase = true)) m.value else m.value.replaceFirst("<script", "<script async")
            }
        val tag  = "<script src=\"$SHIM_PATH\"></script>"
        val head = HEAD_TAG.find(html)
        val out  = if (head != null) html.replaceRange(head.range.last + 1, head.range.last + 1, tag) else tag + html
        return WebResourceResponse("text/html", "utf-8", 200, "OK", HEADERS, ByteArrayInputStream(out.toByteArray()))
    }

    private fun shim(): WebResourceResponse =
        WebResourceResponse("application/javascript", "utf-8", 200, "OK", HEADERS,
            context.resources.openRawResource(R.raw.app_shim))

    // An image that is neither stored nor bundled while offline (the website's
    // rotating ad images) is answered with a transparent pixel instead of the
    // broken-image icon. The ad box itself is hidden offline by app_shim.js.
    private fun isImage(path: String) = guessMime(path).startsWith("image/")

    private fun blankImage() =
        WebResourceResponse("image/gif", null, 200, "OK", HEADERS, ByteArrayInputStream(BLANK_GIF))

    /** Returns null (use the offline copies instead) when the server itself fails. */
    private fun fetchAndStore(url: String, path: String, key: String): WebResourceResponse? {
        val meta = readMeta(key)
        val conn = (URL(url).openConnection() as HttpURLConnection).apply {
            connectTimeout = 15_000
            readTimeout    = 30_000
            instanceFollowRedirects = true
            setRequestProperty("Accept", "*/*")
            setRequestProperty("User-Agent", userAgent)
            meta?.etag?.let { setRequestProperty("If-None-Match", it) }
            meta?.lastModified?.let { setRequestProperty("If-Modified-Since", it) }
        }
        try {
            val code = conn.responseCode
            if (code == HttpURLConnection.HTTP_NOT_MODIFIED) return fromCache(key)
            if (code >= 500) return null
            if (code in 300..399) return null   // unfollowed redirect: let the WebView handle it
            val (mime, charset) = parseContentType(conn.contentType, path)
            // Cloudflare Pages answers a missing file with index.html and a 200:
            // never keep that page under an image's or script's name
            if (mime == "text/html" && !path.endsWith(".html")) {
                return if (isImage(path)) blankImage() else notFound()
            }
            val reason = conn.responseMessage?.takeIf { it.isNotBlank() } ?: if (code == 200) "OK" else "Error"

            if (code == 200) {
                val body = store(key, conn.inputStream, Meta(mime, charset, conn.getHeaderField("ETag"),
                    conn.getHeaderField("Last-Modified")))
                return WebResourceResponse(mime, charset, 200, reason, HEADERS, body)
            }
            val body = (if (code in 200..299) conn.inputStream else conn.errorStream)
                ?.use { it.readBytes() } ?: ByteArray(0)
            return WebResourceResponse(mime, charset, code, reason, HEADERS, ByteArrayInputStream(body))
        } finally {
            conn.disconnect()
        }
    }

    private fun fromCache(key: String): WebResourceResponse? {
        val body = File(dir, "$key.body")
        val meta = readMeta(key)
        if (!body.exists() || meta == null) return null
        return WebResourceResponse(meta.mime, meta.charset, 200, "OK", HEADERS, FileInputStream(body))
    }

    /** The copy bundled in the APK, stored under the same path it has on the site. */
    private fun fromAssets(path: String): WebResourceResponse? = try {
        val (mime, charset) = parseContentType(null, path)
        WebResourceResponse(mime, charset, 200, "OK", HEADERS, context.assets.open(path.removePrefix("/")))
    } catch (e: IOException) {
        null
    }

    /**
     * Streams the response into the cache and returns the stored file, so a large
     * dictionary is never held in memory. A download that breaks off half way
     * throws, leaving the previous stored copy in place to be served instead.
     */
    private fun store(key: String, input: InputStream, meta: Meta): InputStream {
        val tmp = File(dir, "$key.${System.nanoTime()}.tmp")
        try {
            input.use { src -> tmp.outputStream().use { src.copyTo(it) } }
        } catch (e: IOException) {
            tmp.delete()
            throw e
        }
        val body = File(dir, "$key.body")
        body.delete()
        if (!tmp.renameTo(body)) {
            // could not keep it: serve the download without storing it
            File(dir, "$key.meta").delete()
            return ByteArrayInputStream(tmp.readBytes().also { tmp.delete() })
        }
        File(dir, "$key.meta").writeText(
            listOf(meta.mime, meta.charset.orEmpty(), meta.etag.orEmpty(), meta.lastModified.orEmpty())
                .joinToString("\n")
        )
        return FileInputStream(body)
    }

    private data class Meta(val mime: String, val charset: String?, val etag: String?, val lastModified: String?)

    private fun readMeta(key: String): Meta? {
        val file = File(dir, "$key.meta")
        if (!file.exists() || !File(dir, "$key.body").exists()) return null
        val lines = try { file.readLines() } catch (e: IOException) { return null }
        return Meta(
            mime         = lines.getOrNull(0)?.takeIf { it.isNotBlank() } ?: "application/octet-stream",
            charset      = lines.getOrNull(1)?.takeIf { it.isNotBlank() },
            etag         = lines.getOrNull(2)?.takeIf { it.isNotBlank() },
            lastModified = lines.getOrNull(3)?.takeIf { it.isNotBlank() },
        )
    }

    // Cloudflare Pages serves index.html at "/" (and redirects /index.html there),
    // so both are the same page and share one stored copy.
    private fun normalisePath(path: String?): String =
        if (path.isNullOrEmpty() || path == "/") "/index.html" else path

    // /api/visit, /api/tutor/chat ... have no extension; /api/api.js and /api/img1.jpeg do
    private fun isLiveData(path: String): Boolean =
        path.startsWith("/api/") && !path.substringAfterLast('/').contains('.')

    private fun notFound() =
        WebResourceResponse("text/plain", "utf-8", 404, "Not Found", HEADERS, ByteArrayInputStream(ByteArray(0)))

    private fun parseContentType(header: String?, path: String): Pair<String, String?> {
        val parts   = header?.split(";")?.map { it.trim() }.orEmpty()
        val mime    = parts.firstOrNull()?.takeIf { it.isNotEmpty() } ?: guessMime(path)
        val charset = parts.drop(1).firstOrNull { it.startsWith("charset=", ignoreCase = true) }
            ?.substringAfter("=")?.trim('"')
            ?: if (mime.startsWith("text/") || mime.contains("javascript") || mime.contains("json")) "utf-8" else null
        return mime to charset
    }

    private fun guessMime(path: String): String {
        val ext = path.substringAfterLast('.', "").lowercase(Locale.ROOT)
        return when (ext) {
            "js"   -> "application/javascript"
            "css"  -> "text/css"
            "html" -> "text/html"
            "json" -> "application/json"
            "webp" -> "image/webp"
            else   -> MimeTypeMap.getSingleton().getMimeTypeFromExtension(ext) ?: "application/octet-stream"
        }
    }

    private fun sha1(s: String): String =
        MessageDigest.getInstance("SHA-1").digest(s.toByteArray()).joinToString("") { "%02x".format(it) }

    companion object {
        val SITE_HOST: String = BuildConfig.SITE_HOST
        private const val NETWORK_FIRST = "/api/api.js"
        private const val SHIM_PATH = "/__app/shim.js"
        private val HEAD_TAG = Regex("<head[^>]*>", RegexOption.IGNORE_CASE)
        private val THIRD_PARTY_SCRIPT = Regex(
            "<script\\b[^>]*\\bsrc\\s*=\\s*['\"](?:https?:)?//(?!${Regex.escape(BuildConfig.SITE_HOST)})[^>]*>",
            RegexOption.IGNORE_CASE
        )
        private val BLANK_GIF = android.util.Base64.decode(
            "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", android.util.Base64.DEFAULT
        )
        private val HEADERS = mapOf(
            "Access-Control-Allow-Origin" to "*",
            "Cache-Control" to "no-cache",
        )
    }
}
