import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { callApi } from "../api";

//! Stripe start
import { Route } from "react-router-dom";
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { GridLoadIcon } from "@material-ui/data-grid";
import { CircularProgress } from "@material-ui/core";

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
const data = {
  id: 3,
  status: "created",
  userId: 3,
  datePlaced: "2021-04-15T18:29:18.482Z",
  products: [
    {
      id: 9,
      name: "joe",
      description: "GREAT COFFEE!",
      price: "$22",
      imageURL:
        "https://images.squarespace-cdn.com/content/v1/57b7c57b44024338a6700bdf/1588704248137-5U0TCBQRZCKTVVLM8QUO/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/IMG_3607.jpg",
      inStock: true,
      category: "TEA",
      quantity: 5,
    },
    {
      id: 5,
      name: "Bella London Fog",
      description:
        "Delicious blend of Earl Grey tea with sultry oat milk foam. Notes of lavender and vanilla.",
      price: "$1200",
      imageURL:
        "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/london-fog-tea-latte.jpg",
      inStock: true,
      category: "TEA",
      quantity: 6,
    },
  ],
};

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
    localStorage.setItem('cart','')
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
          <h1>My Cart</h1>
          <button onClick={clearCart}>Clear Cart</button>
          <div className="products">
            {cart.map((product, idx) => (
              <div className="product" key={idx}>
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <input
                  value={product.quantity}
                  onChange={(e) =>
                    setQuantity(product, parseInt(e.target.value))
                  }
                />
                <img src={product.image} alt={product.name} />
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </div>
            ))}
          </div>

          <div>Total price: ${getTotalSum()}</div>
          {/* STRIPE start */}
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
      {/* STRIPE end */}
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Cart;
