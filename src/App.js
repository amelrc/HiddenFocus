import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import WhatNow from "./components/WhatNow";
import Gallery from "./components/Gallery.jsx";
import Show from "./components/Show.jsx";
// import Error from "./Error";

console.log("hello");
const ReactRouterSetup = () => {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/whatnow" component={WhatNow} />
          <Route exact path="/menu/:userName" component={Gallery} />
          <Route exact path="/gallery/:userName" component={Show} />
          <Route exact path="/gallery/:userName/:tabName" component={Show} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
};

export default ReactRouterSetup;
