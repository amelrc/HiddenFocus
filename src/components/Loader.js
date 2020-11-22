import React from "react";
import styled, { keyframes } from "styled-components";

const path = keyframes`
from {stroke-dashoffset:10000}
  to { stroke-dashoffset: 0}
`;
const Circle = styled.circle`
  stroke-dasharray: 10000;
  stroke-dashoffset: 10000;
  animation: ${path} 10s ease-in-out forwards;
  transform: rotate(180deg);
  transform-origin: center;
`;

const Loader = () => {
  return (
    <>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 659.72 659.72">
          <Circle
            stroke="red"
            fill="none"
            cx="50%"
            cy="50%"
            r="40%"
            strokeWidth="1"
          />
        </svg>
      </div>
    </>
  );
};

export default Loader;
