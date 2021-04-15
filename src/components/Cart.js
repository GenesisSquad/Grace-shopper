import React, { useState } from "react";
import { useHistory } from "react-router";

//! Stripe start
import { Route } from "react-router-dom";
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const STRIPE_KEY =
'pk_test_51IgESEAwKF3ow8u8iWs1EZ7w7SOHNw8zGEZZJ7cErTdZJfyvQ5iBSzWlQNC4Ngrkb24u8AbPrNP8ezMm1WpY5hhe0086gjXKtA';
const PAYMENT_URL = 'http://localhost:3001/api/stripe/pay';
const CURRENCY = 'USD';

const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
      },
  },
  buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
  },
  button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
  },
}));

const onToken = (amount) => async (token) => {
  console.log('Token is:', token);
  try {
      const response = await axios.post(PAYMENT_URL, {
          source: token.id,
          currency: CURRENCY,
          amount,
      });
      console.log('Success!', response);
  } catch (error) {
      console.error(error);
  }
};
//! Stripe end

const Cart = ({ cart, setCart }) => {
  //! STRIPE styling start
  const classes = useStyles();
  //! STRIPE styling end

  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + parseFloat(cost.slice(1)) * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
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
      <h1>My Cart</h1>
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <input
              value={product.quantity}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>     
      <div>Total Cost: ${getTotalSum()}</div>
       {/* STRIPE start */}
       <Route exact path="/pay">
      <Paper className={classes.paper}>
         <StripeCheckout
          token={onToken(10000)}
          stripeKey={STRIPE_KEY}
          name="Rhino Coffee"
          amount={10000 / 100}
          currency={CURRENCY}
          shippingAddress
         />
         <Button>Pay Order</Button>
         </Paper>
      </Route>
      {/* STRIPE end */}
    </>
  );
};

export default Cart;
