import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import Home from "./components/Home.jsx";
import Menu from "./components/Menu";

import WhatNow from "./components/WhatNow";
import Gallery from "./components/Gallery.jsx";
import Show from "./components/Show.jsx";
import Influences from "./components/Influences";
import Header from "./components/Header.jsx";
import Latf from "./components/Latf.jsx";
import Lightscapes from "./components/Lightscapes.jsx";
import Contest from "./pages/Contest.jsx";

import SmoothScroll from "./hooks/useHorizontal.jsx";
import Angkor from "./components/Angkor.jsx";

// import Error from "./Error";

const App = styled.div`
  // position: relative;
  width: 100%;
  // height: 100vh;
  justify-content: center;
  display: flex;
`;

const ReactRouterSetup = () => {
  // const [open, setOpen] = React.useState(false);
  return (
    <HashRouter>
      <AnimatePresence exitBeforeEnter>
        <App>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/whatnow" component={WhatNow} />
            <Route exact path="/look at the flowers" component={Latf} />
            <Route exact path="/lightscapes" component={Lightscapes} />
            <Route exact path="/influences" component={Influences} />
            <Route exact path="/angkor" component={Angkor} />
            <Route exact path="/smooth" component={SmoothScroll} />
            <Route exact path="/contest" component={Contest} />
            <Route exact path="/menu/:userName" component={Gallery} />
            <Route exact path="/gallery/:userName" component={Show} />
            <Route exact path="/gallery/:userName/:tabName" component={Show} />
          </Switch>
        </App>
      </AnimatePresence>
    </HashRouter>
  );
};

export default ReactRouterSetup;
