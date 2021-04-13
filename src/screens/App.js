import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import TopScreen from "./TopScreen";
import SalesListScreen from "./SalesListScreen";
import DetailScreen from "./DetailScreen";

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">
        <button>show PageOne when you click this!!</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={TopScreen} />
      <Route path="/works/" exact component={SalesListScreen} />
      <Route path="/works/detail/" exact component={DetailScreen} />
    </BrowserRouter>
  );
};

export default App;
