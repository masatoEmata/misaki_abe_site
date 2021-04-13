import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Thread from "../components/Thread";
import Form from "../components/Form";

import WorkCard from "../components/WorkCard";
import Switch from "../components/Switch";

const useStyles = makeStyles((theme) => ({
  listSection: {
    backgroundColor: "#dde6f0",
    padding: theme.spacing(6, 0, 5),
  },
  cardGrid: {
    flex: 1,
    backgroundColor: "#dde6f0",
  },
  container: {
    backgroundColor: "#dde6f0",
  },
  mainContainer: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  mainDisplay: {
    textAlign: "center",
  },
  singleDisplay: {
    margin: "0 auto",
    paddingTop: "40px",
  },
  singleDisplayItem: {
    textAlign: "center",
    display: "inlineBlock",
  },
  singleDisplayImg: {
    width: "54%",
    boxShadow:
      "-7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001",
  },
  caption: {
    fontSize: 18,
    fontFamily: "Yu Mincho",
    textAlign: "center",
    letterSpacing: "0.04rem",
    color: "#aaaaaa",
    marginTop: 5,
    marginBottom: 100,
  },
  singleText: {
    lineHeight: 2,
    fontSize: "medium",
    fontFamily: "Yu Mincho",
    textAlign: "center",
    marginBottom: 100,
  },
  multiDisplay: {
    marginTop: "100",
    tableLayout: "fixed",
    display: "flex",
  },
  multiDisplayLarge: {
    // display: "tableCell",
    width: "60%",
    verticalAlign: "middle",
    paddingTop: 80,
  },
  multiDisplayLargeImg: {
    width: "90%",
    height: "auto",
    boxShadow:
      "-7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001",
  },
  multiDisplaySmall: {
    display: "tableCell",
    verticalAlign: "middle",
    width: "40%",
  },
  multiDisplaySmallImg: {
    width: "90%",
    boxShadow:
      "-7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001",
  },
  otherAttribute: {
    marginBottom: 100,
  },
}));

export default function SalesList() {
  useEffect(() => {
    const head = document.getElementsByTagName("head")[0];
    const scriptUrl = document.createElement("script");
    scriptUrl.type = "text/javascript";
    scriptUrl.src = "https://sdk.form.run/js/v2/formrun.js";
    head.appendChild(scriptUrl);
  }, []);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <Header shadow="none" />
        <main className={classes.mainContainer}>
          <section className={classes.mainDisplay}>
            <section className={classes.singleDisplay}>
              <div className={classes.singleDisplayItem}>
                <a href="/work/xxx.html">
                  <img
                    className={classes.singleDisplayImg}
                    src="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207.jpg"
                    alt=""
                  />
                </a>
                <div>
                  <p className={classes.caption}>XXXXXXX</p>
                </div>
              </div>
            </section>
            <section className={classes.singleText}>
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
            <section className={classes.multiDisplay}>
              <div className={classes.multiDisplayLarge}>
                <div className={classes.ul}>
                  <div>
                    <a href="/work/xxx.html">
                      <img
                        className={classes.multiDisplayLargeImg}
                        src="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207_0.jpg"
                        alt=""
                      />
                    </a>
                    <div>
                      <p className={classes.caption}>XXXXXXX</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.multiDisplaySmall}>
                <div className={classes.ul}>
                  <div>
                    <a href="/work/b06xxxml">
                      <img
                        className={classes.multiDisplaySmallImg}
                        src="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207_2.jpg"
                        alt=""
                      />
                    </a>
                    <div>
                      <p className={classes.caption}>XXXXXXX</p>
                    </div>
                  </div>
                  <div>
                    <a href="/work/b06xxxml">
                      <img
                        className={classes.multiDisplaySmallImg}
                        src="https://masatoemata.github.io/misaki-abe.github.io/common/img/work/%E4%BD%9C%E5%93%81_201207_1.jpg"
                        alt=""
                      />
                    </a>
                    <div>
                      <p className={classes.caption}>XXXXXXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={classes.singleText}>
              <p>
                ゆりかごのような絵が描けたらと思う。
                <br />
                それは、こころが安らかになる空気の空間。
                <br />
                過去の記憶と、どこかで見聞きした情報の混じった、非現実的な空間。
              </p>
            </section>
          </section>
          <section className={classes.otherAttribute}>
            <Thread heading={"Profile"}>
              <div id="profile">
                プロフィール記入プロフィール記入プロフィール記入プロフィール記入
                <br />
                プロフィール記入プロフィール記入プロフィール記入
                <br />
                プロフィール記入プロフィール記入プロフィール記入
                <br />
                プロフィール記入プロフィール記入プロフィール記入
              </div>
            </Thread>
          </section>
          <section className={classes.otherAttribute}>
            <Thread heading={"Contact"}>
              <Form />
            </Thread>
          </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
