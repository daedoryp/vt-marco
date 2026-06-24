// Exercice 4 — Concurrence : lost update sur un solde client.
// Simule deux crédits concurrents de +10 sur un solde initial de 100.
// QUESTION : quel est le bug, et comment le corriger (2 approches) ?

// --- "Base de données" en mémoire ---
const db = { balance: 100 };

// Lecture lente (simule la latence réseau/DB)
function getBalance() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(db.balance), 10);
  });
}

function setBalance(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      db.balance = value;
      resolve();
    }, 10);
  });
}

// Crédit NAÏF : read-modify-write non atomique
async function creditNaive(amount) {
  const current = await getBalance(); // lit 100
  await setBalance(current + amount); // écrit 110 (écrase l'autre)
}

async function main() {
  await Promise.all([creditNaive(10), creditNaive(10)]);
  console.log("Solde final :", db.balance);
  console.log("Attendu : 120  —  Observé :", db.balance);
}

main();
