# L’ENTRAÎNEUR — application web installable

## Contenu
- Application mobile-first en français, thème sombre et accent vert citron.
- Tableau de bord et structure hebdomadaire.
- Journal de séances (activité, durée, RPE, distance, notes).
- Cycle de 12 semaines modifiable.
- Historique, export et import JSON.
- Mise en cache hors ligne après le premier chargement.

## Tester sur ordinateur
Ouvrir un serveur web local dans ce dossier (un simple double-clic sur `index.html` suffit pour tester l'interface, mais le mode installable et le service worker nécessitent HTTPS ou localhost).

## Publier gratuitement avec GitHub Pages
1. Créer un dépôt GitHub nommé `entraineur`.
2. Ajouter tous les fichiers et dossiers de cette archive à la racine du dépôt.
3. Dans **Settings → Pages**, choisir **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Ouvrir l'adresse HTTPS fournie par GitHub Pages.
5. Sur iPhone, ouvrir cette adresse dans **Safari** → **Partager** → **Sur l’écran d’accueil** → **Ajouter**.

## Données et limites
Les séances sont stockées localement dans le navigateur/appareil. Elles ne sont pas synchronisées entre appareils et peuvent être perdues si les données du site sont effacées. Utiliser régulièrement **Exporter JSON** et conserver le fichier dans Fichiers/iCloud Drive. Pour une vraie synchronisation multi-appareils, il faudra ajouter une authentification et une base de données distante.

## À savoir sur le programme
Le programme proposé est un cadre de préparation générale, pas un suivi médical ni un coaching technique de boxe. Les trajets à vélo comptent dans la charge hebdomadaire : réduire une séance de course ou de jambes si nécessaire.