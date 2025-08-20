import React from 'react';
import { PageContent } from '../types';
import ContentBlock from '../components/ContentBlock';
import { useI18n } from '../i18n';
import PageBanner from '../components/PageBanner';

interface AboutPageProps {
  content: PageContent['about'];
}

const AboutPage: React.FC<AboutPageProps> = ({ content }) => {
  const { language } = useI18n();

  return (
    <>
      <PageBanner
        title={content.title[language]}
        imageUrl="https://placehold.co/1920x1080/2e7d32/ffffff?text=About+Us"
      />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="relative group mt-4 max-w-3xl mx-auto">
              <p className="mt-4 text-xl text-brand-gray">{content.mainText[language]}</p>
            </div>
          </div>
          
          <ContentBlock 
            title={content.mission.title}
            text={content.mission.text}
            imageUrl={content.mission.imageUrl}
            imageAlt={content.mission.imageAlt}
            imagePosition="right"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;