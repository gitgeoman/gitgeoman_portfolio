import React from "react";
import { NavLink } from "react-router-dom";

function HomeTop() {
  return (
    <div>
      {" "}
      <div className="home_top">
        {/* top left */}{" "}
        <NavLink to="/About">
          <div className="home_text_name">
            <div>
              <span style={{ color: "#32a864", fontWeight: "500" }}>GIS </span>
              DEV
            </div>
            <div>
              <span style={{ fontSize: "0.8em" }}>Marek Wyszyński</span>
            </div>
          </div>
        </NavLink>
        {/* top right */}
        <div className="home_text_full_stack">
          <a href="https://github.com/gitgeoman">
            FULL STACK WEB & DATA DEVELOPER{" "}
            <span style={{ color: "#32a864" }}>&#8599;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
