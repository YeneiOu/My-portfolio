import React, { useState, useEffect } from "react";

import { projectsNav } from "../Data/ProjectNavData";

import { projectsData } from "../Data/ProjectData";

import Project from "./Project";

import {
  ProjectNav,
  ProjectUl,
  ProjectLi,
  ProjectSection,
} from "./Projects.elements";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <ProjectNav>
        <ProjectUl>
          {projectsNav.map((item, index) => {
            return (
              <ProjectLi
                actives={active === index}
                onClick={(e) => {
                  handleClick(e, index);
                }}
                key={index}
              >
                {item.name}
              </ProjectLi>
            );
          })}
        </ProjectUl>
      </ProjectNav>
      <ProjectSection>
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </ProjectSection>
    </>
  );
};

export default Projects;
