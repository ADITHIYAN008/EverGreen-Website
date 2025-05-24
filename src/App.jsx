import React, { useEffect } from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Discover from "./components/Discover";
import Premium from "./components/Premium";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
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
