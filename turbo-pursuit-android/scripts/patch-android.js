// Deja la app en horizontal y a pantalla completa. Se puede correr varias veces sin problema.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..', 'android', 'app', 'src', 'main');

const manifestPath = path.join(root, 'AndroidManifest.xml');
let manifest = fs.readFileSync(manifestPath, 'utf8');
if (!manifest.includes('screenOrientation')) {
  manifest = manifest.replace('android:name=".MainActivity"', 'android:name=".MainActivity"\n            android:screenOrientation="sensorLandscape"');
  fs.writeFileSync(manifestPath, manifest);
  console.log('AndroidManifest.xml: orientación horizontal lista');
}

const stylesPath = path.join(root, 'res', 'values', 'styles.xml');
let styles = fs.readFileSync(stylesPath, 'utf8');
if (!styles.includes('windowFullscreen')) {
  styles = styles.replace(
    '<item name="android:background">@null</item>',
    '<item name="android:background">@null</item>\n        <item name="android:windowFullscreen">true</item>\n        <item name="android:windowLayoutInDisplayCutoutMode">shortEdges</item>'
  );
  fs.writeFileSync(stylesPath, styles);
  console.log('styles.xml: pantalla completa lista');
}
