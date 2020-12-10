import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { galleries } from "../Data";
import { PageTransition } from "./Home";

const Gallery = ({ match }) => {
  const {
    params: { userName },
  } = match;
  console.log(match);

  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={PageTransition}
      >
        <h1>Gallery</h1>
        <ul
          className="unlist"
          style={{
            overflowX: "hidden",
            overflowY: "auto",
            height: "100%",
            width: "80vh",
            transform: "rotate(-90deg) translateY(-100px)",
            transformOrigin: "right top",
          }}
        >
          {galleries.map((gallery, i) =>
            gallery.belongsTo === userName ? (
              <li
                key={i}
                style={{
                  width: 100,
                  height: 100,
                  transform: "rotate(90deg)",
                  transformOrigin: "right top",
                }}
              >
                <Link to={`/gallery/${gallery.belongsTo}/${gallery.name}`}>
                  {gallery.name}
                </Link>
              </li>
            ) : match.path === "/gallery" ? (
              <li
                style={{
                  width: 100,
                  height: 100,
                  transform: "rotate(90deg)",
                  transformOrigin: "right top",
                }}
              >
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
