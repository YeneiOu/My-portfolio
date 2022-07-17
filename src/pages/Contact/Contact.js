import React from "react";
import {
  About,
  Contact,
  Footer,
  Portfolio,
  
} from "../../components";
import { aboutObj } from "../../components/Data/AboutData";
import BackToTopBtn from "../../components/BackToTopBtn";

const Contacts = () => {
  return (
    <>
      <About {...aboutObj} />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Contacts;
