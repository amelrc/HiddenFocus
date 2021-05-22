import React, { useState } from "react";
import {
  Container,
  SubHeader,
  Wrapper,
  ImageWrapper,
  FotoWrapper,
  PeoniesWrapper,
  ChrysanthemumsWrapper,
  HydrangeasWrapper,
  RWImage,
  RWText,
  SingleImage,
  VerticalImage,
  LiliesText,
  SunflowerImage,
  Winter19Text,
  QueenText,
  QueenImageWrapper,
  QueenImage,
  SpanRW,
  SpanLilies,
  SpanW19,
  SpanQueen,
  AnimatedImage,
  AnimationWrapper,
} from "./styles";
import {
  objects1,
  Tulips20A,
  BAON,
  THOAA,
  RW,
  Intimations,
  HC,
  WOF,
  Annunciation,
  TA,
  Windhover,
  TAA,
  Peonies,
  PeoniesA,
  HTM,
  ITSOTN,
  UG,
  Alien,
  Animations,
  HTGO,
  Chrysanthemums,
  UL,
  Hydrangeas,
  LOTF,
  HTRM,
  Iris,
  MM,
  SM,
  Winter19,
  QAG,
  Elysium,
  TODAC,
  CS,
  AL,
  FL,
  Winter19A,
  Winter20,
  BLUY,
} from "./dataLatf";
import W2555 from "../../images/LATF/WEB-2555-263kb.jpg";
import W0241 from "../../images/LATF/WEB-0241-281kb.jpg";
import W0563 from "../../images/LATF/WEB-0563-247kb.jpg";
import W0900 from "../../images/LATF/WEB-0900-247kb.jpg";
import W0291 from "../../images/LATF/WEB-0291-251kb.jpg";
import W2499 from "../../images/LATF/WEB-2499-249kb.jpg";
import W3881 from "../../images/LATF/WEB-3881-251kb.jpg";
import W4223 from "../../images/LATF/WEB-4223-249kb.jpg";
import W4243 from "../../images/LATF/WEB-4243-243kb.jpg";
import W3887 from "../../images/LATF/WEB-3887-288kb.jpg";
import W2613 from "../../images/LATF/WEB-2613-257kb.jpg";
import W6417 from "../../images/LATF/WEB-6417-256kb.jpg";
// import W2384 from '../../images/LATF/WEB-2384-260kb.jpg';
import W8135 from "../../images/LATF/WEB-8135-249kb.jpg";
import W7020 from "../../images/LATF/WEB-7020-254kb.jpg";
import W3589 from "../../images/LATF/WEB-3589-249kb.jpg";
import W9598 from "../../images/LATF/WEB-9598-250kb.jpg";
import W9486 from "../../images/LATF/WEB-9486-313kb.jpg";
import W9590 from "../../images/LATF/WEB-9590-250kb.jpg";
import N7A7897 from "../../images/LATF/WEB-2N7A7897-255kb.jpg";
import W5841 from "../../images/LATF/WEB-5841-275kb.jpg";
///////
import W5075 from "../../images/LATF/WEB-5075-264kb.jpg";
import W4590 from "../../images/LATF/WEB-4590-255kb.jpg";
import W1763 from "../../images/LATF/WEB-1763-296kb.jpg";
import W4799 from "../../images/LATF/WEB-4799-252kb.jpg";
///////
import W4767 from "../../images/LATF/WEB-4767-264kb.jpg";
///////
import W0347 from "../../images/LATF/WEB-0347-241kb.jpg";
import W5679 from "../../images/LATF/WEB-5679-295kb.jpg";
import W2421 from "../../images/LATF/WEB-2421-254kb.jpg";
///////
import W0362 from "../../images/LATF/WEB-0362-260kb.jpg";
///////
import W3838 from "../../images/LATF/WEB-3838-249kb.jpg";
///////
import W6408 from "../../images/LATF/WEB-6408-257kb.jpg";
///////
import W0430 from "../../images/LATF/WEB-0430-252kb.jpg";
import W0907 from "../../images/LATF/Web-0907-251kb.jpg";
import W6897 from "../../images/LATF/WEB-6897-248kb.jpg";
///////
import W2N7A8251 from "../../images/LATF/WEB-2N7A8251-250kb.jpg";
///////
import W9225 from "../../images/LATF/WEB-9225-250kb.jpg";
import W9387 from "../../images/LATF/WEB-9387-257kb.jpg";
///////
import W4447 from "../../images/LATF/WEB-4447-253kb.jpg";
///////
import W9170 from "../../images/LATF/WEB-9170-259kb.jpg";
import W9171 from "../../images/LATF/WEB-9171-251kb.jpg";
import W9059 from "../../images/LATF/WEB-9059-258kb.jpg";
///////
import W2N7A8243 from "../../images/LATF/WEB-2N7A8243-249kb.jpg";
///////
import W1571 from "../../images/LATF/WEB-1571-250kb.jpg";
import W0713 from "../../images/LATF/WEB-0713-251kb.jpg";
import W2N7A8110 from "../../images/LATF/WEB-2N7A8110-282kb.jpg";
///////
import W1059 from "../../images/LATF/WEB-1059-249kb.jpg";
///////
import W1669 from "../../images/LATF/WEB-1669-254kb.jpg";
import W1111 from "../../images/LATF/WEB-1111-251kb.jpg";
///////
import W0831 from "../../images/LATF/WEB-0831-252kb.jpg";
///////
import W5995 from "../../images/LATF/WEB-5995-248kb.jpg";
import W0154 from "../../images/LATF/WEB-0154-261kb.jpg";
import W1973 from "../../images/LATF/WEB-1973-249kb.jpg";
///////
import W0769 from "../../images/LATF/IMG_0769 Final cold press  Nicole.jpg";
import W6441 from "../../images/LATF/WEB RAY_6441.jpg";
///////
import W7995 from "../../images/LATF/WEB-7995-256kb.jpg";
import W8175 from "../../images/LATF/WEB-8175-249kb.jpg";
import W7765 from "../../images/LATF/WEB-7765-251kb.jpg";
///////
import W0403 from "../../images/LATF/WEB-0403-250ob.jpg";
///////
import W8325 from "../../images/LATF/WEB-8325-256kb-1.jpg";
///////
import W9311 from "../../images/LATF/WEB-9311-262kb.jpg";
///////
import W8064 from "../../images/LATF/WEB-8064-252kb.jpg";
import W8994 from "../../images/LATF/WEB-8994-254kb.jpg";
import W9139 from "../../images/LATF/WEB-9139-251kb.jpg";
///////
import W3638 from "../../images/LATF/WEB-3638-250kb.jpg";
///////
import W9368 from "../../images/LATF/WEB-9368-253.jpg";
import W9425 from "../../images/LATF/WEB-9425-252kb.jpg";
import W3663 from "../../images/LATF/WEB-3663-255kb.jpg";
///////
import W8622 from "../../images/LATF/WEB-8622-256kb.jpg";
///////
import W2169 from "../../images/LATF/WEB-2169-258kb.jpg";
///////
import W6925 from "../../images/LATF/WEB-6925-6925.jpg";
///////
import W7742 from "../../images/LATF/WEB-7742-259kb.jpg";

import Modal from "../../components/Modal";

import { IntroContainer, WrapperIntroText } from "../Lightscapes/styles";
import Image from "../../components/Image";
import { useViewportScroll, useTransform } from "framer-motion";

// import styled from "styled-components";
import { H1, HeaderWrapper } from "./styles";


const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Latf = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState("");
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const openModal = (e) => {
    setSelected(e.target.src);
    setShowModal((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          src={selected}
          alt={selected}
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
          // style={{ opacity: opacity }}
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
            src={W2555}
            alt={W2555}
            onClick={(e) => openModal(e)}
          />
        </ImageWrapper>
      </AnimationWrapper>

      <div>
        <WrapperIntroText style={{ marginTop: '10%' }}>
          <p>
            <span style={{ font: "30px Hidden Focus" }}>Focus.</span> When
            we look at something, really look, what captures our attention
            stands out in sharp relief. Everything else blurs away. These flower
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

        <Image
          mLeft={"24%"}
          src={W0241}
          imgWidth={"20%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          src={W0563}
          imgWidth={"55%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-start"}
          src={W0900}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mTop={"-100px"}
          mRight={"10%"}
          src={W0291}
          imgWidth={"16%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mRight={"28%"}
          src={W2499}
          imgWidth={"30%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"100px"}
          src={W3881}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"100px"}
          mLeft={"20%"}
          src={W4243}
          imgWidth={"16%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"flex-end"}
          mRight={"10%"}
          src={W4223}
          imgWidth={"50%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          positionX={"center"}
          mTop={"10%"}
          src={W3887}
          imgWidth={"40%"}
          onClick={(e) => openModal(e)}
        />
        <div style={{ backgroundColor: "#1a2b04", marginTop: "20%" }}>
          <Image
            style={{ margin: "10%" }}
            positionX={"center"}
            src={W2613}
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


        {/* ///here comes the new image//// */}
        <Image
          positionX={"flex-end"}
          mRight={"4%"}
          src={W6417}
          imgWidth={"60%"}
          onClick={(e) => openModal(e)}
        />
        {/* <Image
          positionX={"flex-start"}
          src={W2384}
          imgWidth={"30%"}
          onClick={(e) => openModal(e)}
        /> */}
        <Image
          mTop={"20%"}
          src={W8135}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        <div style={{ justifyContent: "flex-start", display: "flex", marginLeft: '4%' }}>
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
        <div style={{ justifyContent: "flex-start", display: "flex", marginLeft: '4%' }}>
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
          mLeft={'10%'}
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
        <Image
          src={W0347}
          imgWidth={"100%"}
          onClick={(e) => openModal(e)}
        />
        <Image
          mTop={"10%"}
          src={W2421}
          mLeft={'4%'}
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
        <div style={{ justifyContent: "flex-start", display: "flex", marginLeft: '4%' }}>
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
          mLeft={'5%'}
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
        {/* <Image
          positionX={"flex-end"}
          mTop={"50%"}
          src={W0713}
          imgWidth={"70%"}
          onClick={(e) => openModal(e)}
        /> */}
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


    </div>
  );
};

export default Latf;
