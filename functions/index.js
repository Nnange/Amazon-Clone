const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HVIQ5DHERTlqaM1CPLFd3iwg6tqh30LEEdRkpv8DcVWPQTIFrtKFSpp3rDtEIlcxL0YtTpRPWF9XrPP21mcDlMV00pLlt6Xa4"
);

// API

// - App config
const app = express();

//- Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payments Request received BOOM!! for this amount >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
  });

  // OK created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
}); 

// - Listen command
exports.api = functions.https.onRequest(app);
