import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};
