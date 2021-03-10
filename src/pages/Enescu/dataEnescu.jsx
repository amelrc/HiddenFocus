import W0001 from "../../images/GE/WEB-0001-251kb.jpg";
import W7897 from "../../images/GE/WEB-2N7A7897-255kb.jpg";
import W8110 from "../../images/GE/WEB-2N7A8110-282kb.jpg";
import W8251 from "../../images/GE/WEB-2N7A8251-250kb.jpg";
import W0241 from "../../images/GE/WEB-0241-281kb.jpg";
import W0291 from "../../images/GE/WEB-0291-251kb.jpg";
import W0403 from "../../images/GE/WEB-0403-250ob.jpg";
import W0563 from "../../images/GE/WEB-0563-247kb.jpg";
import W0769 from "../../images/GE/WEB-0769-255.jpg";
import W0789 from "../../images/GE/WEB-0789-254kb.jpg";
import W0831 from "../../images/GE/WEB-0831-252kb.jpg";
import W0900 from "../../images/GE/WEB-0900-247kb.jpg";
import W0921 from "../../images/GE/WEB-0921-258kb.jpg";
import W0995 from "../../images/GE/WEB-0995-249kb.jpg";
import W1384 from "../../images/GE/WEB-1384-312kb.jpg";
import W1669 from "../../images/GE/WEB-1669-254kb.jpg";
import W2169 from "../../images/GE/WEB-2169-258kb.jpg";
import W2421 from "../../images/GE/WEB-2421-254kb.jpg";
import W2555 from "../../images/GE/WEB-2555-263kb.jpg";
import W2613 from "../../images/GE/WEB-2613-257kb.jpg";
import W8175 from "../../images/GE/WEB-8175-256kb.jpg";
import W8782 from "../../images/GE/WEB-8782-259kb.jpg";
import { First, Second, Third } from "./styles";

export const SubHeaderOne = (
  <>
    <First>1st Concert</First>
    <Second>Trinity-Saint Paul’s Center, Toronto</Second>
    <Third>September 7, 2019</Third>
  </>
);
export const SubHeaderTwo = (
  <>
    <First>2nd Concert</First>
    <Second>Eglinton St. George’s United Church, Toronto</Second>
    <Third>September 14, 2019</Third>
  </>
);
export const SubHeaderThree = (
  <>
    <First>3rd Concert</First>
    <Second>Glenn Gould Studio CBC, Toronto</Second>
    <Third>September 22, 2019</Third>
  </>
);

export const PageOne = {
  name: SubHeaderOne,
  top: [
    { id: 1, image: W2169, css: { width: "12%", margin: 10 } },
    { id: 2, image: W0900, css: { width: "30%", margin: 10 } },
    { id: 3, image: W0789, css: { width: "22%", margin: 10 } },
  ],
  btm: [
    { id: 4, image: W0563, css: { width: "18%", margin: 10 } },
    { id: 5, image: W0241, css: { width: "18%", margin: 10 } },
    { id: 6, image: W2555, css: { width: "18%", margin: 10 } },
  ],
};
export const PageTwo = {
  name: SubHeaderTwo,
  top: [
    { id: 1, image: W2421, css: { width: "22%", margin: 10 } },
    { id: 2, image: W1384, css: { width: "30%", margin: 10 } },
    { id: 3, image: W0403, css: { width: "22%", margin: 10 } },
  ],
  btm: [
    { id: 4, image: W0291, css: { width: "18%", margin: 10 } },
    { id: 5, image: W8251, css: { width: "18%", margin: 10 } },
    { id: 6, image: W0769, css: { width: "18%", margin: 10 } },
  ],
};
export const PageThree = {
  name: SubHeaderThree,
  top: [
    { id: 1, image: W7897, css: { width: "12%", margin: 10 } },
    { id: 2, image: W2613, css: { width: "30%", margin: 10 } },
    { id: 3, image: W8175, css: { width: "12%", margin: 10 } },
  ],
  btm: [
    { id: 4, image: W0831, css: { width: "18%", margin: 10 } },
    { id: 5, image: W1669, css: { width: "18%", margin: 10 } },
    { id: 6, image: W8110, css: { width: "18%", margin: 10 } },
  ],
};

export const EnescuObject = [PageOne, PageTwo, PageThree];
