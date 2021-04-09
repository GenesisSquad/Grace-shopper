import React from "react";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

const Product = (drinkItems, token) => {
  // const { productId } = useParams();
  // const product = drinkItems.find((product) => productId === product.id);
  const classes = useStyles();
  if (true) {
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <CardHeader title={"NAME"} subheader={"PRICE"} />
            <CardMedia
              component="img"
              alt="DRANK"
              height="140"
              image="product.imageURL"
              title="drink"
            />
            <Typography gutterBottom variant="h6" component="h2">
              Category of coffee
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This is the description of the coffee
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
  } else {
    return <h1>LOADING :0)</h1>;
  }
};

export default Product;
