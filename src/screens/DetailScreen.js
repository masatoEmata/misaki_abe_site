import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NeuButton from "../components/NeuButton";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#dde6f0",
    flex: 1,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#dde6f0",
    borderStyle: "none",
    boxShadow: "none",
  },
  img: {
    width: "80%",
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
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img
          className={classes.img}
          src="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207_0.jpg"
          alt=""
        />
        <div className={classes.cardContent}>
          <h3 className={classes.heading}>作品タイトル</h3>
          <p className={classes.passage}>
            この作品の説明 この作品の説明 この作品の説明。
          </p>
          <p className={classes.passage}>(15号, 2021年04月制作)</p>
        </div>
      </div>
      <div className={classes.modalAction}>
        <NeuButton path="goBack">閉じる</NeuButton>
        <NeuButton>購入する</NeuButton>
        <NeuButton>質問する</NeuButton>
      </div>
    </div>
  );
}
