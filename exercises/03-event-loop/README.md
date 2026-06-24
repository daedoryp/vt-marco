# Exercice 3 - Node.js & Event Loop

**Duree :** ~12 min - **Difficulte :** Moyen -> Difficile

## Question (oral, avant le code)

Explique le fonctionnement de l'**Event Loop** de Node.js : ses phases, et la difference
entre `process.nextTick`, les microtaches de Promise, `setTimeout` et `setImmediate`.

## Enonce (code)

Sans executer le fichier `event-loop.cjs`, **predis l'ordre exact d'affichage** et **justifie
chaque etape**. Ensuite seulement, lance le script pour verifier.

```bash
node exercises/03-event-loop/event-loop.cjs
```

> Le fichier est en CommonJS (`.cjs`) pour donner l'ordre canonique. Bonus : en module ESM,
> le corps du module s'execute dans une microtache et l'ordre `nextTick`/Promise s'inverse.

## Variante plus difficile

Le second bloc du fichier (commente) place `setImmediate` et `setTimeout(..., 0)` a l'interieur
d'un callback I/O (`fs.readFile`). Demande au candidat pourquoi, dans ce contexte,
`setImmediate` s'execute **avant** `setTimeout`.
