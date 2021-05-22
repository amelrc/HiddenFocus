import styled from "styled-components";
import { device } from "../../generalStyles";

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
  font: 14px/24px Kumbh Sans;
  color: #331c65;
  overflow: scroll;
  align-self: center;
  @media ${device.small} {
    // height: 20%;
    font: 16px/26px Kumbh Sans;
  }
  @media ${device.medium} {
    // height: 20%;
    font: 20px/32px Kumbh Sans;
  }
  @media ${device.large} {
    width: 30%;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: center;
  width: 100vw;
  height: 90%;
  @media ${device.small} {
    align-items: center;
  }
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
  @media ${device.medium} {
    padding: 30px;
    max-width: 30%;
  }
  @media ${device.large} {
    max-width: 20%;
  }
`;

export const FigCaption = styled.figcaption`
  margin: 4px 0;
  font: italic 16px/26px Lato;
  color: #331c65;
  @media ${device.medium} {
    font: italic 20px/32px Lato;
  }
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
    max-width: 60%;
  }
  @media ${device.large} {
    max-width: 54%;
  }
`;
