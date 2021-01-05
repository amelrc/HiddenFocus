import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { museum } from "../Data";
import { PageTransition } from "./Home";
import HorizontalScroll from "react-scroll-horizontal";
import { Container, Wrapper } from "./Latf";
import styled from "styled-components";

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
        style={{
          width: "100%",
          backgroundColor: "antiquewhite",
        }}
      >
        <h1
          style={{
            position: "absolute",
            zIndex: 1,
            height: "10%",
            margin: "auto",
            alignItems: "flex-end",
          }}
        >
          Gallery
        </h1>

        <ul className="unlist column">
          {museum.map((room) =>
            room.floors === userName
              ? room.rooms.map((r, i) => (
                  <li key={i}>
                    <Link to={`/${r.name}`}>
                      <img
                        width={"40%"}
                        src={r.introImg}
                        alt={`intro ${r.name}`}
                      />
                    </Link>
                  </li>
                ))
              : match.path === "/gallery"
              ? room.rooms.map((r, i) => (
                  <li key={i}>
                    <Link to={`/${r.name}`}>
                      <img
                        width={"40%"}
                        src={r.introImg}
                        alt={`intro ${r.name}`}
                      />
                    </Link>
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
