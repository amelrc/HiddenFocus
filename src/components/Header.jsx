import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/SVG/Logo_Official.svg";
import { Burger } from "./Burger";

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
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <HFlogo src={Logo} alt="logo" />
        </Link>
        <Link to="/menu">menu</Link>
      </HeaderWrapper>
    </>
  );
};
export default Header;
