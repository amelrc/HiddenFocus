import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { PageTransition } from "./Home";
import ImageSlider from "../components/imageSlider";
import WhoMe from "../images/WHYNOW/WEB-9574-252kb--Who-Me.jpg";
import Leather from "../images/WHYNOW/Leather.png";
import { WNData } from "../Data";

const Block1 = styled.div`
  display: flex;
  width: 80%;
  margin: 200px auto 100px auto;
  justify-content: space-around;
  align-items: flex-end;
`;

const Text1 = styled.span`
  font: normal normal normal 60px/32px Mrs Saint Delafield;
`;
const SliderWrapper = styled.div`
  // width: 100vw;
  // height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 60px auto;
`;

const Block2 = styled.div`
  font: normal normal 300 18px/30px Lato;
  color: #331c65;
  width: 60%;
  margin: auto;
  text-align: center;
`;

const Text2 = styled.span`
  font: normal normal normal 45px/56px Mrs Saint Delafield;
`;

const WhatNow = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={PageTransition}>
      <Block1>
        <img
          src={WhoMe}
          alt="Who-Me"
          style={{ margin: "100 0 0 0 ", height: "20vw" }}
        />

        <div
          style={{
            width: "35%",
            font: "normal normal 300 18px/30px Lato",
            color: "#331c65",
          }}
        >
          <p>
            <Text1>In</Text1> the early Spring of 2019, I picked up the camera
            again after a multi year break. Something magical happened: the
            pictures came to life and began to school me. Image after image, the
            shoots of new life revealed what I had been searching for over the
            years when I stood behind the lens.
          </p>
          <p>
            The unfolding leaves and blossoms showed form emerging from the
            deep, light piercing dark and exploding into color. They told their
            story of creation and, by letting me stand witness, told me
            something of my own.
          </p>
          <p>
            So did the Spring of 2019 mark a turning point in my journey, and
            the start of a new post retirement adventure. The search had woven
            like a thread through the story of my years: from parochial grade
            school through catholic seminary, from running the family business
            through personal relationships and marriage, from early stock market
            speculations through a thirty year career on Wall Street and Bay
            Street.
          </p>
        </div>
      </Block1>
      <ImageSlider slides={WNData} />
      <Block2>
        <p>
          I retired in October, 2013. Now I could devote serious time and effort
          to following my inner voices, especially those related to taking
          pictures and singing. As expressed in the program for my corporate
          retirement dinner:
        </p>
        <Text2>
          <p>
            Technical Analysis combines elements of pattern recognition, both in
            mathematics and in human behavior. These elements are very much at
            play in Ray’s two passionate avocations: photography and singing *
            both classical repertoire and the Great American Songbook.
          </p>
        </Text2>
        <p>
          But I wasn’t ready yet. Although life’s beauty ran riot around me, the
          inner eye could not yet hold it in focus. The opaqueness manifested
          physically as well. Muscular constrictions born of a lifetime’s worth
          of striving and fight or flight duality kept my voice from sounding
          freely the crystalline emotion of our deepest song.
        </p>
        <p>
          Happily, since the Spring of 2019 the vocal knot has steadily
          loosened. And, as I approach the seventh anniversary of my official
          retirement, both body and spirit have near fully recycled. I look
          forward to a time soon when I will sing for you…
        </p>
      </Block2>
      <img style={{ width: "100vw" }} src={Leather} alt="Leather Jacket" />
    </motion.div>
  );
};

export default WhatNow;
