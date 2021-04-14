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
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px 60PX 20PX 60PX",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  // card: {height :"450px"},
  // paper: { maxHeight: "40px" },
  bottomCard: { justifyContent: "space-between" },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();

  const history = useHistory();

  const handleAddItem = () => {
    console.log("added item!!!");
  };
  const handleRemoveItem = () => {
    console.log("item removed!!!");
  };

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
          title="Beverage"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.category}
          </Typography>
        </CardContent>
        <CardActions className={classes.bottomCard} disableSpacing>
          <div>
            <IconButton aria-label="addShopping cart icon">
              <AddShoppingCartIcon onClick={handleAddItem} />
            </IconButton>
            <IconButton aria-label="remove shopping cart icon">
              <RemoveShoppingCartIcon onClick={handleRemoveItem} />
            </IconButton>
          </div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            More info
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const Products = ({ products, userData }) => {
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
        {!products ? (
          <Grid item>
            LOADING
            <CircularProgress />{" "}
          </Grid>
        ) : (
          products.map((product, index) => {
            return <ProductCard product={product} key={product.id} />;
          })
        )}
      </Grid>
    </div>
  );
};

export default Products;
