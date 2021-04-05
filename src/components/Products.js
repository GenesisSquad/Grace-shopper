import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
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
}));

const Products = (drinkItems) => {
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

  return drinkItems.map((product) => {
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="Rhino Avatar" className={classes.avatar}>
            RC
          </Avatar>
        }
        title={product.name}
        subheader={product.price}
      />
      <CardMedia
        className={classes.media}
        image={product.imageUrl}
        title="Beverage"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="addShopping cart icon">
          <AddShoppingCartIcon onClick={handleAddItem} />
        </IconButton>
        <IconButton aria-label="addShopping cart icon">
          <RemoveShoppingCartIcon onClick={handleRemoveItem} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {" "}
          More info:
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{product.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>;
  });
};

export default Products;
