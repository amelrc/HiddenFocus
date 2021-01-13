////////// LATF //////////
import W2555 from "./images/LATF/WEB-2555-263kb.jpg";
import W0241 from "./images/LATF/WEB-0241-281kb.jpg";
import W0291 from "./images/LATF/WEB-0291-251kb.jpg";
import W0563 from "./images/LATF/WEB-0563-247kb.jpg";
import W0900 from "./images/LATF/WEB-0900-247kb.jpg";
import W2499 from "./images/LATF/WEB-2499-249kb.jpg";
import W3881 from "./images/LATF/WEB-3881-251kb.jpg";
import W4223 from "./images/LATF/WEB-4223-249kb.jpg";
import W4243 from "./images/LATF/WEB-4243-243kb.jpg";
import W3887 from "./images/LATF/WEB-3887-288kb.jpg";
import W6417 from "./images/LATF/WEB-6417-256kb.jpg";
import W2348 from "./images/LATF/WEB 2348-260kb.jpg";
import W2613 from "./images/LATF/WEB-2613-257kb.jpg";
import W8135 from "./images/LATF/WEB-8135-249kb.jpg";
import W7020 from "./images/LATF/WEB-7020-254kb.jpg";
import W3589 from "./images/LATF/WEB-3589-249kb.jpg";

///////// LIGHTSPCAPES //////////

import LS1 from "./images/LS/WEB-LS1-RAY-3838-249kb.jpg";
import LS2 from "./images/LS/WEB-LS2-RAY-8032-252kb.jpg";
import LS3 from "./images/LS/WEB-LS3-RAY-6862-253kb.jpg";
import LS4 from "./images/LS/WEB-LS4-RAY-4194-251kb.jpg";
import LS5 from "./images/LS/WEB-LS5-RAY-7766-263kb.jpg";
import LS6 from "./images/LS/WEB-LS6-RAY-6989-261kb.jpg";
import LS7 from "./images/LS/WEB-LS7-RAY-7013-265kb.jpg";
import LS8 from "./images/LS/WEB-LS8-RAY-6931-422kb.JPG";
import LS9 from "./images/LS/WEB-LS9-RAY-6781-256kb.jpg";
import LS10 from "./images/LS/WEB-LS10-RAY-7776-257kb.jpg";
import LS11 from "./images/LS/WEB-LS11-2N7A8243-249kb.jpg";
import LS12 from "./images/LS/WEB-LS12-RAY-4937-257kb.jpg";
import LS13 from "./images/LS/WEB-LS13-RAY-8422-312kb.jpg";
import LS14 from "./images/LS/WEB-LS14-RAY-3652-246kb.jpg";
import LS15 from "./images/LS/WEB-LS15-RAY-3832-261kb.jpg";
import LS16 from "./images/LS/WEB-LS16-7742-259kb.jpg";

///////// ANGKOR WAT //////////

import AW1 from "./images/AW/WEB--0665-302kb--Angkor--p.1.jpg";

///////// WHY NOW //////////

import xmas from "./images/WHYNOW/WEB-Xmas-img675--314kb.jpg";
import olp from "./images/WHYNOW/WEB-631-252kb-OLP.jpg";
import passport from "./images/WHYNOW/WEB-IMG_3980--250kb.jpg";
import venice from "./images/WHYNOW/WEB-img169-257kb-Venice-by-Ray.jpg";
import singing from "./images/WHYNOW/WEB--280kb--------Butterfly-Up-High.jpg";

////////// LATF //////////

export const p1 = {
  id: 1,
  name: "Tulips...2019",
  img: [W0241, W0291, W0563, W0900, W2499],
  text: "",
};
export const p2 = {
  id: 1,
  name: "Tulips...2020",
  img: [W4223, W4243, W3881],
  text: "",
};
export const p3 = {
  id: 1,
  name: "Tulips...2020",
  img: [W3887],
  text: "",
};
export const p4 = {
  id: 1,
  name: "By Any Other Name",
  img: [W6417, W2348],
  text: "",
};
export const p5 = {
  id: 1,
  name: "The Heart of an Artist",
  img: [W2613],
  text: "",
};
export const p6 = {
  id: 1,
  name: "Rose Window...",
  img: [W8135],
  text:
    "My love for you is an evening star that glows once more toward the end of day My love for you is an ancient scar a gash in youth that bled away My love for you is the morning star the glint of light that leads the way",
};
export const p7 = {
  id: 1,
  name: "Intimations",
  img: [W7020],
  text: "",
};
export const p8 = {
  id: 1,
  name: "Heirloom Corsage",
  img: [W3589],
  text: "",
};

///////// LIGHTSPCAPES //////////

export const LS = [
  { img: LS2, text: "", css: { width: "70%" } },
  { img: LS3, text: "", css: { width: "70%" } },
  { img: LS4, text: "", css: { width: "30%" } },
  { img: LS5, text: "", css: { width: "70%" } },
  { img: LS6, text: "", css: { width: "35%" } },
  { img: LS7, text: "", css: { width: "70%" } },
  { img: LS8, text: "", css: { width: "42%" } },
  { img: LS9, text: "", css: { width: "70%" } },
  { img: LS10, text: "", css: { width: "70%" } },
  { img: LS11, text: "Unstill Life", css: { width: "70%" } },
  { img: LS12, text: "", css: { width: "70%" } },
  { img: LS13, text: "", css: { width: "70%" } },
  { img: LS14, text: "", css: { width: "40%" } },
  { img: LS15, text: "", css: { width: "70%" } },
  { img: LS16, text: "Elysium", css: { width: "70%" } },
];

///////// WHY NOW //////////

export const imagesWN = [xmas, olp, passport, venice, singing];
export const styleWN = ["50%", "50%", "50%", "50%", "35%"];
export const textWN = ["xmas", "olp", "pass", "venice", "singing"];

///////// GALLERY //////////
export const museum = [
  {
    floors: "themes",
    rooms: [
      { name: "look-at-the-flowers", introImg: W2555 },
      { name: "lightscapes", introImg: LS1 },
      { name: "explorations", introImg: W2555 },
      { name: "protraits", introImg: LS1 },
    ],
  },
  {
    floors: "destinations",
    rooms: [
      { name: "angkor-wat", introImg: AW1 },
      { name: "cuba", introImg: LS1 },
      { name: "new york", introImg: W2555 },
    ],
  },
  // {
  //   floors: "shows",
  //   rooms: [
  //     { name: "4 amigos", introImg: "" },
  //     { name: "mexico", introImg: "" },
  //   ],
  // },
];
