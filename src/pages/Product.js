import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { callApi } from "../api";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";



const ProductGrid = ({ product, cart, setCart, token, userOrders }) => {
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
    try {
      if (JSON.parse(localStorage.getItem("user"))) {
        const userD = JSON.parse(localStorage.getItem("user"));
        console.log(userD);
        console.log("NAME", product.name)
        const order = userOrders.filter(o=>o.userId===userD.id && o.status==="created")[0]
        console.log("order: ",order.id);
        if(cart && cart.filter(p=>p.id===product.id)[0]){
          const copyProduct = cart.filter(p=>p.id===product.id)[0];
          console.log('copyProduct :>> ', copyProduct);
          const data = await callApi({
            token,
            url: `order_products/${order.id}`,
            method: "PATCH",
            body: { product:{...copyProduct,quantity:copyProduct.quantity+1} },
          });
          console.log(data);
        } else {
          const data = await callApi({
            method: "POST",
            url: `orders/${order.id}/products`,
            body:{product},
            token,
          });
          console.log(data, "new cart!!!")
        }
      }
    } catch (error) {
      throw error;
    }
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
          <img src={product.imageURL} width="100%" alt={product.name} />
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

const Product = ({ products, cart, setCart, token, userOrders }) => {
  let { productId } = useParams();
  productId = parseInt(productId, 10);
  const product = products.find((product) => productId === product.id);
  console.log("products being passed into Product component", products);
  console.log("This is the product being rendered:", product);
  return (
    <>
      {product ? (
        <ProductGrid
          product={product}
          cart={cart}
          setCart={setCart}
          token={token}
          userOrders={userOrders}
        />
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
