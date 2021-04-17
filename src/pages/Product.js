import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

const ProductGrid = ({ product, cart, setCart }) => {
  const history = useHistory();

  const handleAddItem = async (product) => {
    let updatedCart = [...cart];
    let productInCart = updatedCart.find(
      (cartProduct) => product.id === cartProduct.id
    );
    if (productInCart) {
      productInCart.quantity++;
    } else {
      productInCart = {
        ...product,
        quantity: 1,
      };
      updatedCart.push(productInCart);
    }
    setCart(updatedCart);
    console.log("added item!!!, ", product);
    console.log("updated cart is ", cart);
    // const data = await callApi({
    //   url: `/orders/${orderId}/products`,
    //   token,
    //   body:{product}
    // });
    // return data;
  };
  // const handleRemoveItem = () => {
  //   console.log("item removed!!!");
  // };
  return (
    <Grid
      container
      spacing={1}
      style={{ maxWidth: 1100, margin: " 20px auto " }}
    >
      <Grid item sm={6}>
        <Paper>
          <Button
            onClick={() => {
              history.push("/products");
            }}
          >
            ← Back to products
          </Button>
          <img src={product.imageURL} width="100%" />
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Grid container direction="column" style={{ height: "100%" }}>
          <Typography variant="h2">{product.name}</Typography>
          <Typography variant="subtitle2">{product.category}</Typography>
          <Divider />
          <Box mt={2} style={{ justifyContent: "space-between" }}>
            <div>
              <Typography variant="subtitle1">
                {" "}
                {product.description}
              </Typography>
            </div>
          </Box>
          <Box mt="auto">
            <Typography variant="h5">{product.price}</Typography>
            <Button
              onClick={() => handleAddItem(product)}
              variant="contained"
              color="secondary"
            >
              {" "}
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Product = ({ products, cart, setCart }) => {
  let { productId } = useParams();
  productId = parseInt(productId, 10);
  const product = products.find((product) => productId === product.id);
  console.log("products being passed into Product component", products);
  console.log("This is the product being rendered:", product);
  return (
    <>
      {product ? (
        <ProductGrid product={product} cart={cart} setCart={setCart} />
      ) : (
        <div>
          <CircularProgress />
          <h1>Loading</h1>
        </div>
      )}
    </>
  );
};

export default Product;
