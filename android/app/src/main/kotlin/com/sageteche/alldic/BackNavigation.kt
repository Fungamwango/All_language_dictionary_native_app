package com.sageteche.alldic

/**
 * Script run in the page when the device back button is pressed. It closes
 * whatever is on top, the way a user would, and answers "handled", or "exit"
 * when the home view is showing with nothing open.
 *
 * The page's own history entries are not used to decide this: Home reloads
 * index.html as a new history entry and several views push entries nobody
 * listens for, so plain WebView.goBack() would reload old copies of the page
 * or appear to do nothing.
 */
object BackNavigation {

    const val HANDLED = "handled"

    val SCRIPT = """
        (function () {
          function visible(el) {
            if (!el) return false;
            var s = getComputedStyle(el);
            return s.display !== 'none' && s.visibility !== 'hidden' && el.getClientRects().length > 0;
          }

          // Decided from what is on screen: the page leaves stale "modal" history
          // entries behind (e.g. after picking a More menu item), so history.state
          // alone cannot tell whether a pop-up is open.

          // 1. Full-screen pop-ups (the language picker included): press their own close button
          var overlays = Array.prototype.filter.call(document.body.querySelectorAll('div'), function (el) {
            var s = getComputedStyle(el);
            return s.position === 'fixed' && (parseInt(s.zIndex, 10) || 0) >= 1000 && visible(el) &&
                   el.offsetWidth >= innerWidth * 0.9 && el.offsetHeight >= innerHeight * 0.6;
          });
          overlays.sort(function (a, b) {
            return (parseInt(getComputedStyle(b).zIndex, 10) || 0) - (parseInt(getComputedStyle(a).zIndex, 10) || 0);
          });
          if (overlays.length) {
            var top = overlays[0];
            var btn = top.querySelector('#lang-close, #bemdic-close-btn, #bemdic-pdf-close-btn, #pch-later, #_orphan_ok_btn, .rv-close');
            if (!btn) {
              btn = Array.prototype.find.call(top.querySelectorAll('button, [role=button], span, a'), function (b) {
                return visible(b) && /^(×|✕|✖|x|close|cancel|later|not now|ok|done|back)$/i.test((b.textContent || '').trim());
              });
            }
            if (btn) { btn.click(); return 'handled'; }
            // No button: pop-ups registered with the page's back handling close on history.back()
            if (history.state && history.state.bemdic_modal) { history.back(); return 'handled'; }
            // A pop-up with no way out (the first-run "Choose your language") is left alone
            return 'exit';
          }

          // 2. The More menu: close it with its own button, as a tap would
          var more = document.getElementById('more-links-wrapper');
          if (visible(more)) {
            var moreBtn = document.getElementById('more_btn');
            if (moreBtn) moreBtn.click(); else more.style.display = 'none';
            return 'handled';
          }

          // 3. Open search suggestion lists
          var lists = Array.prototype.filter.call(document.querySelectorAll('ul[id$="suggesstions"]'), visible);
          if (lists.length) {
            lists.forEach(function (l) { l.style.display = 'none'; });
            if (document.activeElement) document.activeElement.blur();
            return 'handled';
          }

          // 4. Any view other than home (quiz, points, tutor, disclaimer...): go home,
          //    the same as tapping Home, without adding another history entry
          if (!visible(document.getElementById('words-loader'))) {
            location.replace('/');
            return 'handled';
          }

          // 5. Home with nothing open
          return 'exit';
        })();
    """.trimIndent()
}
