const {client} = require('./client');

async function dropTables() {
    try {
      console.log('Starting to drop tables...');
      
      await client.query(`
        DROP TABLE IF EXISTS order_products;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS products;
      `);
  
      console.log('Finished dropping tables!');
    } catch (error) {
      console.error('Error while dropping tables!');
  
      throw error;
    }
  }
//https://www.marketsatshrewsbury.com/wp-content/uploads/2019/02/andrea-tummons-448852-unsplash-1024x683.jpg
//
const buildTables = async () => {
    try {
      console.log('creating tables...');
      await client.query(`
        CREATE TABLE products(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            price FLOAT NOT NULL,
            "imageURL" TEXT NOT NULL,
            "inStock" BOOLEAN DEFAULT false,
            category TEXT NOT NULL
        );
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            "firstName" VARCHAR(255) NOT NULL,
            "lastName" VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            "imageURL" TEXT NOT NULL,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            "isAdmin" BOOLEAN DEFAULT false
        );
        CREATE TABLE orders(
            id SERIAL PRIMARY KEY,
            status TEXT DEFAULT 'created',
            "userId" INTEGER REFERENCES users(id) NOT NULL,
            price FLOAT NOT NULL,
            "datePlaced" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE order_products(
            id SERIAL PRIMARY KEY,
            "productId" INTEGER REFERENCES products(id) NOT NULL,
            "orderId" INTEGER REFERENCES orders(id) NOT NULL,
            price FLOAT NOT NULL,
            quantity INTEGER NOT NULL
        );
        `)
      console.log('tables created!');

    } catch (error) {
        console.log('error creating tables');
        console.error(error);
    }
}
async function rebuildDB() {
    try {
      // await client.connect();
      await dropTables();
      await buildTables();
    } catch (error) {
      throw error;
    }
}

module.exports = {
  rebuildDB
}