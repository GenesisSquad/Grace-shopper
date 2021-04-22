const { client } = require("./client");
const { getOrderById, createOrder } = require("./orders");
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

const getOrderProductsByProductId = async (productId) => {
    try {
        const {rows} = await client.query(`
        SELECT order_products.id,"productId","orderId",quantity,status,"datePlaced","userId" FROM order_products 
        JOIN orders ON orders.id = order_products."orderId"
        WHERE order_products."productId" = $1;
        `,[productId])
        console.log("rows:",rows);
        return rows; 
    } catch (error) {
        console.error(error);
    }
}

const addProductToOrder = async ({orderId,productId,price,quantity}) => {
    const order = await getOrderById(orderId);
    try {
        if(order && order.products){
            const product = order.products.filter(p=>p.id===productId)[0] 
            if(product && product.id){
                return await updateOrderProduct(order.id,{price,quantity})
            } else {
               return await createOrder_product({orderId,productId,price,quantity})
            }
        } else {
            const {id:userId} = order;
            const newOrder = await createOrder({status:'created',userId});
            return await createOrder_product({orderId:newOrder.id,productId,price,quantity})
        }
    } catch (error) {
        console.error(error);
    }
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

const updateOrderProduct = async(id,{quantity}) => {
    try {    
        const {rows:[orderProduct]} = await client.query(`
        UPDATE order_products 
        SET quantity=$1
        WHERE id = ${id}
        RETURNING *;
        `,[parseInt(quantity)])
        return orderProduct;
    } catch (error) {
        console.error(error);
    }
}

const destroyOrderProduct = async (id) => {
    try {
        const {rows:[orderProduct]} = await client.query(`
        DELETE FROM order_products WHERE id = ${id} RETURNING *;
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
    getOrderProductsByProductId,
}