import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import DocumentMeta from "react-document-meta";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Thread from "../components/Thread";
import WorkCard from "../components/WorkCard";
import Switch from "../components/Switch";

// const cards = [1, 2, 3, 4, 5];
export default function SalesList() {
  const meta = {
    title: "作品の一覧と購入 | 阿部美咲 Misaki Abe",
    description:
      "絵画・映像の作家、阿部美咲の全作品の一覧、販売中の商品はこちらからご確認ください。",
    canonical: "/works/",
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
        <Header />
        <main>
          {/* Hero unit */}
          <div className="listSection">
            <Container maxWidth="sm">
              <Thread heading={"Oil Painting"}></Thread>
              <div>
                <Grid container spacing={2} justify="center">
                  <Switch />
                </Grid>
              </div>
            </Container>
          </div>
          {/* End hero unit */}
          <div class="listSection">
            <Container class="listCardGrid">
              <Grid container spacing={4}>
                {/* {cards.map((card) => ( */}
                <Grid item xs={12} sm={6} md={30}>
                  <WorkCard
                    title="空気標本"
                    description="感覚の保存"
                    size="4号(333×242㎜)"
                    create_date="2021年11月制作"
                    img_url="https://imagecompressor.com/files/zh3w1gbw4mgiynuc/o_1f3deos7osulmkvlo1h241se62g/compressed-ydyg.jpg?tutv"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={30}>
                  <WorkCard
                    title="空気標本"
                    description="感覚の保存"
                    size="4号(333×242㎜)"
                    create_date="2021年11月制作"
                    img_url="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fbefore-going-to-sleep-202111.jpg?alt=media&token=937ce7d7-4939-4d48-9f21-3e0c8f4e8248"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={30}>
                  <WorkCard
                    title="空気標本"
                    description="感覚の保存"
                    size="4号(333×242㎜)"
                    create_date="2021年11月制作"
                    img_url="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fluminous-zone-202102.jpg?alt=media&token=7ce61d65-f3f4-40e6-9a47-01c284906b5d"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={30}>
                  <WorkCard
                    title="空気標本"
                    description="感覚の保存"
                    size="4号(333×242㎜)"
                    create_date="2021年11月制作"
                    img_url="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fbefore-going-to-sleep-202111.jpg?alt=media&token=937ce7d7-4939-4d48-9f21-3e0c8f4e8248"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={30}>
                  <WorkCard
                    title="空気標本"
                    description="感覚の保存"
                    size="4号(333×242㎜)"
                    create_date="2021年11月制作"
                    img_url="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fluminous-zone-202102.jpg?alt=media&token=7ce61d65-f3f4-40e6-9a47-01c284906b5d"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={30}>
                  <WorkCard
                    title="空気標本"
                    description="感覚の保存"
                    size="4号(333×242㎜)"
                    create_date="2021年11月制作"
                    img_url="https://firebasestorage.googleapis.com/v0/b/misaki-abe.appspot.com/o/works%2Fbefore-going-to-sleep-202111.jpg?alt=media&token=937ce7d7-4939-4d48-9f21-3e0c8f4e8248"
                  />
                </Grid>
                {/* ))} */}
              </Grid>
            </Container>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    </DocumentMeta>
  );
}
