const { client } = require("./client");

// return the order, include the order's products
const getOrderById = async (id) => {
	try {
		const orders = await getAllOrders();
		return orders.filter(o=>o.id===parseInt(id))[0]
	}catch(error){
		console.error(error);
	}
};

// select and return an array of orders, include their products
const getAllOrders = async () => {
	try {
		const { rows: orders } = await client.query(`
            SELECT *
            FROM orders;
        `);

		const { rows: products } = await client.query(`
            SELECT *
            FROM products;
        `);

		const { rows: order_products } = await client.query(`
            SELECT *
            FROM order_products;            
        `);
		const res = order_products.reduce((acc, obj, i) => {
			const a = acc.findIndex((o) => o.id === obj.orderId);

			if (a !== -1) {
				const c = products.filter((p) => p.id === obj.productId)[0];
				c.quantity = obj.quantity;

				acc[a].products.push(c);
			} else {
				const b = orders.filter((o) => o.id === obj.orderId)[0];

				const c = products.filter((p) => p.id === obj.productId);
				c[0].quantity = obj.quantity;
				b.products = c;
				acc.push(b);
			}
			return acc;
		}, []);
		return res;
	} catch (error) {
		console.error(error);
	}
};

// // select and return an array of orders made by user, include their products
const getOrdersByUser = async ({ id }) => {
	try {
		const orders = await getAllOrders();
		return orders.filter((o) => o.userId === id);
	} catch (error) {
		console.error(error);
	}
};

const getCartByUser = async ({ id }) => {
	const orders = await getAllOrders();
	const cart = orders.filter(
		({ userId, status }) => id === userId && status === "created"
	)[0];
	if (cart) {
		return cart;
	} else {
		const res = await createOrder({ status: "created", userId: id });
		res.products = [];
		return res;
	}
};

//create and return the new order
const createOrder = async ({ status, userId }) => {
	try {
		const {
			rows: [order],
		} = await client.query(
			`
        INSERT INTO orders(status, "userId")
        VALUES($1, $2)
        RETURNING *;
        `,
			[status, userId]
		);

		return order;
	} catch (error) {
		console.error(error);
	}
};

const updateOrder = async (id, fields) => {
	try {
		const setString = Object.keys(fields)
			.map((key, index) => `"${key}"=$${index + 1}`)
			.join(", ");
		if (setString.length === 0) {
			return;
		}
		const {
			rows: [order],
		} = await client.query(`
		UPDATE orders SET ${setString} WHERE id = ${id} RETURNING *;
		`);
		return order;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	updateOrder,
	getOrderById,
	getAllOrders,
	getOrdersByUser,
	getCartByUser,
	createOrder,
};
