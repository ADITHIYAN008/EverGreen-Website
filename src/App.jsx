import React from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Discover from "./components/Discover";
import Premium from "./components/Premium";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <About />
      <Discover />
      <Premium />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
