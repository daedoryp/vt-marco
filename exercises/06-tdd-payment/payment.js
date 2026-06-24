// Exercice 6 — TDD : implémentation (étape GREEN).
// À écrire APRÈS les tests. Ne pas anticiper au-delà des tests rédigés.

export function createAccount(initialBalance = 0) {
  return {
    balance: initialBalance,
    processedEvents: new Set(),
  };
}

// 👉 À COMPLÉTER (après avoir écrit les tests) :
// applyPayment(account, { eventId, amount }) -> crédite une seule fois par eventId
export function applyPayment(account, event) {
  throw new Error("Not implemented — écrire les tests d'abord !");
}
