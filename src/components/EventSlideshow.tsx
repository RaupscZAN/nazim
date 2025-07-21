import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin, X, ZoomIn } from 'lucide-react';
import { Event } from '../data/mediaData';

interface EventSlideshowProps {
  event: Event;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

const EventSlideshow: React.FC<EventSlideshowProps> = ({ event, isExpanded = false, onToggleExpand }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % event.photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + event.photos.length) % event.photos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'Escape' && isExpanded && onToggleExpand) {
      onToggleExpand();
    }
  };

  React.useEffect(() => {
    if (isExpanded) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded, currentSlide]);

  const currentPhoto = event.photos[currentSlide];

  if (!isExpanded) {
    // Compact view
    return (
      <motion.div
        layout
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
        onClick={onToggleExpand}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={event.photos[0]?.path || ''}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23e2e8f0"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="16" fill="%2364748b" text-anchor="middle"%3ENo image available%3C/text%3E%3C/svg%3E';
            }}
          />
          {/* Strong gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Text content with improved contrast */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="backdrop-blur-sm bg-black/40 rounded-md p-2.5">
              <h3 className="text-base font-semibold mb-1 text-white drop-shadow">
                {event.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="flex items-center gap-1 text-white/90">
                  <Calendar size={12} />
                  <span>{event.date}</span>
                </span>
                <span className="flex items-center gap-1 text-white/90">
                  <MapPin size={12} />
                  <span>{event.location}</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Hover indicator with better contrast */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn size={20} className="text-white" />
          </div>
          
          {/* Photo count badge with improved readability */}
          {event.photos.length > 1 && (
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
              <span className="text-white text-xs font-medium">
                {event.photos.length} photos
              </span>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // Expanded slideshow view
  return (
    <motion.div
      layout
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Close button */}
        <button
          onClick={onToggleExpand}
          className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm hover:bg-black/80 text-white p-3 rounded-full transition-all shadow-lg"
        >
          <X size={24} />
        </button>

        {/* Main content area - Clean image display */}
        <div className="relative bg-black">
          {/* Main image */}
          <div className="relative h-[90vh] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={currentPhoto.path}
                  alt={currentPhoto.title}
                  className="max-w-full max-h-full object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23334155"/%3E%3Ctext x="400" y="300" font-family="Arial" font-size="24" fill="%2394a3b8" text-anchor="middle"%3EImage not available%3C/text%3E%3C/svg%3E';
                  }}
                />
              </AnimatePresence>

              {/* Navigation buttons */}
              {event.photos.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm hover:bg-black/80 text-white p-3 rounded-full transition-all shadow-lg"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm hover:bg-black/80 text-white p-3 rounded-full transition-all shadow-lg"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
          </div>

          {/* Thumbnail navigation */}
          {event.photos.length > 1 && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
              <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                {event.photos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => goToSlide(index)}
                    className={`relative flex-shrink-0 w-16 h-16 rounded overflow-hidden transition-all ${
                      index === currentSlide
                        ? 'ring-2 ring-white scale-110'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.path}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Crect width="80" height="80" fill="%23475569"/%3E%3C/svg%3E';
                      }}
                    />
                  </button>
                ))}
              </div>
              <div className="text-center mt-2">
                <span className="text-white text-xs font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full inline-block">
                  {currentSlide + 1} / {event.photos.length}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

    </motion.div>
  );
};

export default EventSlideshow;