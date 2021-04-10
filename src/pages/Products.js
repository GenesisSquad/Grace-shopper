import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  makeStyles,
  Popover,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card: {},
  paper: { height: "40px" },
  bottomCard: { justifyContent: "space-between" },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const history = useHistory();

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleAddItem = () => {
    console.log("added item!!!");
  };
  const handleRemoveItem = () => {
    console.log("item removed!!!");
    history.push(`/products/${product.id}`);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid item xs={5} sm={3}>
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
        <div className={classes.bottomCard} disableSpacing>
          <div>
            <IconButton aria-label="addShopping cart icon">
              <AddShoppingCartIcon onClick={handleAddItem} />
            </IconButton>
            <IconButton aria-label="remove shopping cart icon">
              <RemoveShoppingCartIcon onClick={handleRemoveItem} />
            </IconButton>
          </div>
          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            More info
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <CardContent>
              <Typography paragraph>{product.description}</Typography>
            </CardContent>
          </Popover>
        </div>
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
            {" "}
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
