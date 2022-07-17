import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";

export const HeroSection = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  background: ${({ lightBg }) => (lightBg ? "#1C1D24" : "#22577E")};

  @media screen and (max-width: 890px) {
    display: flex;

    color: white;
    padding: 8rem 0;
    overflow: hidden;
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

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 8rem;
  padding-bottom: 3rem;
  flex-wrap: wrap;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width: 890px) {
    padding-top: 6rem;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media screen and (max-width: 890px) {
    justify-content: center;
    align-items: center;

    text-align: center;
  }
`;
export const HeroRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: flex-end;
  height: 100%;
  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export const HeroText = styled.p`
  font-size: 18px;
  margin-bottom: 22px;
  color: ${({ lightText }) => (lightText ? "#47b5ff" : "#22577E")};

  @media screen and (max-width: 890px) {
  }
`;
export const HeroSubText = styled.p`
  font-size: 18px;
  max-width: 440px;
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  color: rgb(135 142 153);

  @media screen and (max-width: 890px) {
    padding-top: 1rem;
    padding-bottom: 2rem;
    font-size: 16px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  border-radius: 10px;
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
  max-height: 450px;
  max-width: 500px;
`;

export const HeroTextMain = styled.h1`
  font-size: 48px;
  line-height: 1.4;
  letter-spacing: 2px;
  color: #fff;

  @media screen and (max-width: 890px) {
    font-size: 40px;
  }
`;

export const FaRight = styled(FaAngleRight)`
  margin-bottom: 4px;
  vertical-align: middle;
  font-size: 16px;

  @media screen and (max-width: 890px) {
    font-size: 14px;
  }
`;
