import React from "react";
import ProjectItem from "./Project_item";
import { ProjectList } from "./Project_data";


function Project_container() {
  return (
    <div>
      <div className="home_project_container">
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

export default Project_container;
