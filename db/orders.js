const { client } = require("./client");

// return the order, include the order's products
const getOrderById = async (id) => {
	try {
		const { rows: order } = await client.query(
			`
            SELECT *
            FROM orders
            WHERE id = $1;
        `,
			[id]
		);

		const { rows: products } = await client.query(
			`
            SELECT *
            FROM products
            JOIN order_products ON order_products."productId" = product.id
            WHERE order_products."orderId" = $1;
        `,
			[order.id]
		);

		console.log("order.products", order.products);
		return (order.products = products);
	} catch (error) {
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
            console.log('i:',i, 'acc: ',acc);
			const a = acc.findIndex((o)=>o.id===obj.orderId)
			console.log('a:',a);
			if (a !== -1) {
				console.log('55');
				const c = products.filter((p) => p.id === obj.productId)[0]
				c.quantity = obj.quantity;
				
				acc[a].products.push(
					c
				);
			} else {
				console.log('60');
				const b = orders.filter((o) => o.id === obj.orderId)[0];
				console.log('b:',b);
				const c = products.filter((p) => p.id === obj.productId)
				c[0].quantity = obj.quantity;
				b.products = c
				acc.push(b)
			}
			return acc;
		}, []);
        return res;
		// const allOrders.filter((orders) => orders.productId === getOrderById(id);
	} catch (error) {
		console.error(error);
	}
};

// // select and return an array of orders made by user, include their products
// const getOrdersByUser = async({ id }) => {
//     try {
//         // const {rows: [orders] } = await client.query(`
//         // SELECT *
//         // FROM orders
//         // WHERE id = $1;
//         // `,[id]);
//         const allOrders = await getAllOrders();
//         console.log("allOrders", allOrders);
//         return allOrders.filter((orders) => orders.userId === id)

//     } catch (error) {
//         console.error(error);
//     }
// }

// // select and return an array of orders which have a specific productId
// // in their order_products join, include their products
// const getOrdersByProduct = async({ id }) => {
//     try {
//         // const {rows: [orders] } = await client.query(`
//         // SELECT *
//         // FROM orders
//         // WHERE "productId" = $1
//         // LEFT JOIN orders ON orders_products;
//         // `,[id]);
//         const allOrders = await getAllOrders();
//         return allOrders.filter((orders) => orders.productId === getOrderById(id)
//         );

//     } catch (error) {
//         console.error(error);
//     }
// }

//or getCartByUser(user)
// select one user's order (look up by orders."userId")
// ...an order that that has status = created
// return the order, include the order's products
// const getCartByUser = async({ id }) => {

// }

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

		console.log(order);
		return order;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	getOrderById,
	getAllOrders,
	// getOrdersByUser,
	// getOrdersByProduct,
	// getCartByUser,
	createOrder,
};
