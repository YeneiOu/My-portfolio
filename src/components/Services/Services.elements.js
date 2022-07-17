import styled from "styled-components";
import { Section } from "../../globalStyle";

export const ServiceSec = styled(Section)`
  background: #1b2430;

  ${Section}
`;

export const ServiceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ServiceTitle = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  color: #fff;

  &::before {
    content: "SERVICES";
    position: absolute;
    opacity: 0.4;
    top: -0.9rem;
    display: block;
    left: 0.4rem;
    font-size: 64px;
    color: #06283d00;
    z-index: -1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
  }

  @media screen and (max-width: 890px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 400;
    &::before {
      display: none;
    }
  }
`;

export const ServiceGird = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (max-width: 890px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceItem = styled.div`
  background: #1c1d24;
  padding: 1.5rem;
  border-radius: 1rem;
  color: rgb(135 142 153);
`;

export const ServiceIcon = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  height: 3rem;
  width: 3rem;
  color: #47b5ff;
  margin-bottom: 6rem;
`;

export const ServiceIconText = styled.h4`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-size: 500;
  color: #fff;
`;

export const ServiceText = styled.p`


`;
