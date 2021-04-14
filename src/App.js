// Front end APP.js file
// import react from "react";
import { Route } from "react-router-dom";
import { AccountForm, Product, Products, Home, About, User } from "./pages";
import { useState, useEffect } from "react";
import { callApi } from "./api";
import { Header } from "./components";

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
    url: `users/:${userId}/orders`,
    token,
  });
  console.log("This user's order's are:", data);
  return data;
};

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(localStorage.getItem("user"));
  const [cart, setCart] = useState(localStorage.getItem("cart") || {});
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
          const userData = await fetchUserData(token);
          localStorage.setItem("user", JSON.stringify(userData));
          setUserData(userData);
          const username = userData.username;
          console.log("username is :", username);
        }
        if (token && userData) {
          setUserOrders(await fetchUserOrders(userData.id, token));
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
        <User userData={userData} token={token} 
        // userOrders={userOrders} 
        />
      </Route>
    </>
  );
}

// const TestPage = () => {
//   return <div>WELCOME!</div>;
// };

export default App;
