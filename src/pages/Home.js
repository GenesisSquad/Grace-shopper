import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
		paddingLeft: "60px",
		paddingRight: "60px",
	},
	gridList: {
		width: "auto",
		height: "auto",
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: "translateZ(0)",
	},
}));

const tileData = [
	{
		imgUrl: "https://i.postimg.cc/Zq6BW9Mr/coffee-heart.jpg",
		title: "coffee-heart",
		cols: 6,
	},
	{
		imgUrl: "https://i.postimg.cc/XJtLcBgQ/8-cups.jpg",
		title: "8-cups",
		cols: 6,
	},

	{
		imgUrl: "https://i.postimg.cc/fLnV20zy/tea-display.jpg",
		title: "tea-display",
		cols: 6,
	},
	{
		imgUrl: "https://i.postimg.cc/4d5gMZYC/tea-image-2.jpg",
		title: "tea-image-2",
		cols: 6,
	},
	{
		imgUrl: "https://i.postimg.cc/7LPPtM7K/4-cups.jpg",
		title: "4-cups",
		cols: 6,
	},
	{
		imgUrl: "https://i.postimg.cc/CMQS65qG/coffee-cup-with-beans.jpg",
		title: "coffee-cup-with-beans",
		cols: 6,
	},
];
const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<span>
				<h2 className="homeMessage">
					Welcome to Rhino Coffee... Where Quality meets Taste!!!
				</h2>
			</span>
			<GridList cellHeight={300} spacing={1} className={classes.gridList}>
				{tileData.map((tile) => (
					<GridListTile
						key={tile.imgUrl}
						cols={tile.featured ? 2 : 1}
						rows={tile.featured ? 2 : 1}
					>
						<img src={tile.imgUrl} alt={tile.title} />
					</GridListTile>
				))}
			</GridList>
			<span>
				<h2 className="homeMessage">
					Send us your Instagram photos of you all enjoying Rhino Coffee
					products!{"  "}
					<a href="https://www.instagram.com/">
						<img
							alt="Instagram.com"
							src="https://i.postimg.cc/BZcwXVqX/insta-icon.png"
							width="30"
							height="30"
						/>
					</a>
				</h2>
			</span>
		</div>
	);
};

export default Home;
