import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

const ProductCard = ({product}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <CardHeader title={product.name} subheader={product.price} />
          <CardMedia
            component="img"
            alt="DRANK"
            height="140"
            image={product.imageURL}
            title="drink"
          />
          <Typography gutterBottom variant="h6" component="h2">
            {}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="addShopping cart icon">
          <AddShoppingCartIcon onClick={console.log("added!")} />
        </IconButton>
        <IconButton aria-label="addShopping cart icon">
          <RemoveShoppingCartIcon onClick={console.log("removed!")} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const Product = ({ products }) => {
  let { productId } = useParams();
  productId = parseInt(productId, 10);
  const product = products.find((product) => productId === product.id);
  console.log("products being passed into product", products);
  console.log("useparams id", productId);
  console.log("this is the product", product);
  return (
    <>
      {product ? (
        <ProductCard product={product} />
      ) : (
        <div>
          <h1>Loading</h1> <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Product;
