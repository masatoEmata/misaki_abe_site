import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import firebase from "firebase";

import TopScreen from "./TopScreen";
import WorkListScreen from "./WorkListScreen";
import DetailScreen from "./DetailScreen";
import ContactScreen from "./ContactScreen";
import ContactThanksScreen from "./ContactThanksScreen";
import ProfileScreen from "./ProfileScreen";

const firebaseConfig = {
  apiKey: "AIzaSyDAfNwgSJ9LRBVdhm9hIl-5aW5w6XX8Fxo",
  authDomain: "misaki-abe.firebaseapp.com",
  projectId: "misaki-abe",
  storageBucket: "misaki-abe.appspot.com",
  messagingSenderId: "595803873194",
  appId: "1:595803873194:web:a09b8b7d6b20b11fb315d3",
  measurementId: "G-HWLHMWNPQ3",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
require("firebase/firestore");

const App = () => {
  const [work_paths, setWorks] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection("works").orderBy("create_date", "desc");
    ref.onSnapshot((snapshot) => {
      const tmp_work_paths = [];
      snapshot.forEach((doc) => {
        tmp_work_paths.push(doc.id);
      });
      setWorks(tmp_work_paths);
    });
  }, []);

  return (
    <BrowserRouter>
      <Route path="/" exact component={TopScreen} />
      <Route path="/works/" exact component={WorkListScreen} />
      <Route path="/contact/" exact component={ContactScreen} />
      <Route path="/contact/thanks/" exact component={ContactThanksScreen} />
      <Route path="/profile/" exact component={ProfileScreen} />
      {work_paths.map((path) => (
        <Route
          key={path}
          path={`/works/detail/${path}/`}
          exact
          component={DetailScreen}
        />
      ))}
    </BrowserRouter>
  );
};

export default App;
