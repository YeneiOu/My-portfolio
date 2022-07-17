import React from "react";
import { Container } from "../../globalStyle";
import { motion } from "framer-motion";
import {
  HeroSection,
  HeroLeft,
  HeroRight,
  HeroContainer,
  HeroText,
  Img,
  HeroTextMain,
  HeroSubText,
  FaRight,
  Button,
} from "./Hero.elements";

const Hero = ({
  text,
  img,
  alt,
  textMain,
  textSub,
  primary,
  big,
  lightBg,
  lightText,
  imgStart,
  download,
  href,
}) => {
  return (
    <>
      <HeroSection lightBg={lightBg}>
        <Container>
          <HeroContainer imgStart={imgStart}>
            <HeroLeft>
              <HeroText lightText={lightText}>{text}</HeroText>
              <HeroTextMain>{textMain}</HeroTextMain>
              <HeroSubText>{textSub}</HeroSubText>
              <Button
                big={big}
                fontBig
                primary={primary}
                href={href}
                download={download}
              >
                Download CV
                <motion.span whileHover={{ rotate: 90 }}>
                  <FaRight />
                </motion.span>
              </Button>
            </HeroLeft>
            <HeroRight>
              <Img src={img} alt={alt} />
            </HeroRight>
          </HeroContainer>
        </Container>
      </HeroSection>
    </>
  );
};

export default Hero;
