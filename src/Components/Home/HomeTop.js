import React from "react";
import { Link, NavLink } from "react-router-dom";

function HomeTop() {
  return (
    <div>
      {" "}
      <div className="home_top">
        {/* top left */}
        <div className="home_text_name">
          <div>
            <span style={{ color: "#32a864", fontWeight: "500" }}>GIS </span>DEV
          </div>
          <div>
            <NavLink
              to="/About"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "active" : "",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
            >
              <span style={{ fontSize: "0.8em" }}>Marek Wyszyński</span>
            </NavLink>
          </div>
        </div>
        {/* top right */}
        <div className="home_text_full_stack">
          <a href="https://github.com/gitgeoman">
            FULL STACK WEB & DATA DEVELOPER &#8599;
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
