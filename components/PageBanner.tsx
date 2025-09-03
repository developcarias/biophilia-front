
import React from 'react';
import { LocalizedText } from '../types';
import Editable from './Editable';

interface PageBannerProps {
  title: string;
  imageUrl: string;
  basePath?: string;
  localizedText?: LocalizedText;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, imageUrl, basePath, localizedText }) => {
  const content = (
    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-lg">{title}</h1>
  );

  return (
    <div className="relative bg-cover bg-center h-64 text-white -mt-28" style={{ backgroundImage: `url('${imageUrl}')` }}>
      <div className="absolute inset-0 bg-brand-green-dark bg-opacity-60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center pt-28">
        <div className="relative group">
          {basePath && localizedText ? (
            <Editable basePath={basePath} localizedText={localizedText}>
              {content}
            </Editable>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
