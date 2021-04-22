import { useHistory } from "react-router";
import { callApi } from "../api";
//! Stripe start
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {
	CircularProgress,
	Grid,
	Card,
	// TextField,
	CardContent,
	Divider,
	Typography,
} from "@material-ui/core";
import ColorButton from "./ColorButton";

const STRIPE_KEY =
	"pk_test_51IgESEAwKF3ow8u8iWs1EZ7w7SOHNw8zGEZZJ7cErTdZJfyvQ5iBSzWlQNC4Ngrkb24u8AbPrNP8ezMm1WpY5hhe0086gjXKtA";
const PAYMENT_URL = "http://localhost:3001/api/stripe/pay";
const CURRENCY = "USD";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	//! //////OG BELOW///
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(0),
			marginBottom: theme.spacing(0),
			padding: theme.spacing(1),
			justifyContent: "center",
		},
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));

const onToken = (amount) => async (token) => {
	try {
		await axios.post(PAYMENT_URL, {
			source: token.id,
			currency: CURRENCY,
			amount,
		});
	} catch (error) {
		console.error(error);
	}
};
//! Stripe end

const Cart = ({ token, cart, setCart, real, toggleDrawer, userData }) => {
	const history = useHistory();

	//! STRIPE styling start
	const classes = useStyles();
	//! STRIPE styling end

	const getTotalSum = () => {
		return cart.reduce(
			(sum, { price, quantity }) => sum + parseFloat(price.slice(1)) * quantity,
			0
		);
	};

	const clearCart = async () => {
		setCart([]);
		localStorage.setItem("cart", JSON.stringify([]));
	};

	const setQuantity = async (product, amount) => {
		if (amount > 0) {
			console.log("amount:", amount);
			const newCart = [...cart];
			console.log("newCart", newCart);
			const a = newCart.indexOf(product);
			console.log(a);
			if (a >= 0) {
				newCart[a].quantity = amount;
			}
			if (userData || JSON.parse(localStorage.getItem("user"))) {
				const userD = JSON.parse(localStorage.getItem("user"));
				console.log(userD);
				const orders = await callApi({
					token,
					url: `order_products/${product.id}`,
				});
				console.log(orders);
				const order = orders.filter(
					(o) => o.userId === userD.id && o.status === "created"
				)[0];
				console.log("order: ", order);
				const data = await callApi({
					token,
					url: `order_products/${order.id}`,
					method: "PATCH",
					body: { product: { quantity: product.quantity } },
				});
				console.log(data);
			}
			setCart(newCart);
		}
	};

	const removeFromCart = async (productToRemove) => {
		if (userData || JSON.parse(localStorage.getItem("user"))) {
			const userD = JSON.parse(localStorage.getItem("user"));
			const orders = await callApi({
				token,
				url: `order_products/${productToRemove.id}`,
			});
			console.log(orders);
			const order = orders.filter(
				(o) => o.userId === userD.id && o.status === "created"
			)[0];
			console.log("order: ", order);
			const newCart = cart.filter(
				(product) => product.id !== productToRemove.id
			);
			const data = await callApi({
				token,
				method: "DELETE",
				url: `order_products/${order.id}`,
			});
			setCart(newCart);
			console.log(data);
		}
	};

	return (
		<>
			{cart && cart.length ? (
				<>
					<Grid style={{ width: "400px" }}>
						<Card className={classes.root} variant="outlined">
							<CardContent>
								<div className="products">
									{cart && cart.length > 0 ? (
										cart.map((product, idx) => (
											<div className="product" key={idx}>
												<Typography variant="h5" component="h2">
													{product.name}
												</Typography>
												<div
													style={{
														display: "flex",
														flexFlow: "row",
														justifyContent: "space-around",
														alignItems: "center",
													}}
												>
													<Typography
														className={classes.pos}
														color="textSecondary"
													>
														{product.price}
													</Typography>
													<input
														style={{ maxWidth: "40px", marginRight: "10px" }}
														type="number"
														size="1"
														maxLength="1"
														value={product.quantity}
														onChange={(e) =>
															setQuantity(product, parseInt(e.target.value))
														}
													/>
													<Button
														variant="contained"
														color="primary"
														size="small"
														onClick={() => removeFromCart(product)}
													>
														Remove
													</Button>
												</div>
												<Divider style={{ marginTop: "10px" }} />
											</div>
										))
									) : (
										<CircularProgress />
									)}
								</div>
								<br />
								<br />
								<Typography variant="h5" component="h2">
									Total: ${getTotalSum()}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					{/* STRIPE start */}
					<div
						style={{
							display: "flex",
							flexFlow: "row",
							justifyContent: "space-around",
							marginTop: "10px",
						}}
					>
						<Button
							variant="contained"
							color="secondary"
							size="small"
							onClick={clearCart}
							style={{ marginRight: "10px" }}
						>
							Clear Cart
						</Button>
						{real ? (
							<StripeCheckout
								token={onToken(getTotalSum() * 100)}
								stripeKey={STRIPE_KEY}
								name="Rhino Coffee"
								amount={getTotalSum() * 100}
								currency={CURRENCY}
								billingAddress
								shippingAddress
								style={{ marginLeft: "10px" }}
							/>
						) : (
							<ColorButton
								onClick={() => {
									history.push("/checkout");
									toggleDrawer("right", false);
								}}
							>
								Checkout
							</ColorButton>
						)}
					</div>
					{/* STRIPE end */}
				</>
			) : (
				<h3> Your cart is empty.</h3>
			)}
		</>
	);
};

export default Cart;
