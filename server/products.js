const express = require("express");
const productsRouter = express.Router();

require("dotenv").config();
const { requireAdmin } = require("./utils");
const { getAllProducts, getProductById } = require("../db");

productsRouter.get("/", async (req, res, next) => {
	try {
		return res.send(await getAllProducts());
	} catch (error) {
		console.error(error);
	}
});

productsRouter.get("/:productId", async (req, res, next) => {
	try {
		return res.send(await getProductById(req.params.productId));
	} catch (error) {
		console.error(error);
	}
});

// FOR ADMIN VVVVV
productsRouter.patch(
	"/products/:productId",
	requireAdmin,
	async (req, res, next) => {
		try {
			const { isAdmin } = req;
			if (!isAdmin) return res.status(400).send("Not an Admin!");
			return res.send(await getProductById());
		} catch (error) {
			console.error(error);
		}
	}
);

productsRouter.delete(
	"/products/:productId",
	requireAdmin,
	async (req, res, next) => {
		try {
			const { isAdmin } = req;
			if (!isAdmin) return res.status(400).send("Not an Admin!");
			return res.send(await getProductById());
		} catch (error) {
			console.error(error);
		}
	}
);

productsRouter.post(
	"/products/:productId",
	requireAdmin,
	async (req, res, next) => {
		try {
			const { isAdmin } = req;
			if (!isAdmin) return res.status(400).send("Not an Admin!");
			return res.send(await getProductById());
		} catch (error) {
			console.error(error);
		}
	}
);

module.exports = { productsRouter };
