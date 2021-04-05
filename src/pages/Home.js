import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { callApi } from "../api";
import { Header } from "../components";
import "./home.css";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    height: 250,
    display: "flex",
    justifyContent: "center",
    //   alignItems:'center'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Home = ({ token, setToken }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const activities = await callApi({ url: "/activities" });
      const routines = await callApi({ url: "/routines" });
      setData({ activities, routines });
    };
    getData();
  }, [token]);
  return (
    <>
      <Header token={token} name="Home" setToken={setToken} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexFlow: "column",
          alignItems: "center",
        }}
      >
        <Featured data={data ? data.activities : []} name="Activities" />
        <Featured data={data ? data.routines : []} name="Routines" />
      </div>
    </>
  );
};

const Featured = ({ data, name }) => {
  return (
    <div style={{ height: "300px", margin: "20px", width: "500px" }}>
      <Typography variant="h4">Featured {name}</Typography>
      <Carousel
        animation="slide"
        indicators="false"
        style={{ height: "300px", width: "600px" }}
        className="item"
        navButtonsAlwaysVisible="false"
        navButtonsAlwaysInvisible="true"
      >
        {data &&
          data.length &&
          data
            .slice(0, Math.floor(data.length / 2) + 1)
            .map((item, i) => <Item className="item" key={i} item={item} />)}
      </Carousel>
    </div>
  );
};

const Item = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent style={{ marginTop: "10px" }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {item.name}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {item.creatorName && "by: " + item.creatorName}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          {item.description}
          {item.goal}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
