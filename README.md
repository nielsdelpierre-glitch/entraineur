# L’ENTRAÎNEUR — version 3

PWA mobile-first. Fichiers : `index.html` (structure), `styles.css` (apparence), `app.js` (programme et logique), `manifest.webmanifest` (installation), `sw.js` (cache), `icons/` (icônes).

## Publication GitHub Pages
Décompresser l’archive, téléverser les fichiers à la racine du dépôt `entraineur` en remplaçant les anciens, conserver le dossier `icons`, puis Commit changes. Dans Settings → Pages, choisir Deploy from a branch, `main`, `/ (root)`. Attendre la coche verte dans Actions. Ouvrir ensuite l’adresse Pages dans Safari.

## Comprendre et modifier
Dans `app.js`, `plan` définit les jours et exercices. Chaque exercice est `[nom, séries, répétitions/durée, note]`. `grades` contient les cotations d’escalade. `drawRoutes()` crée autant de lignes que de voies indiquées, avec l’option Blocs. `weekFactor()` est intégré au calcul de progression dans `detail()` : semaines 2 et 3 augmentent légèrement les répétitions, semaine 4 revient à la base. Les valeurs peuvent être ajustées avec +/−.

Les données sont stockées localement dans le navigateur. Exporter régulièrement la sauvegarde JSON depuis Progrès. Cette version n’a pas encore de compte ni de synchronisation cloud. Une sortie vélo gravel doit compter dans la charge hebdomadaire ; alléger la course ou les jambes si nécessaire.
