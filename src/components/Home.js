import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>
        <h1 style={{ fontFamily: "Roxborough CF" }}>hidden focus</h1>
        <h4>photography by ray hanson</h4>
        <img src="https://via.placeholder.com/400x300.png/09f/fff" alt="1" />
        <h3>Each of our lives is a different way of seeing</h3>
        {/* <ul>
          <NavLink to="/themes">Themes</NavLink>
          <NavLink to="/destinations">Destinations</NavLink>
          <NavLink to="/shows">Shows</NavLink>
        </ul> */}
      </div>
    </>
  );
};
