import styled from "styled-components";
import { Section, SubTitle } from "../../globalStyle";

export const SectionPort = styled(Section)`
  background: #1c1d24;
  min-height: 1400px;
  color: #fff;

  ${Section}
`;

export const PortBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
`;

export const PortTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
  color: #fff;

  &::before {
    content: "PORTFOLIO";
    position: absolute;
    opacity: 0.4;
    top: -2rem;
    left: -3.6rem;
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

export const PortSubtitle = styled(SubTitle)`
  color: rgb(135 142 153);

  ${SubTitle}
`;
