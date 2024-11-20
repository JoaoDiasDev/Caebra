// pages/LandingPage.tsx
import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
};

export default LandingPage;
