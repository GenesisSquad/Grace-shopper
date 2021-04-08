require("dotenv").config();
const { PORT = 3001 } = process.env;
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const bodyParser = require("body-parser");
var cors = require('cors')
const jwt = require('jsonwebtoken');
// all required node_modules go ^

const { usersRouter } = require("./users");
const { productsRouter } = require("./products");
const {client, getUserById} = require('../db');

// all required locally made files go ^

const { JWT_SECRET } = process.env;

const server = express();

client.connect();

server.use(morgan("dev"));
server.use(cors());
server.use("/",express.static("/build"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/health", (req, res, next) => {
	res.send({ message: "all is well" });
});

server.use(async (req, res, next) => {
	try {
		// console.log('middlewear is getting used');
		const prefix = "Bearer ";
		const auth = req.header("Authorization");
		if (!auth) {
			next();
		} else if (auth.startsWith(prefix)) {
			const token = auth.slice(prefix.length);

			try {
				const { id } = jwt.verify(token, JWT_SECRET);

				if (id) {
					req.user = await getUserById(id);
					next();
				} else {
					console.log("why is this happening?");
				}
			} catch (error) {
				next(error);
			}
		} else {
			next({
				name: "AuthorizationHeaderError",
				message: `Authorization token must start with ${prefix}`,
			});
		}
	} catch (error) {
		console.log("middlewear errorrrrrrr");
		console.error(error);
	}
});

// put the rest of the routers here \/

server.use("/api/products", productsRouter);
server.use("/api/users", usersRouter);


server.use('*', (req, res, next) => {
	res.status(404);
	res.send({ error: "Client sent an invalid request." });
});
  
server.use((error, req, res, next) => {
	res.status(500);
	res.send({ error: "Server failed to fulfill valid request." });
});
  

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
