import React from "react";
import { H1 } from "./styles";
import Scroll from "../../components/Scroll";

import Image from "../../components/Image";
import { LS } from "../../Data";
import LS1 from "../../images/LS/WEB-LS1-RAY-3838-249kb.jpg";
import { Container, Wrapper } from "../Latf";

const Lightscapes = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <H1>Lightscapes</H1>

      <Scroll>
        <Container style={{ flexDirection: "row" }}>
          <div
            style={{
              width: "35%",
              padding: 30,
              font: "normal normal 300 18px/30px Lato",
              color: "#331c65",
            }}
          >
            <p>
              I began taking "portraits" of flowers in the Spring of 2019.  By
              summer, they had grown into a body of work called "Look at the
              Flowers..." and, in the fall, became the subject of four local
              exhibits (insert link to Shows/Look at the Flowers).  As winter
              unfolded, I began to wonder what would show up through the lens
              come Spring.  Would the 2020 blossoms look the same?
            </p>
            <p>
              "Homage to Monet" appeared on the first photo-shoot of Spring, and
              radiated the answer: the possibilities, even within the confines
              of my small garden, are infinite. 
            </p>
            <p>
              The visual feel of this image and of others soon to follow is
              decidedly watercolor.  Since the distinctive medium for all these
              images is light, I've settled on a new name to describe them:
              "Lightscapes."
            </p>
          </div>
          <div
            className="flex column"
            style={{ width: "40%", alignItems: "center" }}
          >
            <Image image={LS1} width={"70%"} alt={LS1} />
            <p
              style={{
                font: "normal normal 300 18px/30px Lato",
                color: "#331c65",
              }}
            >
              "Homage to Monet"
            </p>
          </div>
        </Container>

        {LS.map((el, i) => (
          <Container key={i}>
            <Wrapper className="column">
              <img src={el.img} alt={i.img} style={el.css} />
              {el.text === "" ? (
                <p>{el.text}</p>
              ) : (
                <p
                  style={{
                    font: "normal normal 300 18px/30px Lato",
                    color: "#331c65",
                  }}
                >
                  "{el.text}"
                </p>
              )}
            </Wrapper>
          </Container>
        ))}
      </Scroll>
    </div>
  );
};

export default Lightscapes;
