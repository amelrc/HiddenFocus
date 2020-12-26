import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import img1 from "../images/WEB-6417--2000x1333--256kb.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import useWindowSize from "../hook/Img";

import AOS from "aos";
// import "aos/dist/aos.css";

const Container = styled(motion.div)`
  width: 100vw;
  height: auto;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  margin: 40px;
`;

const WhatNow = () => {
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = React.useRef();
  const scrollContainer = React.useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  React.useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  React.useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0,-${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <motion.div className="flex column">
      {/* <HorizontalScroll> */}
      <Container ref={app}>
        <Wrapper>
          <img
            ref={scrollContainer}
            className="test"
            // ref={ref}
            onClick={(e) => console.log(e.screenX)}
            src={img1}
            width={"60%"}
            alt=""
          />
        </Wrapper>
      </Container>

      <Container>
        <Wrapper ref={scrollContainer}>
          <img ref={scrollContainer} src={img1} width={"60%"} alt="" />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <img src={img1} width={"60%"} alt="" />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <img src={img1} width={"60%"} alt="" />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <img src={img1} width={"60%"} alt="" />
        </Wrapper>
      </Container>
      {/* </HorizontalScroll> */}
    </motion.div>
  );
};

export default WhatNow;
