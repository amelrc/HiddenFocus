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

const LeftMenu = styled.div`
  width: 40%;
`;
const RightMenu = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  font: 500 60px/80px Roxborough CF;
  letter-spacing: 0px;
  color: #fbf8fd;
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
  color: #fbf8fd;
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
          <h3>Hidden Focus</h3>
          {/* <img width={300} height={200} src={Contest} alt='' /> */}
          <h3>name the picture context</h3>
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
