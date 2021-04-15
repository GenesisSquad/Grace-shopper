import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import { Paper } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
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
              Rhino Coffee began as an idea from four Software Engineers
              (Jasper, Nick, Eddie and Juno) and their love of coffee and tea.
              Based out of Downtown San Diego, California, right in the heart of
              the Gaslamp Quarter which is also very rich with history, we came
              up with a project called Genesis Squad. Since we were at the
              beginning of our journey with this idea, we also wanted to name
              our brand based on the origin of coffee. Rhinos are beautiful
              animals and we thought that though not indigenous to Ethiopia, the
              horn of Africa had great symbolism and thus, Rhino Coffee was
              born.
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://i.postimg.cc/K8vKCM01/ethopia-coffee.jpg"
          title="Coffee Roots"
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
      </Card>
    </>
  );
};

export default About;
