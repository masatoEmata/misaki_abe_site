import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import NeuButton from "../components/NeuButton";
import Footer from "../components/Footer";
// import ScrollTop from "../components/ScrollTop";
import DocumentMeta from "react-document-meta";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

import Header from "../components/Header";
import { dateToString } from "../utils/dateToString";
import { numComma } from "../utils/numComma";

export default function DetailScreen(props) {
  const history = useHistory();
  const path = history.location.pathname;
  const meta = {
    title: "作品詳細 | 阿部美咲 Misaki Abe",
    description:
      "絵画・映像の作家、阿部美咲の作品詳細ページ。詳しい画像と説明を掲載しております。お問い合わせ・購入も受け付けています。",
    canonical: path,
    meta: {
      charset: "utf-8",
    },
  };

  // console.log(path);

  const [work, setWork] = useState([]);
  const [availabileLabel, setAvailabileLabel] = useState(false);

  useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-PQ27B5M");

    const db = firebase.firestore();
    const ref = db.collection("works").doc(path.split("/")[3]);
    ref
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const tmp_work = {
            title: data.title,
            path: data.path,
            description: data.description,
            create_date: dateToString(data.create_date),
            size: data.size,
            img_url: data.img_url,
            availability: data.availability,
            materials: data.materials,
            price: data.price,
          };
          setWork(tmp_work);
          if (tmp_work.availability) {
            const commaPrice = numComma(tmp_work.price);
            setAvailabileLabel(`販売中 ${commaPrice}`);
          }
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [path]);

  return (
    <DocumentMeta {...meta}>
      <React.Fragment>
        <CssBaseline />
        {/* <ScrollTop /> */}
        <div class="container">
          <Header />
          <main>
            <div class="detailCard">
              <img class="detailImg" src={work.img_url} alt={work.title} />
              <div class="cardContentDetail">
                <div>
                  <h3 class="threadHeading">{work.title}</h3>
                </div>
                <p class="passage">{work.description}</p>
                <p class="passage">
                  {work.size}, {work.materials}
                </p>
                <p class="passage">{work.create_date}制作</p>
              </div>
            </div>
            <label class="cardActionLabelDetail">{availabileLabel}</label>
            <div class="cardActionDetail">
              <NeuButton path="goBack">戻る</NeuButton>
              {/* <NeuButton>購入する</NeuButton>
              <NeuButton>質問する</NeuButton> */}
              <NeuButton path="/contact/">質問または購入する</NeuButton>
            </div>
          </main>
        </div>
        <Footer />
      </React.Fragment>
    </DocumentMeta>
  );
}
