import I1P1 from "../../images/AW/WEB--0665-302kb--Angkor--p.1.jpg";
import I2P1 from "../../images/AW/WEB--0440--253kb--Angkor--p.1.jpg";
import I1P2 from "../../images/AW/WEB--0355--288kb--Angkor--p.2.jpg";
import I2P2 from "../../images/AW/WEB--0371-257kb--Angkor--p.2.jpg";
import I1P3 from "../../images/AW/WEB-0653--311kb--Angkor--p.3.jpg";
import I2P3 from "../../images/AW/WEB--0592--249kb--Angkor--p.3.jpg";
import I3P3 from "../../images/AW/WEB--0615--258kb--Angkor--p.3.jpg";
import I1P4 from "../../images/AW/WEB--0511--261kb--Angkor--p.4.jpg";
import I2P4 from "../../images/AW/WEB--1509--286kb--Angkor--p.4.jpg";
import I3P4 from "../../images/AW/WEB--0536--378kb--Angkor--p.4.jpg";
import I1P5 from "../../images/AW/WEB--0403--253kb--Angkor--p.5.jpg";
import I2P5 from "../../images/AW/WEB--0577--251kb--Angkor--p.5.jpg";
import I3P5 from "../../images/AW/WEB--1555--252kb--Angkor--p.5.jpg";
import I1P6 from "../../images/AW/WEB--0529--250kb--Angkor--p.6.jpg";

const T1P1 = (
  <>
    Ankor Wat today is majestic and inspiring to be sure; but peaceful, quiet
    and conducive to meditation not so much.
    <br />
    <br />
    The approach to the temple’s west gate at sunset reveals a bustling street
    bazaar winding down after a hectic day.
  </>
);
const T2P1 = (
  <>
    On the day of our visit, a serene view of the temple towers is accessible
    only on a postcard offered by a child vendor with a disarming smile…
  </>
);

export const PageOne = {
  top: { id: 1, image: I1P1, text: T1P1 },
  btm: { id: 2, image: I2P1, text: T2P1 },
};
export const PageTwo = {
  top: { id: 1, image: I1P2, text: T1P1 },
  btm: { id: 2, image: I2P2, text: T2P1 },
};

export const objects1 = [PageOne, PageTwo];
