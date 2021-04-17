const { client } = require("./client");
const { getOrderById } = require("./orders");
const createOrder_product = async ({orderId,productId,price,quantity}) => {
    try {
      
        const {rows:[order_product]} = await client.query(`
        INSERT INTO order_products("productId","orderId",price,quantity) VALUES($1,$2,$3,$4) RETURNING *;
        `,[productId,orderId,price,quantity])
        console.log(order_product);
        return order_product; 
    } catch (error) {
        console.error(error);
    }

}

const addProductToOrder = async ({orderId,productId,price,quantity}) => {
    const order = await getOrderById(orderId);
}
const getOrderProductById = async (id) => {
    try {
        const {rows:[orderProduct]} = await client.query(`
        SELECT * FROM order_products WHERE id = $1;
        `)
        return orderProduct;
    } catch (error) {
        console.error(error);
    }
}

const updateOrderProduct = async(id,fields) => {
    try {


        const setString = Object.keys(fields)
		.map((key, index) => `"${key}"=$${index + 1}`)
		.join(", ");
        if (setString.length === 0) {
            return;
        }
    
        const {rows:[orderProduct]} = await client.query(`
        UPDATE order_products 
        SET ${setString}
        WHERE id = ${id}
        RETURNING *;
        `,[Object.values(fields)])
        return orderProduct;
    } catch (error) {
        console.error(error);
    }
}

const destroyOrderProduct = async (id) => {
    try {
        const {rows:[orderProduct]} = await client.query(`
        DELETE order_products WHERE id = ${id} RETURNING *;
        `)
        return orderProduct;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    destroyOrderProduct,
    getOrderProductById,
    addProductToOrder,
    updateOrderProduct,
    createOrder_product,
}