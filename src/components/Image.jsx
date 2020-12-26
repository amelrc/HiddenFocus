import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Img = styled.img`
  width: ${(props) => props.width};
`;

const Image = (props) => {
  const { image, width, id } = props;
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      {/* <div
        style={{
          flexWrap: "wrap",
          height: "100%",
        }}
      > */}
      <Img
        data-aos-mirror="true"
        data-aos-delay="500"
        data-aos="flip-left"
        src={image}
        width={width}
        alt={id}
      />
      {/* </div> */}
    </>
  );
};

export default Image;
