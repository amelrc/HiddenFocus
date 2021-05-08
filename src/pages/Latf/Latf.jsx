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

import W0241 from "../../images/LATF/WEB-0241-281kb.jpg";
import W0563 from "../../images/LATF/WEB-0563-247kb.jpg";
import W0900 from "../../images/LATF/WEB-0900-247kb.jpg";
import W0291 from "../../images/LATF/WEB-0291-251kb.jpg";
import W2499 from "../../images/LATF/WEB-2499-249kb.jpg";
///////
import W3881 from "../../images/LATF/WEB-3881-251kb.jpg";
import W4223 from "../../images/LATF/WEB-4223-249kb.jpg";
import W4243 from "../../images/LATF/WEB-4243-243kb.jpg";
///////
import W3887 from "../../images/LATF/WEB-3887-288kb.jpg";
///////
import W2613 from "../../images/LATF/WEB-2613-257kb.jpg";
///////

import Modal from "../../components/Modal";
import PageHeaders from "../../components/PageHeaders";
import Scroll from "../../components/Scroll";
import W2555 from "../../images/LATF/WEB-2555-263kb.jpg";
import { IntroContainer, WrapperIntroText } from "../Lightscapes/styles";
import Image from "../../components/Image";

const Latf = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState("");

  const openModal = (e) => {
    console.log(selected);
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
      <PageHeaders>Look at the Flowers</PageHeaders>

      <Image src={W2555} imgWidth={"100%"} alt={W2555} />
      <WrapperIntroText>
        <p>
          <span style={{ font: "30px/26px Lato" }}>F</span>
          ocus. When we look at something, really look, what captures our
          attention stands out in sharp relief. Everything else blurs away.
          These flower “portraits” are taken with a 100mm Macro lens, and make
          deliberate use of the focal plane as a major part of the composition,
          along with the placement of objects and blocks of color. The goal is
          to use all the elements of composition to invite the viewer to see the
          flowers in a particular way.
        </p>
        <br />
        <p>
          Together, these images make up an imaginary exhibition called Look at
          the Flowers… It is a still growing body of work that began in the
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

      {/* //////////// */}
      <Scroll>
        <IntroContainer>
          <WrapperIntroText>
            <p>
              <span style={{ font: "30px/26px Mrs Saint Delafield" }}>F</span>
              ocus. When we look at something, really look, what captures our
              attention stands out in sharp relief. Everything else blurs away.
              These flower “portraits” are taken with a 100mm Macro lens, and
              make deliberate use of the focal plane as a major part of the
              composition, along with the placement of objects and blocks of
              color. The goal is to use all the elements of composition to
              invite the viewer to see the flowers in a particular way.
            </p>
            <br />
            <p>
              Together, these images make up an imaginary exhibition called Look
              at the Flowers… It is a still growing body of work that began in
              the Spring and Summer of 2019. When Spring came around this year,
              I wondered what would happen when I looked through the lens. Would
              anything “new” show up? Please take a look with me and see!
            </p>
          </WrapperIntroText>
          <ImageWrapper>
            <img src={W2555} width={"100%"} alt={W2555} />
          </ImageWrapper>
        </IntroContainer>
        {objects1.map((obj, i) => (
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
        <Container>
          <SubHeader>{Tulips20A.name}</SubHeader>
          <Wrapper>
            {Tulips20A.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={el.i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{BAON.name}</SubHeader>
          <Wrapper>
            {BAON.page.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{THOAA.name}</SubHeader>
          <Wrapper>
            {THOAA.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{RW.name}</SubHeader>
          <Wrapper style={{ width: "80%" }}>
            {RW.page.map((el, i) => (
              <RWImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
            <RWText>
              <p>
                <SpanRW>My</SpanRW>
                {"     "}
                love for you is an evening star that glows once more toward the
                end of day
              </p>
              <br />
              <p>
                My love for you is an ancient scar a gash in youth that bled
                away
              </p>
              <br />
              <p>
                {" "}
                My love for you is the morning star the glint of light that
                leads the way
              </p>
            </RWText>
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Intimations.name}</SubHeader>
          <Wrapper>
            {Intimations.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{HC.name}</SubHeader>
          <Wrapper>
            {HC.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{WOF.name}</SubHeader>
          <Wrapper>
            {WOF.page.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Annunciation.name}</SubHeader>
          <Wrapper>
            {Annunciation.page.map((el, i) => (
              <VerticalImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{Windhover.name}</SubHeader>
          <Wrapper>
            <WrapperIntroText>
              <h4>To Christ our Lord</h4>
              <br />
              <p>
                <span style={{ font: "30px/26px Mrs Saint Delafield" }}>I</span>{" "}
                caught this morning morning’s minion, kingdom of daylight’s
                dauphin, dapple-dawn-drawn Falcon, in his riding Of the rolling
                level underneath him steady air, and striding High there, how he
                rung upon the rein of a wimpling wing In his ecstacy! then off,
                off forth on swing, As a skate’s heel sweeps smooth on a
                bow-bend: the hurl and gliding Rebuffed the big wind. My heart
                in hiding Stirred for a bird,—the achieve of, the mastery of the
                thing!
              </p>
              <br />
              <p>
                Brute beauty and valour and act, oh, air, pride, plume, here
                Buckle! AND the fire that breaks from thee then, a billion Times
                told lovelier, more dangerous, O my chevalier!
              </p>
              <br />
              <p>
                No wonder of it: shéer plód makes plough down sillion Shine, and
                blue-bleak embers, ah my dear, Fall, gall themselves, and gash
                gold-vermillion.
              </p>

              <br />
              <h4>Gerard Manley Hopkins (1844 1889)</h4>
            </WrapperIntroText>
            {Windhover.p11.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{TA.name}</SubHeader>
          <Wrapper>
            {TA.page.map((el, i) => (
              <FotoWrapper>
                <img
                  key={i}
                  style={el.css}
                  onClick={() => openModal(el)}
                  src={el.image}
                  alt={i}
                />
              </FotoWrapper>
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{TAA.name}</SubHeader>
          <Wrapper>
            {TAA.p13.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Peonies.name}</SubHeader>
          <Wrapper>
            {Peonies.page.map((el, i) => (
              <PeoniesWrapper>
                <img
                  key={i}
                  style={el.css}
                  onClick={() => openModal(el)}
                  src={el.image}
                  alt={i}
                />
              </PeoniesWrapper>
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{PeoniesA.name}</SubHeader>
          <Wrapper>
            {PeoniesA.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{HTM.name}</SubHeader>
          <Wrapper>
            {HTM.page.map((el, i) => (
              <VerticalImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{ITSOTN.name}</SubHeader>
          <Wrapper style={{ width: "80%" }}>
            {ITSOTN.page.map((el, i) => (
              <RWImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
            <RWText>
              <p>
                <span style={{ font: "30px/26px Mrs Saint Delafield" }}>L</span>{" "}
                ike the moon growing dim on the rim of the hill in the chill,
                still of the night...
              </p>
              <br />
              <br />
              <h4>Cole Porter</h4>
            </RWText>
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{UG.name}</SubHeader>
          <Wrapper>
            {UG.page.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{Alien.name}</SubHeader>
          <Wrapper>
            {Alien.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Animations.name}</SubHeader>
          <Wrapper>
            {Animations.page.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{HTGO.name}</SubHeader>
          <Wrapper>
            {HTGO.page.map((el, i) => (
              <VerticalImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{Chrysanthemums.name}</SubHeader>
          <Wrapper>
            {Chrysanthemums.page.map((el, i) => (
              <ChrysanthemumsWrapper>
                <img
                  key={i}
                  style={el.css}
                  onClick={() => openModal(el)}
                  src={el.image}
                  alt={i}
                />
              </ChrysanthemumsWrapper>
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{UL.name}</SubHeader>
          <Wrapper>
            {UL.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Hydrangeas.name}</SubHeader>
          <Wrapper style={{ flexDirection: "column", height: "78%" }}>
            {Hydrangeas.page.map((el, i) => (
              <HydrangeasWrapper>
                <img
                  key={i}
                  style={el.css}
                  onClick={() => openModal(el)}
                  src={el.image}
                  alt={i}
                />
              </HydrangeasWrapper>
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{LOTF.name}</SubHeader>
          <Wrapper>
            {LOTF.page.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
            <LiliesText>
              <p>
                <SpanLilies>C</SpanLilies>
                onsider the lilies of the field, how they grow: they neither
                toil nor spin, yet I tell you, even Solomon in all his glory was
                not arranged like one of these.
              </p>
              <br />
              <h4>Matthew 6:28-29</h4>
            </LiliesText>
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{HTRM.name}</SubHeader>
          <Wrapper>
            {HTRM.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{Iris.name}</SubHeader>
          <Wrapper>
            {Iris.page.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{MM.name}</SubHeader>
          <Wrapper>
            {MM.page.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{SM.name}</SubHeader>
          <Wrapper>
            {SM.page.map((el, i) => (
              // <div style={el.css}>
              <SunflowerImage
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
              /* <p>{el.text}</p> */
              // </div>
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{TODAC.name}</SubHeader>
          <Wrapper>
            {TODAC.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{CS.name}</SubHeader>
          <Wrapper>
            {CS.page.map((el, i) => (
              <VerticalImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{AL.name}</SubHeader>
          <Wrapper>
            {AL.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{FL.name}</SubHeader>
          <Wrapper>
            {FL.page.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{Winter19.name}</SubHeader>
          <Wrapper>
            <Winter19Text>
              <p>
                <SpanW19>F</SpanW19>
                ull many a gem of purest ray serene
              </p>{" "}
              <p>The dark unfathom'd caves of ocean bear:</p>{" "}
              <p>Full many a flower is born to blush unseen,</p>
              <p> And waste its sweetness on the desert air. </p>{" "}
              <p>Elegy in a Country Churchyard</p>
              <br />
              <h4>Thomas Gray</h4>
            </Winter19Text>
            {Winter19.page.map((el, i) => (
              <VerticalImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={el.i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{Winter19A.name}</SubHeader>
          <Wrapper>
            {Winter19A.page.map((el, i) => (
              <PeoniesWrapper>
                <img
                  key={i}
                  style={el.css}
                  onClick={() => openModal(el)}
                  src={el.image}
                  alt={i}
                />
              </PeoniesWrapper>
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{Winter20.name}</SubHeader>
          <Wrapper>
            {Winter20.page.map((el, i) => (
              <VerticalImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={el.i}
              />
            ))}
            <p>Satori</p>
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{BLUY.name}</SubHeader>
          <Wrapper>
            {BLUY.page.map((el, i) => (
              <VerticalImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={el.i}
              />
            ))}
          </Wrapper>
        </Container>

        <Container>
          <SubHeader>{QAG.name}</SubHeader>
          <Wrapper>
            <QueenImageWrapper>
              {QAG.page.map((el, i) => (
                <QueenImage
                  key={i}
                  onClick={() => openModal(el)}
                  src={el.image}
                  alt={el.i}
                />
              ))}
              <QueenText>
                <p>
                  <SpanQueen>T</SpanQueen>o see a World in a Grain of Sand And a
                  Heaven in a Wild Flower, Hold Infinity in the palm of your
                  hand And Eternity in an hour.
                </p>
                <br />
                <h4> Auguries of Innocence William Blake</h4>
              </QueenText>
            </QueenImageWrapper>
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Elysium.name}</SubHeader>
          <Wrapper>
            {Elysium.page.map((el, i) => (
              <SingleImage
                key={i}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
      </Scroll>
    </div>
  );
};

export default Latf;
