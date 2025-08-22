

import React, { useState, useEffect, useCallback } from 'react';
import { useI18n, useTranslate } from '../i18n';
import { HeroSlide } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface HeroProps {
  slides: HeroSlide[];
}

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const { language } = useI18n();
  const t = useTranslate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);


  return (
    <div className="group relative h-screen w-full overflow-hidden">
        {slides.map((slide, slideIndex) => (
            <div
                key={slide.id}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${slideIndex === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{ backgroundImage: `url('${slide.imageUrl}')` }}
            >
                <div className="absolute inset-0 bg-brand-green-dark bg-opacity-60"></div>
            </div>
        ))}

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white z-20 pt-20">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">{slides[currentIndex].title[language]}</h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">{slides[currentIndex].subtitle[language]}</p>
            <div className="mt-8">
            <a href="#/donate" className="bg-brand-accent text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-brand-accent/90 transition-transform transform hover:scale-105 shadow-lg">
                {t('supportMission')}
            </a>
            </div>
        </div>

        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 p-2 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeftIcon className="h-8 w-8" />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 p-2 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRightIcon className="h-8 w-8" />
        </button>

        <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center space-x-2">
            {slides.map((_, slideIndex) => (
                <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`h-3 w-3 rounded-full transition-colors ${slideIndex === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                ></button>
            ))}
        </div>
    </div>
  );
};

export default Hero;