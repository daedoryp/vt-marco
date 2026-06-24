// Exercice 3 — Event Loop  (CommonJS : ordre canonique nextTick avant Promise)
// QUESTION : prédire l'ordre d'affichage AVANT d'exécuter, puis justifier.

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

process.nextTick(() => console.log("D"));

console.log("E");

// ---------------------------------------------------------------------------
// VARIANTE (à décommenter pour la question avancée) :
// Dans un callback I/O, setImmediate passe avant setTimeout(0).
//
// const { readFile } = require("node:fs");
// readFile(__filename, () => {
//   setTimeout(() => console.log("timeout"), 0);
//   setImmediate(() => console.log("immediate"));
// });
//
// BONUS séniorité : en module ESM (.mjs), le corps du module s'exécute dans une
// microtâche, ce qui DÉCALE nextTick et donne A E C D B au lieu de A E D C B.
