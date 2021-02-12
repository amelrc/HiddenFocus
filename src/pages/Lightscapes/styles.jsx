import styled from "styled-components";
import { device } from "../Gallery/styles";

export const H1 = styled.h1`
  position: fixed;
  height: 18%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: flex-end;
  font: normal normal 5vw/5vw Mrs Saint Delafield;
  z-index: 2;
  color: #331c65;
`;

export const WrapperIntroText = styled.div`
  width: 40%;
  height: 50%;
  padding: 30px;
  font: 14px/24px Lato;
  color: #331c65;
  overflow: scroll;
  align-self: center;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: center;
  width: 100vw;
  height: 90%;
`;

export const ImageWrapper = styled.figure`
  width: fit-content;
  height: fit-content;
  align-items: center;
  background-color: antiquewhite;
  padding: 20px;
  max-width: 22%;
  display: flex;
  flex-direction: column;
`;

export const FigCaption = styled.figcaption`
  font: italic 16px/24px Lato;
  color: #331c65;
`;

export const Wrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: fit-content;
  max-width: 50%;
  @media ${device.small} {
    max-width: 70%;
  }
  @media ${device.medium} {
    max-width: 50%;
  }
`;
