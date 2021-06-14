import I1 from "../../images/CAUC/1.jpg";
import I2 from "../../images/CAUC/2.jpg";
import I3 from "../../images/CAUC/3.jpg";
import I4 from "../../images/CAUC/4.jpg";
import I5 from "../../images/CAUC/5.jpg";

const T1 = (
  <p>
    Four artists, three Cuban and one Canadian, have come together to share the
    work they have rendered in painting, paper and photography. The expo
    celebrates the inner life of our cities and the bountiful nature that
    nurtures and surrounds them. Together, they invite us to reflect on the
    broad range of experiences that we share in common, and that lay the
    foundation for a life lived in harmony.
  </p>
);
const T2 = (
  <>
    Lilia Ulla was a teenager at the time of the Revolution, and has experienced
    firsthand the remaking of Cuban society as it unfolded over the decades.
    Through her eyes, we could still catch a glimpse of Havana’s former
    splendor.
    <br />
    <br />
    Affectionately known as Dr. Lilly, she introduced Lawrence and me to many of
    her friends, including Amel, Boris and Abel. New friendships quickly
    developed, and Lilia happily and capably took charge of making this expo
    happen.
  </>
);

export const PageOne = {
  left: [{ id: 1, image: 9, text: T1 }],
  right: [{ id: 1, image: 6 }],
};
export const PageTwo = {
  left: [{ id: 1, image: 8, text: T2 }],
  right: [{ id: 1, image: 7 }],
};

// export const Expo = {
// 	left: [
// 		{ id: 1, image: W0939, css: { width: '60%', margin: 10 } },
// 		{ id: 2, image: W0606, css: { width: '60%', margin: 10 } },
// 	],
// 	center: [{ id: 1, image: W0106, css: { width: '100%' } }],
// 	right: [
// 		{ id: 1, image: W0767, css: { width: '60%', margin: 10 } },
// 		{ id: 2, image: W0871, css: { width: '60%', margin: 10 } },
// 	],
// };

export const FirstBlock = [
  {
    id: 1,
    pic: I1,
    imgHeight: "50%",
    mTop: "",
    mRight: "",
    mBottom: "",
    mLeft: "",
    positionY: "",
    speed: "",
    height: "100vh",
  },
  {
    id: 2,
    pic: I2,
    imgHeight: "50%",
    mTop: "",
    mRight: "4%",
    mBottom: "",
    mLeft: "4%",
    positionY: "flex-end",
    speed: "",
    height: "100vh",
  },
  {
    id: 3,
    pic: I3,
    imgHeight: "70%",
    mTop: "",
    mRight: "10%",
    mBottom: "",
    mLeft: "10%",
    positionY: "center",
    speed: "",
    height: "100vh",
  },
  {
    id: 4,
    pic: I4,
    imgHeight: "40%",
    mTop: "10%",
    mRight: "",
    mBottom: "",
    mLeft: "40%",
    positionY: "",
    speed: "",
    height: "100vh",
  },
  {
    id: 5,
    pic: I5,
    imgHeight: "40%",
    mTop: "",
    mRight: "",
    mBottom: "10%",
    mLeft: "4%",
    positionY: "flex-end",
    speed: "",
    height: "100vh",
  },
];
