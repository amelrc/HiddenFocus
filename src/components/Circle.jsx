import React from "react";
import styled, { keyframes } from "styled-components";

const dash = keyframes`
from {
    stroke-dasharray: 400;
}
to {
    stroke-dashoffset: 0;
    stroke-dasharray: 4000;
}
`;
const Circle = styled.circle`
  stroke-width: 1px;
  fill: none;
  stroke: #00f;
  stroke-dashoffset: 380;
  animation: ${dash} 10s ease 1;
`;

const CircleComponent = ({ children }) => {
  return (
    <div>
      <svg>
        <Circle cx="50%" cy="50%" r="20%">
          {children}
        </Circle>
      </svg>
    </div>
  );
};

export default CircleComponent;
