import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/20 backdrop-blur-md"
        >
          <nav className="container mx-auto px-4 py-4">
            <Navigation className="flex flex-col space-y-2" />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
