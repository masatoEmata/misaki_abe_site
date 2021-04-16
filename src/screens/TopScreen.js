import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

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

  document.title = "TOPページ | 阿部美咲 Misaki Abe";

  return (
    <React.Fragment>
      <CssBaseline />
      <div class="container">
        <Header shadow="none" />
        <main class="mainContainer">
          <section class="topWorkDisplay">
            <section class="topSingleDisplay">
              <div class="topSingleDisplayItem">
                <a href="/work/xxx.html">
                  <img
                    class="topSingleDisplayImg neumoOutShadow"
                    src="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207.jpg"
                    alt=""
                  />
                </a>
                <div>
                  <p class="caption">XXXXXXX</p>
                </div>
              </div>
            </section>
            <section class="topSingleText passage">
              <p>
                感覚を保存したい。
                <br />
                道を歩いているときの静かな感覚と感情。
                <br />
                淡い光と陰がゆっくりと移ろう時間。
                <br />
                そのとき感じる、温度と湿度。
              </p>
            </section>
            <section class="multiDisplay">
              <div class="multiDisplayLarge">
                <div>
                  <div>
                    <a href="/work/xxx.html">
                      <img
                        class="multiDisplayLargeImg neumoOutShadow"
                        src="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207_0.jpg"
                        alt=""
                      />
                    </a>
                    <div>
                      <p class="caption">XXXXXXX</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="multiDisplaySmall">
                <div>
                  <div>
                    <a href="/work/b06xxxml">
                      <img
                        class="multiDisplaySmallImg neumoOutShadow"
                        src="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207_2.jpg"
                        alt=""
                      />
                    </a>
                    <div>
                      <p class="caption">XXXXXXX</p>
                    </div>
                  </div>
                  <div>
                    <a href="/work/b06xxxml">
                      <img
                        class="multiDisplaySmallImg neumoOutShadow"
                        src="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207_1.jpg"
                        alt=""
                      />
                    </a>
                    <div>
                      <p class="caption">XXXXXXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="topSingleText passage">
              <p>
                ゆりかごのような絵が描けたらと思う。
                <br />
                それは、こころが安らかになる空気の空間。
                <br />
                過去の記憶と、どこかで見聞きした情報の混じった、非現実的な空間。
              </p>
            </section>
          </section>
          <Profile />
          <Contact />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
