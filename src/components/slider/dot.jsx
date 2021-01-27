import React, { useState } from "react";
import styled from "styled-components";

const info = [
  {
    date: "1111",
    title: "Dashboard",
    content:
      "The dashboard is your main homepage. It will display a feed of looks...",
  },
  {
    date: "2222",
    title: "Discover",
    content:
      "Discover allows you to find new looks, what is trending and search for looks, brands and users",
  },
  {
    date: "3333",
    title: "Upload you look, style guide and more ",
  },
];

const Test = () => {
  const [state, setState] = useState(info[0]);

  const handleNext = (i) => {
    setState(info[i]);
  };

  console.log("state outside func", state);

  return (
    <div style={{ margin: 200 }}>
      {info.map((date, i) => (
        <button onClick={() => handleNext(i)}>{date.date}</button>
      ))}

      <h2>{state.title}</h2>
      <p>{state.content}</p>
    </div>
  );
};

export default Test;
