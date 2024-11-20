import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
        Welcome to Vibe Tide Sounds
      </h1>
      <p className="text-xl mb-8 text-gray-300">
        Transform your text and voice with our cutting-edge AI technology
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/pricing"
          className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
