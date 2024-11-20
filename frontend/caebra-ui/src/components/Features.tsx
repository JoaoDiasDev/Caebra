// components/ui/Features.tsx
import React from "react";
import { FaMusic, FaTextHeight, FaCog } from "react-icons/fa";

const features = [
  {
    icon: <FaMusic />,
    title: "Text2Tone",
    description: "Convert text into unique and beautiful tones seamlessly.",
  },
  {
    icon: <FaTextHeight />,
    title: "Tone2Text",
    description: "Transform tones into meaningful text effortlessly.",
  },
  {
    icon: <FaCog />,
    title: "Intelligent Tools",
    description: "Powered by AI for smarter workflows.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white text-dark-purple">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-english-violet text-white rounded-lg shadow-lg"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
