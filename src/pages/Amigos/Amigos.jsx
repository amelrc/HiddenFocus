import React, { useState, useEffect, useRef } from "react";
import { useViewportScroll, useTransform } from "framer-motion";
import locomotiveScroll from "locomotive-scroll";

import Modal from "../../components/Modal";
import PageHeaders from "../../components/PageHeaders";
import Scroll from "../../components/Scroll";
import { Container, Wrapper } from "../Latf/styles";
import { Left, Right, IntroContainer } from "./styles";
import { PageOne, PageTwo, Expo, FirstBlock } from "./dataAmigos";
import { WrapperIntroText } from "../Lightscapes/styles";

import I6 from "../../images/CAUC/6.jpg";
import I7 from "../../images/CAUC/7.jpg";
import I8 from "../../images/CAUC/8.jpg";
import I9 from "../../images/CAUC/9.jpg";

import {
  AnimationWrapper,
  AnimatedImage,
  HeaderWrapper,
  ImageWrapper,
  H1,
} from "./styles";

// import I0 from "../../images/CAUC/WEB-8704-250kb.jpg";
import Image from "../../components/Image";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Amigos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const ref = useRef();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: ref.current,
      smooth: true,
      direction: "horizontal",
      smartphone: {
        smooth: true,
        direction: "horizontal",
      },
      tablet: {
        smooth: true,
        direction: "horizontal",
      },
    });
  });

  const openModal = (id) => {
    setSelected(id);
    setShowModal((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5" }} data-scroll-container ref={ref}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          src={selected.image}
          alt={selected.i}
        />
      </Modal>
      <div data-scroll-section style={{ display: "flex" }}>
        <div style={{ width: "100vw" }}>
          <PageHeaders>Cuatro Amigos: Una Cuba</PageHeaders>
        </div>
        {FirstBlock.map((el, i) => {
          return (
            // <div style={{ width: "100vw" }}>
            <Image
              key={i}
              id={el.i}
              pic={el.pic}
              imgHeight={el.imgHeight}
              height={el.height}
              mTop={el.mTop}
              mRight={el.mRight}
              mBottom={el.mBottom}
              mLeft={el.mLeft}
              positionY={el.positionY}
              // speed={el.speed}
              onClick={() => openModal(el)}
              // whileHover={{ scale: 1.3 }}
            />
            // </div>
          );
        })}
        <div style={{ display: "flex", width: " 100%" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <div style={{ width: "30%" }}>
              <p>
                Four artists, three Cuban and one Canadian, have come together
                to share the work they have rendered in painting, paper and
                photography. The expo celebrates the inner life of our cities
                and the bountiful nature that nurtures and surrounds them.
                Together, they invite us to reflect on the broad range of
                experiences that we share in common, and that lay the foundation
                for a life lived in harmony.
              </p>
            </div>
            <img
              style={{ width: "30%" }}
              // onClick={() => openModal(obj)}
              src={I8}
              alt="sshs"
            />
          </div>
          <div>
            <img
              // onClick={() => openModal(obj)}
              src={I6}
              alt="sshs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amigos;
