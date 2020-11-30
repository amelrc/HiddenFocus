import React from "react";
// react router
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
// pages
import Home from "./components/Home/Home.jsx";
import WhatNow from "./components/WhatNow";
import Gallery from "./components/Galleries/Gallery.jsx";
// import Error from "./Error";
import Show from "./components/Show/Show.jsx";
// navbar
import Menu from "./components/Menu/Menu.jsx";

const ReactRouterSetup = () => {
  return (
    // <HashRouter>
    <Router>
      <Menu />
      <Show />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <WhatNow />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/person/:id" children={<Show />}></Route>
        {/* <Route path="*">
            <Error />
          </Route> */}
      </Switch>
    </Router>
    //</HashRouter>
  );
};

export default ReactRouterSetup;
