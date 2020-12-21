import W0241 from "./images/LATF/WEB-0241-281kb.jpg";
import W0291 from "./images/LATF/WEB-0291-251kb.jpg";
import W0563 from "./images/LATF/WEB-0563-247kb.jpg";
import W0900 from "./images/LATF/WEB-0900-247kb.jpg";
import W2499 from "./images/LATF/WEB-2499-249kb.jpg";

export const latf = [
  {
    id: 1,
    name: "Tulips...2019",
    img: [W0241],
  },
  {
    id: 1,
    name: "Tulips...2020",
    img: [W0241, W0291, W0563, W0900, W2499],
  },
];

export const museum = [
  {
    floors: "themes",
    rooms: [
      {
        name: "look at the flowers",
      },

      {
        name: "lightscapes",
      },
    ],
  },
  {
    floors: "destinations",
    rooms: [
      { name: "angkor wat", img: ["intro Angkor Wat image"] },
      { name: "canada", img: ["intro canada image"] },
      { name: "cuba", img: ["cuba intro image"] },
    ],
  },
  {
    floors: "shows",
    rooms: [
      { name: "4 amigos", img: ["img amigos intro"] },
      { name: "mexico", img: ["img mexigo intro"] },
    ],
  },
];

// export const galleries = [
//   {
//     name: "Look-at-the-Flowers",
//     img: GImg1,
//     belongsTo: "themes",
//     galleries: [
//       {
//         img: GImg1,
//         personal: [{ firstname: "Param" }, { lastname: "Harrison" }],
//       },
//       {
//         img: GImg2,
//         employer: {
//           name: "Jobbatical",
//           city: "Tallinn, Estonia",
//         },
//       },
//     ],
//   },
//   {
//     name: "Lightscapes",
//     img: GImg2,
//     belongsTo: "themes",
//     galleries: [
//       {
//         img: "img 1 param theme",
//         personal: [{ firstname: "Param" }, { lastname: "Harrison" }],
//       },
//       {
//         img: "img 2 param theme",
//         employer: {
//           name: "Jobbatical",
//           city: "Tallinn, Estonia",
//         },
//       },
//     ],
//   },
//   {
//     name: "Canada",
//     img: GImg1,
//     belongsTo: "destinations",
//     galleries: [
//       {
//         img: "img 1 miguel destination",
//         content: {
//           firstname: "Miguel",
//           lastname: "Medina",
//         },
//       },
//       {
//         img: "img 2 miguel destination",
//         content: {
//           name: "Skype",
//           city: "Arizona, US",
//         },
//       },
//       {
//         name: "other",
//         content: {
//           country: "Mexico",
//           age: 30,
//         },
//       },
//     ],
//   },
//   {
//     name: "4 amigos",
//     img: GImg2,
//     belongsTo: "shows",
//     galleries: [
//       {
//         img: "img 1 miguel destination",
//         content: {
//           firstname: "Miguel",
//           lastname: "Medina",
//         },
//       },
//       {
//         img: "img 2 miguel destination",
//         content: {
//           name: "Skype",
//           city: "Arizona, US",
//         },
//       },
//       {
//         name: "other",
//         content: {
//           country: "Mexico",
//           age: 30,
//         },
//       },
//     ],
//   },
// ];
