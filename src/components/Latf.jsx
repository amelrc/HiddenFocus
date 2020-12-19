import React from "react";
// import { PageTransition } from 'reac';
import W2555 from "../images/LATF/WEB-2555-263kb.jpg";

const Latf = () => {
  const [posX, setposX] = React.useState(0);

  React.useEffect(() => {
    function handleScroll() {
      const Xpos = window.scrollY;

      console.log(Xpos);

      setposX(Xpos);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [posX]);
  return (
    <div style={{ transfrom: `translateX(${posX})` }}>
      <img src={W2555} alt="" />
      <img src={W2555} alt="" />
      <img src={W2555} alt="" />
    </div>
  );
};

export default Latf;
