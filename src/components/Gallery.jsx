import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { museum } from "../Data";
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
        <ul>
          {museum.map((room) =>
            room.floors === userName
              ? room.rooms.map((r, i) => (
                  <li key={i}>
                    <Link to={`/${r.name}`}>{r.name}</Link>
                  </li>
                ))
              : match.path === "/gallery"
              ? room.rooms.map((r, i) => (
                  <li key={i}>
                    <Link to={`/${r.name}`}>{r.name}</Link>
                  </li>
                ))
              : null
          )}
        </ul>
      </motion.div>
    </>
  );
};
export default Gallery;
