import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface Photo {
  path: string;
  title: string;
  description?: string;
}

interface TimelineItemWithPhotosProps {
  year: string;
  period: string;
  title: string;
  organization?: string;
  location?: string;
  description: string;
  significance?: string;
  photos: Photo[];
  type: "career" | "education" | "award" | "event" | "initiative" | "milestone";
  current?: boolean;
  isEven: boolean;
}

const TimelineItemWithPhotos: React.FC<TimelineItemWithPhotosProps> = ({
  year,
  period,
  title,
  organization,
  location,
  description,
  significance,
  photos,
  type,
  current,
  isEven,
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const getTypeColor = () => {
    switch (type) {
      case "career":
        return {
          bg: "bg-burgundy-600",
          border: "border-burgundy-600",
          text: "text-burgundy-600",
          gradient: "from-burgundy-500 to-burgundy-700",
        };
      case "education":
        return {
          bg: "bg-navy-600",
          border: "border-navy-600",
          text: "text-navy-600",
          gradient: "from-navy-500 to-navy-700",
        };
      case "award":
        return {
          bg: "bg-gold-500",
          border: "border-gold-500",
          text: "text-gold-500",
          gradient: "from-gold-400 to-gold-600",
        };
      case "event":
        return {
          bg: "bg-purple-600",
          border: "border-purple-600",
          text: "text-purple-600",
          gradient: "from-purple-500 to-purple-700",
        };
      case "initiative":
        return {
          bg: "bg-emerald-600",
          border: "border-emerald-600",
          text: "text-emerald-600",
          gradient: "from-emerald-500 to-emerald-700",
        };
      case "milestone":
        return {
          bg: "bg-blue-600",
          border: "border-blue-600",
          text: "text-blue-600",
          gradient: "from-blue-500 to-blue-700",
        };
      default:
        return {
          bg: "bg-slate-600",
          border: "border-slate-600",
          text: "text-slate-600",
          gradient: "from-slate-500 to-slate-700",
        };
    }
  };

  const colors = getTypeColor();
  const hasPhotos = photos && photos.length > 0;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-16"
      >
        {/* Timeline Content Container */}
        <div
          className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start`}
        >
          {/* Text Content Side */}
          <div className="flex-1">
            <div
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border-l-4 ${colors.border}`}
            >
              {/* Year Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${colors.gradient} text-white text-sm font-bold rounded-full shadow-md`}
                >
                  {year}
                </span>
                <span className="text-slate-500 text-sm font-medium">
                  {period}
                </span>
                {current && (
                  <span className="px-3 py-1 bg-gold-100 text-gold-700 text-xs font-bold rounded-full uppercase animate-pulse">
                    Current
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                {title}
              </h3>

              {/* Organization */}
              {organization && (
                <p className={`font-semibold mb-3 ${colors.text} text-lg`}>
                  {organization}
                  {location && (
                    <span className="text-slate-500 text-sm ml-2">
                      • {location}
                    </span>
                  )}
                </p>
              )}

              {/* Description */}
              <p className="text-slate-700 mb-4 leading-relaxed text-base">
                {description}
              </p>

              {/* Significance */}
              {significance && (
                <div
                  className={`mt-4 p-4 bg-slate-50 rounded-lg border-l-2 ${colors.border}`}
                >
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">Impact:</strong>{" "}
                    {significance}
                  </p>
                </div>
              )}

              {/* Photo Count Indicator */}
              {hasPhotos && (
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <ZoomIn size={16} />
                  <span>
                    {photos.length} photo{photos.length > 1 ? "s" : ""}{" "}
                    available
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Photo Carousel Side */}
          {hasPhotos && (
            <div className="flex-1">
              <div className="relative group">
                {/* Main Photo Display */}
                <div
                  className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                  onClick={() => setSelectedPhoto(photos[currentPhotoIndex])}
                >
                  <motion.img
                    key={currentPhotoIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={photos[currentPhotoIndex].path}
                    alt={photos[currentPhotoIndex].title}
                    className="w-full h-64 md:h-80 object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Photo Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-bold text-lg mb-1">
                      {photos[currentPhotoIndex].title}
                    </p>
                    {photos[currentPhotoIndex].description && (
                      <p className="text-sm text-white/80 line-clamp-2">
                        {photos[currentPhotoIndex].description}
                      </p>
                    )}
                  </div>

                  {/* Zoom Hint */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>

                {/* Navigation Arrows (if multiple photos) */}
                {photos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Photo Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentPhotoIndex + 1} / {photos.length}
                    </div>
                  </>
                )}

                {/* Thumbnail Strip (if multiple photos) */}
                {photos.length > 1 && (
                  <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                    {photos.map((photo, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPhotoIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentPhotoIndex
                            ? `${colors.border} scale-110`
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={photo.path}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Full-Screen Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.path}
                alt={selectedPhoto.title}
                className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedPhoto.title}
                </h3>
                {selectedPhoto.description && (
                  <p className="text-white/80 max-w-3xl mx-auto">
                    {selectedPhoto.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TimelineItemWithPhotos;
