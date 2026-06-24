# Exercice 4 — Paiements & concurrence (lost update)

**Durée :** ~10 min · **Difficulté :** Difficile

## Contexte

Domaine du candidat : gestion du **solde client**. Deux requêtes concurrentes créditent
le **même** solde de +10 € chacune. Le code naïf de `balance.js` simule cette situation.

## Énoncé

1. Lance le script et observe le résultat.

```bash
node exercises/04-concurrency-balance/balance.js
```

2. **Quel est le bug ?** Nomme-le précisément.
3. Propose **deux corrections de natures différentes** (côté base de données).

## Attendu (résumé)

- C'est un **lost update** : les deux lectures voient 100, l'une écrase l'autre → 110 au lieu de 120.
- Corrections : `UPDATE ... SET amount = amount + 10` (atomique), `SELECT ... FOR UPDATE`
  (verrou pessimiste), ou colonne `version` + retry (verrou optimiste).

## Variante plus difficile

Le crédit doit aussi écrire une ligne de **ledger** immuable ET publier un événement
(PubSub). Comment éviter le **dual-write** ? → pattern **Outbox**.
