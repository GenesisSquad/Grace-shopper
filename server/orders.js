const express = require("express");
const ordersRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { requireUser } = require("./utils");
const { 
    getAllOrders,
    //  getOrdersByUser, 
    //  getCartByUser, 
    //  createOrder 
    } = require("../db")
const { JWT_SECRET } = process.env;
// const { requireAdmin } = require("./admin");

//Admin is user
ordersRouter.get("/", 
// requireAdmin, 
async (req, res, next) => {
    try {
        // const { admin } = req;
        // if(!admin) return res.status(400).send("Not an admin!");
        return res.send(await getAllOrders());

    } catch (error) {
        console.error(error);
    }
});

// logged in user
// status="created" should be returned
// ordersRouter.get("/cart", requireUser, async (req, res, next) => {
//     try {
//         const { user } = req;
//         if (!user) return res.status(400).send("Please log in.")
//         return res.send(await getOrdersByUser());

//     } catch (error) {
//         console.error(error);
//     }
// });

// logged in user
// should initially be status ="created"
// ordersRouter.post("/", requireUser, async (req, res, next) => {
//     try {
//         const { user } = req;
//         if (!user) return res.status(400).send("Please log in.")
//         return res.send(await createOrder());

//     } catch (error) {
//         console.error(error);
//     }
// });

module.exports = { ordersRouter };