import React from "react";
import HomeTop from "../Home/HomeTop";
import HomeBottom from "../Home/HomeBottom";
import "./About.css";
import MapComponent from "./Map/MapComponent";
import Left from "./Left/Left";

function About() {
  return (
    <div className="about_main">
      <HomeTop />
      <div className="about_container">
        <div className="about_container_left"><Left/></div>

        <div className="about_container_center">
          <div className="about_header">About</div>
          <div className="about_content">
            <p style={{ textIndent: "20px", padding: "15px 0 10px 0" }}>
              Greetings ! I am a data/web/software/cloud developer/ai engineer
              with experience in full stack and a strong history in geospatial
              data processing.
            </p>
            <p style={{ textIndent: "20px" }}>
              My priority is to create a clean code. In my daily I prefer to use
              open source software; prioritizing it's utilization in every
              project whenever it's possible. I've been designing, building, and
              maintaining architecture and development operations since 2019 and
              it's my passion. My career roots from spatial data and my
              university education in geospatial information systems. It has
              naturally evolved with the rapid growth of technology to include
              machine learning, web development, backend process engineering,
              cloud infrastructure engineering, and developer operations.
            </p>
          </div>

          <div className="map">
            <MapComponent />
          </div>
          <div className="about_header">Education</div>
          <div className="about_content">
            <ul>
              <li>
                <strong>Master of Science in Engineering</strong> - Military
                University of Technology 2012 r., Warsaw, Poland,
              </li>
              <li>
                <strong>Doctor of Engineering</strong> - Military University of
                Technology 2019 r., Warsaw, Poland,
              </li>
            </ul>
          </div>
        </div>

        <div className="about_container_right">Right</div>
      </div>
      <HomeBottom />
    </div>
  );
}

export default About;
