require("dotenv").config;
const { PORT = 3000 } = process.env;
const express = require("express");
const server = express();
const morgan = require("morgan");
server.use(morgan("dev"));
server.use(express.static("public"));
const axios = require("axios");
const bodyParser = require("body-parser");
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use("/products", productsRouter);

server.use('*', (req, res, next) => {
  res.status(404);
  res.send({ error: "Client sent an invalid request." });
});

server.use((error, req, res, next) => {
    res.status(500);
    res.send({ error: "Server failed to fulfill valid request." });
});

server.listen(PORT, () => {
  console.log("Port listening...");
});

