import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  fill: #331c65;
  height: 30px;
`;

const Chevron = () => {
  return (
    <>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.01 284.86">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M17.57,284.86h0a60,60,0,0,1,0-84.85l57.58-57.58L17.57,84.85A60,60,0,0,1,17.57,0h0L160,142.43Z" />
          </g>
        </g>
      </Svg>
    </>
  );
};

export default Chevron;
