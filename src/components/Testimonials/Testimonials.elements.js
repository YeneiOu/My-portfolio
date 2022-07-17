import styled from "styled-components";
import { Section, SubTitle } from "../../globalStyle";

export const TestimonialsSec = styled(Section)`
  background: #1c1d24;

  ${Section}
`;

export const TestimonialsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  color: #fff;

  &::before {
    content: "ACTIVITY";
    position: absolute;
    opacity: 0.4;
    top: -0.9rem;
    display: block;
    left: -1rem;
    font-size:72px;
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

export const TestimonialsText = styled(SubTitle)`
  color: rgb(135 142 153);

  ${SubTitle};
`;

export const TestSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  
 

  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;

export const TestBox = styled.div`
  width: 550px;
  height: 328px;

  @media screen and (max-width: 890px) {
    width: 18rem;
    height: 12rem;
  }
`;

export const TestImg = styled.img`
  border-radius: 10px;
  display: block;
  width: 100%;
`;

export const TestTextBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 48rem;
`;

export const TestText = styled.h5`
  margin-bottom: 24px;
  font-size: 1.2rem;
  font-style: italic;
  color: #fff;
`;

export const TestTextName = styled.p`
  color: rgb(135 142 153);
  font-size: 18px;
  color: #47b5ff;
`;

export const TestTextNameSub = styled.p`
  color: rgb(135 142 153);
`;
