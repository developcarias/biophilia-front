import React from 'react';
import { LocalizedText } from '../types';
import { useI18n } from '../i18n';
import Editable from './Editable';

interface ContentBlockProps {
  title: LocalizedText;
  text: LocalizedText;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  basePath: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  title,
  text,
  imageUrl,
  imageAlt,
  imagePosition = 'left',
  basePath,
}) => {
  const { language } = useI18n();

  const imageEl = (
    <div className="w-full md:w-1/2 p-4">
      <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-xl object-cover w-full h-full" />
    </div>
  );

  const textEl = (
    <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-12 py-8">
      <div className="relative group">
        <Editable localizedText={title} basePath={`${basePath}.title`}>
          <h2 className="text-3xl font-bold text-brand-green-dark">{title[language]}</h2>
        </Editable>
      </div>
      <div className="relative group mt-4">
        <Editable localizedText={text} basePath={`${basePath}.text`} multiline>
          <p className="mt-4 text-lg leading-relaxed">{text[language]}</p>
        </Editable>
      </div>
    </div>
  );

  return (
    <section className="container mx-auto my-12">
      <div className={`flex flex-col md:flex-row items-center ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
        {imageEl}
        {textEl}
      </div>
    </section>
  );
};

export default ContentBlock;
