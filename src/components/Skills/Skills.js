import React from "react";
import { Container } from "../../globalStyle";
import { SkillsData } from "../Data/SkillsData";
import { SectionsSkills, Img, SkillsBox,SkillsImgBox } from "./Skills.elements";

const Skills = () => {
  return (
    <SectionsSkills>
      <Container>
        <SkillsBox>
          {SkillsData.map((skill, index) => {
            return (
              <SkillsImgBox key={index}>
                <Img src={skill.image} alt="" />
              </SkillsImgBox>
            );
          })}
        </SkillsBox>
      </Container>
    </SectionsSkills>
  );
};

export default Skills;
