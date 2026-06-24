# Exercice 7 — Debug sans IA (webhook Stripe)

**Durée :** ~7 min · **Difficulté :** Difficile · **Test révélateur de séniorité**

## Consigne

Le fichier `webhook.js` est un handler de webhook Stripe "généré", qui **paraît correct**.
Il contient **au moins deux défauts** liés à l'idempotence et à la concurrence.

**Sans IA, sans exécuter le code** : lis-le, trouve les bugs, explique-les à voix haute,
puis propose un correctif.

## Indices pour l'évaluateur (à ne pas montrer)

- Vérification de signature **absente** → le payload n'est pas authentifié.
- Le `check-then-act` (`if (processed.has(id)) ... else process`) n'est **pas atomique** :
  deux livraisons concurrentes du même événement passent toutes les deux le test.
- La déduplication et le crédit ne sont pas dans une **transaction** commune.
- Réponse `200` envoyée **avant** que l'effet métier soit committé.

## Lancer (optionnel, pour montrer le double crédit)

```bash
node exercises/07-debug-idempotency/webhook.js
```
