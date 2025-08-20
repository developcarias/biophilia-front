import React from 'react';
import { useI18n, useTranslate } from '../i18n';
import { LocalizedText } from '../types';

interface HeroProps {
  title: LocalizedText;
  subtitle: LocalizedText;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const { language } = useI18n();
  const t = useTranslate();

  return (
    <div className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url('https://placehold.co/1920x1080/004d40/ffffff?text=Biophilia')` }}>
      <div className="absolute inset-0 bg-brand-green-dark bg-opacity-60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <div className="relative group">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">{title[language]}</h1>
        </div>
        <div className="relative group mt-4">
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">{subtitle[language]}</p>
        </div>
        <div className="mt-8">
          <a href="#/donate" className="bg-brand-accent text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-brand-accent/90 transition-transform transform hover:scale-105 shadow-lg">
            {t('supportMission')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;