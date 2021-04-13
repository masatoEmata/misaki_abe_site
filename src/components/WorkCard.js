import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

import DetailScreen from "../screens/DetailScreen";
import NeuButton from "./NeuButton";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: "#dde6f0",
    padding: 0,
  },
  heading: {
    fontSize: 20,
    fontFamily: "Yu Mincho",
  },
  passage: {
    fontSize: 16,
    lineHeight: 1.5,
    fontFamily: "Yu Mincho",
  },
  modalAction: {
    textAlign: "center",
  },
  cardContentInner: {
    paddingBottom: 0,
  },
}));

export default function WorkCard(props) {
  const classes = useStyles();
  // const history = useHistory();
  const detail_page = "/works/detail/";
  // function pushHistory() {
  //   history.push(detail_page);
  // }

  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207_0.jpg"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <CardContent className={classes.cardContentInner}>
          <h3 className={classes.heading}>作品タイトル</h3>
          <p className={classes.passage}>
            この作品の説明 この作品の説明 この作品の説明。
          </p>
          <p className={classes.passage}>(15号, 2021年04月制作)</p>
        </CardContent>
        <CardActions>
          {/* <Button onClick={() => setIsOpen(true)}> */}
          <NeuButton path="/works/detail/">詳しく</NeuButton>
          {/* </Button> */}
          {/* <Modal
            keepMounted
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // backgroundColor: "rgba(255, 255, 255, 0.75)",
                backgroundColor: "rgba(0,0,0,0.35)",
              },
              content: {
                left: 0,
                width: "100%",
                border: "1px solid #ccc",
                WebkitOverflowScrolling: "touch",
                borderRadius: 4,
                backgroundColor: "#dde6f0",
                position: "absolute",
                top: 5,
                left: 5,
                right: 5,
                bottom: 5,
                // padding: 20,
                // overflow: "auto",
                // outline: "none",
              },
            }}
          > */}
          {/* <DetailScreen />
          {/* </Modal> */}
        </CardActions>
      </CardContent>
    </Card>
  );
}
