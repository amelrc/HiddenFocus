import styled from "styled-components";
import { device } from "../../generalStyles";

export const SubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const First = styled.h3`
  font: bold 16px/22px Lato;
  color: #bfab25;
  text-transform: uppercase;
  @media ${device.small} {
    font: 400 20px/28px Lato;
  }
`;

export const Second = styled.h3`
  font: 300 12px/16px Lato;
  color: #331c65;
  text-transform: uppercase;
  @media ${device.small} {
    font: 400 16px/24px Lato;
  }
`;
export const Third = styled.h3`
  font: 300 12px/16px Lato;
  color: #331c65;
  @media ${device.small} {
    font: 400 16px/24px Lato;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 70%;
  @media ${device.small} {
    height: 76%;
  }
`;
