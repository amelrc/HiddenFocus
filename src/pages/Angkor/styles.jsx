import styled from "styled-components";

export const Images = styled.img`
  max-width: 100%;
  width: fit-content;
`;
export const Text = styled.p`
  font: 300 14px/16px Lato;
  color: #331c65;
`;

export const I1P1D = styled.div`
  width: 40%;
  margin: 10px;
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 100%;
    bottom: 22px;
    color: #331c65;
    margin-left: 10px;
    font-size: 16px;
  }
`;
export const P1A = styled(Text)`
  width: 40%;
`;
export const P1B = styled(Text)`
  width: 40%;
  align-self: flex-end;
  margin-bottom: 10px;
`;

export const I2P1D = styled.div`
  width: 25%;
  margin: 10px;
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 50%;
    color: #331c65;
    font-size: 16px;
  }
`;
export const I1P2D = styled.div`
  width: 28%;
  margin: 10px;
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 87%;
    color: #331c65;
    font-size: 20px;
  }
`;
export const I2P2D = styled.div`
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 76%;
    color: #331c65;
    font-size: 20px;
  }
`;
export const I1P3D = styled.div`
  &:after {
    content: "Bayon";
    position: relative;
    left: 90%;
    color: #331c65;
    font-size: 20px;
  }
`;
export const I2P3D = styled.div`
  &:after {
    content: "Bayon";
    position: relative;
    left: 94%;
    color: #331c65;
    font-size: 20px;
  }
`;
export const I3P3D = styled.div`
  &:after {
    content: "Bayon";
    position: relative;
    left: 100%;
    color: #331c65;
    font-size: 20px;
  }
`;
export const I1P4D = styled.div`
  &:after {
    content: "Phnon Bakheng";
    position: relative;
    left: 88%;
    color: #331c65;
    font-size: 20px;
  }
`;
export const I2P4D = styled.div`
  &:after {
    content: "Ta Prohm";
    position: relative;
    left: 94%;
    color: #331c65;
    font-size: 20px;
  }
`;
export const I3P4D = styled.div`
  &:after {
    content: "Ta Prohm";
    position: relative;
    left: 94%;
    color: #331c65;
    font-size: 20px;
  }
`;
export const I1P5D = styled.div`
  &:after {
    content: "Ta Prohm";
    position: relative;
    left: 100%;
    color: #331c65;
    font-size: 20px;
    bottom: 23px;
    margin: 10px;
  }
`;
export const I2P5D = styled.div`
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 85%;
    color: #331c65;
    font-size: 20px;
  }
`;
export const I3P5D = styled.div`
  &:after {
    content: "Phnom Bakheng";
    position: relative;
    left: 94%;
    color: #331c65;
    font-size: 20px;
  }
`;
