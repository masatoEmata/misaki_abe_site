import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import NeuButton from "../components/NeuButton";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import ScrollTop from "../components/ScrollTop";
import DocumentMeta from "react-document-meta";

export default function DetailScreen() {
  const meta = {
    title: "作品詳細 | 阿部美咲 Misaki Abe",
    description:
      "絵画・映像の作家、阿部美咲の作品詳細ページ。詳しい画像と説明を掲載しております。お問い合わせ・購入も受け付けています。",
    // canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <React.Fragment>
        <CssBaseline />
        <ScrollTop />
        {/* <Header /> */}
        <main>
          <div class="container">
            <div class="detailCard">
              <img
                class="detailImg"
                src="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207_0.jpg"
                alt=""
              />
              <div class="cardContent">
                <h3 class="threadHeading">作品タイトル</h3>
                <p class="passage">
                  この作品の説明 この作品の説明 この作品の説明。
                </p>
                <p class="passage">(15号, 2021年04月制作)</p>
              </div>
            </div>
            <div>
              <NeuButton path="goBack">閉じる</NeuButton>
              {/* <NeuButton>購入する</NeuButton>
        <NeuButton>質問する</NeuButton> */}
              <NeuButton path="/contact/">質問または購入する</NeuButton>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    </DocumentMeta>
  );
}
