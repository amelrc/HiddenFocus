import React, { useState } from "react";
import Modal from "../../components/Modal";
import PageHeaders from "../../components/PageHeaders";
import Scroll from "../../components/Scroll";
import { Container, Wrapper } from "../Latf/styles";
import { Left, Right, IntroContainer } from "./styles";
import { PageOne, PageTwo, Expo } from "./dataAmigos";
import { WrapperIntroText } from "../Lightscapes/styles";

const Amigos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);

  const openModal = (id) => {
    setSelected(id);
    setShowModal((prev) => !prev);
  };
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          src={selected.image}
          alt={selected.i}
        />
      </Modal>
      {/* <PageHeaders>Cuatro Amigos: Una Cuba</PageHeaders> */}
      <Scroll>
        <IntroContainer>
          {PageOne.left.map((obj, i) => {
            return (
              <Left>
                <WrapperIntroText style={{ width: "70%", height: "25%" }}>
                  {obj.text}
                </WrapperIntroText>
                <img
                  width="50%"
                  onClick={() => openModal(obj)}
                  src={obj.image}
                  alt={i}
                />
              </Left>
            );
          })}
          {PageOne.right.map((obj, i) => {
            return (
              <Right>
                <img
                  width="50%"
                  onClick={() => openModal(obj)}
                  src={obj.image}
                  alt={i}
                />
              </Right>
            );
          })}
        </IntroContainer>
        <IntroContainer>
          {PageTwo.left.map((obj, i) => {
            return (
              <Left>
                <WrapperIntroText style={{ width: "70%", height: "25%" }}>
                  {obj.text}
                </WrapperIntroText>
                <img
                  width="44%"
                  onClick={() => openModal(obj)}
                  src={obj.image}
                  alt={i}
                />
              </Left>
            );
          })}
          {PageTwo.right.map((obj, i) => {
            return (
              <Right>
                <img
                  width="50%"
                  onClick={() => openModal(obj)}
                  src={obj.image}
                  alt={i}
                />
              </Right>
            );
          })}
        </IntroContainer>

        <Container>
          <Wrapper>
            <div className="flex column centerV" style={{ width: "25%" }}>
              {Expo.left.map((obj, i) => (
                <img
                  onClick={() => openModal(obj)}
                  src={obj.image}
                  alt={i}
                  style={obj.css}
                />
              ))}
            </div>
            <div className="flex centerV" style={{ width: "50%" }}>
              {Expo.center.map((obj, i) => (
                <img
                  onClick={() => openModal(obj)}
                  src={obj.image}
                  alt={i}
                  style={obj.css}
                />
              ))}
            </div>
            <div className="flex column centerV" style={{ width: "25%" }}>
              {Expo.right.map((obj, i) => (
                <img
                  onClick={() => openModal(obj)}
                  src={obj.image}
                  alt={i}
                  style={obj.css}
                />
              ))}
            </div>
          </Wrapper>
        </Container>
      </Scroll>
    </div>
  );
};

export default Amigos;
