// Front end APP.js file
import react from "react";
import { Route } from "react-router-dom";
import { AccountForm } from "./pages";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("fitness-token"));
  const [routines, setRoutines] = useState([]);

  return (
    <>
      <Route path="/login">
        <AccountForm action="login" setToken={setToken} />
      </Route>
      <Route path="/register">
        <AccountForm action="register" setToken={setToken} />
      </Route>
      <Route path="/product">
        <Products />
      </Route>
    </>
  );
}
export default App;
