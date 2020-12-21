import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import styled from "styled-components";
// import useImg from "../hook/Img";
import W2555 from "../images/LATF/WEB-2555-263kb.jpg";
//
import W0241 from "../images/LATF/WEB-0241-281kb.jpg";
import W0291 from "../images/LATF/WEB-0291-251kb.jpg";
import W0563 from "../images/LATF/WEB-0563-247kb.jpg";
import W0900 from "../images/LATF/WEB-0900-247kb.jpg";
import W2499 from "../images/LATF/WEB-2499-249kb.jpg";
//
import W3881 from "../images/LATF/WEB-3881-251kb.jpg";
import W4223 from "../images/LATF/WEB-4223-249kb.jpg";
import W4243 from "../images/LATF/WEB-4243-243kb.jpg";
//
import W3887 from "../images/LATF/WEB-3887-288kb.jpg";

// const Image = styled.div`
//   width: ${(props) => props.width};
//   background-image: url(${(props) => props.backgroundImage});
// `;

const Latf = () => {
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
        Look at the Flowers
      </h1>
      <HorizontalScroll>
        <div className="child flex centerH centerV bgImg">
          <div
            className="flex centerV centerH"
            style={{
              height: "100%",
              backgroundImage: `url(${W2555})`,
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
            {/* <img style={{ height: "40%" }} src={W2555} alt="" /> */}
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Tulips...2019</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W2499} width={"30%"} alt={W2499} />
            <img src={W0563} width={"30%"} alt={W0563} />
            <img src={W0900} width={"30%"} alt={W0900} />
            <img src={W0291} width={"30%"} alt={W0291} />
            <img src={W0241} width={"30%"} alt={W0241} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Tulips...2020</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W4223} width={"30%"} alt={W4223} />
            <img src={W4243} width={"30%"} alt={W4243} />
            <img src={W3881} width={"30%"} alt={W3881} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Tulips...2020</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W3887} width={"30%"} alt={W3887} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
      </HorizontalScroll>
    </>
  );
};

export default Latf;
