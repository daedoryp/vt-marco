# Exercice 5 — Data processing & streams (flux Enedis)

**Durée :** ~8 min · **Difficulté :** Moyen → Difficile

## Question (oral)

Comment traiter un export Enedis de plusieurs Go (CSV) **sans faire exploser la mémoire** ?
Qu'est-ce que la **backpressure** ?

## Énoncé (code)

Le fichier `process-csv.js` contient un squelette. Complète le pipeline pour :

1. Lire `sample-enedis.csv` **en streaming** (pas de chargement complet en mémoire).
2. Transformer chaque ligne en objet `{ prm, date, kwh }`.
3. Insérer **par lots de 500** (ici simulé par un compteur) en respectant la backpressure.
4. Gérer les erreurs et la fermeture des ressources via `pipeline()`.

```bash
node exercises/05-streams-enedis/process-csv.js
```

## Variante plus difficile

Le parsing devient **CPU-bound** (calcul lourd par ligne) et bloque l'Event Loop.
Comment déporter le calcul ? → **worker threads** (et coût de sérialisation des messages).
