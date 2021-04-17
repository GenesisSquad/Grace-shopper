const express = require("express");
const ordersRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { requireUser } = require("./utils");
const { requireAdmin } = require("./utils");
const { JWT_SECRET } = process.env;
const { 
    getAllOrders,
     getCartByUser, 
     createOrder, 
    } = require("../db")


//Admin is user
ordersRouter.get("/", requireAdmin, async (req, res, next) => {
    try {
        const { isAdmin } = req;
        if(!isAdmin) return res.status(400).send("Not an Admin!");
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
        if (!user) return res.status(400).send("Please log in.")
        return res.send(await getCartByUser({id:user.id}));

    } catch (error) {
        console.error(error);
    }
});

// logged in user
// should initially be status ="created"
ordersRouter.post("/", requireUser, async (req, res, next) => {
    try {
        const { user } = req;
        if (!user) return res.status(400).send("Please log in.")
        return res.send(await createOrder('created',user.id));

    } catch (error) {
        console.error(error);
    }
});

module.exports = { ordersRouter };