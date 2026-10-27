# Publishing All Languages Dictionary on Google Play

Everything the Play Console asks for, in the order it asks. Copy-paste text is in
`store_listing.txt`; images are in this folder.

---

## Step 0 — Before you open Play Console

1. **Deploy the website** so these pages are live (already added to
   `C:\others\prog\all-languages-dictionary`; deploy from there as usual with
   `npx wrangler pages deploy . --project-name=alldic --commit-dirty=true`):
   - https://alldic.pages.dev/privacy.html
   - https://alldic.pages.dev/delete-account.html

   Open each link in a browser and check it loads before continuing.

   If wrangler says **"Project not found"**, it is logged in to a Cloudflare account that
   does not own `alldic`. Run `npx wrangler logout`, then `npx wrangler login` and sign in
   with the account that owns alldic.pages.dev, then deploy again.

2. **Betting and casino ads.** Some of the rotating image ads in
   `api/api.js` (`ads_array`, images `api/img*.jpg`) advertise betting and casino sites,
   and they show inside the app. Google Play does not allow real-money gambling ads to be
   shown to users under 18. Before submitting, either take those images out of
   `ads_array` and deploy, or choose only **18 and over** in *Target audience* below.

3. **No AdMob.** The app has no AdMob (see `android/README.md`), so there is no AdMob
   app to create and no `app-ads.txt` is needed.

4. Build and upload file: run `gradlew bundleRelease` in the `android` folder, then use
   `android/app/build/outputs/bundle/release/app-release.aab`

---

## Step 1 — Create the app

Play Console → **Create app**

| Field | Answer |
|---|---|
| App name | All Languages Dictionary |
| Default language | English (United Kingdom) – en-GB |
| App or game | App |
| Free or paid | Free |
| Declarations | Tick both (Developer Program Policies, US export laws) |

---

## Step 2 — Set up your app (Dashboard → "Set up your app")

### App access
**All functionality in my app is available without any special access.**
(The profile only asks for a display name; there is no login.)

### Ads
**Yes, my app contains ads.**

### Content rating
Start questionnaire → email chandamark386@gmail.com → Category: **Reference, News, or Educational**.

| Question | Answer |
|---|---|
| Violence, blood, sexual content, profanity, drugs, alcohol, tobacco, gambling | No to all |
| Can users interact or exchange content with each other? | **Yes** (posts, comments, messages, challenges) |
| Does the app share the user's current physical location with other users? | No |
| Does the app allow users to buy digital goods? | **Yes** (unlimited plan, ebook) |
| Is the app a web browser or search engine? | No |
| Is the app primarily news or educational? | Educational |

### Target audience and content
- Target age groups: **13–15, 16–17, 18 and over** (do **not** tick any under-13 group:
  the app has chat with other users and ads that are not certified for children, so it
  cannot join the Families programme). If the betting/casino ads are still in the app
  (Step 0.2), tick **18 and over** only.
- "Could your store listing unintentionally appeal to children?" → **No**.

### News app
No.

### Data safety
**Data collection and security**
| Question | Answer |
|---|---|
| Does your app collect or share any of the required user data types? | Yes |
| Is all of the user data collected by your app encrypted in transit? | Yes |
| Which methods of account creation does your app support? | Other (profile is created with a display name, linked to the device) |
| Delete account URL | https://alldic.pages.dev/delete-account.html |
| Can users request that some data be deleted without deleting their account? | Yes (email request) |

**Data types** — tick these, then answer for each:

| Data type | Collected | Shared | Optional? | Purposes |
|---|---|---|---|---|
| Personal info → **Name** | Yes | No | Optional | App functionality, Account management |
| Personal info → **Email address** | Yes | No | Optional | App functionality (card payments) |
| Personal info → **Phone number** | Yes | No | Optional | App functionality (mobile money payments) |
| Financial info → **Purchase history** | Yes | No | Optional | App functionality |
| Location → **Approximate location** | Yes | Yes | Required | Advertising or marketing, Fraud prevention (ad networks, from IP address) |
| Photos and videos → **Photos** | Yes | No | Optional | App functionality (profile picture) |
| Messages → **Other in-app messages** | Yes | No | Optional | App functionality |
| App activity → **App interactions** | Yes | Yes | Required | App functionality; Advertising or marketing (ad networks) |
| App activity → **Other user-generated content** | Yes | No | Optional | App functionality (posts, comments, AI tutor questions) |
| Device or other IDs → **Device or other IDs** | Yes | Yes | Required | App functionality, Account management; Advertising or marketing (ad networks) |

For each: "Is this data processed ephemerally?" → **No**.

### Government apps
No.

### Financial features
**My app doesn't provide any financial features.**

### Health
No health features.

### Advertising ID
**No**, the app does not use the advertising ID (there is no AdMob or other ads SDK,
and the app does not declare the `AD_ID` permission).

---

## Step 3 — Store listing (Grow → Store presence → Main store listing)

| Field | Use |
|---|---|
| App name | from `store_listing.txt` |
| Short description | from `store_listing.txt` |
| Full description | from `store_listing.txt` |
| App icon | `app_icon_512.png` |
| Feature graphic | `feature_graphic_1024x500.png` |
| Phone screenshots | the 6 files in `screenshots/`, in number order |

**Store settings**: Category **Education** · tags from `store_listing.txt` ·
email chandamark386@gmail.com · website https://alldic.pages.dev ·
phone +260962464552 (optional).

**App content → Privacy policy**: https://alldic.pages.dev/privacy.html

---

## Step 4 — Release

### If your developer account is a personal account created after 13 Nov 2023
Google requires a **closed test with at least 12 testers for 14 days in a row** before you
can apply for production. Testing → Closed testing → Create track → add testers' Gmail
addresses → upload the `.aab` → send them the opt-in link. After 14 days: Dashboard →
"Apply for production".

### Otherwise (older or organisation account)
Release → **Production** → Create new release:
1. **App signing**: accept "Let Google manage and protect your app signing key"
   (recommended). Your `all_languages_dictionary.jks` is the **upload key**.
2. Upload `app-release.aab`.
3. Release name: `1.0.0 (1)`.
4. Release notes (en-GB):
   ```
   First release of All Languages Dictionary: 7 full dictionaries (Bemba, Nyanja,
   French, Portuguese, Spanish, Swahili, Zulu) with examples that work offline,
   100+ more languages online, quiz, AI tutor and translator.
   ```
5. Countries/regions: **Zambia** (add more if you like) → Save → Review release →
   Start rollout to Production.

Review usually takes from a few hours to about 7 days.

---

## Step 5 — After the app is live

For every update: raise `versionCode` (and `versionName`) in
`android/app/build.gradle.kts`, run `gradlew bundleRelease`, upload the new `.aab`.
