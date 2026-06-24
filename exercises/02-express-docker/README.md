# Exercice 2 — Express.js & Docker

**Durée :** ~15 min · **Difficulté :** Moyen

## Question (oral, avant le code)

Quelles différences majeures entre **Express 4 et Express 5** ? En quoi ça change ta façon
d'écrire les handlers et la gestion d'erreurs ?

## Énoncé (code)

Le fichier `app.js` contient une API Express avec un endpoint `/` déjà implémenté.

1. **Ajoute un endpoint `GET /users`** qui renvoie une liste d'utilisateurs en JSON,
   avec une **gestion d'erreur propre**.
2. **Écris le `Dockerfile`** pour conteneuriser cette API (le fichier n'existe pas encore,
   à créer dans ce dossier).

## Lancer

```bash
cd exercises/02-express-docker
npm install
node app.js
# puis : curl http://localhost:3000/users
```

## Build Docker (après écriture du Dockerfile)

```bash
docker build -t vt-marco-api .
docker run -p 3000:3000 vt-marco-api
```

## Variantes (si à l'aise)

- Multi-stage build (cas TypeScript : build puis runtime léger).
- `HEALTHCHECK`, utilisateur non-root, `.dockerignore`.
- Pagination de `/users` via query params avec validation.
- Pourquoi `npm ci` plutôt que `npm install` en CI ?
