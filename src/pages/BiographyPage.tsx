import React, { useEffect } from 'react';

const BiographyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <img
              src="https://www.hbku.edu.qa/sites/default/files/staff/dr._syed_nazim_ali.jpg"
              alt="Dr. Syed Nazim Ali"
              className="w-48 h-56 object-cover object-top rounded-2xl shadow-xl"
            />
            <div className="text-center md:text-left">
              <h1 className="font-serif text-4xl font-bold text-slate-900 mb-2">
                Dr. Syed Nazim Ali
              </h1>
              <p className="text-burgundy-800 text-lg font-medium mb-4">
                Professorial Research Associate, SOAS University of London
              </p>
              <p className="text-slate-600 leading-relaxed max-w-xl">
                A distinguished scholar with over four decades of contributions to Islamic
                economics and finance, bridging academia, policy, and industry worldwide.
              </p>

              {/* Stats inline */}
              <div className="flex flex-wrap gap-6 mt-6 justify-center md:justify-start">
                <div>
                  <span className="text-2xl font-bold text-burgundy-800">40+</span>
                  <span className="text-slate-500 text-sm ml-1">years</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-burgundy-800">50+</span>
                  <span className="text-slate-500 text-sm ml-1">publications</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-burgundy-800">20</span>
                  <span className="text-slate-500 text-sm ml-1">years at Harvard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Career Journey */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 pb-2 border-b border-slate-200">
            Career Journey
          </h2>

          <div className="space-y-8">
            {[
              {
                period: "2025 – Present",
                title: "Professorial Research Associate",
                org: "SOAS University of London",
                desc: "Continuing global leadership in Islamic finance research and education.",
                current: true
              },
              {
                period: "2014 – 2025",
                title: "Director, Research Division & CIEF",
                org: "HBKU, Qatar Foundation",
                desc: "Established ICIF conference (8 years) and CEOs Roundtable (10 years). Served as Acting Dean 2017-2022.",
                current: false
              },
              {
                period: "1995 – 2014",
                title: "Director, Islamic Finance Program",
                org: "Harvard University",
                desc: "Founded the Harvard Forum on Islamic Finance (27+ years running), Islamic Finance Databank, and LSE-SOAS workshops.",
                current: false
              },
              {
                period: "1984 – 1994",
                title: "Head of Research & Information Services",
                org: "University of Bahrain",
                desc: "Modernized academic information systems and research infrastructure.",
                current: false
              },
              {
                period: "1976 – 1983",
                title: "Director of Library",
                org: "King Faisal University, Saudi Arabia",
                desc: "Pioneered development of modern university libraries.",
                current: false
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-28 flex-shrink-0 text-right">
                  <span className={`text-sm font-medium ${item.current ? 'text-gold-600' : 'text-slate-500'}`}>
                    {item.period}
                  </span>
                </div>
                <div className="relative">
                  <div className={`absolute -left-[21px] top-1.5 w-3 h-3 rounded-full border-2 ${
                    item.current ? 'bg-gold-500 border-gold-500' : 'bg-white border-burgundy-800'
                  }`}></div>
                  <div className={`border-l-2 ${i === 4 ? 'border-transparent' : 'border-slate-200'} pl-6 pb-8`}>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-burgundy-800 text-sm mb-2">{item.org}</p>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 pb-2 border-b border-slate-200">
            Education
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { degree: "Ph.D.", field: "Information Sciences", school: "University of Strathclyde, Glasgow", year: "1983" },
              { degree: "MLS", field: "Library Science", school: "Emporia State University, Kansas", year: "1975" },
              { degree: "BSc", field: "Biology & Chemistry", school: "Osmania University, Hyderabad", year: "1970" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5">
                <div className="text-gold-600 text-sm font-medium mb-1">{item.year}</div>
                <div className="font-bold text-slate-900">{item.degree} {item.field}</div>
                <div className="text-slate-500 text-sm mt-1">{item.school}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Initiatives */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 pb-2 border-b border-slate-200">
            Initiatives Founded
          </h2>

          <div className="space-y-3">
            {[
              { name: "Harvard University Forum on Islamic Finance", years: "27+ years", role: "Founder & Director" },
              { name: "LSE-SOAS Workshop Series", years: "20+ years", role: "Co-Chair" },
              { name: "CEOs & Islamic Finance Roundtable", years: "10 years", role: "Founder" },
              { name: "International Conference on Islamic Finance (ICIF)", years: "8 years", role: "Founder" },
              { name: "Islamic Finance Databank", years: "Since 1995", role: "Founder" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                <div>
                  <span className="text-slate-900">{item.name}</span>
                  <span className="text-slate-400 text-sm ml-2">· {item.role}</span>
                </div>
                <span className="text-burgundy-800 font-semibold text-sm whitespace-nowrap">{item.years}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column: Affiliations & Expertise */}
        <section className="mb-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
              Affiliations
            </h2>
            <ul className="space-y-3">
              {[
                "SOAS University of London",
                "University of Bolton, UK",
                "Harvard Muslim Alumni Association",
                "AAOIFI Education Board",
                "Saleh Kamel Award Committee",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
              Expertise
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Islamic Finance",
                "Fintech",
                "Sustainability",
                "Shari'ah Governance",
                "Waqf Development",
                "Microfinance",
              ].map((item, i) => (
                <span key={i} className="bg-burgundy-50 text-burgundy-800 px-3 py-1.5 rounded-lg text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Visiting Positions */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Visiting Scholar
          </h2>
          <p className="text-slate-600">
            University of Wisconsin–Madison · University of Pittsburgh · SOAS University of London · Dauphine University, Paris
          </p>
        </section>

      </div>
    </div>
  );
};

export default BiographyPage;
