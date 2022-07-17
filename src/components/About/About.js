import React from "react";
import { Container, Line } from "../../globalStyle";
import {
  AboutSection,
  AboutCon,
  Img,
  AboutRight,
  AboutRightBoxText,
  AboutRightTitle,
  AboutRightText,
  AboutRightSubtitle,
  Button,
} from "./About.elements";

const About = ({ img, alt, title, text, color, href }) => {
  return (
    <>
      <AboutSection>
        <Container>
          <AboutCon>
            <Img src={img} alt={alt} />
            <AboutRight>
              <AboutRightBoxText>
                <AboutRightTitle>{title}</AboutRightTitle>
                <AboutRightText>{text}</AboutRightText>
                <Line color={color} />
                <AboutRightSubtitle>
                  A person who likes to do something and has to finish it. Have
                  a positive mindset and like to improve yourself all the time.
                  Never stop developing yourself.
                  <br />
                  Able to cope with work pressure and can easily get along with
                  others.If it's stressful at work, I'll play games or go to the
                  gym to forget about it.
                </AboutRightSubtitle>
              </AboutRightBoxText>
              <Button big href={href} >
                Contact Me
              </Button>
            </AboutRight>
          </AboutCon>
        </Container>
      </AboutSection>
    </>
  );
};

export default About;
