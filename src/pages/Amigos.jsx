import W8704 from "../images/CAUC/WEB-8704-250kb.jpg";
import W8785 from "../images/CAUC/WEB-8785-254kb.jpg";
import W0501 from "../images/CAUC/WEB-P1050144-304KB.jpg";
import W8787 from "../images/CAUC/WEB-8787-250kb.jpg";
import W0606 from "../images/CAUC/WEB-1020606-250kb.jpg";
import W0106 from "../images/CAUC/WEB-P1020106-312kb.jpg";
import W0767 from "../images/CAUC/WEB-P1020767-254kb.jpg";
import W0871 from "../images/CAUC/WEB-P1020871-371kb.jpg";
import W0939 from "../images/CAUC/WEB-P1020939-249kb.jpg";
import W0144 from "../images/CAUC/WEB-P1050144-304KB.jpg";

import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Container, Wrapper, SubHeader } from "../pages/Latf";
import Image from "../components/Image";
import { PageTransition } from "./Home";

const Amigos = () => {
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
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={PageTransition}
      >
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
              font: "normal normal 100 64px/40px Mrs Saint Delafield",
              color: "#331c65",
            }}
          >
            Cuatro Amigos: Una Cuba
          </h1>
          <motion.div
            className="thumbnails-container"
            ref={scrollRef}
            style={{ x: spring, padding: 0 }}
          >
            <Container
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: 30,
                  font: "normal normal 300 18px/30px Lato",
                  color: "#331c65",
                  flexDirection: "column",

                  width: " 50%",
                }}
              >
                <p>
                  “Four artists, three Cuban and one Canadian, have come
                  together to share the work they have rendered in painting,
                  paper and photography. The expo celebrates the inner life of
                  our cities and the bountiful nature that nurtures and
                  surrounds them. Together, they invite us to reflect on the
                  broad range of experiences that we share in common, and that
                  lay the foundation for a life lived in harmony.”
                </p>
                <Image width={"50%"} image={W8704} />
              </div>
              <Image width={"15%"} image={W8787} />
            </Container>
            <Container
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: 30,
                  font: "normal normal 300 18px/30px Lato",
                  color: "#331c65",
                  flexDirection: "column",

                  width: " 50%",
                }}
              >
                <p>
                  Lilia Ulla was a teenager at the time of the Revolution, and
                  has experienced firsthand the remaking of Cuban society as it
                  unfolded over the decades. Through her eyes, we could still
                  catch a glimpse of Havana’s former splendor.
                </p>
                <p>
                  Affectionately known as Dr. Lilly, she introduced Lawrence and
                  me to many of her friends, including Amel, Boris and Abel. New
                  friendships quickly developed, and Lilia happily and capably
                  took charge of making this expo happen.
                </p>
                <Image width={"50%"} image={W0501} />
              </div>
              <Image width={"15%"} image={W8785} />
            </Container>
            <Container>
              <SubHeader>ggg</SubHeader>
              <div className="flex" style={{ height: "85%" }}>
                <div className="flex column centerV">
                  <Image
                    image={W0939}
                    width={"60%"}
                    alt={W0939}
                    style={{ margin: 10 }}
                  />
                  <Image
                    image={W0606}
                    width={"60%"}
                    alt={W0606}
                    style={{ margin: 40 }}
                  />
                </div>
                <div className="flex centerV">
                  <Image
                    image={W0106}
                    width={"100%"}
                    alt={W0106}
                    style={{ margin: 10 }}
                  />
                </div>

                <div className="flex column centerV">
                  <Image
                    image={W0767}
                    width={"60%"}
                    alt={W0767}
                    style={{ margin: 10 }}
                  />
                  <Image
                    image={W0871}
                    width={"60%"}
                    alt={W0871}
                    style={{ margin: 10 }}
                  />
                </div>
              </div>
            </Container>
          </motion.div>
        </div>
        <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
      </motion.div>
    </>
  );
};

export default Amigos;
