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

const products = [
  {
    id: 11,
    name: "joe",
    description: "GREAT COFFEE!",
    category: "TEA",
    price: "$22",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57b7c57b44024338a6700bdf/1588704248137-5U0TCBQRZCKTVVLM8QUO/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/IMG_3607.jpg",
  },
  {
    id: 22,
    name: "capuccino",
    description: "veri foami",
    category: "COFFEE",
    price: "$332",
    imageUrl:
      "https://lh3.googleusercontent.com/proxy/-uZn48p7J5spc9gPvseJNWKbZ5O9-Xgg2hOXzbUeTKtso9pssqSsRzLrXGl82PLRzFfjiqB1s1qQK-5Vtj-SSKU1oJaHF5nABVRGHg4C4L1k74WSAvf8R7W0SOx09pnoX0eW",
  },
  {
    id: 33,
    name: "mega tea",
    description: "Tea imported from Japan",
    category: "TEA",
    price: "$42",
    imageUrl:
      "https://www.hellomagazine.com/imagenes/healthandbeauty/2020010982936/drinking-tea-makes-you-life-longer/0-399-751/tea-bag-z.jpg?ezimgfmt=rs:363x242/rscb5/ng:webp/ngcb5",
  },
  {
    id: 44,
    name: "Nick's Dunkin Donuts Brew",
    description: "Nick's interpretation of DUnkin Donuts Coffee",
    category: "Coffee",
    price: "4ETH",
    imageUrl:
      "https://www.mercurynews.com/wp-content/uploads/2020/08/SJM-L-DUNKINDONUTS-0812.jpg?",
  },
];

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

const Products = ({ userData }) => {
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

  return products.map((product) => {
    return (
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
      </Card>
    );
  });
};

export default Products;
