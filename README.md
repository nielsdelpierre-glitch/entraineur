# L’ENTRAÎNEUR — version 7 (mise à jour complète)

## Évolutions intégrées
1. **Séances de force guidées** : échauffement à la corde réglable, validation exercice/série par exercice/série, récupération courte entre exercices et récupération longue entre tours. Quantité et charge réellement effectuées saisissables à chaque série.
2. **Profils locaux** : création de pseudonymes uniques sans distinction de casse, sélection du profil, historique et programmation séparés sur l’appareil.
3. **Planification** : planning hebdomadaire par profil et planification distincte pour chacune des 12 semaines. Chaque semaine possède un objectif et des consignes modifiables.
4. **Bibliothèque** : création d’exercices (répétitions, durée ou distance) et de séances réutilisables ; ajout ponctuel d’un exercice à une séance.
5. **Historique lisible** : détails d’entraînement présentés en langage courant ; conservation des anciens détails et des nouvelles valeurs réellement effectuées.
6. **Notifications** : demande d’autorisation et rappel quotidien lorsque l’application est ouverte. Les notifications web en arrière-plan fiables nécessitent un service push côté serveur ; cette archive n’ajoute pas de serveur.
7. **Protection des données** : conservation de la clé `entraineur-v4`, migration non destructive de l’ancien format vers des profils, sauvegarde complète JSON et partage de programmes sans historique.

## Important — données existantes
Avant publication, exporte une sauvegarde complète depuis Profil. L’application conserve la clé locale `entraineur-v4` et migre l’ancien enregistrement dans le profil Niels sans effacer les journaux. Ne supprime pas les données de Safari.

Les profils sont locaux au navigateur. Pour retrouver les mêmes données sur un autre téléphone, il faut importer une sauvegarde ou un programme. Une synchronisation automatique multi-appareils nécessiterait une base en ligne et un système de comptes, qui ne sont pas activés dans cette version.

## Publication GitHub Pages
1. Décompresser cette archive.
2. Ouvrir `entraineur-main` et téléverser **son contenu** à la racine du dépôt GitHub.
3. Remplacer `app.js`, `index.html`, `styles.css`, `sw.js` et `README.md`. Conserver `manifest.webmanifest` et les icônes.
4. Commit changes et attendre la publication GitHub Pages.
5. Sur iPhone, fermer puis rouvrir l’application ou recharger le site dans Safari.

Le cache PWA est passé à `lentraineur-v8` pour forcer le chargement des nouveaux fichiers.

## Limites de validation
Le JavaScript a été contrôlé syntaxiquement. Il reste indispensable de tester le parcours sur iPhone après déploiement, notamment les minuteries en arrière-plan (iOS peut suspendre une page inactive) et les autorisations de notification.
