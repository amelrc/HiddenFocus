import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import { museum } from "../Data";
import { PageTransition } from "./Home";

const Gallery = ({ match }) => {
  const {
    params: { userName },
  } = match;

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
        <div
          className="scroll-container flex column"
          // style={{ alignContent: "center" }}
        >
          <h1
            style={{
              position: "absolute",
              zIndex: 1,
              height: "10%",
              margin: "auto",
            }}
          >
            Gallery
          </h1>
          <motion.div
            className="thumbnails-container"
            ref={scrollRef}
            style={{ x: spring }}
          >
            <ul
              className="unlist thumbnails"
              style={{ height: "70%", alignItems: "center" }}
            >
              {museum.map((room) =>
                room.floors === userName
                  ? room.rooms.map((r, i) => (
                      <li key={i}>
                        <Link to={`/${r.name}`}>
                          <img
                            style={{ width: "30vw" }}
                            src={r.introImg}
                            alt={`intro ${r.name}`}
                          />
                        </Link>
                      </li>
                    ))
                  : match.path === "/gallery"
                  ? room.rooms.map((r, i) => (
                      <li key={i}>
                        <Link to={`/${r.name}`}>
                          <img
                            style={{ width: "30vw" }}
                            src={r.introImg}
                            alt={`intro ${r.name}`}
                          />
                        </Link>
                      </li>
                    ))
                  : null
              )}
            </ul>
          </motion.div>
        </div>
        <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
      </motion.div>
    </>
  );
};
export default Gallery;
