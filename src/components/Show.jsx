import React from "react";
import LATF1 from "../images/LATF/WEB 2348-260kb.jpg";

const Show = ({ match }) => {
  const {
    params: { tabName },
  } = match;

  //   const show = galleries.find(({ name }) => name === tabName);

  console.log(match, tabName);

  return (
    <>
      <img style={{ height: "90%" }} src={LATF1} alt="" />
    </>
  );
};

export default Show;
