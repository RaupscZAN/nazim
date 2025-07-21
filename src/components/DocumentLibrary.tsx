import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { MediaDocument } from '../data/mediaData';

interface DocumentLibraryProps {
  documents: MediaDocument[];
  title?: string;
}

const DocumentLibrary: React.FC<DocumentLibraryProps> = ({ documents, title }) => {
  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#DC2626" />
            <path d="M14 2l6 6h-6V2z" fill="#B91C1C" />
            <text x="6" y="18" fill="white" fontSize="6" fontWeight="bold">PDF</text>
          </svg>
        );
      case 'docx':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#2563EB" />
            <path d="M14 2l6 6h-6V2z" fill="#1D4ED8" />
            <text x="5" y="18" fill="white" fontSize="5" fontWeight="bold">DOC</text>
          </svg>
        );
      default:
        return <FileText className="w-8 h-8 text-slate-500" />;
    }
  };

  const handleDocumentClick = (document: MediaDocument) => {
    // For production, this would open the actual file
    // For now, we'll show an alert
    const fullPath = window.location.origin + document.path;
    window.open(fullPath, '_blank');
  };

  return (
    <div className="mb-8">
      {title && (
        <h4 className="text-xl font-serif font-bold mb-4 text-navy-800">{title}</h4>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((document, index) => (
          <motion.div
            key={document.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow group cursor-pointer"
            onClick={() => handleDocumentClick(document)}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                {getDocumentIcon(document.type)}
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-medium text-navy-800 mb-1 truncate group-hover:text-navy-600 transition-colors">
                  {document.description}
                </h5>
                <p className="text-xs text-slate-500 mb-2">
                  {document.type.toUpperCase()} Document
                </p>
                <div className="flex items-center space-x-3 text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDocumentClick(document);
                    }}
                    className="flex items-center space-x-1 text-navy-600 hover:text-navy-800 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Open</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Create a download link
                      const link = document.createElement('a');
                      link.href = document.path;
                      link.download = document.filename;
                      link.click();
                    }}
                    className="flex items-center space-x-1 text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DocumentLibrary;