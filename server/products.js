const express = require("express");
const productsRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { getAllProducts, getProductById } = require("../db");
const { JWT_SECRET } = process.env;

productsRouter.get("/products", async (req, res, next) => {
  try {
    return res.send(await getAllProducts());
  } catch (error) {
    console.error(error);
  }
});

productsRouter.get("/products/:productId", async (req, res, next) => {
  try {
    return res.send(await getProductById(req.params.productId));
  } catch (error) {
    console.error(error);
  }
});

// FOR ADMINS
// productsRouter.patch('/products/:productId', async(req, res, next) => {
//     try {
//         return res.send(await getProductsById());
//     } catch (error) {
//         console.error(error);
//     }
//     })

// productsRouter.delete('/products/:productId', async(req, res, next) => {
//     try {
//         return res.send(await getProductsById());
//     } catch (error) {
//         console.error(error);
//     }
//     })

// productsRouter.post('/products/:productId', async(req, res, next) => {
//     try {
//         return res.send(await getProductsById());
//     } catch (error) {
//         console.error(error);
//     }
//     })

module.exports = { productsRouter };
