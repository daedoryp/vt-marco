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

app.get("/users", async (req, res) => {
  const users = await getUsers();
  if (users) res.json({ status: "ok", service: "vt-marco-api", data: users })
  else {
      res.status(404)
      res.json({ status: "ko", service: "vt-marco-api", "message": "empty DB" })
    }
});

// 👉 À COMPLÉTER : GET /users (réponse JSON + gestion d'erreur)

// 👉 À COMPLÉTER : middleware d'erreur

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`API on :${PORT}`));
