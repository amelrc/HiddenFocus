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
  &:hover {
    visibility: visible;
    opacity: 1;
  }
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

export const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  /* right: 0; */
  top: 0;
  /* background: rgba(29,106,154,0.72); */
  color: #fff;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.2s, visibility 0.2s;
  transition: opacity 0.2s, visibility 0.2s;
  margin: auto;
  font: 300 5vw/5vw Lato;
  color: #331c65;
  white-space: nowrap;
  z-index: 1;
  text-align: center;
`;
export const Hover = styled.div`
  position: relative;
  &:hover {
    ${P} {
      visibility: visible;
      opacity: 1;
    }
  }
`;
