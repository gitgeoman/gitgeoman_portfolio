import React from "react";
import { NavLink } from "react-router-dom";

import GitHubIcon from '@mui/icons-material/GitHub';

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
            <div className='green_hover'>
              <span style={{ fontSize: "0.8em" }}>Marek Wyszyński</span>
            </div>
          </div>
        </NavLink>
        {/* top right */}
        <div className="home_text_full_stack green_hover">
          <a href="https://github.com/gitgeoman">
            FULL STACK WEB & DATA DEVELOPER{" "}
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div >
  );
}

export default HomeTop;
