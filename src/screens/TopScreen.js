import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import DocumentMeta from "react-document-meta";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import History from "../components/History";

export default function TopScreen() {
  const history = useHistory();
  const meta = {
    title: "TOPページ | 阿部美咲 Misaki Abe",
    description:
      "絵画・映像の作家、阿部美咲の公式サイトTOP。油絵を始めとする絵画や映像作品を出展・販売中。",
    canonical: "/",
    meta: {
      charset: "utf-8",
    },
  };

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

    const head = document.getElementsByTagName("head")[0];
    const scriptUrl = document.createElement("script");
    scriptUrl.type = "text/javascript";
    scriptUrl.src = "https://sdk.form.run/js/v2/formrun.js";
    head.appendChild(scriptUrl);
  }, []);

  return (
    <DocumentMeta {...meta}>
      <React.Fragment>
        <CssBaseline />
        <div class="container">
          <Header />
          <main class="mainContainer">
            <section class="topWorkDisplay">
              <section class="topSingleDisplay">
                <div
                  class="topSingleDisplayItem"
                  onClick={() => {
                    history.push({
                      pathname: "/works/detail/before-going-to-sleep/",
                    });
                  }}
                >
                  <img
                    class="topSingleDisplayImg neumoOutShadow"
                    src="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fbefore-going-to-sleep.jpg?alt=media&token=f6af4183-b6d3-4ccf-8cf3-6e90a58503a2"
                    alt="ねむるまえ"
                  />
                  {/* </a> */}
                  <div>
                    <p class="caption">ねむるまえ</p>
                  </div>
                </div>
              </section>
              <section class="topSingleText passage">
                <p>
                  記憶とイメージの融合。
                  <br />
                  <br />
                  生まれ育った別府の湯気の記憶が、
                  <br />
                  時間の経過とともに抜け落ちていく。
                  <br />
                  <br />
                  それを今の自分が補う。
                  <br />
                  ロシアの霧深い映画のシーンで。 雨の日の煙草の匂いで。
                </p>
              </section>
              <section class="multiDisplay">
                <div class="multiDisplayLarge">
                  <div>
                    <div
                      onClick={() => {
                        history.push({
                          pathname: "/works/detail/day-dream/",
                        });
                      }}
                    >
                      <img
                        class="multiDisplayLargeImg neumoOutShadow"
                        src="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fthumbnails%2Fday-dream_770x770.jpg?alt=media&token=261f047b-93e0-4e88-b614-bc9c8a6a027e"
                        alt="白昼夢"
                      />
                      <div>
                        <p class="caption">白昼夢</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="multiDisplaySmall">
                  <div>
                    <div
                      onClick={() => {
                        history.push({
                          pathname: "/works/detail/the-night-before-the-light/",
                        });
                      }}
                    >
                      <img
                        class="multiDisplaySmallImg neumoOutShadow"
                        src="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fthumbnails%2Fthe-night-before-the-light_770x770.JPG?alt=media&token=5d7e6694-dc9d-4656-a32b-2a310e31804c"
                        alt="光芒前夜"
                      />
                      <div>
                        <p class="caption">光芒前夜</p>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        history.push({
                          pathname: "/works/detail/air-specimen/",
                        });
                      }}
                    >
                      <img
                        class="multiDisplaySmallImg neumoOutShadow"
                        src="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fthumbnails%2Fair-specimen_770x770.JPG?alt=media&token=4f5269cc-5c02-4211-85e5-86c8ed9d2679"
                        alt="空気標本"
                      />
                      <div>
                        <p class="caption">空気標本</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="topSingleText passage">
                <p>
                  過去の私の体験と、今のイメージが混交した、
                  <br />
                  主観的な空間を記録したい。
                  <br />
                  <br />
                  それは新たな経験と情報により、
                  <br />
                  絶え間なく更新されていく。
                </p>
              </section>
            </section>
            <History />
            <Contact />
          </main>
          <Footer />
        </div>
      </React.Fragment>
    </DocumentMeta>
  );
}
