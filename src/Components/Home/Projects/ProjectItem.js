import React from "react";
import './ProjetcItem.css'

function ProjectItem({ name, description, stack, link, img }) {

  return (
    <div>
      <div className="ProjectItem"
        style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'auto 100%', backgroundRepeat: "no-repeat" }}
      >
      </div >

    </div>
  );
}

export default ProjectItem;
