// Front end APP.js file
// import react from "react";
import { Route } from "react-router-dom";
import { AccountForm, Product, Products, Home } from "./pages";
import { useState, useEffect } from "react";
import { callApi } from "./api";
import { Header } from "./components";

const fetchDrinks = async (token) => {
  const data = await callApi({
    url: "products",
    token,
  });

  return data;
};

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const drinks = await fetchDrinks();

        if (drinks) {
          setProducts(drinks);
          console.log(drinks);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getDrinks();
  }, [token]);

  return (
    <>
      <Header
        products={products}
        userData={userData}
        setUserData={setUserData}
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

      <Route path="/products">
        <Products
          productss={products}
          setProducts={setProducts}
          token={token}
        />
      </Route>
      <Route path="/products/:productId">
        <Product products={products} setProducts={setProducts} token={token} />
      </Route>

      <Route path="/home"></Route>
    </>
  );
}

// const TestPage = () => {
//   return <div>WELCOME!</div>;
// };
export default App;
