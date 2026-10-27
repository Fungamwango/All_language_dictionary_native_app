import java.util.Properties

plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
}

// Load signing credentials from local.properties (never committed to git)
val localProps = Properties().apply {
    val f = rootProject.file("local.properties")
    if (f.exists()) f.inputStream().use { load(it) }
}

// The site address lives in gradle.properties so there is one place to change it
val siteHost = providers.gradleProperty("SITE_HOST").get()

val releaseKeystore = file(localProps["KEYSTORE_PATH"] as? String ?: "all_languages_dictionary.jks")

android {
    namespace  = "com.sageteche.alldic"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.sageteche.alldic"
        minSdk        = 24
        targetSdk     = 36
        versionCode   = 1
        versionName   = "1.0.0"

        buildConfigField("String", "SITE_HOST", "\"$siteHost\"")
    }

    signingConfigs {
        create("release") {
            storeFile     = releaseKeystore
            storePassword = localProps["KEYSTORE_PASSWORD"] as? String ?: ""
            keyAlias      = localProps["KEY_ALIAS"]         as? String ?: "all_languages_dictionary"
            keyPassword   = localProps["KEY_PASSWORD"]      as? String ?: ""
        }
    }

    buildTypes {
        release {
            isMinifyEnabled   = true
            isShrinkResources = true
            // Keep the PWA's icon PNGs byte-for-byte identical
            isCrunchPngs      = false
            if (releaseKeystore.exists()) signingConfig = signingConfigs.getByName("release")
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
        debug {
            isMinifyEnabled = false
        }
    }

    buildFeatures {
        viewBinding = true
        buildConfig = true
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }
}

// -----------------------------------------------------------------------------
// The website lives in WEB_ROOT (gradle.properties). Before every build its
// offline files are mirrored into src/main/assets at the same paths they have on
// the site, so OfflineCache can serve /dictionary/french_dictionary.js from
// assets/dictionary/french_dictionary.js. Every dictionary/*.js is included, so a
// new language file is bundled as soon as it is added to the website. If that
// folder is not there (e.g. on another PC) the copies already in assets are used.
// -----------------------------------------------------------------------------
val webRoot = File(providers.gradleProperty("WEB_ROOT").get())
val syncWebAssets by tasks.registering(Sync::class) {
    onlyIf { File(webRoot, "index.html").exists() }
    into("src/main/assets")
    from(webRoot) {
        include(
            "index.html",
            "manifest.json",
            "css/style.css",
            "js/*.js",
            "jquery/jquery-3.6.0.min.js",
            "sage-js/sage-js.js",
            "dictionary/*.js",
            "api/api.js",
        )
    }
}
tasks.named("preBuild") { dependsOn(syncWebAssets) }

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)
    implementation(libs.androidx.activity)
    implementation(libs.material)
    implementation(libs.androidx.constraintlayout)
    implementation(libs.androidx.browser)
}
