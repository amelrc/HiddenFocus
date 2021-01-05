import React from "react";

import img1 from "../images/WEB-6417--2000x1333--256kb.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100vw;
  height: auto;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  margin: 40px;
`;

const WhatNow = () => {
  return (
    <motion.div className="flex column">
      {/* <HorizontalScroll> */}
      <Container>
        <Wrapper>
          <img className="test" src={img1} width={"60%"} alt="" />
        </Wrapper>
      </Container>

      <Container>
        <Wrapper>
          <img src={img1} width={"60%"} alt="" />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <img src={img1} width={"60%"} alt="" />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <img src={img1} width={"60%"} alt="" />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <img src={img1} width={"60%"} alt="" />
        </Wrapper>
      </Container>
      {/* </HorizontalScroll> */}
    </motion.div>
  );
};

export default WhatNow;
