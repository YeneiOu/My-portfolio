import React from "react";
import { homeObj } from "../../components/Data/HeroData";
import {
  About,
  Contact,
  Footer,
  Hero,
  Portfolio,
  Services,
  Skills,
  Testimonials,
} from "../../components";
import Brands from "../../components/Brands/Brands";
import { aboutObj } from "../../components/Data/AboutData";
import BackToTopBtn from "../../components/BackToTopBtn";

const Home = () => {
  return (
    <>
      <Hero {...homeObj} />
      <Brands />
      <About {...aboutObj} />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Home;
