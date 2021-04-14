// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import Link from "@material-ui/core/Link";
// // import Home from "./Home";
// import "./About.css";
// import { callApi } from "../api";

// const useStyles = makeStyles((theme) => ({
//   about: {
//     position: "relative",
//     backgroundColor: theme.palette.grey[800],
//     color: theme.palette.common.white,
//     marginBottom: theme.spacing(4),
//     backgroundImage:
//       "url(https://i.postimg.cc/4xz9x0kD/gaslamp-quarter-archway.jpg)",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//   },
//   overlay: {
//     position: "absolute",
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     backgroundColor: "rgba(0,0,0,.3)",
//   },
//   mainFeaturedPostContent: {
//     position: "relative",
//     padding: theme.spacing(3),
//     [theme.breakpoints.up("md")]: {
//       padding: theme.spacing(6),
//       paddingRight: 0,
//     },
//   },
// }));

// const About = (props) => {
//   const classes = useStyles();
//   const { post } = props;

//   return (
//     <Paper
//       className={classes.About}
//       style={{ backgroundImage: `url(${post.image})` }}
//     >
//       {/* Increase the priority of the hero background image */}
//       {
//         <img
//           style={{ display: "none" }}
//           src={post.image}
//           alt={post.imageText}
//         />
//       }
//       <div className={classes.overlay} />
//       <Grid container>
//         <Grid item md={6}>
//           <div className={classes.mainFeaturedPostContent}>
//             <Typography
//               component="h1"
//               variant="h3"
//               color="inherit"
//               gutterBottom
//             >
//               {post.title}
//             </Typography>
//             <Typography variant="h5" color="inherit" paragraph>
//               {post.description}
//             </Typography>
//             <Link variant="subtitle1" href="#">
//               {post.linkText}
//             </Link>
//           </div>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// About.propTypes = {
//   post: PropTypes.object,
// };

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
  },
  media: {
    height: 500,
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image="https://i.postimg.cc/4xz9x0kD/gaslamp-quarter-archway.jpg"
          title="Gasslamp Quarter Downtown San Diego"
        />
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography gutterBottom variant="h4" component="h1">
              Rhino Coffee
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body1"
              color="textPrimary"
              component="p"
              justifyContent="center"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque. Quaerat provident commodi consectetur veniam
              similique ad earum omnis ipsum saepe, voluptas, hic voluptates
              pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis!
            </Typography>
          </div>
        </CardContent>
        {/* </CardActionArea> */}
        {/* <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions> */}
      </Card>
      <Card className={classes.root}>
        {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image="https://i.postimg.cc/SQzFmTy7/coffee-belt-2.jpg"
          title="World's Coffee Belt"
        />
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography gutterBottom variant="h4" component="h1">
              Coffee Roots
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body1"
              color="textPrimary"
              component="p"
              justifyContent="center"
            >
              Oh coffee, and what a rich history it has had since its birthplace
              in the hills of Ethiopia. To this day, its popularity is
              conitnually growing all over the world. Through the many miles it
              has traveled, it's been contested, shared, stolen, and obsessed
              over. Its roots in Africa help tell that story. We at Rhino Coffee
              appreciate these roots and how they have played a large part of
              that journey of coffee, its popularity, and how it continues to
              enhance our lives everyday. So from our table to yours, we hope
              our products will be something for all to share and enjoy!
            </Typography>
          </div>
        </CardContent>
        {/* </CardActionArea> */}
        {/* <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions> */}
      </Card>
    </>
  );
};

export default About;
