import React from "react";
import { About, Contact, Footer, Portfolio, Skills } from "../../components";
import { aboutObj } from "../../components/Data/AboutData";
import BackToTopBtn from "../../components/BackToTopBtn";

const Abouts = () => {
  return (
    <>
      <About {...aboutObj} />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Abouts;
