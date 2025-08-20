import React from 'react';

interface PageBannerProps {
  title: string;
  imageUrl: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative bg-cover bg-center h-64 text-white" style={{ backgroundImage: `url('${imageUrl}')` }}>
      <div className="absolute inset-0 bg-brand-green-dark bg-opacity-60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <div className="relative group">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
