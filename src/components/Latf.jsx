import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import styled from "styled-components";
import Image from "./Image";
import { p1, p2, p3, p4, p5, p6, p7, p8 } from "../Data";

import AOS from "aos";
import "aos/dist/aos.css";
import W2555 from "../images/LATF/WEB-2555-263kb.jpg";

import W9486 from "../images/LATF/WEB-9486-313kb.jpg";
import W9590 from "../images/LATF/WEB-9590-250kb.jpg";
import W9598 from "../images/LATF/WEB-9598-250kb.jpg";
//
import N7A7897 from "../images/LATF/WEB 2N7A7897-255kb.jpg";
//
import W5841 from "../images/LATF/WEB-5841-275kb.jpg";
//
// 5075, 4590, 1763, 4799;
import W5075 from "../images/LATF/WEB-5075-264kb.jpg";
import W4590 from "../images/LATF/WEB-4590-255kb.jpg";
import W1763 from "../images/LATF/WEB-1763-296kb.jpg";
import W4799 from "../images/LATF/WEB-4799-252kb.jpg";
//
import W4767 from "../images/LATF/WEB-4767-264kb.jpg";
//
import W0347 from "../images/LATF/WEB-0347-241kb.jpg";
import W5679 from "../images/LATF/WEB-5679-295kb.jpg";
import W2421 from "../images/LATF/WEB-2421-254kb.jpg";
//
import W0362 from "../images/LATF/WEB-0362-260kb.jpg";
//
import W3838 from "../images/LATF/WEB-3838-249kb.jpg";
//
import W6408 from "../images/LATF/WEB-6408-257kb.jpg";
//
import W0430 from "../images/LATF/WEB-0430-252kb.jpg";
import W0907 from "../images/LATF/Web-0907-251kb.jpg";
import W6897 from "../images/LATF/WEB-6897-248kb.jpg";
//
import W2N7A8251 from "../images/LATF/WEB-2N7A8251-250kb.jpg";
//
import W9225 from "../images/LATF/WEB-9225-250kb.jpg";
import W9387 from "../images/LATF/WEB-9387-257kb.jpg";
//
import W4447 from "../images/LATF/WEB-4447-253kb.jpg";
//
import W9170 from "../images/LATF/WEB-9170-259kb.jpg";
import W9171 from "../images/LATF/WEB-9171-251kb.jpg";
import W9059 from "../images/LATF/WEB-9059-258kb.jpg";
//
import W2N7A8243 from "../images/LATF/WEB-2N7A8243-249kb.jpg";
//
import W1571 from "../images/LATF/WEB-1571-250kb.jpg";
import W0713 from "../images/LATF/WEB 0713-251kb.jpg";
import W2N7A8110 from "../images/LATF/WEB-2N7A8110-282kb.jpg";
//
import W1059 from "../images/LATF/WEB-1059-249kb.jpg";
//
import W1669 from "../images/LATF/WEB-1669-254kb.jpg";
import W1111 from "../images/LATF/WEB-1111-251kb.jpg";
//
import W0831 from "../images/LATF/WEB-0831-252kb.jpg";

export const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 85%;
`;

const SubHeader = styled.h2`
  margin: 0;
`;

// const Image = styled.div`
//   width: ${(props) => props.width};
//   background-image: url(${(props) => props.backgroundImage});
// `;

const Latf = () => {
  const ref = React.useRef();

  //   ref.current.style.margin = 100;
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
        <Container>
          <SubHeader data-aos="fade-up">{p1.name}</SubHeader>
          <Wrapper>
            {p1.img.map((i) => (
              <Image image={i} width={"30%"} alt={i} />
            ))}
          </Wrapper>
        </Container>
        {/* ///////////////////////////////// */}
        <Container ref={ref}>
          <SubHeader>{p2.name}</SubHeader>
          <Wrapper>
            {p2.img.map((i) => (
              <Image image={i} width={"30%"} alt={i} />
            ))}
          </Wrapper>
        </Container>
        {/* ///////////////////////////////// */}
        <Container>
          <SubHeader>{p3.name}</SubHeader>
          <Wrapper>
            {p3.img.map((i) => (
              <Image image={i} width={"30%"} alt={i} />
            ))}
          </Wrapper>
        </Container>
        {/* ///////////////////////////////// */}
        <Container>
          <SubHeader>{p4.name}</SubHeader>
          <Wrapper>
            {p4.img.map((i) => (
              <Image image={i} width={"30%"} alt={i} />
            ))}
          </Wrapper>
        </Container>
        {/* ///////////////////////////////// */}
        <Container>
          <SubHeader>{p5.name}</SubHeader>

          <Wrapper>
            {p5.img.map((i) => (
              <Image image={i} width={"30%"} alt={i} />
            ))}
          </Wrapper>
        </Container>
        {/* ///////////////////////////////// */}
        <Container>
          <SubHeader>{p6.name}</SubHeader>
          <p>{p6.text}</p>
          <Wrapper>
            {p6.img.map((i) => (
              <Image image={i} width={"30%"} alt={i} />
            ))}
          </Wrapper>
        </Container>
        {/* ///////////////////////////////// */}
        <Container>
          <SubHeader>{p7.name}</SubHeader>
          <Wrapper>
            {p7.img.map((i) => (
              <Image image={i} width={"30%"} alt={i} />
            ))}
          </Wrapper>
        </Container>
        {/* ///////////////////////////////// */}
        <Container>
          <SubHeader>{p8.name}</SubHeader>
          <Wrapper>
            {p8.img.map((i) => (
              <Image image={i} width={"30%"} alt={i} />
            ))}
          </Wrapper>
        </Container>
        {/* ///////////////////////////////// */}

        <div className="child">
          <SubHeader>When Orchids Fly</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img data-aos="fade-left" src={W9598} width={"30%"} alt={W9598} />

            <img src={W9486} width={"30%"} alt={W9486} />
            <img src={W9590} width={"30%"} alt={W9590} />
          </div>
        </div>

        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Annunciation</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={N7A7897} width={"80%"} alt={N7A7897} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Windhover</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W5841} width={"80%"} alt={W5841} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>The Alium</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W5075} width={"40%"} alt={W5075} />
            <img src={W4590} width={"40%"} alt={W4590} />
            <img src={W1763} width={"40%"} alt={W1763} />
            <img src={W4799} width={"40%"} alt={W4799} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>The Alium</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W4767} width={"80%"} alt={W4767} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Peonies</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W0347} width={"40%"} alt={W0347} />
            <img src={W5679} width={"40%"} alt={W5679} />
            <img src={W2421} width={"40%"} alt={W2421} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Peonies</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W0362} width={"90%"} alt={W0362} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Homage to Monet</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W3838} width={"40%"} alt={W3838} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>In the Still of the Night</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <p>
              Like the moon growing dim on the rim of the hill in the chill,
              still of the night... Cole Porter
            </p>
            <img src={W6408} width={"90%"} alt={W6408} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Unexpected Guests</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <p>
              Like the moon growing dim on the rim of the hill in the chill,
              still of the night... Cole Porter
            </p>
            <img src={W0430} width={"40%"} alt={W0430} />
            <img src={W0907} width={"40%"} alt={W0907} />
            <img src={W6897} width={"40%"} alt={W6897} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Alien</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W2N7A8251} width={"40%"} alt={W2N7A8251} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Animations</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W9225} width={"40%"} alt={W9225} />
            <img src={W9387} width={"40%"} alt={W9387} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Homage to Georgia O'Keefe</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W4447} width={"40%"} alt={W4447} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Chrysanthemums</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W9170} width={"40%"} alt={W9170} />
            <img src={W9171} width={"40%"} alt={W9171} />
            <img src={W9059} width={"40%"} alt={W9059} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Unstill Life</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W2N7A8243} width={"40%"} alt={W2N7A8243} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Hydrangeas</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W1571} width={"40%"} alt={W1571} />
            <img src={W0713} width={"40%"} alt={W0713} />
            <img src={W2N7A8110} width={"40%"} alt={W2N7A8110} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Homage to Mandelbrot</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W1059} width={"40%"} alt={W1059} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Lilies of the Field</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <p>
              Consider the lilies of the field, how they grow: they neither toil
              nor spin, yet I tell you, even Solomon in all his glory was not
              arranged like one of these. Matthew 6:28-29
            </p>
            <img src={W1669} width={"40%"} alt={W1669} />
            <img src={W1111} width={"40%"} alt={W1111} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <SubHeader>Homage to Robert Mapplethorpe</SubHeader>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <p>
              Consider the lilies of the field, how they grow: they neither toil
              nor spin, yet I tell you, even Solomon in all his glory was not
              arranged like one of these. Matthew 6:28-29
            </p>
            <img src={W0831} width={"40%"} alt={W0831} />
          </div>
        </div>
      </HorizontalScroll>
    </>
  );
};

export default Latf;
