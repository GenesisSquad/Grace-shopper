const express = require("express");
const orderProductsRouter = express.Router();
require("dotenv").config();
const { requireUser } = require("./utils");
const {
	updateOrderProduct,
	destroyOrderProduct,
	getOrderProductsByProductId,
} = require("../db/order_products");

orderProductsRouter.get("/:productId", requireUser, async (req, res, next) => {
	try {
		const { productId } = req.params;
		const data = await getOrderProductsByProductId(productId);
		console.log("orders:", data);
		res.send(data);
	} catch (error) {
		next({ error });
		console.error(error);
	}
});

orderProductsRouter.patch(
	"/:orderProductId",
	requireUser,
	async (req, res, next) => {
		try {
			const { orderProductId } = req.params;
			const { product } = req.body;
			console.log("product:", product);
			console.log("orderProductId:", orderProductId);

			const data = await updateOrderProduct(orderProductId, product);
			res.send(data);
		} catch (error) {
			next({ error });
			console.error(error);
		}
	}
);

orderProductsRouter.delete(
	"/:orderProductId",
	requireUser,
	async (req, res, next) => {
		try {
			const { orderProductId } = req.params;
			const data = await destroyOrderProduct(orderProductId);
			res.send(data);
		} catch (error) {
			next({ error });
			console.error(error);
		}
	}
);

module.exports = { orderProductsRouter };
