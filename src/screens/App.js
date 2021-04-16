import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import TopScreen from "./TopScreen";
import SalesListScreen from "./WorkListScreen";
import DetailScreen from "./DetailScreen";
import ContactScreen from "./ContactScreen";
import ProfileScreen from "./ProfileScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={TopScreen} />
      <Route path="/works/" exact component={SalesListScreen} />
      <Route path="/works/detail/" exact component={DetailScreen} />
      <Route path="/contact/" exact component={ContactScreen} />
      <Route path="/profile/" exact component={ProfileScreen} />
    </BrowserRouter>
  );
};

export default App;

// 外部ファイル読み込み https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
