import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../App.css";

import Menu from "./Menu";
import ImgHome from "../images/WEB 0789-1500x1000--517-kb.jpg";

const HeaderHome = styled.h1`
  text-align: left;
  // font: normal normal 100 78px/40px Roxborough CF;
  color: #331c65;
  text-transform: capitalize;
`;
const SubTitle = styled.h4`
  text-align: left;
  font: normal normal normal 22px/27px Lato;
  color: #331c65;
  text-transform: capitalize;
`;
const Phrase = styled.h3`
  text-align: left;
  font: normal normal normal 46px/56px Mrs Saint Delafield;
  letter-spacing: 0px;
  color: #1c161f;
`;

export const PageTransition = {
  in: {
    opacity: 1,
    // x: 0,
  },
  out: {
    opacity: 0,
    // x: "-100vh",
  },
};
const Home = () => {
  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={PageTransition}
        style={{ alignSelf: "center" }}
      >
        <Menu />
        <div>
          <HeaderHome>hidden focus</HeaderHome>
          <SubTitle>photography by ray hanson</SubTitle>
        </div>

        <Link to="/gallery">
          <div className="img-hover-zoom">
            <img style={{ width: "100%" }} src={ImgHome} alt="home" />
          </div>
        </Link>

        <Phrase>Each of our lives is a different way of seeing</Phrase>
      </motion.div>
    </>
  );
};
export default Home;
