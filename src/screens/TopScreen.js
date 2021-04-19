import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import DocumentMeta from "react-document-meta";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Profile from "../components/Profile";

export default function TopScreen() {
  useEffect(() => {
    const head = document.getElementsByTagName("head")[0];
    const scriptUrl = document.createElement("script");
    scriptUrl.type = "text/javascript";
    scriptUrl.src = "https://sdk.form.run/js/v2/formrun.js";
    head.appendChild(scriptUrl);
  }, []);

  const meta = {
    title: "TOPページ | 阿部美咲 Misaki Abe",
    description:
      "絵画・映像の作家、阿部美咲の公式サイトTOP。油絵を始めとする絵画や映像作品を出展・販売中。",
    canonical: "/",
    meta: {
      charset: "utf-8",
    },
  };

  return (
    <DocumentMeta {...meta}>
      <React.Fragment>
        <CssBaseline />
        <div class="container">
          <Header shadow="none" />
          <main class="mainContainer">
            <section class="topWorkDisplay">
              <section class="topSingleDisplay">
                <div class="topSingleDisplayItem">
                  <a href="/works/detail/before-going-to-sleep/">
                    <img
                      class="topSingleDisplayImg neumoOutShadow"
                      src="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fbefore-going-to-sleep.jpg?alt=media&token=f6af4183-b6d3-4ccf-8cf3-6e90a58503a2"
                      alt="ねむるまえ"
                    />
                  </a>
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
                    <div>
                      <a href="/works/detail/day-dream/">
                        <img
                          class="multiDisplayLargeImg neumoOutShadow"
                          src="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fthumbnails%2Fday-dream_770x770.jpg?alt=media&token=261f047b-93e0-4e88-b614-bc9c8a6a027e"
                          alt="白昼夢"
                        />
                      </a>
                      <div>
                        <p class="caption">白昼夢</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="multiDisplaySmall">
                  <div>
                    <div>
                      <a href="/works/detail/the-night-before-the-light/">
                        <img
                          class="multiDisplaySmallImg neumoOutShadow"
                          src="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fthumbnails%2Fthe-night-before-the-light_770x770.JPG?alt=media&token=5d7e6694-dc9d-4656-a32b-2a310e31804c"
                          alt="光芒前夜"
                        />
                      </a>
                      <div>
                        <p class="caption">光芒前夜</p>
                      </div>
                    </div>
                    <div>
                      <a href="/works/detail/air-specimen/">
                        <img
                          class="multiDisplaySmallImg neumoOutShadow"
                          src="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fthumbnails%2Fair-specimen_770x770.JPG?alt=media&token=d543816f-ec00-4831-a7c6-0b7238a2b262"
                          alt="空気標本"
                        />
                      </a>
                      <div>
                        <p class="caption">空気標本</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="topSingleText passage">
                <p>
                  過去の体験と、今の私のイメージが混交した、
                  <br />
                  新たな虚実の空間と感覚を作りたい。
                  <br />
                  <br />
                  この空間と感覚は、私の新たな経験と情報により、
                  <br />
                  絶え間なく更新されていく。
                </p>
              </section>
            </section>
            <Profile />
            <Contact />
          </main>
          <Footer />
        </div>
      </React.Fragment>
    </DocumentMeta>
  );
}
