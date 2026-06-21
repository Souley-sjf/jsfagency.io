# Jenius Subtil Fiction — Site statique (HTML / CSS / JS)

5 pages prêtes à héberger n'importe où (OVH, Netlify, Vercel, hébergement classique).

## Structure
```
jsf-site/
├── index.html          # Accueil
├── services.html       # Services + tarifs
├── realisations.html   # Portfolio
├── a-propos.html       # À propos
├── contact.html        # Formulaire de contact
├── css/styles.css      # Tous les styles
├── js/main.js          # Nav, filtres, animations, formulaire
└── assets/             # Logos, portrait, image hero, icônes outils
```

## Lancer en local
Double-cliquez sur `index.html`, ou lancez un mini-serveur :
```bash
cd jsf-site
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

## Personnalisation rapide
- **Couleurs** : éditer les variables CSS en haut de `css/styles.css` (`--ink`, `--sand`, `--bg`…)
- **Polices** : Google Fonts (Sora + Outfit) chargées dans le `<head>` de chaque page
- **Contenu** : tout est en clair dans chaque fichier `.html`
- **Logos sociaux** : remplacer les liens `href="#"` dans `index.html` par vos vrais URL
- **Formulaire contact** : envoie un mailto vers `souleymanefaye.sjf@gmail.com` — pour un envoi serveur, brancher Formspree, Web3Forms ou un endpoint personnel.

## Crédits
Design & développement : Souleymane Faye — Jenius Subtil Fiction
