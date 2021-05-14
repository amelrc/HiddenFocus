import W2555 from "./images/LATF/WEB-2555-263kb.jpg";

import W0762 from "./images/MX/WEB-0762-250kb.jpg";

import W0106 from "./images/CAUC/WEB-P1020106-312kb.jpg";
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

////////// GEORGE //////////

import W0001 from "./images/GE/WEB-0001-251kb.jpg";

///////// LIGHTSPCAPES //////////

export const LS = [
  { img: LS2, text: "", css: { width: "100%" } },
  { img: LS3, text: "", css: { width: "100%" } },
  { img: LS4, text: "", css: { width: "50%" } },
  { img: LS5, text: "", css: { width: "100%" } },
  { img: LS6, text: "", css: { width: "50%" } },
  { img: LS7, text: "", css: { width: "100%" } },
  { img: LS8, text: "", css: { width: "50%" } },
  { img: LS9, text: "", css: { width: "100%" } },
  { img: LS10, text: "", css: { width: "100%" } },
  { img: LS11, text: "Unstill Life", css: { width: "100%" } },
  { img: LS12, text: "", css: { width: "100%" } },
  { img: LS13, text: "", css: { width: "100%" } },
  { img: LS14, text: "", css: { width: "50%" } },
  { img: LS15, text: "", css: { width: "100%" } },
  { img: LS16, text: "Elysium", css: { width: "100%" } },
];

///////// WHY NOW //////////

export const WNData = [
  {
    img: xmas,
    text: "xmas",
    css: {
      width: "35%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  {
    img: olp,
    text: "olp",
    css: {
      width: "35%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  {
    img: passport,
    text: "pass",
    css: {
      width: "35%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  {
    img: venice,
    text: "venice",
    css: {
      width: "35%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  {
    img: singing,
    text: "singing",
    css: {
      width: "30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
];

///////// GALLERY //////////
export const museum = [
  {
    floors: "themes",
    rooms: [
      {
        url: "look-at-the-flowers",
        introImg: W2555,
        name: "Look at the Flowers",
        css: {
          display: "flex",
          width: "20%",
          left: "16%",
          bottom: "14%",
          justifyContent: "center",
        },
      },
      {
        url: "lightscapes",
        introImg: LS1,
        name: "Lightscapes",
        css: { width: "60%", right: "12%", top: "8%" },
      },
      // { url: "explorations", introImg: W2555 },
      // { url: "protraits", introImg: LS1 },
    ],
  },
  {
    floors: "destinations",
    rooms: [
      {
        url: "angkor-wat",
        introImg: AW1,
        name: "Angkor Wat",
        css: { width: "60%", right: "20%", bottom: "10%" },
      },
      // { url: "cuba", introImg: LS1 },
      // { url: "new york", introImg: W2555 },
    ],
  },
  {
    floors: "shows",
    rooms: [
      {
        url: "george-enescu",
        introImg: W0001,
        name: "George Enescu's Secret Garden",
        css: { width: "60%" },
      },
      {
        url: "show-look-at-the-flowers",
        introImg: W0762,
        name: "Look at the Flowers",
        css: { width: "60%" },
      },
      {
        url: "cuatro-amigos",
        introImg: W0106,
        name: "Quatro Amigos:Una Cuba",
        css: { width: "60%" },
      },
    ],
  },
];
