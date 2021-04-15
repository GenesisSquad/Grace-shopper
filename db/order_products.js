const { client } = require("./client");
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

module.exports = {
    createOrder_product
}