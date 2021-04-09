import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
    
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card:{},
  paper: {height:"40px"},
  bottomCard: { justifyContent: "space-between" },
}));

const Products = ({ products, userData }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAddItem = () => {
    console.log("added item!!!");
  };
  const handleRemoveItem = () => {
    console.log("item removed!!!");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={5}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {products.map((product) => {
          return (
            <Grid item xs={5} wrap="wrap"sm={3}>
              {/* <Paper className={classes.paper}> */}
              <Card className={classes.card}>
                <CardHeader title={product.name} subheader={product.price} />
                <CardMedia
                  className={classes.media}
                  image={product.imageURL}
                  title="Beverage"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
                </CardActions>
              </Card>
              {/* </Paper> */}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
