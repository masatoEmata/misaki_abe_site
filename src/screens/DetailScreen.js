import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import NeuButton from "../components/NeuButton";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import DocumentMeta from "react-document-meta";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

import { dateToString } from "../utils/dateToString";

export default function DetailScreen(props) {
  const history = useHistory();
  const path = history.location.pathname;
  console.log(path);
  const meta = {
    title: "作品詳細 | 阿部美咲 Misaki Abe",
    description:
      "絵画・映像の作家、阿部美咲の作品詳細ページ。詳しい画像と説明を掲載しております。お問い合わせ・購入も受け付けています。",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  const [work, setWork] = useState([]);
  const availabile_label = work.availability ? "販売中" : null;

  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection("works").where("path", "==", path.split("/")[3]);
    ref.onSnapshot((snapshot) => {
      let tmp_work;
      snapshot.forEach((doc) => {
        const data = doc.data();
        tmp_work = {
          id: doc.id,
          title: data.title,
          path: data.path,
          description: data.description,
          create_date: dateToString(data.create_date),
          size: data.size,
          img_url: data.img_url,
          availability: data.availability,
        };
      });
      setWork(tmp_work);
    });
  }, []);

  return (
    <DocumentMeta {...meta}>
      <React.Fragment>
        <CssBaseline />
        <ScrollTop />
        <main>
          <div class="container">
            <div class="detailCard">
              <img class="detailImg" src={work.img_url} alt={work.title} />
              <div class="cardContentDetail">
                <div>
                  <h3 class="threadHeading">{work.title}</h3>
                </div>
                <p class="passage">{work.description}</p>
                <p class="passage">
                  {work.size}, {work.create_date}
                </p>
              </div>
            </div>
            <label class="cardActionLabelDetail">{availabile_label}</label>
            <div class="cardActionDetail">
              <NeuButton path="goBack">戻る</NeuButton>
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
