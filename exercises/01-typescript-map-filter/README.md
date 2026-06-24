# Exercice 1 — TypeScript : `map` / `filter` et type guards

**Durée :** ~8 min · **Difficulté :** Moyen

## Question (oral, avant le code)

1. Quelle différence entre `map` et `filter` du point de vue du **type de retour** ?
2. Qu'est-ce qu'un **type guard** (`x is T`) et pourquoi est-il nécessaire pour qu'un `filter` "rétrécisse" réellement le type ?

## Énoncé (code)

Dans `users.ts`, on a :

```ts
type User = { id: number; email?: string; age: number; active: boolean };
```

Écris en **une seule chaîne `filter().map()`** la liste des **emails en minuscules**
des utilisateurs **actifs** et **de plus de 18 ans**.

Contrainte : le résultat doit être typé `string[]` **sans `undefined`**, sans utiliser de cast `as`.

## Lancer

```bash
npx ts-node exercises/01-typescript-map-filter/users.ts
# ou
npx tsc exercises/01-typescript-map-filter/users.ts && node exercises/01-typescript-map-filter/users.js
```

## Variantes (si le candidat est à l'aise)

- Dédupliquer les emails.
- Regrouper les utilisateurs par tranche d'âge avec un `reduce` correctement typé.
