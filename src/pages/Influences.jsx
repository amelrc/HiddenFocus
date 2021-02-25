import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import ImageSlider from "../components/imageSlider";
import Image from "../components/Image";

import Enrico from "../images/INFL/WEB-Infl-1-Enrico-7435-255kb.jpg";
import Circles from "../images/INFL/WEB-Infl-1.1-Circles-67.1KB.jpg";
import Robert from "../images/INFL/WEB-Infl-2-Robert-Mann-33.3KB.jpg";
import Lawrence from "../images/INFL/WEB-Infl-3-Lawrence-2037-263kb.jpg";
import Laliberte from "../images/INFL/WEB-Infl-4-2037-Laliberte-258kb.jpg";
import Dorothy from "../images/INFL/WEB-Infl-5-8063-Dorothy-371kb.jpg";
import Carvalho from "../images/INFL/WEB-Infl-6-John-Carvalho-284kb.jpg";
import Amel from "../images/INFL/WEB-Infl-7-9517-Amel-274kb.jpg";
import Michelle from "../images/INFL/WEB-Infl-8-7570-Michelle-275kb.jpg";
import Cathy from "../images/INFL/WEB-Infl-9.-676-250kb.jpg";

const AHref = styled.a`
  text-decoration: none;
  color: #ced4a7;
  font-weight: bold;
`;

const EnricoText = (
  <div>
    <p>
      Artist, scholar, musician, composer, dramatist and teacher. Friend and
      mentor since college days. His insight and compassion are a formative and
      abiding light. Enrico is the first person ever to be awarded a Doctorate
      in Comparative Literature from Brown University. His doctoral thesis
      Circles Without Center was published by Harvard University press in 1972.
      I wonder at the synchronicity of our titles and cover art...
    </p>
    <p>
      Explore{" "}
      <AHref href="https://www.enricogarzilli.com/">Enrico’s world</AHref>, and
      hear the music.
    </p>
  </div>
);

const RobertText = (
  <div>
    <p>
      Bob introduced me to the world of collectible photography shortly after I
      moved to New York in 1980. He founded{" "}
      <AHref href="http://www.robertmann.com/">Robert Mann Gallery</AHref> in
      1985. For the next decade plus, he helped sharpen my photographic eye,
      rifling together through the semi annual Christie’s and Sotheby’s auction
      catalogues, and introducing me to the work of (among others) Louis Faurer,
      Aaron Siskind, Lewis Hine, Richard Misrach, and Margaret Watkins. Over the
      years, Bob has sunk deep roots in the classical photography market, while
      introducing and publishing the work of significant new artists.
    </p>
  </div>
);

const LawrenceText = (
  <div>
    <p>
      Singer/Actor/Dancer. We met in Toronto in 1991, made a home together in
      1996, and have been married since 2004. More than “just” a performance
      triple threat, Laurance has always radiated through the grace of his
      physical bearing and the rich timbre of his voice a sense of deep
      connection with our primal source of energy.
    </p>
    <p>
      His persistent devotion to performance excellence even in the face of
      chronic illness has inspired me, and the chance to{" "}
      <AHref href="https://www.youtube.com/watch?v=b7wFW4xxqVk">
        appear on stage with him{" "}
      </AHref>{" "}
      and sing a song has been a source of great joy.
    </p>
    <p>
      Watch his spellbinding rendition of{" "}
      <AHref href="https://www.youtube.com/watch?v=ROppespP1Jk">
        “Music of the Night”{" "}
      </AHref>
      , hear him voice our deepest longing in{" "}
      <AHref href="https://www.youtube.com/watch?v=T4ADdD3MIL0">
        “Take Me Home”
      </AHref>
      , and visit his{" "}
      <AHref href="https://www.youtube.com/channel/UCvOD5HwPtCWt7tu_42YUYIQ">
        YouTube channel
      </AHref>
      .
    </p>
  </div>
);

const LaliberteText = (
  <div>
    <p>
      Montreal was a prominent stop on my semi annual research marketing tours
      for RBC. Over the years, I had noted and enjoyed Robert’s cover photos for
      Fugues magazine, but we had never met. The opportunity came in 2003 when
      Lawrence needed something special for his business card. When we met for
      the shoot, I was impressed by Robert’s professionalism and no nonsense
      approach to the work. Equally, though, I was taken with his warmth and
      power to connect, qualities that since the early 1980’s had supported his
      role as a major player in the emergence of gay culture in Montreal.
    </p>
    <p>
      On subsequent visits I would look forward to catching up with him over
      dinner, excited for the chance to show him a few shots from my most recent
      travels. His observations were always supportive, measured and on point.
    </p>
    <p>
      Sitting in Robert’s living room, I could feel from his images around me
      the ironic stare of Diane Arbus, the streetwise capture of Robert Frank,
      the canine playfulness of William Wegman, the erotic thrust and elegance
      of Robert Mapplethorpe. But no lame stylistic imitations here. Just pure
      Robert, and his unique vision of our shared humanity. Salut, Robert!
    </p>
  </div>
);

const DorothyText = (
  <div>
    <p>
      My Ariadne. In the summer of 20XX, Dorothy conducted a vocal masterclass
      in Toronto, and I decided to attend as an auditor. She had apprenticed for
      many years with bel canto master Cornelius L. Reid, and internalized the
      fundamental principles he articulated in The Free Voice: A Guide to
      Natural Singing. What I heard and saw that day at masterclass convinced me
      that if ever I was to deliver a song the way I felt it should be sung,
      Dorothy was the one to enable it. And so it has been!
    </p>
  </div>
);

const JohnText = (
  <div>
    <p>
      For several years John had been making 8.5 x 11 prints from my photo
      exploits on business trips and holidays. One day in late 2009, he took me
      by surprise saying 'You know, you really should step up and buy a good
      camera... the kind of shots you’re getting would look great in larger
      formats, but what you’re shooting now just can’t handle that.' So, with
      his help, I got my first Canon 5D at New Years 2010, just before heading
      off on a trip to Cuba.{" "}
      <Link
        style={{ textDecoration: "none", color: "#ced4a7", fontWeight: "bold" }}
        to="/cuatro-amigos"
      >
        He was so right!
      </Link>
    </p>
    <p>
      John is an accomplished portrait artist and dauntless teacher. With
      infinite patience he has guided me into the age of digital photography,
      and freely shared his encyclopedic knowledge of Photoshop and Picassa.
      Thanks to him, my pictures are now ready to be shown. Meet{" "}
      <AHref href="https://exposures.ca/">John at Exposures Photography</AHref>.
    </p>
  </div>
);

const AmelText = (
  <div>
    <p>
      World class painter, sculptor, graphic artist and designer now living in
      the Netherlands. We met in his native Havana in early 2010, where his
      intensity, mastery and devotion to his art rekindled in me creative fires
      that had lain dormant for many years. A few months later we showed our
      work together in a four man exposition called{" "}
      <Link
        style={{ textDecoration: "none", color: "#ced4a7", fontWeight: "bold" }}
        to="/cuatro-amigos"
      >
        'Quattro Amigos, Una Cuba.'
      </Link>
    </p>
    <p>
      Since moving to the Netherlands, Amel has begun exploring the artistic
      potential of the digital world. It is{" "}
      <AHref href="https://amelrc.github.io/artwork/#/">Amel</AHref> who has
      designed and built this website for Hidden Focus.
    </p>
  </div>
);

const MichelleText = (
  <div>
    <p>
      Michelle, a mother of twin teenage daughters, wedding planner, home
      renovator and skilled graphic artist, spent a disproportionate part of her
      youth touring museums and galleries across North America and abroad.
    </p>
    <p>
      We became friends in June 2018 when Lawrence and I prepared to move out of
      Toronto’s downtown core to the wilds of Scarborough. For a gruelling week,
      Michelle and I worked day and night sprucing up the new place just prior
      to the move. We talked a lot about art, and I promised to show her some of
      my pictures after settling in.
    </p>
    <p>
      So, one day last Spring, after touring my photo world of Cuba, Cape Cod,
      New York and Paris, and seeing the earliest of the “Look at the Flowers”
      images, she remarked: “This is most unusual. Your eye for composition and
      use of so many different styles is something I have never seen. I’m blown
      away... But you’ve got to print these in larger formats, much larger. You
      think you know what’s in the frames because you took them. But I’m telling
      you, even you won’t really be able to appreciate what you’ve got until you
      see them bigger.”
    </p>
    <p>
      As she put on her coat that day to leave, she turned to me with a kind but
      troubled look and said: “As much as I love your pictures, I must tell you
      something that will come as a surprise. I’m really angry right now. Angry
      that your work has been hidden away for so long in little boxes. They must
      be shown! You must find a way to do that. I will help any way I can.”
    </p>
    <p>
      Deepest thanks, Michelle, for pushing my little boxes out of the nest!
    </p>
  </div>
);

const CathyText = (
  <div>
    <p>
      For Cathy, whose selfless love in the early Wall Street days grounded
      everything that’s followed...
    </p>
  </div>
);

const info = [
  {
    id: 0,
    date: "1000",
    image: [
      { img: Enrico, css: { width: "100%" } },
      { img: Circles, css: { width: "70%" } },
    ],
    name: "Enrico Garzilli",
    content: EnricoText,
    css: { width: "70%" },
  },
  {
    id: 1,
    date: "2000",
    image: [{ img: Robert, css: { width: "70%" } }],
    name: "Robert Mann",
    content: RobertText,
    css: { width: "80%" },
  },
  {
    id: 2,
    date: "3000",
    image: [{ img: Lawrence, css: { width: "60%" } }],
    name: "Lawrence Tan",
    content: LawrenceText,
    css: { width: "80%" },
  },
  {
    id: 3,
    date: "4000",
    image: [{ img: Laliberte, css: { width: "70%" } }],
    name: "Robert Laliberte",
    content: LaliberteText,
    css: { width: "80%" },
  },
  {
    id: 4,
    date: "5000",
    image: [{ img: Dorothy, css: { width: "70%" } }],
    name: "Dorothy Stone",
    content: DorothyText,
    css: { width: "70%" },
  },
  {
    id: 5,
    date: "6000",
    image: [{ img: Carvalho, css: { width: "70%" } }],
    name: "John Caravalho",
    content: JohnText,
    css: { width: "70%" },
  },
  {
    id: 6,
    date: "7000",
    image: [{ img: Amel, css: { width: "60%" } }],
    name: "Amel Caballero",
    content: AmelText,
    css: { width: "70%" },
  },
  {
    id: 7,
    date: "8000",
    image: [{ img: Michelle, css: { width: "70%" } }],
    name: "Michelle Patience",
    content: MichelleText,
    css: { width: "70%" },
  },
  {
    id: 8,
    date: "9000",
    image: [{ img: Cathy, css: { width: "70%" } }],
    name: "Cathy",
    content: CathyText,
    css: { width: "70%" },
  },
];

const Dot = styled.div`
  background-color: ${({ selected, past }) =>
    selected ? `#ced4a7` : past ? `#b0c13f` : `#180920`};
  width: ${({ selected }) => (selected ? `24px` : `10px`)};
  height: ${({ selected }) => (selected ? `24px` : `10px`)};
  border-radius: 50%;
  border: ${({ selected, past }) =>
    selected || past ? `solid 4px #b0c13f` : `solid 4px gray`};
  position: absolute;
  top: ${({ selected }) => (selected ? `28px` : `36px`)};
`;

const Year = styled.span`
  font: 40px/16px Mrs Saint Delafield;
  color: #b3c53f;
  position: absolute;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
`;

const Test = () => {
  const [state, setState] = useState(info[0]);
  const [length, setLength] = useState(0);

  const handleNext = (i) => {
    setState(info[i]);
    setLength(i);
  };

  let width = 100 / (info.length - 1);
  const singleImage = state.image.map((img, i) => (
    <img src={img.img} style={img.css} alt={i} />
  ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#180920",
      }}
    >
      <div
        style={{
          width: "80%",
          alignSelf: "center",
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="flex"
            style={{
              padding: 60,
              backgroundColor: "#1d0d25",
              margin: 40,
              height: "60vh",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              }}
            >
              {state.image.length > 1 ? (
                <ImageSlider
                  styles={{
                    display: "flex",
                    width: "30%",
                    justifyContent: "space-between",
                  }}
                  slides={state.image}
                />
              ) : (
                singleImage
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                width: "50%",
              }}
            >
              <h2
                style={{
                  font: "52px/52px Mrs Saint Delafield",
                  color: "#b0c13f",
                  margin: 0,
                }}
              >
                {state.name}
              </h2>
              <span
                style={{
                  font: "300 16px/22px Lato",
                  color: "whitesmoke",
                  overflow: "scroll",
                  height: "50%",
                }}
              >
                {state.content}
              </span>
            </div>
          </div>
          {/* ///////// */}
          <div
            style={{
              width: "80%",
              position: "relative",
              display: "flex",

              margin: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "absolute",
                width: "100%",
              }}
            >
              <div
                style={{
                  height: 4,
                  backgroundColor: "gray",
                  width: "100%",
                  position: "absolute",
                }}
              ></div>
              <div
                style={{
                  height: 4,
                  backgroundColor: "#b0c13f",
                  width: `calc(${width} * ${length}%)`,
                  position: "absolute",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: -24,
                position: "absolute",
              }}
            ></div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: -43,
                position: "absolute",
              }}
            >
              {info.map((date, i) => (
                <div
                  key={i}
                  className="flex column centerV"
                  style={{ position: "relative" }}
                >
                  <Year selected={i === state.id}>{date.date}</Year>
                  <Dot
                    selected={i === state.id}
                    past={i < state.id}
                    onClick={() => handleNext(i)}
                  ></Dot>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
