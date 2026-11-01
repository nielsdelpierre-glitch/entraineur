# L’ENTRAÎNEUR — version 2

## Installation GitHub Pages
1. Ouvre le dépôt `entraineur`.
2. Add file → Upload files.
3. Décompresse cette archive sur ton ordinateur puis dépose le contenu (index.html, app.js, styles.css, manifest, sw.js et dossier icons) à la racine du dépôt.
4. Commit changes.
5. Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
6. Ouvre l’URL GitHub Pages dans Safari sur iPhone, puis Partager → Ajouter à l’écran d’accueil.

## Comprendre les fichiers
- `index.html` : structure des écrans et formulaire.
- `styles.css` : apparence et mise en page.
- `app.js` : logique de l'application. `plan` décrit les jours, `templates` les exercices, `grades` les cotations, `routeRows()` crée une ligne par voie, `build()` construit les exercices et `onsubmit` enregistre la séance.
- `manifest.webmanifest` : nom et options d'installation.
- `sw.js` : cache pour usage hors ligne.
- `icons/` : icônes.

## Fonctions
Séances détaillées, réglage des séries/répétitions, progression douce selon la semaine, escalade avec nombre de voies et cotation par voie (ou « Blocs »), historique et export JSON.

Les données restent sur cet appareil dans le stockage du navigateur. Exporte régulièrement une sauvegarde. Cette version est une PWA, pas une application native App Store.
