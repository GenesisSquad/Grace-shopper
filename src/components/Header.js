import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  // ListItemIcon,
  // ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  withStyles,
} from "@material-ui/core";
import "./Header.css";
import { deepOrange } from "@material-ui/core/colors";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Product from "./Product.js";
const OrangeToolbar = withStyles((theme) => ({
  root: {
    fontFamily: "tahoma",
    color: theme.palette.getContrastText("#9B7D46"),
    backgroundColor: "#9B7D46",
    justifyContent: "space-between",
  },
}))(Toolbar);

const Header = ({ name, token, setToken, drinkItems }) => {
  const history = useHistory();
  const routes = ["/home", "/myroutines", "/activities", "/products"];
  const icons = [<HomeIcon />, <ListAltIcon />];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(
      "clicking on this brings up a menu for the user for his products and profile"
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    console.log("this opens and closes the cart side window");
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <Link className="siteName" to="/products">
          Shopping Cart:
        </Link>
      </div>
      <List style={{ width: "500px" }}>
        {/* {["Home", "MyRoutines", "Activities", "Routines"].map((text, i) =>
          i !== 1 ? ( */}
        <ListItem
          // button
          // key={text}
          onClick={() => {
            // history.push(routes[i]);
            console.log("this will card you to the specific product page");
          }}
        >
          {/* <ListItemIcon>{icons[i]}</ListItemIcon> */}
          {/* <ListItemText primary={text} /> */}
          {/* <Products /> */}
          <Product />
        </ListItem>
        {/* ) : (
            token && (
              <ListItem
                button
                key={text}
                onClick={() => {
                  history.push(routes[i]);
                }}
              >
                <ListItemIcon>{icons[i]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ) */}
        {/* )
        )} */}
      </List>
    </div>
  );
  return (
    <AppBar position="static">
      <OrangeToolbar className="header" color="primary">
        <Avatar
          alt="RC"
          src="https://i.postimg.cc/Bv18bq7N/rhino-coffee.png"
          className="HeaderLogo"
        />
        <div>
          <Button
            color="inherit"
            onClick={(event) => {
              history.push("/");
              console.log("this link will guide you to the Home page");
            }}
          >
            {"Home"}
          </Button>
          <Button
            color="inherit"
            onClick={(event) => {
              history.push("/about");
              console.log("this link will route you to the About page");
            }}
          >
            {"About"}
          </Button>

          <Button
            color="inherit"
            onClick={(event) => {
              history.push("/products");
              console.log("this link will route you to all the Products page");
            }}
          >
            {"Products"}
          </Button>
        </div>
        <div>
          <Button
            color="inherit"
            onClick={(event) => {
              const val = event.target.value;
              if (val === "Login") {
                history.push("/login");
                console.log("you have clicked me");
              } else {
                // setToken("");
                // localStorage.clear();
                // history.push("/");
                console.log("I've been clicked !");
              }
            }}
          >
            {!token ? "Login" : "Logout"}
          </Button>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Orders</MenuItem>
          </Menu>
          <IconButton aria-label="show shopping cart" color="inherit">
            <Badge badgeContent={29} color="secondary">
              <ShoppingCartIcon onClick={toggleDrawer("right", true)} />
            </Badge>
          </IconButton>
        </div>
      </OrangeToolbar>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </AppBar>
  );
};

export default Header;
