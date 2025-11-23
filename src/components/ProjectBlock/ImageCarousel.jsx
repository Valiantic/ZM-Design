import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Load all images from the projects folder using Vite's glob (eager)
const modules = import.meta.glob('../../assets/images/projects/*.{png,jpg,jpeg}', { eager: true });
const IMAGES = Object.keys(modules)
  .map((path) => {
    const fileName = path.split('/').pop();
    return { url: modules[path].default, alt: fileName };
  })
  .sort((a, b) => a.alt.localeCompare(b.alt));

// Helper: chunk array into groups of `size`
const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

const ImageCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = IMAGES;
  if (!images || images.length === 0) {
    return (
      <div className="w-full bg-black mt-20">
        <h2 className="text-3xl text-center font-semibold text-white px-8 py-6">
          No projects found
        </h2>
      </div>
    );
  }

  // Show 4 images per slide for a cleaner grid
  const perSlide = 4;
  const slides = chunk(images, perSlide);
  const totalSlides = slides.length;

  // Track mobile viewport to adjust UI (dots and chevron sizes)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mm = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mm.matches);
    update();
    mm.addEventListener?.('change', update);
    return () => mm.removeEventListener?.('change', update);
  }, []);

  const nextSlide = () => setSlideIndex((s) => (s + 1) % totalSlides);
  const prevSlide = () => setSlideIndex((s) => (s - 1 + totalSlides) % totalSlides);

  // Column spans for desktop layout (grid of 4 cols)
  // Use equal spans for 4 images so the grid aligns cleanly
  const mdSpanClasses = ['md:col-span-1', 'md:col-span-1', 'md:col-span-1', 'md:col-span-1'];

  return (
    <div className="w-full bg-black mt-20">
      {/* Title */}
      <h2
        className="text-5xl text-center font-semibold text-white px-8 py-6 font-['Poppins']"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        My <span className="text-amber-200 text-bold font-bold">Projects</span>
      </h2>

      {/* Main Image Container */}
      <div className="relative w-full">
        {/* Slide container */}
        <div className="w-full">
          {slides.map((slideImages, idx) => (
            <div
              key={idx}
              className={`${idx === slideIndex ? 'block' : 'hidden'} w-full px-2`}
            >
              {/* Responsive grid: constrain height on small screens so gallery isn't too tall */}
              <div className="max-h-48 sm:max-h-64 md:max-h-none overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {slideImages.map((img, i) => (
                  <div
                    key={img.alt + i}
                    className={`overflow-hidden rounded-md bg-gray-800 ${mdSpanClasses[i] ?? 'md:col-span-1'}`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {/* If slide has fewer than `perSlide` images, fill empty cells for consistent layout */}
                {Array.from({ length: perSlide - slideImages.length }).map((_, k) => (
                  <div key={`empty-${k}`} className="hidden md:block" />
                ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${isMobile ? 'p-1' : 'p-2'} rounded-full transition-colors hover:bg-gray-100`}
          style={{ backgroundColor: 'white' }}
          aria-label="Previous slide"
        >
          <ChevronLeft className={isMobile ? 'w-4 h-4' : 'w-5 sm:w-6'} style={{ color: 'black' }} />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-3 top-1/2 -translate-y-1/2 ${isMobile ? 'p-1' : 'p-2'} rounded-full transition-colors hover:bg-gray-100`}
          style={{ backgroundColor: 'white' }}
          aria-label="Next slide"
        >
          <ChevronRight className={isMobile ? 'w-4 h-4' : 'w-5 sm:w-6'} style={{ color: 'black' }} />
        </button>

      </div>

      {/* Dots — centered, white; show up to 5 dots on mobile */}
      <div className="flex justify-center items-center mt-6 gap-3">
        {
          (() => {
            const visibleCount = isMobile ? Math.min(5, totalSlides) : totalSlides;
            let start = Math.max(0, slideIndex - Math.floor(visibleCount / 2));
            if (start + visibleCount > totalSlides) start = Math.max(0, totalSlides - visibleCount);
            const dots = [];
            for (let j = 0; j < visibleCount; j++) {
              const idx = start + j;
              const isActive = idx === slideIndex;
              const inlineStyle = {
                backgroundColor: isActive ? '#ffffff' : 'rgba(255,255,255,0.85)',
                border: isActive ? '2px solid #000000' : '1px solid rgba(255,255,255,0.3)'
              };
              dots.push(
                <button
                  key={`dot-${idx}`}
                  onClick={() => setSlideIndex(idx)}
                  style={inlineStyle}
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full appearance-none outline-none"
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            }
            return dots;
          })()
        }
      </div>
    </div>
  );
};

export default ImageCarousel;