import W0001 from "../../images/GE/WEB-0001-251kb.jpg";
import W0921 from "../../images/GE/WEB-0921-258kb.jpg";
import W0995 from "../../images/GE/WEB-0995-249kb.jpg";
import W8782 from "../../images/GE/WEB-8782-259kb.jpg";

import React, { useState } from "react";
import { Container } from "../Latf/styles";

import ImageSlider from "../../components/imageSlider";
import PageHeaders from "../../components/PageHeaders";
import Modal from "../../components/Modal";
import Scroll from "../../components/Scroll";
import { EnescuObject } from "./dataEnescu";
import { SubHeaderWrapper, Wrapper } from "./styles";
import { IntroContainer, WrapperIntroText } from "../Lightscapes/styles";

export const EnescuData = [
  { image: W0001, text: "xmas", css: { width: "40%", position: "absolute" } },
  { image: W0995, text: "olp", css: { width: "30%", position: "absolute" } },
  { image: W0921, text: "pass", css: { width: "40%", position: "absolute" } },
  { image: W8782, text: "venice", css: { width: "28%", position: "absolute" } },
];
const Enescu = () => {
  const [showModal, setShowModal] = useState(false);
  const [withText, setWithText] = useState(false);
  const [selected, setSelected] = useState(0);

  const openModal = (id) => {
    setSelected(id);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="scroll-container flex column">
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            src={selected.image}
            alt={selected.id}
          />
        </Modal>
        <PageHeaders>George Enescu's Secret Garden</PageHeaders>
        <Scroll>
          <Container style={{ flexDirection: "row" }}>
            <IntroContainer>
              <WrapperIntroText style={{ width: "60%", paddingLeft: 60 }}>
                <p>
                  “What’s the connection between your flower pictures and
                  Enescu’s music?” asked the Festival’s producer.
                </p>
                <br />
                <p>
                  The answer lay in the imagination of each concertgoer. I would
                  call the exhibits “George Enescu’s Secret Garden,” and invite
                  viewers to “give the pictures a name that would make Enescu
                  smile.”
                </p>
                <br />
                <p>
                  Some 225 to 275 people attended each concert, and 12% to 15%
                  of them were intrigued enough to fill out a “Name the Picture”
                  ballot!
                </p>
                <br />
                <p>
                  The winning names are highlighted on the next three pages. 
                </p>
              </WrapperIntroText>

              <ImageSlider
                styles={{
                  display: "flex",
                  width: "30%",
                  justifyContent: "space-between",
                }}
                withText={withText}
                slides={EnescuData}
                currentSlide={(id) => openModal(id)}
              />
            </IntroContainer>
          </Container>
          {EnescuObject.map((obj, i) => (
            <Container key={i}>
              <SubHeaderWrapper>{obj.name}</SubHeaderWrapper>
              <Wrapper style={{ height: "70%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {obj.top.map((el, i) => (
                    <img
                      key={i}
                      style={el.css}
                      onClick={() => openModal(el)}
                      src={el.image}
                      alt={el.i}
                    />
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {obj.btm.map((el, i) => (
                    <img
                      key={i}
                      style={el.css}
                      onClick={() => openModal(el)}
                      src={el.image}
                      alt={el.i}
                    />
                  ))}
                </div>
              </Wrapper>
            </Container>
          ))}
        </Scroll>
      </div>
    </>
  );
};

export default Enescu;
