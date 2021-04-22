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
  makeStyles,
  Typography,
} from "@material-ui/core";

// import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
// import { callApi } from "../api";

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

const ProductCard = ({ product, cart, setCart,userOrders,token }) => {
  const classes = useStyles();

  const history = useHistory();
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

          </div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            More info
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const Products = ({ products, userData, cart, setCart,userOrders,token }) => {
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
