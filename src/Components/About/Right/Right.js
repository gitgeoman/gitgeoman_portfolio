import React from "react";
import "./Right.css";

function Right() {
  return (
    <>
      <div className="about_header"></div>
      <div className="right_main">
        <div className="right_element">
          <div className="right_header">Cloud architecture & devops </div>
          <br />
          <p className="right_p_tag"></p>
          <div className="right_content">
            <ul>
              <li>
                <strong>amazon web services</strong>
              </li>
              <li>
                <strong>terraform</strong>
              </li>
              <li>docker</li>
              <li>nginx</li>
              <li>apache</li>
            </ul>
          </div>
        </div>
        <div className="right_element">
          <div className="right_header">Software languages, packages & engines</div>
          <br />
          <div className="right_content">
            <ul>
              <li>
                <strong>python</strong>
              </li>
              <li>django</li>
              <li>tensorflow, scikit-learn</li>
              <li>sql</li>
              <li>git</li>
              <li>markdown</li>
            </ul>
          </div>
        </div>
        <div className="right_element">

        </div>
        <div className="right_element">
          <div className="right_header">Frontend</div>
          <br />
          <p className="right_p_tag">visualisation & web mapping </p>
          <div className="right_content">
            <ul>
              <li>
                <strong>ReactJS</strong>
              </li>
              <li>MUI</li>
              <li>OpenLayers</li>
              <li>Leaflet</li>
            </ul>
          </div>
        </div>
        <div className="right_header">Pubications</div>
        <br />
        <div className="right_content">
          <ul>
            <li>
              Methodology for designating mobile points of equipment distribution in military operations
            </li>
            <li>The Assessment of COVID-19 Vulnerability Risk for Crisis Management</li>
            <li>The use of unmanned aerial vehicles (drones) to determine the shoreline of natural watercourses</li>
            <li>Automation of the terrain assessment classification due to passability for the needs of crisis managment</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Right;
