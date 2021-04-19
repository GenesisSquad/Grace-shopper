import React from "react";
import { useHistory } from "react-router";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { callApi } from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth:'350px',
    margin: "20px 60PX 20PX 60PX",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card: {minWidth :"280px"},
  // paper: { maxHeight: "40px" },
  bottomCard: { justifyContent: "space-between" },
}));

const ProductCard = ({ product, cart, setCart }) => {
  const classes = useStyles();

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

  const handleClick = (event) => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Grid item lg={3}>
      <Card className={classes.card}>
        <CardHeader title={product.name} subheader={product.price} />
        <CardMedia
          className={classes.media}
          image={product.imageURL}
          style={{ backgroundSize: "contain" }}
          title="Beverage"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.category}
          </Typography>
        </CardContent>
        <CardActions className={classes.bottomCard} disableSpacing>
          <div>
            <IconButton
              aria-label="addShopping cart icon"
              onClick={() => handleAddItem(product)}
            >
              <AddShoppingCartIcon />
            </IconButton>
            {/* <IconButton aria-label="remove shopping cart icon" onClick={handleRemoveItem}>
              <RemoveShoppingCartIcon  />
            </IconButton> */}
          </div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            More info
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const Products = ({ products, userData, cart, setCart }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={5}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {/* {!products ? (
          <Grid item>
            LOADING
            <CircularProgress />{" "}
          </Grid>
        ) : (
          products.map((product, index) => {
            return <ProductCard product={product} key={product.id} />;
          })
        )} */}
        {products && products.length ? (
          products.map((product, index) => {
            return (
              <ProductCard
              
                product={product}
                key={product.id}
                cart={cart}
                setCart={setCart}
              />
            );
          })
        ) : (
          <Grid item>
            <CircularProgress />{" "}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Products;
