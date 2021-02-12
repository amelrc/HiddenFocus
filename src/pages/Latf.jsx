import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import styled from "styled-components";
import Image from "../components/Image";
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring,
} from "framer-motion";
import PageTransition from "./Home";
import { p1, p2, p3, p4, p5, p6, p7, p8 } from "../Data";
import W2555 from "../images/LATF/WEB-2555-263kb.jpg";
import W0241 from "../images/LATF/WEB-0241-281kb.jpg";
import W0291 from "../images/LATF/WEB-0291-251kb.jpg";
import W0563 from "../images/LATF/WEB-0563-247kb.jpg";
import W0900 from "../images/LATF/WEB-0900-247kb.jpg";
import W2499 from "../images/LATF/WEB-2499-249kb.jpg";
import W3881 from "../images/LATF/WEB-3881-251kb.jpg";
import W4223 from "../images/LATF/WEB-4223-249kb.jpg";
import W4243 from "../images/LATF/WEB-4243-243kb.jpg";
// import W3887 from "../images/LATF/WEB-3887-288kb.jpg";
import W6417 from "../images/LATF/WEB-6417-256kb.jpg";
import W2348 from "../images/LATF/WEB 2348-260kb.jpg";
// import W2613 from "../images/LATF/WEB-2613-257kb.jpg";
// import W8135 from "../images/LATF/WEB-8135-249kb.jpg";
// import W7020 from "../images/LATF/WEB-7020-254kb.jpg";
// import W3589 from "../images/LATF/WEB-3589-249kb.jpg";
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
import Modal from "../components/Modal";
import Five from "../components/Five";

const Tulips19 = [
  { id: 1, image: W0241, css: { width: "20%", margin: 10 } },
  { id: 2, image: W0291, css: { width: "40%", margin: 10 } },
  { id: 3, image: W0563, css: { width: "20%", margin: 10 } },
  { id: 4, image: W0900, css: { width: "20%", margin: 10 } },
  { id: 5, image: W2499, css: { width: "20%", margin: 10 } },
];
const Tulips20 = [
  { id: 1, image: W4223, css: { width: "20%", margin: 10 } },
  { id: 2, image: W4243, css: { width: "40%", margin: 10 } },
  { id: 3, image: W3881, css: { width: "20%", margin: 10 } },
];

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 85%;
`;

export const SubHeader = styled.h2`
  margin: 0;
  font: 300 26px / 30px Lato;
  color: #331c65;
`;

// const Image = styled.div`
//   width: ${(props) => props.width};
//   background-image: url(${(props) => props.backgroundImage});
// `;

const Latf = () => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  ///////////////////
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);

  console.log("outside", selected);

  const openModal = (id) => {
    console.log("hello", id);
    setSelected(id);
    setShowModal((prev) => !prev);
  };

  return (
    <motion.div initial="out" animate="in" exit="out" variants={PageTransition}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <img style={{ width: "100%" }} src={selected.image} alt={selected.i} />
      </Modal>

      <div className="scroll-container flex column">
        <motion.h1
          className="flex"
          style={{
            position: "absolute",
            zIndex: 1,
            height: "10%",
            margin: "auto",
            alignItems: "flex-end",
            width: "100%",
            justifyContent: "center",
            font: "normal normal 100 64px/40px Roxborough CF Thin",
            color: "#331c65",
          }}
          initial={{ scale: 1 }}
        >
          Look at the Flowers
        </motion.h1>
        <motion.div
          className="thumbnails-container"
          ref={scrollRef}
          style={{ x: spring, padding: 0 }}
        >
          <div
            className="child flex centerH centerV bgImg"
            style={{ height: "100%" }}
          >
            <div
              className="flex centerV centerH"
              style={{
                height: "100%",
                backgroundImage: `url(${W2555})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <p
                style={{
                  width: "50%",
                  backgroundColor: "white",
                  padding: 40,
                  font: "normal normal 300 18px/30px Lato",
                }}
              >
                Focus. When we look at something, really look, what captures our
                attention stands out in sharp relief. Everything else blurs
                away. These flower “portraits” are taken with a 100mm Macro
                lens, and make deliberate use of the focal plane as a major part
                of the composition, along with the placement of objects and
                blocks of color. The goal is to use all the elements of
                composition to invite the viewer to see the flowers in a
                particular way. Together, these images make up an imaginary
                exhibition called Look at the Flowers… It is a still growing
                body of work that began in the Spring and Summer of 2019. When
                Spring came around this year, I wondered what would happen when
                I looked through the lens. Would anything “new” show up? Please
                take a look with me and see!
              </p>
            </div>
          </div>

          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>{p1.name}</SubHeader>
            <Wrapper>
              {Tulips19.map((el, i) => (
                <img
                  key={i}
                  style={el.css}
                  onClick={() => openModal(el)}
                  src={el.image}
                  alt={el.i}
                />
              ))}
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}

          <Container>
            <SubHeader>{p2.name}</SubHeader>
            <Wrapper>
              {Tulips20.map((el, i) => (
                <img
                  key={i}
                  style={el.css}
                  onClick={() => openModal(el)}
                  src={el.image}
                  alt={el.i}
                />
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
              <Image
                image={W6417}
                width={"40%"}
                alt={W6417}
                style={{ marginTop: -300 }}
              />
              <Image
                image={W2348}
                width={"40%"}
                alt={W2348}
                style={{ marginTop: 300 }}
              />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>{p5.name}</SubHeader>
            <Wrapper>
              {p5.img.map((i) => (
                <Image image={i} width={"80%"} alt={i} />
              ))}
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>{p6.name}</SubHeader>
            <Wrapper style={{ flexWrap: "nowrap", width: "80%" }}>
              {p6.img.map((i) => (
                <Image image={i} width={"60%"} alt={i} />
              ))}
              <p>{p6.text}</p>
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>{p7.name}</SubHeader>
            <Wrapper>
              {p7.img.map((i) => (
                <Image image={i} width={"80%"} alt={i} />
              ))}
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>{p8.name}</SubHeader>
            <Wrapper>
              {p8.img.map((i) => (
                <Image image={i} width={"80%"} alt={i} />
              ))}
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>When Orchids Fly</SubHeader>
            <Wrapper>
              <Image
                image={W9598}
                width={"30%"}
                alt={W9598}
                style={{ marginTop: 385 }}
              />
              <Image image={W9486} width={"30%"} alt={W9486} />
              <Image
                image={W9590}
                width={"30%"}
                alt={W9590}
                style={{ marginTop: -363 }}
              />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Annunciation</SubHeader>
            <Wrapper>
              <Image image={N7A7897} width={"30%"} alt={N7A7897} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Windhover</SubHeader>
            <Wrapper>
              <Image image={W5841} width={"80%"} alt={W5841} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>The Alium</SubHeader>
            <Wrapper>
              <Image image={W5075} width={"40%"} alt={W5075} />
              <Image image={W4590} width={"40%"} alt={W4590} />
              <Image image={W1763} width={"40%"} alt={W1763} />
              <Image image={W4799} width={"40%"} alt={W4799} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>The Alium</SubHeader>
            <Wrapper>
              <Image image={W4767} width={"80%"} alt={W4767} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Peonies</SubHeader>
            <Wrapper>
              <Image image={W0347} width={"40%"} alt={W0347} />
              <Image image={W5679} width={"40%"} alt={W5679} />
              <Image image={W2421} width={"40%"} alt={W2421} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Peonies</SubHeader>
            <Wrapper>
              <Image image={W0362} width={"70%"} alt={W0362} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Homage to Monet</SubHeader>
            <Wrapper>
              <Image image={W3838} width={"30%"} alt={W3838} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>In the Still of the Night</SubHeader>
            <Wrapper>
              <p>
                Like the moon growing dim on the rim of the hill in the chill,
                still of the night... Cole Porter
              </p>
              <Image image={W6408} width={"70%"} alt={W6408} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Unexpected Guests</SubHeader>
            <Wrapper>
              <p>
                Like the moon growing dim on the rim of the hill in the chill,
                still of the night... Cole Porter
              </p>
              <Image image={W0430} width={"40%"} alt={W0430} />
              <Image image={W0907} width={"40%"} alt={W0907} />
              <Image image={W6897} width={"40%"} alt={W6897} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Alien</SubHeader>
            <Wrapper>
              <Image image={W2N7A8251} width={"70%"} alt={W2N7A8251} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Animations</SubHeader>
            <Wrapper>
              <Image image={W9225} width={"40%"} alt={W9225} />
              <Image image={W9387} width={"40%"} alt={W9387} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Homage to Georgia O'Keefe</SubHeader>
            <Wrapper>
              <Image image={W4447} width={"40%"} alt={W4447} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Chrysanthemums</SubHeader>
            <Wrapper>
              <Image image={W9170} width={"40%"} alt={W9170} />
              <Image image={W9171} width={"40%"} alt={W9171} />
              <Image image={W9059} width={"40%"} alt={W9059} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Unstill Life</SubHeader>
            <Wrapper>
              <Image image={W2N7A8243} width={"70%"} alt={W2N7A8243} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Hydrangeas</SubHeader>
            <Wrapper>
              <Image image={W1571} width={"40%"} alt={W1571} />
              <Image image={W0713} width={"40%"} alt={W0713} />
              <Image image={W2N7A8110} width={"40%"} alt={W2N7A8110} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Homage to Mandelbrot</SubHeader>
            <Wrapper>
              <Image image={W1059} width={"80%"} alt={W1059} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Lilies of the Field</SubHeader>
            <Wrapper>
              <p>
                Consider the lilies of the field, how they grow: they neither
                toil nor spin, yet I tell you, even Solomon in all his glory was
                not arranged like one of these. Matthew 6:28-29
              </p>
              <Image image={W1669} width={"40%"} alt={W1669} />
              <Image image={W1111} width={"40%"} alt={W1111} />
            </Wrapper>
          </Container>
          {/* ///////////////////////////////// */}
          <Container>
            <SubHeader>Homage to Robert Mapplethorpe</SubHeader>
            <Wrapper>
              <p>
                Consider the lilies of the field, how they grow: they neither
                toil nor spin, yet I tell you, even Solomon in all his glory was
                not arranged like one of these. Matthew 6:28-29
              </p>
              <Image image={W0831} width={"40%"} alt={W0831} />
            </Wrapper>
          </Container>
        </motion.div>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </motion.div>
  );
};

export default Latf;
