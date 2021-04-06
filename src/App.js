// Front end APP.js file
// import react from "react";
import { Route } from "react-router-dom";
import { AccountForm } from "./pages";
import { useState, useEffect } from "react";
import { callApi } from "./api";
import { Product, Products, Header } from "./components";

const fetchDrinks = async (token) => {
  const data = await callApi({
    url: "products",
    token,
  });

  return data;
};

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [drinkItems, setDrinkItems] = useState([]);

  useEffect(() => {
    
    const getDrinks = async() => {
      try {
        const drinks = await fetchDrinks();
    
        if (drinks) {
          setDrinkItems(drinks);
          console.log(drinks)
        }
      } catch (error) {
        console.error(error);
      }  
    }
    getDrinks();
  }, [token]);

  return (
    <>
    <Header
      drinkItems={drinkItems}/>
    <Route exact path='/'>
    <TestPage />
    </Route>
      <Route path="/login">
        <AccountForm action="login" setToken={setToken} />
      </Route>

      <Route path="/register">
        <AccountForm action="register" setToken={setToken} />
      </Route>

      <Route path="/products">
        <Products
          drinkItems={drinkItems}
          setDrinkItems={setDrinkItems}
          token={token}
        />
      </Route>
      <Route path="/products/:productId">
        <Product
          drinkItems={drinkItems}
          setDrinkItems={setDrinkItems}
          token={token}
        />
      </Route>
    </>
  );
}

const TestPage = () => {
  return <div>
    WELCOME!
  </div>
}
export default App;
