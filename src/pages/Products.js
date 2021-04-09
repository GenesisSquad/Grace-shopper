import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(360deg)",
  },
  avatar: {
    backgroundColor: blue[500],
  },
  paper: {},
  bottomCard: { justifyContent: "space-between" },
}));

const Products = ({ products, userData }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleAddItem = () => {
    console.log("added item!!!");
  };
  const handleRemoveItem = () => {
    console.log("item removed!!!");
  };
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
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Card className={classes.root}>
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
                  <div>
                    <CardActions className={classes.bottomCard} disableSpacing>
                      <div>
                        <IconButton aria-label="addShopping cart icon">
                          <AddShoppingCartIcon onClick={handleAddItem} />
                        </IconButton>
                        <IconButton aria-label="remove shopping cart icon">
                          <RemoveShoppingCartIcon onClick={handleRemoveItem} />
                        </IconButton>
                      </div>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        {" "}
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                  </div>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>{product.description}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
