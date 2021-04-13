import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

import NeuButton from "../components/NeuButton";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#dde6f0",
    borderStyle: "none",
    boxShadow: "none",
  },
  cardMedia: {
    paddingTop: "100%", // 16:9
  },
  heading: {
    fontSize: 20,
    fontFamily: "Yu Mincho",
  },
  passage: {
    fontSize: 16,
    lineHeight: 2,
    fontFamily: "Yu Mincho",
  },
}));

export default function DetailScreen(props) {
  const classes = useStyles();
  const { history } = props;
  return (
    <div style={{ backgroundColor: "#dde6f0", flex: 1 }}>
      <Grid
        // item
        xs={12}
        sm={6}
        md={30}
      >
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <h3 className={classes.heading}>作品タイトル</h3>
            <p className={classes.passage}>
              この作品の説明 この作品の説明 この作品の説明。
            </p>
            <p className={classes.passage}>(15号, 2021年04月制作)</p>
          </CardContent>
        </Card>
      </Grid>
      <div className={classes.modalAction}>
        <NeuButton path="goBack">閉じる</NeuButton>
        <NeuButton>購入する</NeuButton>
        <NeuButton path="/works/">質問する</NeuButton>
      </div>
    </div>
  );
}
