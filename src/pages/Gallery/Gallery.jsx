import React from "react";
import { Link } from "react-router-dom";
import { museum } from "../../Data";
import Scroll from "../../components/Scroll";
import { Ul, Li, Img, H1 } from "./styles";

const Gallery = ({ match }) => {
  const {
    params: { userName },
  } = match;

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <H1>Gallery</H1>
      <Scroll>
        <Ul className="thumbnails">
          {museum.map((room) =>
            room.floors === userName
              ? room.rooms.map((r, i) => (
                  <Li key={i}>
                    <Link to={`/${r.name}`}>
                      <Img src={r.introImg} alt={`intro ${r.name}`} />
                    </Link>
                  </Li>
                ))
              : match.path === "/gallery"
              ? room.rooms.map((r, i) => (
                  <Li key={i}>
                    <Link to={`/${r.name}`}>
                      <Img src={r.introImg} alt={`intro ${r.name}`} />
                    </Link>
                  </Li>
                ))
              : null
          )}
        </Ul>
      </Scroll>
    </div>
  );
};
export default Gallery;
