import React from "react";
import { Container } from "../../globalStyle";
import { social } from "../Data/SocialData";
import {
  Footers,
  SocialBox,
  SocialIcon,
  SocialLink,
  LogoIcon,
  LogoBox,
  CopyRightText,
} from "./Footer.elements";
const Footer = () => {
  return (
    <>
      <Footers>
        <Container>
          <SocialBox>
            <SocialIcon>
              {social.map((item, index) => {
                const { href, icon } = item;
                return (
                  <SocialLink href={href} key={index}>
                    {icon}
                  </SocialLink>
                );
              })}
            </SocialIcon>
            <LogoBox>
              <LogoIcon />
              Portfolio
            </LogoBox>
            <CopyRightText>
              &copy; 2022 Yenei Chen. All rights reserved.
            </CopyRightText>
          </SocialBox>
        </Container>
      </Footers>
    </>
  );
};

export default Footer;
