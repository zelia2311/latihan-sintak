import React from "react";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import Timeline from "../components/timeline";
import Footer from "../components/Footer";
import StatSection from "../components/stat-section";
import NavBar from "../components/NavBar";


export default function Homepage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <StatSection />
      <Timeline />
      <Footer />
    </div>
  );
}
 
