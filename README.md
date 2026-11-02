# L’ENTRAÎNEUR — version 7

## Nouveautés
- Guide d’utilisation intégré dans l’application.
- Profils locaux distincts sur un même appareil.
- Bibliothèque d’exercices et de séances personnalisés.
- Export d’un programme partageable (sans historique personnel) et import d’un programme reçu.
- Sauvegarde complète JSON et restauration.
- Repères de cycle de 12 semaines et minuteur guidé.
- Cache PWA renouvelé pour forcer le chargement de la version 7.

## Données et compatibilité
La clé de stockage reste `entraineur-v4` pour assurer la continuité avec les données existantes. Les données restent locales au navigateur : il n’y a pas de synchronisation automatique entre iPhone et ordinateur. Pour transférer les données, utiliser l’export/import JSON.

**Avant la mise à jour :** exporter une sauvegarde complète depuis Profil. Ne pas effacer les données de Safari.

## Publication sur GitHub Pages
1. Décompresser l’archive.
2. Ouvrir le dossier `entraineur-main` et téléverser son contenu à la racine du dépôt GitHub.
3. Remplacer les anciens fichiers `app.js`, `index.html`, `styles.css`, `sw.js` et `README.md`.
4. Conserver `manifest.webmanifest` et le dossier `icons/` avec les deux icônes PNG.
5. Faire **Commit changes** et attendre le déploiement GitHub Pages.
6. Sur iPhone, fermer puis rouvrir l’application ou recharger le site dans Safari.

## Installation iPhone
Ouvrir l’URL HTTPS GitHub Pages dans Safari → bouton Partager → Ajouter à l’écran d’accueil.

## Utilisation du partage de programme
Dans Profil → Exporter le programme à partager. Envoyer le fichier JSON au destinataire. Celui-ci ouvre son application → Profil → Importer un programme reçu. Le fichier ne contient pas l’historique personnel.
