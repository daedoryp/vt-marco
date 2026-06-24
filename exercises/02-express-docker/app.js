// Exercice 2 — Express.js & Docker
// L'endpoint "/" est fourni. À FAIRE : ajouter GET /users + écrire le Dockerfile.

import express from "express";

const app = express();
app.use(express.json());

// --- Endpoint fourni ---
app.get("/", (req, res) => {
  res.json({ status: "ok", service: "vt-marco-api" });
});

// Simulation d'un accès "base de données" (peut échouer).
async function getUsers() {
  return [
    { id: 1, name: "Ada" },
    { id: 2, name: "Linus" },
    { id: 3, name: "Grace" },
  ];
}

// 👉 À COMPLÉTER : GET /users (réponse JSON + gestion d'erreur)

// 👉 À COMPLÉTER : middleware d'erreur

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`API on :${PORT}`));
