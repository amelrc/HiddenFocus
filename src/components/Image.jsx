import { motion, useTransform, useViewportScroll } from "framer-motion";
import styled from "styled-components";

const ImageWrapper = styled(motion.div)`
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: ${(props) => props.positionX};
  align-items: ${(props) => props.positionY};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  // position: absolute;
`;

const Img = styled.img`
  width: ${(props) => props.imgWidth};
  height: ${(props) => props.imgHeight};
  margin-top: ${(props) => props.mTop};
  margin-right: ${(props) => props.mRight};
  margin-bottom: ${(props) => props.mBottom};
  margin-left: ${(props) => props.mLeft};
`;

// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Image = (props) => {
  const {
    bg,
    id,
    mTop,
    mRight,
    mBottom,
    mLeft,
    positionX,
    positionY,
    imgWidth,
    imgHeight,
    pic,
    speed,
    onClick,
    whileHover,
    width,
    height,
  } = props;
  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <ImageWrapper
      style={{ y: transform }}
      bg={bg}
      positionX={positionX}
      positionY={positionY}
      whileHover={whileHover}
      width={width}
      height={height}
    >
      <Img
        id={id}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        mTop={mTop}
        mRight={mRight}
        mBottom={mBottom}
        mLeft={mLeft}
        src={pic}
        onClick={onClick}
        // speed={ speed}
        alt="image"
      />
    </ImageWrapper>
  );
};

export default Image;
