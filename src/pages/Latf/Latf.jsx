import React, { useState } from "react";
import { useViewportScroll, useTransform } from "framer-motion";

import Modal from "../../components/Modal";
import Image from "../../components/Image";

import I0 from "../../images/LATF/0.jpg";
import I10 from "../../images/LATF/10.jpg";
import I14 from "../../images/LATF/14_text.jpg";
import I14a6 from "../../images/LATF/14a6_text.jpg";
import I25 from "../../images/LATF/25_text.jpg";
import I43 from "../../images/LATF/43_text.jpg";
import I50 from "../../images/LATF/50_text.jpg";
import I67 from "../../images/LATF/67_text.jpg";
import I73 from "../../images/LATF/73_text.jpg";
import I74 from "../../images/LATF/74.jpg";

import { FirstBlock, SecondBlock, ThirdBlock, FourthBlock, FifthBlock, SixthBlock, SeventhBlock, EighthBlock } from "./dataLatf";
import { IntroContainer, WrapperIntroText } from "../Lightscapes/styles";
import {
  H1,
  HeaderWrapper,
  ImageWrapper,
  AnimatedImage,
  AnimationWrapper,
} from "./styles";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Latf = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const openModal = (e) => {
    console.log(e)
    setSelected(e);
    setShowModal((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          src={selected.pic}
          alt={selected.i}
        />
      </Modal>

      <AnimationWrapper>
        <HeaderWrapper>
          <H1
            animate={{
              opacity: 1,
              bottom: 0,
              alignItems: "flex-end",
              transition: { delay: 1, ...transition },
            }}
            style={{ opacity: opacity }}
          >
            Look at the Flowers
          </H1>
        </HeaderWrapper>
        <ImageWrapper>
          <AnimatedImage
            style={{ scale: scale }}
            animate={{
              left: "20%",
              width: "60%",
              transition: { delay: 0.2, ...transition },
            }}
            src={I0}
            alt={I0}
          />
        </ImageWrapper>
      </AnimationWrapper>

      <div>
        <WrapperIntroText style={{ marginTop: "10%" }}>
          <p>
            <span style={{ font: "30px Hidden Focus" }}>Focus.</span> When we
            look at something, really look, what captures our attention stands
            out in sharp relief. Everything else blurs away. These flower
            “portraits” are taken with a 100mm Macro lens, and make deliberate
            use of the focal plane as a major part of the composition, along
            with the placement of objects and blocks of color. The goal is to
            use all the elements of composition to invite the viewer to see the
            flowers in a particular way.
          </p>
          <br />
          <p>
            Together, these images make up an imaginary exhibition called Look
            at the Flowers… It is a still growing body of work that began in the
            Spring and Summer of 2019. When Spring came around this year, I
            wondered what would happen when I looked through the lens. Would
            anything “new” show up? Please take a look with me and see!
          </p>
        </WrapperIntroText>

        {FirstBlock.map((el, i) => {
          return (
            <Image
              key={i}
              id={el.i}
              pic={el.pic}
              imgWidth={el.imgWidth}
              mTop={el.mTop}
              mRight={el.mRight}
              mBottom={el.mBottom}
              mLeft={el.mLeft}
              positionX={el.positionX}
              speed={el.speed}
              onClick={() => openModal(el)}
            // whileHover={{ scale: 1.3 }}
            />
          );
        })}

        <div style={{ backgroundColor: "#180920", marginTop: "20%" }}>
          <Image
            style={{ margin: "10%" }}
            positionX={"center"}
            mTop={'100px'}
            pic={I10}
            imgWidth={"80%"}
            onClick={(e) => openModal(e)}
          />

          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <div
              style={{
                color: "#b3c53f",
                display: "flex",
                flexDirection: "column",
                width: "35%",
                alignItems: "flex-end",
                paddingBottom: "10%",
              }}
            >
              <div style={{ width: "80%" }}>
                <p>I know even though I can't see it</p>
                <p>somewhere waiting for me</p>
                <p>there will always be love</p>
              </div>
              <br />
              <div style={{ width: "60%" }}>
                <p>Enrico Garzilli</p>
                <p>from Rage of the Heart</p>
              </div>
            </div>
          </div>
        </div>

        {SecondBlock.map((el, i) => {
          return (
            <Image
              key={i}
              pic={el.pic}
              imgWidth={el.imgWidth}
              mTop={el.mTop}
              mRight={el.mRight}
              mBottom={el.mBottom}
              mLeft={el.mLeft}
              positionX={el.positionX}
              speed={el.speed}
              onClick={() => openModal(el)}
            // whileHover={{ scale: 1.3 }}
            />
          );
        })}

        <div style={{ backgroundColor: "#1a2b04", marginTop: "20%" }}>
          <Image
            style={{ margin: "10%" }}
            positionX={"center"}
            pic={I14}
            imgWidth={"80%"}
            onClick={(e) => openModal(e)}
          />

          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <div
              style={{
                color: "#b3c53f",
                display: "flex",
                flexDirection: "column",
                width: "35%",
                alignItems: "flex-end",
                paddingBottom: "10%",
              }}
            >
              <div style={{ width: "80%" }}>
                <p>I know even though I can't see it</p>
                <p>somewhere waiting for me</p>
                <p>there will always be love</p>
              </div>
              <br />
              <div style={{ width: "60%" }}>
                <p>Enrico Garzilli</p>
                <p>from Rage of the Heart</p>
              </div>
            </div>
          </div>
        </div>

        {ThirdBlock.map((el, i) => {
          return (
            <Image
              key={i}
              pic={el.pic}
              imgWidth={el.imgWidth}
              mTop={el.mTop}
              mRight={el.mRight}
              mBottom={el.mBottom}
              mLeft={el.mLeft}
              positionX={el.positionX}
              speed={el.speed}
              onClick={() => openModal(el)}
            // whileHover={{ scale: 1.3 }}
            />
          );
        })}
        <div style={{ backgroundColor: "#1a2b04", marginTop: "20%" }}>
          <Image
            style={{ margin: "10%" }}
            positionX={"center"}
            pic={I14a6}
            imgWidth={"80%"}
            onClick={(e) => openModal(e)}
          />

          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <div
              style={{
                color: "#b3c53f",
                display: "flex",
                flexDirection: "column",
                width: "35%",
                alignItems: "flex-end",
                paddingBottom: "10%",
              }}
            >
              <div style={{ width: "80%" }}>
                <p>I know even though I can't see it</p>
                <p>somewhere waiting for me</p>
                <p>there will always be love</p>
              </div>
              <br />
              <div style={{ width: "60%" }}>
                <p>Enrico Garzilli</p>
                <p>from Rage of the Heart</p>
              </div>
            </div>
          </div>
        </div>

        {FourthBlock.map((el, i) => {
          return (
            <Image
              key={i}
              pic={el.pic}
              imgWidth={el.imgWidth}
              mTop={el.mTop}
              mRight={el.mRight}
              mBottom={el.mBottom}
              mLeft={el.mLeft}
              positionX={el.positionX}
              speed={el.speed}
              onClick={() => openModal(el)}
            // whileHover={{ scale: 1.3 }}
            />
          );
        })}

        <div style={{ backgroundColor: "#1a2b04", marginTop: "20%" }}>
          <Image
            style={{ margin: "10%" }}
            positionX={"center"}
            pic={I25}
            imgWidth={"80%"}
            onClick={(e) => openModal(e)}
          />

          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <div
              style={{
                color: "#b3c53f",
                display: "flex",
                flexDirection: "column",
                width: "35%",
                alignItems: "flex-end",
                paddingBottom: "10%",
              }}
            >
              <div style={{ width: "80%" }}>
                <p>I know even though I can't see it</p>
                <p>somewhere waiting for me</p>
                <p>there will always be love</p>
              </div>
              <br />
              <div style={{ width: "60%" }}>
                <p>Enrico Garzilli</p>
                <p>from Rage of the Heart</p>
              </div>
            </div>
          </div>
        </div>


        {FifthBlock.map((el, i) => {
          return (
            <Image
              key={i}
              pic={el.pic}
              imgWidth={el.imgWidth}
              mTop={el.mTop}
              mRight={el.mRight}
              mBottom={el.mBottom}
              mLeft={el.mLeft}
              positionX={el.positionX}
              speed={el.speed}
              onClick={() => openModal(el)}
            // whileHover={{ scale: 1.3 }}
            />
          );
        })}

        <div style={{ backgroundColor: "#1a2b04", marginTop: "20%" }}>
          <Image
            style={{ margin: "10%" }}
            positionX={"center"}
            pic={I43}
            imgWidth={"80%"}
            onClick={(e) => openModal(e)}
          />

          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <div
              style={{
                color: "#b3c53f",
                display: "flex",
                flexDirection: "column",
                width: "35%",
                alignItems: "flex-end",
                paddingBottom: "10%",
              }}
            >
              <div style={{ width: "80%" }}>
                <p>I know even though I can't see it</p>
                <p>somewhere waiting for me</p>
                <p>there will always be love</p>
              </div>
              <br />
              <div style={{ width: "60%" }}>
                <p>Enrico Garzilli</p>
                <p>from Rage of the Heart</p>
              </div>
            </div>
          </div>
        </div>

        {SixthBlock.map((el, i) => {
          return (
            <Image
              key={i}
              pic={el.pic}
              imgWidth={el.imgWidth}
              mTop={el.mTop}
              mRight={el.mRight}
              mBottom={el.mBottom}
              mLeft={el.mLeft}
              positionX={el.positionX}
              speed={el.speed}
              onClick={() => openModal(el)}
            // whileHover={{ scale: 1.3 }}
            />
          );
        })}

        <div style={{ backgroundColor: "#1a2b04", marginTop: "20%" }}>
          <Image
            style={{ margin: "10%" }}
            positionX={"center"}
            pic={I50}
            imgWidth={"80%"}
            onClick={(e) => openModal(e)}
          />

          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <div
              style={{
                color: "#b3c53f",
                display: "flex",
                flexDirection: "column",
                width: "35%",
                alignItems: "flex-end",
                paddingBottom: "10%",
              }}
            >
              <div style={{ width: "80%" }}>
                <p>I know even though I can't see it</p>
                <p>somewhere waiting for me</p>
                <p>there will always be love</p>
              </div>
              <br />
              <div style={{ width: "60%" }}>
                <p>Enrico Garzilli</p>
                <p>from Rage of the Heart</p>
              </div>
            </div>
          </div>
        </div>

        {SeventhBlock.map((el, i) => {
          return (
            <Image
              key={i}
              pic={el.pic}
              imgWidth={el.imgWidth}
              mTop={el.mTop}
              mRight={el.mRight}
              mBottom={el.mBottom}
              mLeft={el.mLeft}
              positionX={el.positionX}
              speed={el.speed}
              onClick={() => openModal(el)}
            // whileHover={{ scale: 1.3 }}
            />
          );
        })}

        <div style={{ backgroundColor: "#1a2b04", marginTop: "20%" }}>
          <Image
            style={{ margin: "10%" }}
            positionX={"center"}
            pic={I67}
            imgWidth={"80%"}
            onClick={(e) => openModal(e)}
          />

          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <div
              style={{
                color: "#b3c53f",
                display: "flex",
                flexDirection: "column",
                width: "35%",
                alignItems: "flex-end",
                paddingBottom: "10%",
              }}
            >
              <div style={{ width: "80%" }}>
                <p>I know even though I can't see it</p>
                <p>somewhere waiting for me</p>
                <p>there will always be love</p>
              </div>
              <br />
              <div style={{ width: "60%" }}>
                <p>Enrico Garzilli</p>
                <p>from Rage of the Heart</p>
              </div>
            </div>
          </div>
        </div>

        {EighthBlock.map((el, i) => {
          return (
            <Image
              key={i}
              pic={el.pic}
              imgWidth={el.imgWidth}
              mTop={el.mTop}
              mRight={el.mRight}
              mBottom={el.mBottom}
              mLeft={el.mLeft}
              positionX={el.positionX}
              speed={el.speed}
              onClick={() => openModal(el)}
            // whileHover={{ scale: 1.3 }}
            />
          );
        })}











        <div style={{ backgroundColor: "#1a2b04", marginTop: "20%" }}>
          <Image
            style={{ margin: "10%" }}
            positionX={"center"}
            pic={I73}
            imgWidth={"80%"}
            onClick={(e) => openModal(e)}
          />

          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <div
              style={{
                color: "#b3c53f",
                display: "flex",
                flexDirection: "column",
                width: "35%",
                alignItems: "flex-end",
                paddingBottom: "10%",
              }}
            >
              <div style={{ width: "80%" }}>
                <p>I know even though I can't see it</p>
                <p>somewhere waiting for me</p>
                <p>there will always be love</p>
              </div>
              <br />
              <div style={{ width: "60%" }}>
                <p>Enrico Garzilli</p>
                <p>from Rage of the Heart</p>
              </div>
            </div>
          </div>
        </div>

        <Image

          pic={I74}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />





      </div>
    </div>
  );
};

export default Latf;
