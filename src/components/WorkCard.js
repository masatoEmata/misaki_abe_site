import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import NeuButton from "./NeuButton";

export default function WorkCard() {
  return (
    <Card>
      <CardMedia
        class="cardMedia"
        image="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207_0.jpg"
        title="Image title"
      />
      <CardContent class="cardContent">
        <CardContent class="cardContentInner">
          <h3 class="threadHeadingMini">作品タイトル</h3>
          <p class="passage">この作品の説明 この作品の説明 この作品の説明。</p>
          <p class="passage">(15号, 2021年04月制作)</p>
        </CardContent>
        <CardActions>
          <NeuButton path="/works/detail/">詳しく</NeuButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
