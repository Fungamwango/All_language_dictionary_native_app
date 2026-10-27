/* Language onboarding modal, the always-visible top selector, and the loader
 * that pulls in the right dictionary file for the chosen language.
 *
 * Load order matters: js/lang.js, then this file, then the page's own scripts.
 * Nothing here depends on jQuery so it can run before the rest of the app.
 */
(function (global) {
  'use strict';

  var AllDic = global.AllDic;
  if (!AllDic) return;

  var doc = global.document;

  /* ---- styles ---------------------------------------------------------- */

  function injectStyles() {
    if (doc.getElementById('alldic-lang-css')) return;
    var s = doc.createElement('style');
    s.id = 'alldic-lang-css';
    s.textContent = [
      // Sits in the same <ul> as Home/Quiz/Ask/More. The nav's own li padding is
      // sized for text links and leaves a wide gap either side of a pill that
      // already carries its own padding, so the horizontal padding is trimmed
      // while the 5px vertical is kept — that keeps this li the same height as
      // its siblings, which is what lets vertical-align:middle centre the pill
      // on exactly their optical centre.
      '#lang-switch-host{display:inline !important;padding:5px 2px !important;margin:0 !important;}',
      '#lang-switch{display:inline-flex;align-items:center;vertical-align:middle;gap:4px;cursor:pointer;',
      'background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.3);color:#fff;',
      'padding:2px 8px;border-radius:12px;font-size:13px;line-height:1.5;',
      'white-space:nowrap;max-width:46vw;overflow:hidden;text-overflow:ellipsis;}',
      '#lang-switch:hover{background:rgba(255,255,255,.24);}',
      '#lang-switch .lang-globe{font-size:13px;}',
      '#lang-switch .lang-caret{font-size:8px;opacity:.85;}',

      '#lang-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:100000;display:flex;',
      'align-items:center;justify-content:center;padding:16px;}',
      '#lang-panel{background:#fff;color:#202124;border-radius:14px;width:100%;max-width:460px;',
      'max-height:88vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,.35);}',
      '#lang-panel h2{margin:0;padding:18px 20px 6px;font-size:19px;font-weight:600;}',
      '#lang-panel .lang-sub{padding:0 20px 12px;font-size:13px;color:#5f6368;line-height:1.45;}',
      '#lang-search{margin:0 20px 12px;padding:10px 12px;border:1px solid #dadce0;border-radius:8px;',
      'font-size:14px;outline:none;width:calc(100% - 40px);box-sizing:border-box;}',
      '#lang-search:focus{border-color:#1a73e8;}',
      '#lang-list{overflow-y:auto;padding:0 10px 12px;margin:0;list-style:none;}',
      '#lang-list .lang-group{padding:10px 10px 6px;font-size:11px;font-weight:700;letter-spacing:.08em;',
      'text-transform:uppercase;color:#80868b;}',
      '#lang-list li.lang-opt{display:flex;align-items:center;justify-content:space-between;gap:10px;',
      'padding:11px 12px;border-radius:8px;cursor:pointer;font-size:15px;}',
      '#lang-list li.lang-opt:hover{background:#f1f3f4;}',
      '#lang-list li.lang-opt.is-active{background:#e8f0fe;font-weight:600;}',
      '#lang-list .lang-native{color:#5f6368;font-size:12px;font-weight:400;}',
      '#lang-list .lang-tag{font-size:10px;font-weight:700;letter-spacing:.04em;padding:3px 7px;border-radius:10px;',
      'text-transform:uppercase;white-space:nowrap;}',
      '#lang-list .lang-tag.full{background:#e6f4ea;color:#137333;}',
      '#lang-list .lang-tag.ai{background:#fef7e0;color:#b06000;}',
      '#lang-empty{padding:18px;text-align:center;color:#80868b;font-size:14px;}',
      '#lang-close{position:absolute;top:10px;right:14px;font-size:22px;color:#5f6368;cursor:pointer;',
      'background:none;border:none;line-height:1;}',
      '#lang-panel .lang-head{position:relative;}',

      /* Inline loader shown while a word is being translated live. Matches the
         ring api/api.js already uses for "Generating AI example", but carries its
         own keyframes so it spins even if that file has not loaded yet. */
      '@keyframes alldic-spin{to{transform:rotate(360deg)}}',
      '.alldic-spin{display:inline-block;width:13px;height:13px;border:2px solid #c5d9f8;',
      'border-top-color:#1a73e8;border-radius:50%;animation:alldic-spin .8s linear infinite;',
      'vertical-align:-2px;flex-shrink:0;}',
      '.alldic-loading{display:inline-flex;align-items:center;gap:7px;color:#1a73e8;font-style:italic;}',
      /* Keeps the headword from collapsing to zero width while it loads. */
      '.alldic-head-loading{display:inline-block;min-width:20px;}',
      '.alldic-failed{color:#c0392b;font-style:italic;}'
    ].join('');
    doc.head.appendChild(s);
  }

  /* ---- picker ---------------------------------------------------------- */

  var _overlay = null;

  function closePicker() {
    if (_overlay && _overlay.parentNode) _overlay.parentNode.removeChild(_overlay);
    _overlay = null;
  }

  // `dismissable` is false during onboarding — a language must be chosen before
  // the dictionary can load at all.
  function openPicker(dismissable) {
    injectStyles();
    closePicker();

    var current = AllDic.active();
    var langs = AllDic.all();

    _overlay = doc.createElement('div');
    _overlay.id = 'lang-overlay';

    var panel = doc.createElement('div');
    panel.id = 'lang-panel';
    panel.innerHTML =
      '<div class="lang-head">' +
        (dismissable ? '<button id="lang-close" aria-label="Close">&times;</button>' : '') +
        '<h2>' + (dismissable ? 'Change language' : 'Choose your language') + '</h2>' +
        '<div class="lang-sub">Pick the language you want English translated into. ' +
        'You can change it any time from the top of the page.</div>' +
      '</div>' +
      '<input id="lang-search" type="text" placeholder="Search languages…" autocomplete="off">' +
      '<ul id="lang-list"></ul>';

    _overlay.appendChild(panel);
    doc.body.appendChild(_overlay);

    var list = panel.querySelector('#lang-list');
    var search = panel.querySelector('#lang-search');

    function render(filter) {
      var q = (filter || '').trim().toLowerCase();
      var match = langs.filter(function (l) {
        return !q || l.label.toLowerCase().indexOf(q) !== -1 || l.native.toLowerCase().indexOf(q) !== -1;
      });
      var locals = match.filter(function (l) { return l.local; });
      var others = match.filter(function (l) { return !l.local; });

      var html = '';
      if (locals.length) {
        html += '<li class="lang-group">Full dictionaries</li>';
        locals.forEach(function (l) { html += row(l); });
      }
      if (others.length) {
        html += '<li class="lang-group">All other languages</li>';
        others.forEach(function (l) { html += row(l); });
      }
      list.innerHTML = html || '<li id="lang-empty">No language matches that search.</li>';
    }

    function row(l) {
      var isActive = current && current.id === l.id;
      var native = l.native && l.native !== l.label ? ' <span class="lang-native">' + esc(l.native) + '</span>' : '';
      return '<li class="lang-opt' + (isActive ? ' is-active' : '') + '" data-id="' + esc(l.id) + '">' +
             '<span>' + esc(l.label) + native + '</span>' +
             '<span class="lang-tag ' + (l.local ? 'full">Full' : 'ai">AI') + '</span></li>';
    }

    render('');
    search.addEventListener('input', function () { render(search.value); });

    list.addEventListener('click', function (e) {
      var li = e.target.closest ? e.target.closest('li.lang-opt') : null;
      if (!li) return;
      var id = li.getAttribute('data-id');
      if (current && current.id === id) { closePicker(); return; }
      AllDic.setActive(id);      // reloads the page onto the new dictionary
    });

    if (dismissable) {
      panel.querySelector('#lang-close').addEventListener('click', closePicker);
      _overlay.addEventListener('click', function (e) { if (e.target === _overlay) closePicker(); });
    }

    setTimeout(function () { try { search.focus(); } catch (e) {} }, 50);
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---- top selector ---------------------------------------------------- */

  function mountSwitch() {
    injectStyles();
    var host = doc.getElementById('lang-switch-host');
    if (!host || doc.getElementById('lang-switch')) return;
    var btn = doc.createElement('div');
    btn.id = 'lang-switch';
    btn.title = 'Change language';
    btn.innerHTML = '<span class="lang-globe">🌐</span><span id="lang-current">' +
                    esc(AllDic.label()) + '</span><span class="lang-caret">▼</span>';
    btn.addEventListener('click', function () { openPicker(true); });
    host.appendChild(btn);
  }

  /* ---- dictionary loading --------------------------------------------- */

  function markReady() {
    global.__bemdic_dict_loaded = true;
    if (global.__bemdic_dict_ready) global.__bemdic_dict_ready();
  }

  // Languages without a built dictionary file still browse, search and quiz over
  // the same ~5,286 words as the built-in ones: dictionary/english_words.js
  // carries the reference's English words and worked examples, and only the
  // target-language line is produced live. Starting from an empty dictionary
  // would leave these languages with nothing to show.
  function loadRemoteMode() {
    global.__alldic_remote = true;
    var s = doc.createElement('script');
    s.src = 'dictionary/english_words.js';
    s.onload = function () { buildRemoteDictionary(); markReady(); };
    s.onerror = function () {
      console.warn('[alldic] english_words.js missing — falling back to live lookup only');
      if (typeof global.dictionary === 'undefined') global.dictionary = {};
      markReady();
    };
    doc.head.appendChild(s);
  }

  // Each entry keeps the curated English side and leaves the target side marked
  // pending; fillPending() below fills it in when the entry is actually shown,
  // so one visit costs a handful of translations rather than 5,286.
  function buildRemoteDictionary() {
    var src = global.englishWords || {};
    var lang = AllDic.label();
    var out = {};
    Object.keys(src).forEach(function (word) {
      var id = word.replace(/\s+/g, '_');
      out[word] =
        '<span id=' + id + ' class="' + AllDic.CLASS_TEXT + ' alldic-head-loading" data-pending="' + word + '">' +
          '<span class="alldic-spin"></span></span>' +
        ' <div class=in_english><span>English&gt;&gt;</span> ' + src[word] + '</div>' +
        '<div class="' + AllDic.CLASS_BLOCK + '" data-pending="' + word + '">' +
          '<span>' + lang + '&gt;&gt;</span> ' +
          '<span class="alldic-loading"><span class="alldic-spin"></span>Translating…</span></div>';
    });
    global.dictionary = out;
  }

  /* ---- on-demand translation for remote languages ---------------------- */

  var _pendingCache = {};

  function gtLines(lines, cb) {
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='
            + AllDic.code() + '&dt=t&q=' + encodeURIComponent(lines.join('\n'));
    fetch(url).then(function (r) { return r.json(); }).then(function (d) {
      var joined = (d && d[0]) ? d[0].map(function (s) { return s[0] || ''; }).join('') : '';
      var parts = joined.split('\n').map(function (s) { return s.trim(); });
      cb(parts.length === lines.length ? parts : null);
    }).catch(function () { cb(null); });
  }

  // Fills every visible placeholder. The headword and its example go out as one
  // batched request, and the result is cached so paging back to a word is free.
  function fillPending(root) {
    var nodes = (root || doc).querySelectorAll('[data-pending]');
    if (!nodes.length) return;

    var words = [];
    for (var i = 0; i < nodes.length; i++) {
      var w = nodes[i].getAttribute('data-pending');
      if (words.indexOf(w) === -1) words.push(w);
    }

    words.forEach(function (word) {
      if (_pendingCache[word]) { applyFill(word, _pendingCache[word]); return; }

      var src = (global.englishWords || {})[word] || '';
      var sentence = src.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      var boldMatch = src.match(/<b>([\s\S]*?)<\/b>/i);
      var bold = boldMatch ? boldMatch[1].replace(/<[^>]+>/g, '').trim() : word;

      gtLines([word, sentence, bold], function (res) {
        if (!res) {
          // Without this the ring would spin for ever on a dropped request.
          // The entry is left retryable: no cache entry is written, so simply
          // navigating back to the word tries again.
          applyFailure(word);
          return;
        }
        var filled = { head: res[0], sentence: res[1], bold: res[2] };
        _pendingCache[word] = filled;
        applyFill(word, filled);
      });
    });
  }

  // Stops the spinner and says so, rather than leaving it turning. The English
  // side of the entry is already on screen, so the word is still usable.
  function applyFailure(word) {
    var nodes = doc.querySelectorAll('[data-pending="' + cssEscape(word) + '"]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.classList.contains(AllDic.CLASS_TEXT)) {
        el.innerHTML = '<span class="alldic-failed">—</span>';
        el.classList.remove('alldic-head-loading');
      } else {
        el.innerHTML = '<span>' + AllDic.label() + '&gt;&gt;</span> ' +
          '<span class="alldic-failed">Translation unavailable — check your connection.</span>';
      }
      el.removeAttribute('data-pending');
    }
  }

  function applyFill(word, filled) {
    var nodes = doc.querySelectorAll('[data-pending="' + cssEscape(word) + '"]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.classList.contains(AllDic.CLASS_TEXT)) {
        el.textContent = filled.head;
        el.classList.remove('alldic-head-loading');   // drop the reserved width
      } else {
        // Re-mark the translated headword inside the translated sentence, so the
        // target line highlights the same word the English line does.
        var body = filled.sentence;
        if (filled.bold) {
          var idx = body.toLowerCase().indexOf(filled.bold.toLowerCase());
          if (idx !== -1) {
            body = body.slice(0, idx) + '<b>' + body.slice(idx, idx + filled.bold.length) +
                   '</b>' + body.slice(idx + filled.bold.length);
          }
        }
        el.innerHTML = '<span>' + AllDic.label() + '&gt;&gt;</span> ' + body;
      }
      el.removeAttribute('data-pending');
    }
  }

  function cssEscape(s) {
    return String(s).replace(/["\\]/g, '\\$&');
  }

  // The app swaps entries into #append_list directly, so watching it is simpler
  // and more reliable than hooking each of the render paths.
  function watchForPending() {
    var target = doc.getElementById('append_list');
    if (!target || !global.MutationObserver) return;
    fillPending(target);
    new MutationObserver(function () { fillPending(target); })
      .observe(target, { childList: true, subtree: true });
  }

  function loadLocal(def) {
    var s = doc.createElement('script');
    s.src = def.file;
    s.onload = markReady;
    s.onerror = function () {
      // The file may not be generated yet — degrade to live translation rather
      // than leaving the page stuck on "Loading data...".
      console.warn('[alldic] no local dictionary for ' + def.label + ', using live translation');
      loadRemoteMode();
    };
    doc.head.appendChild(s);
  }

  /* ---- sign-up off, visits still counted ------------------------------- */

  // Member sign-up is switched off for this release and no user accounts are
  // created — the language picker below is what greets a first-time visitor in
  // its place. Registration calls are stopped here rather than in api/api.js so
  // that file stays untouched and the feature can be turned back on by deleting
  // this block (the server also refuses /api/register while it is off).
  //
  // Daily visits used to be recorded as a side effect of registering, so they
  // are pinged separately, once per device per day, to keep the admin
  // dashboard's visitors chart working as it does in the Bemba dictionary.
  var HEARTBEAT_MS = 120000;   // "online now" is a 5-minute window server-side

  // The same key api/api.js uses, so both sides agree on the device's identity.
  function deviceId() {
    try {
      var id = localStorage.getItem('bemdic_device_id');
      if (!id) {
        id = (global.crypto && global.crypto.randomUUID)
          ? global.crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
              var r = Math.random() * 16 | 0;
              return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        localStorage.setItem('bemdic_device_id', id);
      }
      return id;
    } catch (e) { return ''; }
  }

  // The browser already knows whether this is its first visit ever and its first
  // today, so it reports both. That is what lets the server keep every figure in
  // one JSON row instead of storing a history row per device.
  var VISIT_DAY_KEY = 'alldic_last_visit_day';
  var FIRST_SEEN_KEY = 'alldic_first_seen';

  function pingVisit() {
    var id = deviceId();
    if (!id) return;

    var today = new Date().toISOString().substring(0, 10);
    var lastDay = null, everSeen = null;
    try {
      lastDay = localStorage.getItem(VISIT_DAY_KEY);
      everSeen = localStorage.getItem(FIRST_SEEN_KEY);
    } catch (e) {}

    var newDay = lastDay !== today;
    var firstTime = !everSeen;

    // Claim the counters BEFORE the request, not after. Writing them only on
    // success left a window between the read above and the response in which a
    // second tab — or a reload during a slow request — read the same empty
    // values and reported itself as another new visitor, inflating uniques for
    // what is really one browser. If the request fails the claim is rolled back
    // below, so a genuine visit still is not lost.
    try {
      if (newDay) localStorage.setItem(VISIT_DAY_KEY, today);
      if (firstTime) localStorage.setItem(FIRST_SEEN_KEY, today);
    } catch (e) {}

    fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ device_id: id, new_day: newDay, first_time: firstTime })
    }).catch(function () {
      // Never counted — release the claim so the next load tries again.
      try {
        if (newDay) localStorage.removeItem(VISIT_DAY_KEY);
        if (firstTime) localStorage.removeItem(FIRST_SEEN_KEY);
      } catch (e) {}
    });
  }

  // Repeat while the tab is actually being looked at, so Online Now reflects
  // people using the app rather than every tab ever left open.
  function startHeartbeat() {
    setInterval(function () {
      if (!global.document.hidden) pingVisit();
    }, HEARTBEAT_MS);
    global.document.addEventListener('visibilitychange', function () {
      if (!global.document.hidden) pingVisit();
    });
  }

  // Endpoints that only make sense with an account. Left unblocked they would
  // answer "User not found", which the app reads as a device whose account was
  // deleted — and its recovery path clears localStorage, quiz points included.
  // Quiz points are purely local (index.html keeps them in `quiz-points`) and
  // must survive sign-up being off, so these never leave the browser, and the
  // error text below is deliberately not "User not found".
  // The community feed is hidden but api/api.js still calls loadPosts() on every
  // page load, so its endpoints are stopped here too — otherwise each visit
  // fires requests for a feed nobody can see.
  var ACCOUNT_ENDPOINTS = /\/api\/(register|user\/sync-points|user\/update-activity|user\/profile|posts\/[a-z-]+)(\?|$)/;

  function blockSignup() {
    if (!global.fetch || global.fetch.__alldicGuarded) return;
    var real = global.fetch.bind(global);
    var guarded = function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      if (ACCOUNT_ENDPOINTS.test(url)) {
        return Promise.resolve(new Response(
          JSON.stringify({ ok: false, error: 'Accounts are disabled' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        ));
      }
      return real(input, init);
    };
    guarded.__alldicGuarded = true;
    global.fetch = guarded;
  }

  // Social features are switched off for this release along with sign-up: with
  // no accounts there is nobody to list, notify, rank or challenge. Hiding them
  // with a stylesheet rather than deleting the markup means api/api.js keeps its
  // structure and the whole set comes back by removing this one block.
  //
  // CSS is used deliberately: api/api.js builds these nodes at various points
  // after this file runs, so a rule applies to them whenever they appear, which
  // a one-shot querySelector pass would miss.
  function hideDisabledFeatures() {
    if (doc.getElementById('alldic-hidden-css')) return;
    var s = doc.createElement('style');
    s.id = 'alldic-hidden-css';
    s.textContent = [
      /* top nav icons: notifications, leaderboard, members */
      '#notif-link,#lb-link,#friends-link{display:none !important;}',
      /* their entries in the More menu */
      '#more-profile-item,#more-lb-item,#more-notif-item{display:none !important;}',
      /* the sections themselves, in case a stale history entry navigates back */
      '#notifications-section,#leaderboard-section,#friends-section,',
      '#profile-section,#challenge-section,#chat-section{display:none !important;}',
      /* Community posts only — NOT the whole #posts-feed-section, because the
         All Languages translator card lives inside it and must stay visible. */
      '#members-posts-heading,#post-editor-card,#posts-list-wrapper,',
      '#posts-load-more-wrap{display:none !important;}',
      /* About and Contact — hidden with their menu entries */
      '#more-about-item,#more-contact-item{display:none !important;}',
      '#about-us,#contact-wrapper,#contact-us-btn{display:none !important;}'
    ].join('');
    doc.head.appendChild(s);
  }

  // api/api.js is inserted mid-body and runs before DOMContentLoaded, so these
  // have to happen at load time rather than inside boot().
  blockSignup();
  hideDisabledFeatures();
  pingVisit();
  startHeartbeat();

  function boot() {
    mountSwitch();
    AllDic.applyBranding();

    var def = AllDic.active();
    if (!def) {
      openPicker(false);
      return;                       // loading waits until a language is chosen
    }
    if (def.local) loadLocal(def);
    else { loadRemoteMode(); watchForPending(); }
  }

  global.AllDicUI = { openPicker: openPicker, mountSwitch: mountSwitch, boot: boot };

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window);
