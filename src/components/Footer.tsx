import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, BookOpen, FileText } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Biography", path: "/biography" },
    { name: "Research", path: "/research" },
    { name: "Activities", path: "/speaking" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  const affiliations = [
    "SOAS University of London",
    "Harvard Muslim Alumni Association",
    "University of Bolton, UK",
    "AAOIFI, Bahrain",
  ];

  return (
    <footer className="bg-burgundy-900 text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mr-3">
                <span className="font-serif text-burgundy-900 font-bold text-lg">
                  SNA
                </span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-white">
                  Dr. Syed Nazim Ali
                </h3>
                <p className="text-sm text-cream-300">
                  Islamic Finance Scholar
                </p>
              </div>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed mb-6">
              Professorial Research Associate at SOAS University of London, with
              over four decades of contributions to Islamic economics and
              finance.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/syed-nazim-ali-ali-9623a538/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-burgundy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-burgundy-900 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://scholar.google.com/citations?user=XaUH6p0AAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-burgundy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-burgundy-900 transition-all duration-300"
                aria-label="Google Scholar"
              >
                <BookOpen size={18} />
              </a>
              <a
                href="https://orcid.org/0000-0002-7109-293X"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-burgundy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-burgundy-900 transition-all duration-300"
                aria-label="ORCID"
              >
                <FileText size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <h4 className="font-semibold text-white mb-4">Affiliations</h4>
            <ul className="space-y-2">
              {affiliations.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-cream-300"
                >
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-burgundy-800">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-400 text-sm">
            © {currentYear} Dr. Syed Nazim Ali. All rights reserved.
          </p>
          <p className="text-cream-500 text-sm mt-2 md:mt-0">
            Dedicated to advancing Islamic economics and finance globally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
