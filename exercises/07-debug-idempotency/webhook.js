// Exercice 7 - DEBUG (sans IA) : handler de webhook Stripe "genere".
// Le code parait correct mais contient des defauts. Les trouver et les expliquer.

const db = { balance: 0 };
const processed = new Set(); // evenements deja traites

// Credit "atomique" cote base (equivaut a UPDATE ... amount = amount + x),
// mais asynchrone : il y a un await avant l'effet.
async function creditBalance(amount) {
  await new Promise((r) => setTimeout(r, 10));
  db.balance += amount;
}

// Handler appele par Express a la reception d'un webhook Stripe.
async function handleStripeWebhook(req, res) {
  const event = req.body; // { id, type, data: { amount } }

  if (processed.has(event.id)) {
    return res.status(200).send("already processed");
  }

  if (event.type === "payment_intent.succeeded") {
    await creditBalance(event.data.amount);
    processed.add(event.id); // marque APRES l'await, donc trop tard
  }

  res.status(200).send("ok");
}

// Demonstration du double credit (livraison concurrente du meme event)
async function demo() {
  const event = { id: "evt_1", type: "payment_intent.succeeded", data: { amount: 100 } };
  const fakeRes = () => ({ status: () => ({ send: () => {} }) });

  await Promise.all([
    handleStripeWebhook({ body: event }, fakeRes()),
    handleStripeWebhook({ body: event }, fakeRes()),
  ]);

  console.log("Solde:", db.balance, "/ attendu 100 si idempotent, ici 200 = double credit");
}

demo();

export { handleStripeWebhook };
