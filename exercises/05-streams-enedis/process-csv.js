// Exercice 5 — Streams & backpressure
// Objectif : traiter un gros CSV en streaming, insérer par lots de 500,
// gérer erreurs + fermeture via pipeline(). À COMPLÉTER.

import { createReadStream } from "node:fs";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { createInterface } from "node:readline";

const BATCH_SIZE = 500;
const filePath = new URL("./sample-enedis.csv", import.meta.url);

// Simule un insert groupé en base.
async function insertBatch(rows) {
  // ici : await db.insert(rows)
  console.log(`Insert de ${rows.length} ligne(s)`);
}

async function main() {
  // 👉 À COMPLÉTER :
  // 1. createReadStream(filePath)
  // 2. parser le CSV ligne par ligne (séparateur ";", ignorer l'en-tête)
  // 3. bufferiser BATCH_SIZE lignes puis insertBatch (await => backpressure)
  // 4. flush du dernier lot incomplet
  // Indice : un Transform qui accumule, ou readline + buffer.
  console.log("TODO: implémenter le pipeline streaming");
}

main().catch((err) => {
  console.error("Erreur pipeline :", err);
  process.exit(1);
});
