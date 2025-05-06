
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-petrol dark:bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              Elmira Mirzabeigi
            </h3>
            <p className="text-sm opacity-80">
              Applied Mathematics × AI × Neuroscience
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Research & Publications
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">
              Connect
            </h4>
            <div className="flex flex-col space-y-2">
              <a href="mailto:elmiramirzabeigi7@gmail.com" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                elmiramirzabeigi7@gmail.com
              </a>
              <a href="https://github.com/ElmiraMirzabeigi" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/elmira-mirzabeigi-7b0661217/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                LinkedIn
              </a>
              <a href="https://scholar.google.com/citations?hl=en&user=Z6ditbAAAAAJ" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Google Scholar
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80 italic">
            Need is the mother of innovation.
          </p>
          <p className="text-sm opacity-80 mt-2 md:mt-0">
            © {new Date().getFullYear()} Elmira Mirzabeigi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
