import React from "react";
import Project_item from "./Project_item";
import { project_list } from "./Project_data";
import world from './img/pexels-pixabay-41949.jpg'
function Project_container() {
  return (
    <div>
      <div className="home_project_container">
        {project_list.map(({ key, name, description, stack, link }) => (
          <Project_item
            key={key}
            name={name}
            description={description}
            stack={stack}
            link={link}
            img={world}
          />
        ))}
      </div>
    </div>
  );
}

export default Project_container;
