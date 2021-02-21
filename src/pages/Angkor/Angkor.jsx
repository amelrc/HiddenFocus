import React, { useState } from "react";
import Image from "../../components/Image";
import { Container, Wrapper, SubHeader } from "../Latf/styles";
import PageHeaders from "../../components/PageHeaders";
import Scroll from "../../components/Scroll";
import Modal from "../../components/Modal";
import { objects1 } from "./dataAngkor";

import I1P1 from "../../images/AW/WEB--0665-302kb--Angkor--p.1.jpg";
import I2P1 from "../../images/AW/WEB--0440--253kb--Angkor--p.1.jpg";
import I1P2 from "../../images/AW/WEB--0355--288kb--Angkor--p.2.jpg";
import I2P2 from "../../images/AW/WEB--0371-257kb--Angkor--p.2.jpg";
import I1P3 from "../../images/AW/WEB-0653--311kb--Angkor--p.3.jpg";
import I2P3 from "../../images/AW/WEB--0592--249kb--Angkor--p.3.jpg";
import I3P3 from "../../images/AW/WEB--0615--258kb--Angkor--p.3.jpg";
import I1P4 from "../../images/AW/WEB--0511--261kb--Angkor--p.4.jpg";
import I2P4 from "../../images/AW/WEB--1509--286kb--Angkor--p.4.jpg";
import I3P4 from "../../images/AW/WEB--0536--378kb--Angkor--p.4.jpg";
import I1P5 from "../../images/AW/WEB--0403--253kb--Angkor--p.5.jpg";
import I2P5 from "../../images/AW/WEB--0577--251kb--Angkor--p.5.jpg";
import I3P5 from "../../images/AW/WEB--1555--252kb--Angkor--p.5.jpg";
import I1P6 from "../../images/AW/WEB--0529--250kb--Angkor--p.6.jpg";
import {
  Images,
  I1P1D,
  I1P2D,
  I1P3D,
  I1P4D,
  I1P5D,
  I2P1D,
  I2P2D,
  I2P3D,
  I2P4D,
  I2P5D,
  I3P3D,
  I3P4D,
  I3P5D,
  P1B,
  P1A,
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
          style={{ width: "100%" }}
          src={selected.top.image}
          alt={selected}
        />
      </Modal>
      <PageHeaders>Angkor Wat</PageHeaders>
      <Scroll>
        {objects1.map((obj, i) => {
          return (
            <Container key={i}>
              <Wrapper>
                <div className="flex">
                  <I1P1D>
                    <Images
                      onClick={() => openModal(obj)}
                      src={obj.top.image}
                      alt=""
                    />
                  </I1P1D>
                  <P1A>{obj.top.text}</P1A>
                </div>

                {/* <div
                  className="flex"
                  style={{ marginTop: -100, justifyContent: "flex-end" }}
                >
                  <P1B>{el.page[1].text}</P1B>
                  <I2P1D>
                    <Images
                      onClick={() => openModal()}
                      src={el.page[1].image}
                      alt={I1P1}
                    />
                  </I2P1D>
                </div> */}
              </Wrapper>
            </Container>
          );
        })}

        {/* //////////////////////////////// */}
        <Container>
          <Wrapper style={{ width: "84%" }}>
            <div className="flex">
              <I1P2D>
                <Images src={I1P2} alt={I1P2} />
              </I1P2D>
              <p
                style={{
                  font: "normal normal 300 14px/16px Lato",
                  color: "#331c65",
                  width: "20%",
                }}
              >
                Angkor Wat was originally constructed as a Hindu temple
                dedicated to the god Vishnu. Here we see the goddess Kali
                receiving the mixed attentions of visitors.
              </p>
            </div>
            <div
              className="flex"
              style={{ marginTop: "-20%", justifyContent: "flex-end" }}
            >
              <p
                style={{
                  font: "normal normal 300 14px/16px Lato",
                  color: "#331c65",
                  margin: "0 0px 40px 0",
                  width: "20%",
                  height: "fit-content",
                  alignSelf: "flex-end",
                }}
              >
                The best way to keep my fellow tourists from “intruding” upon my
                idealized scene was to incorporate them directly into the
                composition…
              </p>
              <I2P2D style={{ width: "36%", margin: 10 }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    margin: 0,
                  }}
                  image={I2P2}
                  alt={I1P2}
                />
              </I2P2D>
            </div>
          </Wrapper>
        </Container>
        {/* //////////////////////////// */}
        <Container>
          <div style={{ height: "85%", width: "90%" }} className="flex">
            <div className="flex column">
              <I1P3D style={{ width: "70%", margin: 10 }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    margin: 0,
                  }}
                  image={I3P3}
                  alt={I3P3}
                />
              </I1P3D>
              <I2P3D style={{ width: "70%", margin: 10 }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    margin: 0,
                  }}
                  image={I1P3}
                  alt={I1P3}
                />
              </I2P3D>
            </div>
            <div className="flex" style={{ justifyContent: "flex-end" }}>
              <I3P3D style={{ margin: 10 }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    margin: 0,
                  }}
                  image={I2P3}
                  alt={I2P3}
                />
              </I3P3D>
            </div>
          </div>
        </Container>
        {/* //////////////////////////// */}
        <Container>
          <div style={{ height: "85%", width: "90%" }} className="flex">
            <div className="flex" style={{ justifyContent: "flex-end" }}>
              <I1P4D style={{ margin: 10 }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    margin: 0,
                  }}
                  image={I2P4}
                  alt={I2P4}
                />
              </I1P4D>
            </div>
            <div
              className="flex column"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <I2P4D style={{ width: "60%", margin: 10 }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    margin: 0,
                  }}
                  image={I1P4}
                  alt={I1P4}
                />
              </I2P4D>
              <I3P4D style={{ width: "54%", margin: 10 }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    margin: 0,
                  }}
                  image={I3P4}
                  alt={I3P4}
                />
              </I3P4D>
            </div>
          </div>
        </Container>
        {/* ///////////////////////// */}

        <Container>
          <div
            style={{ height: "85%", width: "90%", alignItems: "center" }}
            className="flex column"
          >
            <div className="flex" style={{ justifyContent: "center" }}>
              <I1P5D style={{ margin: 10, width: "34%" }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    margin: 0,
                  }}
                  image={I2P5}
                  alt={I2P5}
                />
              </I1P5D>
            </div>
            <p
              style={{
                font: "normal normal 300 14px/16px Lato",
                color: "#331c65",
                width: "40%",
                textAlign: "center",
                margin: "30px 0",
              }}
            >
              Two of these images capture something of our cultural disconnect
              from spiritual moorings. The third reminds us of who we really
              are…
            </p>
            <div
              className="flex"
              style={{ alignItems: "center", justifyContent: "space-evenly" }}
            >
              <I2P5D style={{ width: "34%", margin: 10 }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    margin: 0,
                  }}
                  image={I1P5}
                  alt={I1P5}
                />
              </I2P5D>
              <I3P5D style={{ width: "34%", margin: 10 }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    margin: 0,
                  }}
                  image={I3P5}
                  alt={I3P5}
                />
              </I3P5D>
            </div>
          </div>
        </Container>
        {/* //////////////////////// */}
        <Container>
          <Wrapper className="column">
            <Image image={I1P6} width={"70%"} alt={I1P6} />
            <SubHeader>“The Sentinel”</SubHeader>
          </Wrapper>
        </Container>
      </Scroll>
    </div>
  );
};

export default Angkor;
