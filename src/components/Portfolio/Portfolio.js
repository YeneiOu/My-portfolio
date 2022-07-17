import React from "react";
import Projects from "../Projects/Projects";
import { Container } from "../../globalStyle";
import {
  SectionPort,
  PortBox,
  PortTitle,
  PortSubtitle,
} from "./Portfolio.elements";

const Portfolio = () => {
  return (
    <SectionPort id="portfolio">
      <Container>
        <PortBox>
          <PortTitle>My latest work</PortTitle>
          <PortSubtitle>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </PortSubtitle>
        </PortBox>
        <Projects />
      </Container>
    </SectionPort>
  );
};

export default Portfolio;
