import React from 'react';

interface SectionHeadingProps {
  title: string;
  alignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, alignment = 'left' }) => {
  return (
    <div className={`mb-10 ${alignment === 'center' ? 'text-center' : ''}`}>
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionHeading;