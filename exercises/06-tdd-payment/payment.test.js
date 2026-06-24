// Exercice 6 — TDD : tests (étape RED) — À ÉCRIRE PAR LE CANDIDAT.
// Lancer : node --test exercises/06-tdd-payment/

import { test } from "node:test";
import assert from "node:assert/strict";
import { createAccount, applyPayment } from "./payment.js";

// 👉 À COMPLÉTER : écrire les tests AVANT l'implémentation.
//
// test("crédit nominal", () => { ... });
// test("idempotence : même eventId ne crédite qu'une fois", () => { ... });
// test("deux eventId différents créditent deux fois", () => { ... });

test("placeholder — à remplacer par les vrais tests", () => {
  assert.ok(createAccount);
  assert.ok(applyPayment);
});
