import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This tool has transformed the way I work! Highly recommended.",
    role: "Creative Designer",
  },
  {
    name: "Jane Smith",
    feedback: "Amazing features and easy to use. Caebra is a game changer!",
    role: "Content Creator",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-dark-purple text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-english-violet rounded-lg shadow-lg">
              <p className="mb-4 italic">"{testimonial.feedback}"</p>
              <h4 className="text-xl font-semibold">{testimonial.name}</h4>
              <p className="text-phlox">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;