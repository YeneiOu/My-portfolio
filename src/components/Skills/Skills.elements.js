import styled from "styled-components";

export const SectionsSkills = styled.section`
  padding: 48px 0;
  background: #1b2430;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  display: inline-block;
  max-width: 70px;
  height: 100%;

  @media screen and (max-width: 881px) {
    max-width: 60px;
  }
`;

export const SkillsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));

  @media screen and (max-width: 881px) {
    grid-auto-flow: row;
  }
`;

export const SkillsImgBox = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;

`;
