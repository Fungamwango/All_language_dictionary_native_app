package com.sageteche.alldic

import android.webkit.JavascriptInterface
import org.json.JSONArray
import org.json.JSONException

/**
 * Exposed to the page as `window.Kodular`, the bridge the web app already calls
 * for text-to-speech: setWebViewString(text) speaks, setWebViewString('') stops.
 * Keeping the Kodular name means index.html and api.js run unchanged.
 *
 * speakParts(json) is the language-aware addition used by index.html's
 * playEntryAudio(): js/speak.js splits the entry on screen into
 * [{text, lang}, ...] and each part is read in its own language. [onPartsDone]
 * runs when they have all been spoken, so the page can reset its play button.
 */
class KodularBridge(
    private val tts: DeviceTts,
    private val onPartsDone: () -> Unit,
) {

    @Volatile
    private var webViewString = ""

    @JavascriptInterface
    fun setWebViewString(text: String?) {
        webViewString = text.orEmpty()
        tts.speak(webViewString)
    }

    @JavascriptInterface
    fun getWebViewString(): String = webViewString

    @JavascriptInterface
    fun speakParts(json: String?) {
        val parts = try {
            val arr = JSONArray(json.orEmpty())
            (0 until arr.length()).mapNotNull { i ->
                arr.optJSONObject(i)?.let { DeviceTts.Part(it.optString("text"), it.optString("lang", "en")) }
            }
        } catch (e: JSONException) {
            emptyList()
        }
        tts.speakParts(parts, onPartsDone)
    }
}
