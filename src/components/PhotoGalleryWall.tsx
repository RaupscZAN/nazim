import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface Photo {
  path: string;
  title: string;
  description?: string;
}

interface PhotoGalleryWallProps {
  photos: Photo[];
  title: string;
  description?: string;
}

const PhotoGalleryWall: React.FC<PhotoGalleryWallProps> = ({
  photos,
  title,
  description,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative group cursor-pointer aspect-square"
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Photo Container */}
                <div
                  className="relative w-full h-full overflow-hidden rounded-xl shadow-lg 
                  group-hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <img
                    src={photo.path}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 
                      group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm line-clamp-2">
                        {photo.title}
                      </p>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div
                    className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ZoomIn size={18} className="text-white" />
                  </div>

                  {/* Border Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-transparent 
                    group-hover:border-gold-400 transition-colors duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 
                rounded-full transition-colors duration-200"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -20 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedPhoto.path}
                  alt={selectedPhoto.title}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedPhoto.title}
                </h3>
                {selectedPhoto.description && (
                  <p className="text-white/80 max-w-2xl mx-auto">
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

export default PhotoGalleryWall;
