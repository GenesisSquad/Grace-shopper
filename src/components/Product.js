import React from "react";
import { useParams } from "react-router-dom";
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
    paddingTop: "56.25%", // 16:9
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

const Product = (drinkItems, token) => {
  // const { productId } = useParams();
  // const product = drinkItems.find((product) => productId === product.id);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (true) {
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="Rhino Avatar" className={classes.avatar}>
              RC
            </Avatar>
          }
          title="Coffe Name"
          subheader="Price"
        />
        <CardMedia
          className={classes.media}
          image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_500740897_200013331653767347294_333325.jpg"
          title="Beverage"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Product Category (whether its coffee or tea):
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="addShopping cart icon">
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton aria-label="addShopping cart icon">
            <RemoveShoppingCartIcon />
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
            <Typography paragraph>
              Very delicious coffee from Ethiopia
            </Typography>
            <Typography></Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  } else {
    return <h1>LOADING :0)</h1>;
  }
};

export default Product;