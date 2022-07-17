import styled from "styled-components";

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  text-align: left;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const ProjectBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

export const ProjectTitle = styled.h5`
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 24px;

  @media screen and (max-width: 890px) {
    font-size: 20px;
  }
`;

export const ProjectSubTitle = styled.p`
  color: rgb(135 142 153);

  margin-bottom: 1.4rem;
`;

export const ProjectCate = styled.p`
  color: #47b5ff;
  margin-bottom: 1rem;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  color: #fff;
  padding: 8px 16px;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  &:hover {
    color: rgba(17, 25, 40, 0.75);
    background-color: rgba(255, 255, 255, 0.75);
  }

  @media screen and (max-width: 890px) {
  }
`;
