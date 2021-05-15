import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { museum } from "../../Data";

import Image from "../../components/Image";

import W2555 from "../../images/LATF/WEB-2555-263kb.jpg";
import { Link } from "react-router-dom";
import { P } from "./styles";

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: -50,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = () => {
  return (
    <motion.div>
      <ImageBlocks
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {museum.map((room) =>
          room.rooms.map((r, i) => (
            <ImageBlock
              path={r.url}
              src={r.introImg}
              variants={item}
              className={`image-${i}`}
              name={r.name}
            />
          ))
        )}

        {/* <ImageBlock src={W2555} variants={item} className="image-1" /> */}
        {/* <motion.div variants={itemMain} className="transition-image">
          <motion.img
            layoutId="main-image-1"
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
          />
        </motion.div> */}
        {/* <ImageBlock src={W2555} variants={item} className="image-3" />
        <ImageBlock src={W2555} variants={item} className="image-4" />
        <ImageBlock src={W2555} variants={item} className="image-6" />
        <ImageBlock src={W2555} variants={item} className="image-5" /> */}
      </ImageBlocks>
    </motion.div>
  );
};

export const ImageBlock = ({
  path,
  name,
  src,
  posX,
  posY,
  variants,
  className,
}) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${className}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Link to={path}>
        <Hover>
          <Image className={className} src={src} />
          <P>{name}</P>
        </Hover>
      </Link>
    </motion.div>
  );
};

const ImageBlocks = styled(motion.div)`
  color: green;
  & :nth-child(1) {
    width: 300px;
    left: 16%;
    bottom: 14%;
    &:hover {
      // width: 600px;
      z-index: 1;
    }
  }
  & :nth-child(2) {
    width: 500px;
    right: 12%;
    top: 8%;
  }
  & :nth-child(3) {
    width: 300px;
    right: 20%;
    bottom: 10%;
  }
  & :nth-child(4) {
    width: 500px;
    left: 14%;
    top: 12%;
  }
  & :nth-child(5) {
    width: 500px;
    left: 24%;
    top: 20%;
  }
  & :nth-child(6) {
    width: 500px;
    left: 24%;
    top: 70%;
  }
`;

export const Hover = styled.div`
  position: relative;
  &:hover {
    ${P} {
      visibility: visible;
      opacity: 1;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
    }
  }
`;
export default Loader;
