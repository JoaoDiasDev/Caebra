import React from "react";

const plans = [
  { name: "Basic", price: "$10/month", features: ["Feature 1", "Feature 2"] },
  {
    name: "Pro",
    price: "$30/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Enterprise",
    price: "$50/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-white text-dark-purple">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-english-violet text-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-xl mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="bg-phlox hover:bg-violet-blue text-white py-2 px-4 rounded-lg">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
