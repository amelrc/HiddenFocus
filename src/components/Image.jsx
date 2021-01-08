import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: ${(props) => props.width};
  margin: 10px;
`;

const Image = (props) => {
  const { image, width, id } = props;

  return (
    <>
      <Img {...props} src={image} width={width} alt={id} />
    </>
  );
};

export default Image;
