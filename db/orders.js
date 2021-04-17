const { client } = require("./client");
// const { getAllProducts } = require("./product");

// return the order, include the order's products
const getOrderById = async (id) => {
	try {
		const orders = await getAllOrders();
		return orders.filter(o=>o.id===id)
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
            // console.log('i:',i, 'acc: ',acc);
			const a = acc.findIndex((o)=>o.id===obj.orderId)
			// console.log('a:',a);
			if (a !== -1) {
				// console.log('55');
				const c = products.filter((p) => p.id === obj.productId)[0]
				c.quantity = obj.quantity;
				
				acc[a].products.push(
					c
				);
			} else {
				// console.log('60');
				const b = orders.filter((o) => o.id === obj.orderId)[0];
				// console.log('b:',b);
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
const getOrdersByUser = async({ id }) => {
    try {
		const orders = await getAllOrders();
		return orders.filter(o=>o.userId===id)
    } catch (error) {
        console.error(error);
    }
}

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
const getCartByUser = async({ id }) => {
	const orders = await getAllOrders();
	const cart = orders.filter(({userId,status})=>id===userId && status==='created')[0]
	if( cart && cart.products ){
		return cart;
	} else {
		const res = await createOrder({status:'created',userId:id})
		res.products = [];
		return res;
	}
}

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

const updateOrder = async(id,fields) => {
	try {
		const setString = Object.keys(fields)
		.map((key, index) => `"${key}"=$${index + 1}`)
		.join(", ");
        if (setString.length === 0) {
            return;
        }
		const {rows:[order]} = await client.query(`
		UPDATE orders SET ${setString} WHERE id = ${id} RETURNING *;
		`) 
		return order;
	} catch (error) {
		console.error(error);
	}
}

module.exports = {
	updateOrder,
	getOrderById,
	getAllOrders,
	getOrdersByUser,
	// getOrdersByProduct,
	getCartByUser,
	createOrder,
};
