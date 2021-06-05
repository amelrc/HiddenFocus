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

import {
  FirstBlock,
  SecondBlock,
  ThirdBlock,
  FourthBlock,
  FifthBlock,
  SixthBlock,
  SeventhBlock,
  EighthBlock,
  LastBlock,
  SubPage,
} from "./dataLatf";
import { IntroContainer, WrapperIntroText } from "../Lightscapes/styles";
import {
  H1,
  HeaderWrapper,
  ImageWrapper,
  AnimatedImage,
  AnimationWrapper,
  Font,
} from "./styles";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

console.log("hello");

const Latf = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const openModal = (e) => {
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
              // speed={el.speed}
              onClick={() => openModal(el)}
              // whileHover={{ scale: 1.3 }}
            />
          );
        })}
        {SubPage.map((el, i) => {
          return i === 0 ? (
            <div style={{ backgroundColor: "#180920", marginTop: "20%" }}>
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
                // speed={el.speed}
                onClick={() => openModal(el)}
                // whileHover={{ scale: 1.3 }}
              />
              <Font>
                <div
                  style={{
                    color: "#edf1d0",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "10%",
                  }}
                >
                  <div>
                    <p>I know even though I can't see it</p>
                    <p>somewhere waiting for me</p>
                    <p>there will always be love</p>
                  </div>
                  <br />
                  <div>
                    <p style={{ fontWeight: 700, color: "#9dad34" }}>
                      Enrico Garzilli
                    </p>
                    <p style={{ color: "#9dad34" }}>
                      from <i>Rage of the Heart</i>
                    </p>
                  </div>
                </div>
              </Font>
            </div>
          ) : (
            ""
          );
        })}
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
              // speed={el.speed}
              onClick={() => openModal(el)}
              // whileHover={{ scale: 1.3 }}
            />
          );
        })}
        {SubPage.map((el, i) => {
          return i === 1 ? (
            <div style={{ backgroundColor: "#ffffff", marginTop: "20%" }}>
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
                // speed={el.speed}
                onClick={() => openModal(el)}
                // whileHover={{ scale: 1.3 }}
              />
              <Font>
                <div
                  style={{
                    color: "#9dad34",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "10%",
                  }}
                >
                  <p style={{ font: "40px Hidden Focus", color: "#9dad34" }}>
                    Rose Window
                  </p>
                  <br />
                  <div>
                    <p>My love for you is an evening star</p>
                    <p>that glows once more toward the end of day</p>
                    <br />
                    <p>My love for you is an ancient sear</p>
                    <p>a gash in youth that bled away</p>
                    <br />
                    <p>My love for you is the morning star</p>
                    <p>the glint of light that leads the way</p>
                  </div>
                </div>
              </Font>
            </div>
          ) : (
            ""
          );
        })}
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
              // speed={el.speed}
              onClick={() => openModal(el)}
              // whileHover={{ scale: 1.3 }}
            />
          );
        })}
        {SubPage.map((el, i) => {
          return i === 2 ? (
            <div style={{ marginTop: "20%" }}>
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
                // speed={el.speed}
                onClick={() => openModal(el)}
                // whileHover={{ scale: 1.3 }}
              />
              <Font>
                <div
                  style={{
                    color: "#331c65",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "10%",
                  }}
                >
                  <p style={{ font: "40px Hidden Focus", color: "#331c65" }}>
                    The Windhover
                  </p>
                  <p
                    style={{
                      font: "600 20px Kumbh Sans",
                      color: "#602380",
                      marginLeft: 10,
                    }}
                  >
                    To Christ our Lord
                  </p>
                  <br />
                  <div style={{ width: "100%" }}>
                    <p>I cought this morning morning's minion, king-</p>
                    <p style={{ marginLeft: 16 }}>
                      dom of daylight's dauphin, dapple-dawn-drawn Falcon, in
                      his riding
                    </p>
                    <p style={{ marginLeft: 16 }}>
                      Of the rolling level underneath him steady air, and
                      striding
                    </p>
                    <p>
                      High there, how he rung upon the rein of a wimpling wing
                    </p>
                    <p>In this ecstasy! then off, off forth on swing.</p>
                    <p style={{ marginLeft: 16 }}>
                      As a skate's heel sweeps smooth on a bow-bend: the hurl
                      and gliding
                    </p>
                    <p style={{ marginLeft: 16 }}>
                      Rebuffed the big wind. My heart in hiding
                    </p>
                    <p>
                      Stirred for a bird, --the achieve of, the mastery of the
                      thing!
                    </p>
                    <br />
                    <p>
                      Brute beauty and valour and act, oh, air, pride, plume,
                      here
                    </p>
                    <p style={{ marginLeft: 16 }}>
                      Buckle! AND the fire that breaks fron thee then, a billion
                    </p>
                    <p>Times told lovelier, more dangerous, O my chevailer!</p>
                    <br />
                    <p style={{ marginLeft: 16 }}>
                      No wonder of it: sheer plod makes plough down sillion
                    </p>
                    <p>Shine, and blue-bleak embers, ah my dear,</p>
                    <p style={{ marginLeft: 16 }}>
                      Fall, gall themselves, and gash gold-vermillion
                    </p>

                    <p
                      style={{
                        margin: "8% 0 0 40%",
                        fontWeight: 600,
                        color: "#602380",
                      }}
                    >
                      Gerard Manley Hopkins
                    </p>
                  </div>
                </div>
              </Font>
            </div>
          ) : (
            ""
          );
        })}
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
              // speed={el.speed}
              onClick={() => openModal(el)}
              // whileHover={{ scale: 1.3 }}
            />
          );
        })}
        {SubPage.map((el, i) => {
          return i === 3 ? (
            <div style={{ marginTop: "20%" }}>
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
                // speed={el.speed}
                onClick={() => openModal(el)}
                // whileHover={{ scale: 1.3 }}
              />
              <Font>
                <div
                  style={{
                    color: "#331c65",
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end",
                    lineHeight: 1.5,
                  }}
                >
                  <div>
                    <div style={{}}>
                      <p>Like the moon growing dim</p>
                      <p>on the rim f the hill</p>
                      <p>In the chill, still of the night.</p>
                    </div>
                    <br />
                    <div
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      <p>Cole Porter</p>
                    </div>
                  </div>
                </div>
              </Font>
            </div>
          ) : (
            ""
          );
        })}
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
              // speed={el.speed}
              onClick={() => openModal(el)}
              // whileHover={{ scale: 1.3 }}
            />
          );
        })}
        {SubPage.map((el, i) => {
          return i === 4 ? (
            <div style={{ marginTop: "20%" }}>
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
                // speed={el.speed}
                onClick={() => openModal(el)}
                // whileHover={{ scale: 1.3 }}
              />
              <Font>
                <div
                  style={{
                    color: "#737e26",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "10%",
                  }}
                >
                  <div>
                    <p>Consider the lillies of the field, how they grow:</p>
                    <p>
                      they neither toil nor spin. &ensp; Yet I tell you, even
                      Solomon
                    </p>
                    <p>in all his glory was not arrayed like one of these</p>
                  </div>
                  <div
                    style={{
                      width: "60%",
                      margin: "6% 0 0 80%",
                      fontWeight: 600,
                    }}
                  >
                    <p>Matthew 6: 28-29</p>
                  </div>
                </div>
              </Font>
            </div>
          ) : (
            ""
          );
        })}
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
              // speed={el.speed}
              onClick={() => openModal(el)}
              // whileHover={{ scale: 1.3 }}
            />
          );
        })}
        {SubPage.map((el, i) => {
          return i === 5 ? (
            <div style={{ marginTop: "20%" }}>
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
                // speed={el.speed}
                onClick={() => openModal(el)}
                // whileHover={{ scale: 1.3 }}
              />
              <Font>
                <div
                  style={{
                    color: "#331c65",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    lineHeight: 1.5,
                  }}
                >
                  <div>
                    <p>
                      Truhling, Sommer und Herbst genoss der gluckliche Dichter,
                    </p>
                    <p>Vor dem Winter hat ihm endlich der Hugel geschutzt.</p>
                  </div>
                  <br />
                  <div style={{ fontWeight: 600 }}>
                    <p>J. W. von Goethe</p>
                  </div>
                </div>
              </Font>
            </div>
          ) : (
            ""
          );
        })}
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
              // speed={el.speed}
              onClick={() => openModal(el)}
              // whileHover={{ scale: 1.3 }}
            />
          );
        })}
        {SubPage.map((el, i) => {
          return i === 6 ? (
            <div>
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
                // speed={el.speed}
                onClick={() => openModal(el)}
                // whileHover={{ scale: 1.3 }}
              />
              <Font style={{ justifyContent: "center" }}>
                <div
                  style={{
                    color: "#737e26",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "70%",
                  }}
                >
                  <div>
                    <p>Full many a flow's is born to blush unseen</p>
                    <p>and waste its sweetness on the desert air.</p>
                  </div>
                  <div
                    style={{
                      marginTop: "10%",
                      fontWeight: 600,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <p>Thomas Gray</p>
                    <p>Elegy Written in a Country Churchyard</p>
                  </div>
                </div>
              </Font>
            </div>
          ) : (
            ""
          );
        })}
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
              // speed={el.speed}
              onClick={() => openModal(el)}
              // whileHover={{ scale: 1.3 }}
            />
          );
        })}
        {SubPage.map((el, i) => {
          return i === 7 ? (
            <div style={{ marginTop: "20%" }}>
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
                // speed={el.speed}
                onClick={() => openModal(el)}
                // whileHover={{ scale: 1.3 }}
              />
              <Font style={{ justifyContent: "flex-end" }}>
                <div
                  style={{
                    color: "#737e26",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "10%",
                  }}
                >
                  <div>
                    <p>To see a World in a Grain of Sand</p>
                    <p>And a Heaver in a Wild Flower</p>
                    <p>Hold Infinity in the palm of your hand</p>
                    <p>And Eternity in an hour</p>
                  </div>
                  <div
                    style={{
                      width: "60%",
                      margin: "6% 0 0 30%",
                      fontWeight: 600,
                    }}
                  >
                    <p>William Blake</p>
                  </div>
                </div>
              </Font>
            </div>
          ) : (
            ""
          );
        })}
        <div style={{ backgroundColor: "#e8e8e8", padding: "10% " }}>
          {LastBlock.map((el, i) => {
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
                // speed={el.speed}
                onClick={() => openModal(el)}
                // whileHover={{ scale: 1.3 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Latf;
