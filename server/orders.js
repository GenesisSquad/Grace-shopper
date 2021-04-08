const express = require("express");
const ordersRouter = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { requireAdmin } = require("./admin");
const { requireUser } = require("./utils");


//Admin is user
ordersRouter.get("/orders", requireAdmin, async (req, res, next) => {
    try {
        return res.send(await getAllOrders());  //not getAllOrders
    } catch (error) {
        console.error(error);
    }
});

// logged in user
// status="created" should be used
ordersRouter.get("/orders/cart", requireUser, async (req, res, next) => {
    try {
        return res.send(await getCartByUser());
    } catch (error) {
        console.error(error);
    }
});

// logged in user
ordersRouter.post("/orders", requireUser, async (req, res, next) => {
    try {
        return res.send(await createOrder());
    } catch (error) {
        console.error(error);
    }
});

//logged in user and owner of object
ordersRouter.get("/users/:userId/orders", async (req, res, next) => {
    try {
        return res.send(await getCartByUser());
    } catch (error) {
        console.error(error);
    }
});

module.exports = { ordersRouter };