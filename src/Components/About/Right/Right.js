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
              <a className='right_links' href='https://ieeexplore.ieee.org/document/10171201'>Methodology for designating mobile points of equipment distribution in military operations</a>
            </li>
            <a className='right_links' href='https://www.mdpi.com/2076-3417/12/8/4090'><li >The Assessment of COVID-19 Vulnerability Risk for Crisis Management</li></a>
            <a className='right_links' href='https://www.itp.edu.pl/old/wydawnictwo/journal/35_2017_X_XII/Wilkowski%20i%20in.pdf' ><li>The use of unmanned aerial vehicles (drones) to determine the shoreline of natural watercourses</li></a>
            <a className='right_links' href='https://www.researchgate.net/publication/312397146_AUTOMATION_OF_THE_TERRAIN_ASSESSMENT_CLASSIFICATION_DUE_TO_PASSABILITY_FOR_THE_NEEDS_OF_CRISIS_MANAGMENT'><li>Automation of the terrain assessment classification due to passability for the needs of crisis managment</li></a>
          </ul>
        </div>
      </div >
    </>
  );
}

export default Right;
