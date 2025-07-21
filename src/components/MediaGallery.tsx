import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn } from 'lucide-react';
import { MediaPhoto } from '../data/mediaData';

interface MediaGalleryProps {
  photos: MediaPhoto[];
  title?: string;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ photos, title }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MediaPhoto | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const openLightbox = (photo: MediaPhoto, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    setSelectedIndex(-1);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedIndex === -1) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = selectedIndex > 0 ? selectedIndex - 1 : photos.length - 1;
    } else {
      newIndex = selectedIndex < photos.length - 1 ? selectedIndex + 1 : 0;
    }
    
    setSelectedPhoto(photos[newIndex]);
    setSelectedIndex(newIndex);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigatePhoto('prev');
    if (e.key === 'ArrowRight') navigatePhoto('next');
  };

  React.useEffect(() => {
    if (selectedPhoto) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhoto, selectedIndex]);

  return (
    <>
      <div className="mb-8">
        {title && (
          <h4 className="text-xl font-serif font-bold mb-4 text-navy-800">{title}</h4>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              onClick={() => openLightbox(photo, index)}
            >
              <div className="relative w-full pb-[75%] bg-slate-200">
                <img
                  src={photo.path}
                  alt={photo.description}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23e2e8f0"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="16" fill="%2364748b" text-anchor="middle"%3EImage not available%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="backdrop-blur-sm bg-black/40 rounded px-2 py-1.5">
                    <p className="text-white text-xs font-medium line-clamp-2">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 rounded-full p-2">
                  <ZoomIn size={20} className="text-navy-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-6xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Controls */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button
                  onClick={() => window.open(selectedPhoto.path, '_blank')}
                  className="bg-white/90 hover:bg-white text-navy-800 p-2 rounded-full transition-colors"
                  title="Download"
                >
                  <Download size={20} />
                </button>
                <button
                  onClick={closeLightbox}
                  className="bg-white/90 hover:bg-white text-navy-800 p-2 rounded-full transition-colors"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation */}
              <button
                onClick={() => navigatePhoto('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-navy-800 p-2 rounded-full transition-colors z-10"
                title="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigatePhoto('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-navy-800 p-2 rounded-full transition-colors z-10"
                title="Next"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <img
                src={selectedPhoto.path}
                alt={selectedPhoto.description}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23334155"/%3E%3Ctext x="400" y="300" font-family="Arial" font-size="24" fill="%2394a3b8" text-anchor="middle"%3EImage not available%3C/text%3E%3C/svg%3E';
                }}
              />

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-white text-lg">{selectedPhoto.description}</p>
                <p className="text-white/70 text-sm mt-1">
                  {selectedIndex + 1} of {photos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MediaGallery;