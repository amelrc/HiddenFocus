import React from "react";
import styled from "styled-components";
import { device } from "../generalStyles";

const H1 = styled.h1`
  position: fixed;
  height: 16%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: flex-end;
  font: normal normal 5vw/5vw Mrs Saint Delafield;
  z-index: 2;
  color: #331c65;
  @media ${device.tablet} {
    height: 14%;
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
