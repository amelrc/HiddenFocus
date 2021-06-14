import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../generalStyles";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: center;
  width: 100vw;
  height: 80%;
  @media ${device.small} {
    align-items: center;
  }
`;

export const Left = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Right = styled.div`
  width: 30%;
`;

////////////////

export const AnimationWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  height: 50vh;
  width: 100vw;
`;
export const ImageWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  @media ${device.tablet} {
    // height: 70vh;
  }
`;

export const H1 = styled(motion.h1)`
  height: 50vh;
  width: 100%;
  justify-content: center;
  display: flex;
  font: 40px Hidden Focus;
  z-index: 1;
  color: #331c65;
  // color: #fff;
  opacity: 0;
  bottom: 10%;
  position: absolute;
  @media ${device.tablet} {
    font: 80px Hidden Focus;
    margin-bottom: 10%;
  }
  @media ${device.medium} {
    font: 120px Hidden Focus;
    margin-bottom: 10%;
  }
`;

export const AnimatedImage = styled(motion.img)`
  width: 30vw;
  left: 36%;
  top: 20%;
  position: absolute;
`;
