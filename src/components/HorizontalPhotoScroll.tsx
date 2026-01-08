import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  path: string;
  title: string;
  description?: string;
}

interface HorizontalPhotoScrollProps {
  photos: Photo[];
  title: string;
  period: string;
}

const HorizontalPhotoScroll: React.FC<HorizontalPhotoScrollProps> = ({
  photos,
  title,
  period,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative py-12 bg-gradient-to-r from-slate-900 via-burgundy-900 to-slate-900">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-400 text-sm font-bold uppercase tracking-wider">
            {period}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">
            {title}
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 
            text-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 
            text-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        {/* Photos Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex-shrink-0 w-80 md:w-96 group/card cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Photo */}
                <img
                  src={photo.path}
                  alt={photo.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover/card:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                  opacity-60 group-hover/card:opacity-80 transition-opacity duration-300"
                />

                {/* Text Overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 
                  group-hover/card:translate-y-0 transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                  {photo.description && (
                    <p
                      className="text-sm text-white/80 opacity-0 group-hover/card:opacity-100 
                      transition-opacity duration-300 line-clamp-2"
                    >
                      {photo.description}
                    </p>
                  )}
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                    -skew-x-12 translate-x-[-200%] group-hover/card:translate-x-[200%] transition-transform duration-1000"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-6">
        <p className="text-white/60 text-sm">
          ← Scroll horizontally to explore →
        </p>
      </div>
    </div>
  );
};

export default HorizontalPhotoScroll;
