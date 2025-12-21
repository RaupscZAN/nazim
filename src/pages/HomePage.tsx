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
              Professorial Research Associate
            </p>
            <p className="text-lg text-gold-100 mb-6">
              SOAS – University of London, London, United Kingdom
            </p>
            <p className="text-slate-200 mb-8 leading-relaxed text-lg">
              Dr. Ali is a globally recognized scholar and institution-builder in Islamic economics and finance.
              He previously served as Research Professor and Director of the Research Division at the College of
              Islamic Studies, Hamad Bin Khalifa University (HBKU), Qatar Foundation, from 2014 to August 2025,
              following two decades at Harvard University where he founded the Harvard Islamic Finance Program,
              established the Harvard Islamic Finance Databank, and launched the Harvard University Forum on Islamic Finance.
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
                Dr. Ali is a globally recognized scholar and institution-builder in Islamic economics and finance.
                He previously served as Research Professor and Director of the Research Division at the College of
                Islamic Studies, Hamad Bin Khalifa University (HBKU), Qatar Foundation, from 2014 to August 2025,
                following two decades at Harvard University where he founded the Harvard Islamic Finance Program,
                established the Harvard Islamic Finance Databank, and launched the Harvard University Forum on Islamic Finance.
              </p>
              <p className="mb-6 text-lg text-slate-700 leading-relaxed">
                With more than forty years of academic, strategic, and policy-level contributions, Prof. Ali has led
                major international platforms, advised global regulatory bodies, and published extensively with leading
                academic publishers. He serves on several high-level advisory boards and continues to mentor emerging
                scholars while contributing to global discourse on Islamic finance, FinTech, sustainability, and institutional development.
              </p>
              <Link to="/biography" className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium">
                Read Full Biography <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="bg-slate-100 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-bold mb-4 text-navy-800">Current Affiliations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-navy-700 h-5 w-5 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <span className="font-medium text-navy-900">Professorial Research Associate</span>
                    <p className="text-slate-600">SOAS – University of London, London, United Kingdom</p>
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
                    <span className="font-medium text-navy-900">AAOIFI Education Board Member</span>
                    <p className="text-slate-600">Accounting & Auditing Organization for Islamic Finance Institutions</p>
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
              title="Islamic Finance in the Digital Age"
              type="Book"
              year="2024"
              publisher="Edward Elgar Publishing"
              description="Co-edited with Zul Hakim Jumat. Examines the transformation of Islamic finance through digital technologies and innovation."
              link="https://www.e-elgar.com/shop/usd/islamic-finance-in-the-digital-age-9781035322947.html?srsltid=AfmBOor7JeADJSMY9OFLqXg6IkJEwFP1akHXKBCJ9aY2PLmZ1BXYOXSi"
            />
            <PublicationItem
              title="The Edinburgh Companion to Shari'ah Governance in Islamic Finance"
              type="Book"
              year="2020"
              publisher="Edinburgh University Press"
              description="Co-edited with Wijdan Tariq and B.A. Al Quradaghi. Essential reference work on Shariah governance frameworks in Islamic financial institutions."
              link="https://edinburghuniversitypress.com/book-the-edinburgh-companion-to-shari-ah-governance-in-islamic-finance.html"
            />
            <PublicationItem
              title="Fintech in Islamic Finance: Theory and Practice"
              type="Book"
              year="2019"
              publisher="Taylor & Francis"
              description="Co-edited with Umar A. Oseni. Pioneering work on the application of financial technology in Islamic finance."
              link="https://www.amazon.com/Fintech-Islamic-Finance-Nazim-Ali/dp/1138494801"
            />
            <PublicationItem
              title="Shari'a-Compliant Microfinance"
              type="Book"
              year="2011"
              publisher="Routledge"
              description="Edited volume exploring Islamic microfinance models for poverty alleviation and financial inclusion."
              link="https://www.amazon.com/Compliant-Microfinance-Routledge-Islamic-Studies/dp/041578266X"
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
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <div className="mb-3 text-gold-600 font-medium">June 2026</div>
              <h3 className="text-xl font-serif font-bold mb-2">SOAS-QFC Public Lecture on Islamic Finance</h3>
              <p className="text-slate-600 mb-3">SOAS University of London</p>
              <p className="text-slate-700 mb-2">SOAS-QFC Workshop on Islamic Finance</p>
              <div className="mt-3 pt-3 border-t border-slate-200">
                <span className="text-sm font-medium text-navy-700">Chief Organizer</span>
              </div>
            </div>
            <div className="card">
              <div className="mb-3 text-gold-600 font-medium">October 2026</div>
              <h3 className="text-xl font-serif font-bold mb-2">Harvard Islamic Finance Conference</h3>
              <p className="text-slate-600 mb-3">Harvard University, Cambridge, MA</p>
              <div className="mt-3 pt-3 border-t border-slate-200">
                <span className="text-sm font-medium text-navy-700">Chief Organizer</span>
              </div>
            </div>
            <div className="card">
              <div className="mb-3 text-gold-600 font-medium">2026</div>
              <h3 className="text-xl font-serif font-bold mb-2">ICIF International Conference on Islamic Finance</h3>
              <p className="text-slate-600 mb-3">Hamad Bin Khalifa University, Doha, Qatar</p>
              <div className="mt-3 pt-3 border-t border-slate-200">
                <span className="text-sm font-medium text-navy-700">Conference Co-chair</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/activities" className="btn-primary inline-flex items-center">
              View All Activities <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;