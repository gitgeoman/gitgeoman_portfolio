import React from "react";

import "./Home.css";
import HomeTop from "./HomeTop";
import HomeBottom from "./HomeBottom";

function Home() {
  return (
    <div className="home_main">
      <HomeTop />
      <HomeBottom />
    </div>
  );
}

export default Home;
