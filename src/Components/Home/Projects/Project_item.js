import React from "react";


function ProjectItem({ name, description, stack, link, img }) {

  return (
    <>
      <div className="project"
        style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'auto 100%', backgroundRepeat: "no-repeat" }}
      >
      </div >

    </>
  );
}

export default ProjectItem;
