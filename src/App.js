import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./components/Home.jsx";
import Menu from "./components/Menu";

import WhatNow from "./components/WhatNow";
import Gallery from "./components/Gallery.jsx";
import Show from "./components/Show.jsx";
import Influences from "./components/Influences";
import Header from "./components/Header.jsx";

// import Error from "./Error";

const ReactRouterSetup = () => {
  // const [open, setOpen] = React.useState(false);
  return (
    <HashRouter>
      <AnimatePresence exitBeforeEnter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/whatnow" component={WhatNow} />
          <Route exact path="/influences" component={Influences} />
          <Route exact path="/menu/:userName" component={Gallery} />
          <Route exact path="/gallery/:userName" component={Show} />
          <Route exact path="/gallery/:userName/:tabName" component={Show} />
        </Switch>
      </AnimatePresence>
    </HashRouter>
  );
};

export default ReactRouterSetup;
