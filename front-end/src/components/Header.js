import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import "./Header.css";
import { deepOrange } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { useHistory } from "react-router";
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const OrangeToolbar = withStyles((theme) => ({
  root: {
    fontFamily: "tahoma",
    color: theme.palette.getContrastText(deepOrange[800]),
    backgroundColor: deepOrange[800],
  },
}))(Toolbar);

const Header = ({ name, token, setToken, drinkItems }) => {
  const history = useHistory();
  const routes = ["/home", "/myroutines", "/activities", "/products"];
  const icons = [
    <HomeIcon />,
    <FitnessCenterIcon />,
    <DirectionsRunIcon />,
    <ListAltIcon />,
    <Products/>
  ];
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
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
      <List style={{ width: "250px" }}>
        {["Home", "MyRoutines", "Activities", "Routines"].map((text, i) =>
          i !== 1 ? (
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
          ) : (
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
            )
          )
        )}
      </List>
    </div>
  );
  return (
    <AppBar position="static">
      <OrangeToolbar className="header" color="primary">
        <IconButton
          edge="start"
          color="primary"
          aria-label="menu"
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon style={{ color: "#ffffff" }} />
        </IconButton>
        <Typography variant="h6">{name}</Typography>
        <Button
          color="inherit"
          onClick={(event) => {
            const val = event.target.value;
            if (val === "Login") {
              history.push("/login");
            } else {
              setToken("");
              localStorage.clear();
              history.push("/");
            }
          }}
        >
          {!token ? "Login" : "Logout"}
        </Button>
      </OrangeToolbar>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </AppBar>
  );
};

export default Header;
