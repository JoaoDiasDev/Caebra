export function Footer() {
    return (
      <footer className="bg-purple-900 text-gray-300 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © 2024 Caebra. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    );
  }
  