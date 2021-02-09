import styled from "styled-components";

export const device = {
  tablet: `(min-width: 768px)`,
  small: `(min-width: 1024px)`,
  medium: `(min-width: 1366px)`,
  large: `(min-width: 1920px)`,
};

export const Ul = styled.ul`
  height: 70%;
  align-items: center;
`;
export const Li = styled.li`
  list-style: none;
  margin: 10px;
`;

export const Img = styled.img`
  width: 30vw;
`;

export const H1 = styled.h1`
  position: fixed;
  height: 10%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: flex-end;
  font: normal normal 5vw/5vw Mrs Saint Delafield;
  z-index: 2;
  color: #331c65;
`;
