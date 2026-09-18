Premier League Survivor - Android APK setup

Add these files/folders to the ROOT of the existing GitHub repository:

package.json
capacitor.config.json
scripts/prepare-web.mjs
.github/workflows/build-android-apk.yml

Keep the existing index.html, images/, logos/, and Supabase setup unchanged.

After committing to main:
1. Open the repository on GitHub.
2. Click Actions.
3. Open "Build Android APK".
4. Click "Run workflow" if it has not started automatically.
5. When the workflow is complete, open the successful run.
6. Download the artifact named "Premier-League-Survivor-APK".
7. Unzip it to get app-debug.apk.

This APK is for direct testing/installing. A Play Store release later needs a signed release build and store listing.
