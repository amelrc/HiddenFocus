import React from "react";
import styled from "styled-components";
import { device } from "../generalStyles";
import { motion } from 'framer-motion'


const H1 = styled(motion.h1)`
  // position: fixed;
  // height: 16%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: flex-end;
  font: 7vw Hidden Focus;
  overflow:hidden;
  // z-index: 2;
  color: #331c65;
  @media ${device.tablet} {
    // height: 14%;
  }
  @media ${device.large} {
    font: 4vw Hidden Focus;
  }
`;

const PageHeaders = ({ children }) => {
  return (
    <>
      <H1>{children}</H1>
    </>
  );
};

export default PageHeaders;
