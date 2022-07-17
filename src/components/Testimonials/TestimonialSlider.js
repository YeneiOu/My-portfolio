import React from "react";

import { testimonials } from "../Data/TestimonialData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Testimonials/swiper.css";

import {
  TestSection,
  TestBox,
  TestImg,
  TestTextBox,
  TestText,
  TestTextName,
  TestTextNameSub,
} from "./Testimonials.elements";
import { Autoplay, Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={{ Autoplay, Pagination }}
      className="mySwiper"
    >
      {testimonials.map((item, index) => {
        const { authorImg, authorText, authorName, authorPosition } = item;
        return (
          <SwiperSlide key={index}>
            <TestSection>
              <TestBox>
                <TestImg src={authorImg} alt="/" />
              </TestBox>
              <TestTextBox>
                <TestText>{authorText}</TestText>
                <TestTextName>{authorName}</TestTextName>
                <TestTextNameSub>{authorPosition}</TestTextNameSub>
              </TestTextBox>
            </TestSection>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
