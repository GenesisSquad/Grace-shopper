import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Drawer,
  Hidden,
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
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MenuIcon from "@material-ui/icons/Menu";
import { Cart } from "./Cart";
// import Product from "./pages";
const OrangeToolbar = withStyles((theme) => ({
  root: {
    fontFamily: "tahoma",
    color: theme.palette.getContrastText("#9B7D46"),
    backgroundColor: "#9B7D46",
    justifyContent: "space-between",
  },
}))(Toolbar);

const HiddenMenu = ({ token, logOut }) => {
  const history = useHistory();
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
  return (
    <>
      <Hidden smUp>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon style={{ color: "#ffff" }} />
        </IconButton>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => {
              history.push("./myaccount");
            }}
          >
            <AccountCircle />
          </IconButton>
          {token ? (
            <Button color="inherit" onClick={logOut}>
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={(event) => {
                history.push("/login");
              }}
            >
              Login
            </Button>
          )}
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
        </Drawer>
      </Hidden>
    </>
  );
};

const Header = ({ name, token, setToken, products, setUserData }) => {
  const history = useHistory();
  const routes = ["/home", "/myroutines", "/activities", "/products"];
  const icons = [<HomeIcon />, <ListAltIcon />];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const logOut = () => {
    localStorage.clear();
    setUserData({});
    setToken("");
    history.push("/");
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
        <Link className="shoppingCart" to="/products">
          Shopping Cart:
        </Link>
      </div>
      <List style={{ width: "300px" }}>
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
          {/* <Product /> */}I am a shopping cart item!!! when this works we
          should render and array of items in the users shopping cart
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
    <AppBar position="sticky">
      <OrangeToolbar className="header" color="primary">
        <HiddenMenu token={token} logOut={logOut} />
        <div style={{ display: "flex", flexFlow: "row", alignItems: "center" }}>
          <Avatar
            alt="RC"
            src="https://i.postimg.cc/Bv18bq7N/rhino-coffee.png"
            className="HeaderLogo"
          />
          <Link
            style={{ textDecoration: "none" }}
            onClick={(event) => {
              history.push("/");
              console.log("this link will guide you to the Home page");
            }}
          >
            <div className="siteName">Rhino Coffee</div>
          </Link>
        </div>
        <div>
          <Hidden xsDown>
            {/* <Button
            color="inherit"
            onClick={(event) => {
              history.push("/");
              console.log("this link will guide you to the Home page");
            }}
          >
            {"Home"}
          </Button> */}
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
                console.log(
                  "this link will route you to all the Products page"
                );
              }}
            >
              {"Products"}
            </Button>
          </Hidden>
        </div>
        <div>
          <Hidden xsDown>
            {token ? (
              <Button color="inherit" onClick={logOut}>
                Logout
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={(event) => {
                  history.push("/login");
                }}
              >
                Login
              </Button>
            )}
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {
                history.push("./myaccount");
              }}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Hidden>
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
