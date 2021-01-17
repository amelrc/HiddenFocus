import React, { useState } from "react";
// import { SliderData } from './SliderData';
import { WNData } from "../Data";
import styled from "styled-components";
import Image from "./Image";
import Chevron from "./Chevron";

const Slider = styled.section`
   {
    width: 80%;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
  }
`;

const ArrowRight = styled.div`
   {
    // position: absolute;
    // top: 50%;
    // right: 32px;
    // font-size: 3rem;
    // color: #000;
    // z-index: 10;
    cursor: pointer;
    user-select: none;
  }
`;

const ArrowLeft = styled.div`
   {
    // // position: absolute;
    // top: 50%;
    // left: 32px;

    // z-index: 10;
    cursor: pointer;
    user-select: none;
    transform: rotateY(180deg);
  }
`;

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;

const ImageFrame = styled.div`

  padding 40px;
`;

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Slider>
      <ImageFrame>
        {slides.map((slide, index) => {
          return (
            <ImageHolder
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <Image
                  style={{ maxWidth: "100%", width: "fit-content" }}
                  image={slide.img}
                  alt="travel"
                />
              )}
              {index === current && <p>{slide.text}</p>}
            </ImageHolder>
          );
        })}
      </ImageFrame>
      <div
        style={{
          display: " flex",
          margin: "auto",
          justifyContent: "space-between",
          position: "absolute",
          bottom: " 50%",
          width: " 90%",
        }}
      >
        <ArrowLeft onClick={prevSlide}>
          <Chevron />
        </ArrowLeft>
        <ArrowRight onClick={nextSlide}>
          <Chevron />
        </ArrowRight>
      </div>
    </Slider>
  );
};

export default ImageSlider;
