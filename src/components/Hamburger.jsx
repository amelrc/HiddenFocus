import { Link } from "react-router-dom";
import React from "react";

const Hamburger = ({ state }) => {
  let menu = React.useRef(null);

  React.useEffect(() => {
    if (state.clicked === false) {
      // close
      menu.style.display = "none";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open menu
      menu.style.display = "block";
    }
  });
  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div className="menu-seconddary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/whynow">Why Now</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
