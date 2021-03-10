import W0241 from "../../images/GE/WEB-0241-281kb.jpg";
// import W0291 from "../../images/GE/WEB-0291-251kb.jpg";
import W0563 from "../../images/GE/WEB-0563-247kb.jpg";
import W0789 from "../../images/GE/WEB-0789-254kb.jpg";
import W0900 from "../../images/GE/WEB-0900-247kb.jpg";
import W2169 from "../../images/GE/WEB-2169-258kb.jpg";
import W2555 from "../../images/GE/WEB-2555-263kb.jpg";

import { First, Third } from "../Enescu/styles";

export const SubHeaderOne = (
  <>
    <First>Como en Casa Fresh Mexican Kitchen</First>
    <Third>August to October, 2019</Third>
  </>
);

export const PageOne = {
  name: SubHeaderOne,
  top: [
    { id: 1, image: W2169, css: { width: "12%", margin: 10 } },
    { id: 2, image: W2555, css: { width: "30%", margin: 10 } },
    { id: 3, image: W0789, css: { width: "22%", margin: 10 } },
  ],
  btm: [
    { id: 4, image: W0241, css: { width: "18%", margin: 10 } },
    { id: 5, image: W0563, css: { width: "18%", margin: 10 } },
    { id: 6, image: W0900, css: { width: "18%", margin: 10 } },
  ],
};
