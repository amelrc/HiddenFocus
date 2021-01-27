import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { museum } from "../Data";
import styled from "styled-components";
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
  font: 500 60px/80px Roxborough CF;
  letter-spacing: 0px;
  color: #f9efff;
  list-style: none;
  &:hover {
    color: green;
  }
`;

const LiSmall = styled.li`
  color: #b3c53f;
  font: 100 40px/60px Roxborough CF;
  margin-left: 100px;
`;

const Links = styled(Link)`
  text-transform: uppercase;
  color: #f9efff;
  text-decoration: none;
`;

const Ul = styled.ul`
  & ${LiSmall}:nth-child(5) {
    margin-left: 150px;
  }
  & ${LiSmall}:nth-child(6) {
    margin-left: 200px;
  }
`;

const ContestText = styled.h3`
  font: 300 26px/60px Lato;
  text-transform: uppercase;
  color: #f9efff;
  margin: 0;
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
          <img width={"70%"} src={Contest} alt="" />
          <ContestText>name the picture context</ContestText>
          <ContestText style={{ font: "200 26px/20px Lato" }}>2020</ContestText>
        </LeftMenu>
        <RightMenu>
          <nav>
            <Ul className="unlist">
              <Li>
                <Links to="/whynow">Why Now?</Links>
              </Li>
              <Li>
                <Links style={{ marginLeft: 100 }} to="/influences">
                  Influences
                </Links>
              </Li>
              <Li style={{ marginLeft: 50 }}>Galleries</Li>
              {museum.map((room, i) => {
                return (
                  <LiSmall key={i}>
                    <Links
                      style={{ color: "#b3c53f" }}
                      to={`/menu/${room.floors}`}
                    >
                      {room.floors}
                    </Links>
                  </LiSmall>
                );
              })}
            </Ul>
          </nav>
        </RightMenu>
      </div>
    </div>
  );
};

export default Hamburger;
