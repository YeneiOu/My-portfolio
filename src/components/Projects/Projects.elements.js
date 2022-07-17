import styled from "styled-components";

export const ProjectNav = styled.nav`
  margin-bottom: 48px;
  max-width: 36rem;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const ProjectUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectLi = styled.li`
  cursor: pointer;
  text-transform: capitalize;
  margin: 1rem;
  color: ${({ actives }) => (actives ? "#47b5ff" : "")};
`;

export const ProjectSection = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media screen and (max-width: 890px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 556px) {
    display: grid;
    grid-template-columns: 1fr;
  }
 
`;
