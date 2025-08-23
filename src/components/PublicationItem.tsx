import React from 'react';

interface PublicationItemProps {
  title: string;
  type: string;
  year: string;
  publisher: string;
  description: string;
  link?: string;
}

const PublicationItem: React.FC<PublicationItemProps> = ({
  title,
  type,
  year,
  publisher,
  description,
  link
}) => {
  const content = (
    <>
      <div className="flex flex-wrap justify-between items-start mb-2">
        <h3 className="text-xl font-serif font-bold text-navy-800">{title}</h3>
        <span className="inline-block bg-navy-100 text-navy-800 text-sm font-medium px-3 py-1 rounded-full mt-1 md:mt-0">
          {type}
        </span>
      </div>
      <div className="text-slate-600 mb-2">
        {publisher} • {year}
      </div>
      <p className="text-slate-700 mb-3">{description}</p>
    </>
  );

  if (link) {
    return (
      <div className="publication-item">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block hover:bg-gray-50 -m-4 p-4 rounded-lg transition-colors"
        >
          {content}
        </a>
        {link.endsWith('.pdf') && (
          <div className="mt-2 pt-2 border-t border-gray-100">
            <a 
              href={link} 
              download
              className="inline-flex items-center text-gray-500 hover:text-gray-700 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="publication-item">
      {content}
    </div>
  );
};

export default PublicationItem;