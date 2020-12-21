import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import styled from "styled-components";
// import useImg from "../hook/Img";
import W2555 from "../images/LATF/WEB-2555-263kb.jpg";
//
import W0241 from "../images/LATF/WEB-0241-281kb.jpg";
import W0291 from "../images/LATF/WEB-0291-251kb.jpg";
import W0563 from "../images/LATF/WEB-0563-247kb.jpg";
import W0900 from "../images/LATF/WEB-0900-247kb.jpg";
import W2499 from "../images/LATF/WEB-2499-249kb.jpg";
//
import W3881 from "../images/LATF/WEB-3881-251kb.jpg";
import W4223 from "../images/LATF/WEB-4223-249kb.jpg";
import W4243 from "../images/LATF/WEB-4243-243kb.jpg";
//
import W3887 from "../images/LATF/WEB-3887-288kb.jpg";
//
import W6417 from "../images/LATF/WEB-6417-256kb.jpg";
import W2348 from "../images/LATF/WEB 2348-260kb.jpg";
//
import W2613 from "../images/LATF/WEB-2613-257kb.jpg";
//
import W8135 from "../images/LATF/WEB-8135-249kb.jpg";
//
import W7020 from "../images/LATF/WEB-7020-254kb.jpg";
//
import W3589 from "../images/LATF/WEB-3589-249kb.jpg";
//
import W9486 from "../images/LATF/WEB-9486-313kb.jpg";
import W9590 from "../images/LATF/WEB-9590-250kb.jpg";
import W9598 from "../images/LATF/WEB-9598-250kb.jpg";
//
import N7A7897 from "../images/LATF/WEB 2N7A7897-255kb.jpg";
//
import W5841 from "../images/LATF/WEB-5841-275kb.jpg";
//
// 5075, 4590, 1763, 4799;
import W5075 from "../images/LATF/WEB-5075-264kb.jpg";
import W4590 from "../images/LATF/WEB-4590-255kb.jpg";
import W1763 from "../images/LATF/WEB-1763-296kb.jpg";
import W4799 from "../images/LATF/WEB-4799-252kb.jpg";
//
import W4767 from "../images/LATF/WEB-4767-264kb.jpg";
//
import W0347 from "../images/LATF/WEB-0347-241kb.jpg";
import W5679 from "../images/LATF/WEB-5679-295kb.jpg";
import W2421 from "../images/LATF/WEB-2421-254kb.jpg";
//
import W0362 from "../images/LATF/WEB-0362-260kb.jpg";
//
import W3838 from "../images/LATF/WEB-3838-249kb.jpg";
//
import W6408 from "../images/LATF/WEB-6408-257kb.jpg";
//
import W0430 from "../images/LATF/WEB-0430-252kb.jpg";
import W0907 from "../images/LATF/Web-0907-251kb.jpg";
import W6897 from "../images/LATF/WEB-6897-248kb.jpg";
//
import W2N7A8251 from "../images/LATF/WEB-2N7A8251-250kb.jpg";
//
import W9225 from "../images/LATF/WEB-9225-250kb.jpg";
import W9387 from "../images/LATF/WEB-9387-257kb.jpg";
//
import W4447 from "../images/LATF/WEB-4447-253kb.jpg";
//
import W9170 from "../images/LATF/WEB-9170-259kb.jpg";
import W9171 from "../images/LATF/WEB-9171-251kb.jpg";
import W9059 from "../images/LATF/WEB-9059-258kb.jpg";
//
import W2N7A8243 from "../images/LATF/WEB-2N7A8243-249kb.jpg";
//
import W1571 from "../images/LATF/WEB-1571-250kb.jpg";
import W0713 from "../images/LATF/WEB 0713-251kb.jpg";
import W2N7A8110 from "../images/LATF/WEB-2N7A8110-282kb.jpg";
//
import W1059 from "../images/LATF/WEB-1059-249kb.jpg";
//
import W1669 from "../images/LATF/WEB-1669-254kb.jpg";
import W1111 from "../images/LATF/WEB-1111-251kb.jpg";
//
import W0831 from "../images/LATF/WEB-0831-252kb.jpg";

// const Image = styled.div`
//   width: ${(props) => props.width};
//   background-image: url(${(props) => props.backgroundImage});
// `;

const Latf = () => {
  const ref = React.useRef();
  //   const height = ref.current.clientHeight;

  return (
    <>
      <h1
        className="flex"
        style={{
          position: "absolute",
          zIndex: 1,
          height: "10%",
          margin: "auto",
          alignItems: "flex-end",
        }}
      >
        Look at the Flowers
      </h1>
      <HorizontalScroll>
        <div className="child flex centerH centerV bgImg">
          <div
            className="flex centerV centerH"
            style={{
              height: "100%",
              backgroundImage: `url(${W2555})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <p>
              Focus. When we look at something, really look, what captures our
              attention stands out in sharp relief. Everything else blurs away.
              These flower “portraits” are taken with a 100mm Macro lens, and
              make deliberate use of the focal plane as a major part of the
              composition, along with the placement of objects and blocks of
              color. The goal is to use all the elements of composition to
              invite the viewer to see the flowers in a particular way.
              Together, these images make up an imaginary exhibition called Look
              at the Flowers… It is a still growing body of work that began in
              the Spring and Summer of 2019. When Spring came around this year,
              I wondered what would happen when I looked through the lens. Would
              anything “new” show up? Please take a look with me and see!
            </p>
            {/* <img style={{ height: "40%" }} src={W2555} alt="" /> */}
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Tulips...2019</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "100%",
            }}
          >
            <img src={W2499} width={"30%"} alt={W2499} />
            <img src={W0563} width={"30%"} alt={W0563} />
            <img src={W0900} width={"30%"} alt={W0900} />
            <img src={W0291} width={"30%"} alt={W0291} />
            <img src={W0241} width={"30%"} alt={W0241} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Tulips...2020</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W4223} width={"30%"} alt={W4223} />
            <img src={W4243} width={"30%"} alt={W4243} />
            <img src={W3881} width={"30%"} alt={W3881} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Tulips...2020</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W3887} width={"30%"} alt={W3887} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>By Any Other Name</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W6417} width={"50%"} alt={W6417} />
            <img src={W2348} width={"50%"} alt={W2348} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>The Heart of an Artist</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W2613} width={"80%"} alt={W2613} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Rose Window</h2>
          <p>
            My love for you is an evening star that glows once more toward the
            end of day My love for you is an ancient scar a gash in youth that
            bled away My love for you is the morning star the glint of light
            that leads the way
          </p>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W8135} width={"80%"} alt={W8135} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Intimations</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W7020} width={"80%"} alt={W7020} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Heirloom Corsage</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W3589} width={"80%"} alt={W3589} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>When Orchids Fly</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W9598} width={"30%"} alt={W9598} />
            <img src={W9486} width={"30%"} alt={W9486} />
            <img src={W9590} width={"30%"} alt={W9590} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Annunciation</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={N7A7897} width={"80%"} alt={N7A7897} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Windhover</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W5841} width={"80%"} alt={W5841} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>The Alium</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W5075} width={"40%"} alt={W5075} />
            <img src={W4590} width={"40%"} alt={W4590} />
            <img src={W1763} width={"40%"} alt={W1763} />
            <img src={W4799} width={"40%"} alt={W4799} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>The Alium</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W4767} width={"80%"} alt={W4767} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Peonies</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W0347} width={"40%"} alt={W0347} />
            <img src={W5679} width={"40%"} alt={W5679} />
            <img src={W2421} width={"40%"} alt={W2421} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Peonies</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W0362} width={"90%"} alt={W0362} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Homage to Monet</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W3838} width={"40%"} alt={W3838} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>In the Still of the Night</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <p>
              Like the moon growing dim on the rim of the hill in the chill,
              still of the night... Cole Porter
            </p>
            <img ref={ref} src={W6408} width={"90%"} alt={W6408} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Unexpected Guests</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <p>
              Like the moon growing dim on the rim of the hill in the chill,
              still of the night... Cole Porter
            </p>
            <img src={W0430} width={"40%"} alt={W0430} />
            <img src={W0907} width={"40%"} alt={W0907} />
            <img src={W6897} width={"40%"} alt={W6897} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Alien</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W2N7A8251} width={"40%"} alt={W2N7A8251} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Animations</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W9225} width={"40%"} alt={W9225} />
            <img src={W9387} width={"40%"} alt={W9387} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Homage to Georgia O'Keefe</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W4447} width={"40%"} alt={W4447} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Chrysanthemums</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W9170} width={"40%"} alt={W9170} />
            <img src={W9171} width={"40%"} alt={W9171} />
            <img src={W9059} width={"40%"} alt={W9059} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Unstill Life</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W2N7A8243} width={"40%"} alt={W2N7A8243} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Hydrangeas</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W1571} width={"40%"} alt={W1571} />
            <img src={W0713} width={"40%"} alt={W0713} />
            <img src={W2N7A8110} width={"40%"} alt={W2N7A8110} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Homage to Mandelbrot</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <img src={W1059} width={"40%"} alt={W1059} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Lilies of the Field</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <p>
              Consider the lilies of the field, how they grow: they neither toil
              nor spin, yet I tell you, even Solomon in all his glory was not
              arranged like one of these. Matthew 6:28-29
            </p>
            <img src={W1669} width={"40%"} alt={W1669} />
            <img src={W1111} width={"40%"} alt={W1111} />
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="child">
          <h2>Homage to Robert Mapplethorpe</h2>
          <div
            className="flex centerV centerH"
            style={{
              flexWrap: "wrap",
              height: "90%",
            }}
          >
            <p>
              Consider the lilies of the field, how they grow: they neither toil
              nor spin, yet I tell you, even Solomon in all his glory was not
              arranged like one of these. Matthew 6:28-29
            </p>
            <img src={W0831} width={"40%"} alt={W0831} />
          </div>
        </div>
      </HorizontalScroll>
    </>
  );
};

export default Latf;
