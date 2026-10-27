# ---- WebView / JavaScript bridge ----------------------------------------
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
-keepattributes JavascriptInterface

# ---- App classes ---------------------------------------------------------
-keep class com.sageteche.alldic.** { *; }

# ---- Keep source file names for crash reports ----------------------------
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile
