import styled from "styled-components";
import { Section } from "../../globalStyle";

export const AboutSection = styled(Section)`
  background: #1c1d24;
  ${Section}
`;

export const AboutCon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media screen and (max-width: 890px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1020px) {
    gap: 1.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.a`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#47b5ff" : "#3A5BA0")};
  color: #fff;
  padding: ${({ big }) => (big ? "12px 6px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  width: 200px;
  text-decoration: none;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#3A5BA0" : "#47b5ff")};
  }

  @media screen and (max-width: 890px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const Img = styled.img`
  border-radius: 10px;
  display: block;
  width: 50%;
  max-width: 550px;
  height: 100%;

  @media screen and (max-width: 890px) {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }
  @media screen and (max-width: 1020px) {
    margin-bottom: 10px;
  }
`;

export const AboutRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  margin-left: 2.6rem;
  @media screen and (max-width: 890px) {
    align-items: center;
    text-align: center;
    margin-left: 0;
  }
`;

export const AboutRightBoxText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const AboutRightTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
  color: #fff;

  &::before {
    content: "ABOUT";
    position: absolute;
    opacity: 0.4;
    top: -2rem;
    display: block;
    font-size: 64px;
    color: #06283d00;
    z-index: -1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
  }

  @media screen and (max-width: 890px) {
    font-size: 30px;
    font-weight: 500;

    &::before {
      display: none;
    }
  }
`;

export const AboutRightText = styled.p`
  margin-bottom: 24px;
  font-weight: 600;
  color: #1b2430;
  color: #47b5ff;
  letter-spacing: 1px;
`;

export const AboutRightSubtitle = styled.p`
  width: 80%;
  color: rgb(135 142 153);
  letter-spacing: 1px;
  line-height: 1.3;
  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;
