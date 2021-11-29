const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51JxXKXLtsv2PBqJeNmGnlEiKJdAP8g3v0kCTcMsRRqBEU2iPXWgwkUzTB75Z0KiEHW8YdIWNu5mAj3X4ANf3CRvz00iH90Zat1'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello'));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment Request Received', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd'
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-abdf2/us-central1/api
