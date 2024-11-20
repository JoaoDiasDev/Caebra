import React from "react";

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

interface PricingProps {
  plans: PricingPlan[];
}

export const Pricing: React.FC<PricingProps> = ({ plans }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg text-center hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-xl font-bold text-blue-600 mb-4">
                {plan.price}
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaLink}
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
