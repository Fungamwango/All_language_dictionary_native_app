package com.sageteche.alldic

import android.content.Context
import android.os.Handler
import android.os.Looper
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import android.speech.tts.Voice
import android.util.Log
import com.sageteche.alldic.utils.NetworkUtils
import java.util.Locale
import java.util.MissingResourceException

/**
 * Speaks with the phone's own text-to-speech engine. Each part is read in its
 * own language (an entry's English half in English, its French half in French)
 * with a voice installed for that language, male where there is one. Voices
 * stored on the device are preferred so speech keeps working offline. A language
 * the phone has no voice for (Bemba, Nyanja...) is read with the English voice.
 */
class DeviceTts(context: Context) : TextToSpeech.OnInitListener {

    /** A piece of text and the Google Translate language code it is written in. */
    data class Part(val text: String, val lang: String)

    private val appContext = context.applicationContext
    private val main       = Handler(Looper.getMainLooper())
    private val tts        = TextToSpeech(appContext, this)
    private var ready      = false
    private var pending: Pair<List<Part>, (() -> Unit)?>? = null

    // Utterance id of the last chunk of the current request, and who to tell when it ends
    @Volatile private var lastId: String? = null
    @Volatile private var onFinished: (() -> Unit)? = null
    private var batch = 0

    override fun onInit(status: Int) {
        main.post {
            if (status != TextToSpeech.SUCCESS) return@post
            ready = true
            tts.setSpeechRate(SPEECH_RATE)
            tts.setOnUtteranceProgressListener(object : UtteranceProgressListener() {
                override fun onStart(utteranceId: String?) {}
                override fun onDone(utteranceId: String?) = finished(utteranceId)
                @Deprecated("Deprecated in Java")
                override fun onError(utteranceId: String?) = finished(utteranceId)
            })
            pending?.let { (parts, done) -> pending = null; speakNow(parts, done) }
        }
    }

    /** Speaks [text] in English; an empty string stops speaking (same contract as Kodular's WebViewString). */
    fun speak(text: String) = speakParts(listOf(Part(text, "en")), null)

    /** Speaks [parts] in order, each in its own language, then calls [onDone] (on the main thread). */
    fun speakParts(parts: List<Part>, onDone: (() -> Unit)?) {
        main.post {
            val wanted = parts.filter { it.text.isNotBlank() }
            if (wanted.isEmpty()) {
                pending = null
                stopNow()
                onDone?.invoke()
            } else if (!ready) {
                pending = wanted to onDone
            } else {
                speakNow(wanted, onDone)
            }
        }
    }

    fun shutdown() {
        main.removeCallbacksAndMessages(null)
        tts.stop()
        tts.shutdown()
    }

    private fun stopNow() {
        lastId = null
        onFinished = null
        if (ready) tts.stop()
    }

    private fun speakNow(parts: List<Part>, onDone: (() -> Unit)?) {
        stopNow()
        batch++
        var n = 0
        var id: String? = null
        for (part in parts) {
            applyVoice(part.lang)
            for (piece in chunk(part.text, TextToSpeech.getMaxSpeechInputLength() - 1)) {
                id = "alldic-$batch-$n"
                tts.speak(piece, if (n == 0) TextToSpeech.QUEUE_FLUSH else TextToSpeech.QUEUE_ADD, null, id)
                n++
            }
        }
        lastId     = id
        onFinished = onDone
    }

    private fun finished(utteranceId: String?) {
        if (utteranceId == null || utteranceId != lastId) return
        val done = onFinished
        lastId = null
        onFinished = null
        if (done != null) main.post(done)
    }

    // Picked again for every part so a network voice is never chosen while offline.
    private fun applyVoice(lang: String) {
        val target = localeFor(lang)
        if (target.language != "en" && applyVoiceFor(target)) return
        applyEnglishVoice()
    }

    /** A voice for [target] other than English; false when the phone has none. */
    private fun applyVoiceFor(target: Locale): Boolean {
        val language = iso3(target) ?: return false
        val matching = installedVoices().filter { iso3(it.locale) == language }
        val offline  = matching.filter { !it.isNetworkConnectionRequired }
        val pool     = offline.ifEmpty { if (NetworkUtils.isOnline(appContext)) matching else emptyList() }
        val voice    = pool.maxByOrNull { (if (isMale(it)) 2 else 0) + (if (it.locale.country == target.country) 1 else 0) }
        if (BuildConfig.DEBUG) Log.d(TAG, "${target.toLanguageTag()} voices=${matching.map { it.name }} chosen=${voice?.name}")

        if (voice != null) {
            tts.voice = voice
            tts.setPitch(if (isMale(voice)) MALE_PITCH else 1f)
            return true
        }
        // Some engines list no voices but still speak the language
        if (tts.isLanguageAvailable(target) >= TextToSpeech.LANG_AVAILABLE) {
            tts.setLanguage(target)
            tts.setPitch(1f)
            return true
        }
        return false
    }

    private fun applyEnglishVoice() {
        val installed = installedVoices().filter { it.locale.language == "en" }
        val males   = installed.filter(::isMale)
        val offline = males.filter { !it.isNetworkConnectionRequired }
        val pool    = offline.ifEmpty { if (NetworkUtils.isOnline(appContext)) males else emptyList() }
        val voice   = pool.maxByOrNull(::englishRank)
        if (BuildConfig.DEBUG) Log.d(TAG, "en male voices=${males.map { it.name }} chosen=${voice?.name}")

        if (voice != null) {
            tts.voice = voice
            tts.setPitch(MALE_PITCH)
        } else {
            // No male voice on this phone: use the engine's English voice, deepened.
            if (tts.setLanguage(Locale.UK) < TextToSpeech.LANG_AVAILABLE) tts.setLanguage(Locale.US)
            tts.setPitch(FALLBACK_PITCH)
        }
    }

    private fun installedVoices(): List<Voice> = try {
        tts.voices.orEmpty().filter {
            !it.features.orEmpty().contains(TextToSpeech.Engine.KEY_FEATURE_NOT_INSTALLED)
        }
    } catch (e: Exception) {
        emptyList()
    }

    // The web app speaks Google Translate codes: "fr", "zh-CN", "bem". Where a code
    // names no country, the region the website's own voice list prefers is used.
    private fun localeFor(lang: String): Locale {
        val tag = PREFERRED_REGION[lang] ?: lang
        return Locale.forLanguageTag(tag).takeIf { it.language.isNotEmpty() } ?: Locale.UK
    }

    // Compared as ISO-639-2 so old and new codes match (he / iw, id / in)
    private fun iso3(locale: Locale): String? = try {
        locale.isO3Language.takeIf { it.isNotEmpty() }
    } catch (e: MissingResourceException) {
        locale.language.takeIf { it.isNotEmpty() }
    }

    private fun isMale(v: Voice): Boolean {
        val name  = v.name.lowercase(Locale.ROOT)
        val feats = v.features.orEmpty().joinToString(" ").lowercase(Locale.ROOT)
        if ("female" in name || "female" in feats) return false
        if (KNOWN_MALE_VOICES.any { name.startsWith(it) }) return true
        if (SAMSUNG_MALE.containsMatchIn(name)) return true
        return MALE_WORD.containsMatchIn(name) || MALE_WORD.containsMatchIn(feats)
    }

    // The website's online voice is "UK English Male", so British voices come first.
    private fun englishRank(v: Voice): Int = when (v.locale.country.uppercase(Locale.ROOT)) {
        "GB" -> 3
        "US" -> 2
        else -> 1
    }

    private fun chunk(text: String, max: Int): List<String> {
        if (text.length <= max) return listOf(text)
        val out = mutableListOf<String>()
        val sb  = StringBuilder()
        for (sentence in SENTENCE.findAll(text).map { it.value }) {
            if (sb.length + sentence.length > max && sb.isNotEmpty()) {
                out += sb.toString(); sb.clear()
            }
            if (sentence.length > max) {
                sentence.chunked(max).forEach { out += it }
            } else {
                sb.append(sentence)
            }
        }
        if (sb.isNotEmpty()) out += sb.toString()
        return out
    }

    companion object {
        private const val TAG            = "DeviceTts"
        private const val SPEECH_RATE    = 0.9f
        private const val MALE_PITCH     = 0.85f
        private const val FALLBACK_PITCH = 0.7f

        // Same first choices as js/speak.js uses in browsers
        private val PREFERRED_REGION = mapOf(
            "en" to "en-GB", "fr" to "fr-FR", "pt" to "pt-PT", "es" to "es-ES",
            "sw" to "sw-KE", "zu" to "zu-ZA", "de" to "de-DE", "it" to "it-IT",
            "ar" to "ar-SA", "hi" to "hi-IN", "zh" to "zh-CN", "ja" to "ja-JP",
            "ko" to "ko-KR", "ru" to "ru-RU", "tr" to "tr-TR",
        )

        // Google Speech Services male voices
        private val KNOWN_MALE_VOICES = listOf(
            "en-gb-x-rjs", "en-gb-x-gbd", "en-gb-x-gbb",
            "en-us-x-iom", "en-us-x-tpd", "en-us-x-iol",
            "en-au-x-aub", "en-au-x-aud", "en-in-x-end",
        )
        private val SAMSUNG_MALE = Regex("smtm\\d")
        private val MALE_WORD    = Regex("(^|[^a-z])male")
        private val SENTENCE     = Regex("[^.!?\\n]+[.!?\\n]*|[.!?\\n]+")
    }
}
