import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

import {  animateScroll as scroll } from "react-scroll";

const Button = styled.button`
  outline: none;
  border: none;
  height: 3rem;
  width: 3rem;
  background: #3a5ba0;
  color: #fff;
  border-radius: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: fixed;
  right: 2rem;
  bottom: 1rem;
  &:hover {
    background-color: #47b5ff;
  }
`;

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      <>
        <Button onClick={() => scrollToTop()}>
          <FaChevronUp />
        </Button>
      </>
    )
  );
};

export default BackToTopBtn;
