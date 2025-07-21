import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface NewspaperImage {
  id: string;
  title: string;
  imagePath: string;
  description: string;
  date?: string;
}

interface NewspaperCoverageProps {
  newspapers: NewspaperImage[];
}

const NewspaperCoverage: React.FC<NewspaperCoverageProps> = ({ newspapers }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = selectedIndex > 0 ? selectedIndex - 1 : newspapers.length - 1;
    } else {
      newIndex = selectedIndex < newspapers.length - 1 ? selectedIndex + 1 : 0;
    }
    
    setSelectedIndex(newIndex);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  React.useEffect(() => {
    if (selectedIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div>
      {/* Newspaper Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newspapers.map((newspaper, index) => (
          <motion.div
            key={newspaper.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden group"
          >
            {/* Newspaper Image - Full but Small */}
            <div 
              className="relative cursor-pointer overflow-hidden bg-slate-100"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={newspaper.imagePath}
                  alt={newspaper.title}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23e2e8f0"/%3E%3Ctext x="400" y="300" font-family="Arial" font-size="20" fill="%2364748b" text-anchor="middle"%3ENewspaper image not available%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/70 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="p-4">
              <h4 className="text-base font-medium text-navy-800 mb-1 line-clamp-2">{newspaper.title}</h4>
              {newspaper.date && (
                <p className="text-xs text-slate-500 mb-2">{newspaper.date}</p>
              )}
              {newspaper.description && (
                <p className="text-sm text-slate-600 line-clamp-3">{newspaper.description}</p>
              )}
              <p className="text-xs text-slate-500 mt-3 text-center">Click to read full article</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95"
            onClick={closeLightbox}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm hover:bg-black/80 text-white p-3 rounded-full transition-all shadow-lg"
              >
                <X size={24} />
              </button>

              {/* Navigation buttons */}
              {newspapers.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm hover:bg-black/80 text-white p-3 rounded-full transition-all shadow-lg z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm hover:bg-black/80 text-white p-3 rounded-full transition-all shadow-lg z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image container */}
              <motion.div
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-full max-h-full overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={newspapers[selectedIndex].imagePath}
                  alt={newspapers[selectedIndex].title}
                  className="max-w-none h-auto"
                  style={{ minWidth: '100%' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23334155"/%3E%3Ctext x="400" y="300" font-family="Arial" font-size="24" fill="%2394a3b8" text-anchor="middle"%3EImage not available%3C/text%3E%3C/svg%3E';
                  }}
                />
              </motion.div>

              {/* Caption */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-white font-medium">{newspapers[selectedIndex].title}</p>
                  {newspapers.length > 1 && (
                    <p className="text-white/70 text-sm mt-1">
                      {selectedIndex + 1} of {newspapers.length}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewspaperCoverage;