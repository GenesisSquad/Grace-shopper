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
	Divider,
	Toolbar,
	withStyles,
} from "@material-ui/core";
import "./Header.css";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import Cart from "./Cart";

const OrangeToolbar = withStyles((theme) => ({
	root: {
		fontFamily: "tahoma",
		color: theme.palette.getContrastText("#9B7D46"),
		backgroundColor: "#9B7D46",
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
	},
}))(Toolbar);

const HiddenItem = withStyles((theme) => ({
	root: {
		padding: "30px",
		color: "#ffff",
		border: "2px solid #fff",
		borderRadius: "0",
		width: "70%",
	},
}))(Button);

const HiddenMenu = ({ token, logOut }) => {
	const history = useHistory();
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
					style={{ width: "100%", height: "100%" }}
				>
					<List
						style={{
							width: window.outerWidth,
							display: "flex",
							flexFlow: "column",
							justifyContent: "space-evenly",
							alignItems: "center",
							height: "100%",
							background: "#9B7D46",
						}}
					>
						<HiddenItem
							onClick={() => {
								history.push("/account");
							}}
						>
							My Account
						</HiddenItem>
						{token ? (
							<HiddenItem color="inherit" onClick={logOut}>
								Logout
							</HiddenItem>
						) : (
							<HiddenItem
								color="inherit"
								onClick={(event) => {
									history.push("/login");
								}}
							>
								Login
							</HiddenItem>
						)}
						<HiddenItem
							color="inherit"
							onClick={(event) => {
								history.push("/about");
							}}
						>
							{"About"}
						</HiddenItem>
						<HiddenItem
							color="inherit"
							onClick={(event) => {
								history.push("/products");
							}}
						>
							{"Products"}
						</HiddenItem>
					</List>
				</Drawer>
			</Hidden>
		</>
	);
};

const Header = ({
	name,
	token,
	setToken,
	products,
	setUserData,
	cart,
	setCart,
}) => {
	const history = useHistory();

	const logOut = () => {
		localStorage.clear();
		setUserData({});
		setToken("");
		history.push("/");
	};
	const cartQuantity = () => {
		return cart.reduce((sum, { quantity }) => sum + quantity, 0);
	};
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
		<div role="presentation">
			<Divider />
			<div>
				<h1 className="shoppingCart">Shopping Cart:</h1>
			</div>
			<Cart
				real={false}
				token={token}
				cart={cart}
				setCart={setCart}
				toggleDrawer={toggleDrawer}
			/>
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

						}}
					>
						<div className="siteName">Rhino Coffee</div>
					</Link>
				</div>
				<div>
					<Hidden xsDown>
						<Button
							color="inherit"
							onClick={(event) => {
								history.push("/about");

							}}
						>
							{"About"}
						</Button>

						<Button
							color="inherit"
							onClick={(event) => {
								history.push("/products");
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
								history.push("/account");
							}}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</Hidden>
					<IconButton
						aria-label="show shopping cart"
						color="inherit"
						onClick={toggleDrawer("right", true)}
					>
						<Badge
							badgeContent={cart && cart.length ? cartQuantity() : 0}
							color="secondary"
						>
							<ShoppingCartIcon />
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
