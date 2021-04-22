const express = require("express");
const ordersRouter = express.Router();

require("dotenv").config();
const { requireUser } = require("./utils");
const { requireAdmin } = require("./utils");

const { getAllOrders, getCartByUser, createOrder } = require("../db");
const { addProductToOrder } = require("../db/order_products");

//Admin is user
ordersRouter.get("/", requireAdmin, async (req, res, next) => {
	try {
		const { isAdmin } = req;
		if (!isAdmin) return next({ message: "not an Admin" });
		return res.send(await getAllOrders());
	} catch (error) {
		console.error(error);
	}
});

// logged in user
// status="created" should be returned
ordersRouter.get("/cart", requireUser, async (req, res, next) => {
	try {
		const { user } = req;
		if (!user) return res.status(400).send("Please log in.");
		return res.send(await getCartByUser({ id: user.id }));
	} catch (error) {
		console.error(error);
	}
});

// logged in user
// should initially be status ="created"
ordersRouter.post("/", requireUser, async (req, res, next) => {
	try {
		const { user } = req;
		return res.send(await createOrder("created", user.id));
	} catch (error) {
		console.error(error);
	}
});

ordersRouter.post("/:orderId/products", requireUser, async (req, res, next) => {
	try {
		const { orderId } = req.params;
		const { product } = req.body;
		const data = await addProductToOrder({ ...product, orderId });
		res.send(data);
	} catch (error) {
		next({ error });
		console.error(error);
	}
});

module.exports = { ordersRouter };
