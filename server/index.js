require("dotenv").config();
const { PORT = 3001 } = process.env;
const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const jwt = require("jsonwebtoken");
// all required node_modules go ^

const { usersRouter } = require("./users");
const { productsRouter } = require("./products");
const { ordersRouter } = require("./orders");
const { orderProductsRouter } = require("./orderProducts");

const { stripeRouter } = require("./stripe");
const { client, getUserById } = require("../db");

// all required locally made files go ^

const { JWT_SECRET } = process.env;

const server = express();

client.connect();

server.use(morgan("dev"));
server.use(cors());
server.use("/", express.static("build"));
server.use("/login", express.static("build"));
server.use("/register", express.static("build"));
server.use("/products", express.static("build"));
server.use("/about", express.static("build"));
server.use("/account", express.static("build"));
server.use("/orders/:orderId", express.static("build"));
server.use("/admin-create-product", express.static("build"));
server.use("/admin-update/:productId", express.static("build"));
server.use("/products/:productId", express.static("build"));
server.use("checkout", express.static("build"));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/health", (req, res, next) => {
	res.send({ message: "all is well" });
});

server.use(async (req, res, next) => {
	try {
		
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
		console.error(error);
	}
});

// put the rest of the routers here \/

server.use("/api/products", productsRouter);
server.use("/api/users", usersRouter);
server.use("/api/orders", ordersRouter);
server.use("/api/stripe", stripeRouter);
server.use("/api/order_products", orderProductsRouter);

// server.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// });

server.use("*", (req, res, next) => {
	res.status(404);
	res.send({ error: "Request not found." });
});

server.use((error, req, res, next) => {
	res.status(500);
	res.send({ error });
});

server.listen(PORT, () => {
	console.log(`listening on port ${PORT}...`);
});
