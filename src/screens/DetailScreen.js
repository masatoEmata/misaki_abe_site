import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
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
  cardContent: {
    flexGrow: 1,
  },
  heading: {
    fontSize: "25px",
    fontFamily: "Yu Mincho",
  },
  passage: {
    fontSize: "18px",
    lineHeight: 2,
    fontFamily: "Yu Mincho",
  },
}));

export default function DetailScreen() {
  const classes = useStyles();

  return (
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
  );
}
