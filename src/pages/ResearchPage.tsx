import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import PublicationItem from '../components/PublicationItem';

type PublicationType = 'All' | 'Books' | 'Articles' | 'Book Chapters' | 'Conference Papers';

const ResearchPage: React.FC = () => {
  const [activeType, setActiveType] = useState<PublicationType>('All');
  
  const publications = [
    {
      id: 1,
      title: "Islamic Finance: Principles and Practice",
      type: "Books",
      year: "2023",
      publisher: "Oxford University Press",
      description: "A comprehensive examination of Islamic financial systems and their application in modern economies.",
      link: "#"
    },
    {
      id: 2,
      title: "Ethical Banking Models: Islamic Perspectives",
      type: "Articles",
      year: "2022",
      publisher: "Journal of Business Ethics",
      description: "Analysis of ethical frameworks in Islamic banking with comparative case studies from global institutions.",
      link: "#"
    },
    {
      id: 3,
      title: "Information Systems in Islamic Financial Institutions",
      type: "Book Chapters",
      year: "2021",
      publisher: "Handbook of Islamic Banking",
      description: "Explores the intersection of information science and Islamic finance in developing robust financial systems.",
      link: "#"
    },
    {
      id: 4,
      title: "Sukuk Markets: Evolution and Innovation",
      type: "Articles",
      year: "2021",
      publisher: "International Journal of Islamic Finance",
      description: "Analysis of innovations in Islamic bond markets and their role in infrastructure development.",
      link: "#"
    },
    {
      id: 5,
      title: "Digital Transformation in Islamic Banking",
      type: "Conference Papers",
      year: "2020",
      publisher: "International Conference on Islamic Economics",
      description: "Examination of fintech adoption in Islamic banks and its implications for Shariah compliance.",
      link: "#"
    },
    {
      id: 6,
      title: "Principles of Islamic Finance: Theory and Application",
      type: "Books",
      year: "2019",
      publisher: "Cambridge University Press",
      description: "Foundational textbook on Islamic finance principles, contracts, and modern applications.",
      link: "#"
    },
    {
      id: 7,
      title: "Shariah Governance in Financial Institutions",
      type: "Articles",
      year: "2019",
      publisher: "Corporate Governance: An International Review",
      description: "Comparative analysis of Shariah governance frameworks across different jurisdictions.",
      link: "#"
    },
    {
      id: 8,
      title: "Islamic Finance in the Digital Age",
      type: "Book Chapters",
      year: "2018",
      publisher: "Research Handbook on Digital Transformations",
      description: "Examination of how digital technologies are reshaping Islamic financial services.",
      link: "#"
    },
    {
      id: 9,
      title: "ESG and Islamic Investment: Convergence and Divergence",
      type: "Articles",
      year: "2018",
      publisher: "Journal of Sustainable Finance & Investment",
      description: "Comparative analysis of environmental, social, and governance criteria in Islamic investments.",
      link: "#"
    },
    {
      id: 10,
      title: "Risk Management in Islamic Financial Institutions",
      type: "Conference Papers",
      year: "2017",
      publisher: "World Congress on Risk Management",
      description: "Frameworks for risk identification and mitigation in Shariah-compliant institutions.",
      link: "#"
    }
  ];
  
  const filteredPublications = activeType === 'All' 
    ? publications 
    : publications.filter(pub => pub.type === activeType);
  
  const publicationTypes: PublicationType[] = ['All', 'Books', 'Articles', 'Book Chapters', 'Conference Papers'];
  
  return (
    <div className="py-16">
      <div className="container-narrow">
        <SectionHeading title="Research & Publications" />
        
        <div className="mb-10">
          <h3 className="text-2xl font-serif font-bold mb-4 text-navy-800">Research Focus</h3>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dr. Ali's research spans the intersection of Islamic finance, ethics, and information systems. 
            His work has been instrumental in developing frameworks for Shariah-compliant financial 
            products, analyzing the ethical dimensions of Islamic banking, and exploring the application 
            of information science to Islamic financial institutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy-50 rounded-lg p-6 border border-navy-100">
              <h4 className="text-xl font-serif font-bold mb-3 text-navy-800">Primary Research Areas</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Islamic financial system design and implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Ethical dimensions of Islamic banking practices</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Information systems for Shariah compliance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Sustainable and responsible Islamic investment</span>
                </li>
              </ul>
            </div>
            <div className="bg-gold-50 rounded-lg p-6 border border-gold-100">
              <h4 className="text-xl font-serif font-bold mb-3 text-navy-800">Current Projects</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Digital transformation of Islamic financial services</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">ESG integration in Islamic investment portfolios</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Fintech solutions for Islamic microfinance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Comparative analysis of global Islamic banking regulations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-navy-800 mb-4 md:mb-0">Publications</h3>
            <div className="flex flex-wrap gap-2">
              {publicationTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeType === type
                      ? 'bg-navy-700 text-white'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 divide-y divide-slate-200">
            {filteredPublications.length > 0 ? (
              filteredPublications.map(pub => (
                <PublicationItem
                  key={pub.id}
                  title={pub.title}
                  type={pub.type}
                  year={pub.year}
                  publisher={pub.publisher}
                  description={pub.description}
                  link={pub.link}
                />
              ))
            ) : (
              <div className="p-8 text-center text-slate-600">
                No publications found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;