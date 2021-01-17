import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/SVG/Logo_Official.svg";
import { Burger } from "./Burger";
import Hamburger from "./Hamburger";

const HFlogo = styled.img`
  width: 14px;
  cursor: pointer;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 64px;
  position: fixed;
  width: 90%;
  z-index: 100;
`;
const Header = () => {
  //   const { open, setOpen } = props;
  const [state, setState] = React.useState({
    initial: false,
    clicked: null,
    menuName: "menu",
  });

  const [disable, setDisable] = React.useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({ initial: null, clicked: true, menuName: "close" });
    } else if (state.clicked === true) {
      setState({ clicked: !state.clicked, menuName: "menu" });
    } else if (state.clicked === false) {
      setState({ clicked: !state.clicked, menuName: "close" });
    }
  };

  const disableMenu = () => {
    setDisable(!disable);
    setTimeout(() => {
      setDisable(false);
    }, 1200);
  };

  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <HFlogo src={Logo} alt="logo" />
        </Link>
        {/* <Link to="/menu">menu</Link> */}
        <div>
          <button disabled={disable} onClick={handleMenu}>
            menu
          </button>
        </div>
        <Hamburger state={state} />
      </HeaderWrapper>
    </>
  );
};
export default Header;
