package com.sageteche.alldic

import android.annotation.SuppressLint
import android.app.Activity
import android.content.ActivityNotFoundException
import android.content.Intent
import android.graphics.Bitmap
import android.graphics.Color
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.Message
import android.provider.Browser
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.webkit.ConsoleMessage
import android.webkit.RenderProcessGoneDetail
import android.webkit.ServiceWorkerClient
import android.webkit.ServiceWorkerController
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.activity.OnBackPressedCallback
import androidx.activity.SystemBarStyle
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.browser.customtabs.CustomTabColorSchemeParams
import androidx.browser.customtabs.CustomTabsClient
import androidx.browser.customtabs.CustomTabsIntent
import androidx.core.content.ContextCompat
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.core.view.isVisible
import com.sageteche.alldic.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var tts: DeviceTts
    private lateinit var offlineCache: OfflineCache

    private var lastBackPressAt = 0L

    private var fileCallback: ValueCallback<Array<Uri>>? = null
    private var customView: View? = null
    private var customViewCallback: WebChromeClient.CustomViewCallback? = null

    private val fileChooser =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
            val data = result.data
            val uris: Array<Uri>? = if (result.resultCode != Activity.RESULT_OK || data == null) null
            else data.clipData?.let { clip -> Array(clip.itemCount) { clip.getItemAt(it).uri } }
                ?: data.data?.let { arrayOf(it) }
            fileCallback?.onReceiveValue(uris)
            fileCallback = null
        }

    override fun onCreate(savedInstanceState: Bundle?) {
        enableEdgeToEdge(
            statusBarStyle     = SystemBarStyle.dark(Color.TRANSPARENT),
            navigationBarStyle = SystemBarStyle.dark(Color.TRANSPARENT),
        )
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        applyWindowInsets()
        tts          = DeviceTts(this)
        offlineCache = OfflineCache(this, WebSettings.getDefaultUserAgent(this))
        setupWebView()
        setupBackNavigation()

        if (savedInstanceState == null || binding.webView.restoreState(savedInstanceState) == null) {
            binding.webView.loadUrl(HOME_URL)
        }
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        binding.webView.saveState(outState)
    }

    override fun onResume() {
        super.onResume()
        binding.webView.onResume()
    }

    override fun onPause() {
        binding.webView.onPause()
        super.onPause()
    }

    override fun onDestroy() {
        tts.shutdown()
        (binding.webView.parent as? ViewGroup)?.removeView(binding.webView)
        binding.webView.destroy()
        super.onDestroy()
    }

    // Android 15+ draws the app behind the system bars: pad the content so nothing
    // sits under the status bar, navigation bar or keyboard.
    private fun applyWindowInsets() {
        ViewCompat.setOnApplyWindowInsetsListener(binding.root) { v, insets ->
            val bars = insets.getInsets(
                WindowInsetsCompat.Type.systemBars() or WindowInsetsCompat.Type.displayCutout()
            )
            val ime = insets.getInsets(WindowInsetsCompat.Type.ime())
            v.setPadding(bars.left, bars.top, bars.right, maxOf(bars.bottom, ime.bottom))
            WindowInsetsCompat.CONSUMED
        }
    }

    @SuppressLint("SetJavaScriptEnabled", "JavascriptInterface")
    private fun setupWebView() {
        WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG)
        with(binding.webView.settings) {
            javaScriptEnabled                 = true
            domStorageEnabled                 = true
            allowFileAccess                   = false
            allowContentAccess                = true
            mediaPlaybackRequiresUserGesture  = false
            javaScriptCanOpenWindowsAutomatically = true
            setSupportMultipleWindows(true)
            loadWithOverviewMode = true
            useWideViewPort      = true
            builtInZoomControls  = false
            displayZoomControls  = false
            setSupportZoom(false)
            cacheMode            = WebSettings.LOAD_DEFAULT
            mixedContentMode     = WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE
        }
        // The web app calls window.Kodular.setWebViewString(text) for text-to-speech
        binding.webView.addJavascriptInterface(KodularBridge(tts) {
            binding.webView.evaluateJavascript("window.__alldicSpeakDone && window.__alldicSpeakDone();", null)
        }, "Kodular")
        binding.webView.webViewClient   = DictionaryWebViewClient()
        binding.webView.webChromeClient = DictionaryWebChromeClient()
        binding.webView.setDownloadListener { url, _, _, _, _ -> openLink(Uri.parse(url)) }

        // Requests made by a service worker bypass the WebViewClient; route them
        // through the same cache (it also stops the site's sw.js from installing).
        ServiceWorkerController.getInstance().setServiceWorkerClient(object : ServiceWorkerClient() {
            override fun shouldInterceptRequest(request: WebResourceRequest): WebResourceResponse? =
                offlineCache.intercept(request)
        })
    }

    // Back closes what is on top (video, pop-up, menu, other view) and only
    // leaves the app from the home view, after a second press.
    private fun setupBackNavigation() {
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (customView != null) {
                    hideCustomView()
                    return
                }
                val webView = binding.webView
                // On another site (the card payment page): step back towards the app
                if (!isSitePage(webView.url)) {
                    if (webView.canGoBack()) webView.goBack() else webView.loadUrl(HOME_URL)
                    return
                }
                webView.evaluateJavascript(BackNavigation.SCRIPT) { result ->
                    if (result?.trim('"') != BackNavigation.HANDLED) confirmExit()
                }
            }
        })
    }

    private fun confirmExit() {
        val now = System.currentTimeMillis()
        if (now - lastBackPressAt < EXIT_WINDOW_MS) {
            finish()
        } else {
            lastBackPressAt = now
            Toast.makeText(this, R.string.press_back_again, Toast.LENGTH_SHORT).show()
        }
    }

    private fun isSitePage(url: String?): Boolean =
        url != null && Uri.parse(url).host == OfflineCache.SITE_HOST

    private fun isPaymentPage(uri: Uri): Boolean {
        val host = uri.host ?: return false
        return PAYMENT_DOMAINS.any { host == it || host.endsWith(".$it") }
    }

    /**
     * Opens a link outside the app's WebView: http(s) in the app made for it (WhatsApp,
     * Facebook, Play Store) or else in a Custom Tab over the app; tel:/mailto:/whatsapp:
     * etc. in their apps.
     */
    private fun openLink(uri: Uri) {
        val scheme = uri.scheme?.lowercase() ?: return
        if (scheme == "blob" || scheme == "data" || scheme == "about" || scheme == "javascript") return
        try {
            if (scheme == "intent") {
                val intent = Intent.parseUri(uri.toString(), Intent.URI_INTENT_SCHEME).apply {
                    addCategory(Intent.CATEGORY_BROWSABLE)
                    component = null
                    selector  = null
                }
                try {
                    startActivity(intent)
                } catch (e: ActivityNotFoundException) {
                    val fallback = intent.getStringExtra("browser_fallback_url")
                    when {
                        fallback != null -> openLink(Uri.parse(fallback))
                        intent.`package` != null ->
                            openLink(Uri.parse("market://details?id=${intent.`package`}"))
                        else -> throw e
                    }
                }
                return
            }
            if (scheme == "http" || scheme == "https") {
                if (openInNativeApp(uri) || openInCustomTab(uri)) return
            }
            // EXTRA_APPLICATION_ID: the browser ties the tab to this app, so back returns here
            startActivity(
                Intent(Intent.ACTION_VIEW, uri)
                    .addCategory(Intent.CATEGORY_BROWSABLE)
                    .putExtra(Browser.EXTRA_APPLICATION_ID, packageName)
            )
        } catch (e: Exception) {
            Toast.makeText(this, R.string.no_app_for_link, Toast.LENGTH_SHORT).show()
        }
    }

    // Android 11+: a link with its own app installed (wa.me, facebook.com, play.google.com)
    // opens in that app; links that only a browser can open are left to the Custom Tab.
    private fun openInNativeApp(uri: Uri): Boolean {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.R) return false
        return try {
            startActivity(
                Intent(Intent.ACTION_VIEW, uri)
                    .addCategory(Intent.CATEGORY_BROWSABLE)
                    .addFlags(Intent.FLAG_ACTIVITY_REQUIRE_NON_BROWSER)
            )
            true
        } catch (e: ActivityNotFoundException) {
            false
        }
    }

    // A browser tab that slides over the app in its colours; ✕ or back returns here.
    // False when no installed browser supports Custom Tabs.
    private fun openInCustomTab(uri: Uri): Boolean {
        val browser = CustomTabsClient.getPackageName(this, null) ?: return false
        val colors = CustomTabColorSchemeParams.Builder()
            .setToolbarColor(ContextCompat.getColor(this, R.color.brand_primary))
            .build()
        val tab = CustomTabsIntent.Builder()
            .setDefaultColorSchemeParams(colors)
            .setShowTitle(true)
            .setShareState(CustomTabsIntent.SHARE_STATE_ON)
            .build()
        tab.intent.setPackage(browser)
        return try {
            tab.launchUrl(this, uri)
            true
        } catch (e: ActivityNotFoundException) {
            false
        }
    }

    private fun hideCustomView() {
        val view = customView ?: return
        binding.fullscreenContainer.removeView(view)
        binding.fullscreenContainer.isVisible = false
        customView = null
        customViewCallback?.onCustomViewHidden()
        customViewCallback = null
        WindowCompat.getInsetsController(window, window.decorView)
            .show(WindowInsetsCompat.Type.systemBars())
    }

    private inner class DictionaryWebViewClient : WebViewClient() {

        override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? =
            offlineCache.intercept(request)

        override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
            val url    = request.url
            val scheme = url.scheme?.lowercase() ?: return false
            val web    = scheme == "http" || scheme == "https"
            // Ad frames and other iframes navigate inside themselves, as in a browser
            if (!request.isForMainFrame) {
                if (web || !request.hasGesture()) return false
                openLink(url)
                return true
            }
            // The app's own pages load in place. So does the card payment: Lipila's page
            // (and the bank's 3-D Secure step after it) must return to this WebView,
            // where api.js finishes the subscription on the way back.
            if (web && (url.host == OfflineCache.SITE_HOST || isPaymentPage(url) || !isSitePage(view.url))) {
                return false
            }
            openLink(url)
            return true
        }

        override fun onPageStarted(view: WebView, url: String, favicon: Bitmap?) {
            binding.progressBar.isVisible = true
        }

        override fun onPageFinished(view: WebView, url: String) {
            binding.progressBar.isVisible = false
        }

        // The page's renderer was killed (e.g. low memory): start fresh instead of crashing
        override fun onRenderProcessGone(view: WebView, detail: RenderProcessGoneDetail): Boolean {
            recreate()
            return true
        }
    }

    private inner class DictionaryWebChromeClient : WebChromeClient() {

        override fun onProgressChanged(view: WebView, newProgress: Int) {
            if (newProgress == 100) binding.progressBar.isVisible = false
        }

        // window.open() and target="_blank" links open outside the WebView (openLink),
        // as a new tab would
        override fun onCreateWindow(
            view: WebView, isDialog: Boolean, isUserGesture: Boolean, resultMsg: Message
        ): Boolean {
            if (!isUserGesture) return false   // block pop-ups nobody tapped, like a browser does

            val popup = WebView(this@MainActivity)
            popup.webViewClient = object : WebViewClient() {
                private var handled = false

                private fun handle(v: WebView, url: Uri): Boolean {
                    if (!handled && url.scheme != "about") {
                        handled = true
                        openLink(url)
                        v.post { v.stopLoading(); v.destroy() }
                    }
                    return true
                }

                override fun shouldOverrideUrlLoading(v: WebView, r: WebResourceRequest) = handle(v, r.url)

                override fun onPageStarted(v: WebView, url: String, favicon: Bitmap?) {
                    handle(v, Uri.parse(url))
                }
            }
            (resultMsg.obj as WebView.WebViewTransport).webView = popup
            resultMsg.sendToTarget()
            return true
        }

        override fun onShowFileChooser(
            webView: WebView,
            filePathCallback: ValueCallback<Array<Uri>>,
            fileChooserParams: FileChooserParams
        ): Boolean {
            fileCallback?.onReceiveValue(null)
            fileCallback = filePathCallback
            val intent = fileChooserParams.createIntent().apply {
                if (fileChooserParams.mode == FileChooserParams.MODE_OPEN_MULTIPLE) {
                    putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true)
                }
            }
            return try {
                fileChooser.launch(Intent.createChooser(intent, getString(R.string.choose_file)))
                true
            } catch (e: ActivityNotFoundException) {
                fileCallback = null
                false
            }
        }

        // Full-screen video
        override fun onShowCustomView(view: View, callback: CustomViewCallback) {
            if (customView != null) {
                callback.onCustomViewHidden()
                return
            }
            customView         = view
            customViewCallback = callback
            binding.fullscreenContainer.addView(
                view, ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
            )
            binding.fullscreenContainer.isVisible = true
            WindowCompat.getInsetsController(window, window.decorView).apply {
                systemBarsBehavior = WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
                hide(WindowInsetsCompat.Type.systemBars())
            }
        }

        override fun onHideCustomView() = hideCustomView()

        override fun onConsoleMessage(message: ConsoleMessage): Boolean {
            if (BuildConfig.DEBUG) {
                Log.d("WebConsole", "${message.message()} (${message.sourceId()}:${message.lineNumber()})")
            }
            return true
        }
    }

    companion object {
        // Cloudflare Pages serves index.html at "/" (and redirects /index.html there)
        private val HOME_URL     = "https://${OfflineCache.SITE_HOST}/"
        private const val EXIT_WINDOW_MS = 2000L

        // Card payments: Lipila's hosted page; mobile money: Lenco
        private val PAYMENT_DOMAINS = listOf("lipila.io", "lipila.dev", "lenco.co")
    }
}
