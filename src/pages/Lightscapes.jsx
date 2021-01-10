import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring,
} from "framer-motion";
import PageTransition from "./Home";
import Image from "../components/Image";
import { LS } from "../Data";
import LS1 from "../images/LS/WEB-LS1-RAY-3838-249kb.jpg";
import { Container, Wrapper } from "./Latf";

const Lightscapes = () => {
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
        <h1
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
        >
          Lightscapes
        </h1>
        <motion.div
          className="thumbnails-container"
          ref={scrollRef}
          style={{ x: spring, padding: 0 }}
        >
          <Container style={{ flexDirection: "row" }}>
            <div
              style={{
                width: "35%",
                padding: 30,
                font: "normal normal 300 18px/30px Lato",
                color: "#331c65",
              }}
            >
              <p>
                I began taking "portraits" of flowers in the Spring of 2019.  By
                summer, they had grown into a body of work called "Look at the
                Flowers..." and, in the fall, became the subject of four local
                exhibits (insert link to Shows/Look at the Flowers).  As winter
                unfolded, I began to wonder what would show up through the lens
                come Spring.  Would the 2020 blossoms look the same?
              </p>
              <p>
                "Homage to Monet" appeared on the first photo-shoot of Spring,
                and radiated the answer: the possibilities, even within the
                confines of my small garden, are infinite. 
              </p>
              <p>
                The visual feel of this image and of others soon to follow is
                decidedly watercolor.  Since the distinctive medium for all
                these images is light, I've settled on a new name to describe
                them: "Lightscapes."
              </p>
            </div>
            <div
              className="flex column"
              style={{ width: "40%", alignItems: "center" }}
            >
              <Image image={LS1} width={"70%"} alt={LS1} />
              <p
                style={{
                  font: "normal normal 300 18px/30px Lato",
                  color: "#331c65",
                }}
              >
                "Homage to Monet"
              </p>
            </div>
          </Container>

          {LS.map((el, i) => (
            <Container key={i}>
              <Wrapper className="column">
                <img src={el.img} alt={i.img} style={el.css} />
                {el.text === "" ? (
                  <p>{el.text}</p>
                ) : (
                  <p
                    style={{
                      font: "normal normal 300 18px/30px Lato",
                      color: "#331c65",
                    }}
                  >
                    "{el.text}"
                  </p>
                )}
              </Wrapper>
            </Container>
          ))}
        </motion.div>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </motion.div>
  );
};

export default Lightscapes;
