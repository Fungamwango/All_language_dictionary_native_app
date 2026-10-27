// ============================================
// ALL LANGUAGES DICTIONARY — API + SUBSCRIPTION SYSTEM
// ============================================

// The language the user picked during onboarding drives every label and every
// translation direction in this file. js/lang.js is loaded first by index.html;
// the fallbacks below only matter if this script is embedded somewhere else.
var LANG_NAME = (window.AllDic && AllDic.label()) || 'Bemba';
var LANG_CODE = (window.AllDic && AllDic.code()) || 'bem';
var LANG_IS_LOCAL = window.AllDic ? AllDic.isLocal() : true;

// Features hidden for this release (member sign-up, quiz challenges, direct
// messages). Flip these back to true to reinstate them — the code behind each
// one is left intact and untouched.
//
// `card` is on: cards run through Lipila, whose hosted payment page collects
// the card itself, so there is no PCI DSS gate to clear (that is what blocked
// the earlier Lenco card route). Mobile money still goes through Lenco.
var FEATURES = {
  signup: false,
  challenge: false,
  messages: false,
  card: true
};

// --- STORE/UPDATE THE API URL (so it can be changed remotely) ---
localStorage.setItem('bemdic_api_url', 'api/api.js');
localStorage.removeItem('bemdic_dict_url'); // the language picker decides which dictionary loads

// --- EXISTING AD SECTION ---
var elem=document.getElementById('bemdic-api');
elem.innerHTML=`<div id='api-wrapper'>
 <div id='ad-section' style='text-align:center; padding:2px; border:1px solid rgba(41, 25, 25, 0.2);height:100%;margin:15px 1px;'> <img  id='ad-img' style='padding:4px; width:100%; object-fit:cover; display:none;'> <br> <img  id='lomux-img' style='padding:4px; width:100%; object-fit:cover; display:none;'> <div class='ad-banner' id='container-1154ab4e997f355a9fbc7d7b8e3c809a' style='display:none;'></div></div> </div>`;

 
var lomux_url='https://play.google.com/store/apps/details?id=com.iomuxtech.vault&pli=1';

var monetag_link='https://omg10.com/4/7783356'

var adsteera="https://www.profitablecpmratenetwork.com/wbu2vhysxd?key=6fc6167182e75be709fe52c921a0c22c";

var url = [monetag_link/*,'https://becha.co.zm/?pid=1950691'*/];

document.getElementById('ad-img').addEventListener('click', function() {

window.open(url[Math.floor(Math.random()*url.length)]);

});

//lomux ads onclick redirect
document.getElementById('lomux-img').addEventListener('click', function() {
window.open(lomux_url);
});

var lomux_img=['lomux-1.png','lomux-2.png'];

var ads_array=['img1.jpeg','img2.jpeg','img3.png','img4.jpeg','img5.jpeg','img6.jpg','img7.jpg','img8.jpg','img9.jpg','img10.jpg','img13.jpg','img14.jpg','img15.jpg','img17.gif','img18.png','img19.png','img20.jpg','img21.jpg','img22.jpg','img23.jpg','img24.jpg','img25.jpg','img26.jpg','img27.png','img28.webp','img29.webp','img30.webp','img31.jpg','img32.jpg','img33.webp','img34.jpg','img35.jpg','img36.jpg','img37.jpg','img38.jpg','img39.jpg','img40.gif'];

function runAds(){
var ads_index=Math.floor(Math.random()*ads_array.length)
var current_img=ads_array[ads_index];

var lomux_index=Math.floor(Math.random()*lomux_img.length)
var current_lomux_img=lomux_img[lomux_index];

//set general ads
document.querySelector("#ad-img").src="/api/"+current_img;

//set lomux ads
document.querySelector("#lomux-img").src="/api/"+current_lomux_img;
}

setInterval (runAds
, 15000)

//set ad image when the page loads
runAds();

document.querySelector("#ad-img").style.display="inline";
document.querySelector("#lomux-img").style.display="inline";

function _initStaticDomRefs() {
  //update the online dictionary url
  online_dictionary_url ="https://sageteche.com/dictionary";
  var officialLinks = document.querySelectorAll('.official_site_link');
  if (officialLinks[0]) { officialLinks[0].href = online_dictionary_url; officialLinks[0].innerText = "https://sageteche.com/dictionary"; }

  var contactLinks = document.querySelectorAll("#contact-wrapper ul li a");
  if (contactLinks[3]) contactLinks[3].href = online_dictionary_url;
  if (contactLinks[0]) contactLinks[0].href = "https://wa.me/260763428450";

  window.localStorage.setItem('online_dictionary_url', online_dictionary_url);

  var fb_link = document.querySelectorAll('#contact-wrapper ul li a')[2];
  if (fb_link) { fb_link.href = "https://www.facebook.com/profile.php?id=61590501535122"; fb_link.innerText = "Chanda Fungamwango"; }

  var contactBtn = document.getElementById('contact-us-btn');
  if (contactBtn) contactBtn.onclick = function() {
    hide('section, #pagination-btns-wrapper, #more-links-wrapper');
    show('#contact-wrapper');
    removeClass('.link', 'active_link');
    var cw = document.getElementById('contact-wrapper');
    if (cw) cw.scrollIntoView({behavior: 'smooth'});
  };

  var first_span = document.querySelectorAll('footer span')[0];
  if (first_span) first_span.innerHTML = "Designed and Engineered by <a style='color:#038;' target='_blank' href='https://www.facebook.com/profile.php?id=61590501535122'><b>Chanda Fungamwango Mark</b></a> (0962464552 / 0763428450)";

  var _dlLink = document.querySelector('[onclick*="download_dictionary_url"]');
  if (_dlLink) _dlLink.style.display = 'none';
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', _initStaticDomRefs);
} else {
  _initStaticDomRefs();
}

//implementing the social features
document.body.insertAdjacentHTML('beforeend',`<div id='api_app_data'>
   <style>
       nav #header-wrapper li{cursor: pointer;
                       padding: 5px 8px;
                    display: inline;}

       #header-wrapper{display:grid;
                       grid-template-columns: repeat(7, 1fr);
                        }

       #payments-steps{padding-left:18px;}
       #payments-steps li{margin-bottom:6px;
                        line-height:1.4;
                        font-size:14px;}
     </style>
 </div>
`);

document.querySelector('#quiz-link').insertAdjacentHTML("afterend",'<li class="link" id="notif-link"><span style="filter:grayscale(100%);">🔔</span><sup id="notif-badge"></sup><sup id="msg-badge"></sup></li><li class="link" id="lb-link" style="display:none;"><span>🏆</span></li><li class="link" id="friends-link"><span style="filter:grayscale(30%);">👥</span><sup id="online-count-badge"></sup></li><li class="link" id="tutor-link" title="AI Tutor"><span>Ask</span></li>');
if (navigator.onLine) { var _lbl = document.getElementById('lb-link'); if (_lbl) _lbl.style.display = ''; }

//evalute the intext js codes
var innerjs=document.querySelectorAll('#api_app_data script');
for (var i=0; i<innerjs.length; i++){
 eval(innerjs[i].innerHTML);
}

//adding the popunder ad that executes with a 1 percent chance on any element click
function _bemdic_isFreeUser() {
  try {
    var raw = localStorage.getItem('bemdic_sub');
    if (!raw) return true;
    var sub = JSON.parse(raw);
    return !sub || sub.expiryDay <= Math.floor(Date.now() / 86400000);
  } catch(e) { return true; }
}

function runPopunderAd() {

  if (!_bemdic_isFreeUser()) return;
  document.querySelectorAll('section,li').forEach((elem) => {
    elem.addEventListener('click', () => {
      if (!_bemdic_isFreeUser()) return;
      if (Math.random() < 0.10) {
        window.open(monetag_link,
          '_blank',
          'noopener,noreferrer'
        );
      }
    });
  });
}



// ============================================
// SOCIAL FEATURES SYSTEM
// ============================================
(function(){

var API_BASE = '/api';
var _pollInterval = null;
var _pollDelay = 10000;
var _activePollDelay = 10000;
var _currentSection = null;

// ---- UTILITIES ----
function apiCall(endpoint, data, callback) {
  if (!navigator.onLine) { if (callback) callback({ ok: false, error: 'offline' }); return; }
  fetch(API_BASE + endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(function(r) { return r.json(); })
    .then(function(j) {
      // Detect orphaned device_id (user deleted from admin panel)
      // Only trigger if user WAS previously registered (has cached user data)
      if (!j.ok && j.error === 'User not found' && isDeviceIdEndpoint(endpoint) && localStorage.getItem('bemdic_user_data')) {
        handleOrphanedDeviceId();
        return;
      }
      if (callback) callback(j);
    })
    .catch(function(e) { if (callback) callback({ ok: false, error: e.message }); });
}

// Helper: Check if endpoint uses device_id for user lookup
// (as opposed to looking up OTHER users by ID)
function isDeviceIdEndpoint(endpoint) {
  var deviceIdEndpoints = [
    '/register',
    '/user/profile',
    '/user/sync-points',
    '/user/update-activity',
    '/notifications/poll',
    '/users/online',
    '/posts/list',
    '/posts/create',
    '/posts/like',
    '/posts/comment',
    '/posts/comment-delete',
    '/posts/comment-edit',
    '/posts/delete',
    '/challenge/send',
    '/challenge/respond',
    '/friends/list',
    '/friends/add',
    '/friends/accept'
  ];
  return deviceIdEndpoints.indexOf(endpoint) !== -1;
}

// Handle orphaned device_id (user deleted from admin panel)
function handleOrphanedDeviceId() {
  // Prevent multiple triggers
  if (sessionStorage.getItem('_orphan_handled')) return;

  // Set flag to show message after reload
  sessionStorage.setItem('_show_orphan_msg', '1');

  // Clear all localStorage data
  localStorage.removeItem('bemdic_device_id');
  localStorage.removeItem('bemdic_user_data');
  localStorage.removeItem('bemdic_user_name');
  localStorage.removeItem('quiz-points');

  // Reload page to restart registration flow
  location.reload();
}

// Check if we need to show orphan message after reload
if (sessionStorage.getItem('_show_orphan_msg')) {
  sessionStorage.removeItem('_show_orphan_msg');
  sessionStorage.setItem('_orphan_handled', '1'); // Prevent loop
  document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:999999;display:flex;align-items:center;justify-content:center;padding:16px;';
    overlay.innerHTML =
      '<div style="background:#fff;border-radius:16px;max-width:340px;width:100%;padding:28px 24px 22px;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,0.22);">'
      + '<div style="font-size:44px;margin-bottom:12px;">🚫</div>'
      + '<div style="font-size:17px;font-weight:700;color:#202124;margin-bottom:10px;">Account Removed</div>'
      + '<div style="font-size:14px;color:#5f6368;line-height:1.6;margin-bottom:22px;">Your account was removed by the administrator.<br>Please register again to continue using the app.</div>'
      + '<button id="_orphan_ok_btn" style="background:#1a73e8;color:#fff;border:none;border-radius:10px;padding:11px 32px;font-size:15px;font-weight:600;cursor:pointer;width:100%;">OK</button>'
      + '</div>';
    document.body.appendChild(overlay);
    document.getElementById('_orphan_ok_btn').onclick = function() { document.body.removeChild(overlay); };
  });
  setTimeout(function() { sessionStorage.removeItem('_orphan_handled'); }, 5000);
}

window._bemdic_apiCall = apiCall;
window._bemdic_getDeviceId = getDeviceId;

// Inject spinner into the homepage #loading_data element (index.html is read-only)
(function() {
  function _patchLoadingData() {
    var el = document.getElementById('loading_data');
    // data-no-spinner marks a settled message (e.g. the "no built-in word list"
    // notice for languages without a dictionary file) rather than a load state.
    if (el && !el.hasAttribute('data-no-spinner') && !el.querySelector('.s-spinner') && !el.querySelector('button')) {
      var _txt = el.textContent.trim();
      el.innerHTML = '<span class="s-spinner" style="width:22px;height:22px;border-width:3px;margin-right:7px;"></span><span style="vertical-align:middle;">' + _txt + '</span>';
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _patchLoadingData);
  } else {
    _patchLoadingData();
  }
})();

// Patch index.html speak icons — their inline onclick calls window.Kodular directly
// which crashes in a browser. Replace with speakText() so all TTS paths are used correctly.
(function() {
  function _patchSpeakIcons() {
    // index.html now owns these buttons via playEntryAudio(), which reads each
    // half of the entry in its own language (js/speak.js). This patch existed
    // only because the old inline onclick called window.Kodular and crashed in a
    // browser; taking it over now would force every language through
    // speakText()'s English-only voice filter, which is exactly what made
    // French, Spanish, Portuguese and Chinese read out in an English accent.
    if (window.playEntryAudio) return;

    var playIcon = document.getElementById('speak-play-icon');
    var pauseIcon = document.getElementById('speak-pause-icon');
    var waitEl = document.getElementById('speak-wait');

    if (playIcon) {
      playIcon.onclick = function() {
        var appendList = document.getElementById('append_list');
        var text = appendList ? (appendList.innerText || appendList.textContent).replace(/>>/g, ' ').trim() : '';
        if (!text) return;
        if (waitEl) waitEl.style.display = 'block';
        playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'inline';
        speakText(text, null);
        setTimeout(function() {
          if (waitEl) waitEl.style.display = 'none';
        }, 2500);
      };
    }

    if (pauseIcon) {
      pauseIcon.onclick = function() {
        pauseIcon.style.display = 'none';
        if (playIcon) playIcon.style.display = 'inline';
        // Stop whichever engine is active
        if (window.Kodular) { window.Kodular.setWebViewString(''); }
        else if (navigator.onLine && window.responsiveVoice) { try { window.responsiveVoice.cancel(); } catch(e) {} }
        else if (window.speechSynthesis) { window.speechSynthesis.cancel(); }
      };
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _patchSpeakIcons);
  } else {
    _patchSpeakIcons();
  }
})();
function apiGet(endpoint, callback) {
  if (!navigator.onLine) { if (callback) callback({ ok: false, error: 'offline' }); return; }
  fetch(API_BASE + endpoint).then(function(r) { return r.json(); })
    .then(function(j) { if (callback) callback(j); })
    .catch(function(e) { if (callback) callback({ ok: false, error: e.message }); });
}
function generateUUID() {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  var id = '';
  for (var i = 0; i < 15; i++) {
    if (crypto && crypto.getRandomValues) {
      var arr = new Uint8Array(1);
      crypto.getRandomValues(arr);
      id += chars[arr[0] % 36];
    } else {
      id += chars[Math.floor(Math.random() * 36)];
    }
  }
  return id;
}
function getDeviceId() {
  var id = localStorage.getItem('bemdic_device_id');
  if (!id) { id = generateUUID(); localStorage.setItem('bemdic_device_id', id); }
  return id;
}
function getUserData() {
  var raw = localStorage.getItem('bemdic_user_data');
  if (raw) try { return JSON.parse(raw); } catch(e) {}
  return null;
}
function escapeHtml(s) {
  var d = document.createElement('div'); d.appendChild(document.createTextNode(s)); return d.innerHTML;
}
function _toast(msg, isError) {
  var t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:72px;left:50%;transform:translateX(-50%);background:' + (isError ? '#ea4335' : '#323232') + ';color:#fff;padding:10px 18px;border-radius:20px;font-size:13px;font-weight:500;z-index:999999;box-shadow:0 2px 8px rgba(0,0,0,0.25);max-width:90vw;text-align:center;opacity:0;transition:opacity .2s;pointer-events:none;';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(function() { t.style.opacity = '1'; });
  setTimeout(function() { t.style.opacity = '0'; setTimeout(function() { if (t.parentNode) t.parentNode.removeChild(t); }, 250); }, 3000);
}
function truncName(name) {
  if (!name) return '';
  return name.length > 20 ? escapeHtml(name.slice(0, 20)) + '..' : escapeHtml(name);
}

// ---- MODAL BACK-BUTTON MANAGER ----
var _modalCloseStack = [];
var _modalBackClosing = false;
window.addEventListener('popstate', function() {
  if (_modalBackClosing) { _modalBackClosing = false; return; }
  var fn = _modalCloseStack.pop();
  if (fn) fn();
});
function _pushModal(closeFn) {
  history.pushState({ bemdic_modal: true }, '');
  _modalCloseStack.push(closeFn);
}
function _popModal() {
  _modalCloseStack.pop();
  _modalBackClosing = true;
  history.back();
}
window._pushModal = _pushModal;
window._popModal = _popModal;
// Convert markdown **bold** to <b>bold</b> (called after escapeHtml)
function mdBold(s) {
  return s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
}
function timeAgo(ds) {
  var now = new Date(), d = new Date(ds + (ds.indexOf('Z') === -1 ? 'Z' : ''));
  var diff = Math.floor((now - d) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
  if (diff < 604800) return Math.floor(diff / 86400) + 'd ago';
  return d.toLocaleDateString('en-GB');
}
function getLevelName(pts) {
  if (pts >= 1000) return 'Professor';
  if (pts >= 500) return 'Master';
  if (pts >= 100) return 'Intermediate';
  if (pts >= 20) return 'Amateur';
  return 'Beginner';
}
function profilePicHtml(pic, size, clickable) {
  size = size || 36;
  var cls = clickable ? ' class="clickable-pic"' : '';
  if (pic) return '<img src="' + pic + '"' + cls + ' style="width:' + size + 'px;height:' + size + 'px;border-radius:50%;object-fit:cover;cursor:' + (clickable ? 'pointer' : 'default') + ';">';
  return '<span' + cls + ' style="display:inline-flex;align-items:center;justify-content:center;width:' + size + 'px;height:' + size + 'px;border-radius:50%;background:#e0e0e0;font-size:' + Math.round(size * 0.5) + 'px;">👤</span>';
}
function showPicOverlay(src) {
  if (!src) return;
  var overlay = document.createElement('div');
  overlay.className = 'pic-overlay';
  overlay.innerHTML = '<img src="' + src + '" style="max-width:80vw;max-height:80vh;border-radius:12px;object-fit:contain;border:3px solid #fff;">';
  var closeOverlay = function() { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); };
  overlay.addEventListener('click', function() { _popModal(); closeOverlay(); });
  document.body.appendChild(overlay);
  _pushModal(closeOverlay);
}
function showUserProfile(userId) {
  var overlay = document.createElement('div');
  overlay.className = 'user-profile-overlay';
  overlay.innerHTML = '<div class="user-profile-modal"><button class="upm-close">&times;</button>'
    + '<div class="s-loading" style="padding:30px;"><span class="s-spinner"></span>Loading profile...</div></div>';
  var closeProfile = function() { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); };
  overlay.addEventListener('click', function(e) { if (e.target === overlay) { _popModal(); closeProfile(); } });
  overlay.querySelector('.upm-close').addEventListener('click', function() { _popModal(); closeProfile(); });
  document.body.appendChild(overlay);
  _pushModal(closeProfile);

  apiCall('/user/view', { device_id: getDeviceId(), user_id: userId }, function(resp) {
    var modal = overlay.querySelector('.user-profile-modal');
    if (!resp.ok || !resp.user) {
      modal.innerHTML = '<button class="upm-close">&times;</button><div class="s-empty">Could not load profile</div>';
      modal.querySelector('.upm-close').addEventListener('click', function() { _popModal(); closeProfile(); });
      return;
    }
    var u = resp.user;
    var picSrc = u.picture || '';
    modal.innerHTML = '<button class="upm-close">&times;</button>'
      + '<div class="upm-pic">' + (picSrc ? '<img src="' + picSrc + '">' : '<span style="display:inline-flex;align-items:center;justify-content:center;width:80px;height:80px;border-radius:50%;background:#e0e0e0;font-size:40px;">👤</span>') + '</div>'
      + '<div class="upm-name">' + truncName(u.name) + '</div>'
      + '<div class="upm-code"></div>'
      + '<div class="upm-level">' + getLevelName(u.points || 0) + '</div>'
      + '<div class="upm-stats">'
      + '<div class="upm-stat"><div class="upm-stat-val">' + (u.rank ? '#' + u.rank : '-') + '</div><div class="upm-stat-lbl">Weekly Rank</div></div>'
      + '<div class="upm-stat"><div class="upm-stat-val">' + (u.weekly_points != null ? u.weekly_points : (u.points || 0)) + '</div><div class="upm-stat-lbl">This Week</div></div>'
      + '<div class="upm-stat"><div class="upm-stat-val">' + (u.points || 0) + '</div><div class="upm-stat-lbl">All-time</div></div>'
      + '<div class="upm-stat"><div class="upm-stat-val">' + (u.total_quizzes || 0) + '</div><div class="upm-stat-lbl">Quizzes</div></div>'
      + '<div class="upm-stat"><div class="upm-stat-val">' + (u.challenges_won || 0) + '</div><div class="upm-stat-lbl">Wins</div></div>'
      + '<div class="upm-stat"><div class="upm-stat-val">' + (u.challenges_lost || 0) + '</div><div class="upm-stat-lbl">Losses</div></div>'
      + '<div class="upm-stat"><div class="upm-stat-val">' + (u.challenges_drawn || 0) + '</div><div class="upm-stat-lbl">Draws</div></div>'
      + '<div class="upm-stat"><div class="upm-stat-val">' + timeAgo(u.created_at) + '</div><div class="upm-stat-lbl">Joined</div></div>'
      + '<div class="upm-stat"><div class="upm-stat-val">' + timeAgo(u.last_seen) + '</div><div class="upm-stat-lbl">Last Active</div></div>'
      + '</div>';
    var myData = getUserData();
    var isMyself = myData && myData.id && u.id === myData.id;
    if (!isMyself) {
      modal.innerHTML += '<div class="upm-actions">'
        + '<button class="s-btn s-btn-g upm-challenge" data-uid="' + u.id + '" data-uname="' + escapeHtml(u.name) + '" data-upic="' + escapeHtml(u.picture || '') + '">⚔ Challenge</button>'
        + '<button class="s-btn upm-msg-btn upm-msg" data-uid="' + u.id + '" data-uname="' + escapeHtml(u.name) + '" data-upic="' + escapeHtml(u.picture || '') + '" data-lastseen="' + (u.last_seen || '') + '">💬 Message</button>'
        + '</div>';
    }

    modal.querySelector('.upm-close').addEventListener('click', function() { _popModal(); closeProfile(); });
    // Enlarge pic on click
    var picImg = modal.querySelector('.upm-pic img');
    if (picImg) picImg.addEventListener('click', function() { showPicOverlay(this.src); });
    // Challenge button
    var chBtn = modal.querySelector('.upm-challenge');
    if (chBtn) {
      chBtn.addEventListener('click', function() {
        _popModal(); closeProfile();
        startChallenge(parseInt(this.getAttribute('data-uid')), this.getAttribute('data-uname'), this.getAttribute('data-upic') || '');
      });
    }
    // Message button
    var msgBtn = modal.querySelector('.upm-msg');
    if (msgBtn) {
      msgBtn.addEventListener('click', function() {
        var uid = parseInt(this.getAttribute('data-uid'));
        var uname = this.getAttribute('data-uname');
        var upic = this.getAttribute('data-upic');
        var uls = this.getAttribute('data-lastseen') || '';
        _popModal(); closeProfile();
        var ud = getUserData();
        if (!ud || !ud.picture) {
          showPicRequiredModal(function() { openChat(uid, uname, upic, uls); });
        } else {
          openChat(uid, uname, upic, uls);
        }
      });
    }
  });
}

function compressImage(file, callback) {
  var reader = new FileReader();
  reader.onload = function(e) {
    var img = new Image();
    img.onload = function() {
      var canvas = document.createElement('canvas');
      var maxDim = 256;
      var w = img.width, h = img.height;
      if (w > h) { if (w > maxDim) { h = Math.round(h * maxDim / w); w = maxDim; } }
      else { if (h > maxDim) { w = Math.round(w * maxDim / h); h = maxDim; } }
      canvas.width = w; canvas.height = h;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      var dataUrl;
      for (var q = 0.8; q >= 0.1; q -= 0.1) {
        dataUrl = canvas.toDataURL('image/webp', q);
        if (Math.round(dataUrl.split(',')[1].length * 3 / 4) <= 65536) break;
      }
      if (dataUrl.split(',')[1].length * 3 / 4 > 65536) {
        canvas.width = Math.round(w * 0.5); canvas.height = Math.round(h * 0.5);
        ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        dataUrl = canvas.toDataURL('image/webp', 0.5);
      }
      callback(dataUrl);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
function resizeAndUploadPicture(file, callback) {
  compressImage(file, function(dataUrl) {
    apiCall('/user/picture', { device_id: getDeviceId(), picture: dataUrl }, function(resp) {
      if (resp.ok) {
        var ud = getUserData() || {};
        ud.picture = dataUrl;
        localStorage.setItem('bemdic_user_data', JSON.stringify(ud));
      }
      if (callback) callback(resp.ok ? dataUrl : null);
    });
  });
}

// ---- CSS INJECTION ----
var ss = document.createElement('style');
ss.textContent = ''
  + '@keyframes bemdic-shake{0%,100%{transform:translateX(-50%)}20%,60%{transform:translateX(calc(-50% - 6px))}40%,80%{transform:translateX(calc(-50% + 6px))}}'
  + '@keyframes bemdic-spin{to{transform:rotate(360deg)}}'
  + '#profile-section,#friends-section,#leaderboard-section,#notifications-section,#challenge-section{display:none;padding:4px 10px;}'
  + '.social-card{background:#fff;border:1px solid #e8e8e8;border-radius:12px;padding:8px;margin:6px 0;box-shadow:0 1px 4px rgba(0,0,0,0.06);}'
  + '.social-tabs{display:flex;gap:0;margin-bottom:10px;border-bottom:2px solid #e0e0e0;}'
  + '.social-tab{flex:1;text-align:center;padding:10px 4px;cursor:pointer;font-size:13px;color:#666;border-bottom:2px solid transparent;margin-bottom:-2px;transition:color .2s,border-color .2s;}'
  + '.social-tab.active-tab{color:#1a73e8;border-bottom-color:#1a73e8;font-weight:600;}'
  + '.s-btn{padding:8px 16px;border:none;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;transition:transform .15s,box-shadow .15s;letter-spacing:0.3px;}'
  + '.s-btn:active{transform:scale(0.96);}'
  + '.s-btn-p{background:linear-gradient(135deg,#1a73e8,#1557b0);color:#fff;box-shadow:0 2px 6px rgba(26,115,232,0.3);}'
  + '.s-btn-g{background:linear-gradient(135deg,#34a853,#2d8f47);color:#fff;box-shadow:0 2px 6px rgba(52,168,83,0.3);}'
  + '.s-btn-d{background:linear-gradient(135deg,#ea4335,#c5221f);color:#fff;box-shadow:0 2px 6px rgba(234,67,53,0.3);}'
  + '.s-btn-s{background:#f1f3f4;color:#444;}'
  + '.s-empty{text-align:center;color:#999;padding:24px 10px;font-size:13px;}'
  + '.s-loading{text-align:center;color:#888;padding:16px;font-size:13px;}'
  + '.s-spinner{display:inline-block;width:26px;height:26px;border:3.5px solid #d2e3fc;border-top-color:#1a73e8;border-radius:50%;animation:spin .7s linear infinite;vertical-align:middle;margin-right:9px;}'
  + '@keyframes spin{to{transform:rotate(360deg)}}'
  // Profile
  + '#profile-wrapper{text-align:center;padding-bottom:16px;}'
  + '.profile-hero{background:#fff;border-radius:18px;border:1px solid #e8e8e8;box-shadow:0 2px 16px rgba(0,0,0,0.08);margin-bottom:12px;overflow:hidden;}'
  + '.profile-hero-banner{height:110px;background:linear-gradient(135deg,#1a3a5c 0%,#0d2137 100%);}'
  + '.profile-hero-body{padding:0 16px 20px;}'
  + '#profile-avatar{font-size:100px;margin-top:-80px;cursor:pointer;position:relative;display:inline-block;}'
  + '#profile-avatar img{width:160px;height:160px;border-radius:50%;object-fit:cover;border:5px solid #fff;box-shadow:0 6px 24px rgba(0,0,0,0.22);}'
  + '#profile-avatar .pic-edit-hint{position:absolute;bottom:2px;right:2px;background:#1a73e8;color:#fff;border-radius:50%;width:26px;height:26px;font-size:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.25);border:2px solid #fff;}'
  + '#pic-file-input{display:none;}'
  + '#profile-name-display{font-size:20px;font-weight:700;color:#202124;margin:10px 0 4px;}'
  + '#profile-friend-code{display:none;}'
  + '.profile-main-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#e8e8e8;border-radius:12px;overflow:hidden;}'
  + '.profile-main-stat{background:#f8f9fa;padding:14px 6px;text-align:center;}'
  + '.profile-main-stat-val{font-size:22px;font-weight:800;color:#1a73e8;}'
  + '.profile-main-stat-lbl{font-size:10px;color:#80868b;margin-top:2px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;}'
  + '.profile-challenge-card{background:#fff;border:1px solid #e8e8e8;border-radius:16px;padding:16px;margin-bottom:12px;box-shadow:0 1px 6px rgba(0,0,0,0.05);text-align:left;}'
  + '.profile-challenge-card .section-heading{margin:0 0 12px;font-size:14px;}'
  + '.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:0 0 10px;}'
  + '.stat-box{background:#f8f9fa;border-radius:12px;padding:12px 4px;text-align:center;border:1px solid #eee;}'
  + '.stat-val{font-size:20px;font-weight:800;color:#202124;}'
  + '.stat-lbl{font-size:10px;color:#80868b;margin-top:2px;font-weight:600;text-transform:uppercase;letter-spacing:0.4px;}'
  + '.stat-box.stat-win .stat-val{color:#2e7d32;}'
  + '.stat-box.stat-loss .stat-val{color:#c62828;}'
  + '.stat-box.stat-draw .stat-val{color:#e65100;}'
  + '.profile-last-active{text-align:center;font-size:12px;color:#80868b;padding-top:6px;border-top:1px solid #f1f3f4;}'
  // Online users table
  + '#online-search-input{width:92%;padding:10px 14px;border:1.5px solid #dadce0;border-radius:24px;font-size:14px;margin:6px 0;outline:none;transition:border-color .2s,box-shadow .2s;background:#f8f9fa;}'
  + '#online-search-input:focus{border-color:#1a73e8;box-shadow:0 0 0 2px rgba(26,115,232,0.15);background:#fff;}'
  + '.online-table{width:100%;border-collapse:collapse;}'
  + '.online-table th{text-align:left;padding:8px 6px;font-size:11px;color:#80868b;border-bottom:2px solid #e8e8e8;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;}'
  + '.online-table td{padding:10px 6px;border-bottom:1px solid #e0e0e0;vertical-align:middle;}'
  + '.online-table tr:last-child td{border-bottom:none;}'
  + '.online-table .pic-cell{width:46px;}'
  + '.online-table .name-cell{font-weight:600;font-size:14px;color:#202124;max-width:0;width:100%;overflow:hidden;}'
  + '.online-table .name-meta{font-size:11px;color:#80868b;font-weight:normal;}'
  + '.online-table .action-cell{text-align:right;white-space:nowrap;}'
  + '.friend-dot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;}'
  + '.dot-on{background:#34a853;box-shadow:0 0 4px rgba(52,168,83,0.5);}'
  + '.dot-off{background:#bbb;}'
  // Leaderboard
  + '.lb-row{display:flex;align-items:center;padding:8px 10px;border-bottom:1px solid #f1f3f4;gap:10px;transition:background .15s;}'
  + '.lb-row:last-child{border-bottom:none;}'
  + '.lb-rank{width:28px;font-weight:700;color:#5f6368;font-size:14px;flex-shrink:0;text-align:center;}'
  + '.lb-pic{flex-shrink:0;}'
  + '.lb-info{flex:1;min-width:0;}'
  + '.lb-name{font-size:14px;color:#202124;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
  + '.lb-level{font-size:11px;color:#80868b;font-weight:500;}'
  + '.lb-pts{font-weight:700;color:#1a73e8;font-size:13px;flex-shrink:0;}'
  + '.lb-me{background:linear-gradient(135deg,#e8f0fe,#d2e3fc);border-radius:8px;}'
  // Notifications
  + '.notif-row{display:flex;align-items:flex-start;padding:12px 10px;border-bottom:1px solid #e0e0e0;cursor:pointer;gap:10px;transition:opacity .3s,max-height .3s,background .15s;margin:0;}'
  + '.notif-row:hover{background:#f8f9fa;}'
  + '.notif-row:last-child{border-bottom:none;}'
  + '.notif-row.unread{background:linear-gradient(135deg,#fff8e1,#fff3cd);}'
  + '.notif-pic{flex-shrink:0;}'
  + '.notif-body{flex:1;min-width:0;}'
  + '.notif-text{font-size:13px;color:#202124;line-height:1.4;}'
  + '.notif-time{font-size:11px;color:#80868b;margin-top:3px;}'
  + '.notif-type-badge{display:inline-block;font-size:10px;padding:2px 6px;border-radius:10px;font-weight:600;margin-bottom:3px;}'
  + '.notif-type-challenge{background:#e8f0fe;color:#1a73e8;}'
  + '.notif-type-result{background:#fef7e0;color:#e37400;}'
  + '.notif-type-reward{background:#e6f4ea;color:#137333;}'
  + '.notif-type-post{background:#fce8e6;color:#ea4335;}'
  + '.notif-type-message{background:#e3f2fd;color:#0277bd;}'
  // Notification/Messages tabs
  + '.notif-tabs{display:flex;border-bottom:2px solid #e0e0e0;margin:0 0 4px;}'
  + '.notif-tab{flex:1;padding:10px 4px;border:none;background:none;font-size:13px;font-weight:600;color:#5f6368;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:color .2s,border-color .2s;}'
  + '.notif-tab.active{color:#1a73e8;border-bottom-color:#1a73e8;}'
  + '#msg-tab-badge{display:inline-block;background:#1a73e8;color:#fff;border-radius:10px;font-size:9px;padding:1px 5px;margin-left:3px;vertical-align:middle;font-weight:700;}'
  // Blue message badge on bell icon
  + '#msg-badge{font-size:9px;background:#1a73e8;color:#fff;border-radius:50%;padding:1px 4px;margin-left:-6px;vertical-align:top;display:none;font-weight:700;min-width:8px;text-align:center;line-height:14px;position:relative;z-index:2;}'
  // Conversation list rows
  + '.conv-row{display:flex;align-items:center;padding:13px 14px;border-bottom:1px solid rgba(0,0,0,0.1);cursor:pointer;gap:12px;transition:background .15s;}'
  + '.conv-row:active,.conv-row:hover{background:#f5f7ff;}'
  + '.conv-row.unread-conv .conv-name{font-weight:700;color:#111;}'
  + '.conv-row.unread-conv .conv-preview{color:#111;font-weight:600;}'
  + '.conv-row.unread-conv .conv-time{color:#25d366;font-weight:600;}'
  + '.conv-pic-wrap{position:relative;flex-shrink:0;}'
  + '.conv-online-dot{position:absolute;bottom:1px;right:1px;width:10px;height:10px;background:#34a853;border:2px solid #fff;border-radius:50%;}'
  + '.conv-info{flex:1;min-width:0;}'
  + '.conv-top{display:flex;align-items:center;justify-content:space-between;gap:6px;}'
  + '.conv-name{font-size:14px;font-weight:500;color:#202124;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;}'
  + '.conv-time{font-size:11px;color:#9aa0a6;flex-shrink:0;}'
  + '.conv-bottom{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:3px;}'
  + '.conv-preview{font-size:14px;color:#5f6368;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;}'
  + '.conv-unread-badge{background:#25d366;color:#fff;font-size:11px;font-weight:700;min-width:20px;height:20px;border-radius:10px;display:flex;align-items:center;justify-content:center;padding:0 5px;flex-shrink:0;box-shadow:0 1px 3px rgba(37,211,102,0.4);}'
  + '.mem-btn{display:block;width:100%;font-size:12px;padding:6px 8px;border-radius:20px;cursor:pointer;line-height:1.3;text-align:center;box-sizing:border-box;}'
  + '.mem-btn:active{filter:brightness(.93);}'
  + '.mem-ch-btn{background:#f0faf3;color:#2e7d32;border:2px solid #c8e6c9;}'
  + '.mem-msg-btn{background:#f0f4ff;color:#1a56cc;border:2px solid #c5d3f8;margin-top:4px;}'
  // Chat section
  + '#chat-section{display:flex;flex-direction:column;height:calc(100vh - 60px);padding:0;}'
  + '#chat-header{display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid #e0e0e0;background:#fff;position:sticky;top:0;z-index:10;}'
  + '#chat-back-btn{background:none;border:none;font-size:20px;cursor:pointer;padding:4px 8px;color:#1a73e8;flex-shrink:0;}'
  + '#chat-header-info{flex:1;min-width:0;}'
  + '#chat-header-name{font-size:15px;font-weight:600;color:#202124;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
  + '#chat-header-status{font-size:11.5px;color:#80868b;display:block;margin-top:1px;}'
  + '#chat-header-status.online{color:#34a853;font-weight:500;}'
  + '#chat-messages{flex:1;overflow-y:auto;padding:10px 10px 6px;display:flex;flex-direction:column;gap:6px;}'
  + '.chat-load-older{text-align:center;margin-bottom:8px;}'
  + '.chat-load-older button{background:#f1f3f4;border:none;border-radius:20px;padding:6px 18px;font-size:12px;color:#5f6368;cursor:pointer;}'
  + '.chat-bubble-wrap{display:flex;align-items:flex-end;gap:6px;}'
  + '.chat-bubble-wrap.me{flex-direction:row-reverse;}'
  + '.chat-msg{max-width:72%;min-width:0;display:flex;flex-direction:column;}'
  + '.chat-msg.me{align-items:flex-end;}'
  + '.chat-msg.them{align-items:flex-start;}'
  + '.chat-bubble{padding:9px 13px;border-radius:18px;font-size:14px;line-height:1.4;word-break:break-word;}'
  + '.chat-bubble.me{background:#1a73e8;color:#fff;border-bottom-right-radius:4px;}'
  + '.chat-bubble.them{background:#e2e5e9;color:#202124;border-bottom-left-radius:4px;}'
  + '.chat-time{font-size:10px;color:#aaa;margin-top:3px;}'
  + '.chat-msg.me .chat-time{text-align:right;}'
  + '.chat-msg.them .chat-time{text-align:left;}'
  + '#chat-input-area{display:flex;align-items:center;gap:8px;padding:8px 10px;border-top:1px solid #e0e0e0;background:#fff;position:sticky;bottom:0;}'
  + '#chat-text-input{flex:1;padding:10px 14px;border:1.5px solid #dadce0;border-radius:24px;font-size:14px;outline:none;resize:none;font-family:sans-serif;max-height:100px;overflow-y:auto;transition:border-color .2s;}'
  + '#chat-text-input:focus{border-color:#1a73e8;}'
  + '#chat-send-btn{background:#1a73e8;color:#fff;border:none;border-radius:50%;width:40px;height:40px;font-size:18px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:background .2s,opacity .2s;}'
  + '#chat-send-btn:active{background:#1557b0;}'
  + '#chat-send-btn:disabled{opacity:0.35;cursor:default;}'
  + '.send-spinner{display:inline-block;width:18px;height:18px;border:2.5px solid rgba(255,255,255,0.35);border-top-color:#fff;border-radius:50%;animation:spin .65s linear infinite;}'
  // Challenge
  + '#challenge-info{text-align:center;padding:16px 12px;}'
  + '#challenge-info h2{color:#202124;margin:0 0 6px;font-size:18px;}'
  + '.ch-msg{background:linear-gradient(135deg,#fff8e1,#fff3cd);border-radius:12px;padding:12px 14px;margin:12px 0;font-style:italic;color:#555;font-size:14px;border-left:3px solid #fbbc04;}'
  + '.ch-accept-card{background:linear-gradient(135deg,#f8f9fa,#fff);border:1.5px solid #e8e8e8;border-radius:16px;padding:20px;margin:12px 0;}'
  + '.ch-opponent-pic{margin:10px 0;}'
  + '.ch-score-preview{font-size:32px;font-weight:700;color:#ea4335;margin:6px 0;}'
  + '.ch-score-label{font-size:13px;color:#5f6368;}'
  + '.ch-comparison{display:flex;justify-content:center;align-items:center;gap:20px;margin:20px 0;}'
  + '.ch-player{text-align:center;min-width:80px;}'
  + '.ch-player-name{font-size:13px;color:#5f6368;margin-bottom:4px;font-weight:500;}'
  + '.ch-player-score{font-size:38px;font-weight:800;}'
  + '.ch-vs{font-size:16px;color:#bbb;font-weight:700;background:#f1f3f4;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;}'
  + '.ch-verdict{text-align:center;font-size:20px;font-weight:700;margin:12px 0;}'
  + '.ch-bonus{text-align:center;color:#34a853;font-size:14px;margin:6px 0;font-weight:600;}'
  + '#ch-quiz-wrapper{padding:8px;}'
  + '.ch-loading-spinner{width:52px;height:52px;border:5px solid #e8f5e9;border-top-color:#2e7d32;border-radius:50%;animation:ch-spin 0.8s linear infinite;margin:0 auto;}'
  + '@keyframes ch-spin{to{transform:rotate(360deg)}}'
  + '#ch-timer-bar{text-align:center;color:#ea4335;font-size:14px;font-weight:600;margin:8px 0;padding:6px;background:#fce8e6;border-radius:8px;}'
  + '#ch-question-title{font-size:13px;color:#5f6368;margin-bottom:8px;font-weight:500;}'
  + '#ch-question-wrapper{background:linear-gradient(135deg,#f8f9fa,#fff);border:1.5px solid #e8e8e8;border-radius:12px;padding:16px;margin:10px 0;text-align:center;font-size:16px;font-weight:500;}#ch-question-word{font-weight:bold;font-size:20px;text-transform:capitalize;color:#1a73e8;}'
  + '#ch-progress-bar{height:4px;background:#e8e8e8;border-radius:2px;margin:0 0 10px;overflow:hidden;}'
  + '#ch-progress-fill{height:100%;background:linear-gradient(90deg,#1a73e8,#34a853);border-radius:2px;transition:width .3s;}'
  + '.ch-option{background:#fff;border:1.5px solid #dadce0;border-radius:12px;padding:14px 16px;margin:8px 0;cursor:pointer;font-size:16px;transition:transform .1s,border-color .15s,box-shadow .15s;font-weight:500;outline:none !important;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;}'
  + '.ch-option:hover{border-color:#1a73e8;box-shadow:0 1px 6px rgba(26,115,232,0.15);}'
  + '.ch-option:active{transform:scale(0.98);}'
  + '.ch-option.ch-correct{background:#e6f4ea;border-color:#34a853;color:#137333;}'
  + '.ch-option.ch-wrong{background:#fce8e6;border-color:#ea4335;color:#c5221f;}'
  // Modals
  + '.name-modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:100000;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);}'
  + '.name-modal{background:#fff;border-radius:16px;padding:28px 24px;max-width:320px;width:90%;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,0.15);}'
  + '.name-modal h3{margin:0 0 6px;color:#202124;font-size:18px;}'
  + '.name-modal p{color:#5f6368;font-size:13px;margin:0 0 14px;}'
  + '.name-modal input{width:80%;padding:10px 14px;border:1.5px solid #dadce0;border-radius:24px;font-size:15px;text-align:center;outline:none;margin-bottom:10px;transition:border-color .2s;}'
  + '.name-modal input:focus{border-color:#1a73e8;}'
  + '.name-modal textarea{width:80%;padding:10px 14px;border:1.5px solid #dadce0;border-radius:12px;font-size:13px;outline:none;resize:none;margin-bottom:10px;transition:border-color .2s;}'
  + '.name-modal textarea:focus{border-color:#1a73e8;}'
  // Picture overlay
  + '.pic-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:100001;display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(8px);}'
  // Notification badge
  + '#notif-badge{font-size:9px;background:#ea4335;color:#fff;border-radius:50%;padding:1px 4px;margin-left:-8px;vertical-align:top;display:none;font-weight:700;min-width:8px;text-align:center;line-height:14px;position:relative;z-index:1;}'
  + '#friends-link{position:relative;}'
  + '#online-count-badge{position:absolute;top:2px;right:2px;font-size:9px;line-height:1;color:greenyellow;font-weight:700;z-index:1;display:none;pointer-events:none;}'
  // Posts Feed
  + '#posts-feed-section{padding:4px 10px;}'
  + '.post-editor-header{font-size:15px;font-weight:600;color:#202124;margin-bottom:10px;}'
  + '#post-content-input{width:96%;padding:12px 14px;border:1.5px solid #dadce0;border-radius:12px;font-size:14px;outline:none;resize:vertical;min-height:70px;font-family:sans-serif;transition:border-color .2s;}'
  + '#post-content-input:focus{border-color:#1a73e8;box-shadow:0 0 0 2px rgba(26,115,232,0.1);}'
  + '.post-editor-footer{display:flex;justify-content:space-between;align-items:center;margin-top:8px;}'
  + '#post-char-count{font-size:12px;color:#80868b;}'
  + '#post-submit-btn{padding:10px 24px;}'
  // Translation widget
  + '#translate-card{margin-bottom:4px; margin-top:5px;}'
  + '.tl-header{font-size:15px;font-weight:600;color:#202124;margin-bottom:10px; color:#1a73e8;}'
  + '.tl-controls{display:flex;align-items:center;gap:8px;margin-bottom:10px;}'
  + '.tl-lang-label{flex:1;text-align:center;font-size:13px;font-weight:700;color:#1a73e8;background:#e8f0fe;border:1.5px solid #c5d9f8;border-radius:20px;padding:7px 10px;}'
  + '.tl-swap-btn{background:#f1f3f4;border:1.5px solid #dadce0;border-radius:50%;width:34px;height:34px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s,border-color .15s,transform .3s;color:#5f6368;align-self:center;margin-top:18px;}'
  + '.tl-swap-btn:hover{background:#e8f0fe;border-color:#1a73e8;color:#1a73e8;transform:rotate(180deg);}'
  + '#tl-input{width:96%;padding:10px 14px;border:1.5px solid #dadce0;border-radius:12px;font-size:14px;outline:none;resize:none;min-height:54px;font-family:sans-serif;transition:border-color .2s;}'
  + '#tl-input:focus{border-color:#1a73e8;box-shadow:0 0 0 2px rgba(26,115,232,0.1);}'
  + '.tl-result-wrap{margin-top:10px;background:#f8f9fa;border-radius:10px;padding:10px 14px;border:1px solid #e0e0e0;}'
  + '.tl-result-label{font-size:11px;color:#80868b;font-weight:600;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:4px;}'
  + '#tl-result{font-size:17px;color:#202124;line-height:1.5;min-height:20px;font-weight:700; margin-bottom:5px;}'
  + '#tl-result.tl-loading{color:#1e8e3e;font-style:italic;font-size:13px;font-weight:600;}'
  + '.tl-char-counter{font-size:11px;text-align:right;margin-top:4px;color:#80868b;}'
  + '.tl-lang-wrap-label{font-size:10px;font-weight:600;color:#80868b;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:3px;}'
  + '.tl-lang-btn{flex:1;text-align:left;font-size:13px;font-weight:700;color:#202124;background:#fff;border:1.5px solid #dadce0;border-radius:10px;padding:8px 10px;cursor:pointer;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;justify-content:space-between;gap:4px;}'
  + '.tl-lang-btn:hover{border-color:#1a73e8;background:#f8f9fa;}'
  + '.tl-lang-arrow{font-size:10px;color:#80868b;flex-shrink:0;}'
  + '.tl-lang-drop{position:absolute;top:calc(100% + 2px);left:0;right:0;background:#fff;border:1.5px solid #c5d9f8;border-radius:10px;z-index:99999;box-shadow:0 4px 20px rgba(0,0,0,0.18);}'
  + '.tl-lang-filter{width:calc(100% - 16px);margin:6px 8px;padding:6px 10px;border:1px solid #dadce0;border-radius:8px;font-size:13px;outline:none;box-sizing:border-box;display:block;}'
  + '.tl-lang-list{max-height:150px;overflow-y:auto;}'
  + '.tl-lang-opt{padding:7px 12px;font-size:15px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;}'
  + '.tl-lang-opt:hover,.tl-lang-opt.tl-lang-active{background:#e8f0fe;color:#1a73e8;font-weight:600;}'
  + '.tl-lang-code{font-size:10px;color:#80868b;text-transform:uppercase;}'
  + '.tl-ex-item{padding:10px 14px;background:#e8f0fe;border-radius:10px;border-left:4px solid #1a73e8;}'
  + '.tl-ex-src{font-size:15px;color:#202124;line-height:1.4;}'
  + '.tl-ex-tgt{font-size:15px;color:#036;margin-top:6px;line-height:1.4;}'
  + '.post-card{background:#fff;border:1px solid #e8e8e8;border-radius:12px;padding:14px;margin:3px 0;box-shadow:0 1px 4px rgba(0,0,0,0.06);}'
  + '.post-card:hover{box-shadow:0 2px 8px rgba(0,0,0,0.1);}'
  + '.post-header{display:flex;align-items:flex-start;gap:8px;margin-bottom:10px;}'
  + '.post-author-pic{flex-shrink:0;cursor:pointer;}'
  + '.post-author-info{flex-shrink:0;}'
  + '.post-author-name{font-size:14px;font-weight:600;color:#202124;cursor:pointer;line-height:1.3;white-space:nowrap;}'
  + '.post-author-name:hover{color:#1a73e8;}'
  + '.post-author-time{font-size:11px;color:#80868b;cursor:pointer;line-height:1.3;margin-top:1px;white-space:nowrap;}'
  + '.post-author-time:hover{color:#5f6368;}'
  + '.post-content{font-size:16px;color:#333;line-height:1.5;margin:0 0 10px 0;text-align:left;white-space:pre-wrap;word-wrap:break-word;}'
  + '.post-actions{display:flex;gap:16px;margin-top:12px;padding-top:10px;border-top:1px solid #f1f3f4;}'
  + '.post-action-btn{display:flex;align-items:center;gap:6px;font-size:13px;color:#5f6368;cursor:pointer;padding:6px 10px;border-radius:6px;background:transparent;border:none;}'
  + '.post-action-btn:hover{color:#1a73e8;background:#f8f9fa;}'
  + '.post-action-btn.liked{color:#ea4335;font-weight:600;}'
  + '.post-comments-section{margin-top:12px;padding-top:12px;border-top:1px solid #f1f3f4;}'
  + '.post-comment{display:flex;align-items:flex-start;gap:6px;margin:8px 0;padding:10px;background:#f8f9fa;border-radius:10px;}'
  + '.comment-pic{flex-shrink:0;}'
  + '.comment-content{flex:1;min-width:0;}'
  + '.comment-author{font-size:12px;font-weight:600;color:#202124;line-height:1.3;margin-bottom:2px; text-align:left;}'
  + '.comment-text{font-size:14px;color:#333;line-height:1.5;word-wrap:break-word;text-align:left;white-space:pre-wrap;}'
  + '.comment-input-wrapper{display:flex;gap:8px;margin-top:10px;}'
  + '.comment-input{flex:1;padding:8px 12px;border:1.5px solid #dadce0;border-radius:20px;font-size:13px;outline:none;}'
  + '.comment-input:focus{border-color:#1a73e8;}'
  + '.comment-submit-btn{padding:8px 16px;font-size:12px;}'
  + '.comment-actions{display:flex;gap:8px;margin-top:4px;}'
  + '.comment-action-btn{font-size:11px;color:#888;background:none;border:none;cursor:pointer;padding:0;text-decoration:underline;}'
  + '.comment-action-btn:hover{color:#1a73e8;}'
  + '.comment-edit-form{margin-top:6px;display:none;}'
  + '.comment-edit-input{width:100%;padding:6px 10px;border:1.5px solid #dadce0;border-radius:8px;font-size:13px;outline:none;box-sizing:border-box;resize:none;}'
  + '.comment-edit-input:focus{border-color:#1a73e8;}'
  + '.comment-edit-actions{display:flex;gap:6px;margin-top:4px;}'
  + '.comment-save-btn{font-size:12px;padding:4px 10px;}'
  + '.comment-cancel-btn{font-size:12px;padding:4px 10px;background:#f1f3f4;color:#333;border:none;border-radius:4px;cursor:pointer;}'
  + '.post-actions-btns{margin-left:auto;display:flex;gap:6px;}'
  + '.post-edit-btn{color:#1a73e8;font-size:12px;padding:4px 8px;border:1px solid #1a73e8;border-radius:4px;background:transparent;cursor:pointer;}'
  + '.post-edit-btn:hover{background:#e8f0fe;}'
  + '.post-delete-btn{color:#ea4335;font-size:12px;padding:4px 8px;border:1px solid #ea4335;border-radius:4px;background:transparent;cursor:pointer;}'
  + '.post-delete-btn:hover{background:#fce8e6;}'
  + '.post-edit-form{margin-top:10px;display:none;}'
  + '.post-edit-textarea{width:96%;padding:10px 12px;border:1.5px solid #1a73e8;border-radius:8px;font-size:14px;outline:none;resize:vertical;min-height:60px;font-family:sans-serif;}'
  + '.post-edit-actions{display:flex;gap:8px;margin-top:8px;justify-content:flex-end;}'
  + '.post-edit-save{background:#1a73e8;color:#fff;border:none;padding:8px 16px;border-radius:6px;font-size:13px;cursor:pointer;}'
  + '.post-edit-cancel{background:#f1f3f4;color:#5f6368;border:none;padding:8px 16px;border-radius:6px;font-size:13px;cursor:pointer;}'
  // Section headings
  + '.section-heading{margin:2px 0 5px;font-size:17px;font-weight:700;color:#202124;display:flex;align-items:center;gap:8px;}'
  + '.section-heading-icon{font-size:20px;}'
  // Load more
  + '.load-more-wrap{text-align:center;padding:10px 0;}'
  + '.load-more-btn{background:#f1f3f4;color:#1a73e8;border:1.5px solid #dadce0;border-radius:20px;padding:8px 24px;font-size:13px;font-weight:600;cursor:pointer;transition:background .15s;}'
  + '.load-more-btn:hover{background:#e8f0fe;}'
  + '.load-more-btn:disabled{opacity:0.65;cursor:not-allowed;background:#f1f3f4;}'
  // User profile modal
  + '.user-profile-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:100000;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);}'
  + '.user-profile-modal{background:#fff;border-radius:16px;padding:24px 20px;max-width:340px;width:92%;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,0.18);position:relative;max-height:85vh;overflow-y:auto;}'
  + '.upm-close{position:absolute;top:10px;right:14px;font-size:20px;cursor:pointer;color:#80868b;background:none;border:none;padding:4px;}'
  + '.upm-pic{margin:8px 0;}'
  + '.upm-pic img{width:80px;height:80px;border-radius:50%;object-fit:cover;border:3px solid #1a73e8;box-shadow:0 2px 10px rgba(26,115,232,0.25);cursor:pointer;}'
  + '.upm-name{font-size:18px;font-weight:700;color:#202124;margin:6px 0 2px;}'
  + '.upm-code{font-size:12px;color:#80868b;margin:0 0 4px;}'
  + '.upm-level{display:inline-block;background:#e8f0fe;color:#1a73e8;padding:3px 12px;border-radius:12px;font-size:12px;font-weight:600;margin:6px 0 10px;}'
  + '.upm-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:8px 0;}'
  + '.upm-stat{background:#f8f9fa;border-radius:10px;padding:10px 4px;border:1px solid #e8e8e8;}'
  + '.upm-stat-val{font-size:18px;font-weight:700;color:#1a73e8;}'
  + '.upm-stat-lbl{font-size:10px;color:#80868b;margin-top:2px;font-weight:500;}'
  + '.upm-actions{margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;}'
  + '.upm-msg-btn{background:#f0f4ff;color:#1a56cc;border:1px solid #c5d3f8;}'
  // Tutor chat styles
  + '.tutor-chat-area{height:0;min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px;transition:height .2s;}'
  + '.tutor-has-chat .tutor-chat-area{height:420px;overflow-y:auto;padding:12px 0;}'
  + '.tutor-pristine{text-align:center;}'
  + '.tutor-pristine .tutor-chat-area{display:none;}'
  + '.tutor-pristine .tutor-subtitle{display:none;}'
  + '.tutor-pristine .tutor-lang-row{display:none;}'
  + '.tutor-pristine .tutor-chat-counter{display:none;}'
  + '.tutor-pristine .tutor-mode-row{display:none;}'
  + '.tutor-pristine .tutor-input-row{display:none;}'
  + '.tutor-hero{display:none;flex-direction:column;align-items:center;padding:18px 0 14px;}'
  + '.tutor-pristine .tutor-hero{display:none;}'
  + '.tutor-pristine .tutor-chips{display:none;}'
  + '.tutor-onboarding{display:none;margin-bottom:14px;}'
  + '.tutor-pristine .tutor-onboarding{display:block;}'
  + '.tutor-ob-option{flex:1;padding:10px 8px;border-radius:12px;border:2px solid #dadce0;background:#f8f9fa;color:#5f6368;font-size:13px;font-weight:700;cursor:pointer;text-align:center;transition:all .2s;}'
  + '.tutor-ob-option.ob-selected{border-color:#1a73e8;background:#e8f0fe;color:#1a73e8;}'
  + '.tutor-hero-icon{font-size:46px;line-height:1;margin-bottom:10px;}'
  + '.tutor-hero-title{font-size:22px;font-weight:800;color:#202124;letter-spacing:-0.3px;margin-bottom:6px;}'
  + '.tutor-hero-sub{font-size:14px;color:#5f6368;line-height:1.5;max-width:260px;}'
  + '.tutor-chips{display:none;flex-wrap:wrap;justify-content:center;gap:8px;margin:14px 0 4px;}'
  + '.tutor-pristine .tutor-chips{display:none;}'
  + '.tutor-chip{background:#f1f3f4;border:1.5px solid #e0e0e0;border-radius:20px;padding:7px 14px;font-size:13px;color:#202124;cursor:pointer;transition:background .15s,border-color .15s;white-space:nowrap;}'
  + '.tutor-chip:hover{background:#e8f0fe;border-color:#1a73e8;color:#1a73e8;}'
  + '.tutor-pristine-hint{font-size:13px;color:#9aa0a6;margin-top:10px;line-height:1.6;}'
  + '.tutor-msg{max-width:80%;padding:10px 14px;border-radius:18px;font-size:15px;line-height:1.5;word-break:break-word;}'
  + '.tutor-msg-bot{align-self:flex-start;background:#f1f3f4;color:#202124;border-bottom-left-radius:4px;}'
  + '.tutor-msg-user{align-self:flex-end;background:#1a73e8;color:#fff;border-bottom-right-radius:4px;}'
  + '.tutor-input-row{display:flex;gap:8px;margin-top:10px;align-items:flex-end;}'
  + '.tutor-input{flex:1;border:2px solid #1a73e8;border-radius:22px;padding:11px 16px;font-size:15px;resize:none;max-height:80px;font-family:inherit;outline:none;transition:border-color .15s,box-shadow .15s;box-shadow:0 0 0 3px rgba(26,115,232,0.1);}'
  + '.tutor-input:focus{border-color:#1557b0;box-shadow:0 0 0 4px rgba(26,115,232,0.2);}'
  + '.tutor-send-btn{background:#1a73e8;color:#fff;border:none;border-radius:50%;width:38px;height:38px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s;}'
  + '.tutor-send-btn:hover{background:#1558b0;}'
  + '.tutor-send-btn:disabled{background:#b0bec5 !important;cursor:not-allowed;}'
  + '.speak-btn{background:none;border:1.5px solid #dadce0;cursor:pointer;font-size:13px;color:#5f6368;padding:2px 8px;border-radius:20px;line-height:1.4;vertical-align:middle;margin-left:6px;transition:all .15s;white-space:nowrap;}'
  + '.speak-btn:hover{background:#e8f0fe;border-color:#1a73e8;color:#1a73e8;}'
  + '.speak-btn.speaking{background:#1a73e8;border-color:#1a73e8;color:#fff;animation:speak-pulse 1s ease-in-out infinite;}'
  + '@keyframes speak-pulse{0%,100%{box-shadow:0 0 0 0 rgba(26,115,232,.45)}50%{box-shadow:0 0 0 6px rgba(26,115,232,0)}}'
  + '.tl-lang{display:inline-block;font-size:8px;font-weight:700;padding:0 3px;border-radius:3px;vertical-align:middle;margin-right:2px;letter-spacing:.4px;}'
  + '.en-lbl{background:#1a73e8;color:#fff;}'
  + '.bem-lbl{background:#e65100;color:#fff;}'
  + '.tutor-input:disabled{opacity:.55;cursor:not-allowed;}'
  + '.tutor-header{font-size:16px;font-weight:700;color:#202124;margin-bottom:4px;}'
  + '.tutor-subtitle{font-size:12px;color:#5f6368;margin-bottom:10px;}'
  + '.tutor-typing{display:flex;flex-direction:column;gap:6px;padding:8px 4px;min-width:200px;}'
  + '.tutor-typing-row{display:flex;align-items:center;gap:10px;}'
  + '.tutor-typing-spinner{width:22px;height:22px;border:3px solid #d2e3fc;border-top-color:#1a73e8;border-radius:50%;animation:tutor-spin .75s linear infinite;flex-shrink:0;}'
  + '.tutor-thinking-txt{font-size:13px;font-weight:700;color:#1a73e8;letter-spacing:.3px;animation:tutor-think-fade 1.4s ease-in-out infinite;flex:1;}'
  + '.tutor-thinking-timer{font-size:12px;font-weight:700;color:#fff;background:#1a73e8;border-radius:10px;padding:1px 8px;flex-shrink:0;}'
  + '.tutor-typing-bar-track{height:5px;border-radius:4px;background:#e8eaed;overflow:hidden;}'
  + '.tutor-typing-bar-fill{height:5px;border-radius:4px;background:linear-gradient(90deg,#1a73e8,#34a853);width:0%;animation:tutor-bar-grow 2.5s ease-in-out infinite alternate;}'
  + '@keyframes tutor-think-fade{0%,100%{opacity:.5}50%{opacity:1}}'
  + '@keyframes tutor-spin{to{transform:rotate(360deg)}}'
  + '@keyframes tutor-bar-grow{0%{width:15%}100%{width:90%}}'
  + '.tutor-chat-counter{font-size:12px;color:#5f6368;text-align:right;margin:-4px 0 8px;}'
  + '.tutor-chat-counter b{color:#1a73e8;}'
  + '.tutor-chat-counter.tcc-warn b{color:#f29900;}'
  + '.tutor-chat-counter.tcc-empty b{color:#ea4335;}'
  + '.tutor-mode-row{display:flex;gap:8px;margin:0 0 10px;}'
  + '.tutor-mode-btn{flex:1;padding:7px 0;border-radius:10px;border:2px solid #dadce0;background:#f8f9fa;color:#5f6368;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;}'
  + '.tutor-mode-btn.tutor-mode-active{background:#1a73e8;color:#fff;border-color:#1a73e8;box-shadow:0 2px 6px rgba(26,115,232,.25);}'
  + '.tutor-lang-row{display:flex;align-items:center;gap:6px;margin:0 0 8px;}'
  + '.tutor-lang-lbl{font-size:12px;color:#5f6368;}'
  + '.tutor-lang-btn{font-size:11px;font-weight:700;padding:3px 10px;border-radius:12px;border:1.5px solid #dadce0;background:#f1f3f4;color:#5f6368;cursor:pointer;transition:all .15s;}'
  + '.tutor-lang-btn.tutor-lang-active{background:#1a73e8;color:#fff;border-color:#1a73e8;}'
  + '.tutor-reset-row{text-align:center;margin-top:14px;padding-top:10px;border-top:1px solid #f1f3f4;}'
  + '.tutor-reset-link{font-size:12px;color:#9aa0a6;text-decoration:none;cursor:pointer;}'
  + '.tutor-reset-link:hover{color:#ea4335;text-decoration:underline;}'
  + '.home-ai-card{background:none; border-bottom:1px solid #10203f;margin-top:9px;display:inline-flex;align-items:center;gap:6px;}'
  + '.home-ai-label{font-size:12px;color:#5f6368;white-space:nowrap;flex-shrink:0;}'
  + '.home-ai-input{flex:1;border:1.5px solid #dadce0;border-radius:20px;padding:4px 8px;font-size:13px;resize:none;max-height:38px;min-height:32px;font-family:inherit;outline:none;background:#fff;color:#202124;}'
  + '.home-ai-input:focus{border-color:#1a73e8;}'
  + '.home-ai-btn{background:#fff;color:#1a73e8;border:1.5px solid #1a73e8;border-radius:20px;padding:4px 6px;font-size:12px;font-weight:600;cursor:pointer;flex-shrink:0;white-space:nowrap;transition:background .2s,color .2s;}'
  + '.home-ai-btn.btn-active{background:#1a73e8;color:#fff;}'
  + '.home-ai-btn:active{opacity:.85;}'
  + '.btn-neutral{background:#fff!important;color:#1a73e8!important;border:1.5px solid #1a73e8!important;box-shadow:none!important;}'
  + '.tutor-bem-reply{display:block;font-size:15px;color:#202124;font-weight:500;line-height:1.5;}'
  + '.tutor-en-collapsed{display:block;font-size:14px;color:#5f6368;margin-top:4px;font-style:italic;}'
  + '.tutor-bem-subtitle{display:block;font-size:15px;color:#000; opacity:0.9; margin-top:6px;}'
  + '.tutor-cursor::after{content:"|";display:inline-block;margin-left:1px;animation:tutor-blink .7s step-end infinite;color:#1a73e8;font-weight:300;}'
  + '@keyframes tutor-blink{0%,100%{opacity:1}50%{opacity:0}}'
  ;
document.head.appendChild(ss);

// ---- SECTION INJECTION ----
var dicWrapper = document.getElementById('dictionary-wrapper');
if (dicWrapper) {
  dicWrapper.insertAdjacentHTML('afterend', ''
    // PROFILE
    + '<section id="profile-section"><div id="profile-wrapper">'
    // Hero card
    + '<div class="profile-hero">'
    +   '<div class="profile-hero-banner"></div>'
    +   '<div class="profile-hero-body">'
    +     '<div id="profile-avatar"><span id="profile-pic-display">👤</span><span class="pic-edit-hint">📷</span></div>'
    +     '<input type="file" id="pic-file-input" accept="image/*">'
    +     '<div id="profile-name-display"><span id="profile-name-text"></span> <span id="profile-edit-btn" style="cursor:pointer;font-size:14px;">✏️</span></div>'
    +     '<div id="profile-friend-code">🔑 <b id="profile-code-value"></b> <span id="profile-copy-code" style="cursor:pointer;margin-left:2px;">📋</span></div>'
    +     '<div class="profile-main-stats">'
    +       '<div class="profile-main-stat"><div class="profile-main-stat-val" id="prof-rank">-</div><div class="profile-main-stat-lbl">Weekly Rank</div></div>'
    +       '<div class="profile-main-stat"><div class="profile-main-stat-val" id="prof-points">0</div><div class="profile-main-stat-lbl">This Week</div></div>'
    +       '<div class="profile-main-stat"><div class="profile-main-stat-val" id="prof-alltime">0</div><div class="profile-main-stat-lbl">All-time</div></div>'
    +       '<div class="profile-main-stat"><div class="profile-main-stat-val" id="prof-level">-</div><div class="profile-main-stat-lbl">Level</div></div>'
    +     '</div>'
    +   '</div>'
    + '</div>'
    // Challenge stats card
    + '<div class="profile-challenge-card">'
    +   '<div class="section-heading"><span class="section-heading-icon">🎯</span> Challenge Stats</div>'
    +   '<div class="stats-grid">'
    +     '<div class="stat-box"><div class="stat-val" id="prof-quizzes">0</div><div class="stat-lbl">Quizzes</div></div>'
    +     '<div class="stat-box stat-win"><div class="stat-val" id="prof-wins">0</div><div class="stat-lbl">Wins</div></div>'
    +     '<div class="stat-box stat-loss"><div class="stat-val" id="prof-losses">0</div><div class="stat-lbl">Losses</div></div>'
    +     '<div class="stat-box stat-draw"><div class="stat-val" id="prof-draws">0</div><div class="stat-lbl">Draws</div></div>'
    +   '</div>'
    +   '<div class="profile-last-active">Last Active: <b id="prof-last-active">-</b></div>'
    + '</div>'
    // Posts
    + '<div class="section-heading"><span class="section-heading-icon">📝</span> My Posts</div>'
    + '<div id="profile-posts-list" class="s-loading"><span class="s-spinner"></span>Loading posts...</div>'
    + '<div class="load-more-wrap" id="profile-posts-load-more" style="display:none;">'
    + '<button class="load-more-btn" id="profile-posts-load-more-btn">Load More</button>'
    + '</div>'
    + '</div></section>'
    // ONLINE USERS (replaces old Friends section)
    + '<section id="friends-section"><div id="friends-wrapper">'
    + '<div class="section-heading"><span class="section-heading-icon">🌐</span>Members<span id="members-count-badge" style="font-size:13px;font-weight:400;color:#5f6368;"></span></div>'
    + '<input id="online-search-input" placeholder="Search by name...">'
    + '<div id="online-users-content" class="s-loading"><span class="s-spinner"></span>Loading...</div>'
    + '</div></section>'
    // LEADERBOARD
    + '<section id="leaderboard-section"><div id="leaderboard-wrapper">'
    + '<div class="section-heading"><span class="section-heading-icon">🏅</span> Weekly Leaderboard</div>'
    + '<p style="color:#5f6368;font-size:13px;margin:4px 0 8px;line-height:1.5;">Top 3 users of the week win Free Unlimited Access for the given days. Points reset every Monday.</p>'
    + '<div style="display:flex;gap:6px;margin:0 0 10px;flex-wrap:wrap;">'
    +   '<span style="background:#fff8e1;border:1px solid #ffe082;border-radius:8px;padding:4px 10px;font-size:12px;font-weight:600;">🏆 #1 &nbsp;30 days</span>'
    +   '<span style="background:#f5f5f5;border:1px solid #e0e0e0;border-radius:8px;padding:4px 10px;font-size:12px;font-weight:600;">🥈 #2 &nbsp;14 days</span>'
    +   '<span style="background:#fbe9e7;border:1px solid #ffccbc;border-radius:8px;padding:4px 10px;font-size:12px;font-weight:600;">🥉 #3 &nbsp;7 days</span>'
    + '</div>'
    + '<div id="lb-countdown-card" style="background:linear-gradient(135deg,#1a73e8,#0d47a1);border-radius:12px;padding:10px 14px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;gap:10px;">'
    +   '<div style="color:rgba(255,255,255,0.85);font-size:12px;font-weight:500;line-height:1.4;">⏳ Awards in</div>'
    +   '<div id="lb-countdown" style="display:flex;gap:8px;align-items:center;"></div>'
    + '</div>'
    + '<p style="color:#888;font-size:12px;margin:0 0 12px;line-height:1.4;">Points shown are this week\'s total. All-time score is shown below your name. <b>Play quiz and log in daily to earn points.</b></p>'
    + '<div id="lb-global-list" class="s-loading"><span class="s-spinner"></span>Loading...</div>'
    + '</div></section>'
    // NOTIFICATIONS + MESSAGES (tabbed)
    + '<section id="notifications-section"><div id="notifications-wrapper">'
    + '<div class="section-heading"><span class="section-heading-icon">🔔</span> Notifications</div>'
    + '<div class="notif-tabs">'
    +   '<button class="notif-tab active" id="tab-notifs">Main</button>'
    +   '<button class="notif-tab" id="tab-msgs">💬 Messages<span id="msg-tab-badge" style="display:none;"></span></button>'
    + '</div>'
    + '<div id="notifications-list" class="s-empty">No notifications</div>'
    + '<div id="messages-conv-list" style="display:none;" class="s-empty">No messages yet</div>'
    + '</div></section>'
    // CHAT
    + '<section id="chat-section" style="display:none;padding:0;">'
    + '<div id="chat-header">'
    +   '<button id="chat-back-btn">&#8592;</button>'
    +   '<span id="chat-header-pic"></span>'
    +   '<div id="chat-header-info"><div id="chat-header-name"></div><span id="chat-header-status"></span></div>'
    + '</div>'
    + '<div id="chat-messages"></div>'
    + '<div id="chat-input-area">'
    +   '<textarea id="chat-text-input" rows="1" placeholder="Type a message..."></textarea>'
    +   '<button id="chat-send-btn">&#10148;</button>'
    + '</div>'
    + '</section>'
    // CHALLENGE
    + '<section id="challenge-section">'
    + '<div id="challenge-info">'
    + '<div class="ch-accept-card">'
    + '<div class="section-heading" style="justify-content:center;"><span class="section-heading-icon">🎯</span> Challenge!</div>'
    + '<div class="ch-opponent-pic" id="ch-opponent-pic"></div>'
    + '<div style="font-size:15px;font-weight:600;color:#202124;" id="ch-opponent-name"></div>'
    + '<div id="ch-challenge-msg"></div>'
    + '<div class="ch-score-label">Their score</div>'
    + '<div class="ch-score-preview"><span id="ch-opponent-score"></span>/10</div>'
    + '<div style="color:#5f6368;font-size:13px;margin:8px 0 16px;">Can you beat them?</div>'
    + '<button class="s-btn s-btn-g" id="start-challenge-btn" style="padding:14px 36px;font-size:15px;">Accept Challenge</button>'
    + '</div></div>'
    + '<div id="ch-quiz-wrapper" style="display:none;">'
    + '<div id="ch-progress-bar"><div id="ch-progress-fill" style="width:0%"></div></div>'
    + '<div id="ch-timer-bar">00:00</div>'
    + '<div id="ch-question-title">Question <span id="ch-q-num">1</span> / 10</div>'
    + '<div id="ch-question-wrapper"><span id="ch-query-text">What is the translation of </span><b id="ch-question-word"></b>?</div>'
    + '<div id="ch-options"></div></div>'
    + '<div id="ch-loading" style="display:none;text-align:center;padding:48px 20px;">'
    + '<div class="ch-loading-spinner"></div>'
    + '<div style="font-size:16px;font-weight:600;color:#202124;margin-top:18px;">Calculating Results...</div>'
    + '<div style="font-size:13px;color:#5f6368;margin-top:6px;">Hang tight while we tally the scores</div>'
    + '</div>'
    + '<div id="challenge-results" style="display:none;">'
    + '<div class="ch-accept-card">'
    + '<div class="section-heading" style="justify-content:center;"><span class="section-heading-icon">🏆</span> Results</div>'
    + '<div class="ch-comparison"><div class="ch-player"><div class="ch-player-name" id="ch-you-label">You</div><div class="ch-player-score" id="ch-you-score">0</div></div>'
    + '<div class="ch-vs">VS</div>'
    + '<div class="ch-player"><div class="ch-player-name" id="ch-opp-label">-</div><div class="ch-player-score" id="ch-opp-score-final">0</div></div></div>'
    + '<div class="ch-verdict" id="ch-verdict"></div>'
    + '<div class="ch-bonus" id="ch-bonus"></div>'
    + '<div id="ch-reply-section" style="display:none;margin:16px 0 0;">'
    + '<div id="ch-original-msg" style="margin-bottom:8px;"></div>'
    + '<textarea id="ch-reply-input" placeholder="Write a reply..." maxlength="200" rows="2" style="width:90%;padding:10px 14px;border:1.5px solid #dadce0;border-radius:12px;font-size:13px;outline:none;resize:none;transition:border-color .2s;"></textarea>'
    + '<div style="margin-top:8px;"><button class="s-btn s-btn-p" id="ch-reply-send" style="padding:10px 22px;">Send Reply</button></div>'
    + '</div>'
    + '<button class="s-btn s-btn-s" id="ch-back-btn" style="margin-top:14px;padding:10px 28px;">Back</button>'
    + '</div></div></section>'
    // POSTS FEED
    + '<section id="posts-feed-section" style="display:none;">'
    + '<div id="posts-feed-wrapper" style="margin-top:16px;">'
    + '<div class="social-card" id="translate-card">'
    + '<div class="tl-header">🌐All Languages translator</div>'
    + '<div class="tl-controls">'
    + '<div id="tl-src-wrap" style="flex:1;position:relative;">'
    + '<div class="tl-lang-wrap-label">From</div>'
    + '<button id="tl-src-btn" class="tl-lang-btn"><span id="tl-src-label">English</span><span class="tl-lang-arrow">&#9660;</span></button>'
    + '<div id="tl-src-drop" class="tl-lang-drop" style="display:none;">'
    + '<input id="tl-src-filter" class="tl-lang-filter" placeholder="Search language...">'
    + '<div id="tl-src-list" class="tl-lang-list"></div>'
    + '</div></div>'
    + '<button id="tl-swap-btn" class="tl-swap-btn" title="Swap languages">&#8644;</button>'
    + '<div id="tl-tgt-wrap" style="flex:1;position:relative;">'
    + '<div class="tl-lang-wrap-label">To</div>'
    + '<button id="tl-tgt-btn" class="tl-lang-btn"><span id="tl-tgt-label">' + LANG_NAME + '</span><span class="tl-lang-arrow">&#9660;</span></button>'
    + '<div id="tl-tgt-drop" class="tl-lang-drop" style="display:none;">'
    + '<input id="tl-tgt-filter" class="tl-lang-filter" placeholder="Search language...">'
    + '<div id="tl-tgt-list" class="tl-lang-list"></div>'
    + '</div></div>'
    + '</div>'
    + '<div style="display:flex;gap:8px;align-items:flex-end;margin-top:2px;">'
    + '<textarea id="tl-input" placeholder="Type English text here..." maxlength="300" rows="2" style="flex:1;"></textarea>'
    + '<button id="tl-go-btn" style="background:#1a73e8;color:#fff;border:none;border-radius:20px;padding:8px 18px;font-size:14px;font-weight:600;cursor:pointer;flex-shrink:0;height:38px;align-self:flex-end;">Translate</button>'
    + '</div>'
    + '<div id="tl-empty-hint" style="display:none;font-size:12px;color:#c0392b;margin-top:4px;">Please type a word or sentence to translate.</div>'
    + '<div id="tl-char-counter" class="tl-char-counter" style="display:none;"></div>'
    + '<div id="tl-result-wrap" class="tl-result-wrap" style="display:none;">'
    + '<div style="display:flex;align-items:center;gap:4px;">'
    + '<div class="tl-result-label" style="flex:1;">Translation</div>'
    + '<button id="tl-speak-btn" class="speak-btn" title="Listen">&#9654;</button>'
    + '</div>'
    + '<div id="tl-result"></div>'
    + '</div>'
    + '<div id="tl-examples-wrap" style="display:none;margin-top:8px;">'
    + '<div style="font-size:11px;font-weight:600;color:#80868b;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.4px;">&#10024; AI Example</div>'
    + '<div id="tl-examples"></div>'
    + '</div>'
    + '</div>'
     + '<span id="tl-unverified" style="display:none;font-size:9px;color:#b45309;background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:1px 5px;margin-top:2px;">&#9888; Translations may be unverified</span>'
+ '<div class="section-heading" id="members-posts-heading" style="margin-top:20px;"><span class="section-heading-icon">📰</span>Members Posts</div>'
    + '<div class="social-card" id="post-editor-card">'
    + '<!--<div class="post-editor-header">📝Post something</div>-->'
    + '<textarea id="post-content-input" placeholder="Write something about english translations..." maxlength="500" rows="3"></textarea>'
    + '<div class="post-editor-footer">'
    + '<span id="post-char-count">0/500</span>'
    + '<button class="s-btn s-btn-p" id="post-submit-btn">Post (+1pt)</button>'
    + '</div></div>'
    + '<div id="posts-list-wrapper" class="s-loading"><span class="s-spinner"></span>Loading posts...</div>'
    + '<div class="load-more-wrap" id="posts-load-more-wrap" style="display:none;">'
    + '<button class="load-more-btn" id="posts-load-more-btn">Load More</button>'
    + '</div></div></section>'
    // TUTOR section
    + '<section id="tutor-section" style="display:none;">'
    + '<div class="social-card" id="tutor-card" style="display:flex;flex-direction:column;">'
    + '<div class="tutor-hero">'
    +   '<div class="tutor-hero-title">' + LANG_NAME + ' AI</div>'
    +   '<div class="tutor-hero-sub">Ask anything — i will answer in ' + LANG_NAME.toLowerCase() + ' or english</div>'
    + '</div>'
    + '<div class="tutor-mode-row">'
    +   '<button class="tutor-mode-btn" id="tutor-mode-dict">📖 Dictionary</button>'
    +   '<button class="tutor-mode-btn tutor-mode-active" id="tutor-mode-general">💬 General</button>'
    + '</div>'
    + '<div class="tutor-chips" id="tutor-chips">'
    +   '<button class="tutor-chip" id="tutor-chip-1">How are you?</button>'
    +   '<button class="tutor-chip" id="tutor-chip-2">Tell me about Zambian history</button>'
    + '</div>'
    + '<div class="tutor-subtitle" id="tutor-subtitle">Ask me <b>anything</b>.</div>'
    + '<div class="tutor-lang-row">'
    +   '<span class="tutor-lang-lbl">Answer in:</span>'
    +   '<button class="tutor-lang-btn" id="tutor-lang-en">ENG</button>'
    +   '<button class="tutor-lang-btn tutor-lang-active" id="tutor-lang-bem">' + LANG_CODE.toUpperCase() + '</button>'
    + '</div>'
    + '<div class="tutor-chat-counter" id="tutor-chat-counter"></div>'
    + '<div class="tutor-chat-area" id="tutor-chat"></div>'
    + '<div class="tutor-input-row">'
    +   '<textarea class="tutor-input" id="tutor-input" rows="1" placeholder="Ask any question or word \u2026"></textarea>'
    +   '<button class="tutor-send-btn" id="tutor-send" title="Send">&#9658;</button>'
    + '</div>'
    + '<div style="margin-top:6px;text-align:right;">'
    +   '<span style="font-size:11px;color:#bbb;">&#9888; May be inaccurate</span>'
    +   '<button id="tutor-prompt-en" style="display:none;"></button>'
    +   '<button id="tutor-prompt-bem" style="display:none;"></button>'
    + '</div>'
    + '</div></section>'
  );


  var tutor_chip_1 = document.getElementById('tutor-chip-1');
var tutor_chip_2 = document.getElementById('tutor-chip-2');

      var ai_Eng_prompts_array=["How are you?", "Tell me about world history","what is matter?","What is the meaning of life?","What is love?","How to make money?","how to stay healthy?","How to prevent poverty?","What is the best way to make money?","why is marriage a problem?","who made you?","why do people fight?","how to be successful?","how to be rich?","how to be happy?","how to be healthy?","how to be strong?","how to be wise?","how to be generous?","how to be respectful?","how to be honest?","how to marry?","what is chemistry?","what is biology?"];

      // The left-hand chip is written in the user's chosen language, the way the
      // Bemba dictionary shows Bemba prompts. Bemba keeps its hand-written
      // originals; every other language gets these same questions translated
      // once and cached, so the suggestions read natively in all ~100 languages
      // rather than falling back to English.
      var ai_Bem_prompts_array=["Explain how our country gained independence","Does life have a purpose","What is love?","How do I make money?","How do I stay healthy?","How do I overcome poverty?","What are the ways of making money","How can I be happy?","Why do marriages fail?","Who made you?","Why do people fight?","What do people die of?","How can I be respected?","How can I get money?","How can I become wise?","How do I get married?"];

      var _BEMBA_PROMPTS=["Londolola ifyo Zambia yapokele ubutungwa","Bushe ubwikashi bwalikwata incito","Bushe icitemwiko cinshi?","Kupanga shani indalama?","Kutinaba shani no bumi busuma?","bushe kucimfya shani ubucushi?","Ninshila nshi shakupangilamo indalama","Kuti nasangalala shani?","Ninshi ukuupila kwabipila?","Nani wakupanga?","Ninshi abantu balwila?","Cinshi abantu bafwila","kuti nacindama shani?","kuti nakwata indalama shani?","Kuti naba namano shani?","Kuti naupa shani"];

      var _PROMPT_CACHE_KEY = 'alldic_chips_' + LANG_CODE;

      // Translate the suggestions into the active language once per device.
      // Until they arrive the English source is shown, so the chips are never
      // blank and a failed translation simply leaves them in English.
      function _loadLocalisedPrompts() {
        if (LANG_CODE === 'bem') { ai_Bem_prompts_array = _BEMBA_PROMPTS; return; }
        if (LANG_CODE === 'en') return;

        try {
          var cached = JSON.parse(localStorage.getItem(_PROMPT_CACHE_KEY) || 'null');
          if (cached && cached.length === ai_Bem_prompts_array.length) {
            ai_Bem_prompts_array = cached;
            return;
          }
        } catch (e) {}

        // One request, newline-separated: Google Translate returns the lines in
        // order, so they map straight back onto the source list.
        var joined = ai_Bem_prompts_array.join('\n');
        fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='
              + LANG_CODE + '&dt=t&q=' + encodeURIComponent(joined))
          .then(function(r) { return r.json(); })
          .then(function(d) {
            var out = (d && d[0]) ? d[0].map(function(s) { return s[0] || ''; }).join('') : '';
            var lines = out.split('\n').map(function(s) { return s.trim(); }).filter(Boolean);
            if (lines.length !== ai_Bem_prompts_array.length) return;   // drop a bad split
            ai_Bem_prompts_array = lines;
            try { localStorage.setItem(_PROMPT_CACHE_KEY, JSON.stringify(lines)); } catch (e) {}
            _refreshChips();
          })
          .catch(function() {});
      }

       //initial inner text for the button
      function _refreshChips() {
        tutor_chip_1.innerHTML = ai_Bem_prompts_array[Math.floor(Math.random()*ai_Bem_prompts_array.length)];
        tutor_chip_2.innerHTML = ai_Eng_prompts_array[Math.floor(Math.random()*ai_Eng_prompts_array.length)];
      }
      _loadLocalisedPrompts();
      _refreshChips();
      window._bemdic_refreshChips = _refreshChips;

      setInterval(_refreshChips, 7000);
}

// ---- NAV WIRING ----
function navTo(sectionId) {
  hide('section, #pagination-btns-wrapper, #more-links-wrapper');
  show('#' + sectionId);
  removeClass('.link', 'active_link');
  var sectionLinkMap = {
    'friends-section':       '#friends-link',
    'notifications-section': '#notif-link',
    'leaderboard-section':   '#lb-link',
    'tutor-section':         '#tutor-link',
    'profile-section':       '#friends-link'
  };
  var activeLink = sectionLinkMap[sectionId] || '#friends-link';
  addClass(activeLink, 'active_link');
  _currentSection = sectionId;
  history.pushState({ social: sectionId }, null);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  var homeAiWidget = document.getElementById('home-ai-widget');
  if (homeAiWidget) homeAiWidget.style.display = sectionId === 'tutor-section' ? 'none' : '';
  if (sectionId === 'tutor-section' && window._bemdic_updateTutorChatCounter) {
    window._bemdic_updateTutorChatCounter();
  }
}

// Quiz link — scroll to top (capture phase, fires before jQuery handler)
var quizNavLink = document.getElementById('quiz-link');
if (quizNavLink) {
  quizNavLink.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, true);
}

// Notification icon → Notifications section
var notifLink = document.getElementById('notif-link');
if (notifLink) {
  notifLink.addEventListener('click', function() {
    navTo('notifications-section');
    showNotifications();
    adjustPolling();
  });
}

// Leaderboard trophy icon
var lbLink = document.getElementById('lb-link');
if (lbLink) {
  lbLink.addEventListener('click', function() {
    navTo('leaderboard-section');
    showLeaderboard();
  });
}

// Friends/Online Users link
var friendsLink = document.getElementById('friends-link');
if (friendsLink) {
  friendsLink.addEventListener('click', function() {
    navTo('friends-section');
    loadOnlineUsers();
    adjustPolling();
  });
}

// Add Profile + Leaderboard + Notifications + AI Tutor to More menu
var moreLinks = document.getElementById('more-links-wrapper');
if (moreLinks) {
  var profileItem = document.createElement('li');
  profileItem.id = 'more-profile-item';
  profileItem.innerHTML = '<span>👤</span> My Profile';
  profileItem.style.cursor = 'pointer';
  profileItem.addEventListener('click', function() { navTo('profile-section'); showProfile(); });

 // The PDF ebook only exists for Bemba, so the entry is offered there alone —
 // selling a "French dictionary ebook" that cannot be delivered would be worse
 // than not offering it. Add the language here once its ebook is ready.
 var ebookMoreItem = null;
 if (LANG_CODE === 'bem') {
   ebookMoreItem = document.createElement('li');
   ebookMoreItem.id = 'more-ebook-item';
   ebookMoreItem.innerHTML = '<span>📘</span> Get ' + LANG_NAME + ' dictionary ebook (pdf)';
   ebookMoreItem.style.cursor = 'pointer';
   ebookMoreItem.addEventListener('click', function() { window._bemdic_showPdfPaywall(); });
 }

  var tutorMoreItem = document.createElement('li');
  tutorMoreItem.innerHTML = '<span>✨</span>Learn anything in ' + LANG_NAME;
  tutorMoreItem.style.cursor = 'pointer';
  tutorMoreItem.addEventListener('click', function() { navTo('tutor-section'); });

  var lbItem = document.createElement('li');
  lbItem.id = 'more-lb-item';
  lbItem.innerHTML = '<span>🏆</span> Leaderboard';
  lbItem.style.cursor = 'pointer';
  lbItem.addEventListener('click', function() { navTo('leaderboard-section'); showLeaderboard(); });

  var notifItem = document.createElement('li');
  notifItem.id = 'more-notif-item';
  notifItem.innerHTML = '<span>🔔</span> Notifications';
  notifItem.style.cursor = 'pointer';
  notifItem.addEventListener('click', function() { navTo('notifications-section'); showNotifications(); adjustPolling(); });

  var firstMore = moreLinks.children[0];
  moreLinks.insertBefore(notifItem, firstMore);
  moreLinks.insertBefore(lbItem, notifItem);
  moreLinks.insertBefore(tutorMoreItem, lbItem);
  moreLinks.insertBefore(profileItem, tutorMoreItem);
  // Absent for every language whose ebook is not ready yet.
  if (ebookMoreItem) moreLinks.insertBefore(ebookMoreItem, profileItem);
}


// Back button
window.addEventListener('popstate', function(e) {
  if (e.state && e.state.social) {
    navTo(e.state.social);
  } else {
    _currentSection = null;
    adjustPolling();
  }
});

// ---- NAME PROMPT ----
function showNamePrompt(callback) {
  var _regPicDataUrl = null;
  var overlay = document.createElement('div');
  overlay.className = 'name-modal-overlay';
  overlay.innerHTML = '<div class="name-modal">'
    + '<h3>Welcome!</h3><p>Choose a display name for your profile</p>'
    + '<input id="name-prompt-input" type="text" placeholder="Your name" minlength="3" maxlength="50">'
    + '<div id="name-prompt-error" style="color:#ea4335;font-size:13px;margin-top:6px;display:none;">Name must be at least 3 characters</div>'
    + '<div style="margin-top:18px;text-align:center;">'
    +   '<div id="reg-pic-preview" style="width:76px;height:76px;border-radius:50%;background:#f1f3f4;border:2.5px dashed #dadce0;display:flex;align-items:center;justify-content:center;font-size:32px;cursor:pointer;margin:0 auto 8px;overflow:hidden;transition:border-color .2s,box-shadow .2s;" title="Add profile picture">👤</div>'
    +   '<label for="reg-pic-input" style="font-size:13px;color:#1a73e8;cursor:pointer;font-weight:500;">Add profile picture </label>'
    +   '<input id="reg-pic-input" type="file" accept="image/*" style="display:none;">'
    + '</div>'
    + '<div style="margin-top:16px;"><button class="s-btn s-btn-p" id="name-prompt-save" style="padding:10px 24px;">Continue</button></div>'
    + '</div>';
  document.body.appendChild(overlay);

  var picPreview = document.getElementById('reg-pic-preview');
  var picInput = document.getElementById('reg-pic-input');
  picPreview.addEventListener('click', function() { picInput.click(); });
  picInput.addEventListener('change', function() {
    var file = this.files[0];
    if (!file) return;
    compressImage(file, function(dataUrl) {
      _regPicDataUrl = dataUrl;
      picPreview.style.border = '2.5px solid #1a73e8';
      picPreview.style.boxShadow = '0 0 0 3px rgba(26,115,232,0.15)';
      picPreview.innerHTML = '<img src="' + dataUrl + '" style="width:100%;height:100%;object-fit:cover;">';
    });
  });

  document.getElementById('name-prompt-save').addEventListener('click', function() {
    var val = document.getElementById('name-prompt-input').value.trim();
    var errEl = document.getElementById('name-prompt-error');
    if (val.length < 3) { errEl.style.display = 'block'; setTimeout(function(){ errEl.style.display = 'none'; }, 3000); return; }
    errEl.style.display = 'none';
    document.body.removeChild(overlay);
    callback(val, _regPicDataUrl);
  });
}

// ---- USER REGISTRATION ----
function checkAndRegisterUser() {
  var deviceId = getDeviceId();
  var userData = getUserData();
  if (userData && userData.name) {
    startPolling();
    syncPoints();
    apiCall('/user/update-activity', { device_id: deviceId, status: 'online' }, function(r) {
      if (r && r.sub_expiry_day) {
        var existing = JSON.parse(localStorage.getItem('bemdic_sub') || 'null');
        if (!existing || existing.expiryDay < r.sub_expiry_day) {
          localStorage.setItem('bemdic_sub', JSON.stringify({ code: 'server-sync', expiryDay: r.sub_expiry_day, activatedOn: Math.floor(Date.now() / 86400000), serverSynced: true }));
        }
      }
      // Retry server sync for codes activated while offline
      var sub = JSON.parse(localStorage.getItem('bemdic_sub') || 'null');
      if (sub && sub.code && sub.code !== 'server-sync' && !sub.serverSynced) {
        _syncSubCodeToServer(sub.code);
      }
    });
    return;
  }
  if (!navigator.onLine) return;
  var name = localStorage.getItem('bemdic_user_name');
  if (name) {
    registerUser(deviceId, name);
  } else {
    showNamePrompt(function(n, picDataUrl) {
      localStorage.setItem('bemdic_user_name', n);
      registerUser(deviceId, n, picDataUrl);
    });
  }
}
function registerUser(deviceId, name, picDataUrl) {
  apiCall('/register', { device_id: deviceId, name: name }, function(resp) {
    if (resp.ok && resp.user) {
      localStorage.setItem('bemdic_user_data', JSON.stringify(resp.user));
      function afterRegister() {
        startPolling();
        syncPoints();
        var postsFeed = document.getElementById('posts-feed-section');
        if (postsFeed) { postsFeed.style.display = 'block'; loadPosts(true); }
      }
      if (picDataUrl) {
        apiCall('/user/picture', { device_id: deviceId, picture: picDataUrl }, function(r) {
          if (r.ok) {
            var ud = resp.user;
            ud.picture = picDataUrl;
            localStorage.setItem('bemdic_user_data', JSON.stringify(ud));
          }
          afterRegister();
        });
      } else {
        afterRegister();
      }
    }
  });
}

// ---- PROFILE ----
function showProfile() {
  var ud = getUserData();
  if (ud) renderProfile(ud);
  apiCall('/user/profile', { device_id: getDeviceId() }, function(resp) {
    if (resp.ok && resp.user) {
      localStorage.setItem('bemdic_user_data', JSON.stringify(resp.user));
      renderProfile(resp.user);
      // Sync subscription status into localStorage so offline features work
      if (resp.user.sub_expiry_day) {
        var existing = JSON.parse(localStorage.getItem('bemdic_sub') || 'null');
        if (!existing || existing.expiryDay < resp.user.sub_expiry_day) {
          localStorage.setItem('bemdic_sub', JSON.stringify({
            code: 'server-sync',
            expiryDay: resp.user.sub_expiry_day,
            activatedOn: Math.floor(Date.now() / 86400000)
          }));
        }
      }
    }
  });
  loadProfilePosts(true);
}
function renderProfile(u) {
  var el = function(id) { return document.getElementById(id); };
  var picEl = el('profile-pic-display');
  if (picEl) {
    if (u.picture) picEl.innerHTML = '<img src="' + u.picture + '">';
    else picEl.innerHTML = '👤';
  }
  if (el('profile-name-text')) el('profile-name-text').textContent = u.name || '';
  if (el('prof-rank')) el('prof-rank').textContent = u.rank ? '#' + u.rank : '-';
  if (el('prof-points')) el('prof-points').textContent = (u.weekly_points != null ? u.weekly_points : u.points) || 0;
  if (el('prof-alltime')) el('prof-alltime').textContent = u.points || 0;
  if (el('prof-level')) el('prof-level').textContent = getLevelName(u.points || 0);
  if (el('prof-quizzes')) el('prof-quizzes').textContent = u.total_quizzes || 0;
  if (el('prof-wins')) el('prof-wins').textContent = u.challenges_won || 0;
  if (el('prof-losses')) el('prof-losses').textContent = u.challenges_lost || 0;
  if (el('prof-draws')) el('prof-draws').textContent = u.challenges_drawn || 0;
  if (el('prof-last-active')) el('prof-last-active').textContent = u.last_seen ? timeAgo(u.last_seen) : '-';
}

// Profile edit name
var editBtn = document.getElementById('profile-edit-btn');
if (editBtn) {
  editBtn.addEventListener('click', function() {
    var current = (getUserData() || {}).name || '';
    var newName = prompt('Enter new display name:', current);
    if (newName && newName.trim().length >= 3 && newName.trim() !== current) {
      apiCall('/user/update', { device_id: getDeviceId(), name: newName.trim() }, function(resp) {
        if (resp.ok) {
          var ud = getUserData() || {};
          ud.name = newName.trim();
          localStorage.setItem('bemdic_user_data', JSON.stringify(ud));
          localStorage.setItem('bemdic_user_name', newName.trim());
          showProfile();
        }
      });
    }
  });
}

// Profile picture upload
var profAvatar = document.getElementById('profile-avatar');
var picInput = document.getElementById('pic-file-input');
if (profAvatar && picInput) {
  // Click on the pic-edit-hint (camera icon) opens file picker
  var picEditHint = profAvatar.querySelector('.pic-edit-hint');
  if (picEditHint) picEditHint.addEventListener('click', function(e) { e.stopPropagation(); picInput.click(); });
  // Click on the avatar image itself enlarges it
  profAvatar.addEventListener('click', function() {
    var img = this.querySelector('img');
    if (img && img.src) showPicOverlay(img.src);
  });
  picInput.addEventListener('change', function() {
    if (!this.files || !this.files[0]) return;
    var picDisplay = document.getElementById('profile-pic-display');
    if (picDisplay) picDisplay.innerHTML = '<div class="s-loading" style="padding:4px;"><span class="s-spinner" style="width:18px;height:18px;border-width:2.5px;margin-right:4px;"></span>Uploading...</div>';
    resizeAndUploadPicture(this.files[0], function(dataUrl) {
      if (dataUrl) showProfile();
      else if (picDisplay) picDisplay.innerHTML = '👤';
    });
    picInput.value = '';
  });
}

// Profile posts timeline
var _profilePostsOffset = 0;
var _profilePostsLimit = 20;

function loadProfilePosts(reset) {
  if (reset) _profilePostsOffset = 0;

  var listWrapper = document.getElementById('profile-posts-list');
  var loadMoreWrap = document.getElementById('profile-posts-load-more');

  if (reset && listWrapper) listWrapper.innerHTML = '<div class="s-loading"><span class="s-spinner"></span>Loading...</div>';

  apiCall('/posts/user-posts', {
    device_id: getDeviceId(),
    limit: _profilePostsLimit,
    offset: _profilePostsOffset
  }, function(resp) {
    if (!resp.ok || !resp.posts) {
      if (listWrapper) listWrapper.innerHTML = '<div class="s-empty">Could not load posts</div>';
      return;
    }

    if (reset && listWrapper) listWrapper.innerHTML = '';

    if (resp.posts.length === 0 && _profilePostsOffset === 0) {
      if (listWrapper) listWrapper.innerHTML = '<div class="s-empty">No posts yet</div>';
      if (loadMoreWrap) loadMoreWrap.style.display = 'none';
      return;
    }

    renderPosts(resp.posts, listWrapper);

    if (loadMoreWrap) {
      if (resp.posts.length === _profilePostsLimit) {
        loadMoreWrap.style.display = 'block';
      } else {
        loadMoreWrap.style.display = 'none';
      }
    }

    _profilePostsOffset += resp.posts.length;
  });
}

var profilePostsLoadMoreBtn = document.getElementById('profile-posts-load-more-btn');
if (profilePostsLoadMoreBtn) {
  profilePostsLoadMoreBtn.addEventListener('click', function() {
    var btn = this;
    btn.disabled = true;
    btn.innerHTML = '<span class="s-spinner" style="width:18px;height:18px;border-width:2.5px;margin-right:5px;"></span>Loading...';
    loadProfilePosts(false);
    setTimeout(function() {
      btn.disabled = false;
      btn.textContent = 'Load More';
    }, 1000);
  });
}

// ---- ONLINE USERS ----
var _onlineOffset = 0;
var _onlineQuery = '';

// Helper: Check if user is online (last_seen within 20 seconds)
function isUserOnline(lastSeenStr) {
  if (!lastSeenStr) return false;
  try {
    // Parse "2024-02-17 15:30:00" format
    var parts = lastSeenStr.split(' ');
    if (parts.length !== 2) return false;
    var dateParts = parts[0].split('-');
    var timeParts = parts[1].split(':');
    var lastSeenDate = new Date(Date.UTC(
      parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]),
      parseInt(timeParts[0]), parseInt(timeParts[1]), parseInt(timeParts[2])
    ));
    var ageMs = Date.now() - lastSeenDate.getTime();
    return ageMs <= 20000; // Online if seen within 20 seconds
  } catch(e) {
    return false;
  }
}

// Helper: format last_seen as relative time string
function relativeTime(lastSeenStr) {
  if (!lastSeenStr) return 'never';
  try {
    var parts = lastSeenStr.split(' ');
    if (parts.length !== 2) return '';
    var dp = parts[0].split('-'), tp = parts[1].split(':');
    var d = new Date(Date.UTC(+dp[0], +dp[1]-1, +dp[2], +tp[0], +tp[1], +tp[2]));
    var sec = Math.floor((Date.now() - d.getTime()) / 1000);
    if (sec < 60) return 'just now';
    if (sec < 3600) return Math.floor(sec/60) + ' min ago';
    if (sec < 86400) return Math.floor(sec/3600) + ' hr ago';
    if (sec < 604800) return Math.floor(sec/86400) + ' days ago';
    return Math.floor(sec/604800) + ' wk ago';
  } catch(e) { return ''; }
}

function loadOnlineUsers(query, append) {
  if (!append) { _onlineOffset = 0; _onlineQuery = query || ''; }
  var listEl = document.getElementById('online-users-content');
  if (!append && listEl) listEl.innerHTML = '<div class="s-loading"><span class="s-spinner"></span>Loading...</div>';
  var data = { device_id: getDeviceId(), offset: _onlineOffset };
  if (_onlineQuery) data.query = _onlineQuery;
  apiCall('/users/online', data, function(resp) {
    if (!resp.ok) {
      if (listEl && !append) listEl.innerHTML = '<div class="s-empty">Could not load users</div>';
      if (append && listEl) {
        var lmb = listEl.querySelector('.load-more-btn');
        if (lmb) { lmb.disabled = false; lmb.textContent = 'Load More'; }
      }
      return;
    }
    if (!append && resp.total != null) {
      var badge = document.getElementById('members-count-badge');
      var totalCount = resp.total + (getUserData() ? 1 : 0);
      if (badge) badge.textContent = '(' + totalCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ')';
    }
    renderOnlineUsers(resp.users || [], resp.has_more, append);
  });
}

function renderOnlineUsers(users, hasMore, append) {
  var el = document.getElementById('online-users-content');
  if (!el) return;

  if (!append && !users.length) {
    el.innerHTML = '<div class="s-empty">No members found.</div>';
    return;
  }

  var tbody;
  if (append) {
    tbody = el.querySelector('tbody');
    var oldBtn = el.querySelector('.load-more-wrap');
    if (oldBtn) oldBtn.remove();
  } else {
    el.innerHTML = '<table class="online-table"><thead></thead><tbody></tbody></table>';
    tbody = el.querySelector('tbody');
  }

  for (var i = 0; i < users.length; i++) {
    var u = users[i];
    var online = isUserOnline(u.last_seen);
    var dotClass = online ? 'dot-on' : 'dot-off';
    var statusText = online ? 'Online' : relativeTime(u.last_seen);

    var tr = document.createElement('tr');
    var picEl = profilePicHtml(u.picture, 48, true);
    picEl = picEl.replace('class="clickable-pic"', 'class="clickable-pic" data-uid="' + u.id + '"');
    var proBadge = u.is_pro ? '<span style="background:linear-gradient(135deg,#ff8c00,#ff6000);color:#fff;font-size:9px;font-weight:bold;padding:1px 5px;border-radius:3px;margin-left:4px;vertical-align:middle;">💸PAID</span>' : '';
    tr.innerHTML = '<td class="pic-cell">' + picEl + '</td>'
      + '<td class="name-cell">' + truncName(u.name) + proBadge + '<br><span class="name-meta"><span class="friend-dot ' + dotClass + '"></span>' + getLevelName(u.points) + ' · ' + u.points + 'pts · ' + statusText + '</span></td>'
      + '<td class="action-cell" style="vertical-align:middle;width:80px;min-width:80px;">'
    +   '<button class="mem-btn mem-ch-btn ch-btn" data-uid="' + u.id + '" data-uname="' + escapeHtml(u.name) + '" data-upic="' + escapeHtml(u.picture || '') + '">⚔Challenge</button>'
    +   '<button class="mem-btn mem-msg-btn" data-uid="' + u.id + '" data-uname="' + escapeHtml(u.name) + '" data-upic="' + escapeHtml(u.picture || '') + '" data-lastseen="' + (u.last_seen || '') + '">💬Message</button>'
    + '</td>';
    tbody.appendChild(tr);
  }

  if (hasMore) {
    var wrap = document.createElement('div');
    wrap.className = 'load-more-wrap';
    wrap.innerHTML = '<button class="load-more-btn">Load More</button>';
    el.appendChild(wrap);
    wrap.querySelector('.load-more-btn').addEventListener('click', function() {
      this.disabled = true;
      this.textContent = 'Loading…';
      _onlineOffset += 30;
      loadOnlineUsers(null, true);
    });
  }

  wireOnlineUserHandlers(el);
}

function wireOnlineUserHandlers(el) {
  var chBtns = el.querySelectorAll('.ch-btn:not([data-wired])');
  for (var b = 0; b < chBtns.length; b++) {
    chBtns[b].setAttribute('data-wired', '1');
    chBtns[b].addEventListener('click', function() {
      var uid = parseInt(this.getAttribute('data-uid'));
      var uname = this.getAttribute('data-uname');
      var upic = this.getAttribute('data-upic') || '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      startChallenge(uid, uname, upic);
    });
  }
  var msgBtns = el.querySelectorAll('.mem-msg-btn:not([data-wired])');
  for (var m = 0; m < msgBtns.length; m++) {
    msgBtns[m].setAttribute('data-wired', '1');
    msgBtns[m].addEventListener('click', function() {
      var uid = parseInt(this.getAttribute('data-uid'));
      var uname = this.getAttribute('data-uname');
      var upic = this.getAttribute('data-upic');
      var uls = this.getAttribute('data-lastseen') || '';
      var ud = getUserData();
      if (!ud || !ud.picture) {
        showPicRequiredModal(function() { openChat(uid, uname, upic, uls); });
      } else {
        openChat(uid, uname, upic, uls);
      }
    });
  }
  var pics = el.querySelectorAll('.clickable-pic[data-uid]:not([data-wired])');
  for (var p = 0; p < pics.length; p++) {
    pics[p].setAttribute('data-wired', '1');
    pics[p].addEventListener('click', function(e) {
      e.stopPropagation();
      var uid = parseInt(this.getAttribute('data-uid'));
      if (uid) { window.scrollTo({ top: 0, behavior: 'smooth' }); showUserProfile(uid); }
    });
  }
}

// Search filter for online users
var onlineSearchInput = document.getElementById('online-search-input');
var _searchTimeout = null;
if (onlineSearchInput) {
  onlineSearchInput.addEventListener('input', function() {
    clearTimeout(_searchTimeout);
    var q = this.value.trim();
    _searchTimeout = setTimeout(function() {
      loadOnlineUsers(q || undefined);
    }, 400);
  });
}

// ---- CHALLENGE SYSTEM ----

// -- Sender flow --
function startChallenge(userId, userName, userPic) {
  window.__bemdic_challenge_mode = true;
  window.__bemdic_challenge_target = { id: userId, name: userName, picture: userPic || '', message: '' };
  // Pre-configure quiz section (will be navigated to when Start is clicked)
  hide('section, #pagination-btns-wrapper, #more-links-wrapper');
  show('#quiz-section');
  show('#quiz-instructions');
  hide('#quiz-questions-wrapper');
  removeClass('.link', 'active_link');
  addClass('#quiz-link', 'active_link');
  if (window._quizTimerInterval) { clearInterval(window._quizTimerInterval); window._quizTimerInterval = null; }
  question_number = 0;
  scored_marks = 0;
  gen_random_question = [];
  // Hide checkbox in challenge mode
  var instrCheckbox = document.querySelector('#quiz-instructions input[type="checkbox"]');
  var instrCheckboxLabel = instrCheckbox ? instrCheckbox.nextSibling : null;
  if (instrCheckbox) instrCheckbox.style.display = 'none';
  if (instrCheckboxLabel && instrCheckboxLabel.style) instrCheckboxLabel.style.display = 'none';
  // Override start button to pick up message from battle card
  var startBtn = document.getElementById('start-quiz');
  if (startBtn) {
    startBtn._challengeHandler = function() {
      window.__bemdic_challenge_target.message = window.__bemdic_pending_challenge_msg || '';
      window.__bemdic_pending_challenge_msg = '';
      startBtn.removeEventListener('click', startBtn._challengeHandler);
      var cb = document.querySelector('#quiz-instructions input[type="checkbox"]');
      var cbLabel = cb ? cb.nextSibling : null;
      if (cb) cb.style.display = '';
      if (cbLabel && cbLabel.style) cbLabel.style.display = '';
    };
    startBtn.addEventListener('click', startBtn._challengeHandler);
  }
  showChallengeBattleCard(userName, userPic || '');
}

function showChallengeBattleCard(opponentName, opponentPic) {
  // Show inside challenge-section like normal content — no fixed overlay
  navTo('challenge-section');
  var info = document.getElementById('challenge-info');
  var quizW = document.getElementById('ch-quiz-wrapper');
  var results = document.getElementById('challenge-results');
  var loading = document.getElementById('ch-loading');
  if (quizW) quizW.style.display = 'none';
  if (results) results.style.display = 'none';
  if (loading) loading.style.display = 'none';

  var myData = getUserData ? getUserData() : (JSON.parse(localStorage.getItem('bemdic_user_data') || 'null') || {});
  var myName = myData.name || 'You';
  var myPic = myData.picture || '';

  var myPicHtml = myPic
    ? '<img src="' + escapeHtml(myPic) + '" style="width:72px;height:72px;border-radius:50%;object-fit:cover;">'
    : '<div style="width:72px;height:72px;border-radius:50%;background:#e8e8e8;display:flex;align-items:center;justify-content:center;font-size:30px;">👤</div>';
  var oppPicHtml = opponentPic
    ? '<img src="' + escapeHtml(opponentPic) + '" style="width:72px;height:72px;border-radius:50%;object-fit:cover;">'
    : '<div style="width:72px;height:72px;border-radius:50%;background:#e8e8e8;display:flex;align-items:center;justify-content:center;font-size:30px;">👤</div>';

  if (info) {
    info.style.display = 'block';
    info.innerHTML =
      '<div class="ch-accept-card">'
      + '<div style="font-size:11px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#999;margin-bottom:4px;">Quiz Challenge</div>'
    

      // Players row
      + '<div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:20px;">'
        + '<div style="text-align:center;flex:1;">'
          + '<div style="width:72px;height:72px;border-radius:50%;border:3px solid #34a853;overflow:hidden;margin:0 auto 8px;box-shadow:0 2px 12px rgba(52,168,83,0.3);">' + myPicHtml + '</div>'
          + '<div style="font-size:13px;font-weight:700;color:#202124;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:90px;margin:0 auto;">' + escapeHtml(truncName(myName, 10)) + '</div>'
          + '<div style="color:#34a853;font-size:10px;font-weight:700;letter-spacing:1px;margin-top:3px;">YOU</div>'
        + '</div>'
        + '<div style="flex-shrink:0;background:#f1f3f4;border-radius:50%;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#5f6368;">VS</div>'
        + '<div style="text-align:center;flex:1;">'
          + '<div style="width:72px;height:72px;border-radius:50%;border:3px solid #ea4335;overflow:hidden;margin:0 auto 8px;box-shadow:0 2px 12px rgba(234,67,53,0.3);">' + oppPicHtml + '</div>'
          + '<div style="font-size:13px;font-weight:700;color:#202124;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:90px;margin:0 auto;">' + escapeHtml(truncName(opponentName, 10)) + '</div>'
          + '<div style="color:#ea4335;font-size:10px;font-weight:700;letter-spacing:1px;margin-top:3px;">OPPONENT</div>'
        + '</div>'
      + '</div>'

      // Quick rules
      + '<div style="background:#f8f9fa;border:1px solid #e8e8e8;border-radius:12px;padding:12px;margin-bottom:16px;">'
        + '<div style="display:flex;justify-content:space-around;">'
          + '<div style="text-align:center;"><div style="font-size:18px;">🏆</div><div style="font-size:12px;font-weight:700;color:#34a853;margin-top:2px;">Win +10pts</div></div>'
          + '<div style="text-align:center;"><div style="font-size:18px;">🤝</div><div style="font-size:12px;font-weight:700;color:#1a73e8;margin-top:2px;">Draw +5pts</div></div>'
        + '</div>'
      + '</div>'

      + '<textarea id="_ch_battle_msg" placeholder="Add a message to ' + escapeHtml(opponentName) + '... (optional)" maxlength="200" rows="2" style="width:100%;box-sizing:border-box;padding:10px 12px;border:1.5px solid #dadce0;border-radius:10px;font-size:13px;resize:none;outline:none;font-family:sans-serif;color:#202124;margin-bottom:14px;"></textarea>'
      + '<button id="_ch_battle_start_btn" class="s-btn s-btn-g" style="width:100%;padding:14px;font-size:15px;font-weight:700;margin-bottom:10px;">⚔️ Start quiz</button>'
      + '<button id="_ch_battle_cancel_btn" style="width:100%;padding:8px;background:transparent;border:none;color:#999;font-size:13px;cursor:pointer;">Cancel</button>'
      + '</div>';
  }

  document.getElementById('_ch_battle_start_btn').addEventListener('click', function() {
    var msgEl = document.getElementById('_ch_battle_msg');
    window.__bemdic_pending_challenge_msg = msgEl ? msgEl.value.trim() : '';
    // Navigate back to quiz section and start
    hide('section, #pagination-btns-wrapper, #more-links-wrapper');
    show('#quiz-section');
    show('#quiz-instructions');
    hide('#quiz-questions-wrapper');
    removeClass('.link', 'active_link');
    addClass('#quiz-link', 'active_link');
    var startBtn = document.getElementById('start-quiz');
    if (startBtn) startBtn.click();
  });

  document.getElementById('_ch_battle_cancel_btn').addEventListener('click', function() {
    window.__bemdic_challenge_mode = false;
    window.__bemdic_challenge_target = null;
    var startBtn = document.getElementById('start-quiz');
    if (startBtn && startBtn._challengeHandler) {
      startBtn.removeEventListener('click', startBtn._challengeHandler);
    }
    var cb = document.querySelector('#quiz-instructions input[type="checkbox"]');
    var cbLabel = cb ? cb.nextSibling : null;
    if (cb) cb.style.display = '';
    if (cbLabel && cbLabel.style) cbLabel.style.display = '';
    navTo('friends-section');
    loadOnlineUsers();
  });
}

// MutationObserver on quiz results to detect challenge quiz completion
var qrw = document.getElementById('quiz-results-wrapper');
if (qrw) {
  var qrwObs = new MutationObserver(function() {
    if (!window.__bemdic_challenge_mode) return;
    if (qrw.style.display === 'none' || qrw.offsetParent === null) return;
    // Quiz finished in challenge mode
    var questions = [];
    for (var i = 0; i < gen_random_question.length; i++) {
      var idx = gen_random_question[i];
      var parts = english_bemba_array[idx].split('#');
      questions.push({ index: idx, eng: parts[0], bem: parts[1] });
    }
    var target = window.__bemdic_challenge_target;
    var score = scored_marks;

    apiCall('/challenge/send', {
      device_id: getDeviceId(),
      receiver_id: target.id,
      sender_score: score,
      questions: questions,
      message: target.message || ''
    }, function(resp) {
      window.__bemdic_challenge_mode = false;
      window.__bemdic_challenge_target = null;
      syncPoints();
      // Show "waiting for opponent" screen in challenge section
      navTo('challenge-section');
      var info = document.getElementById('challenge-info');
      var quizW = document.getElementById('ch-quiz-wrapper');
      var results = document.getElementById('challenge-results');
      var loading = document.getElementById('ch-loading');
      if (quizW) quizW.style.display = 'none';
      if (loading) loading.style.display = 'none';
      if (results) results.style.display = 'none';
      if (info) {
        info.style.display = 'block';
        var scoreColor = score >= 7 ? '#137333' : score >= 5 ? '#1a73e8' : '#c5221f';
        var scoreLabel = score >= 7 ? '🔥 Great score!' : score >= 5 ? '👍 Decent score' : '😬 Tough one!';
        var oppPicSrc = target.picture || '';
        var oppPicEl = oppPicSrc
          ? '<img src="' + escapeHtml(oppPicSrc) + '" style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:3px solid #ea4335;">'
          : '<div style="width:64px;height:64px;border-radius:50%;background:#f1f3f4;border:3px solid #ea4335;display:flex;align-items:center;justify-content:center;font-size:26px;">👤</div>';

        info.innerHTML = resp.ok
          ? '<div class="ch-accept-card" style="text-align:center;">'
            // Sent banner
            + '<div style="display:inline-block;background:#e6f4ea;border-radius:20px;padding:5px 14px;font-size:12px;font-weight:700;color:#137333;letter-spacing:1px;margin-bottom:16px;">✅ Challenge Sent To <b>' + escapeHtml(target.name) + '</b></div>'
            // Score row
            + '<div style="background:#f8f9fa;border:1px solid #e8e8e8;border-radius:14px;padding:16px;margin-bottom:16px;">'
              + '<div style="font-size:12px;color:#999;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;">Your Score</div>'
              + '<div style="font-size:42px;font-weight:900;color:' + scoreColor + ';line-height:1;">' + score + '<span style="font-size:20px;font-weight:500;color:rgba(0,0,0,0.9);">/10</span></div>'
              + '<div style="font-size:13px;color:#5f6368;margin-top:4px;">' + scoreLabel + '</div>'
            + '</div>'
            // Waiting strip
            + '<div style="background:#fff8e1;border:1px solid #ffe082;border-radius:12px;padding:14px;margin-bottom:20px;">'
              + '<div style="font-size:20px;margin-bottom:6px;">⏳</div>'
              + '<div style="font-size:14px;font-weight:700;color:#5d4037;margin-bottom:4px;">Waiting for ' + escapeHtml(target.name) + '...</div>'
              + '<div style="font-size:13px;color:#795548;">You\'ll get a notification as soon as they complete the quiz.</div>'
            + '</div>'
            + '<button id="_ch_done_back_btn" class="s-btn s-btn-s" style="width:100%;padding:12px;">Back to Members</button>'
            + '</div>'
          : '<div class="ch-accept-card">'
            + '<div style="font-size:32px;margin-bottom:10px;">❌</div>'
            + '<div style="font-weight:700;color:#c5221f;margin-bottom:6px;">Failed to send challenge</div>'
            + '<div style="color:#5f6368;font-size:13px;margin-bottom:16px;">Please try again.</div>'
            + '<button id="_ch_done_back_btn" class="s-btn s-btn-s" style="padding:10px 28px;">Back to Members</button>'
            + '</div>';

        var backBtn = document.getElementById('_ch_done_back_btn');
        if (backBtn) backBtn.addEventListener('click', function() { navTo('friends-section'); loadOnlineUsers(); });
      }
    });
    qrwObs.disconnect();
    setTimeout(function() { qrwObs.observe(qrw, { attributes: true, attributeFilter: ['style'] }); }, 2000);
  });
  qrwObs.observe(qrw, { attributes: true, attributeFilter: ['style'] });
}

// -- Receiver flow --
var _challengeData = null;
var _chScore = 0;
var _chTimerInterval = null;
var _chSession = 0; // incremented each new quiz start — invalidates stale callbacks

function openReceivedChallenge(challengeId) {
  navTo('challenge-section');
  var info = document.getElementById('challenge-info');
  var quizW = document.getElementById('ch-quiz-wrapper');
  var results = document.getElementById('challenge-results');
  if (info) info.style.display = 'block';
  if (quizW) quizW.style.display = 'none';
  if (results) results.style.display = 'none';

  // Show loading overlay inside challenge-info while fetching
  var chCard = info ? info.querySelector('.ch-accept-card') : null;
  var loadingEl = document.createElement('div');
  loadingEl.id = 'ch-detail-loading';
  loadingEl.style.cssText = 'text-align:center;padding:40px 20px;';
  loadingEl.innerHTML = '<div class="ch-loading-spinner"></div>'
    + '<div style="font-size:14px;color:#5f6368;margin-top:14px;font-weight:500;">Loading challenge...</div>';
  if (chCard) chCard.style.visibility = 'hidden';
  if (info) info.appendChild(loadingEl);

  apiCall('/challenge/detail', { device_id: getDeviceId(), challenge_id: challengeId }, function(resp) {
    // Remove loading overlay
    var ld = document.getElementById('ch-detail-loading');
    if (ld) ld.parentNode.removeChild(ld);
    if (chCard) chCard.style.visibility = '';

    if (!resp.ok || !resp.challenge) { if (info) info.innerHTML = '<div class="s-empty">Could not load challenge</div>'; return; }
    _challengeData = resp.challenge;
    _challengeData.parsedQuestions = typeof resp.challenge.questions === 'string' ? JSON.parse(resp.challenge.questions) : resp.challenge.questions;

    if (resp.challenge.status === 'completed') {
      showChallengeResult({
        sender_name: resp.challenge.is_sender ? 'You' : resp.challenge.opponent_name,
        receiver_name: resp.challenge.is_sender ? resp.challenge.opponent_name : 'You',
        sender_score: resp.challenge.sender_score,
        receiver_score: resp.challenge.receiver_score,
        is_sender: resp.challenge.is_sender,
        sender_bonus: resp.challenge.sender_points_awarded,
        receiver_bonus: resp.challenge.receiver_points_awarded
      });
      return;
    }

    var oppName = document.getElementById('ch-opponent-name');
    var oppScore = document.getElementById('ch-opponent-score');
    var chMsg = document.getElementById('ch-challenge-msg');
    var oppPic = document.getElementById('ch-opponent-pic');
    if (oppPic) oppPic.innerHTML = profilePicHtml(resp.challenge.opponent_picture, 56, true);
    if (oppName) oppName.textContent = resp.challenge.opponent_name;
    if (oppScore) oppScore.textContent = resp.challenge.sender_score;
    if (chMsg) {
      if (!resp.challenge.is_system && resp.challenge.message) {
        chMsg.innerHTML = '<div class="ch-msg">"' + escapeHtml(resp.challenge.message) + '"</div>';
      } else {
        chMsg.innerHTML = '';
      }
    }
    // Clickable opponent pic
    var cpic = oppPic ? oppPic.querySelector('.clickable-pic') : null;
    if (cpic) cpic.addEventListener('click', function(e) { e.stopPropagation(); showPicOverlay(this.src); });
  });
}

// Start challenge button
var startChBtn = document.getElementById('start-challenge-btn');
if (startChBtn) {
  startChBtn.addEventListener('click', function() {
    if (!_challengeData) return;
    _chScore = 0;
    _chSession++;
    document.getElementById('challenge-info').style.display = 'none';
    document.getElementById('ch-quiz-wrapper').style.display = 'block';
    loadChallengeQuestion(_chSession, 1);
  });
}

function loadChallengeQuestion(session, qNum) {
  if (session !== _chSession) return; // stale callback from a previous quiz session
  clearInterval(_chTimerInterval);

  if (qNum > 10) {
    document.getElementById('ch-quiz-wrapper').style.display = 'none';
    document.getElementById('ch-loading').style.display = 'block';
    apiCall('/challenge/respond', {
      device_id: getDeviceId(),
      challenge_id: _challengeData.id,
      receiver_score: _chScore
    }, function(resp) {
      if (resp.ok) {
        showChallengeResult({
          sender_name: resp.result.sender_name,
          receiver_name: 'You',
          sender_score: resp.result.sender_score,
          receiver_score: resp.result.receiver_score,
          is_sender: false,
          sender_bonus: resp.result.sender_bonus,
          receiver_bonus: resp.result.receiver_bonus,
          winner: resp.result.winner,
          challenge_message: _challengeData.message || '',
          challenge_id: _challengeData.id
        });
        syncPoints();
        var completedChallengeId = _challengeData.id;
        apiCall('/notifications/poll', { device_id: getDeviceId(), offset: 0 }, function(pollResp) {
          if (!pollResp.ok) return;
          var matchIds = (pollResp.notifications || []).filter(function(n) {
            if (n.type !== 'challenge_received') return false;
            try { var d = typeof n.data === 'string' ? JSON.parse(n.data) : n.data; return d.challenge_id === completedChallengeId; } catch(e) { return false; }
          }).map(function(n) { return n.id; });
          if (matchIds.length > 0) apiCall('/notifications/mark-read', { device_id: getDeviceId(), notification_ids: matchIds }, function() {});
        });
      }
    });
    return;
  }

  var q = _challengeData.parsedQuestions[qNum - 1];
  var qNumEl = document.getElementById('ch-q-num');
  if (qNumEl) qNumEl.textContent = qNum;
  var progFill = document.getElementById('ch-progress-fill');
  if (progFill) progFill.style.width = ((qNum - 1) * 10) + '%';

  var askEng = qNum <= 5;
  var questionWord = askEng ? q.eng : q.bem;
  var correctAnswer = askEng ? q.bem : q.eng;
  var queryText = document.getElementById('ch-query-text');
  if (queryText) queryText.textContent = 'What is the translation of ';
  var qWordEl = document.getElementById('ch-question-word');
  if (qWordEl) qWordEl.textContent = questionWord;

  var wrongAnswers = [];
  while (wrongAnswers.length < 3) {
    var ri = Math.floor(Math.random() * english_bemba_array.length);
    var parts = english_bemba_array[ri].split('#');
    var wrong = askEng ? parts[1] : parts[0];
    if (wrong !== correctAnswer && wrongAnswers.indexOf(wrong) === -1) {
      wrongAnswers.push(wrong);
    }
  }

  var options = wrongAnswers.slice();
  var correctPos = Math.floor(Math.random() * 4);
  options.splice(correctPos, 0, correctAnswer);

  var optEl = document.getElementById('ch-options');
  if (!optEl) return;
  var html = '';
  for (var i = 0; i < 4; i++) {
    html += '<div class="ch-option" data-ans="' + escapeHtml(options[i]) + '">' + String.fromCharCode(65 + i) + '. ' + escapeHtml(options[i]) + '</div>';
  }
  optEl.innerHTML = html;

  var opts = optEl.querySelectorAll('.ch-option');
  var answered = false;
  for (var o = 0; o < opts.length; o++) {
    opts[o].addEventListener('click', function() {
      if (answered) return;
      answered = true;
      clearInterval(_chTimerInterval);
      var selected = this.getAttribute('data-ans');
      if (selected === correctAnswer) {
        this.classList.add('ch-correct');
        _chScore++;
      } else {
        this.classList.add('ch-wrong');
        for (var x = 0; x < opts.length; x++) {
          if (opts[x].getAttribute('data-ans') === correctAnswer) opts[x].classList.add('ch-correct');
        }
      }
      for (var x = 0; x < opts.length; x++) opts[x].style.pointerEvents = 'none';
      setTimeout(function() { loadChallengeQuestion(session, qNum + 1); }, 1500);
    });
  }

  var timeLeft = 15;
  var timerBar = document.getElementById('ch-timer-bar');
  if (timerBar) timerBar.textContent = '00:15';
  _chTimerInterval = setInterval(function() {
    if (session !== _chSession) { clearInterval(_chTimerInterval); return; }
    timeLeft--;
    if (timerBar) timerBar.textContent = '00:' + (timeLeft < 10 ? '0' : '') + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(_chTimerInterval);
      if (!answered) {
        answered = true;
        for (var x = 0; x < opts.length; x++) {
          if (opts[x].getAttribute('data-ans') === correctAnswer) opts[x].classList.add('ch-correct');
          opts[x].style.pointerEvents = 'none';
        }
        setTimeout(function() { loadChallengeQuestion(session, qNum + 1); }, 1500);
      }
    }
  }, 1000);
}

function showChallengeResult(data) {
  var info = document.getElementById('challenge-info');
  var quizW = document.getElementById('ch-quiz-wrapper');
  var loading = document.getElementById('ch-loading');
  var results = document.getElementById('challenge-results');
  if (info) info.style.display = 'none';
  if (quizW) quizW.style.display = 'none';
  if (loading) loading.style.display = 'none';
  if (results) results.style.display = 'block';

  var youScore, oppScore, youName, oppName, youBonus;
  if (data.is_sender) {
    youScore = data.sender_score; oppScore = data.receiver_score;
    youName = 'You'; oppName = data.receiver_name;
    youBonus = data.sender_bonus;
  } else {
    youScore = data.receiver_score; oppScore = data.sender_score;
    youName = 'You'; oppName = data.sender_name;
    youBonus = data.receiver_bonus;
  }

  var youLabel = document.getElementById('ch-you-label');
  var youScoreEl = document.getElementById('ch-you-score');
  var oppLabel = document.getElementById('ch-opp-label');
  var oppScoreEl = document.getElementById('ch-opp-score-final');
  var verdict = document.getElementById('ch-verdict');
  var bonus = document.getElementById('ch-bonus');

  if (youLabel) youLabel.textContent = youName;
  if (youScoreEl) { youScoreEl.textContent = youScore + '/10'; youScoreEl.style.color = youScore > oppScore ? '#084' : (youScore < oppScore ? 'crimson' : '#058'); }
  if (oppLabel) oppLabel.textContent = oppName;
  if (oppScoreEl) { oppScoreEl.textContent = oppScore + '/10'; oppScoreEl.style.color = oppScore > youScore ? '#084' : (oppScore < youScore ? 'crimson' : '#058'); }

  var winner = data.winner || (youScore > oppScore ? (data.is_sender ? 'sender' : 'receiver') : (youScore < oppScore ? (data.is_sender ? 'receiver' : 'sender') : 'draw'));
  var iWon = (data.is_sender && winner === 'sender') || (!data.is_sender && winner === 'receiver');
  var isDraw = winner === 'draw';

  if (verdict) {
    if (isDraw) { verdict.textContent = "It's a Draw!"; verdict.style.color = '#058'; }
    else if (iWon) { verdict.textContent = 'You Win! +10pts'; verdict.style.color = '#084'; }
    else { verdict.textContent = 'You Lost!'; verdict.style.color = 'crimson'; }
  }
  if (bonus) {
    if (youBonus > 0) bonus.textContent = '+' + youBonus + ' points earned';
    else bonus.textContent = isDraw && youScore === 0 ? 'No points for 0:0 draw' : '';
  }

  // Reply / encouragement section after finishing
  var replySection = document.getElementById('ch-reply-section');
  var originalMsg = document.getElementById('ch-original-msg');
  var replyInput = document.getElementById('ch-reply-input');
  if (replySection) {
    if (_challengeData.is_system) {
      // System challenge: replace reply UI with "challenge friends" encouragement
      replySection.style.display = 'block';
      replySection.innerHTML = '<div style="background:#e8f5e9;border:1px solid #c8e6c9;border-radius:10px;padding:14px 16px;text-align:center;">'
        + '<div style="font-size:20px;margin-bottom:4px;">🏆</div>'
        + '<div style="font-size:14px;font-weight:700;color:#2e7d32;margin-bottom:6px;">Want to earn more points?</div>'
        + '<div style="font-size:13px;color:#5f6368;margin-bottom:10px;">Challenge your friends and beat their score to win <b>+10 points</b>!</div>'
        + '<button id="ch-go-friends-btn" style="padding:9px 22px;background:#2e7d32;color:#fff;border:none;border-radius:20px;font-size:14px;font-weight:700;cursor:pointer;">Find Friends to Challenge</button>'
        + '</div>';
      var goFriendsBtn = document.getElementById('ch-go-friends-btn');
      if (goFriendsBtn) goFriendsBtn.addEventListener('click', function() {
        navTo('friends-section');
        loadOnlineUsers();
      });
    } else if (!data.is_sender && data.challenge_message) {
      replySection.style.display = 'block';
      if (originalMsg) originalMsg.innerHTML = '<div class="ch-msg">"' + escapeHtml(data.challenge_message) + '"</div>';
      if (replyInput) replyInput.value = '';
    } else {
      replySection.style.display = 'none';
    }
  }
}

// Reply send button
var chReplyBtn = document.getElementById('ch-reply-send');
if (chReplyBtn) {
  chReplyBtn.addEventListener('click', function() {
    var input = document.getElementById('ch-reply-input');
    var msg = input ? input.value.trim() : '';
    if (!msg) return;
    if (!_challengeData || !_challengeData.id) return;
    chReplyBtn.disabled = true;
    chReplyBtn.textContent = 'Sending...';
    apiCall('/challenge/reply', {
      device_id: getDeviceId(),
      challenge_id: _challengeData.id,
      reply_message: msg
    }, function(resp) {
      if (resp.ok) {
        chReplyBtn.textContent = 'Sent!';
        if (input) input.disabled = true;
      } else {
        chReplyBtn.disabled = false;
        chReplyBtn.textContent = 'Send Reply';
        _toast(resp.error || 'Failed to send reply', true);
      }
    });
  });
}

// Back from challenge results
var chBackBtn = document.getElementById('ch-back-btn');
if (chBackBtn) {
  chBackBtn.addEventListener('click', function() {
    navTo('friends-section');
    loadOnlineUsers();
  });
}

// ---- LEADERBOARD COUNTDOWN ----
var _lbCountdownTimer = null;
function startLBCountdown() {
  if (_lbCountdownTimer) clearInterval(_lbCountdownTimer);
  function tick() {
    var el = document.getElementById('lb-countdown');
    if (!el) { clearInterval(_lbCountdownTimer); return; }
    var now = new Date();
    // Next Monday 00:00:00 UTC
    var d = now.getUTCDay(); // 0=Sun,1=Mon..6=Sat
    var daysLeft = d === 1 ? 7 : (8 - d) % 7;
    var nextMonday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + daysLeft, 0, 0, 0));
    var diff = nextMonday.getTime() - now.getTime();
    if (diff < 0) diff = 0;
    var days = Math.floor(diff / 86400000);
    var hrs  = Math.floor((diff % 86400000) / 3600000);
    var mins = Math.floor((diff % 3600000) / 60000);
    var secs = Math.floor((diff % 60000) / 1000);
    function unit(v, label) {
      return '<div style="text-align:center;min-width:36px;">'
        + '<div style="font-size:20px;font-weight:700;color:#fff;line-height:1;">' + (v < 10 ? '0' : '') + v + '</div>'
        + '<div style="font-size:9px;color:rgba(255,255,255,0.65);margin-top:2px;text-transform:uppercase;letter-spacing:.5px;">' + label + '</div>'
        + '</div>';
    }
    el.innerHTML = unit(days,'days') + '<div style="color:rgba(255,255,255,0.5);font-size:18px;font-weight:300;align-self:flex-start;margin-top:4px;">:</div>'
      + unit(hrs,'hrs') + '<div style="color:rgba(255,255,255,0.5);font-size:18px;font-weight:300;align-self:flex-start;margin-top:4px;">:</div>'
      + unit(mins,'min') + '<div style="color:rgba(255,255,255,0.5);font-size:18px;font-weight:300;align-self:flex-start;margin-top:4px;">:</div>'
      + unit(secs,'sec');
  }
  tick();
  _lbCountdownTimer = setInterval(tick, 1000);
}

// ---- LEADERBOARD ----
function showLeaderboard() {
  loadGlobalLB();
  startLBCountdown();
}
function loadGlobalLB() {
  var el = document.getElementById('lb-global-list');
  if (el) el.innerHTML = '<div class="s-loading"><span class="s-spinner"></span>Loading...</div>';
  apiCall('/leaderboard/global', { device_id: getDeviceId() }, function(resp) {
    if (!resp.ok) { if (el) el.innerHTML = '<div class="s-empty">Could not load</div>'; return; }
    renderLB(el, resp.leaders, resp.my_rank);
  });
}
function renderLB(el, leaders, myRank) {
  if (!el || !leaders.length) { if (el) el.innerHTML = '<div class="s-empty">No data yet</div>'; return; }
  var html = '';
  var medals = ['🏆', '🥈', '🥉'];
  var proBadge = '<span style="background:linear-gradient(135deg,#ff8c00,#ff6000);color:#fff;font-size:9px;font-weight:bold;padding:1px 5px;border-radius:3px;margin-left:4px;vertical-align:middle;">💸PAID</span>';
  for (var i = 0; i < leaders.length; i++) {
    var l = leaders[i];
    var weekPts = l.weekly_points != null ? l.weekly_points : (l.points || 0);
    var allPts = l.all_time_points != null ? l.all_time_points : (l.points || 0);
    html += '<div class="lb-row" data-uid="' + (l.id || '') + '" style="border-bottom:1px solid #e0e0e0;cursor:pointer;">'
      + '<span class="lb-rank">' + (i < 3 ? medals[i] : '#' + (i + 1)) + '</span>'
      + '<span class="lb-pic">' + profilePicHtml(l.picture, 34, true) + '</span>'
      + '<div class="lb-info"><div class="lb-name">' + truncName(l.name) + (l.is_pro ? proBadge : '') + '</div>'
      + '<div class="lb-level">' + getLevelName(allPts) + ' &bull; <span style="color:#888;font-size:11px;">all-time: ' + allPts + 'pts</span></div></div>'
      + '<span class="lb-pts">' + weekPts + 'pts</span></div>';
  }

  // Show current user's position if not in top 40
  if (myRank) {
    var myWeekPts = myRank.weekly_points != null ? myRank.weekly_points : (myRank.points || 0);
    var myAllPts = myRank.all_time_points != null ? myRank.all_time_points : (myRank.points || 0);
    html += '<div style="text-align:center;padding:6px 0;color:#999;font-size:12px;border-bottom:1px solid #e0e0e0;">&#8942; &#8942; &#8942;</div>';
    html += '<div class="lb-row lb-me" data-uid="' + (myRank.id || '') + '" style="border-bottom:1px solid #e0e0e0;cursor:pointer;background:#e3f2fd;">'
      + '<span class="lb-rank" style="color:#1565c0;font-weight:bold;">#' + myRank.rank + '</span>'
      + '<span class="lb-pic">' + profilePicHtml(myRank.picture, 34, true) + '</span>'
      + '<div class="lb-info"><div class="lb-name" style="color:#1565c0;font-weight:bold;">' + truncName(myRank.name) + ' (You)' + (myRank.is_pro ? proBadge : '') + '</div>'
      + '<div class="lb-level">' + getLevelName(myAllPts) + ' &bull; <span style="color:#888;font-size:11px;">all-time: ' + myAllPts + 'pts</span></div></div>'
      + '<span class="lb-pts" style="color:#1565c0;font-weight:bold;">' + myWeekPts + 'pts</span></div>';
  }

  el.innerHTML = html;

  // Click row to view profile
  var rows = el.querySelectorAll('.lb-row');
  for (var r = 0; r < rows.length; r++) {
    rows[r].addEventListener('click', function() {
      var uid = this.getAttribute('data-uid');
      if (uid) showUserProfile(parseInt(uid));
    });
  }
}


// ---- NOTIFICATIONS ----
function startPolling() {
  if (_pollInterval) return;
  pollNow();
  _pollInterval = setInterval(pollNow, _pollDelay);
}
function adjustPolling() {
  clearInterval(_pollInterval);
  _pollInterval = null;
  var delay = (_currentSection === 'friends-section' || _currentSection === 'notifications-section') ? _activePollDelay : _pollDelay;
  pollNow();
  _pollInterval = setInterval(pollNow, delay);
}
// --- User activity tracking (idle = no interaction for 2 minutes) ---
var _lastActivity = Date.now();
var _userIdle = false;
var _lastHeartbeat = 0;
function _onUserActivity() {
  _lastActivity = Date.now();
  // Send heartbeat to update last_seen (throttled to once per 10 seconds)
  if (Date.now() - _lastHeartbeat > 10000) {
    _lastHeartbeat = Date.now();
    apiCall('/user/update-activity', { device_id: getDeviceId(), status: 'online' }, function() {});
  }
  if (_userIdle) { _userIdle = false; adjustPolling(); }
}
['click','touchstart','keydown','scroll','mousemove'].forEach(function(evt) {
  document.addEventListener(evt, _onUserActivity, { passive: true });
});

// --- Pause polling when tab hidden or user idle ---
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    clearInterval(_pollInterval);
    _pollInterval = null;
    // Mark user as offline immediately
    apiCall('/user/update-activity', { device_id: getDeviceId(), status: 'offline' }, function() {});
  } else {
    _lastActivity = Date.now();
    _userIdle = false;
    adjustPolling();
  }
});

// Send offline signal when page is being unloaded
window.addEventListener('beforeunload', function() {
  // Use sendBeacon for reliable delivery even when page is closing
  if (navigator.sendBeacon) {
    var data = JSON.stringify({ device_id: getDeviceId(), status: 'offline' });
    navigator.sendBeacon(API_BASE + '/user/update-activity', data);
  }
});

function pollNow() {
  if (!navigator.onLine) return;
  if (document.hidden) return;

  var timeSinceActivity = Date.now() - _lastActivity;

  // Check idle: no interaction for 30 seconds
  if (timeSinceActivity > 30000) {
    if (!_userIdle) {
      _userIdle = true;
      // Mark user as offline when going idle
      apiCall('/user/update-activity', { device_id: getDeviceId(), status: 'offline' }, function() {});
    }
    // Stop polling to prevent keeping user online
    clearInterval(_pollInterval);
    _pollInterval = null;
    return;
  }

  var ud = getUserData();
  if (!ud) return;

  // Send heartbeat - user is active
  apiCall('/notifications/poll', { device_id: getDeviceId() }, function(resp) {
    if (resp.ok) {
      updateBadge(resp.unread_count);
      updateMsgBadge(resp.unread_messages || 0);
    }
  });

  // Update online users count badge
  apiCall('/users/online', { device_id: getDeviceId() }, function(resp) {
    if (resp.ok) {
      // Count only truly online users (within 20 seconds)
      var onlineUsers = (resp.users || []).filter(function(u) { return isUserOnline(u.last_seen); });
      updateOnlineCount(onlineUsers.length);
    }
  });
}
function updateBadge(count) {
  var badge = document.getElementById('notif-badge');
  if (!badge) return;
  if (count > 0) { badge.textContent = count; badge.style.display = 'inline'; }
  else { badge.style.display = 'none'; }
}
function updateMsgBadge(count) {
  var badge = document.getElementById('msg-badge');
  var tabBadge = document.getElementById('msg-tab-badge');
  if (badge) {
    if (count > 0) { badge.textContent = count; badge.style.display = 'inline'; }
    else { badge.style.display = 'none'; }
  }
  if (tabBadge) {
    if (count > 0) { tabBadge.textContent = count; tabBadge.style.display = 'inline-block'; }
    else { tabBadge.style.display = 'none'; }
  }
}
// ---- NOTIFICATIONS / MESSAGES TABS ----
(function() {
  var tabNotifs = document.getElementById('tab-notifs');
  var tabMsgs = document.getElementById('tab-msgs');
  if (tabNotifs) tabNotifs.addEventListener('click', function() {
    tabNotifs.classList.add('active'); tabMsgs.classList.remove('active');
    document.getElementById('notifications-list').style.display = '';
    document.getElementById('messages-conv-list').style.display = 'none';
    showNotifications();
  });
  if (tabMsgs) tabMsgs.addEventListener('click', function() {
    tabMsgs.classList.add('active'); tabNotifs.classList.remove('active');
    document.getElementById('notifications-list').style.display = 'none';
    document.getElementById('messages-conv-list').style.display = '';
    showConversations();
  });
})();

// ---- PROFILE PIC REQUIRED MODAL (for messaging) ----
function showPicRequiredModal(onSuccess) {
  var overlay = document.createElement('div');
  overlay.className = 'name-modal-overlay';
  overlay.innerHTML = '<div class="name-modal">'
    + '<div style="font-size:40px;margin-bottom:6px;">📸</div>'
    + '<h3>Profile Picture Required</h3>'
    + '<p>You need a profile picture before you can send messages.</p>'
    + '<input type="file" id="pic-modal-input" accept="image/*" style="display:none;">'
    + '<button class="s-btn s-btn-g" id="pic-modal-upload-btn" style="width:100%;margin-bottom:8px;">Upload Picture</button>'
    + '<div id="pic-modal-status" style="font-size:12px;color:#5f6368;min-height:16px;"></div>'
    + '<button class="s-btn" id="pic-modal-cancel" style="width:100%;margin-top:6px;background:#f1f3f4;color:#3c4043;">Cancel</button>'
    + '</div>';

  var closePicModal = function() { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); };
  document.body.appendChild(overlay);
  _pushModal(closePicModal);

  var fileInput = overlay.querySelector('#pic-modal-input');
  var uploadBtn = overlay.querySelector('#pic-modal-upload-btn');
  var cancelBtn = overlay.querySelector('#pic-modal-cancel');
  var status = overlay.querySelector('#pic-modal-status');

  uploadBtn.addEventListener('click', function() { fileInput.click(); });
  cancelBtn.addEventListener('click', function() { _popModal(); closePicModal(); });

  fileInput.addEventListener('change', function() {
    if (!this.files || !this.files[0]) return;
    uploadBtn.disabled = true;
    status.innerHTML = '<span class="s-spinner" style="width:12px;height:12px;border-width:2px;display:inline-block;margin-right:4px;"></span>Uploading...';
    resizeAndUploadPicture(this.files[0], function(dataUrl) {
      if (dataUrl) {
        _popModal(); closePicModal();
        if (onSuccess) onSuccess();
      } else {
        uploadBtn.disabled = false;
        status.textContent = 'Upload failed. Please try again.';
      }
    });
  });
}

// ---- CONVERSATIONS LIST ----
var _convOffset = 0;
function showConversations(append) {
  var el = document.getElementById('messages-conv-list');
  if (!el) return;
  if (!append) { _convOffset = 0; el.innerHTML = '<div class="s-loading"><span class="s-spinner"></span>Loading...</div>'; }
  apiCall('/messages/conversations', { device_id: getDeviceId(), offset: _convOffset }, function(resp) {
    if (!append) el.innerHTML = '';
    if (!resp.ok || (!resp.conversations.length && !append)) {
      el.innerHTML = '<div class="s-empty">No conversations yet.<br><span style="font-size:12px;color:#888;">Go to Members and tap Message to start one.</span></div>';
      return;
    }
    resp.conversations.forEach(function(c) {
      var online = isUserOnline(c.last_seen);
      var preview = (c.last_message || '').length > 15 ? c.last_message.substring(0, 15) + '...' : (c.last_message || '');
      var row = document.createElement('div');
      row.className = 'conv-row' + (c.unread_count > 0 ? ' unread-conv' : '');
      row.innerHTML = '<div class="conv-pic-wrap">'
        +   profilePicHtml(c.picture, 46, false)
        +   (online ? '<span class="conv-online-dot"></span>' : '')
        + '</div>'
        + '<div class="conv-info">'
        +   '<div class="conv-top">'
        +     '<div class="conv-name">' + escapeHtml(c.name) + '</div>'
        +     '<div class="conv-time">' + (c.last_message_time ? timeAgo(c.last_message_time) : '') + '</div>'
        +   '</div>'
        +   '<div class="conv-bottom">'
        +     '<div class="conv-preview">' + escapeHtml(preview) + '</div>'
        +     (c.unread_count > 0 ? '<div class="conv-unread-badge">' + c.unread_count + '</div>' : '')
        +   '</div>'
        + '</div>';
      row.addEventListener('click', function() {
        openChat(c.other_user_id, c.name, c.picture || '', c.last_seen);
      });
      el.appendChild(row);
    });
    if (resp.has_more) {
      var loadBtn = document.createElement('div');
      loadBtn.style.cssText = 'text-align:center;padding:10px;';
      loadBtn.innerHTML = '<button style="background:#f1f3f4;border:none;border-radius:20px;padding:8px 22px;font-size:13px;color:#1a73e8;cursor:pointer;font-weight:500;">Load more</button>';
      loadBtn.querySelector('button').addEventListener('click', function() {
        loadBtn.remove();
        _convOffset += 15;
        showConversations(true);
      });
      el.appendChild(loadBtn);
    }
  });
}

// ---- CHAT ----
var _chatUserId = null, _chatOffset = 0, _chatMyId = null;

function openChat(userId, userName, userPic, lastSeen) {
  _chatUserId = userId;
  _chatOffset = 0;
  navTo('chat-section');
  // Header
  var headerPic = document.getElementById('chat-header-pic');
  var headerName = document.getElementById('chat-header-name');
  var headerStatus = document.getElementById('chat-header-status');
  if (headerPic) {
    headerPic.innerHTML = profilePicHtml(userPic, 36, false);
    headerPic.style.cursor = 'pointer';
    headerPic.onclick = function() { if (_chatUserId) showUserProfile(_chatUserId); };
  }
  if (headerName) {
    headerName.textContent = userName;
    headerName.style.cursor = 'pointer';
    headerName.onclick = function() { if (_chatUserId) showUserProfile(_chatUserId); };
  }
  if (headerStatus) {
    var online = isUserOnline(lastSeen);
    headerStatus.textContent = online ? 'Online' : (lastSeen ? 'Last seen ' + timeAgo(lastSeen) : '');
    headerStatus.className = online ? 'online' : '';
  }
  // Reset send button
  var sendBtn = document.getElementById('chat-send-btn');
  if (sendBtn) { sendBtn.disabled = true; sendBtn.innerHTML = '&#10148;'; }
  // Clear messages
  var msgEl = document.getElementById('chat-messages');
  if (msgEl) msgEl.innerHTML = '<div class="s-loading"><span class="s-spinner"></span></div>';
  loadChatMessages(false);
}

function loadChatMessages(append) {
  if (!_chatUserId) return;
  apiCall('/messages/conversation', { device_id: getDeviceId(), other_user_id: _chatUserId, offset: _chatOffset }, function(resp) {
    if (!resp.ok) return;
    _chatMyId = resp.my_id;
    renderChatMessages(resp.messages || [], resp.has_more, append);
    if (!append) {
      // Scroll to bottom on first load
      var msgEl = document.getElementById('chat-messages');
      if (msgEl) setTimeout(function() { msgEl.scrollTop = msgEl.scrollHeight; }, 50);
    }
    updateMsgBadge(0); // clear badge when chat is open
  });
}

function renderChatMessages(messages, hasMore, append) {
  var el = document.getElementById('chat-messages');
  if (!el) return;
  if (!append) el.innerHTML = '';

  // Remove existing load-older button
  var oldBtn = el.querySelector('.chat-load-older');
  if (oldBtn) oldBtn.remove();

  // Prepend "load older" button if there are more
  if (hasMore) {
    var wrap = document.createElement('div');
    wrap.className = 'chat-load-older';
    wrap.innerHTML = '<button>Load older messages</button>';
    wrap.querySelector('button').addEventListener('click', function() {
      _chatOffset += 20;
      var prevHeight = el.scrollHeight;
      loadChatMessages(true);
      // Keep scroll position after prepend
      setTimeout(function() { el.scrollTop = el.scrollHeight - prevHeight; }, 100);
    });
    el.insertBefore(wrap, el.firstChild);
  }

  messages.forEach(function(m) {
    var isMe = m.sender_id === _chatMyId;
    var side = isMe ? 'me' : 'them';
    var wrap = document.createElement('div');
    wrap.className = 'chat-bubble-wrap' + (isMe ? ' me' : '');
    var msg = document.createElement('div');
    msg.className = 'chat-msg ' + side;
    msg.innerHTML = '<div class="chat-bubble ' + side + '">' + escapeHtml(m.content) + '</div>'
      + '<div class="chat-time">' + timeAgo(m.created_at) + '</div>';
    if (!isMe) {
      var pic = document.createElement('span');
      pic.className = 'chat-pic';
      pic.innerHTML = profilePicHtml(m.sender_picture, 28, false);
      wrap.appendChild(pic);
    }
    wrap.appendChild(msg);
    el.appendChild(wrap);
  });
}

// Back button from chat
(function() {
  var backBtn = document.getElementById('chat-back-btn');
  if (backBtn) backBtn.addEventListener('click', function() {
    navTo('notifications-section');
    // Switch to messages tab
    var tabMsgs = document.getElementById('tab-msgs');
    var tabNotifs = document.getElementById('tab-notifs');
    if (tabMsgs) { tabMsgs.classList.add('active'); tabNotifs.classList.remove('active'); }
    document.getElementById('notifications-list').style.display = 'none';
    document.getElementById('messages-conv-list').style.display = '';
    showConversations();
  });
})();

// Send message
(function() {
  var sendBtn = document.getElementById('chat-send-btn');
  var input = document.getElementById('chat-text-input');
  var SEND_ICON = '&#10148;';
  function setSendLoading(on) {
    if (!sendBtn) return;
    sendBtn.disabled = true;
    sendBtn.innerHTML = on ? '<span class="send-spinner"></span>' : SEND_ICON;
  }
  function doSend() {
    if (!_chatUserId || !input) return;
    var text = input.value.trim();
    if (!text) return;
    input.value = '';
    setSendLoading(true);
    var ud = getUserData();
    apiCall('/messages/send', { device_id: getDeviceId(), receiver_id: _chatUserId, content: text }, function(resp) {
      setSendLoading(false);
      if (!resp.ok) { alert(resp.error || 'Could not send message.'); input.value = text; return; }
      var myMsg = { id: resp.message.id, sender_id: _chatMyId, content: text, created_at: resp.message.created_at, sender_picture: (ud && ud.picture) || '' };
      renderChatMessages([myMsg], false, true);
      var msgEl = document.getElementById('chat-messages');
      if (msgEl) msgEl.scrollTop = msgEl.scrollHeight;
    });
  }
  if (sendBtn) { sendBtn.disabled = true; sendBtn.addEventListener('click', doSend); }
  if (input) {
    input.addEventListener('input', function() {
      if (sendBtn) sendBtn.disabled = input.value.trim().length < 1;
    });
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); doSend(); }
    });
  }
})();

function updateOnlineCount(count) {
  var badge = document.getElementById('online-count-badge');
  if (!badge) return;
  if (count > 0) {
    badge.textContent = '(' + count + ')';
    badge.style.display = 'inline';
  } else {
    badge.style.display = 'none';
  }
}
var _notifOffset = 0;

function showNotifications(append) {
  var el = document.getElementById('notifications-list');
  if (!append) { _notifOffset = 0; if (el) el.innerHTML = '<div class="s-loading"><span class="s-spinner"></span>Loading...</div>'; }
  apiCall('/notifications/poll', { device_id: getDeviceId(), offset: _notifOffset }, function(resp) {
    if (!resp.ok) { if (el && !append) el.innerHTML = '<div class="s-empty">Could not load notifications</div>'; return; }
    var notifs = resp.notifications || [];
    if (!append) updateBadge(resp.unread_count);
    renderNotifications(el, notifs, resp.has_more, append);
    // Mark all as read except unread challenge_received (only mark those read after challenge is completed)
    var idsToMark = notifs.filter(function(n) {
      return !(n.type === 'challenge_received' && n.read === 0);
    }).map(function(n) { return n.id; });
    if (idsToMark.length > 0) {
      apiCall('/notifications/mark-read', { device_id: getDeviceId(), notification_ids: idsToMark }, function() {
        updateBadge(0);
      });
    }
  });
}

function renderNotifications(el, notifs, hasMore, append) {
  if (!el) return;
  if (!append && !notifs.length) { el.innerHTML = '<div class="s-empty">No notifications</div>'; return; }
  if (!append) el.innerHTML = '';

  var oldBtn = el.querySelector('.load-more-wrap');
  if (oldBtn) oldBtn.remove();

  var typeBadges = { challenge_received: ['Challenge', 'notif-type-challenge'], challenge_result: ['Result', 'notif-type-result'], weekly_reward: ['🏆 Weekly Leader', 'notif-type-reward'], post_liked: ['❤️ Like', 'notif-type-post'], post_commented: ['💬 Comment', 'notif-type-post'], message_received: ['💬 Message', 'notif-type-message'] };
  for (var i = 0; i < notifs.length; i++) {
    var n = notifs[i];
    var data = typeof n.data === 'string' ? JSON.parse(n.data) : n.data;
    var text = '';
    var badge = typeBadges[n.type];
    if (badge) text += '<span class="notif-type-badge ' + badge[1] + '">' + badge[0] + '</span><br>';
    if (n.type === 'challenge_received') {
      text += '<b>' + escapeHtml(data.from_name) + '</b> sent you a ' + LANG_NAME + ' quiz challenge! 🎯<br>'
        + '<span style="color:#5f6368;font-size:12px;">They scored <b style="color:#1a73e8;">' + data.sender_score + '/10</b> — answer 10 questions and beat them to win points!</span>';
      if (data.message && !(data.is_system || data.from_name === 'BemDic')) text += '<br><i style="color:#80868b;">"' + escapeHtml(data.message) + '"</i>';
      text += '<br><span style="display:inline-block;margin-top:7px;padding:7px 16px;background:#2e7d32;color:#fff;border-radius:20px;font-size:13px;font-weight:700;letter-spacing:0.3px;">▶ Play the Quiz</span>';
    }
    else if (n.type === 'challenge_result') {
      var w = data.winner;
      var isWin = w === 'sender', isDraw = w === 'draw';
      var outcomeColor = isWin ? '#2e7d32' : (isDraw ? '#e65100' : '#c62828');
      var outcomeIcon = isWin ? '🏆' : (isDraw ? '🤝' : '😔');
      var outcomeLabel = isWin ? 'You Won!' : (isDraw ? "It's a Draw!" : 'You Lost');
      text += '<b>' + escapeHtml(data.from_name) + '</b> completed your challenge!'
        + '<div style="display:flex;align-items:center;gap:10px;margin:8px 0 6px;background:#f8f9fa;border-radius:10px;padding:8px 10px;">'
        +   '<div style="text-align:center;flex:1;"><div style="font-size:11px;color:#5f6368;margin-bottom:2px;">You</div><div style="font-size:20px;font-weight:800;color:#1a73e8;">' + data.sender_score + '</div></div>'
        +   '<div style="font-size:13px;font-weight:700;color:#80868b;">VS</div>'
        +   '<div style="text-align:center;flex:1;"><div style="font-size:11px;color:#5f6368;margin-bottom:2px;">' + escapeHtml(data.from_name.split(' ')[0]) + '</div><div style="font-size:20px;font-weight:800;color:#e53935;">' + data.receiver_score + '</div></div>'
        +   '<div style="text-align:center;flex:1;border-left:1px solid #e0e0e0;padding-left:10px;"><div style="font-size:18px;">' + outcomeIcon + '</div><div style="font-size:11px;font-weight:700;color:' + outcomeColor + ';">' + outcomeLabel + '</div></div>'
        + '</div>'
        + (data.bonus > 0 ? '<div style="font-size:12px;color:#2e7d32;font-weight:600;margin-bottom:4px;">+' + data.bonus + ' points earned!</div>' : '')
        + (data.reply_message ? '<div style="font-size:12px;color:#80868b;font-style:italic;margin-bottom:6px;">"' + escapeHtml(data.reply_message) + '"</div>' : '')
        + '<span style="display:inline-block;margin-top:4px;padding:7px 16px;background:#1a73e8;color:#fff;border-radius:20px;font-size:13px;font-weight:700;">📊 View Results</span>';
    }
    else if (n.type === 'friend_request') text += '<b>' + escapeHtml(data.from_name) + '</b> wants to be your friend';
    else if (n.type === 'friend_accepted') text += '<b>' + escapeHtml(data.from_name) + '</b> accepted your friend request';
    else if (n.type === 'post_liked') {
      text += '<b>' + escapeHtml(data.user_name) + '</b> liked your post';
      if (data.post_snippet) text += '<br><i style="color:#80868b;">→ "' + escapeHtml(data.post_snippet) + '"</i>';
      text += '<br><span style="color:#1a73e8;font-size:12px;">Tap to view post</span>';
    }
    else if (n.type === 'post_commented') {
      text += '<b>' + escapeHtml(data.user_name) + '</b> commented on your post';
      if (data.post_snippet) text += '<br><i style="color:#80868b;">→ "' + escapeHtml(data.post_snippet) + '"</i>';
      if (data.comment) text += '<br><i style="color:#5f6368;">"' + escapeHtml(data.comment) + '"</i>';
      text += '<br><span style="color:#1a73e8;font-size:12px;">Tap to view post</span>';
    }
    else if (n.type === 'weekly_reward') {
      var _awardDays = data.sub_days || 30;
      var _totalDays = data.total_sub_days || _awardDays;
      var _extendedMsg = _totalDays > _awardDays ? ' (extended to <b>' + _totalDays + ' days total</b> including your existing plan)' : '';
      text += 'Congratulations! You finished <b>' + (data.rank_label || '#1') + '</b> this week with <b>' + (data.points || 0) + '</b> points! You\'ve been awarded <b>' + _awardDays + ' free days</b>' + _extendedMsg + ' — subscription already active on your account!';
    }
    else if (n.type === 'message_received') {
      text += '<b>' + escapeHtml(data.sender_name || 'Someone') + '</b> sent you a message<br>'
        + '<span style="color:#5f6368;font-size:12px;">"' + escapeHtml(data.message_preview || '') + '"</span>'
        + '<br><span style="color:#1a73e8;font-size:12px;">Tap to reply</span>';
    }

    var picHtml = n.type === 'weekly_reward' ? '<span style="font-size:30px;">🏆</span>' : profilePicHtml(data.from_picture || data.sender_picture || '', 38, false);
    var row = document.createElement('div');
    row.className = 'notif-row' + (n.read ? '' : ' unread');
    row.setAttribute('data-ntype', n.type);
    row.setAttribute('data-ndata', JSON.stringify(data));
    row.setAttribute('data-nid', n.id);
    row.innerHTML = '<span class="notif-pic">' + picHtml + '</span>'
      + '<div class="notif-body"><div class="notif-text">' + text + '</div>'
      + '<div class="notif-time">' + timeAgo(n.created_at) + '</div></div>';

    row.addEventListener('click', (function(ntype, ndata, nid, rowEl) {
      return function() {
        // Navigate to challenge
        if (ntype === 'weekly_reward') {
          // Subscription already applied server-side — nothing to activate
        }
        else if (ntype === 'message_received' && ndata.sender_id) {
          openChat(ndata.sender_id, ndata.sender_name || 'User', ndata.sender_picture || '');
        }
        else if (ntype === 'challenge_received' && ndata.challenge_id) openReceivedChallenge(ndata.challenge_id);
        else if (ntype === 'challenge_result' && ndata.challenge_id) openReceivedChallenge(ndata.challenge_id);
        else if ((ntype === 'post_liked' || ntype === 'post_commented') && ndata.post_id) {
          // Navigate back to home view
          var allSections = document.querySelectorAll('section[id$="-section"]');
          for (var s = 0; s < allSections.length; s++) {
            allSections[s].style.display = 'none';
          }

          // Show dictionary wrapper and pagination if they exist
          var dicWrapper = document.getElementById('dictionary-wrapper');
          var paginationBtns = document.getElementById('pagination-btns-wrapper');
          if (dicWrapper) dicWrapper.style.display = 'block';
          if (paginationBtns) paginationBtns.style.display = 'block';

          // Ensure posts feed is visible and loaded
          var postsFeed = document.getElementById('posts-feed-section');
          if (postsFeed) {
            postsFeed.style.display = 'block';

            // Check if posts are already loaded, if not load them
            var postsList = document.getElementById('posts-list-wrapper');
            if (!postsList || postsList.children.length === 0) {
              loadPosts(true);
            }

            // Wait for posts to load and then scroll
            setTimeout(function() {
              var postCard = document.querySelector('.post-card[data-post-id="' + ndata.post_id + '"]');
              if (postCard) {
                postCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                postCard.style.transition = 'background-color 0.5s';
                postCard.style.backgroundColor = '#e8f0fe';
                setTimeout(function() { postCard.style.backgroundColor = ''; }, 2000);
              }
            }, 800);
          }
        }
        // Delete notification
        rowEl.style.transition = 'opacity .3s, max-height .3s';
        rowEl.style.opacity = '0';
        rowEl.style.maxHeight = '0';
        rowEl.style.overflow = 'hidden';
        setTimeout(function() { rowEl.remove(); }, 300);
        apiCall('/notifications/delete', { device_id: getDeviceId(), notification_id: nid }, function() {});
      };
    })(n.type, data, n.id, row));

    el.appendChild(row);
  }

  if (hasMore) {
    var wrap = document.createElement('div');
    wrap.className = 'load-more-wrap';
    wrap.innerHTML = '<button class="load-more-btn">Load More</button>';
    el.appendChild(wrap);
    wrap.querySelector('.load-more-btn').addEventListener('click', function() {
      _notifOffset += 20;
      showNotifications(true);
    });
  }
}

// ---- POSTS FEED ----
var _postsOffset = 0;
var _postsLimit = 10;
var _postsLoadMoreLimit = 20;
var _postsSeed = 0;

function initPostEditor() {
  var input = document.getElementById('post-content-input');
  var charCount = document.getElementById('post-char-count');
  var submitBtn = document.getElementById('post-submit-btn');

  if (!input || !charCount || !submitBtn) return;

  input.addEventListener('input', function() {
    var len = this.value.length;
    charCount.textContent = len + '/500';
    if (len > 450) charCount.style.color = '#ea4335';
    else charCount.style.color = '#80868b';
  });

  submitBtn.addEventListener('click', function() {
    var content = input.value.trim();
    if (content.length < 5) {
      _toast('Post must be at least 5 characters', true);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Posting...';

    apiCall('/posts/create', { device_id: getDeviceId(), content: content }, function(resp) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Post (+1pt)';

      if (resp.ok) {
        input.value = '';
        charCount.textContent = '0/500';
        loadPosts(true);
        syncPoints();
      } else {
        _toast(resp.error || 'Failed to post', true);
      }
    });
  });
}

function loadPosts(reset) {
  if (reset) { _postsOffset = 0; _postsSeed = Math.floor(Math.random() * 9999998) + 1; }

  var listWrapper = document.getElementById('posts-list-wrapper');
  var loadMoreWrap = document.getElementById('posts-load-more-wrap');

  if (reset && listWrapper) listWrapper.innerHTML = '<div class="s-loading"><span class="s-spinner"></span>Loading...</div>';

  var _thisLimit = _postsOffset === 0 ? _postsLimit : _postsLoadMoreLimit;
  apiCall('/posts/list', {
    device_id: getDeviceId(),
    limit: _thisLimit,
    offset: _postsOffset,
    seed: _postsSeed
  }, function(resp) {
    if (!resp.ok || !resp.posts) {
      if (listWrapper) listWrapper.innerHTML = '<div class="s-empty">Could not load posts</div>';
      return;
    }

    if (reset && listWrapper) listWrapper.innerHTML = '';

    if (resp.posts.length === 0 && _postsOffset === 0) {
      if (listWrapper) listWrapper.innerHTML = '<div class="s-empty">No posts yet. Be the first to post!</div>';
      if (loadMoreWrap) loadMoreWrap.style.display = 'none';
      return;
    }

    renderPosts(resp.posts, listWrapper);

    if (loadMoreWrap) {
      if (resp.posts.length === _thisLimit) {
        loadMoreWrap.style.display = 'block';
      } else {
        loadMoreWrap.style.display = 'none';
      }
    }

    _postsOffset += resp.posts.length;
  });
}

function renderPosts(posts, container) {
  if (!container) return;

  var myData = getUserData();
  var myUserId = myData ? myData.id : null;
  var isAdmin = myData && myData.name && myData.name.toLowerCase() === 'bemdic';

  posts.forEach(function(post) {
    var isMyPost = myUserId && post.user_id === myUserId;
    var canEdit = isMyPost || isAdmin;

    var actionButtons = '';
    if (canEdit) {
      actionButtons = '<div class="post-actions-btns">'
        + '<button class="post-edit-btn" data-post-id="' + post.id + '">Edit</button>'
        + '<button class="post-delete-btn" data-post-id="' + post.id + '">Delete</button>'
        + '</div>';
    }

    var html = '<div class="post-card" data-post-id="' + post.id + '">'
      + '<div class="post-header">'
      + '<div class="post-author-pic" data-uid="' + post.user_id + '">' + profilePicHtml(post.user_picture, 40, true) + '</div>'
      + '<div class="post-author-info">'
      + '<div class="post-author-name" data-uid="' + post.user_id + '">' + escapeHtml(post.user_name) + '</div>'
      + '<div class="post-author-time" data-uid="' + post.user_id + '">' + timeAgo(post.created_at) + '</div>'
      + '</div>'
      + actionButtons
      + '</div>'
      + '<div class="post-content" id="post-content-' + post.id + '">' + escapeHtml(post.content) + '</div>'
      + '<div class="post-edit-form" id="post-edit-form-' + post.id + '">'
      + '<textarea class="post-edit-textarea" id="post-edit-textarea-' + post.id + '">' + escapeHtml(post.content) + '</textarea>'
      + '<div class="post-edit-actions">'
      + '<button class="post-edit-cancel" data-post-id="' + post.id + '">Cancel</button>'
      + '<button class="post-edit-save" data-post-id="' + post.id + '">Save</button>'
      + '</div>'
      + '</div>'
      + '<div class="post-actions">'
      + '<button class="post-action-btn like-btn' + (post.user_liked ? ' liked' : '') + '" data-post-id="' + post.id + '">'
      + '<span class="action-icon">' + (post.user_liked ? '❤️' : '🤍') + '</span>'
      + '<span class="action-count">' + (post.likes_count || 0) + '</span>'
      + '</button>'
      + '<button class="post-action-btn comment-btn" data-post-id="' + post.id + '">'
      + '<span class="action-icon">💬</span>'
      + '<span class="action-count">' + (post.comments_count || 0) + '</span>'
      + '</button>'
      + '</div>'
      + '<div class="post-comments-section" id="comments-' + post.id + '" style="display:none;"></div>'
      + '</div>';

    container.insertAdjacentHTML('beforeend', html);
  });

  attachPostEventListeners(container);
}

function attachPostEventListeners(container) {
  var likeBtns = container.querySelectorAll('.like-btn:not([data-la])');
  for (var i = 0; i < likeBtns.length; i++) {
    likeBtns[i].setAttribute('data-la', '1');
    likeBtns[i].addEventListener('click', function() {
      var postId = parseInt(this.getAttribute('data-post-id'));
      toggleLike(postId, this);
    });
  }

  var commentBtns = container.querySelectorAll('.comment-btn:not([data-la])');
  for (var j = 0; j < commentBtns.length; j++) {
    commentBtns[j].setAttribute('data-la', '1');
    commentBtns[j].addEventListener('click', function() {
      var postId = parseInt(this.getAttribute('data-post-id'));
      toggleComments(postId);
    });
  }

  var editBtns = container.querySelectorAll('.post-edit-btn:not([data-la])');
  for (var k = 0; k < editBtns.length; k++) {
    editBtns[k].setAttribute('data-la', '1');
    editBtns[k].addEventListener('click', function(e) {
      e.stopPropagation();
      var postId = parseInt(this.getAttribute('data-post-id'));
      showEditForm(postId);
    });
  }

  var deleteBtns = container.querySelectorAll('.post-delete-btn:not([data-la])');
  for (var l = 0; l < deleteBtns.length; l++) {
    deleteBtns[l].setAttribute('data-la', '1');
    deleteBtns[l].addEventListener('click', function(e) {
      e.stopPropagation();
      var postId = parseInt(this.getAttribute('data-post-id'));
      deletePost(postId);
    });
  }

  var cancelBtns = container.querySelectorAll('.post-edit-cancel:not([data-la])');
  for (var n = 0; n < cancelBtns.length; n++) {
    cancelBtns[n].setAttribute('data-la', '1');
    cancelBtns[n].addEventListener('click', function(e) {
      e.stopPropagation();
      var postId = parseInt(this.getAttribute('data-post-id'));
      hideEditForm(postId);
    });
  }

  var saveBtns = container.querySelectorAll('.post-edit-save:not([data-la])');
  for (var o = 0; o < saveBtns.length; o++) {
    saveBtns[o].setAttribute('data-la', '1');
    saveBtns[o].addEventListener('click', function(e) {
      e.stopPropagation();
      var postId = parseInt(this.getAttribute('data-post-id'));
      saveEditPost(postId);
    });
  }

  var pics = container.querySelectorAll('.clickable-pic:not([data-la])');
  for (var m = 0; m < pics.length; m++) {
    pics[m].setAttribute('data-la', '1');
    pics[m].addEventListener('click', function(e) {
      e.stopPropagation();
      if (this.tagName === 'IMG') showPicOverlay(this.src);
    });
  }

  // Profile click handlers for posts
  var authorNames = container.querySelectorAll('.post-author-name:not([data-la])');
  for (var p = 0; p < authorNames.length; p++) {
    authorNames[p].setAttribute('data-la', '1');
    authorNames[p].addEventListener('click', function(e) {
      e.stopPropagation();
      var uid = parseInt(this.getAttribute('data-uid'));
      if (uid) showUserProfile(uid);
    });
  }

  var authorTimes = container.querySelectorAll('.post-author-time:not([data-la])');
  for (var q = 0; q < authorTimes.length; q++) {
    authorTimes[q].setAttribute('data-la', '1');
    authorTimes[q].addEventListener('click', function(e) {
      e.stopPropagation();
      var uid = parseInt(this.getAttribute('data-uid'));
      if (uid) showUserProfile(uid);
    });
  }

  var authorPics = container.querySelectorAll('.post-author-pic:not([data-la])');
  for (var r = 0; r < authorPics.length; r++) {
    authorPics[r].setAttribute('data-la', '1');
    authorPics[r].addEventListener('click', function(e) {
      e.stopPropagation();
      var uid = parseInt(this.getAttribute('data-uid'));
      if (uid) showUserProfile(uid);
    });
  }
}

function toggleLike(postId, btn) {
  apiCall('/posts/like', { device_id: getDeviceId(), post_id: postId }, function(resp) {
    if (resp.ok) {
      var icon = btn.querySelector('.action-icon');
      var count = btn.querySelector('.action-count');
      var currentCount = parseInt(count.textContent) || 0;

      if (resp.action === 'liked') {
        btn.classList.add('liked');
        icon.textContent = '❤️';
        count.textContent = currentCount + 1;
      } else {
        btn.classList.remove('liked');
        icon.textContent = '🤍';
        count.textContent = Math.max(0, currentCount - 1);
      }
    }
  });
}

function toggleComments(postId) {
  var commentsSection = document.getElementById('comments-' + postId);
  if (!commentsSection) return;

  if (commentsSection.style.display === 'none') {
    commentsSection.style.display = 'block';
    loadComments(postId, commentsSection);
  } else {
    commentsSection.style.display = 'none';
  }
}

function loadComments(postId, container) {
  container.innerHTML = '<div class="s-loading"><span class="s-spinner"></span>Loading comments...</div>';

  apiCall('/posts/comments-list', { post_id: postId }, function(resp) {
    if (!resp.ok || !resp.comments) {
      container.innerHTML = '<div class="s-empty">Could not load comments</div>';
      return;
    }

    container.innerHTML = '';

    var ud = getUserData();
    var currentUserId = ud ? ud.id : null;
    var isAdmin = ud && ud.name && ud.name.toLowerCase() === 'bemdic';

    resp.comments.forEach(function(comment) {
      var canModify = currentUserId && (comment.user_id === currentUserId || isAdmin);
      var actionsHtml = canModify
        ? '<div class="comment-actions">'
          + '<button class="comment-action-btn comment-edit-btn" data-comment-id="' + comment.id + '">Edit</button>'
          + '<button class="comment-action-btn comment-delete-btn" style="color:#ea4335;" data-comment-id="' + comment.id + '" data-post-id="' + postId + '">Delete</button>'
          + '</div>'
          + '<div class="comment-edit-form" id="comment-edit-form-' + comment.id + '">'
          + '<textarea class="comment-edit-input" id="comment-edit-input-' + comment.id + '" rows="2">' + escapeHtml(comment.content) + '</textarea>'
          + '<div class="comment-edit-actions">'
          + '<button class="s-btn s-btn-p comment-save-btn" data-comment-id="' + comment.id + '">Save</button>'
          + '<button class="comment-cancel-btn" data-comment-id="' + comment.id + '">Cancel</button>'
          + '</div></div>'
        : '';
      var html = '<div class="post-comment" id="comment-item-' + comment.id + '">'
        + '<div class="comment-pic">' + profilePicHtml(comment.user_picture, 32, false) + '</div>'
        + '<div class="comment-content">'
        + '<div class="comment-author">' + escapeHtml(comment.user_name) + '</div>'
        + '<div class="comment-text" id="comment-text-' + comment.id + '">' + escapeHtml(comment.content) + '</div>'
        + actionsHtml
        + '</div></div>';
      container.insertAdjacentHTML('beforeend', html);
    });

    // Attach comment action listeners
    var editBtns = container.querySelectorAll('.comment-edit-btn');
    for (var ei = 0; ei < editBtns.length; ei++) {
      editBtns[ei].addEventListener('click', function() {
        showEditComment(parseInt(this.getAttribute('data-comment-id')));
      });
    }
    var deleteBtns = container.querySelectorAll('.comment-delete-btn');
    for (var di = 0; di < deleteBtns.length; di++) {
      deleteBtns[di].addEventListener('click', function() {
        deleteComment(parseInt(this.getAttribute('data-comment-id')), parseInt(this.getAttribute('data-post-id')));
      });
    }
    var saveBtns = container.querySelectorAll('.comment-save-btn');
    for (var si = 0; si < saveBtns.length; si++) {
      saveBtns[si].addEventListener('click', function() {
        saveEditComment(parseInt(this.getAttribute('data-comment-id')));
      });
    }
    var cancelBtns = container.querySelectorAll('.comment-cancel-btn');
    for (var ci = 0; ci < cancelBtns.length; ci++) {
      cancelBtns[ci].addEventListener('click', function() {
        hideEditComment(parseInt(this.getAttribute('data-comment-id')));
      });
    }

    var inputHtml = '<div class="comment-input-wrapper">'
      + '<textarea class="comment-input" placeholder="Write a comment..." maxlength="300" data-post-id="' + postId + '"></textarea>'
      + '<button class="s-btn s-btn-p comment-submit-btn" data-post-id="' + postId + '">Send</button>'
      + '</div>';
    container.insertAdjacentHTML('beforeend', inputHtml);

    var submitBtn = container.querySelector('.comment-submit-btn');
    var input = container.querySelector('.comment-input');

    if (submitBtn && input) {
      submitBtn.addEventListener('click', function() {
        submitComment(postId, input, container);
      });

    }
  });
}

function submitComment(postId, input, container) {
  var content = input.value.trim();
  if (!content) return;

  apiCall('/posts/comment', {
    device_id: getDeviceId(),
    post_id: postId,
    content: content
  }, function(resp) {
    if (resp.ok) {
      input.value = '';
      loadComments(postId, container);

      var commentBtn = document.querySelector('.comment-btn[data-post-id="' + postId + '"]');
      if (commentBtn) {
        var countEl = commentBtn.querySelector('.action-count');
        if (countEl) {
          var current = parseInt(countEl.textContent) || 0;
          countEl.textContent = current + 1;
        }
      }
    } else {
      _toast(resp.error || 'Failed to post comment', true);
    }
  });
}

function deleteComment(commentId, postId) {
  if (!confirm('Delete this comment?')) return;
  apiCall('/posts/comment-delete', { device_id: getDeviceId(), comment_id: commentId }, function(resp) {
    if (resp.ok) {
      var el = document.getElementById('comment-item-' + commentId);
      if (el) el.remove();
      var commentBtn = document.querySelector('.comment-btn[data-post-id="' + postId + '"]');
      if (commentBtn) {
        var countEl = commentBtn.querySelector('.action-count');
        if (countEl) { var c = parseInt(countEl.textContent) || 1; countEl.textContent = Math.max(0, c - 1); }
      }
    } else {
      _toast(resp.error || 'Failed to delete comment', true);
    }
  });
}
function showEditComment(commentId) {
  var textEl = document.getElementById('comment-text-' + commentId);
  var formEl = document.getElementById('comment-edit-form-' + commentId);
  if (textEl) textEl.style.display = 'none';
  if (formEl) formEl.style.display = 'block';
}
function hideEditComment(commentId) {
  var textEl = document.getElementById('comment-text-' + commentId);
  var formEl = document.getElementById('comment-edit-form-' + commentId);
  if (textEl) textEl.style.display = '';
  if (formEl) formEl.style.display = 'none';
}
function saveEditComment(commentId) {
  var input = document.getElementById('comment-edit-input-' + commentId);
  if (!input) return;
  var content = input.value.trim();
  if (!content) { _toast('Comment cannot be empty', true); return; }
  apiCall('/posts/comment-edit', { device_id: getDeviceId(), comment_id: commentId, content: content }, function(resp) {
    if (resp.ok) {
      var textEl = document.getElementById('comment-text-' + commentId);
      if (textEl) textEl.textContent = resp.content || content;
      hideEditComment(commentId);
    } else {
      _toast(resp.error || 'Failed to edit comment', true);
    }
  });
}

function deletePost(postId) {
  if (!confirm('Delete this post? You will lose 1 point.')) return;

  apiCall('/posts/delete', { device_id: getDeviceId(), post_id: postId }, function(resp) {
    if (resp.ok) {
      loadPosts(true);
      syncPoints();
    } else {
      _toast(resp.error || 'Failed to delete post', true);
    }
  });
}

function showEditForm(postId) {
  var contentDiv = document.getElementById('post-content-' + postId);
  var editForm = document.getElementById('post-edit-form-' + postId);

  if (contentDiv) contentDiv.style.display = 'none';
  if (editForm) editForm.style.display = 'block';
}

function hideEditForm(postId) {
  var contentDiv = document.getElementById('post-content-' + postId);
  var editForm = document.getElementById('post-edit-form-' + postId);
  var textarea = document.getElementById('post-edit-textarea-' + postId);

  if (contentDiv) contentDiv.style.display = 'block';
  if (editForm) editForm.style.display = 'none';

  // Reset textarea to original content
  if (textarea && contentDiv) {
    textarea.value = contentDiv.textContent;
  }
}

function saveEditPost(postId) {
  var textarea = document.getElementById('post-edit-textarea-' + postId);
  if (!textarea) return;

  var content = textarea.value.trim();
  if (!content) {
    _toast('Post content cannot be empty', true);
    return;
  }

  if (content.length < 5) {
    _toast('Post too short (min 5 characters)', true);
    return;
  }

  apiCall('/posts/edit', {
    device_id: getDeviceId(),
    post_id: postId,
    content: content
  }, function(resp) {
    if (resp.ok) {
      hideEditForm(postId);
      loadPosts(true);
    } else {
      _toast(resp.error || 'Failed to edit post', true);
    }
  });
}

var loadMoreBtn = document.getElementById('posts-load-more-btn');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', function() {
    var btn = this;
    btn.disabled = true;
    btn.innerHTML = '<span class="s-spinner" style="width:18px;height:18px;border-width:2.5px;margin-right:5px;"></span>Loading...';
    loadPosts(false);
    setTimeout(function() {
      btn.disabled = false;
      btn.textContent = 'Load More';
    }, 1000);
  });
}

// ---- SHARED TTS HELPER ----
var _ttsSupported = !!(window.Kodular || window.speechSynthesis);
if (!_ttsSupported) {
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.speak-btn').forEach(function(b) { b.style.display = 'none'; });
  });
}

// Chrome speechSynthesis keepalive — Chrome silently stops speaking after ~14s.
// Pause/resume every 10s resets its internal timer without audible interruption.
var _ttsKeepAliveTimer = null;
function _startTtsKeepAlive() {
  _stopTtsKeepAlive();
  if (!window.speechSynthesis) return;
  _ttsKeepAliveTimer = setInterval(function() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    } else {
      _stopTtsKeepAlive();
    }
  }, 10000);
}
function _stopTtsKeepAlive() {
  if (_ttsKeepAliveTimer) { clearInterval(_ttsKeepAliveTimer); _ttsKeepAliveTimer = null; }
}

var _rvQueueToken = 0;

function _normalizeRvText(text) {
  return String(text || '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([,;:.!?])\s*/g, '$1 ')
    .trim();
}

function _chunkResponsiveVoiceText(text) {
  var normalized = _normalizeRvText(text);
  if (!normalized) return [];

  var maxLen = 42;
  var segments = String(text || '')
    .split(/\r?\n+/)
    .map(function(part) { return _normalizeRvText(part); })
    .filter(Boolean);
  if (!segments.length) segments = [normalized];
  var chunks = [];
  var current = '';

  function pushCurrent() {
    if (current) {
      chunks.push(current.trim());
      current = '';
    }
  }

  segments.forEach(function(segment) {
    var sentences = segment.match(/[^.!?]+[.!?]*/g) || [segment];
    sentences.forEach(function(sentencePart) {
    var sentence = sentencePart.trim();
    if (!sentence) return;

    var clauses = sentence.match(/[^,;:]+[,;:]*/g) || [sentence];
    clauses.forEach(function(clausePart) {
      var clause = clausePart.trim();
      if (!clause) return;

      if (clause.length <= maxLen) {
        var next = current ? current + ' ' + clause : clause;
        if (next.length <= maxLen) current = next;
        else {
          pushCurrent();
          current = clause;
        }
        return;
      }

      pushCurrent();
      var words = clause.split(/\s+/);
      var piece = '';
      words.forEach(function(word) {
        var nextWord = piece ? piece + ' ' + word : word;
        if (nextWord.length <= maxLen) {
          piece = nextWord;
          return;
        }
        if (piece) chunks.push(piece.trim());
        piece = '';
        if (word.length <= maxLen) {
          piece = word;
          return;
        }
        for (var i = 0; i < word.length; i += maxLen) {
          chunks.push(word.slice(i, i + maxLen));
        }
      });
      if (piece) chunks.push(piece.trim());
    });
    });
  });

  pushCurrent();
  return chunks;
}

// Load ResponsiveVoice when online (primary TTS engine)
var _rvPending = null; // queued speak call while RV loads
var _rvPendingTimer = null;
if (navigator.onLine && !window.responsiveVoice) {
  var _rvScript = document.createElement('script');
  _rvScript.src = 'https://code.responsivevoice.org/responsivevoice.js?key=NzDHBdza';
  _rvScript.onload = function() {
    // Give RV a tick to self-init then fire any queued request
    setTimeout(function() {
      if (_rvPendingTimer) { clearTimeout(_rvPendingTimer); _rvPendingTimer = null; }
      if (_rvPending) { var p = _rvPending; _rvPending = null; speakText(p.text, p.btn, p.lang); }
    }, 300);
  };
  _rvScript.onerror = function() {
    if (_rvPendingTimer) { clearTimeout(_rvPendingTimer); _rvPendingTimer = null; }
    if (_rvPending) {
      var p = _rvPending;
      _rvPending = null;
      _speakBrowser(p.text, p.btn, false);
    }
  };
  document.head.appendChild(_rvScript);
}

function _rvSpeak(rv, text, btn, isSpeaking, langCode) {
  if (isSpeaking) {
    _rvQueueToken++;
    _stopTtsKeepAlive();
    try { rv.cancel(); } catch(e) {}
    if (btn) btn.classList.remove('speaking');
    return;
  }

  _rvQueueToken++;
  var token = _rvQueueToken;
  var chunks = _chunkResponsiveVoiceText(text);

  if (!chunks.length) {
    if (btn) btn.classList.remove('speaking');
    return;
  }

  try { rv.cancel(); } catch(e) {}
  if (btn) btn.classList.add('speaking');
  _startTtsKeepAlive();

  function speakNext(index) {
    if (token !== _rvQueueToken) return;
    if (index >= chunks.length) {
      _stopTtsKeepAlive();
      if (btn) btn.classList.remove('speaking');
      return;
    }

    var _rvName = (window.AllDicSpeak && AllDicSpeak.rvVoiceFor(langCode)) || 'UK English Male';
    rv.speak(chunks[index], _rvName, {
      rate: 1,
      pitch: 1,
      volume: 1,
      onend: function() {
        if (token !== _rvQueueToken) return;
        setTimeout(function() { speakNext(index + 1); }, 40);
      },
      onerror: function() {
        if (token !== _rvQueueToken) return;
        _stopTtsKeepAlive();
        if (btn) btn.classList.remove('speaking');
      }
    });
  }

  speakNext(0);
}

function _tutorSpeak(div, btn) {
    var tgt = div.querySelector('.tutor-bem-reply');
    if (tgt) { speakText(tgt.textContent.trim(), btn, LANG_CODE); return; }
    speakText(div.textContent.replace(/[▶‣]/g, '').trim(), btn, 'en');
  }
  function speakText(text, btn, langCode) {
  // Toggle: click again while this exact button is speaking → stop
  var isSpeaking = btn && btn.classList.contains('speaking');
  // Clear speaking state from any other active button
  if (!isSpeaking) {
    document.querySelectorAll('.speak-btn.speaking').forEach(function(b) { b.classList.remove('speaking'); });
  }

  // --- Kodular (Android WebView) path — always used when present ---
  if (window.Kodular) {
    if (isSpeaking) { window.Kodular.setWebViewString(''); return; }
    window.Kodular.setWebViewString(text);
    if (btn) {
      btn.classList.add('speaking');
      var ms = Math.max(2000, text.length * 80);
      setTimeout(function() { btn.classList.remove('speaking'); }, ms);
    }
    return;
  }

  // --- ResponsiveVoice path (online only, primary) ---
  if (navigator.onLine) {
    var rv = window.responsiveVoice;
    // Use RV if loaded and has speak method (don't rely solely on _rvReady flag)
    if (rv && typeof rv.speak === 'function') {
      _rvPending = null; // discard any queued request — we're speaking now
      _rvSpeak(rv, text, btn, isSpeaking, langCode);
      return;
    }
    // RV script still loading — queue and wait
    if (!rv) {
      _rvPending = { text: text, btn: btn, lang: langCode };
      if (btn) btn.classList.add('speaking');
      if (_rvPendingTimer) clearTimeout(_rvPendingTimer);
      _rvPendingTimer = setTimeout(function() {
        if (_rvPending && (!window.responsiveVoice || typeof window.responsiveVoice.speak !== 'function')) {
          var p = _rvPending;
          _rvPending = null;
          _rvPendingTimer = null;
          _speakBrowser(p.text, p.btn, false);
        }
      }, 2500);
      return;
    }
  }

  // --- Browser speechSynthesis fallback (offline or RV unavailable) ---
  _speakBrowser(text, btn, isSpeaking);
}

function _speakBrowser(text, btn, isSpeaking) {
  if (!window.speechSynthesis) return;
  if (isSpeaking) { _stopTtsKeepAlive(); window.speechSynthesis.cancel(); if (btn) btn.classList.remove('speaking'); return; }
  window.speechSynthesis.cancel();
  var utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US';
  utt.rate = 0.9;
  if (btn) {
    btn.classList.add('speaking');
    utt.onend = function() { _stopTtsKeepAlive(); btn.classList.remove('speaking'); };
    utt.onerror = function() { _stopTtsKeepAlive(); btn.classList.remove('speaking'); };
  }
  function trySpeak() {
    // When the caller says which language this text is in, use a voice for that
    // language. Only English falls through to the male-voice preference below —
    // applying an English voice to French or Chinese is what made every
    // language sound English regardless of the words on screen.
    if (langCode && langCode !== 'en' && window.AllDicSpeak) {
      var v = AllDicSpeak.pickVoice(langCode);
      var tags = AllDicSpeak.localesFor(langCode);
      utt.lang = v ? v.lang : tags[0];
      if (v) utt.voice = v;
      utt.pitch = 1;
      _startTtsKeepAlive();
      window.speechSynthesis.speak(utt);
      return;
    }

    var voices = window.speechSynthesis.getVoices();
    var enVoices = voices.filter(function(v) { return v.lang.startsWith('en'); });
    var male = enVoices.filter(function(v) {
      return /david|mark|daniel|james|alex|george|arthur|richard|ryan|guy|reed|evan|thomas|liam|aaron/i.test(v.name);
    });
    if (!male.length) male = enVoices.filter(function(v) {
      return !/female|zira|hazel|helen|susan|linda|karen|samantha|victoria|moira|fiona|tessa|veena|nicky|siri/i.test(v.name);
    });
    if (!male.length) male = enVoices;
    if (male.length) utt.voice = male[0];
    utt.pitch = 0.85;
    _startTtsKeepAlive();
    window.speechSynthesis.speak(utt);
  }
  if (window.speechSynthesis.getVoices().length) { trySpeak(); }
  else { window.speechSynthesis.addEventListener('voiceschanged', trySpeak, { once: true }); }
}

// ---- TRANSLATION WIDGET (Multi-language) ----
(function() {
  var _LANGS = [
    {code:'en',label:'English'},{code:'bem',label:'Bemba'},{code:'ny',label:'Nyanja (Chichewa)'},{code:'sw',label:'Swahili'},{code:'fr',label:'French'},{code:'es',label:'Spanish'},{code:'xh',label:'Xhosa'},
    {code:'zu',label:'Zulu'},{code:'pt-PT',label:'Portuguese (Portugal)'},{code:'ja',label:'Japanese'},
    {code:'zh-CN',label:'Chinese'},
    {code:'tum',label:'Tumbuka'},{code:'ab',label:'Abkhaz'},{code:'ace',label:'Acehnese'},
    {code:'ach',label:'Acholi'},{code:'aa',label:'Afar'},{code:'af',label:'Afrikaans'},
    {code:'sq',label:'Albanian'},{code:'alz',label:'Alur'},{code:'am',label:'Amharic'},
    {code:'ar',label:'Arabic'},{code:'hy',label:'Armenian'},{code:'as',label:'Assamese'},
    {code:'av',label:'Avar'},{code:'awa',label:'Awadhi'},{code:'ay',label:'Aymara'},
    {code:'az',label:'Azerbaijani'},{code:'ban',label:'Balinese'},{code:'bal',label:'Baluchi'},
    {code:'bm',label:'Bambara'},{code:'bci',label:'Baoule'},{code:'ba',label:'Bashkir'},
    {code:'eu',label:'Basque'},{code:'btx',label:'Batak Karo'},{code:'bts',label:'Batak Simalungun'},
    {code:'bbc',label:'Batak Toba'},{code:'be',label:'Belarusian'},{code:'bn',label:'Bengali'},
    {code:'bew',label:'Betawi'},{code:'bho',label:'Bhojpuri'},{code:'bik',label:'Bikol'},
    {code:'bs',label:'Bosnian'},{code:'br',label:'Breton'},{code:'bg',label:'Bulgarian'},
    {code:'bua',label:'Buryat'},{code:'yue',label:'Cantonese'},{code:'ca',label:'Catalan'},
    {code:'ceb',label:'Cebuano'},{code:'ch',label:'Chamorro'},{code:'ce',label:'Chechen'},{code:'chk',label:'Chuukese'},{code:'cv',label:'Chuvash'},
    {code:'co',label:'Corsican'},{code:'crh',label:'Crimean Tatar (Cyrillic)'},{code:'crh-Latn',label:'Crimean Tatar (Latin)'},
    {code:'hr',label:'Croatian'},{code:'cs',label:'Czech'},{code:'da',label:'Danish'},
    {code:'fa-AF',label:'Dari'},{code:'dv',label:'Dhivehi'},{code:'din',label:'Dinka'},
    {code:'doi',label:'Dogri'},{code:'dov',label:'Dombe'},{code:'nl',label:'Dutch'},
    {code:'dyu',label:'Dyula'},{code:'dz',label:'Dzongkha'},{code:'eo',label:'Esperanto'},
    {code:'et',label:'Estonian'},{code:'ee',label:'Ewe'},{code:'fo',label:'Faroese'},
    {code:'fj',label:'Fijian'},{code:'tl',label:'Filipino'},{code:'fi',label:'Finnish'},
    {code:'fon',label:'Fon'},{code:'fr-CA',label:'French (Canada)'},
    {code:'fy',label:'Frisian'},{code:'fur',label:'Friulian'},{code:'ff',label:'Fulani'},
    {code:'gaa',label:'Ga'},{code:'gl',label:'Galician'},{code:'ka',label:'Georgian'},
    {code:'de',label:'German'},{code:'el',label:'Greek'},{code:'gn',label:'Guarani'},
    {code:'gu',label:'Gujarati'},{code:'ht',label:'Haitian Creole'},{code:'cnh',label:'Hakha Chin'},
    {code:'ha',label:'Hausa'},{code:'haw',label:'Hawaiian'},{code:'iw',label:'Hebrew'},
    {code:'hil',label:'Hiligaynon'},{code:'hi',label:'Hindi'},{code:'hmn',label:'Hmong'},
    {code:'hu',label:'Hungarian'},{code:'hrx',label:'Hunsrik'},{code:'iba',label:'Iban'},
    {code:'is',label:'Icelandic'},{code:'ig',label:'Igbo'},{code:'ilo',label:'Ilocano'},
    {code:'id',label:'Indonesian'},{code:'iu-Latn',label:'Inuktut (Latin)'},{code:'iu',label:'Inuktut (Syllabics)'},
    {code:'ga',label:'Irish'},{code:'it',label:'Italian'},{code:'jam',label:'Jamaican Patois'},
    {code:'jw',label:'Javanese'},{code:'kac',label:'Jingpo'},
    {code:'kl',label:'Kalaallisut'},{code:'kn',label:'Kannada'},{code:'kr',label:'Kanuri'},
    {code:'pam',label:'Kapampangan'},{code:'kk',label:'Kazakh'},{code:'kha',label:'Khasi'},
    {code:'km',label:'Khmer'},{code:'cgg',label:'Kiga'},{code:'kg',label:'Kikongo'},
    {code:'rw',label:'Kinyarwanda'},{code:'ktu',label:'Kituba'},{code:'trp',label:'Kokborok'},
    {code:'kv',label:'Komi'},{code:'gom',label:'Konkani'},{code:'ko',label:'Korean'},
    {code:'kri',label:'Krio'},{code:'ku',label:'Kurdish (Kurmanji)'},{code:'ckb',label:'Kurdish (Sorani)'},
    {code:'ky',label:'Kyrgyz'},{code:'lo',label:'Lao'},{code:'ltg',label:'Latgalian'},
    {code:'la',label:'Latin'},{code:'lv',label:'Latvian'},{code:'lij',label:'Ligurian'},
    {code:'li',label:'Limburgish'},{code:'ln',label:'Lingala'},{code:'lt',label:'Lithuanian'},
    {code:'lmo',label:'Lombard'},{code:'lg',label:'Luganda'},{code:'luo',label:'Luo'},
    {code:'lb',label:'Luxembourgish'},{code:'mk',label:'Macedonian'},{code:'mad',label:'Madurese'},
    {code:'mai',label:'Maithili'},{code:'mak',label:'Makassar'},{code:'mg',label:'Malagasy'},
    {code:'ms',label:'Malay'},{code:'ms-Arab',label:'Malay (Jawi)'},{code:'ml',label:'Malayalam'},
    {code:'mt',label:'Maltese'},{code:'mam',label:'Mam'},{code:'gv',label:'Manx'},
    {code:'mi',label:'Maori'},{code:'mr',label:'Marathi'},{code:'mh',label:'Marshallese'},
    {code:'mwr',label:'Marwadi'},{code:'mfe',label:'Mauritian Creole'},{code:'chm',label:'Meadow Mari'},
    {code:'mni-Mtei',label:'Meiteilon (Manipuri)'},{code:'min',label:'Minang'},{code:'lus',label:'Mizo'},
    {code:'mn',label:'Mongolian'},{code:'my',label:'Myanmar (Burmese)'},{code:'nhe',label:'Nahuatl (Eastern Huasteca)'},
    {code:'ndc-ZW',label:'Ndau'},{code:'nr',label:'Ndebele (South)'},{code:'new',label:'Nepalbhasa (Newari)'},
    {code:'ne',label:'Nepali'},{code:'bm-Nkoo',label:'NKo'},{code:'no',label:'Norwegian'},
    {code:'nus',label:'Nuer'},{code:'oc',label:'Occitan'},{code:'or',label:'Odia (Oriya)'},
    {code:'om',label:'Oromo'},{code:'os',label:'Ossetian'},{code:'pag',label:'Pangasinan'},
    {code:'pap',label:'Papiamento'},{code:'ps',label:'Pashto'},{code:'fa',label:'Persian'},
    {code:'pl',label:'Polish'},{code:'pt',label:'Portuguese (Brazil)'},
    {code:'pa',label:'Punjabi (Gurmukhi)'},{code:'pa-Arab',label:'Punjabi (Shahmukhi)'},{code:'qu',label:'Quechua'},
    {code:'kek',label:'Qeqchi'},{code:'rom',label:'Romani'},{code:'ro',label:'Romanian'},
    {code:'rn',label:'Rundi'},{code:'ru',label:'Russian'},{code:'se',label:'Sami (North)'},
    {code:'sm',label:'Samoan'},{code:'sg',label:'Sango'},{code:'sa',label:'Sanskrit'},
    {code:'sat-Latn',label:'Santali (Latin)'},{code:'sat',label:'Santali (Ol Chiki)'},{code:'gd',label:'Scots Gaelic'},
    {code:'nso',label:'Sepedi'},{code:'sr',label:'Serbian'},{code:'st',label:'Sesotho'},
    {code:'crs',label:'Seychellois Creole'},{code:'shn',label:'Shan'},{code:'sn',label:'Shona'},
    {code:'scn',label:'Sicilian'},{code:'szl',label:'Silesian'},{code:'sd',label:'Sindhi'},
    {code:'si',label:'Sinhala'},{code:'sk',label:'Slovak'},{code:'sl',label:'Slovenian'},
    {code:'so',label:'Somali'},{code:'su',label:'Sundanese'},
    {code:'sus',label:'Susu'},{code:'ss',label:'Swati'},
    {code:'sv',label:'Swedish'},{code:'ty',label:'Tahitian'},{code:'tg',label:'Tajik'},
    {code:'ber-Latn',label:'Tamazight'},{code:'ber',label:'Tamazight (Tifinagh)'},{code:'ta',label:'Tamil'},
    {code:'tt',label:'Tatar'},{code:'te',label:'Telugu'},{code:'tet',label:'Tetum'},
    {code:'th',label:'Thai'},{code:'bo',label:'Tibetan'},{code:'ti',label:'Tigrinya'},
    {code:'tiv',label:'Tiv'},{code:'tpi',label:'Tok Pisin'},{code:'lua',label:'Tshiluba'},
    {code:'ts',label:'Tsonga'},{code:'tn',label:'Tswana'},{code:'tcy',label:'Tulu'},
    {code:'tr',label:'Turkish'},{code:'tk',label:'Turkmen'},{code:'tyv',label:'Tuvan'},
    {code:'ak',label:'Twi'},{code:'udm',label:'Udmurt'},{code:'uk',label:'Ukrainian'},
    {code:'ur',label:'Urdu'},{code:'ug',label:'Uyghur'},{code:'uz',label:'Uzbek'},
    {code:'ve',label:'Venda'},{code:'vec',label:'Venetian'},{code:'vi',label:'Vietnamese'},
    {code:'war',label:'Waray'},{code:'cy',label:'Welsh'},{code:'wo',label:'Wolof'},
    {code:'sah',label:'Yakut'},{code:'yi',label:'Yiddish'},
    {code:'yo',label:'Yoruba'},{code:'yua',label:'Yucatec Maya'},{code:'zap',label:'Zapotec'}
  ];

  var _tlSrc = 'en';
  var _tlTgt = LANG_CODE;

  function getLangLabel(code) {
    for (var i = 0; i < _LANGS.length; i++) if (_LANGS[i].code === code) return _LANGS[i].label;
    return code;
  }

  var tlInput = document.getElementById('tl-input');
  var tlResultWrap = document.getElementById('tl-result-wrap');
  var tlResult = document.getElementById('tl-result');
  var tlUnverified = document.getElementById('tl-unverified');
  var tlSpeakBtn = document.getElementById('tl-speak-btn');
  var tlSrcBtn = document.getElementById('tl-src-btn');
  var tlTgtBtn = document.getElementById('tl-tgt-btn');
  var tlSrcDrop = document.getElementById('tl-src-drop');
  var tlTgtDrop = document.getElementById('tl-tgt-drop');
  var tlSrcFilter = document.getElementById('tl-src-filter');
  var tlTgtFilter = document.getElementById('tl-tgt-filter');
  var tlSrcList = document.getElementById('tl-src-list');
  var tlTgtList = document.getElementById('tl-tgt-list');
  var tlExWrap = document.getElementById('tl-examples-wrap');
  var tlExEl = document.getElementById('tl-examples');

  if (tlSpeakBtn) tlSpeakBtn.addEventListener('click', function() {
    var t = tlResult ? tlResult.textContent.trim() : '';
    // The result is in whichever language the user picked as target.
    if (t) speakText(t, tlSpeakBtn, _tlTgt);
  });

  function updateBtns() {
    var srcLbl = document.getElementById('tl-src-label');
    var tgtLbl = document.getElementById('tl-tgt-label');
    if (srcLbl) srcLbl.textContent = getLangLabel(_tlSrc);
    if (tgtLbl) tgtLbl.textContent = getLangLabel(_tlTgt);
    if (tlInput) tlInput.placeholder = 'Type ' + getLangLabel(_tlSrc) + ' text here...';
  }

  function buildList(listEl, filterEl, selectedCode, onSelect) {
    if (!listEl) return;
    var q = filterEl ? filterEl.value.trim().toLowerCase() : '';
    var filtered = q ? _LANGS.filter(function(l) {
      return l.label.toLowerCase().indexOf(q) !== -1 || l.code.toLowerCase().indexOf(q) !== -1;
    }) : _LANGS;
    listEl.innerHTML = '';
    filtered.forEach(function(lang) {
      var d = document.createElement('div');
      d.className = 'tl-lang-opt' + (lang.code === selectedCode ? ' tl-lang-active' : '');
      d.innerHTML = '<span>' + lang.label + '</span>';
      d.addEventListener('click', function() { onSelect(lang.code); });
      listEl.appendChild(d);
    });
  }

  function openDrop(drop, list, filter, selectedCode, onSelect) {
    if (!drop) return;
    drop.style.display = '';
    if (filter) { filter.value = ''; filter.focus(); }
    buildList(list, filter, selectedCode, function(code) {
      onSelect(code);
      drop.style.display = 'none';
    });
  }

  function closeDrop(drop) { if (drop) drop.style.display = 'none'; }

  document.addEventListener('click', function(e) {
    var srcWrap = document.getElementById('tl-src-wrap');
    var tgtWrap = document.getElementById('tl-tgt-wrap');
    if (srcWrap && !srcWrap.contains(e.target)) closeDrop(tlSrcDrop);
    if (tgtWrap && !tgtWrap.contains(e.target)) closeDrop(tlTgtDrop);
  });

  if (tlSrcBtn) {
    tlSrcBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeDrop(tlTgtDrop);
      if (tlSrcDrop && tlSrcDrop.style.display !== 'none') { closeDrop(tlSrcDrop); return; }
      openDrop(tlSrcDrop, tlSrcList, tlSrcFilter, _tlSrc, function(code) {
        _tlSrc = code; updateBtns();
        if (tlInput && tlInput.value.trim()) doTranslate(tlInput.value.trim());
        else { if (tlResultWrap) tlResultWrap.style.display = 'none'; if (tlExWrap) tlExWrap.style.display = 'none'; }
      });
    });
  }
  if (tlSrcFilter) {
    tlSrcFilter.addEventListener('input', function() {
      buildList(tlSrcList, tlSrcFilter, _tlSrc, function(code) {
        _tlSrc = code; updateBtns(); closeDrop(tlSrcDrop);
        if (tlInput && tlInput.value.trim()) doTranslate(tlInput.value.trim());
      });
    });
  }

  if (tlTgtBtn) {
    tlTgtBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeDrop(tlSrcDrop);
      if (tlTgtDrop && tlTgtDrop.style.display !== 'none') { closeDrop(tlTgtDrop); return; }
      openDrop(tlTgtDrop, tlTgtList, tlTgtFilter, _tlTgt, function(code) {
        _tlTgt = code; updateBtns();
        if (tlInput && tlInput.value.trim()) doTranslate(tlInput.value.trim());
        else { if (tlResultWrap) tlResultWrap.style.display = 'none'; if (tlExWrap) tlExWrap.style.display = 'none'; }
      });
    });
  }
  if (tlTgtFilter) {
    tlTgtFilter.addEventListener('input', function() {
      buildList(tlTgtList, tlTgtFilter, _tlTgt, function(code) {
        _tlTgt = code; updateBtns(); closeDrop(tlTgtDrop);
        if (tlInput && tlInput.value.trim()) doTranslate(tlInput.value.trim());
      });
    });
  }

  var tlSwapBtn = document.getElementById('tl-swap-btn');
  if (tlSwapBtn) tlSwapBtn.addEventListener('click', function() {
    var tmp = _tlSrc; _tlSrc = _tlTgt; _tlTgt = tmp;
    updateBtns();
    if (tlInput && tlInput.value.trim()) doTranslate(tlInput.value.trim());
  });

  function tlCap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

  function tlGetBem(raw) {
    if (window.AllDic) return AllDic.headwordOf(raw);
    var m = raw ? raw.match(/class=(?:[a-z]+_text|target_text)>([^<]+)</) : null;
    return m ? m[1].trim() : '';
  }

  var _tlRevMap = {};
  (function buildRevMap() {
    if (typeof dictionary === 'undefined') { setTimeout(buildRevMap, 200); return; }
    var ks = Object.keys(dictionary), i = 0;
    function chunk() {
      var end = Math.min(i + 250, ks.length);
      for (; i < end; i++) { var bem = tlGetBem(dictionary[ks[i]]); if (bem) _tlRevMap[bem.toLowerCase()] = ks[i]; }
      if (i < ks.length) setTimeout(chunk, 0);
    }
    setTimeout(chunk, 0);
  })();

  function tlRevLookup(w) { return _tlRevMap[w.toLowerCase().trim()] || null; }

  function gtCall(text, sl, tl, cb) {
    fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + sl + '&tl=' + tl + '&dt=t&q=' + encodeURIComponent(text))
      .then(function(r) { return r.json(); })
      .then(function(d) { cb(null, (d && d[0] && d[0].length) ? d[0].map(function(s) { return s[0] || ''; }).join('').trim() : ''); })
      .catch(function(e) { cb(e, ''); });
  }

  function doTranslate(q) {
    if (!tlResultWrap || !tlResult) return;
    setTlLoading(true);
    tlResult.textContent = 'Translating\u2026';
    tlResult.className = 'tl-loading';
    tlResultWrap.style.display = '';
    if (tlExWrap) tlExWrap.style.display = 'none';
    var sl = _tlSrc, tl = _tlTgt, word = q.trim();
    var _skipExamples = word.length > 15;

    if (typeof dictionary !== 'undefined') {
      if (sl === 'en' && tl === LANG_CODE && LANG_IS_LOCAL) {
        var raw = dictionary[word.toLowerCase()];
        var bem = raw ? tlGetBem(raw) : '';
        if (bem) {
          tlResult.className = ''; tlResult.textContent = tlCap(bem);
          if (tlUnverified) tlUnverified.style.display = 'none';
          setTlLoading(false); if (!_skipExamples) loadAiExamples(word, sl, tl); return;
        }
      } else if (sl === LANG_CODE && tl === 'en' && LANG_IS_LOCAL) {
        var eng = tlRevLookup(word);
        if (eng) {
          tlResult.className = ''; tlResult.textContent = tlCap(eng);
          if (tlUnverified) tlUnverified.style.display = 'none';
          setTlLoading(false); if (!_skipExamples) loadAiExamples(eng, sl, tl); return;
        }
      }
    }

    if (tlUnverified) tlUnverified.style.display = 'inline-block';
    gtCall(word, sl, tl, function(err, out) {
      tlResult.className = '';
      if (err || !out) { tlResult.textContent = err ? 'Translation failed. Check your connection.' : 'No translation found.'; setTlLoading(false); return; }
      tlResult.textContent = tlCap(out);
      setTlLoading(false);
      if (!_skipExamples) {
        if (sl === 'en') {
          loadAiExamples(word, sl, tl);
        } else {
          gtCall(word, sl, 'en', function(e2, engWord) { loadAiExamples(engWord || word, sl, tl); });
        }
      }
    });
  }

  function loadAiExamples(englishTerm, srcLang, tgtLang) {
    if (!tlExWrap || !tlExEl) return;
    tlExWrap.style.display = '';
    tlExEl.innerHTML = '<div style="font-size:13px;color:#1a73e8;font-weight:500;display:flex;align-items:center;gap:8px;"><span style="display:inline-block;width:14px;height:14px;border:2px solid #c5d9f8;border-top-color:#1a73e8;border-radius:50%;animation:bemdic-spin 0.8s linear infinite;flex-shrink:0;"></span>Generating AI example\u2026</div>';
    fetch('/api/tutor/general', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ language: LANG_NAME,  message: 'Give exactly 1 short simple example sentence in English using the word or phrase: "' + englishTerm + '". Output only the sentence, nothing else.', history: [] })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (!data.ok || !data.reply) { tlExEl.innerHTML = '<div style="font-size:12px;color:#80868b;">No examples available.</div>'; return; }
      var lines = data.reply.split('\n')
        .map(function(l) { return l.replace(/^\s*[-\d.*]+[.)]\s*/, '').trim(); })
        .filter(function(l) { return l.length > 4; })
        .slice(0, 1);
      if (!lines.length) { tlExEl.innerHTML = '<div style="font-size:12px;color:#80868b;">No examples available.</div>'; return; }
      tlExEl.innerHTML = '<div style="font-size:13px;color:#1a73e8;font-weight:500;display:flex;align-items:center;gap:8px;"><span style="display:inline-block;width:14px;height:14px;border:2px solid #c5d9f8;border-top-color:#1a73e8;border-radius:50%;animation:bemdic-spin 0.8s linear infinite;flex-shrink:0;"></span>Translating example\u2026</div>';
      var results = new Array(lines.length);
      var done = 0;
      lines.forEach(function(line, idx) {
        var srcP = (srcLang === 'en') ? Promise.resolve(line) : new Promise(function(res) { gtCall(line, 'en', srcLang, function(e, t) { res(t || line); }); });
        var tgtP = (tgtLang === 'en') ? Promise.resolve(line) : new Promise(function(res) { gtCall(line, 'en', tgtLang, function(e, t) { res(t || line); }); });
        Promise.all([srcP, tgtP]).then(function(pair) {
          results[idx] = {src: pair[0], tgt: pair[1]};
          done++;
          if (done === lines.length) renderExamples(results, srcLang, tgtLang);
        });
      });
    })
    .catch(function(err) { console.error('[bemdic] AI examples failed:', err); tlExEl.innerHTML = '<div style="font-size:12px;color:#80868b;">Examples unavailable.</div>'; });
  }

  function renderExamples(pairs, srcLang, tgtLang) {
    if (!tlExEl) return;
    tlExEl.innerHTML = '';
    pairs.forEach(function(p) {
      if (!p) return;
      var div = document.createElement('div');
      div.className = 'tl-ex-item';
      div.innerHTML = '<div class="tl-ex-src"><span style="font-size:11px;color:#80868b;font-style:normal;font-weight:600;">' + getLangLabel(srcLang) + ':</span> ' + escapeHtml(p.src) + '</div>'
        + '<div class="tl-ex-tgt"><span style="font-size:11px;color:#80868b;font-weight:600;">' + getLangLabel(tgtLang) + ':</span> ' + escapeHtml(p.tgt) + '</div>';
      tlExEl.appendChild(div);
    });
  }

  var tlGoBtn = document.getElementById('tl-go-btn');
  function setTlLoading(busy) {
    if (!tlGoBtn) return;
    tlGoBtn.disabled = busy;
    tlGoBtn.textContent = busy ? 'Translating\u2026' : 'Translate';
    tlGoBtn.style.opacity = busy ? '0.65' : '';
  }

  var tlEmptyHint = document.getElementById('tl-empty-hint');
  var _tlHintTimer = null;
  function triggerTranslate() {
    var q = tlInput ? tlInput.value.trim() : '';
    if (!q) {
      if (tlResultWrap) tlResultWrap.style.display = 'none';
      if (tlExWrap) tlExWrap.style.display = 'none';
      if (tlEmptyHint) {
        tlEmptyHint.style.display = '';
        clearTimeout(_tlHintTimer);
        _tlHintTimer = setTimeout(function() { tlEmptyHint.style.display = 'none'; }, 3000);
      }
      return;
    }
    if (tlEmptyHint) tlEmptyHint.style.display = 'none';
    doTranslate(q);
  }
  if (tlGoBtn) tlGoBtn.addEventListener('click', triggerTranslate);
  if (tlInput) {
    tlInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); triggerTranslate(); }
    });
  }

  updateBtns();
})();

window.addEventListener('load', function() {
  var wordsLoader = document.getElementById('words-loader');
  if (wordsLoader && wordsLoader.style.display !== 'none') {
    var postsFeed = document.getElementById('posts-feed-section');
    if (postsFeed) {
      postsFeed.style.display = 'block';
      loadPosts(true);
      initPostEditor();
    }
  }
});

// ---- POINTS SYNC ----
function syncPoints() {
  var localPts = parseInt(localStorage.getItem('quiz-points')) || 0;
  apiCall('/user/sync-points', { device_id: getDeviceId(), local_points: localPts }, function(resp) {
    if (resp.ok && resp.server_points !== undefined) {
      localStorage.setItem('quiz-points', resp.server_points);
      var pn = document.getElementById('points-number');
      if (pn) pn.textContent = resp.server_points;
    }
  });
}

// ---- INIT ----
checkAndRegisterUser();

// ---- TUTOR NAV WIRING ----
var tutorLink = document.getElementById('tutor-link');
if (tutorLink) {
  tutorLink.addEventListener('click', function() {
    navTo('tutor-section');
  });
}

// ---- BUTTON ACTIVE STATE ON INPUT ----
(function() {
  function linkInputBtn(inputId, btnId, activeClass) {
    var inp = document.getElementById(inputId);
    var btn = document.getElementById(btnId);
    if (!inp || !btn) return;
    function update() {
      if (inp.value.trim().length > 0) {
        btn.classList.remove('btn-neutral');
        if (activeClass) btn.classList.add(activeClass);
      } else {
        btn.classList.add('btn-neutral');
        if (activeClass) btn.classList.remove(activeClass);
      }
    }
    btn.classList.add('btn-neutral'); // start neutral
    inp.addEventListener('input', update);
  }
  // Wire: Translate, Post (home-ai-input wired after widget injection)
  linkInputBtn('tl-input', 'tl-go-btn', null);
  linkInputBtn('post-content-input', 'post-submit-btn', null);
})();

// ---- HOME AI WIDGET ----


(function() {
  var searchWrapper = document.getElementById('search-wrapper');
 
  if (searchWrapper) {
    searchWrapper.insertAdjacentHTML('afterend',
      '<div class="home-ai-card" id="home-ai-widget" >' +
        '<!--<span class="home-ai-label">\u2728 All Languages dictionary</span> -->' +
        '<!--<textarea class="home-ai-input" id="home-ai-input" rows="1" placeholder="ask me anything..." maxlength="300"></textarea>-->' +
        '<button class="home-ai-btn" id="follow-dic-btn">Free all languages dictionary </button> <button id="adlink-btn" class="home-ai-btn" style="float:right; margin-left: 10px;" onclick="window.open(monetag_link);">🎁Get Special offer</button>' +
      '</div>'
    );

//update the ad button text dynamically
    var joinBtn = document.getElementById('adlink-btn');

     var follow_dic_btn = document.getElementById('follow-dic-btn');

     // Only Bemba has a finished ebook, so only Bemba advertises one. Other
     // languages promote the dictionary itself instead of a product that
     // cannot be delivered yet.
     var follow_dic_btn_text_array = (LANG_CODE === 'bem')
       ? ["📘Get " + LANG_NAME + " dictionary ebook"]
       : ["🌍100+ Dictionary languages", "✨Learn anything in " + LANG_NAME];

 var all_lang_dictionary_link="https://sagetech.sagetech386.workers.dev/all-languages-dictionary";
  var fb_page_url="https://www.facebook.com/profile.php?id=61590501535122";

       //initial inner text for the button
       var init_btn_text=follow_dic_btn_text_array[Math.floor(Math.random()*follow_dic_btn_text_array.length)];
        follow_dic_btn.innerHTML=init_btn_text;

if(init_btn_text.includes("ebook")){
  if (localStorage.getItem('bemdic_pdf_purchased') === '1') {
    follow_dic_btn.innerHTML = '📥Download dictionary ebook';
  }
}
    
   
      var ads_text_array=["💸See offers now","💰More wins now","🎉Great offers now","😎Get Better offers","🌹Check this offer","💖Lovely offer","😍Don't miss out","🎁Get Special offer","🚀Boost your earnings","🌟Exclusive deal now"," 🎂Unlock offers now","💎Check Shiny gifts","🎈Moneni ifi lelo","⚡Flash deal","🎀Gifts you like","💴Kutimwawina lelo","🎁Check offers"
      ];
       var random_ad_text=ads_text_array[Math.floor(Math.random()*ads_text_array.length)];

       //initial inner text for the button
      joinBtn.innerHTML = random_ad_text;

      /*setInterval(()=>{
        //update the button text with a new random ad text every 10 seconds
         random_ad_text=ads_text_array[Math.floor(Math.random()*ads_text_array.length)];
         joinBtn.innerHTML = random_ad_text;

       //also update the dictionary button text randomly
       var random_dic_text=follow_dic_btn_text_array[Math.floor(Math.random()*follow_dic_btn_text_array.length)];
       follow_dic_btn.innerHTML=random_dic_text;
        if(random_dic_text.includes("ebook")){
          if (localStorage.getItem('bemdic_pdf_purchased') === '1') {
            follow_dic_btn.innerHTML = '📥Download dictionary ebook';
          }
        }else{
          all_lang_dictionary_link="https://sagetech.sagetech386.workers.dev/all-languages-dictionary";
        }


      },10000)*/
      
  joinBtn.onclick = function() {
        window.open(monetag_link);}

  follow_dic_btn.onclick = function() {
    var _text = follow_dic_btn.innerHTML;
    if (_text.includes('Download dictionary')) {
      window.open('https://bemdicpdf.pages.dev/?d=true');
    } else if (_text.includes('ebook')) {
      if (window._bemdic_showPdfPaywall) window._bemdic_showPdfPaywall();
    } else if (_text.includes('Learn anything')) {
      navTo('tutor-section');
    } else if (_text.includes('100+ languages')) {
      // Keep people in the app — the picker is the feature being advertised.
      if (window.AllDicUI) window.AllDicUI.openPicker(true);
      else window.open(all_lang_dictionary_link);
    } else {
      window.open(all_lang_dictionary_link);
    }
  };
    

  }


  var homeInput = document.getElementById('home-ai-input');
  var homeBtn = document.getElementById('home-ai-send');
  if (!homeInput || !homeBtn) return;
  // Wire active state: neutral until input has content
  homeBtn.classList.add('btn-neutral');
  homeInput.addEventListener('input', function() {
    if (homeInput.value.trim().length > 0) {
      homeBtn.classList.remove('btn-neutral');
      homeBtn.classList.add('btn-active');
    } else {
      homeBtn.classList.add('btn-neutral');
      homeBtn.classList.remove('btn-active');
    }
  });
  function submitHomeAI() {
    var text = homeInput.value.trim();
    // Block immediately if AI chat limit reached — don't navigate
    if (text && window._bemdic_aiChatLimitReached && window._bemdic_aiChatLimitReached()) {
      if (window._bemdic_showPaywall) window._bemdic_showPaywall('chat');
      return;
    }
    homeInput.value = '';
    navTo('tutor-section');
    if (!text) return;
    // Wait one tick for the section to render, then auto-send
    setTimeout(function() {
      var tutorInput = document.getElementById('tutor-input');
      var tutorSend = document.getElementById('tutor-send');
      if (tutorInput && tutorSend) {
        tutorInput.value = text;
        tutorSend.click();
      }
    }, 100);
  }
  homeBtn.addEventListener('click', submitHomeAI);
  homeInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitHomeAI(); }
  });
})();

// ---- AI TUTOR BRAIN ----
(function() {
  var chatEl = document.getElementById('tutor-chat');
  var inputEl = document.getElementById('tutor-input');
  var sendBtn = document.getElementById('tutor-send');
  if (!chatEl || !inputEl || !sendBtn) return;

  // Suggestion chips — click to fill input and send
  var chipsEl = document.getElementById('tutor-chips');
  if (chipsEl) {
    chipsEl.querySelectorAll('.tutor-chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        inputEl.value = chip.textContent;
        sendBtn.click();
      });
    });
  }

  // Mode toggle wiring: 'dict' = dictionary mode, 'general' = unrestricted general AI
  var _tutorMode = 'general';
  var _generalHistory = []; // separate history for general mode
  var modeDictBtn = document.getElementById('tutor-mode-dict');
  var modeGenBtn = document.getElementById('tutor-mode-general');
  var tutorSubtitle = document.getElementById('tutor-subtitle');
  if (modeDictBtn && modeGenBtn) {
    modeDictBtn.addEventListener('click', function() {
      _tutorMode = 'dict';
      modeDictBtn.classList.add('tutor-mode-active');
      modeGenBtn.classList.remove('tutor-mode-active');
      if (tutorSubtitle) tutorSubtitle.innerHTML = '<!--Type in <b>English or ' + LANG_NAME + '</b> \u2014 ask any word, sentence, or question. Type <b>"quiz me"</b> or <b>"translate [any word]"</b>.-->';
      _syncChips();
    });
    modeGenBtn.addEventListener('click', function() {
      _tutorMode = 'general';
      modeGenBtn.classList.add('tutor-mode-active');
      modeDictBtn.classList.remove('tutor-mode-active');
      if (tutorSubtitle) tutorSubtitle.innerHTML = '<!--Ask me <b>anything</b> \u2014-->';
      _syncChips();
    });
  }

  // Prompt language toggle
  var _promptLang = 'bem';
  function _setPromptLang(lang) {
    _promptLang = lang;
    var eb = document.getElementById('tutor-prompt-en');
    var bb = document.getElementById('tutor-prompt-bem');
    if (eb) { eb.style.background = lang === 'en' ? '#1a73e8' : 'transparent'; eb.style.color = lang === 'en' ? '#fff' : '#1a73e8'; eb.style.fontWeight = lang === 'en' ? '600' : 'normal'; }
    if (bb) { bb.style.background = lang === 'bem' ? '#1a73e8' : 'transparent'; bb.style.color = lang === 'bem' ? '#fff' : '#1a73e8'; bb.style.fontWeight = lang === 'bem' ? '600' : 'normal'; }
  }
  document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'tutor-prompt-en') _setPromptLang('en');
    if (e.target && e.target.id === 'tutor-prompt-bem') _setPromptLang('bem');
  });

  // Matches the chosen language's name in user text, plus its endonym where
  // one is commonly typed (Bemba speakers write "cibemba" or "ichibemba").
  function _langRe() {
    if (LANG_CODE === 'bem') return '(?:bemba|cibemba|ichibemba)';
    // Names carry a parenthetical qualifier ("Chinese (Simplified)", "Nyanja
    // (Chichewa)"); users type the bare name, and the bracket would also break
    // the \b boundary these patterns rely on.
    var n = LANG_NAME.split('(')[0].trim().toLowerCase();
    return n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // A Bemba-specific spelling touch-up; leave every other language alone.
  function _fixBemba(text) {
    if (LANG_CODE !== 'bem') return text;
    return text.replace(/\btand[ie]/gi, 'nshi');
  }

  function _updatePlaceholder() {
    if (!inputEl) return;
    if (_tutorMode === 'dict') {
      inputEl.placeholder = 'Type any English or ' + LANG_NAME + ' word…';
    } else {
      inputEl.placeholder = _promptLang === 'bem' ? ('Ask anything in ' + LANG_NAME + '…') : 'Ask any question…';
    }
  }

  function _syncChips() {
    var chipsEl = document.getElementById('tutor-chips');
    var card = document.getElementById('tutor-card');
    var chatIsEmpty = !chatEl || chatEl.children.length === 0;
    if (chipsEl) chipsEl.style.display = (_tutorMode === 'general' && chatIsEmpty) ? 'flex' : 'none';
    if (card) card.classList.toggle('tutor-has-chat', !chatIsEmpty);
  }

  // ---- STARTUP DEFAULTS ----
  // Mode and language default to general + Bemba — no onboarding needed
  (function() {
    var mdb = document.getElementById('tutor-mode-dict');
    var mgb = document.getElementById('tutor-mode-general');
    if (mdb && mgb) { mgb.classList.add('tutor-mode-active'); mdb.classList.remove('tutor-mode-active'); }
    _updatePlaceholder();
    _syncChips();
  })();
  
  // Language toggle wiring
  var langEnBtn = document.getElementById('tutor-lang-en');
  var langBemBtn = document.getElementById('tutor-lang-bem');
  if (langEnBtn && langBemBtn) {
    langEnBtn.addEventListener('click', function() {
      _chatLang = 'en';
      langEnBtn.classList.add('tutor-lang-active');
      langBemBtn.classList.remove('tutor-lang-active');
    });
    langBemBtn.addEventListener('click', function() {
      _chatLang = 'bem';
      langBemBtn.classList.add('tutor-lang-active');
      langEnBtn.classList.remove('tutor-lang-active');
    });
  }

  var _quizMode = false;
  var _quizWord = null;    // { english, bemba }
  var _quizSession = false; // true while a quiz session is running
  var _quizScore = { correct: 0, total: 0 };
  var _history = [];    // conversation turns for AI context { role, content }

  // Language mode: 'en' = AI replies in English, 'bem' = translated to Bemba via Google Translate
  var _chatLang = 'bem';

  // User's first name for personalized greetings
  var _userName = (function() {
    try { var ud = getUserData(); if (ud && ud.name) return ud.name.split(' ')[0]; } catch(e) {}
    return localStorage.getItem('bemdic_user_name') || '';
  })();
  var _userNameSent = false; // only introduce name to AI once per session

  // Random encouraging exclamation for quiz feedback and local responses
  var _exclaims = ['Sure!', 'Wow!', 'Excellent!', 'Great effort!', "You're doing amazing!", "That's interesting!"];
  function randExclaim() { return _exclaims[Math.floor(Math.random() * _exclaims.length)]; }

  // Parse dictionary HTML value → { translation, engEx, bembaEx }
  function parseDictEntry(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    var t = tmp.querySelector('.target_text, .bemba_text');
    var eng = tmp.querySelector('.in_english');
    var bem = tmp.querySelector('.in_target, .in_bemba');
    return {
      translation: t ? t.textContent.trim() : '',
      engEx: eng ? eng.textContent.replace('English>>', '').trim() : '',
      // The label prefix is whatever the dictionary file wrote (French>>,
      // Zulu>>, ...), so strip it generically rather than by name.
      bembaEx: bem ? bem.textContent.replace(/^[^>]*>>/, '').trim() : ''
    };
  }

  // Look up an English word in the dictionary global
  function dictLookup(word) {
    if (typeof dictionary === 'undefined') return null;
    var entry = dictionary[word.toLowerCase().trim()];
    return entry ? parseDictEntry(entry) : null;
  }

  // Reverse lookup: Bemba word → English word(s), built lazily from dictionary
  var _reverseMap = null;
  function reverseDictLookup(bembaWord) {
    if (typeof dictionary === 'undefined') return null;
    if (!_reverseMap) {
      _reverseMap = {};
      var keys = Object.keys(dictionary);
      for (var i = 0; i < keys.length; i++) {
        var eng = keys[i];
        var parsed = parseDictEntry(dictionary[eng]);
        if (parsed.translation) {
          var bem = parsed.translation.toLowerCase().trim();
          if (!_reverseMap[bem]) _reverseMap[bem] = eng;
        }
      }
    }
    return _reverseMap[bembaWord.toLowerCase().trim()] || null;
  }

  // Append a chat bubble; tutor messages may contain HTML, user messages are escaped
  function addMsg(html, isUser) {
    var div = document.createElement('div');
    div.className = 'tutor-msg ' + (isUser ? 'tutor-msg-user' : 'tutor-msg-bot');
    div.innerHTML = isUser ? escapeHtml(html) : html;
    if (!isUser) {
      var spk = document.createElement('button');
      spk.className = 'speak-btn';
      spk.title = 'Listen';
      spk.innerHTML = '&#9654;';
      spk.addEventListener('click', function() { _tutorSpeak(div, spk); });
      div.appendChild(spk);
    }
    chatEl.appendChild(div);
    chatEl.scrollTop = chatEl.scrollHeight;
    // Exit pristine state on first message
    var tutorCard = document.getElementById('tutor-card');
    if (tutorCard && tutorCard.classList.contains('tutor-pristine')) {
      tutorCard.classList.remove('tutor-pristine');
      var hint = document.getElementById('tutor-pristine-hint');
      if (hint) hint.style.display = 'none';
    }
    _syncChips();
    return div;
  }

  // Typewriter effect for AI bot replies — types plain text, then snaps to full HTML
  function typeMsg(html, onDone) {
    var div = document.createElement('div');
    div.className = 'tutor-msg tutor-msg-bot';
    var cursor = document.createElement('span');
    cursor.className = 'tutor-cursor';
    div.appendChild(cursor);
    chatEl.appendChild(div);
    chatEl.scrollTop = chatEl.scrollHeight;

    // Extract plain text for the typing phase
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    var plain = (tmp.textContent || tmp.innerText || '').trim();

    // Speed: cap total typing at 1.2 s so long replies don't drag
    var charDelay = plain.length > 0 ? Math.min(30, Math.max(6, 1200 / plain.length)) : 15;
    var i = 0;
    function tick() {
      if (i < plain.length) {
        cursor.textContent = plain.slice(0, i + 1);
        chatEl.scrollTop = chatEl.scrollHeight;
        i++;
        setTimeout(tick, charDelay);
      } else {
        // Typing done — swap in full HTML + speak button
        div.innerHTML = html;
        var spk = document.createElement('button');
        spk.className = 'speak-btn';
        spk.title = 'Listen';
        spk.innerHTML = '&#9654;';
        spk.addEventListener('click', function() { _tutorSpeak(div, spk); });
        div.appendChild(spk);
        chatEl.scrollTop = chatEl.scrollHeight;
        if (onDone) onDone(div);
      }
    }
    tick();
    return div;
  }

  // Remove the most recent bot bubble (replace placeholder bubbles)
  function removeLastBot() {
    var msgs = chatEl.querySelectorAll('.tutor-msg-bot');
    if (msgs.length) {
      var last = msgs[msgs.length - 1];
      if (last._thinkTimer) clearInterval(last._thinkTimer);
      chatEl.removeChild(last);
    }
  }

  // Disable/enable input and send button during async operations
  function setLoading(busy) {
    sendBtn.disabled = busy;
    inputEl.disabled = busy;
  }

  // Show animated typing dots bubble with elapsed counter
  var _thinkPhrases = [
    'Thinking… / Ndetontokanya…',
    'Processing… / Ndefwaya answer…',
    'Checking… / Lolenifye panono…',
    'Let me think… / Ndetontokanya…',
    'Almost done… / Panonofye…',
    'Working on it… / Ndefwaya…'
  ];
  var _thinkIdx = 0;
  var _thinkTimer = null;
  function addTypingDots() {
    var phrase = _thinkPhrases[_thinkIdx % _thinkPhrases.length];
    _thinkIdx++;
    var startTime = Date.now();
    var phraseIdx = 0;
    var div = addMsg(
      '<span class="tutor-typing">' +
        '<span class="tutor-typing-row">' +
          '<span class="tutor-typing-spinner"></span>' +
          '<span class="tutor-thinking-txt">' + phrase + '</span>' +
          '<span class="tutor-thinking-timer">0s</span>' +
        '</span>' +
        '<span class="tutor-typing-bar-track"><span class="tutor-typing-bar-fill"></span></span>' +
      '</span>',
      false
    );
    clearInterval(_thinkTimer);
    _thinkTimer = setInterval(function() {
      var elapsed = Math.floor((Date.now() - startTime) / 1000);
      var txtEl = div.querySelector('.tutor-thinking-txt');
      var timeEl = div.querySelector('.tutor-thinking-timer');
      if (!txtEl || !timeEl || !div.parentNode) { clearInterval(_thinkTimer); return; }
      // Rotate phrase every 3 seconds
      if (elapsed > 0 && elapsed % 3 === 0) {
        phraseIdx++;
        txtEl.textContent = _thinkPhrases[((_thinkIdx - 1 + phraseIdx) % _thinkPhrases.length)];
      }
      timeEl.textContent = elapsed + 's';
    }, 1000);
    // Store timer ref on div so removeLastBot can clear it
    div._thinkTimer = _thinkTimer;
    return div;
  }

  // Google Translate — same API + language codes (en/bem) as the translate tab
  function googleTranslate(text, sl, tl, cb) {
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + sl + '&tl=' + tl + '&dt=t&q=' + encodeURIComponent(text);
    fetch(url)
      .then(function(r) { return r.json(); })
      .then(function(data) { cb(null, data[0].map(function(s) { return s[0]; }).join('')); })
      .catch(function(err) { cb(err, null); });
  }

  // Call the Cloudflare AI endpoint with retrieved context
  var _lastAICall = 0;
  var _AI_COOLDOWN = 1500; // ms between AI requests (reduced for Llama — less rate-limited than Gemini)
  var _cooldownTimer = null;

  function callAI(payload, cb) {
    var now = Date.now();
    var wait = _AI_COOLDOWN - (now - _lastAICall);
    if (wait > 0) {
      // Show live countdown instead of hitting the rate-limited API
      var secs = Math.ceil(wait / 1000);
      var countEl = addMsg('⏳ Please wait <b>' + secs + 's</b>…', false);
      clearInterval(_cooldownTimer);
      _cooldownTimer = setInterval(function() {
        secs--;
        if (secs <= 0) {
          clearInterval(_cooldownTimer);
          if (countEl && countEl.parentNode) countEl.parentNode.removeChild(countEl);
          callAI(payload, cb); // retry after cooldown
        } else {
          countEl.innerHTML = '⏳ Please wait <b>' + secs + 's</b>…';
        }
      }, 1000);
      return;
    }
    _lastAICall = Date.now();
    payload.history = _history.slice(-3);
    if (_userName && !_userNameSent) { payload.user_name = _userName; _userNameSent = true; }
    // The tutor writes its whole prompt around whichever language was chosen.
    payload.language = LANG_NAME;
    fetch('/api/tutor/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function(r) { return r.json(); })
      .then(function(data) { cb(data.ok ? null : new Error(data.error || 'unknown'), data.reply || null); })
      .catch(function(err) { cb(err, null); });
  }

  // Show AI reply; fallback to plain text if AI fails
  // dotsAlreadyShown=true skips adding typing dots (caller already showed them)
  function showAIReply(payload, fallbackHtml, dotsAlreadyShown) {
    // Paywall check — counts every AI response (chat, word explanation, phrase explanation)
    // Uses window._bemdic_aiChatCheck because the paywall functions live in a sibling IIFE scope
    if (window._bemdic_aiChatCheck && !window._bemdic_aiChatCheck()) {
      if (dotsAlreadyShown) { removeLastBot(); setLoading(false); }
      return;
    }
    if (!dotsAlreadyShown) { setLoading(true); addTypingDots(); }
    callAI(payload, function(err, reply) {
      removeLastBot();
      if (err || !reply) {
        setLoading(false);
        var errMsg = err ? (err.message || String(err)) : '';
        if (/exhausted|429|quota|rate/i.test(errMsg)) {
          addMsg('⏳ Too many requests — the AI is busy. Please wait a few seconds and try again.', false);
        } else {
          addMsg(fallbackHtml || 'Hmm, I couldn\'t load an explanation right now. Try asking me directly!', false);
        }
      } else if (_chatLang === 'bem' && payload.context_type !== 'word' && payload.context_type !== 'phrase') {
        // BEM mode: translate to Bemba, type it as main reply, then append English subtitle
        var _dotEl = addTypingDots();
        var _nameToken = 'XZQNMXZQ';
        var _replyForTl = (_userName && reply.toLowerCase().indexOf(_userName.toLowerCase()) !== -1)
          ? reply.replace(new RegExp(_userName, 'gi'), _nameToken)
          : reply;
        googleTranslate(_replyForTl, 'en', LANG_CODE, function(tErr, bemReply) {
          if (_dotEl && _dotEl.parentNode) _dotEl.parentNode.removeChild(_dotEl);
          if (!tErr && bemReply) {
            var bemText = _fixBemba(bemReply.replace(new RegExp(_nameToken, 'gi'), _userName || _nameToken));
            var safeBem = mdBold(escapeHtml(bemText)).replace(/\n/g, '<br>');
            typeMsg(safeBem, function(msgEl) {
              setLoading(false);
              var sub = document.createElement('span');
              sub.className = 'tutor-en-collapsed';
              sub.textContent = '(ENG:>> ' + reply + ')';
              msgEl.appendChild(sub);
            });
          } else {
            var safeFallback = mdBold(escapeHtml(reply)).replace(/\n/g, '<br>');
            typeMsg(safeFallback, function() { setLoading(false); });
          }
          _history.push({ role: 'assistant', content: reply });
        });
      } else {
        // English mode (or BEM mode word/phrase lookup): show English reply
        var safeReply = mdBold(escapeHtml(reply)).replace(/\n/g, '<br>');
        typeMsg(safeReply, function(msgEl) {
          setLoading(false);
          // Skip BEM subtitle for word/phrase lookups — reply already contains Bemba from dict;
          // translating it again would garble the embedded English examples.
          if (_chatLang === 'bem' && (payload.context_type === 'word' || payload.context_type === 'phrase')) return;
          googleTranslate(reply, 'en', LANG_CODE, function(tErr, bemReply) {
            if (!tErr && bemReply && msgEl && msgEl.parentNode) {
              var sub = document.createElement('span');
              sub.className = 'tutor-bem-subtitle';
              sub.innerHTML = '(<i style="color:#028">' + LANG_NAME.toUpperCase() + '>> </i>' + _fixBemba(bemReply) + ')';
              msgEl.appendChild(sub);
            }
          });
        });
        _history.push({ role: 'assistant', content: reply });
      }
    });
  }

  // End the quiz session and show score summary
  function stopQuiz() {
    _quizSession = false;
    _quizMode = false;
    _quizWord = null;
    var pct = _quizScore.total > 0 ? Math.round((_quizScore.correct / _quizScore.total) * 100) : 0;
    var grade = pct === 100 ? ' \uD83C\uDF1F Perfect score!' : pct >= 70 ? ' \uD83D\uDC4D Great job!' : pct >= 40 ? ' Keep practising!' : ' Don\'t give up, try again!';
    addMsg('\uD83C\uDFC1 Quiz finished! You scored <b>' + _quizScore.correct + ' / ' + _quizScore.total + '</b>' + (_quizScore.total > 0 ? ' (' + pct + '%)' : '') + '.' + grade, false);
    _quizScore = { correct: 0, total: 0 };
  }

  // Pick a random dictionary word and ask the next quiz question
  function startQuiz() {
    var words = Object.keys(dictionary);
    var word = words[Math.floor(Math.random() * words.length)];
    var entry = parseDictEntry(dictionary[word]);
    if (!entry.translation) { startQuiz(); return; } // skip empty entries
    _quizMode = true;
    _quizSession = true;
    _quizWord = { english: word, bemba: entry.translation.toLowerCase().replace(/\s+/g, ' ').trim() };
    // Build question bubble with inline Quit button
    var div = document.createElement('div');
    div.className = 'tutor-msg tutor-msg-bot';
    div.innerHTML = '\uD83C\uDFAF What is the ' + LANG_NAME + ' word for: <b>' + escapeHtml(word) + '</b>?'
      + '<br><span style="font-size:11px;color:#ea4335;cursor:pointer;text-decoration:underline;margin-top:5px;display:inline-block;" class="tutor-quit-btn">Quit quiz</span>';
    chatEl.appendChild(div);
    chatEl.scrollTop = chatEl.scrollHeight;
    div.querySelector('.tutor-quit-btn').addEventListener('click', stopQuiz);
  }

  // Call the general (unrestricted) AI endpoint
  function callGeneralAI(message, cb) {
    var now = Date.now();
    var wait = _AI_COOLDOWN - (now - _lastAICall);
    if (wait > 0) {
      var secs = Math.ceil(wait / 1000);
      var countEl = addMsg('⏳ Please wait <b>' + secs + 's</b>…', false);
      clearInterval(_cooldownTimer);
      _cooldownTimer = setInterval(function() {
        secs--;
        if (secs <= 0) {
          clearInterval(_cooldownTimer);
          if (countEl && countEl.parentNode) countEl.parentNode.removeChild(countEl);
          callGeneralAI(message, cb);
        } else {
          countEl.innerHTML = '⏳ Please wait <b>' + secs + 's</b>…';
        }
      }, 1000);
      return;
    }
    _lastAICall = Date.now();
    fetch('/api/tutor/general', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: LANG_NAME,  message: message, history: _generalHistory.slice(-10) })
    })
      .then(function(r) { return r.json(); })
      .then(function(data) { cb(data.ok ? null : new Error(data.error || 'unknown'), data.reply || null); })
      .catch(function(err) { cb(err, null); });
  }

  // Main intent router
  function processMessage(raw) {
    var text = raw.trim();
    if (_promptLang === 'bem') {
      // Translate Bemba prompt to English first, then process
      fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + LANG_CODE + '&tl=en&dt=t&q=' + encodeURIComponent(text))
        .then(function(r) { return r.json(); })
        .then(function(d) {
          var translated = (d && d[0] && d[0].length) ? d[0].map(function(s) { return s[0] || ''; }).join('').trim() : text;
          _processMessageCore(translated || text);
        })
        .catch(function() { _processMessageCore(text); });
      return;
    }
    _processMessageCore(text);
  }
  function _processMessageCore(text) {
    var lower = text.toLowerCase();
    _history.push({ role: 'user', content: text });

    // General mode — bypass all dictionary routing, send straight to unrestricted AI
    if (_tutorMode === 'general') {
      // Detect Bemba word/translation requests and redirect to Dictionary mode
      if (new RegExp('\\b(translate|translation|meaning|' + _langRe() + ' (word|for)|in ' + _langRe() + '|in english|to ' + _langRe() + '|how do you say)\\b', 'i').test(lower)) {
        addMsg(
          'For word translations and meaning, switch to <b>Dictionary mode</b> — tap the <b>"📖 Dictionary"</b> button above. (cinikeni pali dictionary button pamula pakwipusha pafya bupilibilo bwa mashiwi) ',
          false
        );
        setLoading(false);
        return;
      }
      if (window._bemdic_aiChatCheck && !window._bemdic_aiChatCheck()) { setLoading(false); return; }
      _generalHistory.push({ role: 'user', content: text });
      setLoading(true);
      addTypingDots();
      callGeneralAI(text, function(err, reply) {
        removeLastBot();
        if (err || !reply) {
          setLoading(false);
          addMsg('Sorry, something went wrong. Please try again.', false);
          return;
        }
        if (_chatLang === 'bem') {
          // BEM mode: show dots while GT translates, then type Bemba as main reply
          var _dotEl = addTypingDots();
          googleTranslate(reply, 'en', LANG_CODE, function(tErr, bemReply) {
            if (_dotEl && _dotEl.parentNode) _dotEl.parentNode.removeChild(_dotEl);
            var safeMain = mdBold(escapeHtml(!tErr && bemReply ? _fixBemba(bemReply) : reply)).replace(/\n/g, '<br>');
            typeMsg(safeMain, function(msgEl) {
              setLoading(false);
              if (!tErr && bemReply) {
                var sub = document.createElement('span');
                sub.className = 'tutor-en-collapsed';
                sub.textContent = '(ENG:>> ' + reply + ')';
                msgEl.appendChild(sub);
              }
            });
          });
        } else {
          var safeReply = mdBold(escapeHtml(reply)).replace(/\n/g, '<br>');
          typeMsg(safeReply, function() { setLoading(false); });
        }
        _generalHistory.push({ role: 'assistant', content: reply });
      });
      return;
    }

    // Quiz answer mode — verified locally against dictionary (no AI cost)
    if (_quizMode && _quizWord) {
      // Allow typing quit/stop/exit to end the session
      if (/^(quit|stop|exit|end|q)$/.test(lower)) {
        stopQuiz();
        setLoading(false);
        return;
      }
      _quizMode = false;
      var userAns = lower.replace(/[.,!?]/g, '').trim();
      var correct = _quizWord.bemba.replace(/[.,!?]/g, '').trim();
      var isCorrect = userAns === correct;
      _quizScore.total++;
      if (isCorrect) _quizScore.correct++;
      var resultMsg = isCorrect
        ? '\u2705 ' + randExclaim() + ' <b>' + escapeHtml(_quizWord.english) + '</b> \u2192 <b>' + escapeHtml(_quizWord.bemba) + '</b>'
        : '\u274C Not quite. The answer is: <b>' + escapeHtml(_quizWord.bemba) + '</b>';
      addMsg(resultMsg, false);
      _history.push({ role: 'assistant', content: isCorrect ? 'Correct! ' + _quizWord.english + ' = ' + _quizWord.bemba : 'Incorrect. The answer is ' + _quizWord.bemba });
      setLoading(false);
      // Auto-ask next question after a short pause
      if (_quizSession) {
        setTimeout(function() { if (_quizSession) startQuiz(); }, 1000);
      }
      return;
    }

    // Greeting — handled locally (fast, no AI call)
    if (/^(hi|hello|hey|muli shani|mwabombeni|good morning|good afternoon|good evening)\b/.test(lower)) {
      var _gn = _userName ? ', <b>' + escapeHtml(_userName) + '</b>' : '';
      var greetMsg = 'Hello' + _gn + '! \uD83D\uDC4B I\'m your ' + LANG_NAME + ' AI tutor. I can:<br>\u2022 Explain any <b>English word</b> in ' + LANG_NAME + ' \u2014 just type it<br>\u2022 Give a full lesson \u2014 say <b>"teach me [word]"</b><br>\u2022 Quiz you \u2014 say <b>"quiz me"</b><br>\u2022 Translate a sentence \u2014 say <b>"translate [sentence]"</b>';
      addMsg(greetMsg, false);
      _history.push({ role: 'assistant', content: 'Hello! I am your ' + LANG_NAME + ' AI tutor.' });
      setLoading(false);
      return;
    }

    // Quiz request — start a new session
    if (/\b(quiz me|test me|challenge me)\b/.test(lower)) {
      _quizScore = { correct: 0, total: 0 };
      addMsg('\uD83C\uDFAE Quiz mode started! Type your answers in ' + LANG_NAME + '. Type <b>quit</b> anytime to stop.', false);
      setLoading(false);
      setTimeout(startQuiz, 400);
      return;
    }

    // "translate [phrase]" — Google Translate result shown directly (accurate, no AI)
    var tlMatch = lower.match(/^translate\s+(.+)/);
    if (tlMatch) {
      var phrase = text.slice(lower.indexOf('translate') + 9).trim();
      setLoading(true);
      addTypingDots();
      googleTranslate(phrase, 'en', LANG_CODE, function(err, result) {
        removeLastBot();
        setLoading(false);
        if (err || !result) {
          addMsg('Sorry, I couldn\'t translate that right now. Please try again.', false);
        } else {
          addMsg('<b>' + escapeHtml(phrase) + '</b><br><b>' + escapeHtml(result) + '</b>', false);
          _history.push({ role: 'assistant', content: phrase + ' = ' + result });
        }
      });
      return;
    }

    // "teach me X" / "what is X" / "how do you say X" — extract target word
    var teachMatch = lower.match(/^(?:teach me|what(?:'s| is)|how do you say)\s+(.+)/);
    var wantsEnglish = false;
    var lookupWord;
    if (teachMatch) {
      lookupWord = text.slice(lower.indexOf(teachMatch[1])).trim();
      // Strip common prefixes: "the translation of/for/[word]", "meaning of", "definition of", "bemba word for", etc.
      lookupWord = lookupWord.replace(new RegExp('^(?:the\\s+)?(?:translation\\s+(?:of\\s+|for\\s+)?|meaning\\s+(?:of\\s+)?|definition\\s+(?:of\\s+)?|' + _langRe() + '\\s+word\\s+for\\s+)', 'i'), '');
      // Detect if user explicitly wants English meaning (Bemba→English direction)
      wantsEnglish = /\s+in\s+english$/i.test(lookupWord);
      // Strip trailing "in bemba" / "in english" / "in cibemba" / "to bemba"
      lookupWord = lookupWord.replace(new RegExp('\\s+(?:in|to)\\s+(?:' + _langRe() + '|english)$', 'i'), '').trim();
    } else {
      lookupWord = text.trim();
    }
    // Strip leading/trailing punctuation (?, !, ., etc.)
    lookupWord = lookupWord.replace(/^[?!.,;:]+|[?!.,;:]+$/g, '').trim();

    // Conversational messages (questions, sentences, requests) → AI
    // Also treat teach-me patterns with long/multi-word targets as educational AI requests
    var wordCount = text.trim().split(/\s+/).length;
    var lookupWordCount = lookupWord.trim().split(/\s+/).length;
    var isConversational = (
      (teachMatch && lookupWordCount > 2) ||  // e.g. "teach me about common translations"
      (!teachMatch && (
        text.indexOf('?') !== -1 ||
        wordCount > 2 ||
        /^(why|when|where|who|tell|explain|give|show|help|can|could|should|would|i |my |the |a |is |are )/i.test(text)
      ))
    );
    if (isConversational) {
      // Show loading dots instantly — before the GT auto-translate round-trip
      setLoading(true);
      addTypingDots();
      // Auto-translate to English first so Bemba questions/sentences are understood correctly
      googleTranslate(text, 'auto', 'en', function(err, enText) {
        var msgToSend = (!err && enText && enText.trim().toLowerCase() !== text.trim().toLowerCase()) ? enText : text;
        showAIReply({ message: msgToSend, context_type: 'chat' }, 'I\'m not sure how to answer that. Try asking about a specific word!', true);
      });
      return;
    }

    // Dictionary lookup — show verified entry instantly, then enrich with AI explanation
    var entry = dictLookup(lookupWord);
    if (entry && entry.translation) {
      var dictMsg = '<b>' + escapeHtml(lookupWord) + '</b> \u2192 <b>' + escapeHtml(entry.translation) + '</b>'
        + (entry.engEx ? '<br><br><span class="tl-lang en-lbl">EN</span> ' + escapeHtml(entry.engEx) : '')
        + (entry.bembaEx ? '<br><span class="tl-lang bem-lbl">BEM</span> ' + escapeHtml(entry.bembaEx) : '');
      addMsg(dictMsg, false);
      // Also call AI with full dictionary context for a richer explanation
      showAIReply(
        { message: lookupWord, context_type: 'word',
          dictionary_entry: { word: lookupWord, translation: entry.translation, engEx: entry.engEx, bembaEx: entry.bembaEx } },
        null  // no fallback — dict result already shown above
      );
      return;
    }

    // Try reverse dictionary lookup (user typed a Bemba word)
    var engMatch = reverseDictLookup(lookupWord);
    if (engMatch) {
      var revEntry = dictLookup(engMatch);
      if (revEntry && revEntry.translation) {
        var revMsg = '<b>' + escapeHtml(lookupWord) + '</b> \u2192 <b>' + escapeHtml(engMatch) + '</b>'
          + (revEntry.engEx ? '<br><br><span class="tl-lang en-lbl">EN</span> ' + escapeHtml(revEntry.engEx) : '')
          + (revEntry.bembaEx ? '<br><span class="tl-lang bem-lbl">BEM</span> ' + escapeHtml(revEntry.bembaEx) : '');
        addMsg(revMsg, false);
        // Enrich reverse lookup with AI explanation too
        showAIReply(
          { message: engMatch, context_type: 'word',
            dictionary_entry: { word: engMatch, translation: revEntry.translation, engEx: revEntry.engEx, bembaEx: revEntry.bembaEx } },
          null
        );
        return;
      }
    }

    // Not in dictionary — try Google Translate, show result directly
    setLoading(true);
    addTypingDots();

    // If user asked "in english", go Bemba→English directly (skip English→Bemba attempt)
    if (wantsEnglish) {
      googleTranslate(lookupWord, LANG_CODE, 'en', function(err, result) {
        removeLastBot();
        setLoading(false);
        if (!err && result && result.toLowerCase() !== lookupWord.toLowerCase()) {
          addMsg('<b>' + escapeHtml(lookupWord) + '</b> \u2192 <b>' + escapeHtml(result) + '</b>', false);
          _history.push({ role: 'assistant', content: lookupWord + ' (' + LANG_NAME + ') = ' + result });
          showAIReply({ message: lookupWord, context_type: 'phrase', translate_result: result }, null);
        } else {
          showAIReply({ message: text, context_type: 'chat' }, 'I\'m not sure about "<b>' + escapeHtml(lookupWord) + '</b>". Try another word or phrase!');
        }
      });
      return;
    }

    // Try Bemba→English first (most unknown words in this app are Bemba words)
    googleTranslate(lookupWord, LANG_CODE, 'en', function(err, result) {
      var bemResult = (!err && result && result.toLowerCase() !== lookupWord.toLowerCase()) ? result : null;
      if (bemResult) {
        removeLastBot();
        setLoading(false);
        addMsg('<b>' + escapeHtml(lookupWord) + '</b> \u2192 <b>' + escapeHtml(bemResult) + '</b>', false);
        _history.push({ role: 'assistant', content: lookupWord + ' (' + LANG_NAME + ') = ' + bemResult });
        showAIReply({ message: lookupWord, context_type: 'phrase', translate_result: bemResult }, null);
      } else {
        // Bemba→English gave nothing useful — try English→Bemba
        googleTranslate(lookupWord, 'en', LANG_CODE, function(err2, result2) {
          removeLastBot();
          setLoading(false);
          if (!err2 && result2 && result2.toLowerCase() !== lookupWord.toLowerCase()) {
            addMsg('<b>' + escapeHtml(lookupWord) + '</b> \u2192 <b>' + escapeHtml(result2) + '</b>', false);
            _history.push({ role: 'assistant', content: lookupWord + ' = ' + result2 });
            showAIReply({ message: lookupWord, context_type: 'phrase', translate_result: result2 }, null);
          } else {
            showAIReply({ message: text, context_type: 'chat' }, 'I\'m not sure about "<b>' + escapeHtml(lookupWord) + '</b>". Try another word or phrase!');
          }
        });
      }
    });
  }  // end _processMessageCore


  // Send button click
  sendBtn.addEventListener('click', function() {
    var text = inputEl.value.trim();
    if (!text) return;
    // Paywall pre-check: block immediately if AI chat limit reached.
    // Skip during quiz mode — quiz answers are handled locally, no AI call.
    if (!_quizMode && window._bemdic_aiChatLimitReached && window._bemdic_aiChatLimitReached()) {
      if (window._bemdic_showPaywall) window._bemdic_showPaywall('chat');
      return;
    }
    setLoading(true);
    addMsg(text, true);
    inputEl.value = '';
    inputEl.style.height = 'auto';
    processMessage(text);
  });

  // Enter to send (Shift+Enter inserts a new line)
  inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendBtn.click();
    }
  });

  // Auto-grow textarea up to 80px
  inputEl.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 80) + 'px';
  });
})();

})();


// ============================================
// SUBSCRIPTION & USAGE LIMIT SYSTEM
// ============================================

(function(){

// --- CONFIG (defaults, overridden by server settings) ---
var SUB_SECRET = 7391;  // secret number for code validation - CHANGE THIS to your own number
var FREE_WORD_LIMIT = 20;
var FREE_QUIZ_LIMIT = 5;
var FREE_TRANSLATE_CHAR_LIMIT = 200;
var FREE_AI_CHAT_LIMIT = 5; // free AI chat messages per day
var SUB_DAYS = 7;
var PAYMENT_NUMBER = '0962464552'; // your mobile money number
var PAYMENT_AMOUNT = 'K5';
var PDF_PRICE = 'K5';
var PLANS = [
  { days: 7,  amount: 'K5' },
  { days: 14, amount: 'K9' },
  { days: 30, amount: 'K18' }
];

function _applySettingsToPlans(s) {
  if (s.plan1_days && s.plan1_amount) PLANS[0] = { days: parseInt(s.plan1_days) || 7,  amount: s.plan1_amount };
  if (s.plan2_days && s.plan2_amount) PLANS[1] = { days: parseInt(s.plan2_days) || 14, amount: s.plan2_amount };
  if (s.plan3_days && s.plan3_amount) PLANS[2] = { days: parseInt(s.plan3_days) || 30, amount: s.plan3_amount };
  // keep legacy vars in sync with plan 1 for non-modal UI references
  PAYMENT_AMOUNT = PLANS[0].amount;
  SUB_DAYS = PLANS[0].days;
  if (s.pdf_price) PDF_PRICE = s.pdf_price;
}

// --- FETCH SETTINGS FROM SERVER (updates config dynamically) ---
(function(){
  try {
    var cached = localStorage.getItem('bemdic_server_settings');
    if (cached) {
      var s = JSON.parse(cached);
      if (s.free_word_limit) FREE_WORD_LIMIT = parseInt(s.free_word_limit) || FREE_WORD_LIMIT;
      if (s.free_quiz_limit) FREE_QUIZ_LIMIT = parseInt(s.free_quiz_limit) || FREE_QUIZ_LIMIT;
      if (s.free_translate_limit) FREE_TRANSLATE_CHAR_LIMIT = parseInt(s.free_translate_limit) || FREE_TRANSLATE_CHAR_LIMIT;
      if (s.free_chat_limit) FREE_AI_CHAT_LIMIT = parseInt(s.free_chat_limit) || FREE_AI_CHAT_LIMIT;
      if (s.payment_number) PAYMENT_NUMBER = s.payment_number;
      if (s.pdf_price) PDF_PRICE = s.pdf_price;
      _applySettingsToPlans(s);
    }
  } catch(e){}
  if (navigator.onLine) {
    fetch('/api/settings/get', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}'
    }).then(function(r){ return r.json(); }).then(function(resp){
      if (resp.ok && resp.settings) {
        var s = resp.settings;
        localStorage.setItem('bemdic_server_settings', JSON.stringify(s));
        if (s.free_word_limit) FREE_WORD_LIMIT = parseInt(s.free_word_limit) || FREE_WORD_LIMIT;
        if (s.free_quiz_limit) FREE_QUIZ_LIMIT = parseInt(s.free_quiz_limit) || FREE_QUIZ_LIMIT;
        if (s.free_translate_limit) FREE_TRANSLATE_CHAR_LIMIT = parseInt(s.free_translate_limit) || FREE_TRANSLATE_CHAR_LIMIT;
        if (s.free_chat_limit) FREE_AI_CHAT_LIMIT = parseInt(s.free_chat_limit) || FREE_AI_CHAT_LIMIT;
        if (s.payment_number) PAYMENT_NUMBER = s.payment_number;
        if (s.pdf_price) PDF_PRICE = s.pdf_price;
        _applySettingsToPlans(s);
        // rebuild modal cache and refresh visible UI with updated values
        localStorage.setItem('subscription_modal', buildModalHTML());
        refreshSettingsUI();
        // Re-snapshot so the offline copy uses the admin's limits, not the
        // hardcoded defaults captured before this response arrived.
        if (window._bemdic_persistConfig) window._bemdic_persistConfig();
      }
    }).catch(function(){});
  }
})();

// --- AUTO-ACTIVATION: check for admin-granted pending subscription on load ---
(function(){
  if (!navigator.onLine) return;
  var _did = window._bemdic_getDeviceId;
  if (!_did) {
    // device ID may not be ready yet — retry once after a short delay
    setTimeout(function(){
      var _did2 = window._bemdic_getDeviceId;
      if (_did2) checkPendingActivation(_did2());
    }, 1500);
    return;
  }
  checkPendingActivation(_did());

  function checkPendingActivation(deviceId) {
    if (!deviceId) return;
    fetch('/api/subscribe/pending', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ device_id: deviceId })
    }).then(function(r){ return r.json(); }).then(function(resp){
      if (resp.ok && resp.pending && resp.subscription_code) {
        if (activateSubscription(resp.subscription_code)) {
          // Dismiss paywall if open
          var paywall = document.getElementById('bemdic-paywall');
          if (paywall) paywall.parentNode.removeChild(paywall);
          // Remove free bar
          var freeBar = document.getElementById('bemdic-free-bar');
          if (freeBar) freeBar.parentNode.removeChild(freeBar);
          // Restore content
          var wl = document.getElementById('words-loader');
          var pb = document.getElementById('pagination-btns-wrapper');
          if (wl) wl.style.display = 'block';
          if (pb) pb.style.display = 'block';
          if (typeof _original_load_dictionary === 'function') _original_load_dictionary();
        }
      }
    }).catch(function(){});
  }
})();

// --- HELPER: get today as YYYY-MM-DD ---
function getToday(){
  return new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD in local timezone
}

// --- HELPER: days since epoch (for code system) ---
function daysSinceEpoch(date){
  if(!date) date = new Date();
  return Math.floor(date.getTime() / 86400000);
}

// --- SUBSCRIPTION CODE VALIDATION ---
function generateChecksum(str){
  var sum = 0;
  for(var i=0; i<str.length; i++){
    sum = ((sum << 5) - sum + str.charCodeAt(i)) & 0xFFFF;
  }
  var hex = sum.toString(16).toUpperCase();
  while(hex.length < 4) hex = '0' + hex;
  return hex;
}

function validateCode(code){
  code = code.replace(/[\s\-]/g,'').toUpperCase();
  if(code.length < 6) return false;
  var payload = code.substring(0, code.length - 4);
  var checksum = code.substring(code.length - 4);
  if(generateChecksum(payload) !== checksum) return false;
  var encoded = parseInt(payload, 16);
  if(isNaN(encoded)) return false;
  var expiryDay = encoded ^ SUB_SECRET;
  var today = daysSinceEpoch();
  if(expiryDay > today) return expiryDay;
  return false;
}

// --- USAGE TRACKING (persisted in localStorage) ---
function getUsage(){
  var raw = localStorage.getItem('bemdic_usage');
  if(raw){ try{ return JSON.parse(raw); }catch(e){} }
  return { date: getToday(), words: 0, quizzes: 0 };
}

function saveUsage(usage){
  localStorage.setItem('bemdic_usage', JSON.stringify(usage));
}

function resetIfNewDay(usage){
  if(usage.date !== getToday()){
    usage.date = getToday();
    // Only reset a counter at midnight if it was fully exhausted — unused allowances carry forward
    if((usage.words || 0) >= FREE_WORD_LIMIT) usage.words = 0;
    if((usage.quizzes || 0) >= FREE_QUIZ_LIMIT) usage.quizzes = 0;
    if((usage.chat || 0) >= FREE_AI_CHAT_LIMIT) usage.chat = 0;
    if((usage.translate_chars || 0) >= FREE_TRANSLATE_CHAR_LIMIT) usage.translate_chars = 0;
  }
  return usage;
}

function incrementWords(){
  var usage = resetIfNewDay(getUsage());
  usage.words++;
  saveUsage(usage);
  return usage.words;
}

function incrementQuizzes(){
  var usage = resetIfNewDay(getUsage());
  usage.quizzes++;
  saveUsage(usage);
  return usage.quizzes;
}

function incrementChatMessages(){
  var usage = resetIfNewDay(getUsage());
  usage.chat = (usage.chat || 0) + 1;
  saveUsage(usage);
  return usage.chat;
}

// --- SUBSCRIPTION STATUS (persisted in localStorage) ---
function getSubscription(){
  var raw = localStorage.getItem('bemdic_sub');
  if(raw){ try{ return JSON.parse(raw); }catch(e){} }
  return null;
}

function isSubscribed(){
  var sub = getSubscription();
  if(!sub) return false;
  return sub.expiryDay > daysSinceEpoch();
}

function getSubDaysLeft(){
  var sub = getSubscription();
  if(!sub) return 0;
  var left = sub.expiryDay - daysSinceEpoch();
  return left > 0 ? left : 0;
}

function activateSubscription(code){
  var expiryDay = validateCode(code);
  if(expiryDay){
    var cleanCode = code.replace(/[\s\-]/g,'').toUpperCase();
    localStorage.setItem('bemdic_sub', JSON.stringify({
      code: cleanCode,
      expiryDay: expiryDay,
      activatedOn: getToday(),
      serverSynced: false
    }));
    _syncSubCodeToServer(cleanCode);
    return true;
  }
  return false;
}
function _syncSubCodeToServer(code) {
  var deviceId = localStorage.getItem('bemdic_device_id');
  if (!deviceId || !navigator.onLine) return;
  fetch('/api/subscribe/activate-code', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ device_id: deviceId, code: code })
  }).then(function(r) { return r.json(); }).then(function(r) {
    if (r.ok) {
      var sub = JSON.parse(localStorage.getItem('bemdic_sub') || 'null');
      if (sub) { sub.serverSynced = true; localStorage.setItem('bemdic_sub', JSON.stringify(sub)); }
    }
  }).catch(function(){});
}
window._bemdic_activateCode = activateSubscription;

// Expose AI chat paywall helpers for use inside sibling IIFEs (tutor, home widget)
window._bemdic_aiChatCheck = function() {
  if (isSubscribed()) return true;
  var chatCount = incrementChatMessages();
  updateFreeBar();
  if (window._bemdic_updateTutorChatCounter) window._bemdic_updateTutorChatCounter();
  if (chatCount > FREE_AI_CHAT_LIMIT) {
    showPaywall('chat');
    return false;
  }
  return true;
};
// Word limit check for GT fallback (outside subscription IIFE scope)
window._bemdic_wordCheck = function() {
  if (isSubscribed()) return true;
  var count = incrementWords();
  updateFreeBar();
  if (count > FREE_WORD_LIMIT) {
    showPaywall('words');
    return false;
  }
  return true;
};
// Non-incrementing check — use on button click to block before any UI changes
window._bemdic_aiChatLimitReached = function() {
  if (isSubscribed()) return false;
  var u = resetIfNewDay(getUsage());
  return (u.chat || 0) >= FREE_AI_CHAT_LIMIT;
};
window._bemdic_showPaywall = showPaywall;
window._bemdic_isSubscribed = isSubscribed;
// Update the tutor-page real-time chat counter
window._bemdic_updateTutorChatCounter = function() {
  var el = document.getElementById('tutor-chat-counter');
  if (!el) return;
  if (isSubscribed()) { el.innerHTML = ''; return; }
  var u = resetIfNewDay(getUsage());
  var used = u.chat || 0;
  var left = Math.max(0, FREE_AI_CHAT_LIMIT - used);
  el.className = 'tutor-chat-counter' + (left === 0 ? ' tcc-empty' : left <= 2 ? ' tcc-warn' : '');
  el.innerHTML = '<b>' + left + '</b> / ' + FREE_AI_CHAT_LIMIT + ' free AI chats left'
    + (left === 0 ? ' &nbsp;·&nbsp; <a href="#" style="color:#ea4335;font-weight:600;text-decoration:none;" onclick="if(window._bemdic_showPaywall)window._bemdic_showPaywall(\'chat\');return false;">Subscribe</a>' : '');
};

// --- PAYWALL WORDING IN THE CHOSEN LANGUAGE ---
// The paywall carried its second language hardcoded in Bemba ("Ukwabula
// Apakupelela", "Muleshupikwa pakulipila?"). Those lines are the ones a user is
// most likely to need in their own language, so they are sourced in English
// here and rendered in whichever language is selected. Bemba keeps its original
// hand-written wording; every other language is translated once per device and
// cached, so the modal still builds synchronously.
var PAYWALL_TEXT = {
  unlimited: { en: 'No limits',
               bem: 'Ukwabula Apakupelela' },
  trouble:   { en: 'Having trouble paying online? Pay another way here',
               bem: 'Muleshupikwa pakulipila? Bofyeni inshila imbi pano' },
  afterPay:  { en: 'If you have paid, send us a message on WhatsApp',
               bem: 'Ngamwalipila, tumeni message ku whatsapp' },
  limit:     { en: 'You have used up the free features. Pay to carry on without interruption for the days given, or come back tomorrow to use it again.',
               bem: 'Mwapwisha ukubofya ifya free, Lipileni pakukonyapo ukwabula ukupwa panshiku shipelwe nangu mukabwele mailo pakubofya nakambi' }
};

var _PW_KEYS = Object.keys(PAYWALL_TEXT);
var _PW_CACHE_KEY = 'alldic_paywall_' + LANG_CODE;
var _pwTranslations = null;

try { _pwTranslations = JSON.parse(localStorage.getItem(_PW_CACHE_KEY) || 'null'); } catch (e) {}

function _pw(key) {
  var entry = PAYWALL_TEXT[key];
  if (!entry) return '';
  if (LANG_CODE === 'bem') return entry.bem;
  if (LANG_CODE === 'en') return entry.en;
  if (_pwTranslations && _pwTranslations[key]) return _pwTranslations[key];
  return entry.en;                       // shown until the translation lands
}

// Fetch all four lines in one request, then cache them for next time.
(function _warmPaywallText() {
  if (LANG_CODE === 'bem' || LANG_CODE === 'en' || _pwTranslations) return;
  var lines = _PW_KEYS.map(function (k) { return PAYWALL_TEXT[k].en; });
  fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='
        + LANG_CODE + '&dt=t&q=' + encodeURIComponent(lines.join('\n')))
    .then(function (r) { return r.json(); })
    .then(function (d) {
      var joined = (d && d[0]) ? d[0].map(function (s) { return s[0] || ''; }).join('') : '';
      var parts = joined.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
      if (parts.length !== _PW_KEYS.length) return;
      var map = {};
      _PW_KEYS.forEach(function (k, i) { map[k] = parts[i]; });
      _pwTranslations = map;
      try { localStorage.setItem(_PW_CACHE_KEY, JSON.stringify(map)); } catch (e) {}
    })
    .catch(function () {});
})();

// Shared styling for the card form's inputs.
var _cardInputCss = 'width:100%;box-sizing:border-box;padding:9px 10px;border:1.5px solid #bbdefb;border-radius:6px;font-size:14px;margin:4px 0;outline:none;';

// Visa and Mastercard marks, drawn inline as SVG on white chips. Inline rather
// than image files so they render instantly with the modal and still work when
// the app is used offline or from the cached bundle.
var _cardBrandMarks =
    '<span style="display:flex;gap:5px;flex-shrink:0;">'
  +   '<span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:24px;'
  +     'background:#fff;border:1px solid #dfe6ef;border-radius:4px;">'
  +     '<svg width="30" height="11" viewBox="0 0 48 16" aria-label="Visa" role="img">'
  +       '<text x="0" y="13" font-family="Arial,Helvetica,sans-serif" font-size="15" font-weight="bold"'
  +       ' font-style="italic" letter-spacing="0.5" fill="#1A1F71">VISA</text>'
  +     '</svg>'
  +   '</span>'
  +   '<span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:24px;'
  +     'background:#fff;border:1px solid #dfe6ef;border-radius:4px;">'
  +     '<svg width="32" height="20" viewBox="0 0 32 20" aria-label="Mastercard" role="img">'
  +       '<circle cx="12.5" cy="10" r="7.5" fill="#EB001B"/>'
  +       '<circle cx="19.5" cy="10" r="7.5" fill="#F79E1B"/>'
  +       '<path d="M16 4.2a7.48 7.48 0 000 11.6 7.48 7.48 0 000-11.6z" fill="#FF5F00"/>'
  +     '</svg>'
  +   '</span>'
  + '</span>';

// Polls /subscribe/verify until a collection settles, then activates the
// subscription. Card payments reuse this so both methods confirm identically —
// the endpoint reads the `payments` row, not the payment method.
// onDone receives true (paid), false (declined) or the string 'timeout' — the
// caller needs to tell "gave up waiting" apart from "definitely failed", so an
// abandoned payment can be cleaned up silently instead of being reported as a
// failure the customer never made.
function _bemdicWatchPayment(txRef, statusEl, btn, btnLabel, onDone, opts) {
  var _api = window._bemdic_apiCall;
  var _did = window._bemdic_getDeviceId;
  if (!_api || !_did || !txRef) return;

  var maxPolls = (opts && opts.attempts) || 60;
  var polls = 0;
  var stopped = false;

  function finish(outcome) {
    if (stopped) return;
    stopped = true;
    try { localStorage.removeItem('bemdic_card_pending'); } catch (e) {}
    if (onDone) onDone(outcome);
  }

  // Checks start immediately and quickly, then ease off. Waiting a fixed five
  // seconds before the very first check meant someone returning from a
  // completed payment stared at "Checking your card payment…" while nothing
  // was actually happening yet.
  function delayFor(n) {
    if (n < 5) return 1500;      // first few seconds: settle-time for the redirect
    if (n < 15) return 3000;
    return 5000;
  }

  function schedule() {
    if (stopped) return;
    setTimeout(poll, delayFor(polls));
  }

  function poll() {
    if (stopped) return;
    polls++;
    if (polls > maxPolls) {
      if (statusEl) {
        statusEl.style.color = 'crimson';
        statusEl.textContent = 'Still waiting on your bank. If you were charged, contact us on WhatsApp with your reference.';
      }
      if (btn) { btn.disabled = false; btn.textContent = btnLabel; }
      finish('timeout');
      return;
    }

    _api('/subscribe/verify', { tx_ref: txRef, device_id: _did() }, function (v) {
      if (v && v.ok && v.status === 'successful' && v.subscription_code) {
        if (activateSubscription(v.subscription_code)) {
          if (statusEl) {
            statusEl.style.color = '#2e7d32';
            statusEl.innerHTML = '<b>Payment successful!</b> Your subscription is active.';
          }
          if (btn) btn.style.display = 'none';
          finish(true);
          setTimeout(function () { location.reload(); }, 2000);
        } else {
          // The payment went through but the code would not validate. Previously
          // this fell through silently: polling had stopped and no callback
          // fired, so the banner sat on "Checking…" for ever. Say so instead.
          if (statusEl) {
            statusEl.style.color = 'crimson';
            statusEl.textContent = 'Payment received, but activation failed. Please contact us on WhatsApp with your reference.';
          }
          finish('error');
        }
        return;
      }
      if (v && v.ok && v.status === 'failed') {
        if (statusEl) {
          statusEl.style.color = 'crimson';
          statusEl.textContent = v.reason ? ('Payment failed: ' + v.reason) : 'Payment failed. Please try another card.';
        }
        if (btn) { btn.disabled = false; btn.textContent = btnLabel; }
        finish(false);
        return;
      }
      schedule();                 // still pending — keep watching
    });
  }

  poll();                         // check straight away, not five seconds later
}

// Returning from a 3-D Secure challenge: Lenco sends the customer back to
// /?card_return=<reference>. Finish the same verification the in-page flow does,
// then clean the URL so a refresh does not re-trigger it.
(function _bemdicHandleCardReturn() {
  // Only worth confirming if Lipila actually sent the customer back here, or a
  // redirect happened very recently. Previously any leftover
  // `bemdic_card_pending` key triggered this, and the key was only removed on a
  // definite success or failure — so someone who opened the card page and
  // changed their mind was met with "Confirming your card payment…" on every
  // visit afterwards, for a payment they never made.
  var PENDING_TTL_MS = 30 * 60 * 1000;

  function readPending() {
    try {
      var raw = localStorage.getItem('bemdic_card_pending');
      if (!raw) return null;
      // Older builds stored a bare reference string with no timestamp.
      if (raw.charAt(0) !== '{') { localStorage.removeItem('bemdic_card_pending'); return null; }
      var rec = JSON.parse(raw);
      if (!rec || !rec.ref) return null;
      if (Date.now() - (rec.at || 0) > PENDING_TTL_MS) {
        localStorage.removeItem('bemdic_card_pending');
        return null;
      }
      return rec.ref;
    } catch (e) { return null; }
  }
  function clearPending() {
    try { localStorage.removeItem('bemdic_card_pending'); } catch (e) {}
  }

  var fromUrl = null;
  try { fromUrl = new URLSearchParams(location.search).get('card_return'); } catch (e) {}
  var ref = fromUrl || readPending();
  if (!ref) return;

  if (fromUrl) {
    try { history.replaceState({}, '', location.pathname); } catch (e) {}
  }

  var banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:100001;background:#1a73e8;color:#fff;'
    + 'padding:10px 16px;font-size:14px;text-align:center;font-family:Arial,sans-serif;';
  banner.textContent = 'Checking your card payment…';
  function mount() { if (document.body && !banner.parentNode) document.body.appendChild(banner); }
  document.addEventListener('DOMContentLoaded', mount);
  mount();

  function dismiss(ms) {
    setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, ms);
  }

  // A short window: a completed payment settles in seconds. If it is still
  // pending after this the customer almost certainly abandoned, so the banner
  // goes away quietly rather than implying a payment is on its way.
  _bemdicWatchPayment(ref, null, null, '', function (outcome) {
    clearPending();
    // outcome is true | false | 'timeout' | 'error' — the strings are truthy, so
    // they must be handled before any boolean test.
    if (outcome === 'timeout') { dismiss(0); return; }
    if (outcome === 'error') {
      banner.style.background = '#c62828';
      banner.textContent = 'Payment received, but activation failed — please contact us.';
      dismiss(10000);
      return;
    }
    banner.style.background = outcome === true ? '#2e7d32' : '#c62828';
    banner.textContent = outcome === true
      ? 'Payment confirmed — your subscription is active.'
      : 'That card payment did not go through.';
    dismiss(6000);
  }, { attempts: 18 });
})();

// --- PAYWALL MODAL (built dynamically to always use current settings) ---
function buildModalHTML() {
  // Build plan selector cards
  var planCards = '';
  var plan_labels=["Starter","Popular⭐","Best Ever🔥"];
  for (var _pi = 0; _pi < PLANS.length; _pi++) {
    var _pl = PLANS[_pi];
    var _sel = _pi === 0;
//if the days are than 365, let "the days" be displayed in months, else in years

    var daysLabel=_pl.days + " days";
    if(_pl.days > 30){
      var months = Math.floor(_pl.days / 30);
      if(months >= 2){
        daysLabel = months + " months";
      } }
      
    if(_pl.days >= 365){
      var years = Math.floor(_pl.days / 365);
      daysLabel = years + " year";
      if(years >= 2){
        daysLabel = years + " years";
      }
    }
    

    planCards += '<div class="bemdic-plan-card" data-days="'+_pl.days+'" data-amount="'+_pl.amount+'" data-idx="'+_pi+'"'
      + ' style="flex:1;min-width:80px;border:2px solid '+(_sel?'#2e7d32':'#c8e6c9')+';border-radius:10px;padding:10px 6px;text-align:center;cursor:pointer;'
      + 'background:'+(_sel?'#e8f5e9':'#fff')+';transition:border-color 0.15s,background 0.15s;">'
      + '<div style="font-size:13px;font-weight:bold;color:#2e7d32;margin:4px 0;">'+plan_labels[_pi]+'</div>'
      + '<div style="font-size:20px;font-weight:bold;color:#2e7d32;line-height:1.2;">'+_pl.amount+'</div>'
      + '<div style="font-size:12px;color:#555;margin-top:4px;">'+daysLabel+'</div>'
      + '</div>';
  }

  return '<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:99999;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;overflow-y:auto;">'
  + '<div style="background:#fff;border-radius:12px;padding:24px 18px;max-width:380px;width:92%;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,0.3);margin:16px auto;">'
  + '<h2 style="margin:0 0 8px;color:#222;font-size:20px;">Get Unlimited Dictionary (' + _pw("unlimited") + ')</h2>'
  + '<p style="color:#444;font-size:14px;line-height:1.5;margin:8px 0;" id="bemdic-pw-reason"></p>'
  + '<div style="margin:10px 0 14px;">'
  + '<div style="font-size:13px;color:#555;font-weight:600;margin-bottom:8px;">Choose a plan:</div>'
  + '<div id="bemdic-plan-picker" style="display:flex;gap:8px;justify-content:center;">'+planCards+'</div>'
  + '</div>'
  + '<div id="bemdic-momo-section" style="background:linear-gradient(135deg,#e8f5e9,#f1f8e9);border-radius:8px;padding:14px;margin:12px 0;border:1px solid #c8e6c9;">'
  + '<div style="color:#2e7d32;font-weight:bold;font-size:14px;margin-bottom:8px;">Pay with Mobile Money</div>'
  + '<input type="tel" id="bemdic-momo-phone" placeholder="Enter phone number..." maxlength="15" style="width:80%;padding:10px;border:2px solid #a5d6a7;border-radius:8px;font-size:16px;text-align:center;margin:6px 0;outline:none;">'
  + '<div id="bemdic-carrier-badge" style="font-size:12px;font-weight:700;min-height:18px;margin:2px 0;"></div>'
  + '<div id="bemdic-momo-status" style="font-size:13px;min-height:18px;margin:4px 0;color:#555;"></div>'
  + '<button id="bemdic-momo-btn" style="padding:10px 24px;border:none;border-radius:8px;font-size:15px;cursor:pointer;background:#2e7d32;color:#fff;margin-top:4px;">Pay '+PLANS[0].amount+' Now</button>'
  + '</div>'
  // Mobile money is Zambia-only, so card is offered alongside it for everyone
  // else. Collapsed by default to keep the modal short for the majority who pay
  // by phone. Nothing here is emitted while FEATURES.card is off, so there is no
  // hidden markup to stumble into and no dead button to click.
  + (!FEATURES.card ? '' : ''
  + '<div style="margin:10px 0 4px;"><button id="bemdic-card-toggle" style="'
  +   'display:flex;align-items:center;gap:10px;width:100%;box-sizing:border-box;cursor:pointer;'
  +   'background:linear-gradient(135deg,#e8f1fe,#f5f9ff);border:2px solid #1a73e8;border-radius:10px;'
  +   'padding:11px 12px;text-align:left;box-shadow:0 1px 4px rgba(26,115,232,0.18);">'
  +   _cardBrandMarks
  +   '<span style="flex:1;min-width:0;line-height:1.35;">'
  +     '<span id="bemdic-card-toggle-label" style="display:block;font-size:15px;font-weight:700;color:#0d47a1;">Pay by Card</span>'
  +     '<span id="bemdic-card-toggle-sub" style="display:block;font-size:11px;color:#3c6fb8;">For customers outside Zambia</span>'
  +   '</span>'
  +   '<span id="bemdic-card-toggle-chev" style="font-size:12px;color:#1a73e8;flex-shrink:0;">▼</span>'
  + '</button></div>'
  + '<div id="bemdic-card-section" style="display:none;background:linear-gradient(135deg,#e3f2fd,#f1f8ff);border-radius:8px;padding:14px;margin:8px 0;border:1px solid #bbdefb;text-align:left;">'
  +   '<div style="color:#0d47a1;font-weight:bold;font-size:14px;margin-bottom:8px;text-align:center;">Pay with Card</div>'
  // No card fields here on purpose: Lipila collects the card number, expiry and
  // CVV on its own secure page, and we only send the customer there. That keeps
  // card data off this site entirely. What Lipila does require is the payer's
  // identity and billing address.
  // Only what Lipila cannot ask for itself: a name and an address for the
  // receipt. Card details, and any billing address the bank wants, are entered
  // once on Lipila's page — asking for them here as well was pure duplication.
  +   '<div style="font-size:11.5px;color:#5f6368;margin:0 0 2px;">Who is this subscription for?</div>'
  +   '<div style="display:flex;gap:6px;">'
  +     '<input type="text" id="bemdic-card-first" placeholder="First name" style="'+_cardInputCss+'">'
  +     '<input type="text" id="bemdic-card-last" placeholder="Last name" style="'+_cardInputCss+'">'
  +   '</div>'
  +   '<input type="email" id="bemdic-card-email" placeholder="Email address (for your receipt)" style="'+_cardInputCss+'">'
  +   '<div id="bemdic-card-status" style="font-size:13px;min-height:18px;margin:6px 0;color:#555;text-align:center;"></div>'
  +   '<button id="bemdic-card-btn" style="width:100%;padding:10px 24px;border:none;border-radius:8px;font-size:15px;cursor:pointer;background:#1a73e8;color:#fff;margin-top:4px;">Pay by Card</button>'
  +   '<div id="bemdic-card-fx" style="font-size:11px;color:#3c6fb8;text-align:center;margin-top:5px;"></div>'
  +   '<div style="font-size:11px;color:#80868b;text-align:center;margin-top:4px;">Secured by Lipila. You enter your card on Lipila\'s payment page — card details never touch this site.</div>'
  + '</div>')
  + '<div style="margin:8px 0 4px;"><button id="bemdic-manual-toggle" style="background:none;border:none;color:#028;font-size:14px;cursor:pointer;text-decoration:none;padding:0; line-height:24px;">Having trouble with online payment? Pay manually here (' + _pw("trouble") + ')</button></div>'
  + '<div id="bemdic-manual-section" style="display:none;">'
  + '<div style="display:none;align-items:center;margin:12px 0;"><div style="flex:1;height:1px;background:#ddd;"></div><span style="padding:0 10px;color:#999;font-size:12px;">OR enter code manually</span><div style="flex:1;height:1px;background:#ddd;"></div></div>'
  + '<div style="text-align:left;background:#f5f5f5;border-radius:8px;padding:12px 14px;margin:0 0 12px;font-size:13px;color:#333;">'
  + '<div style="color:#084;margin-bottom:8px;">Manual payment:</div>'
  + '<button id="bemdic-momo-btn" style="padding:5px 10px;border:none;border-radius:4px;font-size:13px;cursor:pointer;background:#2e7d32;color:#fff;margin:4px 16px;"><a href="tel:*115%23" style="text-decoration:none; color:white;">Dial *115#</a></button>'
  + '<ol id="payments-steps"><li>Send <b id="bemdic-manual-amount">'+PLANS[0].amount+'</b> to <b>'+PAYMENT_NUMBER+'</b> via Airtel/MTN/Zamtel Money (<a href="https://www.facebook.com/profile.php?id=61590501535122" target="_blank" style="text-decoration:none; color:#028;"><b>Chanda Fungamwango</b></a>)</li>'
  + '<li>After paying, send a message on whatsapp to receive the code (' + _pw("afterPay") + ') <div style="margin:8px 0;"> <a href="https://wa.me/260763428450" style="padding:6px 10px;border:none;border-radius:4px;font-size:13px;cursor:pointer;background:#2e7d32;color:#fff;margin-top:4px; text-decoration:none;">Send Whatsapp message</a></div></li>'
  + '<li>Enter the code you receive below (ingisheni code mwapokelela ku whatsapp pe samba nokucita activate)</li></ol>'
  + '</div>'
  + '<div><input type="text" id="bemdic-sub-code" placeholder="Enter code e.g A3F2-B1C4" maxlength="20" style="width:80%;padding:10px;border:2px solid #ddd;border-radius:8px;font-size:16px;text-align:center;letter-spacing:2px;margin:5px 0;outline:none;"></div>'
  + '<div id="bemdic-pw-error" style="color:crimson;font-size:13px;min-height:18px;margin:4px 0;"></div>'
  + '<div><button id="bemdic-activate-btn" style="display:inline-block;padding:10px 28px;border:none;border-radius:8px;font-size:15px;cursor:pointer;margin:4px;background:#084;color:#fff;">Activate Code</button></div>'
  + '</div>'
  + '<div><button id="bemdic-close-btn" style="display:inline-block;padding:10px 28px;border:none;border-radius:8px;font-size:15px;cursor:pointer;margin:6px 4px;background:#eee;color:#555;">Cancel</button></div>'
  + '</div></div>';
}
localStorage.setItem('subscription_modal', buildModalHTML());

function showPaywall(reason){
  if(document.getElementById('bemdic-paywall')) return;

  var reasonText = '';
  var alert_in_bemba_words = _pw('limit');
 
  if(reason === 'words'){
    var u = resetIfNewDay(getUsage());
    if(u.words >= FREE_WORD_LIMIT) reasonText = 'You have used your <b>'+FREE_WORD_LIMIT+' free word translations</b>. Come back tomorrow or subscribe for unlimited access. (<b>'+alert_in_bemba_words+'</b>)';
  } else if(reason === 'quizzes'){
    var u = resetIfNewDay(getUsage());
    if(u.quizzes >= FREE_QUIZ_LIMIT) reasonText = 'You have used your <b>'+FREE_QUIZ_LIMIT+' free quiz session</b>. Come back tomorrow or subscribe for unlimited access. (<b>'+alert_in_bemba_words+'</b>)';
  } else if(reason === 'translate'){
    reasonText = 'You have reached the <b>'+FREE_TRANSLATE_CHAR_LIMIT+' character limit</b> for free translations. Subscribe for unlimited translations.';
  } else if(reason === 'chat'){
    reasonText = 'You\'ve used up your <b>'+FREE_AI_CHAT_LIMIT+' free AI chat messages</b>. Come back tomorrow or subscribe for unlimited chats. (<b>'+alert_in_bemba_words+'</b>)';
  } else if(reason === 'verify'){
    reasonText = 'You must subscribe to request for <b>translation verification</b>';
  }

  // build modal with current settings values
  var modalHTML = buildModalHTML();

  var modal = document.createElement('div');
  modal.id = 'bemdic-paywall';
  modal.innerHTML = modalHTML;

  var closePaywall = function() { var m = document.getElementById('bemdic-paywall'); if (m && m.parentNode) m.parentNode.removeChild(m); };
  document.body.appendChild(modal);
  window._pushModal(closePaywall);

  // set the reason text
  var reasonEl = document.getElementById('bemdic-pw-reason');
  if(reasonEl) reasonEl.innerHTML = reasonText;

  // --- Plan picker ---
  var _selectedPlan = PLANS[0];
  var planCards = document.querySelectorAll('.bemdic-plan-card');
  for (var _pci = 0; _pci < planCards.length; _pci++) {
    planCards[_pci].addEventListener('click', function() {
      // Update selection styles
      for (var _j = 0; _j < planCards.length; _j++) {
        planCards[_j].style.border = '2px solid #c8e6c9';
        planCards[_j].style.background = '#fff';
      }
      this.style.border = '2px solid #2e7d32';
      this.style.background = '#e8f5e9';
      _selectedPlan = { days: parseInt(this.getAttribute('data-days')), amount: this.getAttribute('data-amount') };
      var btn = document.getElementById('bemdic-momo-btn');
      if (btn && !btn.disabled) btn.textContent = 'Pay ' + _selectedPlan.amount + ' Now';
      var manualAmt = document.getElementById('bemdic-manual-amount');
      if (manualAmt) manualAmt.textContent = _selectedPlan.amount;
    });
  }

  // Carrier detection on phone input
  var _phoneEl = document.getElementById('bemdic-momo-phone');
  var _badgeEl = document.getElementById('bemdic-carrier-badge');
  var _carriers = {
    '095': { name: 'Zamtel', color: '#068c30' },
    '075': { name: 'Zamtel', color: '#068c30' },
    '096': { name: 'MTN',    color: '#f9a825' },
    '076': { name: 'MTN',    color: '#f9a825' },
    '097': { name: 'Airtel', color: '#c62828' },
    '077': { name: 'Airtel', color: '#c62828' }
  };
  if (_phoneEl && _badgeEl) {
    _phoneEl.addEventListener('input', function() {
      var digits = this.value.replace(/\D/g, '');
      if (digits.startsWith('260')) digits = '0' + digits.slice(3);
      if (digits.length === 9 && /^[79]/.test(digits)) digits = '0' + digits;
      var prefix = digits.slice(0, 3);
      var carrier = _carriers[prefix];
      if (carrier && digits.length >= 3) {
        _badgeEl.innerHTML = '<span style="background:' + carrier.color + ';color:#fff;padding:2px 10px;border-radius:10px;">' + carrier.name + '</span>';
      } else {
        _badgeEl.innerHTML = digits.length >= 3 ? '<span style="color:#c62828;">Unknown network</span>' : '';
      }
    });
  }

  // manual payment toggle
  document.getElementById('bemdic-manual-toggle').addEventListener('click', function(){
    var sec = document.getElementById('bemdic-manual-section');
    if(sec.style.display === 'none'){ sec.style.display = 'block'; this.textContent = 'Hide manual payment'; }
    else { sec.style.display = 'none'; this.textContent = 'Having trouble with automatic payment? Pay manually'; }
  });

  // activate button
  document.getElementById('bemdic-activate-btn').addEventListener('click', function(){
    var code = document.getElementById('bemdic-sub-code').value.trim();
    var errEl = document.getElementById('bemdic-pw-error');
    if(!code){
      errEl.textContent = 'Please enter your subscription code';
      return;
    }
    if(activateSubscription(code)){
      errEl.style.color = '#084';
      errEl.textContent = 'Activated! Enjoy ' + getSubDaysLeft() + ' days of unlimited access!';
      setTimeout(function(){
        window._popModal(); closePaywall();
        // remove the free bar if present
        var freeBar = document.getElementById('bemdic-free-bar');
        if(freeBar) freeBar.parentNode.removeChild(freeBar);
        // automatically show content after activation
        var wl = document.getElementById('words-loader');
        var pb = document.getElementById('pagination-btns-wrapper');
        if(wl) wl.style.display = 'block';
        if(pb) pb.style.display = 'block';
        if(typeof _original_load_dictionary === 'function') _original_load_dictionary();
      }, 1500);
    } else {
      errEl.style.color = 'crimson';
      errEl.textContent = 'Invalid or expired code. Please check and try again.';
    }
  });

  // --- Mobile Money Pay button ---
  /* ---- CARD PAYMENT ---- */
  // Cards are billed in dollars, so the button has to show dollars. The server
  // owns the conversion — asking it for the quote keeps the price on the button
  // and the price actually charged from ever drifting apart.
  // Cards stay hidden for 24h after the processor reports them unavailable, so
  // a dead option is not paraded in front of every customer. Remove
  // `bemdic_card_off` from localStorage to bring it back immediately.
  //
  // The flag is cleared once on the switch to Lipila: anyone who hit the old
  // Lenco "no card permission" error still has it set, and would otherwise be
  // denied a card option that now works.
  var CARD_PROVIDER = 'lipila';
  function _applyCardAvailability() {
    var wrap = document.getElementById('bemdic-card-toggle');
    var section = document.getElementById('bemdic-card-section');
    try {
      if (localStorage.getItem('bemdic_card_provider') !== CARD_PROVIDER) {
        localStorage.removeItem('bemdic_card_off');
        localStorage.setItem('bemdic_card_provider', CARD_PROVIDER);
      }
    } catch (e) {}
    var off = 0;
    try { off = parseInt(localStorage.getItem('bemdic_card_off') || '0'); } catch (e) {}
    var stillOff = off && (Date.now() - off) < 24 * 60 * 60 * 1000;
    if (!stillOff) return;
    if (wrap) wrap.style.display = 'none';
    if (section) section.style.display = 'none';
  }

  // The card price is shown to the customer in US dollars, since cards are the
  // route for people outside Zambia. Lipila settles in kwacha, so the server
  // sends the kwacha figure and this is display only — /subscribe/card-quote
  // owns the conversion so the quote and the charge can never disagree.
  var _cardUsd = null;
  function _refreshCardPrice() {
    var btn = document.getElementById('bemdic-card-btn');
    var note = document.getElementById('bemdic-card-fx');
    if (!btn) return;
    btn.textContent = 'Checking price…';
    var _api = window._bemdic_apiCall;
    if (!_api) { btn.textContent = 'Pay by Card'; return; }
    _api('/subscribe/card-quote', { sub_days: _selectedPlan.days }, function (q) {
      if (q && q.ok) {
        _cardUsd = q.amount;
        btn.textContent = 'Pay $' + q.amount + ' by Card';
        if (note) note.textContent = 'Shown in US dollars — charged as ' + _selectedPlan.amount + ' at today’s rate.';
      } else {
        _cardUsd = null;
        btn.textContent = 'Pay ' + _selectedPlan.amount + ' by Card';
        if (note) note.textContent = '';
      }
    });
  }
  window._bemdic_refreshCardPrice = _refreshCardPrice;
  // Follows the same shape as mobile money below: initiate, then poll
  // /subscribe/verify until the collection settles. The only extra step is
  // 3-D Secure, where the bank needs the customer on its own page first.
  var cardToggle = document.getElementById('bemdic-card-toggle');
  var cardSection = document.getElementById('bemdic-card-section');
  _applyCardAvailability();
  if (cardToggle && cardSection) {
    cardToggle.addEventListener('click', function () {
      var open = cardSection.style.display !== 'none';
      cardSection.style.display = open ? 'none' : 'block';
      if (!open) _refreshCardPrice();
      // Only the caption changes — rewriting the button's text would delete the
      // card marks along with it.
      var lbl = document.getElementById('bemdic-card-toggle-label');
      var sub = document.getElementById('bemdic-card-toggle-sub');
      var chev = document.getElementById('bemdic-card-toggle-chev');
      if (lbl) lbl.textContent = 'Pay by Card';
      if (sub) sub.textContent = open ? 'For customers outside Zambia' : 'Enter your card details below';
      if (chev) chev.textContent = open ? '▼' : '▲';
      if (!open) cardSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // Card number, expiry and CVV are no longer collected here — Lipila's own
  // page takes those, along with any billing address the bank asks for.
  var cardBtn = document.getElementById('bemdic-card-btn');
  if (cardBtn) cardBtn.addEventListener('click', function () {
    var statusEl = document.getElementById('bemdic-card-status');
    function fail(msg) {
      statusEl.style.color = 'crimson';
      statusEl.textContent = msg;
      cardBtn.disabled = false;
      cardBtn.textContent = (_cardUsd ? 'Pay $' + _cardUsd + ' by Card' : 'Pay by Card');
    }
    function val(id) { var e = document.getElementById(id); return e ? e.value.trim() : ''; }

    // Name and email only. Card details and billing address are collected once,
    // on Lipila's page.
    var payload = {
      device_id: window._bemdic_getDeviceId ? window._bemdic_getDeviceId() : '',
      sub_days: _selectedPlan.days,
      email: val('bemdic-card-email'),
      first_name: val('bemdic-card-first'),
      last_name: val('bemdic-card-last')
    };

    cardBtn.disabled = true;
    cardBtn.textContent = 'Processing…';
    statusEl.style.color = '#555';
    statusEl.textContent = 'Securing your card details…';

    var _api = window._bemdic_apiCall;
    var _did = window._bemdic_getDeviceId;
    if (!_api || !_did) { fail('Card payment is not available right now'); return; }

    _api('/subscribe/card-pay', payload, function (resp) {
      if (!resp.ok) {
        // Cards not enabled on the account yet: say so once, then stop offering
        // the option for the rest of the day rather than letting people fill the
        // form in again for nothing. Clearing the flag re-enables it instantly
        // once Lenco switches the permission on.
        if (resp.code === 'card_unavailable') {
          try { localStorage.setItem('bemdic_card_off', String(Date.now())); } catch (e) {}
          fail(resp.error || 'Card payments are not available yet.');
          _applyCardAvailability();
          return;
        }
        fail(resp.error || 'Card payment failed. Please try again.');
        return;
      }

      if (resp.redirect) {
        // Lipila hosts the card form and any 3-D Secure step. Remember the
        // reference so the app can finish the job when the customer returns.
        // Timestamped so an abandoned attempt expires instead of prompting a
        // "confirming your payment" banner on every future visit.
        try {
          localStorage.setItem('bemdic_card_pending',
            JSON.stringify({ ref: resp.tx_ref, at: Date.now() }));
        } catch (e) {}
        statusEl.style.color = '#1a73e8';
        statusEl.textContent = 'Taking you to the secure card page…';
        setTimeout(function () { window.location.href = resp.redirect; }, 800);
        return;
      }

      statusEl.style.color = '#1a73e8';
      statusEl.textContent = resp.message || 'Payment is processing…';
      cardBtn.textContent = 'Waiting for confirmation…';
      _bemdicWatchPayment(resp.tx_ref, statusEl, cardBtn, (_cardUsd ? 'Pay $' + _cardUsd + ' by Card' : 'Pay by Card'));
    });
  });

  var momoBtn = document.getElementById('bemdic-momo-btn');
  if(momoBtn) momoBtn.addEventListener('click', function(){
    var phone = document.getElementById('bemdic-momo-phone').value.trim();
    var statusEl = document.getElementById('bemdic-momo-status');
    var _digits = phone.replace(/\D/g, '');
    if (_digits.startsWith('260')) _digits = '0' + _digits.slice(3);
    if (_digits.length === 9 && /^[79]/.test(_digits)) _digits = '0' + _digits;
    if (!_digits || !/^0(75|76|77|95|96|97)\d{7}$/.test(_digits)) {
      statusEl.style.color = 'crimson';
      statusEl.textContent = 'Enter a valid MTN, Airtel or Zamtel number (e.g. 0961234567)';
      return;
    }
    momoBtn.disabled = true;
    momoBtn.textContent = 'Processing...';
    statusEl.style.color = '#555';
    statusEl.textContent = 'Initiating payment...';

    var _api = window._bemdic_apiCall;
    var _did = window._bemdic_getDeviceId;
    if (!_api || !_did) { statusEl.style.color='crimson'; statusEl.textContent='Payment not available'; momoBtn.disabled=false; momoBtn.textContent='Pay '+_selectedPlan.amount+' Now'; return; }

    _api('/subscribe/pay', {
      phone: phone,
      device_id: _did(),
      sub_days: _selectedPlan.days
    }, function(resp){
      if(resp.ok){
        statusEl.style.color = '#2e7d32';
        statusEl.textContent = resp.message || 'Check your phone for payment prompt!';
        momoBtn.textContent = 'Waiting for confirmation...';
        // Disable close button and show warning during transaction
        var closeBtn = document.getElementById('bemdic-close-btn');
        if(closeBtn){ closeBtn.disabled = true; closeBtn.style.opacity = '0.4'; closeBtn.style.cursor = 'not-allowed'; }
        var warnEl = document.createElement('div');
        warnEl.id = 'bemdic-tx-warning';
        warnEl.style.cssText = 'background:#fff3cd;border:1px solid #ffc107;border-radius:6px;padding:8px 12px;margin-top:10px;font-size:13px;color:#856404;text-align:center;';
        warnEl.innerHTML = '&#9888; <b>Do not close or navigate away from this page</b> while the transaction is in progress.';
        statusEl.insertAdjacentElement('afterend', warnEl);
        // Inject spinner keyframes once
        if(!document.getElementById('bemdic-spinner-style')){
          var styleEl = document.createElement('style');
          styleEl.id = 'bemdic-spinner-style';
          styleEl.textContent = '@keyframes bemdic-spin{to{transform:rotate(360deg)}}'
            + '@keyframes bemdic-pulse{0%,100%{opacity:1}50%{opacity:0.35}}'
            + '.bemdic-spinner{width:38px;height:38px;border:4px solid #c8e6c9;border-top-color:#2e7d32;border-radius:50%;animation:bemdic-spin 0.85s linear infinite;margin:0 auto 10px;}';
          document.head.appendChild(styleEl);
        }
        // Animation + countdown block
        var animEl = document.createElement('div');
        animEl.id = 'bemdic-tx-anim';
        animEl.style.cssText = 'margin-top:12px;text-align:center;padding:14px 8px;background:#f9fbe7;border-radius:8px;border:1px solid #dcedc8;';
        animEl.innerHTML = '<div class="bemdic-spinner"></div>'
          + '<div id="bemdic-tx-countdown" style="font-size:30px;font-weight:bold;color:#2e7d32;line-height:1.1;letter-spacing:1px;">2:00</div>'
          + '<div style="font-size:11px;color:#888;margin-bottom:8px;">time remaining</div>'
          + '<div id="bemdic-tx-tip" style="font-size:12px;color:#555;font-style:italic;min-height:16px;animation:bemdic-pulse 2.5s ease-in-out infinite;"></div>';
        warnEl.insertAdjacentElement('afterend', animEl);
        var txTips = [
          'Check your phone for a payment prompt\u2026',
          'Accept the payment request on your phone.',
          'Ensure your mobile money account has enough balance.',
          'Keep this page open \u2014 we\u2019re confirming your payment.',
          'Checking with your mobile money provider\u2026',
          'Almost there, hang tight!'
        ];
        var txTipIdx = 0;
        var tipEl = document.getElementById('bemdic-tx-tip');
        if(tipEl) tipEl.textContent = txTips[0];
        var txSecsLeft = 120;
        var countdownInterval = setInterval(function(){
          txSecsLeft--;
          var cdEl = document.getElementById('bemdic-tx-countdown');
          if(cdEl){ var m = Math.floor(txSecsLeft/60); var s = txSecsLeft%60; cdEl.textContent = m+':'+(s<10?'0':'')+s; }
          if(txSecsLeft % 10 === 0){ txTipIdx=(txTipIdx+1)%txTips.length; if(tipEl) tipEl.textContent=txTips[txTipIdx]; }
          if(txSecsLeft <= 0) clearInterval(countdownInterval);
        }, 1000);
        // helper to tear down animation elements
        function clearTxUI(){
          clearInterval(countdownInterval);
          var w = document.getElementById('bemdic-tx-warning'); if(w) w.parentNode.removeChild(w);
          var a = document.getElementById('bemdic-tx-anim');   if(a) a.parentNode.removeChild(a);
        }
        // Poll for payment verification
        var txRef = resp.tx_ref;
        var pollCount = 0;
        var pollInterval = setInterval(function(){
          pollCount++;
          _api('/subscribe/verify', {
            tx_ref: txRef,
            device_id: _did()
          }, function(vResp){
            if(vResp.ok && vResp.status === 'successful' && vResp.subscription_code){
              clearInterval(pollInterval);
              clearTxUI();
              if(activateSubscription(vResp.subscription_code)){
                statusEl.style.color = '#2e7d32';
                statusEl.innerHTML = '<b>Payment successful!</b> Enjoy ' + _selectedPlan.days + ' days of unlimited access!';
                momoBtn.style.display = 'none';
                setTimeout(function(){
                  document.body.removeChild(modal);
                  var freeBar = document.getElementById('bemdic-free-bar');
                  if(freeBar) freeBar.parentNode.removeChild(freeBar);
                  var wl = document.getElementById('words-loader');
                  var pb = document.getElementById('pagination-btns-wrapper');
                  if(wl) wl.style.display = 'block';
                  if(pb) pb.style.display = 'block';
                  if(typeof _original_load_dictionary === 'function') _original_load_dictionary();
                }, 2000);
              }
            } else if(vResp.ok && vResp.status === 'failed'){
              clearInterval(pollInterval);
              clearTxUI();
              var closeBtn = document.getElementById('bemdic-close-btn');
              if(closeBtn){ closeBtn.disabled = false; closeBtn.style.opacity = ''; closeBtn.style.cursor = ''; }
              statusEl.style.color = 'crimson';
              statusEl.textContent = vResp.reason ? 'Payment failed: ' + vResp.reason : 'Payment failed. Please try again.';
              momoBtn.disabled = false;
              momoBtn.textContent = 'Pay '+_selectedPlan.amount+' Now';
            }
            // else still pending, keep polling
          });
          // Stop polling after 2 minutes
          if(pollCount > 24){
            clearInterval(pollInterval);
            clearTxUI();
            var closeBtn = document.getElementById('bemdic-close-btn');
            if(closeBtn){ closeBtn.disabled = false; closeBtn.style.opacity = ''; closeBtn.style.cursor = ''; }
            statusEl.style.color = '#e65100';
            statusEl.textContent = 'Payment timed out. If you paid, contact '+PAYMENT_NUMBER;
            momoBtn.disabled = false;
            momoBtn.textContent = 'Try Again';
          }
        }, 5000); // poll every 5 seconds
      } else {
        statusEl.style.color = 'crimson';
        statusEl.textContent = resp.error || 'Payment failed. Try again.';
        momoBtn.disabled = false;
        momoBtn.textContent = 'Pay '+_selectedPlan.amount+' Now';
      }
    });
  });

  // close button
  document.getElementById('bemdic-close-btn').addEventListener('click', function(){
    window._popModal(); closePaywall();
  });
}

// --- PDF EBOOK PAYWALL ---

function hasPdfAccess() {
  return localStorage.getItem('bemdic_pdf_purchased') === '1';
}

function grantPdfAccess() {
  localStorage.setItem('bemdic_pdf_purchased', '1');
  var ebookBtn = document.getElementById('follow-dic-btn');
  if (ebookBtn) {
    ebookBtn.innerHTML = '📥Go to download page';
    ebookBtn.onclick = function() { window.open('https://bemdicpdf.pages.dev/?d=true'); };
  }
}

function buildPdfPaywallHTML() {
  return '<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:99999;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;overflow-y:auto;">'
    + '<div style="background:#fff;border-radius:12px;padding:24px 18px;max-width:380px;width:92%;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,0.3);margin:16px auto;">'
    + '<h2 style="margin:0 0 8px;color:#222;font-size:20px;">📘 Get ' + LANG_NAME + ' Dictionary eBook</h2>'
    + '<p style="color:#444;font-size:14px;line-height:1.5;margin:8px 0;">Pay <b>' + PDF_PRICE + '</b> to download the ' + LANG_NAME + ' dictionary ebook (pdf) with over <b>5,320.00</b> words with examples and use it Forever for Free.</p>'
    + '<div id="bemdic-pdf-momo-section" style="background:linear-gradient(135deg,#e8f5e9,#f1f8e9);border-radius:8px;padding:14px;margin:12px 0;border:1px solid #c8e6c9;">'
    + '<div style="color:#2e7d32;font-weight:bold;font-size:14px;margin-bottom:8px;">Pay with Mobile Money</div>'
    + '<input type="tel" id="bemdic-pdf-phone" placeholder="Enter phone number..." maxlength="15" style="width:80%;padding:10px;border:2px solid #a5d6a7;border-radius:8px;font-size:16px;text-align:center;margin:6px 0;outline:none;">'
    + '<div id="bemdic-pdf-carrier-badge" style="font-size:12px;font-weight:700;min-height:18px;margin:2px 0;"></div>'
    + '<div id="bemdic-pdf-status" style="font-size:13px;min-height:18px;margin:4px 0;color:#555;"></div>'
    + '<button id="bemdic-pdf-pay-btn" style="padding:10px 24px;border:none;border-radius:8px;font-size:15px;cursor:pointer;background:#2e7d32;color:#fff;margin-top:4px;">Pay ' + PDF_PRICE + ' Now</button>'
    + '</div>'
    + '<div style="margin:8px 0 4px;"><button id="bemdic-pdf-manual-toggle" style="background:none;border:none;color:#028;font-size:14px;cursor:pointer;text-decoration:none;padding:0;line-height:24px;">Having trouble with online payment? Pay manually here (' + _pw("trouble") + ')</button></div>'
    + '<div id="bemdic-pdf-manual-section" style="display:none;">'
    + '<div style="text-align:left;background:#f5f5f5;border-radius:8px;padding:12px 14px;margin:0 0 12px;font-size:13px;color:#333;">'
    + '<div style="color:#084;margin-bottom:8px;">Manual payment:</div>'
    + '<button style="padding:5px 10px;border:none;border-radius:4px;font-size:13px;cursor:pointer;background:#2e7d32;color:#fff;margin:4px 16px;"><a href="tel:*115%23" style="text-decoration:none;color:white;">Dial *115#</a></button>'
    + '<ol><li>Send <b>' + PDF_PRICE + '</b> to <b>' + PAYMENT_NUMBER + '</b> via Airtel/MTN/Zamtel Money (<a href="https://www.facebook.com/profile.php?id=61590501535122" target="_blank" style="text-decoration:none;color:#028;"><b>Chanda Fungamwango</b></a>)</li>'
    + '<li>After paying, send a message on WhatsApp to receive confirmation (' + _pw("afterPay") + ') <div style="margin:8px 0;"><a href="https://wa.me/260763428450" style="padding:6px 10px;border:none;border-radius:4px;font-size:13px;cursor:pointer;background:#2e7d32;color:#fff;margin-top:4px;text-decoration:none;">Send WhatsApp message</a></div></li></ol>'
    + '</div>'
    + '</div>'
    + '<div><button id="bemdic-pdf-close-btn" style="display:inline-block;padding:10px 28px;border:none;border-radius:8px;font-size:15px;cursor:pointer;margin:6px 4px;background:#eee;color:#555;">Cancel</button></div>'
    + '</div></div>';
}

function showPdfPaywall() {
  if (document.getElementById('bemdic-pdf-paywall')) return;
  if (hasPdfAccess()) { window.open('https://bemdicpdf.pages.dev/?d=true'); return; }

  var modal = document.createElement('div');
  modal.id = 'bemdic-pdf-paywall';
  modal.innerHTML = buildPdfPaywallHTML();

  var closePaywall = function() { var m = document.getElementById('bemdic-pdf-paywall'); if (m && m.parentNode) m.parentNode.removeChild(m); };
  document.body.appendChild(modal);
  window._pushModal(closePaywall);

  // Carrier detection
  var _phoneEl = document.getElementById('bemdic-pdf-phone');
  var _badgeEl = document.getElementById('bemdic-pdf-carrier-badge');
  var _carriers = { '095': { name: 'Zamtel', color: '#068c30' }, '075': { name: 'Zamtel', color: '#068c30' }, '096': { name: 'MTN', color: '#f9a825' }, '076': { name: 'MTN', color: '#f9a825' }, '097': { name: 'Airtel', color: '#c62828' }, '077': { name: 'Airtel', color: '#c62828' } };
  if (_phoneEl && _badgeEl) {
    _phoneEl.addEventListener('input', function() {
      var digits = this.value.replace(/\D/g, '');
      if (digits.startsWith('260')) digits = '0' + digits.slice(3);
      if (digits.length === 9 && /^[79]/.test(digits)) digits = '0' + digits;
      var prefix = digits.slice(0, 3);
      var carrier = _carriers[prefix];
      if (carrier && digits.length >= 3) {
        _badgeEl.innerHTML = '<span style="background:' + carrier.color + ';color:#fff;padding:2px 10px;border-radius:10px;">' + carrier.name + '</span>';
      } else {
        _badgeEl.innerHTML = digits.length >= 3 ? '<span style="color:#c62828;">Unknown network</span>' : '';
      }
    });
  }

  // Manual toggle
  document.getElementById('bemdic-pdf-manual-toggle').addEventListener('click', function() {
    var sec = document.getElementById('bemdic-pdf-manual-section');
    if (sec.style.display === 'none') { sec.style.display = 'block'; this.textContent = 'Hide manual payment'; }
    else { sec.style.display = 'none'; this.textContent = 'Having trouble with online payment? Pay manually here (' + _pw("trouble") + ')'; }
  });

  // Pay button
  var payBtn = document.getElementById('bemdic-pdf-pay-btn');
  var statusEl = document.getElementById('bemdic-pdf-status');
  if (payBtn) payBtn.addEventListener('click', function() {
    var phone = document.getElementById('bemdic-pdf-phone').value.trim();
    var _digits = phone.replace(/\D/g, '');
    if (_digits.startsWith('260')) _digits = '0' + _digits.slice(3);
    if (_digits.length === 9 && /^[79]/.test(_digits)) _digits = '0' + _digits;
    if (!_digits || !/^0(75|76|77|95|96|97)\d{7}$/.test(_digits)) {
      statusEl.style.color = 'crimson';
      statusEl.textContent = 'Enter a valid MTN, Airtel or Zamtel number (e.g. 0961234567)';
      return;
    }
    payBtn.disabled = true;
    payBtn.textContent = 'Processing...';
    statusEl.style.color = '#555';
    statusEl.textContent = 'Initiating payment...';

    var _api = window._bemdic_apiCall;
    var _did = window._bemdic_getDeviceId;
    if (!_api || !_did) {
      statusEl.style.color = 'crimson';
      statusEl.textContent = 'Payment not available';
      payBtn.disabled = false;
      payBtn.textContent = 'Pay ' + PDF_PRICE + ' Now';
      return;
    }

    _api('/pdf/pay', { phone: phone, device_id: _did() }, function(resp) {
      if (resp.ok) {
        statusEl.style.color = '#2e7d32';
        statusEl.textContent = resp.message || 'Check your phone for a payment prompt!';
        payBtn.textContent = 'Waiting for confirmation...';
        var closeBtn = document.getElementById('bemdic-pdf-close-btn');
        if (closeBtn) { closeBtn.disabled = true; closeBtn.style.opacity = '0.4'; closeBtn.style.cursor = 'not-allowed'; }
        var warnEl = document.createElement('div');
        warnEl.id = 'bemdic-pdf-tx-warning';
        warnEl.style.cssText = 'background:#fff3cd;border:1px solid #ffc107;border-radius:6px;padding:8px 12px;margin-top:10px;font-size:13px;color:#856404;text-align:center;';
        warnEl.innerHTML = '&#9888; <b>Do not close or navigate away from this page</b> while the transaction is in progress.';
        statusEl.insertAdjacentElement('afterend', warnEl);
        if (!document.getElementById('bemdic-spinner-style')) {
          var styleEl = document.createElement('style');
          styleEl.id = 'bemdic-spinner-style';
          styleEl.textContent = '@keyframes bemdic-spin{to{transform:rotate(360deg)}}@keyframes bemdic-pulse{0%,100%{opacity:1}50%{opacity:0.35}}.bemdic-spinner{width:38px;height:38px;border:4px solid #c8e6c9;border-top-color:#2e7d32;border-radius:50%;animation:bemdic-spin 0.85s linear infinite;margin:0 auto 10px;}';
          document.head.appendChild(styleEl);
        }
        var animEl = document.createElement('div');
        animEl.id = 'bemdic-pdf-tx-anim';
        animEl.style.cssText = 'margin-top:12px;text-align:center;padding:14px 8px;background:#f9fbe7;border-radius:8px;border:1px solid #dcedc8;';
        animEl.innerHTML = '<div class="bemdic-spinner"></div>'
          + '<div id="bemdic-pdf-countdown" style="font-size:30px;font-weight:bold;color:#2e7d32;line-height:1.1;letter-spacing:1px;">2:00</div>'
          + '<div style="font-size:11px;color:#888;margin-bottom:8px;">time remaining</div>'
          + '<div id="bemdic-pdf-tip" style="font-size:12px;color:#555;font-style:italic;min-height:16px;animation:bemdic-pulse 2.5s ease-in-out infinite;"></div>';
        warnEl.insertAdjacentElement('afterend', animEl);
        var txTips = [
          'Check your phone for a payment prompt…',
          'Accept the payment request on your phone.',
          'Ensure your mobile money account has enough balance.',
          'Keep this page open — we’re confirming your payment.',
          'Checking with your mobile money provider…',
          'Almost there, hang tight!'
        ];
        var txTipIdx = 0;
        var tipEl = document.getElementById('bemdic-pdf-tip');
        if (tipEl) tipEl.textContent = txTips[0];
        var txSecsLeft = 120;
        var countdownInterval = setInterval(function() {
          txSecsLeft--;
          var cdEl = document.getElementById('bemdic-pdf-countdown');
          if (cdEl) { var m = Math.floor(txSecsLeft / 60); var s = txSecsLeft % 60; cdEl.textContent = m + ':' + (s < 10 ? '0' : '') + s; }
          if (txSecsLeft % 10 === 0) { txTipIdx = (txTipIdx + 1) % txTips.length; if (tipEl) tipEl.textContent = txTips[txTipIdx]; }
          if (txSecsLeft <= 0) clearInterval(countdownInterval);
        }, 1000);
        function clearTxUI() {
          clearInterval(countdownInterval);
          var w = document.getElementById('bemdic-pdf-tx-warning'); if (w) w.parentNode.removeChild(w);
          var a = document.getElementById('bemdic-pdf-tx-anim'); if (a) a.parentNode.removeChild(a);
        }
        var txRef = resp.tx_ref;
        var pollCount = 0;
        var _pdfDone = false;
        var pollInterval = setInterval(function() {
          pollCount++;
          _api('/subscribe/verify', { tx_ref: txRef, device_id: _did() }, function(vResp) {
            if (vResp.ok && vResp.status === 'successful') {
              if (_pdfDone) return;
              _pdfDone = true;
              clearInterval(pollInterval);
              clearTxUI();
              grantPdfAccess();
              statusEl.style.color = '#2e7d32';
              statusEl.innerHTML = '<b>Payment successful!</b> Your eBook is ready!';
              payBtn.style.display = 'none';
              var dlBtn = document.createElement('a');
              dlBtn.href = 'https://bemdicpdf.pages.dev/?d=true';
              dlBtn.target = '_blank';
              dlBtn.rel = 'noopener';
              dlBtn.textContent = '📥 Go to download page';
              dlBtn.style.cssText = 'display:inline-block;margin-top:12px;padding:12px 28px;background:#2e7d32;color:#fff;border-radius:8px;font-size:15px;font-weight:bold;text-decoration:none;';
              statusEl.insertAdjacentElement('afterend', dlBtn);
              var closeBtn4 = document.getElementById('bemdic-pdf-close-btn');
              if (closeBtn4) { closeBtn4.disabled = false; closeBtn4.style.opacity = ''; closeBtn4.style.cursor = ''; closeBtn4.textContent = 'Close'; }
            } else if (vResp.ok && vResp.status === 'failed') {
              clearInterval(pollInterval);
              clearTxUI();
              var closeBtn2 = document.getElementById('bemdic-pdf-close-btn');
              if (closeBtn2) { closeBtn2.disabled = false; closeBtn2.style.opacity = ''; closeBtn2.style.cursor = ''; }
              statusEl.style.color = 'crimson';
              statusEl.textContent = vResp.reason ? 'Payment failed: ' + vResp.reason : 'Payment failed. Please try again.';
              payBtn.disabled = false;
              payBtn.textContent = 'Pay ' + PDF_PRICE + ' Now';
            }
          });
          if (pollCount > 24) {
            clearInterval(pollInterval);
            clearTxUI();
            var closeBtn3 = document.getElementById('bemdic-pdf-close-btn');
            if (closeBtn3) { closeBtn3.disabled = false; closeBtn3.style.opacity = ''; closeBtn3.style.cursor = ''; }
            statusEl.style.color = '#e65100';
            statusEl.textContent = 'Payment timed out. If you paid, contact ' + PAYMENT_NUMBER;
            payBtn.disabled = false;
            payBtn.textContent = 'Try Again';
          }
        }, 5000);
      } else {
        statusEl.style.color = 'crimson';
        statusEl.textContent = resp.error || 'Payment failed. Try again.';
        payBtn.disabled = false;
        payBtn.textContent = 'Pay ' + PDF_PRICE + ' Now';
      }
    });
  });

  // Close button
  document.getElementById('bemdic-pdf-close-btn').addEventListener('click', function() {
    window._popModal(); closePaywall();
  });
}

window._bemdic_showPdfPaywall = showPdfPaywall;
window._bemdic_hasPdfAccess = hasPdfAccess;

// --- UPDATE FREE BAR IN REAL TIME ---
function updateFreeBar(){
  var bar = document.getElementById('bemdic-free-bar');
  if(!bar) return;
  var u = resetIfNewDay(getUsage());
  var wLeft = Math.max(0, FREE_WORD_LIMIT - u.words);
  var qLeft = Math.max(0, FREE_QUIZ_LIMIT - u.quizzes);
  var cLeft = Math.max(0, FREE_AI_CHAT_LIMIT - (u.chat || 0));
  var upgradeBtn = document.getElementById('bemdic-upgrade-bar');
  var upgradeBtnHTML = upgradeBtn ? upgradeBtn.outerHTML : '';
  bar.innerHTML = 'Free: <b>'+wLeft+'</b> words & <b>'+qLeft+'</b> quiz left '+upgradeBtnHTML;
  var newBtn = document.getElementById('bemdic-upgrade-bar');
  if(newBtn) newBtn.addEventListener('click', function(){ showPaywall('words'); });
}

// --- REFRESH UI AFTER SETTINGS FETCH ---
function refreshSettingsUI() {
  // Update free bar
  updateFreeBar();
  if (window._bemdic_updateTutorChatCounter) window._bemdic_updateTutorChatCounter();
  // Update "Get Unlimited" upgrade button on free bar
  var upgradeBar = document.getElementById('bemdic-upgrade-bar');
  if (upgradeBar) upgradeBar.textContent = 'Get Unlimited - ' + PAYMENT_AMOUNT;
  // Update More menu subscription link
  var moreLinks = document.getElementById('more-links-wrapper');
  if (moreLinks) {
    var items = moreLinks.querySelectorAll('li');
    for (var i = 0; i < items.length; i++) {
      if (items[i].textContent.indexOf('Get Unlimited') > -1) {
        items[i].innerHTML = '<span>&#11088;</span> Get Unlimited access (' + PAYMENT_AMOUNT + ' for ' + SUB_DAYS + ' days)';
        break;
      }
    }
  }
  // Update limit button if shown
  var limitBtn = document.getElementById('bemdic-limit-btn');
  if (limitBtn) limitBtn.textContent = 'Get Unlimited - ' + PAYMENT_AMOUNT + ' for ' + SUB_DAYS + ' days';
  // Update loading_data message if over limit
  var loadingEl = document.getElementById('loading_data');
  if (loadingEl && loadingEl.querySelector('#bemdic-limit-btn')) {
    var msgP = loadingEl.querySelector('p');
    if (msgP) msgP.innerHTML = 'You\'ve used all <b>' + FREE_WORD_LIMIT + '</b> free translations for today.';
  }
  // Refresh translate char counter with updated limit
  var tlCharCounter = document.getElementById('tl-char-counter');
  if (tlCharCounter && tlCharCounter.style.display !== 'none') {
    var u = resetIfNewDay(getUsage());
    var rem = Math.max(0, FREE_TRANSLATE_CHAR_LIMIT - (u.translate_chars || 0));
    tlCharCounter.textContent = rem + ' / ' + FREE_TRANSLATE_CHAR_LIMIT + ' chars remaining today';
    tlCharCounter.style.color = rem <= 0 ? '#ea4335' : rem <= 20 ? '#fbbc04' : '#80868b';
  }
}

// --- INTERCEPT WORD VIEWS ---
var _original_load_dictionary = window.load_dictionary;
window.load_dictionary = function(){
  if(!isSubscribed()){
    var count = incrementWords();
    updateFreeBar();
    if(count > FREE_WORD_LIMIT){
      showPaywall('words');
      return;
    }
  }
  _original_load_dictionary();
};

// Intercept search suggestion clicks
var searchSuggestions = document.getElementById('search-suggesstions');
if(searchSuggestions){
  searchSuggestions.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if(!isSubscribed()){
        var count = incrementWords();
        updateFreeBar();
        if(count > FREE_WORD_LIMIT){
          e.stopImmediatePropagation();
          e.preventDefault();
          showPaywall('words');
          return false;
        }
      }
    }
  }, true);
}

// --- INTERCEPT QUIZ START ---
var quizStartBtns = document.querySelectorAll('#start-quiz');
for(var q = 0; q < quizStartBtns.length; q++){
  (function(btn){
    var originalOnclick = btn.getAttribute('onclick');
    if(originalOnclick && originalOnclick.indexOf('load_question') > -1 && originalOnclick.indexOf('location.assign') === -1){
      btn.removeAttribute('onclick');
      btn.addEventListener('click', function(){
        if(!isSubscribed()){
          var count = incrementQuizzes();
          updateFreeBar();
          if(count > FREE_QUIZ_LIMIT){
            showPaywall('quizzes');
            return;
          }
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window._quizTimerInterval) { clearInterval(window._quizTimerInterval); window._quizTimerInterval = null; }
        var _cleanOpts = document.querySelectorAll('.quiz-option');
        for (var ci = 0; ci < _cleanOpts.length; ci++) {
          if (_cleanOpts[ci].parentNode) _cleanOpts[ci].parentNode.replaceChild(_cleanOpts[ci].cloneNode(true), _cleanOpts[ci]);
        }
        eval(originalOnclick);
      });
    }
  })(quizStartBtns[q]);
}

// --- TRANSLATE CHARACTER LIMIT ENFORCEMENT ---
(function(){
  var tlInput = document.getElementById('tl-input');
  var tlCharCounter = document.getElementById('tl-char-counter');
  var tlResultEl = document.getElementById('tl-result');
  var tlSwapBtn = document.getElementById('tl-swap-btn');
  if (!tlInput) return;

  if (isSubscribed()) {
    tlInput.maxLength = 1500;
    if (tlCharCounter) tlCharCounter.style.display = 'none';
    return;
  }

  // Free user: unlimited input length, enforced by daily char quota
  tlInput.maxLength = 1500;
  if (tlCharCounter) tlCharCounter.style.display = '';

  function getRemaining() {
    var u = resetIfNewDay(getUsage());
    return Math.max(0, FREE_TRANSLATE_CHAR_LIMIT - (u.translate_chars || 0));
  }

  function addChars(n) {
    var u = resetIfNewDay(getUsage());
    u.translate_chars = (u.translate_chars || 0) + n;
    saveUsage(u);
    return u.translate_chars;
  }

  function refreshCounter() {
    if (!tlCharCounter) return;
    var rem = getRemaining();
    tlCharCounter.textContent = rem + ' / ' + FREE_TRANSLATE_CHAR_LIMIT + ' chars remaining today';
    tlCharCounter.style.color = rem <= 0 ? '#ea4335' : rem <= 20 ? '#fbbc04' : '#80868b';
  }

  refreshCounter();

  var _pendingChars = 0;
  var _lastDeductedLen = 0;

  // Capture-phase listener fires before the translate IIFE's bubble listener
  tlInput.addEventListener('input', function(e) {
    var q = this.value.trim();
    if (q === '') _lastDeductedLen = 0; // reset baseline when textarea is cleared
    refreshCounter();
    if (getRemaining() <= 0) {
      e.stopImmediatePropagation();
      showPaywall('translate');
    } else {
      _pendingChars = q.length;
    }
  }, true);

  // Also block direction-swap buttons when limit reached
  function checkSwap(e) {
    if (getRemaining() <= 0) {
      e.stopImmediatePropagation();
      showPaywall('translate');
    } else {
      _pendingChars = tlInput.value.trim().length;
    }
  }
  if (tlSwapBtn) tlSwapBtn.addEventListener('click', checkSwap, true);

  // Block translate button and textarea focus/click when limit is reached
  var tlGoBtn = document.getElementById('tl-go-btn');
  function checkLimitGate(e) {
    if (getRemaining() <= 0) {
      e.stopImmediatePropagation();
      showPaywall('translate');
    }
  }
  if (tlGoBtn) tlGoBtn.addEventListener('click', checkLimitGate, true);
  tlInput.addEventListener('click', checkLimitGate, true);
  tlInput.addEventListener('focus', checkLimitGate, true);

  // Deduct chars when a translation result appears
  if (tlResultEl) {
    new MutationObserver(function() {
      var text = tlResultEl.textContent || '';
      if (!text || text === 'Translating\u2026' || !_pendingChars) return;
      var delta = _pendingChars - _lastDeductedLen;
      _pendingChars = 0;
      if (delta <= 0) return; // no new chars since last deduction
      _lastDeductedLen += delta;
      addChars(delta);
      refreshCounter();
      if (getRemaining() <= 0) showPaywall('translate');
    }).observe(tlResultEl, { childList: true, characterData: true, subtree: true });
  }
})();

// --- SHOW SUBSCRIPTION STATUS IN "MORE" MENU ---
var moreLinks = document.getElementById('more-links-wrapper');
if(moreLinks){
  var subItem = document.createElement('li');
  if(isSubscribed()){
    var daysLeft = getSubDaysLeft();
    var daysText = daysLeft === 1 ? 'day' : 'days';
    subItem.innerHTML = '<span>&#11088;</span> Premium <span style="background:#084;color:#fff;padding:2px 8px;border-radius:10px;font-size:12px;margin-left:4px;">' + daysLeft + ' ' + daysText + ' left</span>';
    subItem.style.color = '#084';
    subItem.style.fontWeight = 'bold';
  } else {
    subItem.innerHTML = '<span>&#11088;</span> Get Unlimited access ('+PAYMENT_AMOUNT+' for '+SUB_DAYS+' days)';
    subItem.style.color = 'aqua';
    subItem.style.cursor = 'pointer';
    subItem.addEventListener('click', function(){
      showPaywall('words');
    });
  }
  moreLinks.insertBefore(subItem, moreLinks.firstChild);
}

// --- ON LOAD: if already over limit, hide content and show paywall immediately ---
if(!isSubscribed()){
  var currentUsage = resetIfNewDay(getUsage());
  if(currentUsage.words >= FREE_WORD_LIMIT){
    // hide the word content that loaded before api.js
    var appendList = document.getElementById('append_list');
    if(appendList) appendList.innerHTML = '';
    // replace loading text with upgrade prompt
    var loadingEl = document.getElementById('loading_data');
    if(loadingEl){
      loadingEl.innerHTML = '<div style="text-align:center;padding:30px 15px;">'
        + '<p style="font-size:16px;color:#555;margin:0 0 8px;">You\'ve used all <b>'+FREE_WORD_LIMIT+'</b> free translations for today.</p>'
        + '<p style="font-size:13px;color:#888;margin:0 0 14px;">Subscribe for unlimited access to all words and quizzes.</p>'
        + '<button id="bemdic-limit-btn" style="padding:10px 22px;border:none;border-radius:8px;font-size:15px;cursor:pointer;background:#2e7d32;color:#fff;">Get Unlimited - '+PAYMENT_AMOUNT+' for '+SUB_DAYS+' days</button>'
        + '</div>';
      document.getElementById('bemdic-limit-btn').addEventListener('click', function(){ showPaywall('words'); });
    }
  }
}

// --- SHOW REMAINING FREE USES (for free users) ---
if(!isSubscribed()){
  var usage = resetIfNewDay(getUsage());
  var wordsLeft = Math.max(0, FREE_WORD_LIMIT - usage.words);
  var quizzesLeft = Math.max(0, FREE_QUIZ_LIMIT - usage.quizzes);

  var freeBar = document.createElement('div');
  freeBar.id = 'bemdic-free-bar';
  freeBar.style.cssText = 'background:#fff3e0;color:#e65100;text-align:left;padding:6px 10px;font-size:13px;position:sticky;top:0;z-index:9999;border-bottom:1px solid #ffcc80;';
  freeBar.innerHTML = 'Free: <b>'+wordsLeft+'</b> words & <b>'+quizzesLeft+'</b> quiz left <span style="cursor:pointer;  font-siz:12px; background:#058; color: white; padding:5px; border-radius:4px;  border:1px solid white;" id="bemdic-upgrade-bar">Get Unlimited - '+PAYMENT_AMOUNT+'</span>';

  document.body.insertBefore(freeBar, document.body.firstChild);

  document.getElementById('bemdic-upgrade-bar').addEventListener('click', function(){
    showPaywall('words');
  });
}

// --- PENDING CHALLENGE POPUP (shows once per session if there's an unread challenge) ---
function checkPendingChallengePopup() {
  if (sessionStorage.getItem('_bemdic_ch_popup_shown')) return;
  var ud = null; try { ud = JSON.parse(localStorage.getItem('bemdic_user_data')); } catch(e) {}
  if (!ud) return;
  apiCall('/notifications/poll', { device_id: getDeviceId(), offset: 0 }, function(resp) {
    if (!resp.ok) return;
    var notifs = resp.notifications || [];
    var pending = null;
    for (var i = 0; i < notifs.length; i++) {
      if (notifs[i].type === 'challenge_received' && notifs[i].read === 0) {
        pending = notifs[i];
        break;
      }
    }
    if (!pending) return;
    var data;
    try { data = typeof pending.data === 'string' ? JSON.parse(pending.data) : pending.data; } catch(e) { return; }
    if (!data.challenge_id) return;
    // Check if challenge already completed before showing popup
    apiCall('/challenge/detail', { device_id: getDeviceId(), challenge_id: data.challenge_id }, function(det) {
      if (!det.ok) return;
      var ch = det.challenge;
      // Already played or completed — skip popup, keep notifications visible
      if (ch.status === 'completed' || ch.receiver_score !== null) return;
      sessionStorage.setItem('_bemdic_ch_popup_shown', '1');
      showPendingChallengeOverlay(data);
    });
  });
}
function showPendingChallengeOverlay(data) {
    var overlay = document.createElement('div');
    overlay.className = 'name-modal-overlay';
    overlay.id = 'pending-ch-overlay';
    overlay.style.cssText = 'z-index:99999;background:rgba(0,0,0,0.65);';
    overlay.innerHTML = '<div class="name-modal" style="max-width:330px;text-align:center;padding:28px 20px;border-radius:16px;">'
      + '<div style="font-size:34px;margin-bottom:4px;">🎯</div>'
      + '<h3 style="margin:0 0 4px;font-size:19px;color:#202124;">Quiz Challenge!</h3>'
      + '<div style="font-size:12px;color:#80868b;margin-bottom:14px;">Someone wants to test your ' + LANG_NAME + ' knowledge!</div>'
      + '<div style="margin:8px 0 4px;">' + profilePicHtml(data.from_picture || '', 56, true) + '</div>'
      + '<div style="font-size:16px;font-weight:700;color:#202124;margin-top:6px;">' + escapeHtml(data.from_name || 'Someone') + '</div>'
      + '<div style="font-size:13px;color:#5f6368;margin:5px 0 2px;">scored <b style="color:#1a73e8;">' + (data.sender_score || 0) + '</b>/10 on a ' + LANG_NAME + ' quiz</div>'
      + '<div style="font-size:13px;color:#5f6368;margin-bottom:12px;">Answer 10 questions — beat their score to win points! 🏆</div>'
      + (!(data.is_system || data.from_name === 'BemDic') && data.message ? '<div style="font-size:13px;color:#80868b;font-style:italic;background:#f8f9fa;border-radius:8px;padding:8px;margin-bottom:12px;">"' + escapeHtml(data.message) + '"</div>' : '')
      + '<button id="pch-accept" style="width:100%;padding:14px;background:#2e7d32;color:#fff;border:none;border-radius:10px;font-size:16px;font-weight:700;cursor:pointer;margin-bottom:10px;">▶ Play the Quiz Now!</button>'
      + '<button id="pch-later" style="width:100%;padding:10px;background:none;border:1px solid #dadce0;border-radius:10px;font-size:14px;color:#5f6368;cursor:pointer;">Not now — Remind me later</button>'
      + '</div>';
    document.body.appendChild(overlay);
    document.getElementById('pch-accept').addEventListener('click', function() {
      document.body.removeChild(overlay);
      openReceivedChallenge(data.challenge_id);
    });
    document.getElementById('pch-later').addEventListener('click', function() {
      document.body.removeChild(overlay);
    });
}
setTimeout(checkPendingChallengePopup, 1500);

// --- STORE CONFIG IN LOCALSTORAGE for persistence ---
// The offline block further down runs off this snapshot, so it has to be
// rewritten whenever the admin's settings arrive — otherwise the first visit
// freezes the hardcoded defaults in place and a limit changed in the admin
// panel is ignored until the next reload. _persistConfig is called again from
// the settings fetch for exactly that reason.
function _persistConfig() {
  try {
    localStorage.setItem('bemdic_config', JSON.stringify({
      secret: SUB_SECRET,
      wordLimit: FREE_WORD_LIMIT,
      quizLimit: FREE_QUIZ_LIMIT,
      subDays: SUB_DAYS,
      paymentNumber: PAYMENT_NUMBER,
      paymentAmount: PAYMENT_AMOUNT
    }));
  } catch (e) {}
}
window._bemdic_persistConfig = _persistConfig;
_persistConfig();

})();


// ============================================
// OFFLINE STORAGE: Store subscription logic for offline use
// ============================================
// This runs even when the IIFE above is commented out,
// but only stores meaningful code when it's uncommented.

var _bemdic_offline_sub = function() {
  if (window.__bemdic_api_loaded) return;
  // Synchronously patch _initDictionary and __bemdic_dict_ready to clear the suggestion
  // list before appending — prevents duplicates when both _applyDict and dict.js fire.
  (function() {
    function _mkClearFirst(fn) {
      if (!fn || fn._deduped) return fn;
      var _w = function() {
        var sl = document.getElementById('search-suggesstions');
        if (sl) {
          var its = sl.querySelectorAll('li:not(#bemdic-gt-fallback):not(#bemdic-gt-dir)');
          for (var i = 0; i < its.length; i++) its[i].parentNode.removeChild(its[i]);
        }
        return fn.apply(this, arguments);
      };
      _w._deduped = true; return _w;
    }
    if (typeof window._initDictionary === 'function')
      window._initDictionary = _mkClearFirst(window._initDictionary);
    if (typeof window.__bemdic_dict_ready === 'function')
      window.__bemdic_dict_ready = _mkClearFirst(window.__bemdic_dict_ready);
  })();


  // Replace asset dictionary with the latest online version (IDB primary, localStorage fallback)
  (function() {
    function _applyDict(json) {
      try {
        var _cached = JSON.parse(json);
        if (!_cached || typeof _cached !== 'object' || !Object.keys(_cached).length) return;
        // Replace dictionary object and rebuild derived arrays from scratch
        window.dictionary = _cached;
        window.array = [];
        window.search_array = [];
        window.search_dic = {};
        window.english_bemba_array = [];
        var sugg = document.getElementById('search-suggesstions');
        // Preserve the offline search fallback item before wiping the list
        var _gtFallback = sugg ? document.getElementById('bemdic-gt-fallback') : null;
        if (sugg) sugg.innerHTML = '';
        if (typeof _initDictionary === 'function') _initDictionary();
        // Re-attach it after _initDictionary() rebuilds the list
        if (_gtFallback && sugg) sugg.appendChild(_gtFallback);
      } catch(x) {}
    }
    function _tryLocalStorage() {
      var ls = localStorage.getItem('bemdic_dict_obj');
      if (ls) _applyDict(ls);
    }
    try {
      var _idbReq = indexedDB.open('bemdic_store', 1);
      _idbReq.onupgradeneeded = function(e) { try { e.target.result.createObjectStore('assets'); } catch(x) {} };
      _idbReq.onsuccess = function(e) {
        try {
          var _get = e.target.result.transaction('assets', 'readonly').objectStore('assets').get('dict_obj');
          _get.onsuccess = function(ge) {
            if (ge.target.result) _applyDict(ge.target.result);
            else _tryLocalStorage();
          };
          _get.onerror = function() { _tryLocalStorage(); };
        } catch(x) { _tryLocalStorage(); }
      };
      _idbReq.onerror = function() { _tryLocalStorage(); };
    } catch(e) { _tryLocalStorage(); }
  })();

  var raw = localStorage.getItem('bemdic_config');
  if (!raw) return;
  var cfg;
  try { cfg = JSON.parse(raw); } catch(e) { return; }

  var SUB_SECRET = cfg.secret;
  var FREE_WORD_LIMIT = cfg.wordLimit;
  var FREE_QUIZ_LIMIT = cfg.quizLimit;
  var SUB_DAYS = cfg.subDays;
  var PAYMENT_NUMBER = cfg.paymentNumber;
  var PAYMENT_AMOUNT = cfg.paymentAmount;

  function getToday() {
    return new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD in local timezone
  }

  function daysSinceEpoch(date) {
    if (!date) date = new Date();
    return Math.floor(date.getTime() / 86400000);
  }

  function generateChecksum(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum = ((sum << 5) - sum + str.charCodeAt(i)) & 0xFFFF;
    }
    var hex = sum.toString(16).toUpperCase();
    while (hex.length < 4) hex = '0' + hex;
    return hex;
  }

  function validateCode(code) {
    code = code.replace(/[\s\-]/g, '').toUpperCase();
    if (code.length < 6) return false;
    var payload = code.substring(0, code.length - 4);
    var checksum = code.substring(code.length - 4);
    if (generateChecksum(payload) !== checksum) return false;
    var encoded = parseInt(payload, 16);
    if (isNaN(encoded)) return false;
    var expiryDay = encoded ^ SUB_SECRET;
    var today = daysSinceEpoch();
    if (expiryDay > today) return expiryDay;
    return false;
  }

  function getUsage() {
    var r = localStorage.getItem('bemdic_usage');
    if (r) { try { return JSON.parse(r); } catch(e) {} }
    return { date: getToday(), words: 0, quizzes: 0 };
  }

  function saveUsage(usage) {
    localStorage.setItem('bemdic_usage', JSON.stringify(usage));
  }

  function resetIfNewDay(usage) {
    if (usage.date !== getToday()) {
      usage.date = getToday();
      if ((usage.words || 0) >= (FREE_WORD_LIMIT || 10)) usage.words = 0;
      if ((usage.quizzes || 0) >= (FREE_QUIZ_LIMIT || 2)) usage.quizzes = 0;
      if ((usage.chat || 0) >= 5) usage.chat = 0;
      if ((usage.translate_chars || 0) >= 100) usage.translate_chars = 0;
    }
    return usage;
  }

  function incrementWords() {
    var usage = resetIfNewDay(getUsage());
    usage.words++;
    saveUsage(usage);
    return usage.words;
  }

  function incrementQuizzes() {
    var usage = resetIfNewDay(getUsage());
    usage.quizzes++;
    saveUsage(usage);
    return usage.quizzes;
  }

  function getSubscription() {
    var r = localStorage.getItem('bemdic_sub');
    if (r) { try { return JSON.parse(r); } catch(e) {} }
    return null;
  }

  function isSubscribed() {
    var sub = getSubscription();
    if (!sub) return false;
    return sub.expiryDay > daysSinceEpoch();
  }

  function getSubDaysLeft() {
    var sub = getSubscription();
    if (!sub) return 0;
    var left = sub.expiryDay - daysSinceEpoch();
    return left > 0 ? left : 0;
  }

  function activateSubscription(code) {
    var expiryDay = validateCode(code);
    if (expiryDay) {
      localStorage.setItem('bemdic_sub', JSON.stringify({
        code: code.replace(/[\s\-]/g, '').toUpperCase(),
        expiryDay: expiryDay,
        activatedOn: getToday()
      }));
      return true;
    }
    return false;
  }

  function showPaywall(reason) {
    if (document.getElementById('bemdic-paywall')) return;

    var reasonText = '';
    if (reason === 'words') {
      var u = resetIfNewDay(getUsage());
      if (u.words >= FREE_WORD_LIMIT) reasonText = 'You have used up your <b>' + FREE_WORD_LIMIT + ' free word translations</b>. Come back tomorrow or subscribe for unlimited access.';
    } else if (reason === 'quizzes') {
      var u = resetIfNewDay(getUsage());
      if (u.quizzes >= FREE_QUIZ_LIMIT) reasonText = 'You have used up your <b>' + FREE_QUIZ_LIMIT + ' free quiz session</b>. Come back tomorrow or subscribe for unlimited access.';
    }

    var modalHTML = localStorage.getItem('subscription_modal');
    if (!modalHTML) return;

    var modal = document.createElement('div');
    modal.id = 'bemdic-paywall';
    modal.innerHTML = modalHTML;
    document.body.appendChild(modal);

    var reasonEl = document.getElementById('bemdic-pw-reason');
    if (reasonEl) reasonEl.innerHTML = reasonText;

    document.getElementById('bemdic-activate-btn').addEventListener('click', function() {
      var code = document.getElementById('bemdic-sub-code').value.trim();
      var errEl = document.getElementById('bemdic-pw-error');
      if (!code) { errEl.textContent = 'Please enter your subscription code'; return; }
      if (activateSubscription(code)) {
        errEl.style.color = '#084';
        errEl.textContent = 'Activated! Enjoy ' + getSubDaysLeft() + ' days of unlimited access!';
        setTimeout(function() {
          document.body.removeChild(modal);
          var freeBar = document.getElementById('bemdic-free-bar');
          if (freeBar) freeBar.parentNode.removeChild(freeBar);
          var wl = document.getElementById('words-loader');
          var pb = document.getElementById('pagination-btns-wrapper');
          if (wl) wl.style.display = 'block';
          if (pb) pb.style.display = 'block';
          if (typeof window.load_dictionary === 'function') window.load_dictionary();
        }, 1500);
      } else {
        errEl.style.color = 'crimson';
        errEl.textContent = 'Invalid or expired code. Please check and try again.';
      }
    });

    document.getElementById('bemdic-close-btn').addEventListener('click', function() {
      document.body.removeChild(modal);
    });

  }

  function updateFreeBar() {
    var bar = document.getElementById('bemdic-free-bar');
    if (!bar) return;
    var u = resetIfNewDay(getUsage());
    var wLeft = Math.max(0, FREE_WORD_LIMIT - u.words);
    var qLeft = Math.max(0, FREE_QUIZ_LIMIT - u.quizzes);
    var upgradeBtn = document.getElementById('bemdic-upgrade-bar');
    var upgradeBtnHTML = upgradeBtn ? upgradeBtn.outerHTML : '';
    bar.innerHTML = 'Free: <b>' + wLeft + '</b> words & <b>' + qLeft + '</b> quiz left ' + upgradeBtnHTML;
    var newBtn = document.getElementById('bemdic-upgrade-bar');
    if (newBtn) newBtn.addEventListener('click', function() { showPaywall('words'); });
  }

  // Intercept word views
  var _orig_load = window.load_dictionary;
  if (typeof _orig_load === 'function') {
    window.load_dictionary = function() {
      if (!isSubscribed()) {
        var count = incrementWords();
        updateFreeBar();
        if (count > FREE_WORD_LIMIT) { showPaywall('words'); return; }
      }
      _orig_load();
    };
  }

  // Intercept search suggestion clicks
  var searchSugg = document.getElementById('search-suggesstions');
  if (searchSugg) {
    searchSugg.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        if (!isSubscribed()) {
          var count = incrementWords();
          updateFreeBar();
          if (count > FREE_WORD_LIMIT) {
            e.stopImmediatePropagation();
            e.preventDefault();
            showPaywall('words');
            return false;
          }
        }
      }
    }, true);
  }

  // Intercept quiz start
  var quizBtns = document.querySelectorAll('#start-quiz');
  for (var q = 0; q < quizBtns.length; q++) {
    (function(btn) {
      var origClick = btn.getAttribute('onclick');
      if (origClick && origClick.indexOf('load_question') > -1 && origClick.indexOf('location.assign') === -1) {
        btn.removeAttribute('onclick');
        btn.addEventListener('click', function() {
          if (!isSubscribed()) {
            var count = incrementQuizzes();
            updateFreeBar();
            if (count > FREE_QUIZ_LIMIT) { showPaywall('quizzes'); return; }
          }
          eval(origClick);
        });
      }
    })(quizBtns[q]);
  }

  // Show subscription status in More menu
  var moreLinks = document.getElementById('more-links-wrapper');
  if (moreLinks) {
    var subItem = document.createElement('li');
    if (isSubscribed()) {
      var daysLeft = getSubDaysLeft();
      var daysText = daysLeft === 1 ? 'day' : 'days';
      subItem.innerHTML = '<span>&#11088;</span> Premium <span style="background:#084;color:#fff;padding:2px 8px;border-radius:10px;font-size:12px;margin-left:4px;">' + daysLeft + ' ' + daysText + ' left</span>';
      subItem.style.color = '#084';
      subItem.style.fontWeight = 'bold';
    } else {
      subItem.innerHTML = '<span>&#11088;</span> Get Unlimited access (' + PAYMENT_AMOUNT + ' for '+SUB_DAYS+' days)';
      subItem.style.color = 'aqua';
      subItem.style.cursor = 'pointer';
      subItem.addEventListener('click', function() { showPaywall('words'); });
    }
    moreLinks.insertBefore(subItem, moreLinks.firstChild);
  }

  // On load: if over limit, show paywall
  if (!isSubscribed()) {
    var currentUsage = resetIfNewDay(getUsage());
    if (currentUsage.words >= FREE_WORD_LIMIT) {
      var appendList = document.getElementById('append_list');
      if (appendList) appendList.innerHTML = '';
      showPaywall('words');
    }
  }

  // Show remaining free uses
  if (!isSubscribed()) {
    var usage = resetIfNewDay(getUsage());
    var wordsLeft = Math.max(0, FREE_WORD_LIMIT - usage.words);
    var quizzesLeft = Math.max(0, FREE_QUIZ_LIMIT - usage.quizzes);
    var freeBar = document.createElement('div');
    freeBar.id = 'bemdic-free-bar';
    freeBar.style.cssText = 'background:#fff3e0;color:#e65100;text-align:left;padding:6px 10px;font-size:13px;position:sticky;top:0;z-index:9999;border-bottom:1px solid #ffcc80;';
    freeBar.innerHTML = 'Free: <b>' + wordsLeft + '</b> words & <b>' + quizzesLeft + '</b> quiz left <span style="cursor:pointer;font-size:12px;background:#058;color:white;padding:5px;border-radius:4px;border:1px solid white;" id="bemdic-upgrade-bar">Get Unlimited - ' + PAYMENT_AMOUNT + '</span>';
    document.body.insertBefore(freeBar, document.body.firstChild);
    document.getElementById('bemdic-upgrade-bar').addEventListener('click', function() { showPaywall('words'); });
  }

  // Offline GT fallback suggestion item — shows toast when clicked (no GT available offline)
  (function() {
    var searchInput = document.getElementById('search');
    var suggList = document.getElementById('search-suggesstions');
    if (!searchInput || !suggList || document.getElementById('bemdic-gt-fallback')) return;
    var gtItem = document.createElement('li');
    gtItem.id = 'bemdic-gt-fallback';
    gtItem.style.cssText = 'color:#1a73e8;font-style:italic;border-top:1px solid #e8e8e8;padding-top:6px;margin-top:4px;';
    gtItem.innerHTML = '🔍 <span id="bemdic-gt-label">Search via Google Translate</span>';
    gtItem.style.display = 'none';
    suggList.appendChild(gtItem);
    gtItem.addEventListener('click', function(e) {
      e.stopImmediatePropagation(); e.preventDefault();
      var word = (searchInput.value || '').trim();
      if (!word) return;
      suggList.style.display = 'none';
      var _ot = document.getElementById('bemdic-offline-toast');
      if (_ot) _ot.remove();
      var _toast = document.createElement('div');
      _toast.id = 'bemdic-offline-toast';
      _toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#c62828;color:#fff;padding:14px 22px;border-radius:12px;font-size:15px;font-weight:600;z-index:99999;text-align:center;max-width:88vw;box-shadow:0 4px 20px rgba(0,0,0,0.45);line-height:1.6;animation:bemdic-shake .4s ease;';
      _toast.innerHTML = '📵 You\'re offline.<br><span style="font-weight:400;font-size:13px;">Turn on data to search for <b>"' + word + '"</b>.</span>';
      document.body.appendChild(_toast);
      setTimeout(function() { if (_toast.parentNode) _toast.remove(); }, 5000);
    });
    searchInput.addEventListener('input', function() {
      setTimeout(function() {
        var val = (searchInput.value || '').trim();
        if (val.length <= 1) { gtItem.style.display = 'none'; return; }
        var allLi = suggList.querySelectorAll('li:not(#bemdic-gt-fallback):not(#bemdic-gt-dir)');
        var anyVisible = false;
        for (var i = 0; i < allLi.length; i++) { if (allLi[i].style.display !== 'none') { anyVisible = true; break; } }
        var label = document.getElementById('bemdic-gt-label');
        if (label) label.textContent = 'Search "' + val + '" online';
        gtItem.style.display = anyVisible ? 'none' : '';
      }, 0);
    });
  })();

  // Hide download latest dictionary link offline
  (function() {
    var _dl = document.querySelector('[onclick*="download_dictionary_url"]');
    if (_dl) _dl.style.display = 'none';
  })();

  // Offline ribbon
  (function() {
    function _showRibbon() {
      if (document.getElementById('bemdic-offline-ribbon')) return;
      var r = document.createElement('div');
      r.id = 'bemdic-offline-ribbon';
      r.style.cssText = 'background:#e53935;color:#fff;text-align:center;padding:5px 10px;font-size:12px;font-weight:600;letter-spacing:0.3px;cursor:pointer;position:sticky;top:0;z-index:99998;transition:opacity .4s,max-height .4s;';
      r.textContent = '📵 You are Offline (limited dictionary)';
      r.addEventListener('click', function() {
        r.style.opacity = '0'; r.style.maxHeight = '0'; r.style.padding = '0'; r.style.overflow = 'hidden';
        setTimeout(function() { if (r.parentNode) r.parentNode.removeChild(r); }, 420);
      });
      document.body.insertBefore(r, document.body.firstChild);
    }
    if (document.body) _showRibbon();
    else document.addEventListener('DOMContentLoaded', _showRibbon);
  })();
};

// Store the offline function as executable code in localStorage
localStorage.setItem('bemdic_offline_js', '(' + _bemdic_offline_sub.toString() + ')()');

// Mark that api.js loaded
window.__bemdic_api_loaded = true;

// Cache the online dictionary object (IDB primary, localStorage fallback).
// No navigator.onLine guard — if api.js loaded from CDN, we are online by definition.
// Waits for dictionary to be loaded and _initDictionary() to have run before caching.
(function() {
  function _saveDictObj() {
    if (typeof window.dictionary === 'undefined') return;
    var keys = Object.keys(window.dictionary);
    if (!keys.length) return;
    try {
      var json = JSON.stringify(window.dictionary);
      var req = indexedDB.open('bemdic_store', 1);
      req.onupgradeneeded = function(e) { try { e.target.result.createObjectStore('assets'); } catch(x) {} };
      req.onsuccess = function(e) {
        try { e.target.result.transaction('assets', 'readwrite').objectStore('assets').put(json, 'dict_obj'); } catch(x) {
          try { localStorage.setItem('bemdic_dict_obj', json); } catch(ls) {}
        }
      };
      req.onerror = function() { try { localStorage.setItem('bemdic_dict_obj', json); } catch(ls) {} };
    } catch(e) {}
  }
  // dictionary is set by the time _initDictionary() runs; hook after it completes
  if (window.dictionary && Object.keys(window.dictionary).length) {
    _saveDictObj();
  } else {
    var _prevReady = window.__bemdic_dict_ready;
    window.__bemdic_dict_ready = function() { if (_prevReady) _prevReady(); _saveDictObj(); };
  }
})();

// Offline ribbon — show when user goes offline, hide when back online
(function() {
  function _showOfflineRibbon() {
    if (document.getElementById('bemdic-offline-ribbon')) return;
    var r = document.createElement('div');
    r.id = 'bemdic-offline-ribbon';
    r.style.cssText = 'background:#e53935;color:#fff;text-align:center;padding:5px 10px;font-size:12px;font-weight:600;letter-spacing:0.3px;cursor:pointer;position:sticky;top:0;z-index:99998;transition:opacity .4s,max-height .4s;';
    r.textContent = '📵 Offline — using cached dictionary';
    r.addEventListener('click', function() {
      r.style.opacity = '0'; r.style.maxHeight = '0'; r.style.padding = '0'; r.style.overflow = 'hidden';
      setTimeout(function() { if (r.parentNode) r.parentNode.removeChild(r); }, 420);
    });
    document.body.insertBefore(r, document.body.firstChild);
  }
  function _hideOfflineRibbon() {
    var r = document.getElementById('bemdic-offline-ribbon');
    if (r) { r.style.opacity = '0'; r.style.maxHeight = '0'; r.style.padding = '0'; r.style.overflow = 'hidden'; setTimeout(function() { if (r.parentNode) r.parentNode.removeChild(r); }, 420); }
  }
  window.addEventListener('offline', _showOfflineRibbon);
  window.addEventListener('online', _hideOfflineRibbon);
  if (!navigator.onLine) {
    if (document.body) _showOfflineRibbon();
    else document.addEventListener('DOMContentLoaded', _showOfflineRibbon);
  }
})();

// Fast search filter — replaces the slow per-keystroke querySelectorAll loop in index.html
(function() {
  var searchEl = document.getElementById('search');
  var suggList = document.getElementById('search-suggesstions');
  if (!searchEl || !suggList) return;

  var _cache = null; // [{el, word}] — built once after dictionary loads
  var _prev = null;  // last filtered value, skip if unchanged

  function _buildCache() {
    var lis = suggList.querySelectorAll('li:not(#bemdic-gt-fallback):not(#bemdic-gt-dir)');
    _cache = [];
    for (var i = 0; i < lis.length; i++) {
      _cache.push({ el: lis[i], word: (lis[i].textContent || '').toLowerCase().trim() });
    }
  }

  searchEl.addEventListener('input', function(e) {
    if (!_cache) return; // cache not ready — let original handler run this time

    var raw = searchEl.value;
    var val = raw.toLowerCase().trim();

    // Intercept and replace the original handler
    e.stopImmediatePropagation();

    if (val.length <= 1) {
      suggList.style.display = 'none';
      var gtItem = document.getElementById('bemdic-gt-fallback');
      var label = document.getElementById('bemdic-gt-label');
      if (label) label.textContent = '';
      if (gtItem) gtItem.style.display = 'none';
      _prev = null;
      return;
    }

    if (val === _prev) return; // nothing changed
    _prev = val;

    suggList.style.display = 'block';

    // Efficient filter — only touch elements whose state actually changes
    var revMatch = window.search_dic && window.search_dic[val];
    var anyVisible = false;
    for (var i = 0; i < _cache.length; i++) {
      var w = _cache[i].word;
      var show = (w.indexOf(val) > -1 && w.charAt(0) === val.charAt(0)) ||
                 (revMatch && w.indexOf(revMatch) > -1 && w.charAt(0) === revMatch.charAt(0));
      var cur = _cache[i].el.style.display;
      if (show) { if (cur === 'none') _cache[i].el.style.display = ''; anyVisible = true; }
      else       { if (cur !== 'none') _cache[i].el.style.display = 'none'; }
    }

    // GT fallback
    var gtLabel = document.getElementById('bemdic-gt-label');
    var gtFallback = document.getElementById('bemdic-gt-fallback');
    if (gtLabel) gtLabel.textContent = raw.trim();
    if (gtFallback) gtFallback.style.display = anyVisible ? 'none' : '';
  }, true); // capture phase — fires before the original bubbling handler

  function _init() {
    setTimeout(_buildCache, 300);
  }

  if (window.__bemdic_dict_loaded) {
    _init();
  } else {
    var _orig = window.__bemdic_dict_ready;
    window.__bemdic_dict_ready = function() {
      if (_orig) _orig();
      _init();
    };
  }
})();

// Re-run filter with trimmed value if raw value has leading/trailing spaces causing no matches
(function() {
  var si = document.getElementById('search');
  var suggList = document.getElementById('search-suggesstions');
  if (!si || !suggList) return;
  si.addEventListener('input', function() {
    setTimeout(function() {
      var raw = si.value;
      var trimmed = raw.trim();
      if (trimmed === raw || trimmed.length <= 1) return;
      // Check if any dictionary LIs are visible with raw value
      var allLi = suggList.querySelectorAll('li:not(#bemdic-gt-fallback):not(#bemdic-gt-dir)');
      var anyVisible = false;
      for (var i = 0; i < allLi.length; i++) {
        if (allLi[i].style.display !== 'none') { anyVisible = true; break; }
      }
      // If nothing visible but trimmed value would match, re-filter with trimmed value
      if (!anyVisible) {
        for (var j = 0; j < allLi.length; j++) {
          var wordVal = (allLi[j].textContent || allLi[j].innerText).toLowerCase();
          if (wordVal.indexOf(trimmed.toLowerCase()) > -1 && wordVal.startsWith(trimmed[0].toLowerCase())) {
            allLi[j].style.display = '';
          }
        }
      }
    }, 10);
  });
})();

// --- GOOGLE TRANSLATE FALLBACK FOR WORDS NOT IN DICTIONARY ---
(function() {
  var searchInput = document.getElementById('search');
  var suggList = document.getElementById('search-suggesstions');
  if (!searchInput || !suggList) return;

  // Create the "not in dictionary" fallback item
  var _gtDir = 'eng-bem'; // default: English → Bemba
  var gtItem = document.createElement('li');
  gtItem.id = 'bemdic-gt-fallback';
  gtItem.style.cssText = 'border-top:1px solid rgba(255, 255, 255, 0.06); padding-top:8px;margin-top:4px;color:lightblue; font-size:16px;';
  gtItem.innerHTML = '<span id="bemdic-gt-label"></span>';
  gtItem.style.display = 'none';
  suggList.appendChild(gtItem);


  // Show GT result in the main #append_list area just like a normal word result
  var _gtLoaderStyle = '<style>'
    + '@keyframes bemdic-spin{to{transform:rotate(360deg)}}'
    + '.bemdic-spinner{display:inline-block;width:12px;height:12px;border:2px solid #e0e0e0;border-top-color:#1a73e8;border-radius:50%;animation:bemdic-spin .7s linear infinite;vertical-align:middle;margin-right:5px;}'
    + '.bemdic-gt-row{margin-top:5px;font-size:13px;color:#5f6368;min-height:18px;}'
    + '</style>';
  var _gtStyleInjected = false;

  function gtInjectStyle() {
    if (_gtStyleInjected) return;
    document.head.insertAdjacentHTML('beforeend', _gtLoaderStyle);
    _gtStyleInjected = true;
  }

  // Persistent direction bar — inserted once before #append_list
  var _gtDirBar = document.getElementById('bemdic-gt-dirbar');
  if (!_gtDirBar) {
    var appendListEl = document.getElementById('append_list');
    if (appendListEl) {
      _gtDirBar = document.createElement('div');
      _gtDirBar.id = 'bemdic-gt-dirbar';
      _gtDirBar.style.cssText = 'display:none;padding:0 0 4px; margin-bottom:6px;';
      _gtDirBar.innerHTML = '<a id="bemdic-res-eng" href="#" style="display:inline-block;font-size:12px;padding:2px 10px;border-radius:10px;text-decoration:none;margin-right:6px;border:1px solid #1a73e8;background:#1a73e8;color:#fff;font-weight:600;">Eng→' + _langAbbr() + '</a>'
        + '<a id="bemdic-res-bem" href="#" style="display:inline-block;font-size:12px;padding:2px 10px;border-radius:10px;text-decoration:none;border:1px solid #1a73e8;background:transparent;color:#1a73e8;">' + _langAbbr() + '→Eng</a>';
      appendListEl.parentNode.insertBefore(_gtDirBar, appendListEl);
      document.getElementById('bemdic-res-eng').addEventListener('click', function(e) {
        e.preventDefault(); if (_gtDir === 'eng-bem') return; _gtDir = 'eng-bem'; _updateDirBar(); _runGTTranslate(_gtCurrentWord);
      });
      document.getElementById('bemdic-res-bem').addEventListener('click', function(e) {
        e.preventDefault(); if (_gtDir === 'bem-eng') return; _gtDir = 'bem-eng'; _updateDirBar(); _runGTTranslate(_gtCurrentWord);
      });
    }
  }
  var _gtCurrentWord = '';

  // Short tag for the direction pills — "Fre", "Zul", "Swa"...
  function _langAbbr() {
    return LANG_NAME.length <= 4 ? LANG_NAME : LANG_NAME.slice(0, 3);
  }
  function _updateDirBar() {
    var ea = _gtDir === 'eng-bem';
    var eng = document.getElementById('bemdic-res-eng');
    var bem = document.getElementById('bemdic-res-bem');
    if (eng) { eng.style.background = ea ? '#1a73e8' : 'transparent'; eng.style.color = ea ? '#fff' : '#1a73e8'; eng.style.fontWeight = ea ? '600' : 'normal'; eng.style.borderColor = '#1a73e8'; }
    if (bem) { bem.style.background = ea ? 'transparent' : '#1a73e8'; bem.style.color = ea ? '#1a73e8' : '#fff'; bem.style.fontWeight = ea ? 'normal' : '600'; bem.style.borderColor = '#1a73e8'; }
  }

  function renderGTResult(word, translation, engEx, bemEx, states) {
    var appendList = document.getElementById('append_list');
    if (!appendList) return;
    states = states || {};
    _gtCurrentWord = word;

    _gtRendering = true;
    if (_gtDirBar) _gtDirBar.style.display = '';
    _updateDirBar();

    var translationHtml = states.translating
      ? '<span class="bemdic-spinner"></span><span style="color:#1a73e8;font-style:italic;">Translating…</span>'
      : '<span class="target_text">' + translation + '</span>';

    var engExHtml = '';
    if (states.loadingEx) {
      engExHtml = '<div class="bemdic-gt-row in_english"><span>English>></span> <span class="bemdic-spinner"></span><span style="font-style:italic;color:#1a73e8;">Generating example…</span></div>';
    } else if (engEx) {
      engExHtml = '<div class="in_english"><span>English>></span> ' + engEx + '</div>';
    }

    var bemExHtml = '';
    if (states.loadingBem) {
      bemExHtml = '<div class="bemdic-gt-row in_target"><span>' + LANG_NAME + '>></span> <span class="bemdic-spinner"></span><span style="font-style:italic;color:#1a73e8;">Translating example…</span></div>';
    } else if (bemEx) {
      bemExHtml = '<div class="in_target"><span>' + LANG_NAME + '>></span> ' + bemEx + '</div>';
    }

    appendList.innerHTML =
      '<li style="list-style-type:none;">'
      + '<span class="english_word">' + word + '</span>'
      + ' : <span class="meaning_in_target">' + translationHtml + '</span>'
      + engExHtml
      + bemExHtml
      + '<span style="margin:4px 6px;background:#fff3e0;color:#e65100;font-size:11px;padding:0 3px;border-radius:5px; border:1px solid #ffcc80;">⚠️Unverified - <span onclick="var _ud=JSON.parse(localStorage.getItem(\'bemdic_user_data\')||\'null\');if((window._bemdic_isSubscribed&&window._bemdic_isSubscribed())||(_ud&&_ud.is_pro)){window.open(\'https://wa.me/260763428450?text=verify%20the%20translation%20of%20: ' + word + '\', \'_blank\')}else{if(window._bemdic_showPaywall)window._bemdic_showPaywall(\'verify\')}" style="color:#028;cursor:pointer; font-weight:bold;">Verify now</span></span>'
      + '</li>';

    appendList.style.listStyleType = 'none';
    setTimeout(function() { _gtRendering = false; }, 0);
    showGTSection();
  }

  // Hide dir bar when non-GT content is set on #append_list
  var _gtRendering = false;
  var _gtObserver = new MutationObserver(function() {
    if (_gtRendering) return;
    if (_gtDirBar) _gtDirBar.style.display = 'none';
  });
  if (document.getElementById('append_list')) {
    _gtObserver.observe(document.getElementById('append_list'), { childList: true, subtree: true, characterData: true });
  }

  // Translates text with auto language detection. Returns { translation, detectedLang }
// Translate a known-English text to Bemba (for example sentences)
  function gtTranslate(text) {
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + LANG_CODE + '&dt=t&q=' + encodeURIComponent(text);
    return fetch(url)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data && data[0] && data[0].length) {
          return data[0].map(function(s) { return s[0] || ''; }).join('');
        }
        return '';
      });
  }

  function fetchAIExample(word) {
    return fetch('/api/tutor/example', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word: word })
    })
      .then(function(r) { return r.json(); })
      .then(function(data) { return (data.ok && data.sentence) ? data.sentence.trim() : ''; })
      .catch(function() { return ''; });
  }

  function showGTSection() {
    hide('section');
    show('#words-loader');
    show('#pagination-btns-wrapper');
    hide('#speak-pause-icon,#loading_data');
    show('#speak-play-icon');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function _runGTTranslate(word) {
    gtInjectStyle();
    renderGTResult(word, '', '', '', { translating: true });
    showGTSection();
    if (_gtDir === 'eng-bem') {
      fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + LANG_CODE + '&dt=t&q=' + encodeURIComponent(word))
        .then(function(r) { return r.json(); })
        .then(function(data) {
          var res = (data && data[0] && data[0].length) ? data[0].map(function(s) { return s[0] || ''; }).join('').trim() : '';
          if (!res) { renderGTResult(word, 'No translation found.', '', ''); return; }
          renderGTResult(word, res, '', '', word.length <= 15 ? { loadingEx: true } : {});
          if (word.length > 15) { renderGTResult(word, res, '', ''); return; }
          fetchAIExample(word).then(function(engEx) {
            if (!engEx) { renderGTResult(word, res, '', ''); return; }
            renderGTResult(word, res, engEx, '', { loadingBem: true });
            gtTranslate(engEx).then(function(bemEx) {
              renderGTResult(word, res, engEx, bemEx || '');
            }).catch(function() { renderGTResult(word, res, engEx, ''); });
          }).catch(function() { renderGTResult(word, res, '', ''); });
        })
        .catch(function() { renderGTResult(word, 'Translation failed. Check your connection.', '', ''); });
    } else {
      fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + LANG_CODE + '&tl=en&dt=t&q=' + encodeURIComponent(word))
        .then(function(r) { return r.json(); })
        .then(function(d) {
          var res = (d && d[0] && d[0].length) ? d[0].map(function(s) { return s[0] || ''; }).join('').trim() : '';
          renderGTResult(word, res || 'No translation found.', '', '');
        })
        .catch(function() { renderGTResult(word, 'Translation failed. Check your connection.', '', ''); });
    }
  }

  // Click handler for the fallback item
  gtItem.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    var word = (searchInput.value || '').trim();
    if (!word) return;
    suggList.style.display = 'none';
    // Which way round is the user typing? If the word is a headword in the
    // loaded dictionary it is target-language; otherwise assume English. The
    // Bemba prefix list is kept as an extra hint for Bemba only, since it does
    // not describe any other language's morphology.
    var _lw = word.toLowerCase();
    var _isTarget = false;
    if (typeof reverseDictLookup === 'function') {
      try { _isTarget = !!reverseDictLookup(_lw); } catch (e) {}
    }
    if (!_isTarget && LANG_CODE === 'bem') {
      var _bemPrefixes = ['uk', 'insh', 'ubu','ubw','icu','umw','aba','ati','awa','ayi','aya','ica','inku','ulu','abe','aka','ama','tu','bu','ika','inso','ice','umu','ify','inga','ici','ite','fw','ka','nsha','ink','mw','ko','ich','iwa','lal','wala','mwa','kwa','wali','bwa'];
      _isTarget = _bemPrefixes.some(function(p) { return _lw.startsWith(p); });
    }
    _gtDir = _isTarget ? 'bem-eng' : 'eng-bem';
    _updateDirBar();
    if (window._bemdic_wordCheck && !window._bemdic_wordCheck()) return;
    _runGTTranslate(word);
  });

  // After the existing input handler runs, check if any dictionary LIs are visible
  searchInput.addEventListener('input', function() {
    var val = (searchInput.value || '').trim();
    // Update label synchronously so the index.html filter sees the word text and keeps item visible
    var label = document.getElementById('bemdic-gt-label');
    if (label) label.textContent = val.length > 1 ?  val  : '';
    setTimeout(function() {
      if (val.length <= 1) {
        gtItem.style.display = 'none';
        return;
      }
      // Count visible LIs (excluding our fallback item)
      var allLi = suggList.querySelectorAll('li:not(#bemdic-gt-fallback)');
      var anyVisible = false;
      for (var i = 0; i < allLi.length; i++) {
        if (allLi[i].style.display !== 'none') { anyVisible = true; break; }
      }
      gtItem.style.display = anyVisible ? 'none' : '';
    }, 0);
  });


// Make #more-links-wrapper scrollable so it doesn't overflow on small screens
(function() {
  var s = document.createElement('style');
  s.textContent = 'nav #more-links-wrapper { max-height: 80vh; overflow-y: auto; -webkit-overflow-scrolling: touch; }';
  document.head.appendChild(s);
})();

// Hook more-menu open/close into the back-button modal stack
(function() {
  var moreBtn = document.getElementById('more_btn');
  var moreWrapper = document.getElementById('more-links-wrapper');
  if (!moreBtn || !moreWrapper) return;

  var _moreOpen = false;

  function closeMoreMenu() {
    _moreOpen = false;
    if (window.$) {
      $(moreWrapper).hide('slow');
      $(moreBtn).html('More').removeClass('active_link');
    } else {
      moreWrapper.style.display = 'none';
    }
  }

  // Capture phase fires before jQuery so we read state BEFORE the toggle
  moreBtn.addEventListener('click', function() {
    if (!_moreOpen) {
      _moreOpen = true;
      _pushModal(closeMoreMenu);
    } else {
      _moreOpen = false;
      _popModal();
    }
  }, true);

  // When a menu item is clicked the menu closes — pop history state too
  moreWrapper.addEventListener('click', function() {
    if (_moreOpen) {
      _moreOpen = false;
      _popModal();
    }
  });
})();

// Override #invite-link to show a custom share sheet (works in Kodular WebViewer + browsers)
(function() {
  var SHARE_URL = location.origin + '/';
  var SHARE_TEXT = 'Search any word in both English and ' + LANG_NAME + ', play quiz, earn points and get examples for word translations. ';

  function showShareSheet() {
    if (document.getElementById('_bemdic_share_sheet')) return;
    var encoded = encodeURIComponent(SHARE_TEXT + SHARE_URL);
    var overlay = document.createElement('div');
    overlay.id = '_bemdic_share_sheet';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:99999;display:flex;align-items:flex-end;justify-content:center';
    overlay.innerHTML = '<div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%;max-width:480px;box-sizing:border-box">' +
      '<div style="font-weight:700;font-size:16px;margin-bottom:16px;text-align:center">Share ' + LANG_NAME + ' Dictionary</div>' +
      '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:20px">' +
        '<a href="https://wa.me/?text=' + encoded + '" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;text-decoration:none;color:#222;gap:6px">' +
          '<div style="width:52px;height:52px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;font-size:26px">💬</div>' +
          '<span style="font-size:12px">WhatsApp</span></a>' +
        '<a href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(SHARE_URL) + '" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;text-decoration:none;color:#222;gap:6px">' +
          '<div style="width:52px;height:52px;border-radius:50%;background:#1877F2;display:flex;align-items:center;justify-content:center;font-size:26px">📘</div>' +
          '<span style="font-size:12px">Facebook</span></a>' +
        '<a href="sms:?body=' + encoded + '" style="display:flex;flex-direction:column;align-items:center;text-decoration:none;color:#222;gap:6px">' +
          '<div style="width:52px;height:52px;border-radius:50%;background:#34B7F1;display:flex;align-items:center;justify-content:center;font-size:26px">💌</div>' +
          '<span style="font-size:12px">SMS</span></a>' +
        '<button id="_bemdic_copy_link" style="display:flex;flex-direction:column;align-items:center;background:none;border:none;cursor:pointer;color:#222;gap:6px;padding:0">' +
          '<div style="width:52px;height:52px;border-radius:50%;background:#e0e0e0;display:flex;align-items:center;justify-content:center;font-size:26px">🔗</div>' +
          '<span style="font-size:12px">Copy link</span></button>' +
      '</div>' +
      '<button id="_bemdic_share_cancel" style="width:100%;padding:12px;border:none;border-radius:10px;background:#f2f2f2;font-size:15px;cursor:pointer">Cancel</button>' +
    '</div>';

    document.body.appendChild(overlay);
    _pushModal(close);

    function close() {
      var el = document.getElementById('_bemdic_share_sheet');
      if (el) el.remove();
    }

    overlay.addEventListener('click', function(e) { if (e.target === overlay) { close(); _popModal(); } });
    document.getElementById('_bemdic_share_cancel').addEventListener('click', function() { close(); _popModal(); });
    document.getElementById('_bemdic_copy_link').addEventListener('click', function() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(SHARE_URL).then(function() {
          document.getElementById('_bemdic_copy_link').querySelector('span').textContent = 'Copied!';
          setTimeout(function() { close(); _popModal(); }, 800);
        });
      } else {
        var ta = document.createElement('textarea');
        ta.value = SHARE_URL;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        document.getElementById('_bemdic_copy_link').querySelector('span').textContent = 'Copied!';
        setTimeout(function() { close(); _popModal(); }, 800);
      }
    });
  }

  var shareBtn = document.getElementById('invite-link');
  if (!shareBtn) return;
  shareBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    // Use native share API in browser when available; custom sheet in WebViewer
    if (!window.Kodular && navigator.share) {
      navigator.share({ title: LANG_NAME + ' Dictionary', text: SHARE_TEXT, url: SHARE_URL });
    } else {
      showShareSheet();
    }
  }, true);
})();

//call the Adpopunder for the free users
//runPopunderAd()

})();


// ============================================
// FEATURE GATES — member sign-up, quiz challenges and direct messages are
// switched off for this release. Nothing is deleted: every handler, endpoint
// and screen behind them is still here, so flipping the flags in FEATURES
// (top of this file) back to true reinstates them as they were.
//
// The gates work from outside the app's own scope — CSS plus capture-phase
// click interception — so they hold regardless of how the code above is
// wrapped, and they leave that code completely untouched.
// ============================================
(function () {
  'use strict';

  var CHALLENGE_SEL = '.upm-challenge, .mem-ch-btn, .ch-btn, #start-challenge-btn';
  var MESSAGE_SEL = '.upm-msg, .upm-msg-btn, .mem-msg-btn, #tab-msgs';

  function addCss(css) {
    var el = document.createElement('style');
    el.setAttribute('data-feature-gate', '1');
    el.textContent = css;
    (document.head || document.documentElement).appendChild(el);
  }

  var hidden = [];
  if (!FEATURES.challenge) hidden.push(CHALLENGE_SEL, '#challenge-section', '#challenge-card');
  if (!FEATURES.messages) hidden.push(MESSAGE_SEL, '#chat-section', '#msg-tab-badge');
  if (!FEATURES.signup) hidden.push('.name-modal-overlay');
  if (hidden.length) addCss(hidden.join(',') + '{display:none !important;}');

  // Notification rows are identified by the badge they carry, so the ones that
  // would lead to a hidden screen can be dropped without touching the renderer.
  var badges = [];
  if (!FEATURES.challenge) badges.push('.notif-type-challenge', '.notif-type-result');
  if (!FEATURES.messages) badges.push('.notif-type-message');
  if (badges.length) {
    addCss(badges.map(function (b) { return '.notif-row:has(' + b + ')'; }).join(',') + '{display:none !important;}');
  }

  // The sign-up form is replaced by the first-run language picker. CSS already
  // hides it; taking it out of the DOM as well keeps the page clean if the app
  // still builds one on a cold start.
  function dropSignupForms() {
    var forms = document.querySelectorAll('.name-modal-overlay');
    for (var i = 0; i < forms.length; i++) {
      if (forms[i].parentNode) forms[i].parentNode.removeChild(forms[i]);
    }
  }

  if (!FEATURES.signup) {
    // One may already exist: registration runs earlier in this file than the gates.
    dropSignupForms();
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', dropSignupForms);
  }

  if (!FEATURES.signup && window.MutationObserver) {
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var added = muts[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var n = added[j];
          if (n.nodeType === 1 && n.classList && n.classList.contains('name-modal-overlay')) {
            if (n.parentNode) n.parentNode.removeChild(n);
          }
        }
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  // Belt and braces: swallow clicks on the hidden controls during the capture
  // phase, before any of the app's own handlers can see them.
  var blocked = [];
  if (!FEATURES.challenge) blocked.push(CHALLENGE_SEL);
  if (!FEATURES.messages) blocked.push(MESSAGE_SEL);
  if (blocked.length) {
    var sel = blocked.join(',');
    document.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest(sel) : null;
      if (!t) return;
      e.stopImmediatePropagation();
      e.preventDefault();
    }, true);
  }
})();
