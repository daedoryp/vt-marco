# VT Marco - Validation Technique Developpeur Full-Stack (Node.js / TypeScript)

Repository d'exercices pour l'entretien technique. Profil evalue : **Developpeur Full-Stack React / Node.js / TypeScript** (facturation B2B, paiements Stripe/SEPA, flux Enedis, ingenierie assistee par IA).

> Ce repo contient **uniquement les enonces et le code de depart**. Les solutions et le guide de l'evaluateur ne sont pas versionnes (voir `.gitignore`).

## Deroule (60-90 min)

| # | Module | Dossier | Duree |
|---|--------|---------|-------|
| 0 | Parcours reel & part IA | _(oral)_ | 5 min |
| 1 | Node.js & Event Loop | `exercises/03-event-loop` | 12 min |
| 2 | TypeScript (`map`/`filter`) | `exercises/01-typescript-map-filter` | 8 min |
| 3 | Express.js & Docker | `exercises/02-express-docker` | 15 min |
| 4 | Kubernetes (composants) | _(oral)_ | 7 min |
| 5 | Architecture / DDD (mise en situation) | _(oral)_ | 15 min |
| 6 | Paiements / concurrence | `exercises/04-concurrency-balance` | 10 min |
| 7 | Data / streams | `exercises/05-streams-enedis` | 8 min |
| 8 | TDD (cas concret) | `exercises/06-tdd-payment` | 8 min |
| 9 | Debug sans IA | `exercises/07-debug-idempotency` | 7 min |

## Pre-requis

- Node.js 20+
- (Optionnel) Docker pour l'exercice 2
- (Optionnel) TypeScript pour l'exercice 1 : `npm i -g typescript ts-node`

## Installation

```bash
npm install
```

## Lancer un exercice

Chaque dossier d'exercice contient son propre `README.md` avec l'enonce.

```bash
# Exemples
node exercises/03-event-loop/event-loop.cjs
node exercises/04-concurrency-balance/balance.js
node --test exercises/06-tdd-payment/payment.test.js
```

## Structure

```
vt-marco/
|-- README.md                 # ce fichier (vue candidat)
|-- package.json
|-- .gitignore
|-- exercises/                # enonces + code de depart (versionnes)
|   |-- 01-typescript-map-filter/
|   |-- 02-express-docker/
|   |-- 03-event-loop/
|   |-- 04-concurrency-balance/
|   |-- 05-streams-enedis/
|   |-- 06-tdd-payment/
|   `-- 07-debug-idempotency/
|-- solutions/                # NON versionne - reserve evaluateur
`-- GUIDE-ENTRETIEN.md        # NON versionne - guide complet evaluateur
```
