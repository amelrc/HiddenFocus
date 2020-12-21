import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: ${(props) => props.width};
`;

const Image = (props) => {
  const { image, width, id } = props;
  return (
    <>
      <div
        style={{
          flexWrap: "wrap",
          height: "100%",
        }}
      >
        <Img src={image} width={width} alt={id} />
      </div>
    </>
  );
};

export default Image;
