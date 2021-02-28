import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./WrongHamburger";
import styled from "styled-components";
import Logo from "../images/SVG/Logo_Official.svg";

const MenuState = styled.button`
  color: ${(open) => (open ? `#8b33b9` : `black`)};
`;

const HFlogo = styled.img`
  width: 14px;
  cursor: pointer;
`;

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);
  console.log(state);
  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header style={{ position: "fixed", zIndex: 10, width: "100%" }}>
      <div>
        <div className="wrapper">
          <div className="inner-header">
            <Link to="/">
              <HFlogo src={Logo} alt="logo" />
            </Link>
            <div className="menu">
              <MenuState
                disabled={disabled}
                open={state.clicked}
                onClick={handleMenu}
              >
                {state.menuName}
              </MenuState>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
