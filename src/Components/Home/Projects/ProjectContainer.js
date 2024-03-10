import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectList } from "./ProjectData";


function ProjectContainer() {
  return (
    <div>
      <div className="ProjectContainer">
        {ProjectList.map(({ key, name, description, stack, link, img }) => (
          <ProjectItem
            key={key}
            name={name}
            description={description}
            stack={stack}
            link={link}
            img={img}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectContainer;
