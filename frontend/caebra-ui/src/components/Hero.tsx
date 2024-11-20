import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-primary text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Caebra</h1>
        <p className="text-xl mb-8">
          Your hub for cutting-edge tools: Text2Tone and Tone2Text. Explore now!
        </p>
        <Link
          to="/text2tone"
          className="bg-phlox hover:bg-violet-blue text-white py-3 px-6 rounded-lg text-lg font-semibold transition"
        >
          Explore Text2Tone
        </Link>
      </div>
    </section>
  );
};

export default Hero;
