import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Menu from "./Menu";

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
          <img src="https://via.placeholder.com/600x400.png/09f/fff" alt="1" />
        </Link>

        <Phrase>Each of our lives is a different way of seeing</Phrase>
      </motion.div>
    </>
  );
};
export default Home;
