const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripeRouter = express.Router();

stripeRouter.post("/pay", async (req, res, next) => {
	try {
		const charge = await stripe.charges.create(req.body);
		res.status(200).send({ success: charge });
	} catch (error) {
		res.status(500).send({ error });
	}
});

module.exports = { stripeRouter };
