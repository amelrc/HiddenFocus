import styled from "styled-components";


const ImageWrapper = styled.div`
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: ${(props) => props.positionX};
  width: 100%;
  // position: absolute;
`;

const Img = styled.img`
  width: ${(props) => props.imgWidth};
  margin-top: ${(props) => props.mTop};
  margin-right: ${(props) => props.mRight};
  margin-bottom: ${(props) => props.mBottom};
  margin-left: ${(props) => props.mLeft};
`;

// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Image = (props) => {
  const { bg, mTop, mRight, mBottom, mLeft, positionX, imgWidth, src } = props;

  return (
    <ImageWrapper bg={bg} positionX={positionX}>
      <Img
        {...props}
        imgWidth={imgWidth}
        mTop={mTop}
        mRight={mRight}
        mBottom={mBottom}
        mLeft={mLeft}
        src={src}
        alt="image"
      />
    </ImageWrapper>
  );
};

export default Image;
