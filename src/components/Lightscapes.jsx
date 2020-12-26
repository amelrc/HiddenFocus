import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import styled from "styled-components";
import Image from "./Image";
import { LS } from "../Data";
import LS1 from "../images/LS/WEB-LS1-3838-249kb.jpg";
import { Container, Wrapper } from "./Latf";

const Lightscapes = () => {
  console.log(LS.img.map);
  return (
    <>
      <h1
        className="flex"
        style={{
          position: "absolute",
          zIndex: 1,
          height: "10%",
          margin: "auto",
          alignItems: "flex-end",
        }}
      >
        Lightscapes
      </h1>
      <HorizontalScroll>
        <div className="child flex centerH centerV bgImg">
          <div
            className="flex centerV centerH"
            style={{
              height: "100%",
              backgroundImage: `url(${LS1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <p>
              Focus. When we look at something, really look, what captures our
              attention stands out in sharp relief. Everything else blurs away.
              These flower “portraits” are taken with a 100mm Macro lens, and
              make deliberate use of the focal plane as a major part of the
              composition, along with the placement of objects and blocks of
              color. The goal is to use all the elements of composition to
              invite the viewer to see the flowers in a particular way.
              Together, these images make up an imaginary exhibition called Look
              at the Flowers… It is a still growing body of work that began in
              the Spring and Summer of 2019. When Spring came around this year,
              I wondered what would happen when I looked through the lens. Would
              anything “new” show up? Please take a look with me and see!
            </p>
          </div>
        </div>
        {LS.img.map((i) => (
          <Container>
            <Wrapper>
              <Image image={i} width={"30%"} alt={i} />
            </Wrapper>
          </Container>
        ))}
      </HorizontalScroll>
    </>
  );
};

export default Lightscapes;
