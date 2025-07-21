import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PublicationItem from '../components/PublicationItem';
import SectionHeading from '../components/SectionHeading';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-24 md:py-32">
        <div className="container-narrow grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">
              Dr. Syed Nazim Ali
            </h1>
            <p className="text-xl md:text-2xl text-gold-200 font-serif mb-6">
              Islamic Finance & Information Science Scholar
            </p>
            <p className="text-slate-200 mb-8 leading-relaxed text-lg">
              Professor at Hamad Bin Khalifa University and Harvard University affiliate, 
              pioneering research in Islamic finance, ethical banking, and information systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/biography" className="btn-primary bg-gold-500 hover:bg-gold-600 text-navy-900 flex items-center">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-primary bg-transparent hover:bg-white/10 border border-white flex items-center">
                Contact <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="rounded-full overflow-hidden border-4 border-gold-400 shadow-xl h-64 w-64 md:h-80 md:w-80">
              <img 
                src="https://www.hbku.edu.qa/sites/default/files/staff/dr._syed_nazim_ali.jpg" 
                alt="Dr. Syed Nazim Ali" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Biography */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <SectionHeading title="About Dr. Ali" />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="mb-4 text-lg text-slate-700 leading-relaxed">
                Dr. Syed Nazim Ali is a distinguished scholar in Islamic finance and information science, 
                with over two decades of experience in academia and advisory roles at prestigious institutions.
              </p>
              <p className="mb-6 text-lg text-slate-700 leading-relaxed">
                He holds a Ph.D. from the University of Strathclyde and has been at the forefront of developing 
                ethical financial frameworks that bridge traditional Islamic principles with modern economic systems.
              </p>
              <Link to="/biography" className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium">
                Read Full Biography <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="bg-slate-100 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-bold mb-4 text-navy-800">Current Positions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-navy-700 h-5 w-5 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <span className="font-medium text-navy-900">Professor of Islamic Finance</span>
                    <p className="text-slate-600">Hamad Bin Khalifa University, Qatar</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-navy-700 h-5 w-5 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <span className="font-medium text-navy-900">Research Affiliate</span>
                    <p className="text-slate-600">Harvard University, USA</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-navy-700 h-5 w-5 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <span className="font-medium text-navy-900">Senior Advisor</span>
                    <p className="text-slate-600">Islamic Research and Training Institute</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <SectionHeading title="Featured Publications" />
          <div className="space-y-6">
            <PublicationItem 
              title="Islamic Finance: Principles and Practice"
              type="Book"
              year="2023"
              publisher="Oxford University Press"
              description="A comprehensive examination of Islamic financial systems and their application in modern economies."
            />
            <PublicationItem 
              title="Ethical Banking Models: Islamic Perspectives"
              type="Journal Article"
              year="2022"
              publisher="Journal of Business Ethics"
              description="Analysis of ethical frameworks in Islamic banking with comparative case studies from global institutions."
            />
            <PublicationItem 
              title="Information Systems in Islamic Financial Institutions"
              type="Book Chapter"
              year="2021"
              publisher="Handbook of Islamic Banking"
              description="Explores the intersection of information science and Islamic finance in developing robust financial systems."
            />
          </div>
          <div className="mt-8 text-center">
            <Link to="/research" className="btn-primary inline-flex items-center">
              View All Publications <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Engagements */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <SectionHeading title="Upcoming Engagements" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <div className="mb-3 text-gold-600 font-medium">June 15-16, 2025</div>
              <h3 className="text-xl font-serif font-bold mb-2">International Conference on Islamic Economics</h3>
              <p className="text-slate-600 mb-3">Harvard University, Cambridge, MA</p>
              <p className="text-slate-700">Keynote address on "The Future of Islamic Finance in a Digital Economy"</p>
            </div>
            <div className="card">
              <div className="mb-3 text-gold-600 font-medium">September 8, 2025</div>
              <h3 className="text-xl font-serif font-bold mb-2">Global Islamic Finance Forum</h3>
              <p className="text-slate-600 mb-3">London School of Economics, UK</p>
              <p className="text-slate-700">Panel discussion on "Ethical Investment Strategies in Post-Pandemic Markets"</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/speaking" className="btn-primary inline-flex items-center">
              View All Engagements <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;