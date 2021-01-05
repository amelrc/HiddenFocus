import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../App.css";

import ImgHome from "../images/WEB-0789-1500x1000--517-kb.jpg";
import Header from "./Header";

const HeaderWrapper = styled.div`
  width: 68.3%;
  display: flex;
  flex-direction: column;
  align-self: center;
  z-index: 1;
`;

const HeaderHome = styled.h1`
  text-align: left;
  font: normal normal 100 78px/40px Roxborough CF Thin;
  color: #331c65;
  text-transform: capitalize;
  margin: 0;
`;
const SubTitle = styled.h4`
  font: normal normal normal 22px/27px Lato;
  color: #331c65;
  margin: 40px auto -40px 0;
`;
const Phrase = styled.h3`
  font: normal normal normal 46px/56px Mrs Saint Delafield;
  letter-spacing: 0px;
  color: #1c161f;
  margin: -70px 0 0 0;
  width: 47.7%;
  align-self: flex-end;
  z-index: 1;
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
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <HeaderWrapper>
          <HeaderHome>hidden focus</HeaderHome>
          <SubTitle>Photography by Ray Hanson</SubTitle>
        </HeaderWrapper>
        <div
          className="img-hover-zoom"
          style={{ width: "40%", margin: "0 auto" }}
        >
          <Link to="/gallery">
            <img style={{ width: "100%" }} src={ImgHome} alt="home" />
          </Link>
        </div>

        <Phrase>Each of our lives is a different way of seeing</Phrase>
      </motion.div>
    </>
  );
};
export default Home;
