import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { museum } from "../Data";
import styled from "styled-components";
import { device } from "../generalStyles";
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "./WrongAnimations";
import Contest from "../images/IMG_1384 Final Metallic Glossy.jpg";

const LeftMenu = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
`;
const RightMenu = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  font: 4vw/5vw Roxborough CF;
  color: #f9efff;
  list-style: none;
  &:hover {
    color: #bfab25;
  }
`;

const Links = styled(Link)`
  text-transform: uppercase;
  color: #f9efff;
  text-decoration: none;
  &:hover {
    color: #bfab25;
  }
`;
const LiSmall = styled.li`
  color: #b3c53f;
  font: 4vw/4vw Roxborough CF;
  margin-left: 10%;
  & ${Links} {
    color: #b3c53f;
    font: 3vw/3vw Roxborough CF;
    &:hover {
      color: #bfab25;
    }
  }
`;

const Ul = styled.ul`
  padding: 0;
  & ${LiSmall}:nth-child(4) {
    margin-left: 20%;
  }
  & ${LiSmall}:nth-child(5) {
    margin-left: 30%;
  }
`;

const ContestText = styled.h3`
  font: 4vw/8vw "Mrs Saint Delafield";
  text-transform: capitalize;
  color: #f9efff;
  margin: 0;
  @media ${device.large} {
    font: 3vw/5vw "Mrs Saint Delafield";
  }
`;

const ContestNumber = styled(ContestText)`
  font: 300 3vw/3vw Lato;
  margin-top: -20px;
  @media ${device.large} {
    font: 200 2vw/2vw "Lato";
  }
`;

const Hamburger = ({ state }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer flex">
        <LeftMenu>
          <Li>Hidden Focus</Li>
          <Link to="/constest">
            <img width={"70%"} src={Contest} alt="" />
          </Link>
          <ContestText>name the picture context</ContestText>
          <ContestNumber>2020</ContestNumber>
        </LeftMenu>
        <RightMenu>
          <nav>
            <Ul className="unlist">
              <Li>
                <Links to="/whynow">Why Now?</Links>
              </Li>

              <Li style={{ marginLeft: "5%" }}>
                <Links style={{ textTransform: "capitalize" }} to="/gallery">
                  Galleries
                </Links>
              </Li>
              {museum.map((room, i) => {
                return (
                  <LiSmall key={i}>
                    <Links to={`/menu/${room.floors}`}>{room.floors}</Links>
                  </LiSmall>
                );
              })}
              <Li>
                <Links style={{ marginLeft: 20 }} to="/influences">
                  Influences
                </Links>
              </Li>
            </Ul>
          </nav>
        </RightMenu>
      </div>
    </div>
  );
};

export default Hamburger;
