import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Thread from "../components/Thread";
import WorkCard from "../components/WorkCard";
import Switch from "../components/Switch";

const cards = [1, 2, 3, 4, 5];

export default function SalesList() {
  return (
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
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={30}>
                  <WorkCard />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}