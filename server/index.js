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

server.listen(PORT, () => {
  console.log("Port listening...");
});
