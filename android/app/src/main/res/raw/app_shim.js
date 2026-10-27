/* All Languages Dictionary — Android app additions to the web page.
 *
 * Served by the app at /__app/shim.js; OfflineCache adds the <script> tag at the
 * top of <head> in index.html, whether the page came from the network, the
 * offline cache or the copy bundled in the APK. The website itself is untouched.
 *
 *  1. Offline, everything that only works online is hidden (AI tutor, translator,
 *     Google Translate search, payments, sharing, outside links, image ads) and
 *     comes back by itself as soon as the phone is online again.
 *  2. Offline, the language picker lists only the languages whose dictionary
 *     ships with the app: the others are translated live. Opening the app
 *     offline with one of those others chosen shows the picker straight away.
 *  3. The ▶️ button reads each half of an entry in its own language with the
 *     phone's voices (window.Kodular.speakParts, see KodularBridge.kt).
 */
(function (w, d) {
  'use strict';
  if (w.__alldicApp) return;
  w.__alldicApp = true;

  var root = d.documentElement;

  /* ---- 1. online-only UI ---------------------------------------------- */

  var ONLINE_ONLY = [
    '#tutor-link', '#tutor-section',                 // Ask: AI tutor
    '#home-ai-widget',                               // "Learn anything", offers buttons
    '#posts-feed-section',                           // translator card (Google Translate)
    '#bemdic-api',                                   // image ads
    '#bemdic-upgrade-bar',                           // "Get Unlimited" (payment)
    '#bemdic-gt-fallback', '#bemdic-gt-dir',         // search via Google Translate
    '#invite-link', '#install-btn',                  // share, install
    '[onclick*="online_dictionary_url"]', '[onclick*="download_dictionary_url"]',
    '.alldic-online-only', '#lang-list .alldic-remote'
  ];

  var style = d.createElement('style');
  style.id = 'alldic-app-css';
  style.textContent =
    ONLINE_ONLY.map(function (s) { return 'html.alldic-offline ' + s; }).join(',') +
      '{display:none !important}' +
    // Outside links in the footer stay readable as plain text
    'html.alldic-offline footer a{pointer-events:none;color:inherit !important;text-decoration:none}' +
    '#alldic-offline-note{display:none;padding:6px 12px 12px;color:#80868b;font-size:13px;line-height:1.45}' +
    'html.alldic-offline #alldic-offline-note{display:list-item;list-style:none}' +
    'html.alldic-offline #lang-list li.lang-group:first-child::after{content:" \\2014  work offline"}';
  (d.head || root).appendChild(style);

  function visible(el) {
    return !!el && getComputedStyle(el).display !== 'none' && el.getClientRects().length > 0;
  }

  function syncOnline() {
    var offline = !navigator.onLine;
    // Going offline inside the AI tutor would leave an empty screen: go home first
    if (offline && visible(d.getElementById('tutor-section')) && typeof w.showDictionaryView === 'function') {
      w.showDictionaryView();
    }
    root.classList.toggle('alldic-offline', offline);
  }
  syncOnline();
  w.addEventListener('online', syncOnline);
  w.addEventListener('offline', syncOnline);

  // Items api.js adds to the More menu without an id
  var MORE_ONLINE = /Get Unlimited|Learn anything/i;

  function mark() {
    var items = d.querySelectorAll('#more-links-wrapper > li:not(.alldic-seen)');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add('alldic-seen');
      if (MORE_ONLINE.test(items[i].textContent || '')) items[i].classList.add('alldic-online-only');
    }

    /* ---- 2. language picker ------------------------------------------- */
    // The picker re-renders the whole list on every search keystroke
    var list = d.getElementById('lang-list');
    if (!list) return;
    var rows = list.querySelectorAll('li.lang-opt:not(.alldic-seen)');
    if (!rows.length) return;
    for (var r = 0; r < rows.length; r++) {
      rows[r].classList.add('alldic-seen');
      if (rows[r].querySelector('.lang-tag.ai')) rows[r].classList.add('alldic-remote');
    }
    var groups = list.querySelectorAll('li.lang-group');
    for (var g = 0; g < groups.length; g++) {
      if (/other/i.test(groups[g].textContent || '') && !d.getElementById('alldic-offline-note')) {
        groups[g].classList.add('alldic-remote');
        var note = d.createElement('li');
        note.id = 'alldic-offline-note';
        note.textContent = 'You are offline. Connect to the internet to use ' +
          list.querySelectorAll('.lang-tag.ai').length + ' more languages.';
        groups[g].parentNode.insertBefore(note, groups[g].nextSibling);
      }
    }
  }

  new MutationObserver(mark).observe(root, { childList: true, subtree: true });

  /* ---- 3. speech in each language --------------------------------------- */

  d.addEventListener('DOMContentLoaded', function () {
    mark();

    // Offline with a language that is only translated live: offer the ones that work
    if (!navigator.onLine && w.AllDic && AllDic.active() && !AllDic.isLocal() && w.AllDicUI) {
      setTimeout(function () { AllDicUI.openPicker(true); }, 0);
    }

    var original = w.playEntryAudio;
    var bridge = w.Kodular;
    if (typeof original !== 'function' || !bridge || typeof bridge.speakParts !== 'function') return;

    w.playEntryAudio = function () {
      if (!w.AllDicSpeak) return original.apply(this, arguments);
      var $ = w.jQuery;
      show('#speak-wait');
      hide('#speak-play-icon');
      show('#speak-pause-icon');
      // Called by the app when it has finished reading
      w.__alldicSpeakDone = function () {
        hide('#speak-pause-icon');
        show('#speak-play-icon');
        $('#speak-wait').hide('slow');
      };
      bridge.speakParts(JSON.stringify(w.AllDicSpeak.entryParts()));
      setTimeout(function () { $('#speak-wait').hide('slow'); }, 600);
    };
  });
})(window, document);
