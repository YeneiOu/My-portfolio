import styled from "styled-components";
import { Section } from "../../globalStyle";

export const ContactSection = styled(Section)`
  background: #1b2430;

  ${Section}
`;

export const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TitleContact = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  color: #fff;

  &::before {
    content: "CONTACT";
    position: absolute;
    opacity: 0.4;
    top: -0.9rem;
    display: block;
    left: -5rem;
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

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 0;
  padding-top: 1.5rem;

  @media screen and (max-width: 890px) {
    margin-bottom: 3rem;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;

export const ContactIcon = styled.div`
  color: #47b5ff;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  width: 3.5rem;
  height: 3.5rem;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 1rem;
  font-size: 28px;
  @media screen and (max-width: 890px) {
    margin-bottom: 2rem;
  }
`;

export const ConTactTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #fff;
`;

export const ContactText = styled.p`
  color: rgb(135 142 153);
  margin-bottom: 0.5rem;
`;

export const ContactDesc = styled.p`
  color: #47b5ff;
`;

export const TitleBox = styled.div``;

export const Form = styled.form`
  margin-top: 1rem;
  width: 100%;
  max-width: 780px;
`;

export const FormBox = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width:768px){
    flex-direction: column;
    gap: 0;
    
  }
`;

export const Input = styled.input`
  background-color: #1c1d24;
  color: #fff;
  height: 60px;
  padding-left: 1.5rem;
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
  border-radius: 0.3rem;
  margin: 10px 0;

  &:focus {
    outline-style: solid;
    outline-width: 1;
    outline-color: #47b5ff;
  }
`;

export const TextArea = styled.textarea`
  background-color: #1c1d24;
  resize: none;
  width: 100%;
  outline: 2px solid transparent;
  outline-offset: 2px;
  padding: 1.5rem;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  height: 200px;
  margin: 10px 0;
  color: #fff;
  font-size: 15px;
  &:focus {
    outline-style: solid;
    outline-width: 1;
    outline-color: #47b5ff;
  }
`;

export const Button = styled.button`
  padding: 1rem 1.75rem;
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  outline: none;
  font-weight: 500;
  border-radius: 0.25rem;
  background: #3a5ba0;
  color: #fff;
  margin-top: 10px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #47b5ff;
  }
  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;
