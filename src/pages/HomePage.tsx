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
              Prof. Syed Nazim Ali
            </h1>
            <p className="text-xl md:text-2xl text-gold-200 font-serif mb-6">
              Islamic Finance Scholar & Research Leader
            </p>
            <p className="text-slate-200 mb-8 leading-relaxed text-lg">
              Research Professor and Director of Research Division at the College of Islamic Studies, 
              Hamad Bin Khalifa University, with over three decades of leadership in Islamic finance education and research.
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
                Prof. Syed Nazim Ali brings over three decades of global leadership in Islamic finance, having spent 
                twenty years at Harvard University where he directed the Islamic Finance Program and served as Acting 
                Executive Director of the Islamic Legal Studies Program at Harvard Law School.
              </p>
              <p className="mb-6 text-lg text-slate-700 leading-relaxed">
                He holds a Ph.D. from the University of Strathclyde and has been instrumental in establishing enduring 
                knowledge platforms including the Harvard University Forum on Islamic Finance (now in its 27th year) and 
                collaborative workshops with LSE and SOAS University of London.
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
                    <span className="font-medium text-navy-900">Research Professor & Director of Research Division</span>
                    <p className="text-slate-600">College of Islamic Studies, HBKU, Qatar</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-navy-700 h-5 w-5 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <span className="font-medium text-navy-900">Academic Advisor</span>
                    <p className="text-slate-600">Harvard Muslim Alumni Association</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-navy-700 h-5 w-5 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <span className="font-medium text-navy-900">Co-Chair, Steering Committee</span>
                    <p className="text-slate-600">SOAS University of London Annual Islamic Finance Events</p>
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
              title="Fourteenth Harvard University Forum on Islamic Finance"
              type="Book"
              year="2022"
              publisher="Harvard University"
              description="Recent forum publication addressing contemporary challenges in Islamic finance."
              link="/research-books/14th Forum Book/14th Harvard Forum Publication 2022.pdf"
            />
            <PublicationItem 
              title="Fintech and Islamic Finance: Digitalization, Development and Disruption"
              type="Book"
              year="2021"
              publisher="Palgrave Macmillan"
              description="Comprehensive analysis of fintech innovations in Islamic finance and their transformative impact on the industry."
              link="/research-books/Book _ Fintech Islamic Finance.pdf"
            />
            <PublicationItem 
              title="Thirteenth Harvard University Forum on Islamic Finance: Principles of Engagement"
              type="Book"
              year="2018"
              publisher="Harvard University"
              description="Latest developments in Islamic finance principles and their global implementation."
              link="/research-books/13th Forum/13th Harvard Islamic Forum POE 2018.pdf"
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