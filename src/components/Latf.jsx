import React from "react";
import { PageTransition } from "./Home";
import W2555 from "../images/LATF";

const Latf = () => {
  const child = {
    width: `100%`,
    height: `auto`,
    backgroundColor: "red",

    margin: 40,
  };
  return (
    <PageTransition>
      <div style={child}>
        <img style={{ height: "90%" }} src={W2555} alt="" />
      </div>
    </PageTransition>
  );
};

export default Latf;
