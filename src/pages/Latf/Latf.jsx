import React, { useState } from "react";
import { useViewportScroll, useTransform } from "framer-motion";

import Modal from "../../components/Modal";
import Image from "../../components/Image";

import I0 from "../../images/LATF/0.jpg";
import I10 from "../../images/LATF/10.jpg";

import { FirstBlock, SecondBlock } from "./dataLatf";
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

  const openModal = (id) => {
    setSelected(id);
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

        {/* <Image
          mLeft={"24%"}
          src={W0241}
          imgWidth={"20%"}
          onClick={(e) => openModal(e)}
        />
        
        
     
        <Image
          positionX={"flex-end"}
          mRight={"4%"}
          src={W6417}
          imgWidth={"60%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-start"}
          src={W2384}
          imgWidth={"30%"}
          onClick={(e) => openModal(e)}
        /> 
        <Image
          mTop={"20%"}
          src={W8135}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        <div
          style={{
            justifyContent: "flex-start",
            display: "flex",
            marginLeft: "4%",
          }}
        >
          <div
            style={{
              color: "#b3c53f",
              display: "flex",
              flexDirection: "column",
              width: "50%",
              alignItems: "flex-end",
              paddingBottom: "10%",
            }}
          >
            <div style={{ width: "80%" }}>
              <p>Rose Window</p>
              <p>My love for you is an evenoing star</p>
              <p>that glows once more toward the end of day</p>
            </div>
            <br />
            <div style={{ width: "80%" }}>
              <p>My love for you is an ancient scar</p>
              <p>a gash in you that bled away</p>
            </div>
            <br />
            <div style={{ width: "80%" }}>
              <p>My love for you is the morning star</p>
              <p>the glint of light that leds the way</p>
            </div>
          </div>
        </div>
        <Image
          mTop={"20%"}
          src={W7020}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"20%"}
          src={W3589}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mTop={"40%"}
          src={W9590}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mLeft={"4%"}
          mTop={"10%"}
          src={W9486}
          imgWidth={"70%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mTop={"4%"}
          src={W9598}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"center"}
          mTop={"30%"}
          src={N7A7897}
          imgWidth={"60%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mTop={"30%"}
          src={W5841}
          imgWidth={"80%"}
          onClick={(e) => openModal(e)}
        />
        <div
          style={{
            justifyContent: "flex-start",
            display: "flex",
            marginLeft: "4%",
          }}
        >
          <div
            style={{
              color: "#b3c53f",
              display: "flex",
              flexDirection: "column",
              width: "50%",
              alignItems: "flex-end",
              paddingBottom: "10%",
            }}
          >
            <div style={{ width: "80%" }}>
              <p>The Windhover</p>
              <p>To Christ our Lord</p>
            </div>
          </div>
        </div>
        <Image
          mTop={"30%"}
          src={W1763}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"30%"}
          mLeft={"10%"}
          src={W4590}
          imgWidth={"20%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"-26%"}
          positionX={"flex-end"}
          src={W5075}
          imgWidth={"54%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"5%"}
          src={W0430}
          imgWidth={"60%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          src={W4799}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"5%"}
          src={W4767}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        I dont have some images from 12.1
        <Image src={W0347} imgWidth={"100%"} onClick={(e) => openModal(e)} />
        <Image
          mTop={"10%"}
          src={W2421}
          mLeft={"4%"}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mTop={"4%"}
          src={W5679}
          imgWidth={"80%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"4%"}
          src={W0362}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"10%"}
          src={W3838}
          imgWidth={"60%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mTop={"10%"}
          src={W6408}
          imgWidth={"90%"}
          onClick={(e) => openModal(e)}
        />
        <div
          style={{
            justifyContent: "flex-start",
            display: "flex",
            marginLeft: "4%",
          }}
        >
          <div
            style={{
              color: "#b3c53f",
              display: "flex",
              flexDirection: "column",
              width: "50%",
              alignItems: "flex-end",
              paddingBottom: "10%",
            }}
          >
            <div style={{ width: "80%" }}>
              <p>Text</p>
              <p>Cole porter</p>
            </div>
          </div>
        </div>
        <Image
          mTop={"30%"}
          src={W6897}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"30%"}
          src={W2N7A8251}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"30%"}
          mLeft={"10%"}
          src={W9225}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mTop={"4%"}
          mRight={"10%"}
          src={W9387}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"center"}
          mTop={"20%"}
          src={W4447}
          imgWidth={"60%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"center"}
          mTop={"20%"}
          src={W4447}
          imgWidth={"60%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"20%"}
          src={W9171}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mTop={"20%"}
          src={W9059}
          imgWidth={"60%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"20%"}
          src={W9170}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        I dont have first image of page 19
        <Image
          positionX={"flex-end"}
          mTop={"20%"}
          src={W2N7A8110}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mLeft={"5%"}
          mTop={"20%"}
          src={W1571}
          imgWidth={"50%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mTop={"20%"}
          src={W0713}
          imgWidth={"60%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"20%"}
          src={W1059}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        I dont have second image of page 20
        <Image
          positionX={"flex-end"}
          mTop={"50%"}
          src={W0713}
          imgWidth={"70%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"20%"}
          src={W1669}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        I dont have second and third image of page 21
        <br />
        home image Heer
        <Image
          mTop={"20%"}
          src={W0831}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
      </div>
    </div>  */}
      </div>
    </div>
  );
};

export default Latf;
