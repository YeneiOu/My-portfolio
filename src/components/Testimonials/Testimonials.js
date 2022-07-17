import React from "react";
import { Container } from "../../globalStyle";
import TestimonialSlider from "./TestimonialSlider";
import {
  TestimonialsSec,
  TestimonialsBox,
  TestimonialsTitle,
  TestimonialsText,
} from "./Testimonials.elements";

const Testimonials = () => {
  return (
    <>
      <TestimonialsSec id="testimonials">
        <Container>
          <TestimonialsBox>
            <TestimonialsTitle>What I like to do</TestimonialsTitle>
            <TestimonialsText>
              Everyone has things to stress about.Whether it's stress from work
              or stress from other things, I will share with you how to relieve
              stress by my method.
            </TestimonialsText>
          </TestimonialsBox>
          <TestimonialSlider />
        </Container>
      </TestimonialsSec>
    </>
  );
};

export default Testimonials;
