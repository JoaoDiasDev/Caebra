import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-md text-white">
      <div className="container mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-4">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-pink-300 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center mt-4 text-sm">
          &copy; {new Date().getFullYear()} AI Voice Conversion. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
