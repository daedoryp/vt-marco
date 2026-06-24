# Exercice 6 - TDD (cas concret, en direct)

**Duree :** ~8 min - **Difficulte :** Moyen -> Difficile

## Question (oral)

Donne ta **definition** du TDD et decris le cycle. Qu'est-ce qui le distingue de
"ecrire des tests" ?

## Enonce (code) - faire du TDD en direct

Regle metier :

> Lors d'un encaissement Stripe, le solde du client augmente du montant.
> Mais un meme evenement (meme `eventId`) ne doit crediter **qu'une seule fois** (idempotence).

Consigne : **ecris d'abord les tests** (`payment.test.js`, etape RED), explique ce que tu
attends, **puis seulement** l'implementation dans `payment.js` (etape GREEN), puis refactor.

```bash
node --test exercises/06-tdd-payment/payment.test.js
```

## Cas de test attendus

1. Credit nominal -> solde + montant.
2. Rejeu du **meme** `eventId` -> solde **inchange**.
3. Deux `eventId` differents -> deux credits.

## Variante plus difficile

"Le credit et l'enregistrement de l'evenement doivent etre atomiques" -> comment le **tester** ?
(test d'integration / transaction).
