const {client} = require('./client');
const getProductById = async (id) => {
    try {const {rows:[product]} = await client.query(`
    SELECT * FROM products WHERE id=$1
    `,[id])
    return product;
    } catch(error) {
        console.error(error);
    }
}

const createProduct = async (fields) => {
    const {name, 
        description, 
        price, 
        imageURL, 
        inStock, 
        category} = fields;
    try {
        const {rows:[product]} = await client.query(`
        INSERT INTO products(name,description,price,"imageURL","inStock",category) VALUES($1,$2,$3,$4,$5,$6) RETURNING*;
        `,[name, description, price, imageURL, inStock, category]);
        console.log(product);
        return product;
    } catch (error) {
        console.error(error);   
    }

}

const getAllProducts = async () => {
    try {
        const {rows} = await client.query(`
        SELECT * FROM products;
        `)
        return rows;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
}