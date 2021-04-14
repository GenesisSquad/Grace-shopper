const { client } = require("./client");
const { createProduct } = require("./product");
const { createUser } = require("./users");
const { createOrder } = require("./orders");

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
//https://www.marketsatshrewsbury.com/wp-content/uploads/2019/02/andrea-tummons-448852-unsplash-1024x683.jpg
//
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
            "inStock" BOOLEAN DEFAULT false,
            category TEXT NOT NULL
        );
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            "firstName" VARCHAR(255) NOT NULL,
            "lastName" VARCHAR(255) NOT NULL,
            email TEXT UNIQUE NOT NULL,
            username TEXT UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            "isAdmin" BOOLEAN DEFAULT false
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

const products = [
  {
    inStock: true,
    name: "joe",
    description: "GREAT COFFEE!",
    category: "COFFEE",
    price: "$22",
    imageURL:
      "https://images.squarespace-cdn.com/content/v1/57b7c57b44024338a6700bdf/1588704248137-5U0TCBQRZCKTVVLM8QUO/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/IMG_3607.jpg",
  },
  {
    inStock: true,
    name: "capuccino",
    description: "veri foami",
    category: "COFFEE",
    price: "$332",
    imageURL:
      "https://i.ndtvimg.com/i/2016-05/coffee-625_625x350_41463660832.jpg",
  },
  {
    inStock: false,
    name: "mega tea",
    description: "Tea imported from Japan",
    category: "TEA",
    price: "$42",
    imageURL:
      "https://www.hellomagazine.com/imagenes/healthandbeauty/2020010982936/drinking-tea-makes-you-life-longer/0-399-751/tea-bag-z.jpg?ezimgfmt=rs:363x242/rscb5/ng:webp/ngcb5",
  },
  {
    inStock: true,
    name: "Nick's DD Brew",
    description: "Nick's interpretation of DUnkin Donuts Coffee",
    category: "COFFEE",
    price: "$4",
    imageURL:
      "https://topsecretrecipes.com/images/product/dunkin-donuts-coolatta-copycat-recipe.jpg",
  },
  {
    inStock: true,
    name: "Bella London Fog",
    description: "Delicious blend of Earl Grey tea with sultry oat milk foam. Notes of lavender and vanilla.",
    category: "TEA",
    price: "$1200",
    imageURL:
      "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/london-fog-tea-latte.jpg",
  },
  {
    inStock: true,
    name: "Capuccino 2.0",
    description: "Delicious foamy cofi",
    category: "Coffee",
    price: "$23",
    imageURL:
      "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/cappuccino-2029-e80b7c6d318c7862df2c4c8623a11f99@1x.jpg",
  },
  {
    inStock: true,
    name: "Juno's Morning Tea",
    description: "A delicious green tea made from the leaves of Juno's hedge",
    category: "TEA",
    price: "$900",
    imageURL:
      "https://cdn.vox-cdn.com/thumbor/_bow8R4lJX0KrCxxvQZ9bDfve-8=/44x0:755x533/1200x800/filters:focal(44x0:755x533)/cdn.vox-cdn.com/uploads/chorus_image/image/46335946/_MG_0202.0.0.0.jpg",
  },
  {
    inStock: true,
    name: "joe",
    description: "GREAT COFFEE!",
    category: "COFFEE",
    price: "$22",
    imageURL:
      "https://images.squarespace-cdn.com/content/v1/57b7c57b44024338a6700bdf/1588704248137-5U0TCBQRZCKTVVLM8QUO/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/IMG_3607.jpg",
  },
  {
    inStock: true,
    name: "joe",
    description: "GREAT COFFEE!",
    category: "TEA",
    price: "$22",
    imageURL:
      "https://images.squarespace-cdn.com/content/v1/57b7c57b44024338a6700bdf/1588704248137-5U0TCBQRZCKTVVLM8QUO/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/IMG_3607.jpg",
  },
  {
    inStock: true,
    name: "Juno's Morning Tea",
    description: "A delicious green tea made from the leaves of Juno's hedge",
    category: "TEA",
    price: "$900",
    imageURL:
      "https://cdn.vox-cdn.com/thumbor/_bow8R4lJX0KrCxxvQZ9bDfve-8=/44x0:755x533/1200x800/filters:focal(44x0:755x533)/cdn.vox-cdn.com/uploads/chorus_image/image/46335946/_MG_0202.0.0.0.jpg",
  },
  {
    inStock: true,
    name: "capuccino",
    description: "veri foami",
    category: "COFFEE",
    price: "$332",
    imageURL:
      "https://i.ndtvimg.com/i/2016-05/coffee-625_625x350_41463660832.jpg",
  },
  {
    inStock: false,
    name: "mega tea",
    description: "Tea imported from Japan",
    category: "TEA",
    price: "$42",
    imageURL:
      "https://www.hellomagazine.com/imagenes/healthandbeauty/2020010982936/drinking-tea-makes-you-life-longer/0-399-751/tea-bag-z.jpg?ezimgfmt=rs:363x242/rscb5/ng:webp/ngcb5",
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
    userId: 4,
  },
  {
    status: "created",
    userId: 4,
  },
  {
    status: "created",
    userId: 3,
  },
  {
    status: "created",
    userId: 2,
  },
  {
    status: "created",
    userId: 1,
  },
];

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
    // await client.connect();
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
  } catch (error) {
    throw error;
  }
}

module.exports = {
  rebuildDB,
};
