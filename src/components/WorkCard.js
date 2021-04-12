import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";

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
  },
  heading: {
    fontSize: "25px",
    fontFamily: "Yu Mincho",
  },
  passage: {
    fontSize: "15px",
    lineHeight: 2,
    fontFamily: "Yu Mincho",
  },
  modalAction: {
    textAlign: "center",
  },
}));

export default function WorkCard(props) {
  const classes = useStyles();
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <CardContent>
          <h3 className={classes.heading}>作品タイトル</h3>
          <p className={classes.passage}>
            この作品の説明 この作品の説明 この作品の説明。
          </p>
          <p className={classes.passage}>(15号, 2021年04月制作)</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button onClick={() => setIsOpen(true)}>
            <NeuButton>詳しく</NeuButton>
          </Button>
          <Modal
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
                backgroundColor: "rgba(255, 255, 255, 0.75)",
              },
              content: {
                left: "0px",
                width: "100%",
                border: "1px solid #ccc",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                backgroundColor: "#dde6f0",
                // position: "absolute",
                // top: "40px",
                // right: "40px",
                // bottom: "40px",
                // padding: "20px",
                // overflow: "auto",
                // outline: "none",
              },
            }}
          >
            <DetailScreen />
            <div className={classes.modalAction}>
              <Button onClick={() => setIsOpen(false)}>
                <NeuButton>閉じる</NeuButton>
              </Button>
              <NeuButton>質問する</NeuButton>
              <NeuButton>購入する</NeuButton>
            </div>
          </Modal>
        </CardActions>
      </CardContent>
    </Card>
  );
}
