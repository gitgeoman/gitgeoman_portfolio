import React from "react";

import "./Home.css";
import HomeTop from "./HomeTop";
import HomeBottom from "./HomeBottom";
import ProjectContainer from "./Projects/ProjectContainer";

function Home() {
  return (
    <div className="home_main">
      <HomeTop />
      <ProjectContainer />
      <HomeBottom />
    </div>
  );
}

export default Home;
