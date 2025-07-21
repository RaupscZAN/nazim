import React from 'react';
import SectionHeading from '../components/SectionHeading';

const BiographyPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container-narrow">
        <SectionHeading title="Academic Biography" />
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 order-2 md:order-1">
            <h3 className="text-2xl font-serif font-bold mb-4 text-navy-800">Academic Journey</h3>
            <p className="mb-4 text-slate-700 leading-relaxed">
              Dr. Syed Nazim Ali is a distinguished scholar with over 25 years of experience in Islamic finance, 
              economics, and information science. His interdisciplinary approach has significantly contributed to 
              the development of ethical financial frameworks that bridge traditional Islamic principles with modern 
              economic systems.
            </p>
            
            <p className="mb-6 text-slate-700 leading-relaxed">
              He earned his Ph.D. in Information Science from the University of Strathclyde, where his research 
              focused on information systems in Islamic financial institutions. This groundbreaking work established 
              him as a pioneer in applying information science methodologies to Islamic finance.
            </p>
            
            <h3 className="text-2xl font-serif font-bold mb-4 text-navy-800 mt-8">Professional Trajectory</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-navy-700 pl-4">
                <h4 className="text-xl font-medium text-navy-800">2018 - Present</h4>
                <p className="text-lg font-medium text-slate-800">Professor of Islamic Finance</p>
                <p className="text-slate-600">Hamad Bin Khalifa University, Qatar</p>
                <p className="text-slate-700 mt-2">
                  Leading the Islamic Finance program and conducting research on contemporary issues 
                  in Islamic economics and financial systems.
                </p>
              </div>
              
              <div className="border-l-4 border-navy-700 pl-4">
                <h4 className="text-xl font-medium text-navy-800">2010 - 2018</h4>
                <p className="text-lg font-medium text-slate-800">Director, Islamic Finance Project</p>
                <p className="text-slate-600">Harvard Law School, USA</p>
                <p className="text-slate-700 mt-2">
                  Directed research initiatives and international conferences on Islamic finance, 
                  establishing Harvard as a center for Islamic economic thought in the Western world.
                </p>
              </div>
              
              <div className="border-l-4 border-navy-700 pl-4">
                <h4 className="text-xl font-medium text-navy-800">2005 - 2010</h4>
                <p className="text-lg font-medium text-slate-800">Senior Researcher</p>
                <p className="text-slate-600">Islamic Research and Training Institute, Saudi Arabia</p>
                <p className="text-slate-700 mt-2">
                  Led research teams investigating Shariah-compliant financial instruments and 
                  advised governments on implementing Islamic financial systems.
                </p>
              </div>
              
              <div className="border-l-4 border-navy-700 pl-4">
                <h4 className="text-xl font-medium text-navy-800">1998 - 2005</h4>
                <p className="text-lg font-medium text-slate-800">Associate Professor</p>
                <p className="text-slate-600">International Islamic University, Malaysia</p>
                <p className="text-slate-700 mt-2">
                  Taught courses on Islamic economics and finance while developing innovative 
                  curriculum integrating information systems with Islamic financial principles.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1 order-1 md:order-2">
            <div className="sticky top-28">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
                <h3 className="text-xl font-serif font-bold mb-4 text-navy-800">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium text-navy-800">Ph.D. in Information Science</p>
                    <p className="text-slate-600">University of Strathclyde, UK</p>
                    <p className="text-slate-500 text-sm">1996</p>
                  </li>
                  <li>
                    <p className="font-medium text-navy-800">Master's in Economics</p>
                    <p className="text-slate-600">London School of Economics, UK</p>
                    <p className="text-slate-500 text-sm">1992</p>
                  </li>
                  <li>
                    <p className="font-medium text-navy-800">Bachelor's in Finance</p>
                    <p className="text-slate-600">University of Karachi, Pakistan</p>
                    <p className="text-slate-500 text-sm">1990</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                <h3 className="text-xl font-serif font-bold mb-4 text-navy-800">Areas of Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-navy-700 rounded-full mr-2"></div>
                    <span className="text-slate-700">Islamic Banking Systems</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-navy-700 rounded-full mr-2"></div>
                    <span className="text-slate-700">Ethical Finance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-navy-700 rounded-full mr-2"></div>
                    <span className="text-slate-700">Information Systems in Finance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-navy-700 rounded-full mr-2"></div>
                    <span className="text-slate-700">Shariah-Compliant Investments</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-navy-700 rounded-full mr-2"></div>
                    <span className="text-slate-700">Sustainable Economic Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-navy-700 rounded-full mr-2"></div>
                    <span className="text-slate-700">Comparative Financial Systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <SectionHeading title="International Impact" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-serif font-bold mb-4 text-navy-800">Policy Advisory</h3>
              <p className="text-slate-700 mb-4">
                Dr. Ali has served as a consultant to numerous international organizations and government 
                bodies, including:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span>U.S. Department of the Treasury</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span>Federal Reserve Bank of New York</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span>Islamic Development Bank</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span>Central Bank of Malaysia</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span>Qatar Financial Centre Regulatory Authority</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-serif font-bold mb-4 text-navy-800">Academic Leadership</h3>
              <p className="text-slate-700 mb-4">
                His leadership in academic initiatives has fostered global dialogue on Islamic finance:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span>Founder, International Conference on Islamic Economics and Finance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span>Editor-in-Chief, Journal of Islamic Economic Studies</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span>Board Member, International Association of Islamic Economics</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span>Visiting Professor at universities across five continents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiographyPage;