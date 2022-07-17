import { Header } from "./components";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Abouts from "./pages/About/About";
import Portfolios from "./pages/Portfolio/Portfolio";
import Contacts from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./globalStyle";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<Abouts />} />
        <Route path="/project" exact element={<Portfolios />} />
        <Route path="/contact" exact element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
