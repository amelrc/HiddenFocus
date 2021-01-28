import React, { useState } from "react";
import styled from "styled-components";

const info = [
  {
    date: "1000",
    title: "1 Dashboard",
    content:
      "The dashboard is your main homepage. It will display a feed of looks...",
  },
  {
    date: "2000",
    title: "2 Discover",
    content:
      "Discover allows you to find new looks, what is trending and search for looks, brands and users",
  },
  {
    date: "3000",
    title: "3 Upload you look, style guide and more ",
  },
  {
    date: "4000",
    title: "4 alkjhdflakjhd alkdjhfa you look, style guide and more ",
  },
  {
    date: "5000",
    title: "4 alkjhdflakjhd alkdjhfa you look, style guide and more ",
  },
  {
    date: "6000",
    title: "4 alkjhdflakjhd alkdjhfa you look, style guide and more ",
  },
  {
    date: "7000",
    title: "4 alkjhdflakjhd alkdjhfa you look, style guide and more ",
  },
  {
    date: "8000",
    title: "4 alkjhdflakjhd alkdjhfa you look, style guide and more ",
  },
  {
    date: "9000",
    title: "4 alkjhdflakjhd alkdjhfa you look, style guide and more ",
  },
];

const Dot = styled.div`
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: solid gray 4px;
`;

const Test = () => {
  const [state, setState] = useState(info[0]);
  const [length, setLength] = useState(0);

  const handleNext = (i) => {
    console.log(i);
    setState(info[i]);
    setLength(i);
  };
  console.log(info.length);
  console.log("length", length);

  let width = 100 / (info.length - 1);

  console.log(width);

  return (
    <div style={{ margin: 200, position: "relative" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
        }}
      >
        <div
          style={{
            height: 4,
            backgroundColor: "aqua",
            width: "100%",
            position: "absolute",
          }}
        ></div>
        <div
          style={{
            height: 4,
            backgroundColor: "red",
            width: `calc(${width} * ${length}%)`,
            position: "absolute",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: -8,
          position: "absolute",
        }}
      >
        {info.map((date, i) => (
          <div key={i} className="flex column centerV">
            {/* <span>{date.date}</span> */}
            <Dot onClick={() => handleNext(i)}></Dot>
          </div>
        ))}
      </div>
      <div>
        <h2>{state.title}</h2>
        <p>{state.content}</p>
      </div>
    </div>
  );
};

export default Test;
