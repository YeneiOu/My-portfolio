import React from "react";
import { Container, SubTitle } from "../../globalStyle";
import { motion } from "framer-motion";
import {
  ContactSection,
  ContactTitle,
  TitleContact,
  InfoBox,
  ContactInfo,
  ContactBox,
  ContactIcon,
  ConTactTitle,
  ContactText,
  ContactDesc,
  TitleBox,
  Form,
  FormBox,
  Input,
  TextArea,
  Button,
} from "./Contact.elements";
import { contact } from "../Data/ContactData";
const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <ContactTitle>
          <TitleContact>Contact</TitleContact>
          <SubTitle>
            If you are interested in working with us, you can contact us from
            this form or send us an email directly.
          </SubTitle>
        </ContactTitle>

        <InfoBox>
          <ContactInfo>
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <ContactBox key={index}>
                  <ContactIcon>{icon}</ContactIcon>
                  <TitleBox>
                    <ConTactTitle>{title}</ConTactTitle>
                    <ContactText>{subtitle}</ContactText>
                    <ContactDesc>{description}</ContactDesc>
                  </TitleBox>
                </ContactBox>
              );
            })}
          </ContactInfo>
          <Form
            action="https://getform.io/f/3df78cfe-dc1f-4bd1-8a0b-eadb13c1e660"
            method="POST"
          >
            <FormBox>
              <Input type="text" name="name" placeholder="Your name" />
              <Input type="text" name="email" placeholder="Your email" />
            </FormBox>
            <Input type="text" name="subject" placeholder="Subject" />
            <TextArea
              name="message"
              rows="10"
              placeholder="Type Something..."
            ></TextArea>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
              <Button type="submit">Contact me</Button>
            </motion.div>
          </Form>
        </InfoBox>
      </Container>
    </ContactSection>
  );
};
export default Contact;
