# Turbo Pursuit · APK para Android

Este proyecto envuelve el juego (`www/index.html`) en una app Android con Capacitor.
Queda en horizontal y a pantalla completa.

## Opción A: sin instalar nada (recomendada)

GitHub compila el APK por vos, gratis.

1. Creá una cuenta en github.com (si no tenés) y un repositorio nuevo, por ejemplo `turbo-pursuit`.
2. Subí **todo el contenido de esta carpeta** al repositorio. En la web: botón *Add file → Upload files*, arrastrá todo y confirmá.
   Importante: la carpeta oculta `.github` tiene que subirse también. Si tu navegador no la deja arrastrar, usá *Add file → Create new file*, escribí `.github/workflows/build-apk.yml` como nombre y pegá el contenido del archivo.
3. Entrá a la pestaña **Actions**. Si pide habilitarlas, aceptá. Se va a ejecutar solo *Compilar APK* (tarda unos 5 a 8 minutos). Si no arrancó, tocá *Compilar APK → Run workflow*.
4. Cuando termine con el tilde verde, abrí esa ejecución y bajá **turbo-pursuit-apk** (sección *Artifacts*). Viene en un zip con `app-debug.apk` adentro.

## Opción B: con Android Studio

Necesitás Node 22, Java 21 y Android Studio.

```
npm install
npm run android
npm run open
```

Android Studio se abre con el proyecto. Elegí tu teléfono (con depuración USB) y tocá *Run*.
Para generar el archivo: *Build → Build Bundle(s) / APK(s) → Build APK(s)*.

## Instalar el APK en el celular

1. Pasá `app-debug.apk` al teléfono (Drive, cable, Telegram, lo que quieras).
2. Abrilo desde el celular. Android te va a pedir permiso para instalar apps de esa fuente: aceptalo.
3. Si aparece un aviso de Play Protect, tocá *Instalar de todos modos*. Es normal en apps propias sin firmar para tienda.

## Para actualizar el juego

Reemplazá `www/index.html` y subí el cambio al repositorio. Se genera un APK nuevo.

## Notas

- El APK es de depuración: sirve para instalar y jugar, pero no para publicar en Google Play. Para Play Store hace falta un archivo firmado (AAB) y una cuenta de desarrollador.
- Las fuentes de Google se cargan por internet. Sin conexión el juego usa tipografías del sistema y funciona igual.
- El progreso (monedas, mejoras, nivel) se guarda en el teléfono.
