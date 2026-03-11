import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    id: 1,
    title: 'Creative Excellence',
    subtitle: 'Transforming Ideas Into Reality',
    description: 'Award-winning design and development solutions that drive business growth',
    imageUrl: 'https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MzE0MzQ0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-600/90 to-purple-600/90',
  },
  {
    id: 2,
    title: 'Digital Innovation',
    subtitle: 'Building the Future, Today',
    description: 'Cutting-edge technology meets beautiful design in every project',
    imageUrl: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczMTQ3NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-600/90 to-pink-600/90',
  },
  {
    id: 3,
    title: 'Strategic Vision',
    subtitle: 'Design That Delivers Results',
    description: 'Data-driven strategies combined with creative storytelling',
    imageUrl: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NzMxMTA2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-cyan-600/90 to-blue-600/90',
  },
];

export function SliderRevolution() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    arrows: false,
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-6">
              <div className="max-w-5xl mx-auto text-center">
                <AnimatePresence mode="wait">
                  {currentSlide === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl md:text-2xl text-white/90 mb-4 font-medium tracking-wide"
                      >
                        {slide.subtitle}
                      </motion.p>
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
                      >
                        {slide.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                      >
                        <button
                          onClick={() => {
                            const element = document.getElementById('work');
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-2xl"
                        >
                          Explore Projects
                        </button>
                        <button
                          onClick={() => {
                            const element = document.getElementById('contact');
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                        >
                          Get Started
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Custom Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index ? (
              <motion.div
                layoutId="activeSlide"
                className="w-12 h-3 rounded-full backdrop-blur-md bg-white border border-white/20"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            ) : (
              <Circle
                className="w-3 h-3 text-white/60 hover:text-white transition-colors fill-white/60 hover:fill-white"
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-sm font-medium tracking-wider">SCROLL</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}