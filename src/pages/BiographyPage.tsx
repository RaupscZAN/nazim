import React from "react";

const BiographyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">
          Biography & Life Journey
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          For the complete biography, career history, and life journey of Dr.
          Syed Nazim Ali, please visit the Life Journey page.
        </p>
        <a
          href="/life-journey"
          className="inline-block bg-burgundy-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-burgundy-900 transition-colors"
        >
          View Life Journey
        </a>
      </div>
    </div>
  );
};

export default BiographyPage;
