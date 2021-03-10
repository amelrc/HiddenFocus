import W0762 from "../../images/MX/WEB-0762-250kb.jpg";
import Contest from "../../images/MX/WEB-Contest-Sign-251kb.jpg";

import React, { useState } from "react";
import { Container } from "../Latf/styles";

import ImageSlider from "../../components/imageSlider";
import PageHeaders from "../../components/PageHeaders";
import Modal from "../../components/Modal";
import Scroll from "../../components/Scroll";
import { PageOne } from "./dataMexico";
import { SubHeaderWrapper, Wrapper } from "../Enescu/styles";
import { IntroContainer, WrapperIntroText } from "../Lightscapes/styles";

export const EnescuData = [
  { image: W0762, text: "xmas", css: { width: "40%", position: "absolute" } },
  { image: Contest, text: "olp", css: { width: "30%", position: "absolute" } },
];

const Mexico = () => {
  const [showModal, setShowModal] = useState(false);
  const [withText, setWithText] = useState(false);
  const [selected, setSelected] = useState(0);

  console.log("selected state", selected);

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
        <PageHeaders>Look at the Flowers...</PageHeaders>
        <Scroll>
          <Container style={{ flexDirection: "row" }}>
            <IntroContainer>
              <WrapperIntroText style={{ width: "60%", paddingLeft: 60 }}>
                <p>
                  The Flowers images’ first public showing came about
                  unexpectedly.
                </p>
                <br />
                <p>
                  One day in mid July 2019, I was having lunch with my friend
                  Bill at Como En Casa, a family style Mexican restaurant in my
                  old downtown neighborhood. As lunch hour wound down, I took
                  out three of my most recent prints to show Bill. Carlos, the
                  ever alert proprietor, quickly came over to join us and have a
                  look.
                </p>
                <br />
                <p>
                  “I like the last one most” said Carlos. Then he pointed over
                  to the long wall, looked at me squarely and asked: “Ray, would
                  you consider exhibiting your art here in my restaurant?”
                  “Absolutely,” I replied without hesitation. “No, I’m serious,”
                  he said, “please think about it.” “I have, Carlos, and the
                  answer is Yes. Let’s do it!”
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

          <Container>
            <SubHeaderWrapper>{PageOne.name}</SubHeaderWrapper>
            <Wrapper style={{ height: "70%" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {PageOne.top.map((el, i) => (
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
                {PageOne.btm.map((el, i) => (
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
        </Scroll>
      </div>
    </>
  );
};

export default Mexico;
