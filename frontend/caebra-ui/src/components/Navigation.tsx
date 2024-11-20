import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Text2Tone", path: "/application/text2tone" },
  { name: "Tone2Text", path: "/application/tone2text" },
];

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  return (
    <div className={className}>
      {navItems.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            to={item.path}
            className="text-lg font-medium hover:text-pink-300 transition-colors"
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
