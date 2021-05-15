import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../App.css";
import { device } from "../generalStyles";
import ImgHome from "../images/HOME/WEB-0789-1500x1000--517-kb.jpg";

const HeaderWrapper = styled.div`
  width: 68.3%;
  display: flex;
  flex-direction: column;
  align-self: center;
  z-index: 1;
`;
const HeaderHome = styled.h1`
  font: 40px/40px Roxborough CF Thin;
  color: #331c65;
  text-transform: capitalize;
  margin: 0;
  @media ${device.tablet} {
    font: 5vw/5vw Roxborough CF Thin;
  }
`;
const SubTitle = styled.h4`
  font: 16px/26px Lato;
  color: #331c65;
  margin: 14px auto - 36px 0;
  @media ${device.tablet} {
    font: 2vw/2vw Lato;
    margin: 14px auto -34px 2px;
  }
  @media ${device.small} {
    margin: 14px auto -4% 2px;
  }
`;
const Phrase = styled.h3`
  font: 24px/24px Mrs Saint Delafield;
  color: #1c161f;
  margin: -30px 10px;
  align-self: flex-end;
  z-index: 1;
  @media ${device.tablet} {
    font: 30px/30px Mrs Saint Delafield;
    align-self: center;
    margin: -40px 0 0 46%;
  }
  @media ${device.small} {
    font: 3vw/3vw Mrs Saint Delafield;
    margin: -60px 0 0 46%;
  }
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
          height: "100vh",
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
          style={{ width: "45%", margin: "0 auto" }}
        >
          <Link to="/gallery">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                // objectFit: "contain",
              }}
              src={ImgHome}
              alt="home"
            />
          </Link>
        </div>

        <Phrase>Each of our lives is a different way of seeing</Phrase>
      </motion.div>
    </>
  );
};
export default Home;
