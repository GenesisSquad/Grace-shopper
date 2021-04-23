////  GET /users (*admin)
//  POST /products (*admin) Only admins can create a new product
//  DELETE /products/:productId (*admin) Only admins can delete a product
////  PATCH /products/:productId (*admin) Only admins can update a product
////  GET /products/:productId/orders (*admin) Get a list of all orders which have that product in them
////  PATCH /users/:userId (*admin) Only admins can update a user

// 	Write a component to display a list of all users
// 	Display the all-users component when the url matches /users (*admin)
// 	add an Admin nav link
// 	Make a username clickable in the users list that can be used to navigate to the /users/:userId component (*admin)
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { callApi } from "../api";
import { Button } from "@material-ui/core";
import "./Admin.css";
// const {requireAdmin} = require ("../server");
import { ColorButton } from "../components";

const Admin = (token, users, requireAdmin, productId, userId) => {
  //Products
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(Number);
  const [imageURL, setImageURL] = useState("");
  const [inStock, setInStock] = useState(true);
  const [category, setCategory] = useState("");

  //Users
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetchUsers = async () => {
    const userData = await callApi({
      url: `users`,
    });
    console.log("fetchUsers", userData);
    return userData;
  };

  const fetchOrders = async () => {
    const orderData = await callApi({
      url: `products/${productId}/orders`,
    });
    console.log("fetchOrders", orderData);
    return orderData;
  };

  useEffect(() => {
    //     const myFunc = async () => {
    //       try {
    //         // const [users, setUsers] = useState([])
    //         const users = await fetchUsers();
    //         console.log("useEffect", users);
    //       } catch (error) {
    //         console.error("useEffect", error);
    //       }
    //     };
    //     myFunc();

    const myOtherFunc = async () => {
      try {
        // const [orders, setOrders] = useState([])
        const orders = await fetchOrders();
        console.log("useEffect", orders);
      } catch (error) {
        console.error("useEffect", error);
      }
    };
    myOtherFunc();
  });

  const handleEditProducts = async (event) => {
    event.preventDefault();
    const updateProducts = await callApi({
      url: `products/${productId}`,
      body: { name, description, price, imageURL, inStock, category },
      method: "PATCH",
      token,
    });
    // if (body) {return res.send(updateProducts)}
    console.log("handleEditProducts", updateProducts);
  };

  const handleEditUsers = async (event) => {
    event.preventDefault();
    const updateUsers = await callApi({
      url: `users/${userId}`,
      body: { firstName, lastName, email, username, password },
      method: "PATCH",
      token,
    });
    console.log("handleEditUsers", updateUsers);
  };

  return (
    <>
    { requireAdmin ? (
      <> 
      <ColorButton
        component={Link}
        to="/admin-create-product"
        variant="outlined"
        color="primary"
        style={{
          display: "flex",
          marginTop: "75px",
          marginLeft: "650px",
          marginRight: "650px",
        }}
      >
        Create Product
      </ColorButton>  

      <ColorButton
        component={Link}
        to="/admin-update/:productId"
        variant="outlined"
        color="primary"
        style={{
          display: "flex",
          marginTop: "40px",
          marginLeft: "650px",
          marginRight: "650px",
        }}
      >
        Update Product Info
      </ColorButton>

      <ColorButton
        component={Link}
        to="/admin-update/:user"
        variant="outlined"
        color="primary"
        style={{
          display: "flex",
          marginTop: "40px",
          marginLeft: "650px",
          marginRight: "650px",
        }}
      >
        Update User Info
      </ColorButton>

      <Button
        component={Link}
        to="/admin-create-product"
        variant="outlined"
        color="secondary"
        style={{
          display: "flex",
          marginTop: "40px",
          marginLeft: "650px",
          marginRight: "650px",
        }}
      >
        Delete Product
      </Button>

      {/* <div className="adminPage">
        <h2 className="changeTitle">Change Product Info</h2>
        <form onSubmit={handleEditProducts}>
          <div>
            Name
            <input
              className="title"
              type="text"
              //   required
              onChange={(event) => setName(event.target.value)}
            ></input>
            <div>
              Description
              <input
                className="title"
                type="text"
                // required
                onChange={(event) => setDescription(event.target.value)}
              ></input>
            </div>
            <div>
              Price
              <input
                className="title"
                type="number"
                // required
                onChange={(event) => setPrice(event.target.value)}
              ></input>
            </div>
            <div>
              Image URL
              <input
                className="title"
                type="text"
                // required
                onChange={(event) => setImageURL(event.target.value)}
              ></input>
            </div>
            <div className="inStock">
              In Stock
              <input
                className="title"
                type="checkbox"
                // required
                onChange={(event) => setInStock(event.target.value)}
              ></input>
            </div>
            <div>
              Category
              <select
                className="dropDown"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value={true}> -- Coffee or Tea? -- </option>
                <option value="Coffee">Coffee</option>
                <option value="Tea">Tea</option>
              </select>
            </div>
            <div>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                Submit Product
              </Button>
            </div>
          </div>
        </form>
      </div> */}
      {/***************************************/}
      {/* <div className="adminPage">
        <h2 className="changeTitle">Change User Info</h2>
        <form onSubmit={handleEditUsers}>
          <div>
            First Name
            <input
              className="title"
              type="text"
              required
              onChange={(event) => setFirstName(event.target.value)}
            ></input>
          </div>

          <div>
            Last Name
            <input
              className="title"
              type="text"
              required
              onChange={(event) => setLastName(event.target.value)}
            ></input>
          </div>

          <div>
            Email
            <input
              className="title"
              type="text"
              required
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>

          <div>
            Username
            <input
              className="title"
              type="text"
              required
              onChange={(event) => setUsername(event.target.value)}
            ></input>
          </div>

          <div>
            Password
            <input
              className="title"
              type="text"
              required
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>

          <div>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{
                display: "flex",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            >
              Submit User
            </Button>
          </div>
        </form>
      </div> */}
      </>
     ) : ( 
      <h1>Not an Admin!!!</h1>
    )}
    </>
  );
};

export default Admin;
