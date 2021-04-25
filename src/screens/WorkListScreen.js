import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import DocumentMeta from "react-document-meta";
import firebase from "firebase";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Thread from "../components/Thread";
import WorkCard from "../components/WorkCard";
// import Switch from "../components/Switch";
import { dateToString } from "../utils/dateToString";

export default function SalesList() {
  const meta = {
    title: "作品の一覧と購入 | 阿部美咲 Misaki Abe",
    description:
      "絵画・映像の作家、阿部美咲の全作品の一覧、販売中の商品はこちらからご確認ください。",
    canonical: "/works/",
    meta: {
      charset: "utf-8",
    },
  };

  const [works, setWorks] = useState([]);

  function getFirestore(unsubscribe) {
    const db = firebase.firestore();
    const ref = db.collection("works").orderBy("create_date", "desc");
    unsubscribe = ref.onSnapshot(
      (snapshot) => {
        console.log("Get DB Snapshot");
        const tmp_works = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          tmp_works.push({
            id: doc.id,
            title: data.title,
            path: doc.id,
            description: data.description,
            create_date: dateToString(data.create_date),
            size: data.size,
            img_url_mini: data.img_url_mini,
            availability: data.availability,
          });
          console.log("mini", data.img_url_mini);
        });
        setWorks(tmp_works);
      },
      (error) => {
        console.log(error);
      }
    );
    return unsubscribe;
  }

  useEffect(() => {
    let unsubscribe = () => {};
    unsubscribe = getFirestore(unsubscribe);
    return unsubscribe;
  }, []);

  return (
    <DocumentMeta {...meta}>
      <React.Fragment>
        <CssBaseline />
        <div class="container">
          <Header />
          <main>
            {/* Hero unit */}
            <div class="listSection">
              <Container maxWidth="sm">
                <Thread heading={"Oil Painting"}></Thread>
                <div>
                  <Grid container spacing={2} justify="center">
                    {/* <Switch/> */}
                  </Grid>
                </div>
              </Container>
            </div>
            {/* End hero unit */}
            <div class="listSection">
              <Container class="listCardGrid">
                <Grid container spacing={4}>
                  {works.map((work) => (
                    <Grid key={work.id} item xs={12} sm={6} md={6}>
                      <WorkCard
                        title={work.title}
                        description={work.description}
                        create_date={work.create_date}
                        size={work.size}
                        img_url_mini={work.img_url_mini}
                        path={work.path}
                        availability={work.availability}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </div>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    </DocumentMeta>
  );
}
