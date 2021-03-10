import React, { useState } from "react";
import styled from "styled-components";
import Chevron from "./Chevron";

const ArrowRight = styled.div`
  cursor: pointer;
  user-select: none;
`;

const ArrowLeft = styled.div`
  cursor: pointer;
  user-select: none;
  transform: rotateY(180deg);
`;

const ImageSlider = ({ slides, styles, currentSlide, withText }) => {
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
    <div
      className="flex column centerV"
      style={{ width: "80%", margin: "auto", position: "relative" }}
    >
      <div className="flex centerH centerV" style={{ height: "50vh" }}>
        {slides.map((slide, index) => {
          return (
            <div
              style={slide.css}
              className={
                index === current ? "slide active" : "slide unsetWidth"
              }
              key={index}
            >
              {index === current && (
                <img
                  onClick={() => currentSlide(slide)}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  src={slide.image}
                  alt="travel"
                />
              )}
              {withText && index === current && <p>{slide.text}</p>}
            </div>
          );
        })}
      </div>
      {length > 1 ? (
        <div style={styles}>
          <ArrowLeft onClick={prevSlide}>
            <Chevron />
          </ArrowLeft>
          <ArrowRight onClick={nextSlide}>
            <Chevron />
          </ArrowRight>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageSlider;
