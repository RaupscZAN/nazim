import React from 'react';
import { Linkedin, BookOpen, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white py-12 mt-16">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-300">Prof. Syed Nazim Ali</h3>
            <p className="text-slate-300 mb-4">
              Research Professor & Director of Research Division
            </p>
            <p className="text-slate-300">
              College of Islamic Studies<br />
              Hamad Bin Khalifa University<br />
              Education City, Doha, Qatar
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-300">Academic Affiliations</h3>
            <ul className="text-slate-300 space-y-2">
              <li>Hamad Bin Khalifa University, Qatar</li>
              <li>Harvard Muslim Alumni Association</li>
              <li>SOAS University of London</li>
              <li>University of Bolton, UK</li>
              <li>AAOIFI, Bahrain</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-300">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.linkedin.com/in/syed-nazim-ali-ali-9623a538/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold-300 transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://scholar.google.com/citations?user=XaUH6p0AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold-300 transition-colors" aria-label="Google Scholar">
                <BookOpen size={24} />
              </a>
              <a href="https://orcid.org/0000-0002-7109-293X" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold-300 transition-colors" aria-label="ORCID">
                <FileText size={24} />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              © {currentYear} Dr. Syed Nazim Ali. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;