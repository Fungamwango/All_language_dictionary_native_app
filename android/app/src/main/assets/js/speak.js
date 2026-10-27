/* Language-aware text-to-speech for dictionary entries.
 *
 * Every entry mixes two languages: the English word and example, and the same in
 * the chosen language. Reading the whole thing with one voice is what made this
 * sound wrong — sage-js's speak() never sets `utterance.lang`, so the browser
 * used its default (usually English) for French, Zulu, Swahili and the rest.
 *
 * This splits an entry into its parts, tags each with the right language, picks a
 * voice actually installed for it, and speaks them in order.
 */
(function (global) {
  'use strict';

  var doc = global.document;
  var synth = global.speechSynthesis;

  /* ---- language codes -------------------------------------------------- */

  // Google Translate codes are not always valid BCP-47 tags, and voice
  // availability varies by platform, so each language lists its preferences
  // best-first. The bare code is included last as a catch-all.
  var LOCALES = {
    fr: ['fr-FR', 'fr-CA', 'fr'],
    pt: ['pt-PT', 'pt-BR', 'pt'],
    es: ['es-ES', 'es-US', 'es-MX', 'es'],
    sw: ['sw-KE', 'sw-TZ', 'sw'],
    zu: ['zu-ZA', 'zu'],
    ny: ['ny-MW', 'ny'],
    bem: ['bem-ZM', 'bem'],
    de: ['de-DE', 'de'],
    it: ['it-IT', 'it'],
    nl: ['nl-NL', 'nl'],
    pl: ['pl-PL', 'pl'],
    ru: ['ru-RU', 'ru'],
    ar: ['ar-SA', 'ar-EG', 'ar'],
    hi: ['hi-IN', 'hi'],
    zh: ['zh-CN', 'zh-Hans', 'zh'],
    'zh-CN': ['zh-CN', 'zh-Hans', 'zh'],
    'zh-TW': ['zh-TW', 'zh-Hant', 'zh'],
    ja: ['ja-JP', 'ja'],
    ko: ['ko-KR', 'ko'],
    tr: ['tr-TR', 'tr'],
    en: ['en-GB', 'en-US', 'en']
  };

  function localesFor(code) {
    if (!code) return ['en-GB', 'en-US', 'en'];
    if (LOCALES[code]) return LOCALES[code];
    // Unlisted language: try the code as-is, then its base ("pt-BR" -> "pt").
    var base = String(code).split('-')[0];
    return code === base ? [code] : [code, base];
  }

  /* ---- ResponsiveVoice ------------------------------------------------- */

  // api/api.js loads ResponsiveVoice, whose voices sound considerably better
  // than the built-in browser ones, so it is preferred wherever it covers the
  // language. It has no voice for most African languages, and those fall back
  // to the Web Speech API rather than being read in an English accent.
  var RV_VOICES = {
    en: 'UK English Male',
    fr: 'French Male',
    es: 'Spanish Male',
    pt: 'Brazilian Portuguese Female',
    de: 'Deutsch Male',
    it: 'Italian Male',
    nl: 'Dutch Male',
    pl: 'Polish Male',
    ru: 'Russian Male',
    ar: 'Arabic Male',
    hi: 'Hindi Male',
    ja: 'Japanese Male',
    ko: 'Korean Male',
    tr: 'Turkish Male',
    sv: 'Swedish Male',
    da: 'Danish Female',
    fi: 'Finnish Female',
    no: 'Norwegian Male',
    el: 'Greek Female',
    cs: 'Czech Female',
    hu: 'Hungarian Female',
    ro: 'Romanian Female',
    th: 'Thai Male',
    vi: 'Vietnamese Male',
    id: 'Indonesian Male',
    hy: 'Armenian Male',
    ca: 'Catalan Male',
    sq: 'Albanian Male',
    sr: 'Serbian Male',
    sk: 'Slovak Female',
    ta: 'Tamil Male',
    he: 'Hebrew Female',
    af: 'Afrikaans Man',
    'zh-CN': 'Chinese Male',
    'zh-TW': 'Chinese Taiwan Female',
    zh: 'Chinese Male'
  };

  function rv() {
    var r = global.responsiveVoice;
    return (r && typeof r.speak === 'function' && typeof r.voiceSupport === 'function' && r.voiceSupport()) ? r : null;
  }

  var RV_DEFAULT = 'UK English Male';

  // The ResponsiveVoice voice name for a language. Languages ResponsiveVoice
  // does not cover fall back to its English voice rather than to the browser's
  // own default, which is a poor-sounding generic on most devices — so the
  // audio quality stays consistent even where the accent cannot be right.
  function rvVoiceFor(code) {
    if (!code) return RV_DEFAULT;
    if (RV_VOICES[code]) return RV_VOICES[code];
    var base = String(code).split('-')[0];
    return RV_VOICES[base] || RV_DEFAULT;
  }

  // True only when ResponsiveVoice has a voice genuinely in this language.
  function rvHasLanguage(code) {
    if (!code) return true;
    if (RV_VOICES[code]) return true;
    return !!RV_VOICES[String(code).split('-')[0]];
  }

  /* ---- voices ---------------------------------------------------------- */

  // getVoices() is empty until the engine has loaded them, and fires
  // `voiceschanged` when ready. Chrome also needs a nudge on first call.
  var _voices = [];

  function refreshVoices() {
    try { _voices = synth.getVoices() || []; } catch (e) { _voices = []; }
    return _voices;
  }

  function whenVoicesReady(cb) {
    if (refreshVoices().length) { cb(_voices); return; }
    var done = false;
    function fire() {
      if (done) return;
      if (refreshVoices().length) { done = true; cb(_voices); }
    }
    try { synth.addEventListener('voiceschanged', fire); } catch (e) {}
    // Some engines never fire the event; poll briefly, then continue regardless
    // so a missing event cannot silence the button.
    var tries = 0;
    var t = setInterval(function () {
      tries++;
      fire();
      if (done || tries > 20) { clearInterval(t); if (!done) { done = true; cb(_voices); } }
    }, 100);
  }

  // Best installed voice for a language, or null if the device has none.
  function pickVoice(code) {
    var wanted = localesFor(code);
    var voices = refreshVoices();
    for (var i = 0; i < wanted.length; i++) {
      var tag = wanted[i].toLowerCase();
      // Exact tag first.
      for (var j = 0; j < voices.length; j++) {
        if ((voices[j].lang || '').toLowerCase().replace('_', '-') === tag) return voices[j];
      }
      // Then any voice in that language family ("fr" matches "fr-CH").
      for (var k = 0; k < voices.length; k++) {
        var vl = (voices[k].lang || '').toLowerCase().replace('_', '-');
        if (vl.split('-')[0] === tag.split('-')[0]) return voices[k];
      }
    }
    return null;
  }

  function hasVoiceFor(code) { return !!pickVoice(code); }

  /* ---- speaking -------------------------------------------------------- */

  var _queue = [];
  var _speaking = false;
  var _onFinish = null;

  function stop() {
    _queue = [];
    _speaking = false;
    // Both engines may be mid-sentence; cancel whichever is running.
    var r = rv();
    if (r) { try { r.cancel(); } catch (e) {} }
    try { synth.cancel(); } catch (e) {}
  }

  function pause() {
    var r = rv();
    if (r && typeof r.pause === 'function') { try { r.pause(); } catch (e) {} }
    try { synth.pause(); } catch (e) {}
  }

  function resume() {
    var r = rv();
    if (r && typeof r.resume === 'function') { try { r.resume(); } catch (e) {} }
    try { synth.resume(); } catch (e) {}
  }

  function next() {
    if (!_queue.length) {
      _speaking = false;
      if (_onFinish) { var f = _onFinish; _onFinish = null; f(); }
      return;
    }
    var part = _queue.shift();

    // ResponsiveVoice first — it sounds better than the browser engine, and
    // each part gets its own voice, so the English half and the target half are
    // both read properly instead of one language winning the whole entry.
    //
    // The one case where the browser wins: ResponsiveVoice has no voice for
    // this language but the device genuinely does (a real Swahili or Zulu voice
    // on some Androids). A real voice in the right language beats an English
    // one; otherwise ResponsiveVoice's English is used, per RV_DEFAULT.
    var r = rv();
    var rvName = r ? rvVoiceFor(part.lang) : null;
    if (r && !rvHasLanguage(part.lang) && hasVoiceFor(part.lang)) {
      speakNative(part);
      return;
    }
    if (r && rvName) {
      try {
        r.speak(part.text, rvName, {
          rate: 0.95, pitch: 1, volume: 1,
          onend: next,
          onerror: function () { speakNative(part); }   // fall back, don't drop it
        });
        return;
      } catch (e) { /* fall through to the browser engine */ }
    }
    speakNative(part);
  }

  // Web Speech API fallback: used when ResponsiveVoice is absent, offline, or
  // has no voice for this language (most African languages).
  function speakNative(part) {
    var u = new SpeechSynthesisUtterance(part.text);
    var voice = pickVoice(part.lang);
    // Always set `lang` even when no voice matched — some engines can still
    // apply the right pronunciation rules from the tag alone.
    var tags = localesFor(part.lang);
    u.lang = voice ? voice.lang : tags[0];
    if (voice) u.voice = voice;
    u.rate = 0.95;                 // dictionary entries are for learning
    u.onend = next;
    u.onerror = next;              // never strand the queue on one bad part
    try { synth.speak(u); } catch (e) { next(); }
  }

  // parts: [{ text, lang }] spoken in order.
  function speakParts(parts, onFinish) {
    // ResponsiveVoice alone is enough, so this only bails when neither engine
    // is available.
    if (!rv() && (!synth || !global.SpeechSynthesisUtterance)) return false;
    stop();
    _queue = parts.filter(function (p) { return p && p.text && p.text.trim(); });
    if (!_queue.length) return false;
    _onFinish = onFinish || null;
    _speaking = true;
    whenVoicesReady(function () { next(); });
    return true;
  }

  /* ---- reading an entry off the page ---------------------------------- */

  function clean(s) {
    return (s || '').replace(/&gt;/g, '>').replace(/>>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  // Strips the "English>>" / "French>>" label so it is not read aloud.
  function bodyOf(el) {
    if (!el) return '';
    var c = el.cloneNode(true);
    var label = c.querySelector('span');
    if (label) label.parentNode.removeChild(label);
    return clean(c.textContent);
  }

  // Builds the spoken sequence for the entry currently on screen: the English
  // word, its translation, then both example sentences — each in its own voice.
  function entryParts(root) {
    root = root || doc.getElementById('append_list');
    if (!root) return [];
    var code = (global.AllDic && AllDic.code()) || 'en';

    var word = root.querySelector('.english_word');
    var head = root.querySelector('.target_text, [class$="_text"]');
    var eng = root.querySelector('.in_english');
    var tgt = root.querySelector('.in_target, [class^="in_"]:not(.in_english)');

    var parts = [];
    if (word) parts.push({ text: clean(word.textContent), lang: 'en' });
    if (head) {
      var h = clean(head.textContent);
      // Skip the placeholder while a live translation is still loading.
      if (h && h !== '—' && h.indexOf('Translating') === -1) parts.push({ text: h, lang: code });
    }
    if (eng) parts.push({ text: bodyOf(eng), lang: 'en' });
    if (tgt) {
      var t = bodyOf(tgt);
      if (t && t.indexOf('Translating') === -1 && t.indexOf('unavailable') === -1) {
        parts.push({ text: t, lang: code });
      }
    }
    return parts;
  }

  function speakEntry(onFinish) {
    return speakParts(entryParts(), onFinish);
  }

  global.AllDicSpeak = {
    speakEntry: speakEntry,
    speakParts: speakParts,
    entryParts: entryParts,
    pickVoice: pickVoice,
    hasVoiceFor: hasVoiceFor,
    localesFor: localesFor,
    whenVoicesReady: whenVoicesReady,
    refreshVoices: refreshVoices,
    stop: stop,
    pause: pause,
    resume: resume,
    isSpeaking: function () { return _speaking; },
    supported: !!(rv() || (synth && global.SpeechSynthesisUtterance)),
    usingResponsiveVoice: function () { return !!rv(); },
    rvVoiceFor: rvVoiceFor,
    rvHasLanguage: rvHasLanguage
  };
})(window);
