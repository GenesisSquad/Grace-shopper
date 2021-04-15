// Front end APP.js file
// import react from "react";
import { Route } from "react-router-dom";
import { AccountForm, Product, Products, Home, About, User, Order } from "./pages";
import { useState, useEffect } from "react";
import { callApi } from "./api";
import { Header } from "./components";


const myorders = [
  {
    id: 1,
    status: "completed",
    quantity: 22,
    total: "$4",
    products : [
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
      }
    ]
  },
  {
    id: 2,
    status: "in progress",
    quantity: 2,
    total: "$33",
    products :[
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
    ]
  },
  {
    id: 3,
    status: "canceled",
    quantity: 23,
    total: "$42",
    products: [
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
    ]
  },
];
const fetchCartData = async (token) => {
  const data = await callApi({
    url:'orders/cart',
    token
  })
  return data;
}
const fetchProducts = async () => {
  const data = await callApi({
    url: "products",
  });

  return data;
};
const fetchUserData = async (token) => {
  const data = await callApi({
    url: "users/me",
    token,
  });
  console.log("user data is:", data);
  return data;
};

const fetchUserOrders = async (userId, token) => {
  const data = await callApi({
    url: `users/${userId}/orders`,
    token,
  });
  console.log("This user's order's are:", data);
  return data;
};

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(localStorage.getItem("user"));
  const [cart, setCart] = useState(localStorage.getItem("cart"));
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const products = await fetchProducts();
        if (products) {
          setProducts(products);
          console.log("List of all products:", products);
        }

        if (token) {
          const user = await fetchUserData(token);
          localStorage.setItem("user", JSON.stringify(user));
          setUserData(user);
          const username = user.username;
          console.log("username is :", username);
          const {products:cart} = await fetchCartData(token);
          localStorage.setItem('cart',JSON.stringify(cart))
          setCart(cart);
          console.log('cart is:',cart);
          if (token && user) {
            setUserOrders(await fetchUserOrders(user.id, token));
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [token]);

  return (
    <>
      <Header
        products={products}
        userData={userData}
        setUserData={setUserData}
        cart={cart}
        setCart={setCart}
        token={token}
        setToken={setToken}
      />
      <Route exact path="/">
        <Home products={products} token={token} />
      </Route>
      <Route path="/login">
        <AccountForm action="login" setToken={setToken} />
      </Route>

      <Route path="/register">
        <AccountForm action="register" setToken={setToken} />
      </Route>
      <Route exact path="/products/:productId">
        <Product products={products} />
      </Route>

      <Route exact path="/products">
        <Products products={products} />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/account">
        <User userData={userData} token={token} myorders={myorders}
        // userOrders={userOrders} 
        />
      </Route>
      <Route exact path="/orders/:orderId">
        <Order myorders= {myorders}/>
      </Route>

    </>
  );
}

// const TestPage = () => {
//   return <div>WELCOME!</div>;
// };

export default App;
