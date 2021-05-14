import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import Show from "./components/Show.jsx";
import Header from "./components/Header.jsx";

import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu";
import WhatNow from "./pages/WhyNow";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Influences from "./pages/Influences";
import Latf from "./pages/Latf/Latf.jsx";
import Lightscapes from "./pages/Lightscapes/Lightscapes.jsx";
import Contest from "./pages/Contest.jsx";
import Angkor from "./pages/Angkor/Angkor.jsx";
import Enescu from "./pages/Enescu/Enescu.jsx";
import Mexico from "./pages/Mexico/Mexico.jsx";
import Amigos from "./pages/Amigos/Amigos.jsx";
import WrongHeader from "./components/WrongHeader.jsx";
import CircleComponent from "./components/Circle.jsx";
import Test from "./pages/Test.jsx";

// import Error from "./Error";

const App = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReactRouterSetup = () => {
  // const [open, setOpen] = React.useState(false);
  return (
    <HashRouter>
      <AnimatePresence exitBeforeEnter>
        <App>
          {/* <Header /> */}
          <WrongHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/test" component={CircleComponent} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/whynow" component={WhatNow} />
            <Route exact path="/look-at-the-flowers" component={Latf} />
            <Route exact path="/lightscapes" component={Lightscapes} />
            <Route exact path="/george-enescu" component={Enescu} />
            <Route exact path="/show-look-at-the-flowers" component={Mexico} />
            <Route exact path="/cuatro-amigos" component={Amigos} />
            <Route exact path="/influences" component={Influences} />
            <Route exact path="/angkor-wat" component={Angkor} />
            <Route exact path="/contest" component={Contest} />
            <Route exact path="/menu/:topic" component={Gallery} />
            <Route exact path="/gallery/:topic" component={Show} />
            <Route exact path="/gallery/:topic/:tabName" component={Show} />
          </Switch>
        </App>
      </AnimatePresence>
    </HashRouter>
  );
};

export default ReactRouterSetup;
