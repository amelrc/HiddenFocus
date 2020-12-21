import React from "react";
import Image from "./Image";

const One = (props) => {
  const { name, image, width, id } = props;
  return (
    <div className="child">
      <h1>{name}</h1>
      <Image src={image} width={width} alt={id} />
    </div>
  );
};

export default One;
