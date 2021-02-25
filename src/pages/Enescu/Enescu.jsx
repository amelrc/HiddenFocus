import W0001 from "../../images/GE/WEB-0001-251kb.jpg";
import W0921 from "../../images/GE/WEB-0921-258kb.jpg";
import W0995 from "../../images/GE/WEB-0995-249kb.jpg";
import W8782 from "../../images/GE/WEB-8782-259kb.jpg";

import React, { useState } from "react";
import { Container, Wrapper, SubHeader } from "../Latf/styles";

import ImageSlider from "../../components/imageSlider";
import PageHeaders from "../../components/PageHeaders";
import Modal from "../../components/Modal";
import Scroll from "../../components/Scroll";
import { EnescuObject } from "./dataEnescu";
import { IntroContainer, WrapperIntroText } from "../Lightscapes/styles";

export const EnescuData = [
  { img: W0001, text: "xmas" },
  { img: W0995, text: "olp" },
  { img: W0921, text: "pass" },
  { img: W8782, text: "venice" },
];
const Enescu = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);

  const openModal = (id) => {
    setSelected(id);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="scroll-container flex column">
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <img style={{ width: "100%" }} src={selected.image} alt={selected} />
        </Modal>
        <PageHeaders>George Enescu's Secret Garden</PageHeaders>
        <Scroll>
          <Container style={{ flexDirection: "row" }}>
            <IntroContainer>
              <WrapperIntroText>
                <p>
                  I began taking "portraits" of flowers in the Spring of 2019. 
                  By summer, they had grown into a body of work called "Look at
                  the Flowers..." and, in the fall, became the subject of four
                  local exhibits (insert link to Shows/Look at the Flowers).  As
                  winter unfolded, I began to wonder what would show up through
                  the lens come Spring.  Would the 2020 blossoms look the same?
                </p>
                <p>
                  "Homage to Monet" appeared on the first photo-shoot of Spring,
                  and radiated the answer: the possibilities, even within the
                  confines of my small garden, are infinite. 
                </p>
                <p>
                  The visual feel of this image and of others soon to follow is
                  decidedly watercolor.  Since the distinctive medium for all
                  these images is light, I've settled on a new name to describe
                  them: "Lightscapes."
                </p>
              </WrapperIntroText>
              <ImageSlider
                styles={{
                  display: "flex",
                  width: "30%",
                  justifyContent: "space-between",
                }}
                slides={EnescuData}
              />
            </IntroContainer>
          </Container>
          {EnescuObject.map((obj, i) => (
            <Container key={i}>
              <SubHeader>{obj.name}</SubHeader>
              <Wrapper>
                {obj.page.map((el, i) => (
                  <img
                    key={i}
                    style={el.css}
                    onClick={() => openModal(el)}
                    src={el.image}
                    alt={el.i}
                  />
                ))}
                <p>{obj.text}</p>
              </Wrapper>
            </Container>
          ))}
        </Scroll>
      </div>
    </>
  );
};

export default Enescu;
