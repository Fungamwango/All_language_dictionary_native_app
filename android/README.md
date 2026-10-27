# All Languages Dictionary — native Android app (Kotlin)

A WebView wrapper around the website in `C:\others\prog\all-languages-dictionary`
(`WEB_ROOT` in gradle.properties, live at https://alldic.pages.dev), built the same
way as `Bemba_dictionary_app_native`.

## Open and run
1. Android Studio → **Open** → this `android` folder.
2. Let Gradle sync, pick a device, press **Run**.

## Build the Play Store bundle
Android Studio: **Build → Generate Signed App Bundle / APK** with
`app/all_languages_dictionary.jks` (passwords are in `local.properties`), or from a terminal:

```
gradlew bundleRelease
```

Output: `app/build/outputs/bundle/release/app-release.aab`

Before each new upload, raise `versionCode` (and `versionName`) in `app/build.gradle.kts`.

## Things to keep safe
`app/all_languages_dictionary.jks` + `local.properties` are the upload key. Back them up
outside this PC; without them no update can ever be published. Both are git-ignored.

## Ads
The app adds no ads of its own (no AdMob, no Monetag) — to be added in a future
update. The page in the app is the live website, so anything the website itself
shows online (its own image ads, offer buttons and links in api.js) appears in the app
too; offline those are hidden with every other online-only feature.

## How it works
| Part | Where |
|---|---|
| Page loaded from | `https://alldic.pages.dev/`, the live site, so api.js and every `/api/` endpoint work as in a browser |
| Offline files | `OfflineCache.kt`, the native stand-in for `sw.js` (which is blocked). Files the app has (stored, or bundled in assets) are served at once and refreshed in the background once per session; `api/api.js` is network first, as in the Bemba app; `/api/` endpoints are always live |
| Bundled files | `index.html`, `manifest.json`, `css/style.css`, `js/*.js`, jQuery, sage-js, **every `dictionary/*.js`** and `api/api.js`, mirrored from `WEB_ROOT` into `app/src/main/assets` at their site paths on every build (`syncWebAssets`). Edit the website, rebuild, done. A new dictionary file is bundled automatically |
| Offline mode | `res/raw/app_shim.js`, added to `index.html` by OfflineCache: hides everything that only works online (Ask/AI tutor, translator, Google Translate search, Get Unlimited, share, outside links, image ads) and shows it again when back online; the language picker lists only the 7 built-in dictionaries |
| Text-to-speech | `window.Kodular` (`KodularBridge.kt`) as in the Bemba app; the ▶️ button reads each half of an entry in its own language with the phone's voices (`DeviceTts.kt`), offline voices first, English male voice for languages the phone cannot speak |
| Links, `window.open`, downloads | open in the matching app if one is installed (WhatsApp, Facebook, Play Store; Android 11+), otherwise in a Chrome Custom Tab over the app in its colours (✕ / back returns to the dictionary), or the phone's browser if no browser supports Custom Tabs; the card payment page (Lipila, 3-D Secure) stays in the app so the subscription completes on return |
| Back button | `BackNavigation.kt`, as in the Bemba app: closes full-screen video → pop-up / language picker → More menu → search suggestions → returns home from any other view; on home, "Press back again to exit" |
| Third-party scripts | made `async` in `index.html`, so a slow ad server never holds up the dictionary |

## Icon and splash
From the website's PWA (`manifest.json` → `apps/apps/icon.png` 512 px and `icon-192.png`):
`drawable-nodpi/splash_logo.png`, `play_store/app_icon_512.png` and
`mipmap-xxxhdpi/ic_launcher.png` are byte-for-byte copies (PNG crunching is off); the
other launcher sizes and the adaptive-icon foreground are scaled from the 512 px icon.
