import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-dark-purple text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Caebra</div>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-phlox">
          Home
        </Link>
        <Link to="/features" className="hover:text-phlox">
          Features
        </Link>
        <Link to="/pricing" className="hover:text-phlox">
          Pricing
        </Link>
        <Link to="/contact" className="hover:text-phlox">
          Contact
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
