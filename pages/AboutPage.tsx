

import React from 'react';
import { AboutPageContent, ValueItem, LocalizedText } from '../types';
import ContentBlock from '../components/ContentBlock';
import { useI18n } from '../i18n';
import PageBanner from '../components/PageBanner';
import LeafIcon from '../components/icons/LeafIcon';
import UsersIcon from '../components/icons/UsersIcon';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import BeakerIcon from '../components/icons/BeakerIcon';
import MegaphoneIcon from '../components/icons/MegaphoneIcon';
import MountainIcon from '../components/icons/MountainIcon';
import HandshakeIcon from '../components/icons/HandshakeIcon';
import EquityIcon from '../components/icons/EquityIcon';
import Editable from '../components/Editable';

interface AboutPageProps {
  content: AboutPageContent;
  valuesContent: {
    title: LocalizedText;
    items: ValueItem[];
  };
}

const iconMap: { [key: string]: React.FC<{className?: string}> } = {
  LeafIcon,
  UsersIcon,
  BookOpenIcon,
  BeakerIcon,
  MegaphoneIcon,
  MountainIcon,
  HandshakeIcon,
  EquityIcon,
};


const ValueCard: React.FC<{item: ValueItem}> = ({ item }) => {
  const { language } = useI18n();
  const IconComponent = iconMap[item.icon];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center h-full">
      {IconComponent && <IconComponent className="h-12 w-12 text-brand-accent mb-4" />}
      <h3 className="text-xl font-bold text-brand-green-dark mb-2">{item.title[language]}</h3>
      <p className="text-brand-gray flex-grow">{item.text[language]}</p>
    </div>
  )
}

const AboutPage: React.FC<AboutPageProps> = ({ content, valuesContent }) => {
  const { language } = useI18n();

  return (
    <>
      <PageBanner
        title={content.banner.title[language]}
        imageUrl={content.banner.imageUrl}
        basePath="aboutPage.banner.title"
        localizedText={content.banner.title}
      />
      
      {/* Our Story Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none text-brand-gray">
              <Editable localizedText={content.history.title} basePath="aboutPage.history.title">
                <h2 className="text-3xl font-bold text-brand-green-dark">{content.history.title[language]}</h2>
              </Editable>
              <Editable localizedText={content.history.text} basePath="aboutPage.history.text" multiline>
                <p className="whitespace-pre-line leading-relaxed">{content.history.text[language]}</p>
              </Editable>
              <Editable localizedText={content.biophiliaExplanation.title} basePath="aboutPage.biophiliaExplanation.title">
                <h3 className="text-2xl font-bold text-brand-green-dark pt-6">{content.biophiliaExplanation.title[language]}</h3>
              </Editable>
              <Editable localizedText={content.biophiliaExplanation.text} basePath="aboutPage.biophiliaExplanation.text" multiline>
                <p className="leading-relaxed">{content.biophiliaExplanation.text[language]}</p>
              </Editable>
            </div>
            <div>
              <img src={content.history.imageUrl} alt="Group of diverse people collaborating" className="rounded-lg shadow-xl object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission & Vision Section */}
      <div className="bg-brand-green-light py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Mission Card */}
                  <div className="relative p-8 md:p-12 rounded-lg shadow-2xl text-white overflow-hidden bg-cover bg-center flex flex-col justify-center min-h-[350px]" style={{backgroundImage: `url(${content.mission.imageUrl})`}}>
                      <div className="absolute inset-0 bg-brand-green-dark bg-opacity-70"></div>
                      <div className="relative z-10">
                        <Editable localizedText={content.mission.title} basePath="aboutPage.mission.title">
                          <h2 className="text-4xl font-extrabold mb-4">{content.mission.title[language]}</h2>
                        </Editable>
                        <Editable localizedText={content.mission.text} basePath="aboutPage.mission.text" multiline>
                          <p className="text-lg leading-relaxed">{content.mission.text[language]}</p>
                        </Editable>
                      </div>
                  </div>
                  {/* Vision Card */}
                  <div className="relative p-8 md:p-12 rounded-lg shadow-2xl text-white overflow-hidden bg-cover bg-center flex flex-col justify-center min-h-[350px]" style={{backgroundImage: `url(${content.vision.imageUrl})`}}>
                      <div className="absolute inset-0 bg-brand-green-dark bg-opacity-70"></div>
                      <div className="relative z-10">
                          <Editable localizedText={content.vision.title} basePath="aboutPage.vision.title">
                            <h2 className="text-4xl font-extrabold mb-4">{content.vision.title[language]}</h2>
                          </Editable>
                          <Editable localizedText={content.vision.text} basePath="aboutPage.vision.text" multiline>
                            <p className="text-lg leading-relaxed">{content.vision.text[language]}</p>
                          </Editable>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Our Work Section */}
      <div className="bg-white">
        <ContentBlock 
          title={content.work.title}
          text={content.work.text}
          imageUrl={content.work.imageUrl}
          imageAlt={content.work.imageAlt}
          imagePosition="left"
          basePath="aboutPage.work"
        />
      </div>


      {/* Values Section */}
      <div className="bg-brand-green-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Editable localizedText={valuesContent.title} basePath="homePage.values.title">
              <h2 className="text-4xl font-extrabold text-brand-green-dark mb-12">{valuesContent.title[language]}</h2>
            </Editable>
            <div className="flex flex-wrap justify-center -m-4">
              {valuesContent.items.map(item => (
                <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                  <ValueCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
