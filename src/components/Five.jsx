import React from "react";
import Image from "./Image";

const Five = (props) => {
  const { name, image, width, id } = props;
  return (
    <div className="child">
      <h1>{name}</h1>
      {props.img.map((i) => (
        <Image image={i.image} width={i.width} alt={i.id} />
      ))}
    </div>
  );
};

export default Five;
