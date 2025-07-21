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
  return (
    <div className="publication-item">
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
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-navy-600 hover:text-navy-800 font-medium"
        >
          View Publication
        </a>
      )}
    </div>
  );
};

export default PublicationItem;