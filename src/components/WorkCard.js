import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import NeuButton from "./NeuButton";
import { Description } from "@material-ui/icons";

export default function WorkCard(props) {
  const { title, description, size, create_date, img_url } = props;

  return (
    <Card class="cardContainer">
      {/* <CardMedia class="cardMedia" image={img_url} title={title} /> */}
      <img class="cardMedia" src={img_url} alt={title} />
      <CardContent class="cardContent">
        <CardContent class="cardContentInner">
          <h3 class="threadHeadingMini">{title}</h3>
          <p class="passage">{description}</p>
          <p class="passage">
            ({size}, {create_date}制作)
          </p>
        </CardContent>
        <CardActions>
          <NeuButton path="/works/detail/">詳しく</NeuButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
