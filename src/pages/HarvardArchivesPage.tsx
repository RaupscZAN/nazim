import React from "react";
import { harvardArchives } from "../data/harvardArchives";

const HarvardArchivesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header Section */}
      <div className="w-full bg-burgundy-800 text-white relative overflow-hidden">
        {/* Decorative pattern overlay could go here if we had the asset, 
            using a simple gradient or existing pattern if available */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy-700 rounded-bl-full opacity-50 z-0"></div>
        <div className="container-wide relative z-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              {/* Decorative book spines simulation */}
              <div className="hidden md:flex gap-1 h-32 opacity-80 pl-8">
                <div className="w-8 bg-burgundy-900 h-full rounded-t-sm border-l border-white/20"></div>
                <div className="w-10 bg-burgundy-900 h-full mt-4 rounded-t-sm border-l border-white/20"></div>
                <div className="w-12 bg-burgundy-900 h-full mt-2 rounded-t-sm border-l border-white/20"></div>
                <div className="w-9 bg-burgundy-900 h-full mt-6 rounded-t-sm border-l border-white/20"></div>
              </div>
            </div>
            <div className="md:w-1/2 text-right md:pr-12 w-full px-4">
              <div className="inline-block text-left relative">
                <div className="w-8 h-1 bg-gold-400 mb-4"></div>
                <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-white">Archives</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col space-y-24">
          {[...harvardArchives].reverse().map((archive) => (
            <div key={archive.id} className="w-full flex flex-col items-center text-center">

              {/* Special styling for Covid cancelation */}
              {archive.title.includes("CANCELED") ? (
                <div className="w-full py-12 px-4 text-center opacity-60">
                  <h3 className="text-3xl font-serif font-bold tracking-wide uppercase text-burgundy-900">
                    {archive.description || archive.title}
                  </h3>
                </div>
              ) : (
                <>
                  {/* Header: Year + Title */}
                  <div className="mb-8 max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 uppercase tracking-tight leading-tight mb-4">
                      <span className="mr-3 text-burgundy-700">{archive.year} •</span>
                      {archive.title}
                    </h2>
                    {archive.subTitle && (
                      <p className="text-sm md:text-base text-slate-600 font-sans font-bold uppercase tracking-wider mb-8">
                        {archive.subTitle}
                      </p>
                    )}

                    {/* Location Pin */}
                    <div className="flex flex-col items-center justify-center gap-2 mb-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-burgundy-600"
                      >
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-500 text-sm font-medium font-serif italic">Austin Hall</span>
                    </div>
                  </div>

                  {/* Clean Grid of Cards */}
                  <div className={`w-full border border-cream-300 divide-y md:divide-y-0 md:divide-x divide-cream-300 bg-white shadow-sm ${archive.links.length === 1 ? 'max-w-md mx-auto rounded-lg border-b' :
                      archive.links.length === 2 ? 'grid grid-cols-1 md:grid-cols-2' :
                        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}>
                    {archive.links.map((link, i) => (
                      <div key={i} className="flex flex-col items-center justify-center p-12 hover:bg-cream-50 transition-colors duration-300">
                        <span className="text-slate-500 text-sm font-medium mb-6 font-serif">
                          {link.label === "Book" ? "Publication" : link.label === "Report" ? "Short Report" : "Program of Events"}
                        </span>
                        <a
                          href={link.url}
                          className="group flex items-center gap-3 px-8 py-3 bg-white border border-burgundy-100 hover:border-burgundy-600 text-burgundy-800 rounded hover:bg-burgundy-50 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 group-hover:scale-110 transition-transform text-burgundy-600"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                          <span className="font-medium font-sans text-sm uppercase tracking-wide">Download</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Registration Callout */}
      <div className="bg-white border-t border-cream-200 py-16 mt-12">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left md:w-1/2 md:pl-12">
            <div className="w-8 h-1 bg-burgundy-600 mb-6"></div>
            <h2 className="text-4xl font-serif font-bold text-burgundy-900 mb-3">Register</h2>
            <h3 className="text-2xl font-serif text-slate-700 mb-8">IFC at Harvard 2024</h3>
            <div className="text-slate-600 mb-4 text-sm max-w-md font-sans">
              Join us for the upcoming forum engaging with global leaders in Islamic Finance.
            </div>
            <a href="#" className="inline-block text-burgundy-700 font-bold hover:text-burgundy-900 uppercase tracking-wider text-sm border-b border-burgundy-700 pb-1 hover:border-burgundy-900 transition-colors">
              Register Now →
            </a>
          </div>

          {/* Scales Image Area */}
          <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12">
            <div className="relative">
              {/* Placeholder for the scales of justice image */}
              <div className="text-9xl text-gold-500 opacity-80 backdrop-blur-sm">
                ⚖️
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarvardArchivesPage;
