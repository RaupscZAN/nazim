import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, alignment = 'left' }) => {
  return (
    <div className={`mb-10 ${alignment === 'center' ? 'text-center' : ''}`}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-burgundy-800 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 max-w-2xl">{subtitle}</p>
      )}
      <div className={`w-20 h-1 bg-gold-500 mt-4 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
