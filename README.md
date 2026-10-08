# 🧾 Applin

Application web de gestion commerciale : tableau de bord, produits, commandes, ventes et clients, avec grilles de données et graphiques.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Ignite UI](https://img.shields.io/badge/Ignite_UI-React-0099ff)

## Pages

| Page | Contenu |
|---|---|
| Accueil | Tableau de bord : ventes totales, ventes par catégorie, nouveaux produits |
| Produits | Catalogue avec ajout et modification de produits (formulaires en boîte de dialogue) |
| Commandes | Grille des commandes avec filtre |
| Ventes | Graphique du chiffre d'affaires |
| Clients | Grille de données |
| Devis | Page en cours de développement |

Composants principaux : grilles de données (`IgrGrid`), graphiques (`IgrCategoryChart`, `IgrPieChart`), listes, cartes et formulaires Ignite UI.

## Stack technique

- **React 18** + **TypeScript**, routage avec **React Router**
- **Ignite UI for React** (grilles, graphiques, composants de formulaire)
- **Vite** pour le développement et le build
- **Vitest** + Testing Library pour les tests

Le projet a été initialisé avec [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli). Les données proviennent d'API de démonstration (jeux de données Northwind et e-commerce).

## Structure

```
src/app/
├── accueil/ produits/ commandes/ ventes/ clients/ devis/   # une page par dossier (composant, styles, test)
├── services/        # appels aux API de données
├── hooks/           # hooks de chargement des données
├── models/          # types TypeScript
└── app-routes.tsx   # déclaration des routes
```

## Lancer le projet

```bash
git clone https://github.com/Linkaart/Applin.git
cd Applin
npm install
npm start          # serveur de développement Vite
```

| Commande | Rôle |
|---|---|
| `npm start` | serveur de développement |
| `npm run build` | build de production |
| `npm run preview` | aperçu du build |
| `npm test` | tests Vitest |
| `npm run lint` | analyse ESLint |
