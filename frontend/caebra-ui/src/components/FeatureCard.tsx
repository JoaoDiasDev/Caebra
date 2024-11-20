import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  color,
  link,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 backdrop-blur-md p-8 rounded-xl hover:bg-white/10 transition-colors"
    >
      <Icon className={`w-12 h-12 mb-4 ${color}`} />
      <h2 className={`text-2xl font-bold mb-4 ${color}`}>{title}</h2>
      <p className="mb-6 text-gray-300">{description}</p>
      <Link
        to={link}
        className={`inline-flex items-center ${color} hover:text-opacity-80 transition-colors`}
      >
        Learn More <ArrowRight className="ml-1" size={16} />
      </Link>
    </motion.div>
  );
}
