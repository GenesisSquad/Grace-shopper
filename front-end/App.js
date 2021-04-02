// Front end APP.js file
import react from "react";
import { Route } from "react-router-dom";
import { AccountForm } from "./pages";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [drinkItems, setDrinkItems] = useState([]);

  return (
    <>
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
      <Route path="/product/:productId">
        <Products
          drinkItems={drinkItems}
          setDrinkItems={setDrinkItems}
          token={token}
        />
      </Route>
    </>
  );
}
export default App;
