import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { callApi } from "../api";

//! Stripe start
import { Route } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { GridLoadIcon } from "@material-ui/data-grid";
import {
  CircularProgress,
  Grid,
  Card,
  TextField,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";

const STRIPE_KEY =
  "pk_test_51IgESEAwKF3ow8u8iWs1EZ7w7SOHNw8zGEZZJ7cErTdZJfyvQ5iBSzWlQNC4Ngrkb24u8AbPrNP8ezMm1WpY5hhe0086gjXKtA";
const PAYMENT_URL = "http://localhost:3001/api/stripe/pay";
const CURRENCY = "USD";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  //! //////OG BELOW///
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      padding: theme.spacing(1),
      justifyContent: "center",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const onToken = (amount) => async (token) => {
  console.log("Token is:", token);
  try {
    const response = await axios.post(PAYMENT_URL, {
      source: token.id,
      currency: CURRENCY,
      amount,
    });
    console.log("Success!", response);
  } catch (error) {
    console.error(error);
  }
};
//! Stripe end

const Cart = ({ token, cart, setCart }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  //! STRIPE styling start
  const classes = useStyles();
  //! STRIPE styling end

  const getTotalSum = () => {
    return cart.reduce(
      (sum, { price, quantity }) => sum + parseFloat(price.slice(1)) * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", "");
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <>
      {cart && cart.length ? (
        <>
          
          <Grid style={{width:'400px'}}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <div className="products">
                  {cart.map((product, idx) => (
                    <div className="product" key={idx} >
                      {/* <h3>{product.name}</h3> */}
                      <Typography variant="h5" component="h2"
                      //  style={{textAlign:'center'}}
                      >
                        {product.name}
                      </Typography>
                      <div style={{display:'flex',flexFlow:'row', justifyContent:'space-around', alignItems:'center'}}>
                      {/* <h4>{product.description}</h4> */}
                      {/* <h4>{product.price}</h4> */}
                      <Typography className={classes.pos} color="textSecondary">
                        {product.price}
                      </Typography>
                      <input
                        style={{ maxWidth: "40px", marginRight: "10px" }}
                        type="number"
                        size="1"
                        maxLength="1"
                        value={product.quantity}
                        onChange={(e) =>
                          setQuantity(product, parseInt(e.target.value))
                        }
                      />
                      {/* <img src={product.imageUrl} alt={product.name} /> */}
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => removeFromCart(product)}
                      >
                        Remove
                      </Button>
                      </div>
                      <Divider style={{marginTop:'10px'}}/>
                    </div>
                  ))}
                </div>
                <br />
                <br />
                <Typography variant="h5" component="h2">
                  Total: ${getTotalSum()}
                </Typography>
                {/* <div>Total price: ${getTotalSum()}</div> */}
              </CardContent>
            </Card>
          </Grid>
          {/* STRIPE start */}
          {/* <Paper className={classes.paper}> */}
          <div style={{display:'flex',flexFlow:'row', justifyContent:'space-around', marginTop:'10px'}}>
          
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
          <StripeCheckout
            token={onToken(10000)}
            stripeKey={STRIPE_KEY}
            name="Rhino Coffee"
            amount={10000 / 100}
            currency={CURRENCY}
            shippingAddress
          />
          </div>
          {/* </Paper> */}
          {/* STRIPE end */}
        </>
      ) : (
        <h3> Your cart is empty.</h3>
        // <CircularProgress />
      )}
    </>
  );
};

export default Cart;
