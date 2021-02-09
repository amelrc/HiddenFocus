import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 85%;
`;

const Five = ({ images, modal, setSelected }) => {
  console.log(modal);

  const handleClick = (i) => {
    setSelected(images[i]);
  };

  return (
    <Wrapper>
      {images.map((el, i) => (
        <img
          key={i}
          style={el.css}
          onClick={setSelected()}
          src={el.image}
          alt={el.i}
        />
      ))}
    </Wrapper>
  );
};

export default Five;
