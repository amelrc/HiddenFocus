import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { PageTransition } from "../pages/Home";
import styles from "styled-components";
import { device } from "../generalStyles";

const ScrollContainer = styles.div`
position: fixed;
left: 0;
right: 0;
will-change: transform;
display: flex;
flex-direction: column;`;

const ThumbnailsContainer = styles(motion.div)`
position: relative;
height: 100vh;
width: max-content;
display: flex;
align-items: center;
padding: 0px;
@media ${device.tablet} {
  // maybe some padding
}`;

const Scroll = ({ children }) => {
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
        <ScrollContainer>
          <ThumbnailsContainer ref={scrollRef} style={{ x: spring }}>
            {children}
          </ThumbnailsContainer>
        </ScrollContainer>
        <div ref={ghostRef} style={{ height: scrollRange, width: "100vw" }} />
      </motion.div>
    </>
  );
};
export default Scroll;
