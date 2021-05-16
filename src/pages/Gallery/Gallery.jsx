import { Link } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import { museum } from "../../Data";
import Image from "../../components/Image";
import { Hover, ImageBlocks, P } from "./styles";

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

const Loader = ({ match }) => {
  const {
    params: { topic },
  } = match;

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <motion.div key="loader">
          <motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {museum.map((room) =>
                room.floors === topic
                  ? room.rooms.map((r, i) => (
                      <ImageBlock
                        path={`/${r.url}`}
                        src={r.introImg}
                        variants={item}
                        className={`image-${r.id}`}
                        name={r.name}
                      />
                    ))
                  : match.path === "/gallery"
                  ? room.rooms.map((r, i) => (
                      <ImageBlock
                        path={`/${r.url}`}
                        src={r.introImg}
                        variants={item}
                        className={`image-${r.id}`}
                        name={r.name}
                      />
                    ))
                  : null
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export const ImageBlock = ({ path, name, src, variants, className }) => {
  return (
    <motion.div variants={variants} className={`image-block ${className} `}>
      <Link to={path}>
        <Hover>
          <Image positionX={"center"} className={className} src={src} />
          <P>{name}</P>
        </Hover>
      </Link>
    </motion.div>
  );
};

export default Loader;
