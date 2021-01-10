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
import { Container, Wrapper, SubHeader } from "./Latf";

import I1P1 from "../images/AW/WEB--0665-302kb--Angkor--p.1.jpg";
import I2P1 from "../images/AW/WEB--0440--253kb--Angkor--p.1.jpg";
import I1P2 from "../images/AW/WEB--0355--288kb--Angkor--p.2.jpg";
import I2P2 from "../images/AW/WEB--0371-257kb--Angkor--p.2.jpg";
import I1P3 from "../images/AW/WEB-0653--311kb--Angkor--p.3.jpg";
import I2P3 from "../images/AW/WEB--0592--249kb--Angkor--p.3.jpg";
import I3P3 from "../images/AW/WEB--0615--258kb--Angkor--p.3.jpg";
import I1P4 from "../images/AW/WEB--0511--261kb--Angkor--p.4.jpg";
import I2P4 from "../images/AW/WEB--1509--286kb--Angkor--p.4.jpg";
import I3P4 from "../images/AW/WEB--0536--378kb--Angkor--p.4.jpg";
import I1P5 from "../images/AW/WEB--0403--253kb--Angkor--p.5.jpg";
import I2P5 from "../images/AW/WEB--0577--251kb--Angkor--p.5.jpg";
import I3P5 from "../images/AW/WEB--1555--252kb--Angkor--p.5.jpg";
import I1P6 from "../images/AW/WEB--0529--250kb--Angkor--p.6.jpg";

const I1P1D = styled.div`
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 100%;
    bottom: 22px;
    color: #331c65;
    margin-left: 10px;
    font-size: 20px;
  }
`;
const I2P1D = styled.div`
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 75%;
    color: #331c65;
    font-size: 20px;
  }
`;
const I1P2D = styled.div`
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 87%;
    color: #331c65;
    font-size: 20px;
  }
`;
const I2P2D = styled.div`
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 76%;
    color: #331c65;
    font-size: 20px;
  }
`;
const I1P3D = styled.div`
  &:after {
    content: "Bayon";
    position: relative;
    left: 90%;
    color: #331c65;
    font-size: 20px;
  }
`;
const I2P3D = styled.div`
  &:after {
    content: "Bayon";
    position: relative;
    left: 94%;
    color: #331c65;
    font-size: 20px;
  }
`;
const I3P3D = styled.div`
  &:after {
    content: "Bayon";
    position: relative;
    left: 100%;
    color: #331c65;
    font-size: 20px;
  }
`;
const I1P4D = styled.div`
  &:after {
    content: "Phnon Bakheng";
    position: relative;
    left: 88%;
    color: #331c65;
    font-size: 20px;
  }
`;
const I2P4D = styled.div`
  &:after {
    content: "Ta Prohm";
    position: relative;
    left: 94%;
    color: #331c65;
    font-size: 20px;
  }
`;
const I3P4D = styled.div`
  &:after {
    content: "Ta Prohm";
    position: relative;
    left: 94%;
    color: #331c65;
    font-size: 20px;
  }
`;
const I1P5D = styled.div`
  &:after {
    content: "Ta Prohm";
    position: relative;
    left: 100%;
    color: #331c65;
    font-size: 20px;
    bottom: 23px;
    margin: 10px;
  }
`;
const I2P5D = styled.div`
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 85%;
    color: #331c65;
    font-size: 20px;
  }
`;
const I3P5D = styled.div`
  &:after {
    content: "Phnom Bakheng";
    position: relative;
    left: 94%;
    color: #331c65;
    font-size: 20px;
  }
`;

const Angkor = () => {
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

  return (
    <motion.div initial="out" animate="in" exit="out" variants={PageTransition}>
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
          Angkor Wat
        </motion.h1>
        <motion.div
          className="thumbnails-container"
          ref={scrollRef}
          style={{ x: spring, padding: 0 }}
        >
          <Container>
            <Wrapper>
              <div className="flex">
                <I1P1D style={{ width: "58%", margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I1P1}
                    alt={I1P1}
                  />
                </I1P1D>
                <p
                  style={{
                    font: "normal normal 300 14px/16px Lato",
                    color: "#331c65",
                    width: "20%",
                  }}
                >
                  Ankor Wat today is majestic and inspiring to be sure; but
                  peaceful, quiet and conducive to meditation not so much.
                  <br />
                  <br />
                  The approach to the temple’s west gate at sunset reveals a
                  bustling street bazaar winding down after a hectic day.
                </p>
              </div>
              <div
                className="flex"
                style={{ marginTop: -100, justifyContent: "flex-end" }}
              >
                <p
                  style={{
                    font: "normal normal 300 14px/16px Lato",
                    color: "#331c65",
                    margin: "0 40px 40px 0",
                    width: "20%",
                    height: "fit-content",
                    alignSelf: "flex-end",
                  }}
                >
                  On the day of our visit, a serene view of the temple towers is
                  accessible only on a postcard offered by a child vendor with a
                  disarming smile…
                </p>
                <I2P1D style={{ width: "30%", margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I2P1}
                    alt={I1P1}
                  />
                </I2P1D>
              </div>
            </Wrapper>
          </Container>
          {/* //////////////////////////////// */}
          <Container>
            <Wrapper style={{ width: "84%" }}>
              <div className="flex">
                <I1P2D style={{ width: "38%", margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I1P2}
                    alt={I1P2}
                  />
                </I1P2D>
                <p
                  style={{
                    font: "normal normal 300 14px/16px Lato",
                    color: "#331c65",
                    width: "20%",
                  }}
                >
                  Angkor Wat was originally constructed as a Hindu temple
                  dedicated to the god Vishnu. Here we see the goddess Kali
                  receiving the mixed attentions of visitors.
                </p>
              </div>
              <div
                className="flex"
                style={{ marginTop: "-20%", justifyContent: "flex-end" }}
              >
                <p
                  style={{
                    font: "normal normal 300 14px/16px Lato",
                    color: "#331c65",
                    margin: "0 0px 40px 0",
                    width: "20%",
                    height: "fit-content",
                    alignSelf: "flex-end",
                  }}
                >
                  The best way to keep my fellow tourists from “intruding” upon
                  my idealized scene was to incorporate them directly into the
                  composition…
                </p>
                <I2P2D style={{ width: "36%", margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I2P2}
                    alt={I1P2}
                  />
                </I2P2D>
              </div>
            </Wrapper>
          </Container>
          {/* //////////////////////////// */}
          <Container>
            <div style={{ height: "85%", width: "90%" }} className="flex">
              <div className="flex column">
                <I1P3D style={{ width: "70%", margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I3P3}
                    alt={I3P3}
                  />
                </I1P3D>
                <I2P3D style={{ width: "70%", margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I1P3}
                    alt={I1P3}
                  />
                </I2P3D>
              </div>
              <div className="flex" style={{ justifyContent: "flex-end" }}>
                <I3P3D style={{ margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I2P3}
                    alt={I2P3}
                  />
                </I3P3D>
              </div>
            </div>
          </Container>
          {/* //////////////////////////// */}
          <Container>
            <div style={{ height: "85%", width: "90%" }} className="flex">
              <div className="flex" style={{ justifyContent: "flex-end" }}>
                <I1P4D style={{ margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I2P4}
                    alt={I2P4}
                  />
                </I1P4D>
              </div>
              <div
                className="flex column"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <I2P4D style={{ width: "60%", margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I1P4}
                    alt={I1P4}
                  />
                </I2P4D>
                <I3P4D style={{ width: "54%", margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I3P4}
                    alt={I3P4}
                  />
                </I3P4D>
              </div>
            </div>
          </Container>
          {/* ///////////////////////// */}

          <Container>
            <div
              style={{ height: "85%", width: "90%", alignItems: "center" }}
              className="flex column"
            >
              <div className="flex" style={{ justifyContent: "center" }}>
                <I1P5D style={{ margin: 10, width: "34%" }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I2P5}
                    alt={I2P5}
                  />
                </I1P5D>
              </div>
              <p
                style={{
                  font: "normal normal 300 14px/16px Lato",
                  color: "#331c65",
                  width: "40%",
                  textAlign: "center",
                  margin: "30px 0",
                }}
              >
                Two of these images capture something of our cultural disconnect
                from spiritual moorings. The third reminds us of who we really
                are…
              </p>
              <div
                className="flex"
                style={{ alignItems: "center", justifyContent: "space-evenly" }}
              >
                <I2P5D style={{ width: "34%", margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I1P5}
                    alt={I1P5}
                  />
                </I2P5D>
                <I3P5D style={{ width: "34%", margin: 10 }}>
                  <Image
                    style={{
                      maxWidth: "100%",
                      width: "fit-content",
                      margin: 0,
                    }}
                    image={I3P5}
                    alt={I3P5}
                  />
                </I3P5D>
              </div>
            </div>
          </Container>
          {/* //////////////////////// */}
          <Container>
            <Wrapper className="column">
              <Image image={I1P6} width={"70%"} alt={I1P6} />
              <SubHeader>“The Sentinel”</SubHeader>
            </Wrapper>
          </Container>
        </motion.div>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </motion.div>
  );
};

export default Angkor;
