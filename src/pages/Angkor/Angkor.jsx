import React, { useState } from "react";
import { Container, Wrapper, SingleImage } from "../Latf/styles";
import PageHeaders from "../../components/PageHeaders";
import Scroll from "../../components/Scroll";
import Modal from "../../components/Modal";
import {
  PageOne,
  PageTwo,
  PageThree,
  PageFour,
  PageFive,
  PageSix,
} from "./dataAngkor";

import {
  Images,
  I1P1D,
  I1P2D,
  I1P3D,
  I1P5D,
  I2P1D,
  I2P2D,
  I2P5D,
  I3P3D,
  P1B,
  P1A,
  P2A,
  P2B,
  TextFive,
  SubHeader,
} from "./styles";

const Angkor = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);

  const openModal = (id) => {
    setSelected(id);
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          src={selected.image}
          alt={selected}
        />
      </Modal>
      <PageHeaders>Angkor Wat</PageHeaders>
      <Scroll>
        <Container>
          <Wrapper>
            {PageOne.top.map((obj, i) => {
              return (
                <div className="flex">
                  <I1P1D>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.image}
                      alt={i}
                    />
                  </I1P1D>
                  <P1A>{obj.text}</P1A>
                </div>
              );
            })}
            {PageOne.btm.map((obj, i) => {
              return (
                <div className="flex" style={{ justifyContent: "flex-end" }}>
                  <P1B>{obj.text}</P1B>
                  <I2P1D>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.image}
                      alt={i}
                    />
                  </I2P1D>
                </div>
              );
            })}
          </Wrapper>
        </Container>
        {/* ///// 2 //////// */}
        <Container>
          <Wrapper style={{ width: "84%" }}>
            {PageTwo.top.map((obj, i) => {
              return (
                <div className="flex">
                  <I1P2D>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.image}
                      alt={i}
                    />
                  </I1P2D>
                  <P2A>{obj.text}</P2A>
                </div>
              );
            })}
            {PageTwo.btm.map((obj, i) => {
              return (
                <div
                  className="flex"
                  style={{ justifyContent: "flex-end", marginTop: "-20%" }}
                >
                  <P2B>{obj.text}</P2B>
                  <I2P2D>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.image}
                      alt={i}
                    />
                  </I2P2D>
                </div>
              );
            })}
          </Wrapper>
        </Container>

        {/* /////////////  3  /////////////// */}
        <Container>
          <div style={{ display: "flex", height: "84%", width: "84%" }}>
            <div className="flex column" style={{ alignItems: " center" }}>
              {PageThree.left.map((obj, i) => {
                return (
                  <I1P3D>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.image}
                      alt={i}
                    />
                  </I1P3D>
                );
              })}
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              {PageThree.right.map((obj, i) => {
                return (
                  <I3P3D style={{ margin: 10 }}>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.image}
                      alt={i}
                    />
                  </I3P3D>
                );
              })}
            </div>
          </div>
        </Container>
        {/* /////////////  4  /////////////// */}
        <Container>
          <div style={{ display: "flex", height: "84%", width: "84%" }}>
            <div style={{ display: "flex" }}>
              {PageFour.right.map((obj, i) => {
                return (
                  <I3P3D style={{ margin: 10 }}>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.image}
                      alt={i}
                    />
                  </I3P3D>
                );
              })}
            </div>
            <div className="flex column" style={{ alignItems: " center" }}>
              {PageFour.left.map((obj, i) => {
                return (
                  <I1P3D>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.image}
                      alt={i}
                    />
                  </I1P3D>
                );
              })}
            </div>
          </div>
        </Container>

        {/* ////////////  5  ///////////// */}

        <Container>
          <div
            style={{ height: "85%", width: "90%", alignItems: "center" }}
            className="flex column"
          >
            <div className="flex" style={{ justifyContent: "center" }}>
              {PageFive.top.map((obj, i) => {
                return (
                  <I1P5D>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.image}
                      alt={i}
                    />
                  </I1P5D>
                );
              })}
            </div>
            <TextFive>
              Two of these images capture something of our cultural disconnect
              from spiritual moorings. The third reminds us of who we really
              are…
            </TextFive>
            <div
              className="flex"
              style={{ alignItems: "center", justifyContent: "space-evenly" }}
            >
              {PageFive.btm.map((obj, i) => {
                return (
                  <I2P5D>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.image}
                      alt={i}
                    />
                  </I2P5D>
                );
              })}
            </div>
          </div>
        </Container>
        {/* //////////  6  ////////////// */}
        <Container>
          <Wrapper>
            {PageSix.page.map((obj, i) => {
              return (
                <SingleImage
                  onClick={() => openModal(obj)}
                  src={obj.image}
                  alt={i}
                  style={{ margin: 10 }}
                />
              );
            })}
          </Wrapper>
          <SubHeader>“The Sentinel”</SubHeader>
        </Container>
      </Scroll>
    </div>
  );
};

export default Angkor;
