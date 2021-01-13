import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Circle = styled(motion.path)`
  stroke: #301240;
  stroke-width: 1;
  fill: none;
`;
const Line = styled.line`
  fill: none;
  stroke: #301240;
  stroke-miterlimit: 10;
  stroke-width: 0.74px;
`;
const Svg = styled(motion.svg)`
  margin: 10px;
  width: 1000px;
  overflow: visible;
`;

const circleVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const Close = () => {
  return (
    <>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.49 86.49">
        <Circle
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          //d="M206.61,23C308,23,390.23,105.21,390.23,206.61A183.62,183.62,0,0,1,206.61,390.23C105.21,390.23,23,308,23,206.61S105.21,23,206.61,23m0-23a206.66,206.66,0,0,0-80.43,397A206.61,206.61,0,0,0,352.71,60.52,206.07,206.07,0,0,0,206.61,0Z"
          d="M43.25.25a43,43,0,1,1-43,43,43,43,0,0,1,43-43m0-.25A43.25,43.25,0,1,0,86.49,43.25,43.25,43.25,0,0,0,43.25,0Z"
          //   d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          fill="none"
        />
        <Line x1="35.31" y1="35.31" x2="51.18" y2="51.18" />
        <Line x1="51.18" y1="35.31" x2="35.31" y2="51.18" />
      </Svg>
    </>
  );
};

export default Close;
