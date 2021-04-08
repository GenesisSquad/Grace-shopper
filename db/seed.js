const {client} = require('./client');
const { createProduct } = require('./product');
const { createUser } = require('./users');

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
            price TEXT NOT NULL,
            "imageURL" TEXT NOT NULL,
            "inStock" BOOLEAN DEFAULT false,
            category TEXT NOT NULL
        );
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            "firstName" VARCHAR(255) NOT NULL,
            "lastName" VARCHAR(255) NOT NULL,
            email TEXT UNIQUE NOT NULL,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            "isAdmin" BOOLEAN DEFAULT false
        );
        CREATE TABLE orders(
            id SERIAL PRIMARY KEY,
            status TEXT DEFAULT 'created',
            "userId" INTEGER REFERENCES users(id) NOT NULL,
            price TEXT NOT NULL,
            "datePlaced" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE order_products(
            id SERIAL PRIMARY KEY,
            "productId" INTEGER REFERENCES products(id) NOT NULL,
            "orderId" INTEGER REFERENCES orders(id) NOT NULL,
            price TEXT NOT NULL,
            quantity INTEGER NOT NULL
        );
        `)
      console.log('tables created!');

    } catch (error) {
        console.log('error creating tables');
        console.error(error);
    }
}

const products = [
  {
    inStock:true,
    name: "joe",
    description: "GREAT COFFEE!",
    category: "TEA",
    price: "$22",
    imageURL:
      "https://images.squarespace-cdn.com/content/v1/57b7c57b44024338a6700bdf/1588704248137-5U0TCBQRZCKTVVLM8QUO/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/IMG_3607.jpg",
  },
  {
    inStock:true,
    name: "capuccino",
    description: "veri foami",
    category: "COFFEE",
    price: "$332",
    imageURL:
      "https://lh3.googleusercontent.com/proxy/-uZn48p7J5spc9gPvseJNWKbZ5O9-Xgg2hOXzbUeTKtso9pssqSsRzLrXGl82PLRzFfjiqB1s1qQK-5Vtj-SSKU1oJaHF5nABVRGHg4C4L1k74WSAvf8R7W0SOx09pnoX0eW",
  },
  {
    inStock:false,
    name: "mega tea",
    description: "Tea imported from Japan",
    category: "TEA",
    price: "$42",
    imageURL:
      "https://www.hellomagazine.com/imagenes/healthandbeauty/2020010982936/drinking-tea-makes-you-life-longer/0-399-751/tea-bag-z.jpg?ezimgfmt=rs:363x242/rscb5/ng:webp/ngcb5",
  },
  {
    inStock:true,
    name: "Nick's Dunkin Donuts Brew",
    description: "Nick's interpretation of DUnkin Donuts Coffee",
    category: "Coffee",
    price: "$4",
    imageURL:
      "https://www.mercurynews.com/wp-content/uploads/2020/08/SJM-L-DUNKINDONUTS-0812.jpg?",
  },
];
const users = [
  {
  firstName:'jasper',
  lastName:'m',
  email:'jaspermesebrink@gmail.com',
  username:'jasperTest',
  password:'12345678',
  isAdmin:true
},
{
  firstName:'eddie',
  lastName:'J',
  email:'testemail@gmail.com',
  username:'eddieusername',
  password:'12345678',
},{
  firstName:'Juno',
  lastName:'C',
  email:'Junoemail@gmail.com',
  username:'Junousername',
  password:'12345678',
},{
  firstName:'Nick',
  lastName:'S',
  email:'Nickemail@gmail.com',
  username:'nickusername',
  password:'12345678',
},
]
const insertUsers = async () => {
  try {
    await Promise.all(users.map(createUser))
  } catch (error) {
    console.error(error);
  }
}

const insertProducts = async() => {
  try {
    await Promise.all(products.map(createProduct))
  } catch (error) {
    console.error(error);
  }
}

async function rebuildDB() {
    try {
      // await client.connect();
      await dropTables();
      await buildTables();
      console.log('creating users...');
      await insertUsers();
      console.log('finished creating users...');
      console.log('creating products...');
      await insertProducts();
      console.log('finished creating products...');

    } catch (error) {
      throw error;
    }
}

module.exports = {
  rebuildDB
}