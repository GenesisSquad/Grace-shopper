const { client } = require("./client");
const { createProduct } = require("./product");
const { createUser } = require("./users");
const { createOrder } = require("./orders");
const { createOrder_product } = require("./order_products");
async function dropTables() {
	try {
		console.log("Starting to drop tables...");

		await client.query(`
        DROP TABLE IF EXISTS order_products;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS products;
      `);

		console.log("Finished dropping tables!");
	} catch (error) {
		console.error("Error while dropping tables!");

		throw error;
	}
}
const buildTables = async () => {
	try {
		console.log("creating tables...");
		await client.query(`
        
    CREATE TABLE products(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      price TEXT NOT NULL,
      "imageURL" TEXT NOT NULL,
      "inStock" BOOLEAN DEFAULT FALSE,
      category TEXT NOT NULL
      );
        CREATE TABLE users(
          id SERIAL PRIMARY KEY,
          "firstName" VARCHAR(255) NOT NULL,
          "lastName" VARCHAR(255) NOT NULL,
          email TEXT UNIQUE NOT NULL,
          username TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          "isAdmin" BOOLEAN DEFAULT FALSE
        );
      CREATE TABLE orders(
          id SERIAL PRIMARY KEY,
          status TEXT DEFAULT 'created',
          "userId" INTEGER REFERENCES users(id) NOT NULL,                     
          "datePlaced" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE order_products(
          id SERIAL PRIMARY KEY,
          "productId" INTEGER REFERENCES products(id) NOT NULL,
          "orderId" INTEGER REFERENCES orders(id) NOT NULL,
          price TEXT NOT NULL,
          quantity INTEGER NOT NULL
      );
       
        `);
		console.log("tables created!");
	} catch (error) {
		console.log("error creating tables");
		console.error(error);
	}
};

const order_products = [
	{
		productId: 2,
		orderId: 2,
		price: "$4",
		quantity: 1,
	},
	{
		productId: 4,
		orderId: 2,
		price: "$8",
		quantity: 2,
	},
	{
		productId: 3,
		orderId: 1,
		price: "$3",
		quantity: 3,
	},
	{
		productId: 10,
		orderId: 1,
		price: "$10",
		quantity: 4,
	},
	{
		productId: 9,
		orderId: 3,
		price: "$27",
		quantity: 5,
	},
	{
		productId: 5,
		orderId: 3,
		price: "$15",
		quantity: 6,
	},
];

const products = [
	{
		inStock: true,
		name: "Devil's Delight",
		description:
			"Rhino Coffee's very own dark roast with highest octane of caffeine you can find on the market.  Drink at your own risk! | 16oz",
		category: "COFFEE",
		price: "$49",
		imageURL: "https://i.postimg.cc/hvrVMQ4x/coffee-bag-2-red.png",
	},
	{
		inStock: true,
		name: "Rhino's Horn",
		description: "Egypt's finest dark roast | 16oz",
		category: "COFFEE",
		price: "$45",
		imageURL: "https://i.postimg.cc/DyxqXGM3/coffee-bag-5.png",
	},
	{
		inStock: false,
		name: "Purple Nurple",
		description:
			"Medium roast coffee with hints of Lavender for a smooth soothing taste. | 16oz",
		category: "COFFEE",
		price: "$42",
		imageURL: "https://i.postimg.cc/DwswTksp/coffee-bag-2-purple.png",
	},
	{
		inStock: true,
		name: "Jasper's Tropical Paradise",
		description:
			"Light roast delivers a rich flavor with mild fruit notes with an all day drinkability. | 16oz",
		category: "COFFEE",
		price: "$42",
		imageURL: "https://i.postimg.cc/J7krJCYr/coffee-bag-3-orange.png",
	},
	{
		inStock: true,
		name: "Sumatra Dark",
		description:
			"Surprisingly smooth dark roast that makes for a great picker-upper. | 16oz",
		category: "COFFEE",
		price: "$40",
		imageURL: "https://i.postimg.cc/T3Yvtz0W/coffee-bag-4.png",
	},
	{
		inStock: true,
		name: "Nick's Cappuccino 2.0",
		description: "Delicious foamy cup every time. | 16oz",
		category: "COFFEE",
		price: "$46",
		imageURL: "https://i.postimg.cc/bJvG8VqG/coffee-bag-3-blue.png",
	},
	{
		inStock: true,
		name: "El Padrino",
		description:
			"A Colombian coffee from the region (Spanish: Eje Cafetero), also known as the Coffee Triangle. | 8oz",
		category: "COFFEE",
		price: "$26",
		imageURL: "https://i.postimg.cc/hvtGW2RC/coffee-bag-1-mustard.png",
	},
	{
		inStock: true,
		name: "The Dark Side",
		description:
			"Columbia's best Arabica beans are roasted to perfection. | 8oz",
		category: "COFFEE",
		price: "$24",
		imageURL: "https://i.postimg.cc/W1Hg9JgL/coffee-bag-1-black.png",
	},
	{
		inStock: true,
		name: "Ride the Rhino",
		description:
			"This is a special limited blend that really kick's like a Rhino! | 8oz",
		category: "TEA",
		price: "$28",
		imageURL: "https://i.postimg.cc/sg7sLkZj/coffee-bag-1.png",
	},
	{
		inStock: true,
		name: "Ya'mon",
		description:
			"Jamaican Blue Mountain Coffee, 100% Pure, Whole Bean, Fresh Roasted. | 8oz",
		category: "COFFEE",
		price: "$20",
		imageURL: "https://i.postimg.cc/9QhQcX2R/coffee-bag-1-lightblue.gif",
	},
	{
		inStock: true,
		name: "Peruvian Gold Tea",
		description:
			"We struck gold with this full-bodied, high-quality golden tips tea (Black Tea) with caramel and brown sugar aromas. | 8oz",
		category: "TEA",
		price: "$24",
		imageURL: "https://i.postimg.cc/ZqjRfG19/tea-tin-1-tan.png",
	},
	{
		inStock: false,
		name: "Lavender Love Tea",
		description:
			"Purple buds of the Lavandula angustifolia. This tea is is great to calm nerves, lead to better sleep, improve skin health, and provide many other health benefits. | 2.67 Ounces, 30 Sachets",
		category: "TEA",
		price: "$18",
		imageURL: "https://i.postimg.cc/v84rVhV7/tea-tin-1-purple.png",
	},
	{
		inStock: true,
		name: "Rhino Matcha Green Tea",
		description:
			"Ceremonial Grade Matcha Green Tea Powder, antioxidants, energy, & amino acids. Premium, First Harvest from Kagoshima, Japan | 2.67 Ounces, 30 Sachets",
		category: "TEA",
		price: "$19",
		imageURL: "https://i.postimg.cc/t4NWjmKb/tea-tin-1-green.png",
	},
	{
		inStock: true,
		name: "Jasper's Realitea",
		description:
			"Delicious blend of Earl Grey tea with sultry oat milk foam. Notes of lavender and vanilla. | 2.67 Ounces, 30 Sachets",
		category: "TEA",
		price: "$12",
		imageURL: "https://i.postimg.cc/bJtvzZZn/tea-tin-1-grey.png",
	},
	{
		inStock: true,
		name: "Lady's Love Tea",
		description:
			"Damiana Tea: Made from the Aphrodite root for stimulation with instant effects. This is one herb that can work wonders! | 2.67 Ounces, 30 Sachets",
		category: "TEA",
		price: "$25",
		imageURL: "https://i.postimg.cc/rpvrCXWS/tea-tin-1-pink.png",
	},
];
const users = [
	{
		firstName: "jasper",
		lastName: "m",
		email: "jaspermesebrink@gmail.com",
		username: "jasperTest",
		password: "12345678",
		isAdmin: true,
	},
	{
		firstName: "eddie",
		lastName: "J",
		email: "testemail@gmail.com",
		username: "eddieusername",
		password: "12345678",
	},
	{
		firstName: "Juno",
		lastName: "C",
		email: "Junoemail@gmail.com",
		username: "Junousername",
		password: "12345678",
	},
	{
		firstName: "Nick",
		lastName: "S",
		email: "Nickemail@gmail.com",
		username: "nickusername",
		password: "12345678",
	},
];

const orders = [
	{
		status: "created",
		userId: 1,
	},
	{
		status: "created",
		userId: 2,
	},
	{
		status: "created",
		userId: 3,
	},
	{
		status: "created",
		userId: 4,
	},
	{
		status: "closed",
		userId: 1,
	},
];

const insertOrder_products = async () => {
	try {
		await Promise.all(order_products.map(createOrder_product));
	} catch (error) {
		console.error(error);
	}
};

const insertUsers = async () => {
	try {
		await Promise.all(users.map(createUser));
	} catch (error) {
		console.error(error);
	}
};

const insertProducts = async () => {
	try {
		await Promise.all(products.map(createProduct));
	} catch (error) {
		console.error(error);
	}
};

const insertOrders = async () => {
	try {
		await Promise.all(orders.map(createOrder));
	} catch (error) {
		console.error(error);
	}
};

async function rebuildDB() {
	try {
		client.connect();
		await dropTables();
		await buildTables();
		console.log("creating users...");
		await insertUsers();
		console.log("finished creating users...");
		console.log("creating products...");
		await insertProducts();
		console.log("finished creating products...");
		console.log("creating orders...");
		await insertOrders();
		console.log("finished creating orders...");
		console.log("creating order_products...");
		await insertOrder_products();
		console.log("finished order_products...");
	} catch (error) {
		throw error;
	}
}

rebuildDB()
	.catch(console.error)
	.finally(() => client.end);
