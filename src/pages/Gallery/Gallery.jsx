import React from "react";
import { Link } from "react-router-dom";
import { museum } from "../../Data";
import Scroll from "../../components/Scroll";
import { Ul, Li, Img, Hover, P } from "./styles";
import PageHeaders from "../../components/PageHeaders";

import W2555 from "../../images/LATF/WEB-2555-263kb.jpg";

const Gallery = ({ match }) => {
  const {
    params: { userName },
  } = match;

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <PageHeaders>Galleries</PageHeaders>
      {/* <Scroll> */}
      {/* <Ul className="thumbnails">
        {museum.map((room) =>
          room.floors === userName
            ? room.rooms.map((r, i) => (
                <Li key={i}>
                  <Link to={`/${r.url}`}>
                    <Hover>
                      <img src={r.introImg} alt={`intro ${r.name}`} />
                      <P>{r.name}</P>
                    </Hover>
                  </Link>
                </Li>
              ))
            : match.path === "/gallery"
            ? room.rooms.map((r, i) => (
                <Li key={i}>
                  <Link to={`/${r.url}`}>
                    <Hover>
                      <img src={r.introImg} alt={`intro ${r.name}`} />
                      <P>{r.name}</P>
                    </Hover>
                  </Link>
                </Li>
              ))
            : null
        )}
      </Ul> */}

      {/* ////////////////// */}
      <div>
        {match.path === "/gallery" ? (
          <Ul>
            <Li>
              <Link to="look-at-the-flowers">
                <Hover>
                  <img
                    style={{ width: 400, left: "16%", bottom: "14%" }}
                    src={W2555}
                    alt="haksdfj"
                  />
                  <P>LATF</P>
                </Hover>
              </Link>
            </Li>
            <Li>
              <Link to="lightscapes">
                <Hover>
                  <img src={W2555} alt="haksdfj" />
                  <P>Lightscapes</P>
                </Hover>
              </Link>
            </Li>
            <Li>
              <Link to="angkor-wat">
                <Hover>
                  <img src={W2555} alt="haksdfj" />
                  <P>Angkor Wat</P>
                </Hover>
              </Link>
            </Li>
          </Ul>
        ) : null}
      </div>

      {/* </Scroll> */}
    </div>
  );
};
export default Gallery;
