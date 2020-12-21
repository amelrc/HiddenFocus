import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: ${(props) => props.width};
`;

const useImg = (props) => {
  const { width } = props;
  return <Image width={width} />;
};

export default useImg;
