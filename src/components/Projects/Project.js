import React from "react";
import { motion } from "framer-motion";
import {
  ProjectBox,
  ProjectBody,
  Img,
  ProjectTitle,
  ProjectSubTitle,
  ProjectLink,
  ProjectCate,

} from "./Project.element";

const Project = ({ item }) => {
  return (
    <ProjectBox key={item.id}>
      <Img src={item.image} alt="" />
      <ProjectBody>
        <ProjectTitle>{item.title}</ProjectTitle>
        <ProjectCate>{item.category}</ProjectCate>
        <ProjectSubTitle>{item.subtitle}</ProjectSubTitle>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ProjectLink href={item.href} target="_blank">
            {item.link}
            {item.icon}
          </ProjectLink>
        </motion.div>
      </ProjectBody>
    </ProjectBox>
  );
};

export default Project;
