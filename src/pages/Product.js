import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

const ProductGrid = ({ product }) => {
  const history = useHistory();
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
            <Button variant="contained" color="secondary">
              {" "}
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Product = ({ products }) => {
  let { productId } = useParams();
  productId = parseInt(productId, 10);
  const product = products.find((product) => productId === product.id);
  console.log("products being passed into Product component", products);
  console.log("This is the product being rendered:", product);
  return (
    <>
      {product ? (
        // <ProductCard product={product} />
        <ProductGrid product={product} />
      ) : (
        <div>
          <h1>Loading</h1> <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Product;
