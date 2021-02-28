import styled from "styled-components";
import { device } from "../../generalStyles";

export const Images = styled.img`
  max-width: 100%;
  width: fit-content;
`;
export const Text = styled.p`
  font: 300 14px/16px Lato;
  color: #331c65;
  @media ${device.medium} {
    font: 300 18px/22px Lato;
  }
`;

export const I1P1D = styled.div`
  width: 30%;
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
  @media ${device.small} {
    width: 48%;
  }
  @media ${device.medium} {
    &:after {
      font-size: 24px;
    }
  }
`;
export const P1A = styled(Text)`
  width: 40%;
  @media ${device.small} {
    width: 24%;
  }
`;
export const P1B = styled(Text)`
  width: 40%;
  margin-top: 20px;
  @media ${device.small} {
    width: 30%;
  }
`;
export const P2A = styled(Text)`
  width: 40%;
  @media ${device.small} {
    width: 30%;
  }
`;
export const P2B = styled(Text)`
  width: 22%;
  margin-top: 20px;
`;

export const I2P1D = styled.div`
  width: 20%;
  margin: 10px;
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 38%;
    color: #331c65;
    font-size: 16px;
  }
  @media ${device.small} {
    width: 30%;
    &:after {
      left: 72%;
    }
  }
  @media ${device.medium} {
    &:after {
      font-size: 24px;
      left: 70%;
    }
  }
`;
export const I1P2D = styled.div`
  width: 22%;
  margin: 10px;
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 80%;
    color: #331c65;
    font-size: 16px;
  }
  @media ${device.small} {
    width: 30%;
  }
  @media ${device.medium} {
    &:after {
      font-size: 24px;
    }
  }
`;
export const I2P2D = styled.div`
  width: 30%;
  margin: 10px;
  &:after {
    content: "Angkor Wat";
    position: relative;
    left: 76%;
    color: #331c65;
    font-size: 16px;
  }
  @media ${device.medium} {
    &:after {
      font-size: 24px;
    }
  }
`;
export const I1P3D = styled.div`
  width: 50%;
  margin: 10px;
  &:after {
    content: "Bayon";
    position: relative;
    left: 90%;
    color: #331c65;
    font-size: 16px;
  }
  @media ${device.small} {
    width: 70%;
  }
  @media ${device.medium} {
    &:after {
      font-size: 24px;
    }
  }
`;

export const I3P3D = styled.div`
  width: 70%;
  margin: 10px;
  &:after {
    content: "Bayon";
    position: relative;
    left: 100%;
    color: #331c65;
    font-size: 16px;
  }
  @media ${device.small} {
    width: 90%;
  }
  @media ${device.medium} {
    &:after {
      font-size: 24px;
    }
  }
`;
// export const I1P4D = styled.div`
//   &:after {
//     content: "Phnon Bakheng";
//     position: relative;
//     left: 88%;
//     color: #331c65;
//     font-size: 20px;
//   }
// `;
// export const I2P4D = styled.div`
//   &:after {
//     content: "Ta Prohm";
//     position: relative;
//     left: 94%;
//     color: #331c65;
//     font-size: 20px;
//   }
// `;
// export const I3P4D = styled.div`
//   &:after {
//     content: "Ta Prohm";
//     position: relative;
//     left: 94%;
//     color: #331c65;
//     font-size: 20px;
//   }
// `;
export const I1P5D = styled.div`
  margin: 10px;
  width: 22%;
  &:after {
    content: "Ta Prohm";
    position: relative;
    left: 100%;
    color: #331c65;
    font-size: 16px;
    bottom: 23px;
    margin: 10px;
  }
  @media ${device.small} {
    width: 40%;
  }
  @media ${device.medium} {
    &:after {
      font-size: 24px;
    }
  }
`;
export const I2P5D = styled.div`
  width: 22%;
  margin: 10px;
  &:nth-child(1)::after {
    content: "Angkor Wat";
    position: relative;
    left: 85%;
    color: #331c65;
    font-size: 16px;
  }
  &:nth-child(2)::after {
    content: "Phnom Bakheng";
    position: relative;
    left: 85%;
    color: #331c65;
    font-size: 16px;
  }
  @media ${device.small} {
    width: 40%;
  }
  @media ${device.medium} {
    &:nth-child(1)::after {
      font-size: 24px;
    }
    &:nth-child(2)::after {
      font-size: 24px;
    }
  }
`;

export const TextFive = styled.p`
  font: 300 14px/16px Lato;
  color: #331c65;
  width: 70%;
  text-align: center;
  margin: 0 0 20px 0;
  @media ${device.medium} {
    font: 300 18px/22px Lato;
  }
`;

export const SubHeader = styled.h2`
  margin: -10px auto 1%;
  font: 300 2vw/16px Lato;
  color: #331c65;
  @media ${device.small} {
    margin: -10px auto 3%;
  }
`;
