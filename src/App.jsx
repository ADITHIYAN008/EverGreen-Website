import React from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Filter from "./components/Filter";
import About from "./components/About";
import Discover from "./components/Discover";
import Premium from "./components/Premium";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <Filter />
      <About />
      <Discover />
      <Premium />
      <FAQ />
    </div>
  );
};

export default App;
