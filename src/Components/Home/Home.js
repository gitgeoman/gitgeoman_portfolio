import React from "react";

import "./Home.css";
import HomeTop from "./HomeTop";
import HomeBottom from "./HomeBottom";
import Project_container from "./Project_container";

function Home() {
  return (
    <div className="home_main">
      <HomeTop />
      <Project_container />
      <HomeBottom />
    </div>
  );
}

export default Home;
