
// firebase emulators:start   Command for running Server-
// firebase deploy --only functions  This used for deploying these functions only not whole website

const functions = require('firebase-functions');
const Express=require("express");
const Cors=require("cors");
require("dotenv").config();
const Stripe=require("stripe")(process.env.STRIPE_SECRET_KEY);

const App=Express();

App.use(Cors({origin:true}));
App.use(Express.json());

App.post("/payments/create",async (req,res)=>{
    const total=req.query.total;
    const paymentIntent=await Stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    });
    res.status(201).send({
        clientSecrete:paymentIntent.client_secret
    });
})

exports.api=functions.https.onRequest(App);

