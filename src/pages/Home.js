import { callApi } from "../api";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./Home.css";
// import "../../public/images/insta_icon.png";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingLeft: "60px",
    paddingRight: "60px",
    // marginTop: "1em",
  },
  gridList: {
    width: 4000,
    height: 800,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  // titleBar: {
  //   background:
  //     "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
  //     "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  // },
  // icon: {
  //   color: "white",
  // },
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
    cols: 2,
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
      {/* THIS CAN BE USED IN THE ORDER COMPLETE PAGE */}
      <span>
        <h2 className="homeMessage">
          Welcome to Rhino Coffee... Where Quality meets Taste!!!
        </h2>
      </span>
      <GridList cellHeight={400} spacing={1} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.imgUrl}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.imgUrl} alt={tile.title} />
            {/* <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${tile.title}`}
                  className={classes.icon}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            /> */}
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

// import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
// import { useState } from "react";
// import { useEffect } from "react";
// import Carousel from "react-material-ui-carousel";
// import { callApi } from "../api";
// import { Header } from "../components";
// import "./Home.css";
// const useStyles = makeStyles({
//   root: {
//     textAlign: "center",
//     height: 250,
//     display: "flex",
//     justifyContent: "center",
//     //   alignItems:'center'
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// const Home = ({ token, setToken }) => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     const getData = async () => {
//       const activities = await callApi({ url: "/activities" });
//       const routines = await callApi({ url: "/routines" });
//       setData({ activities, routines });
//     };
//     getData();
//   }, [token]);
//   return (
//     <>
//       <Header token={token} name="Home" setToken={setToken} />
//       <div
//         style={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           flexFlow: "column",
//           alignItems: "center",
//         }}
//       >
//         <Featured data={data ? data.activities : []} name="Activities" />
//         <Featured data={data ? data.routines : []} name="Routines" />
//       </div>
//     </>
//   );
// };

// const Featured = ({ data, name }) => {
//   return (
//     <div style={{ height: "300px", margin: "20px", width: "500px" }}>
//       <Typography variant="h4">Featured {name}</Typography>
//       <Carousel
//         animation="slide"
//         indicators="false"
//         style={{ height: "300px", width: "600px" }}
//         className="item"
//         navButtonsAlwaysVisible="false"
//         navButtonsAlwaysInvisible="true"
//       >
//         {data &&
//           data.length &&
//           data
//             .slice(0, Math.floor(data.length / 2) + 1)
//             .map((item, i) => <Item className="item" key={i} item={item} />)}
//       </Carousel>
//     </div>
//   );
// };

// const Item = ({ item }) => {
//   const classes = useStyles();
//   return (
//     <Card className={classes.root}>
//       <CardContent style={{ marginTop: "10px" }}>
//         <Typography variant="h5" component="h2" gutterBottom>
//           {item.name}
//         </Typography>
//         <Typography
//           className={classes.title}
//           color="textSecondary"
//           gutterBottom
//         >
//           {item.creatorName && "by: " + item.creatorName}
//         </Typography>
//         <br />
//         <Typography variant="body2" component="p">
//           {item.description}
//           {item.goal}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default Home;
