import React from "react";
import { Container, SubTitle } from "../../globalStyle";

import { services } from "../Data/ServicesData";

import {
  ServiceSec,
  ServiceSection,
  ServiceTitle,
  ServiceGird,
  ServiceItem,
  ServiceIcon,
  ServiceIconText,
  ServiceText,
} from "./Services.elements";

const Services = () => {
  return (
    <>
      <ServiceSec id="service">
        <Container>
          <ServiceSection>
            <ServiceTitle>What I do for clients</ServiceTitle>
            <SubTitle>
              Do website design and website development based on customer needs.
            </SubTitle>
          </ServiceSection>
          <ServiceGird>
            {services.map((service, index) => {
              const { icon, name, description } = service;
              return (
                <ServiceItem key={index}>
                  <ServiceIcon>{icon}</ServiceIcon>
                  <ServiceIconText>{name}</ServiceIconText>
                  <ServiceText>{description}</ServiceText>
                </ServiceItem>
              );
            })}
          </ServiceGird>
        </Container>
      </ServiceSec>
    </>
  );
};

export default Services;
