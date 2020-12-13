import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { galleries } from "../Data";
import { PageTransition } from "./Home";

const Gallery = ({ match }) => {
  const {
    params: { userName },
  } = match;

  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={PageTransition}
      >
        <h1>Gallery</h1>
        <ul className="unlist">
          {galleries.map((gallery, i) =>
            gallery.belongsTo === userName ? (
              <li key={i}>
                <Link to={`/gallery/${gallery.belongsTo}/${gallery.name}`}>
                  {gallery.name}
                </Link>
              </li>
            ) : match.path === "/gallery" ? (
              <li>
                <Link to={`/gallery/${gallery.belongsTo}/${gallery.name}`}>
                  <img style={{ height: "70vh" }} src={gallery.img} alt="" />
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </motion.div>
    </>
  );
};
export default Gallery;
