

import React, { useState, useEffect } from 'react';
// FIX: Imported 'LocalizedText' type to resolve "Cannot find name" errors.
import { HomePageContent, ValueItem, AlliancePartner, Project, UIText, LocalizedText } from '../types';
import Hero from '../components/Hero';
import ParallaxSection from '../components/ParallaxSection';
import LatestProjects from '../components/LatestProjects';
import { useI18n } from '../i18n';
import LeafIcon from '../components/icons/LeafIcon';
import UsersIcon from '../components/icons/UsersIcon';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import BeakerIcon from '../components/icons/BeakerIcon';
import MegaphoneIcon from '../components/icons/MegaphoneIcon';
import HandshakeIcon from '../components/icons/HandshakeIcon';
import SustainabilityIcon from '../components/icons/SustainabilityIcon';
import EquityIcon from '../components/icons/EquityIcon';
import Editable from '../components/Editable';

interface HomePageProps {
  content: HomePageContent;
  uiText: UIText;
  projects: Project[];
}

const iconMap: { [key: string]: React.FC<{className?: string}> } = {
  LeafIcon,
  UsersIcon,
  BookOpenIcon,
  BeakerIcon,
  MegaphoneIcon,
  HandshakeIcon,
  SustainabilityIcon,
  EquityIcon,
};

const ValueCard: React.FC<{item: ValueItem; basePath: string}> = ({ item, basePath }) => {
  const { language } = useI18n();
  const IconComponent = iconMap[item.icon];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center h-full">
      {IconComponent && <IconComponent className="h-12 w-12 text-brand-accent mb-4" />}
      <Editable localizedText={item.title} basePath={`${basePath}.title`}>
        <h3 className="text-xl font-bold text-brand-green-dark mb-2">{item.title[language]}</h3>
      </Editable>
      <Editable localizedText={item.text} basePath={`${basePath}.text`} multiline>
        <p className="text-brand-gray flex-grow">{item.text[language]}</p>
      </Editable>
    </div>
  )
}

const ActionLineCard: React.FC<{item: ValueItem; basePath: string}> = ({ item, basePath }) => {
    const { language } = useI18n();
    return (
        <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl flex flex-col text-center h-full p-8 items-center justify-start">
            <img 
              src={item.imageUrl} 
              alt={item.title[language]} 
              className="w-56 h-56 object-cover rounded-full mb-6 shadow-xl border-4 border-green-100 -mt-28" 
            />
            <Editable localizedText={item.title} basePath={`${basePath}.title`}>
              <h3 className="text-xl font-bold text-brand-green-dark mb-2">{item.title[language]}</h3>
            </Editable>
            <Editable localizedText={item.text} basePath={`${basePath}.text`} multiline>
              <p className="text-brand-gray flex-grow">{item.text[language]}</p>
            </Editable>
        </div>
    );
}


const SectionWithCards: React.FC<{title: LocalizedText; items: ValueItem[]; basePath: string}> = ({ title, items, basePath }) => {
  const { language } = useI18n();
  return (
    <div className="bg-brand-green-light py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Editable localizedText={title} basePath={`${basePath}.title`}>
            <h2 className="text-4xl font-extrabold text-brand-green-dark mb-12">{title[language]}</h2>
          </Editable>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div key={item.id} className="p-0">
                <ValueCard item={item} basePath={`${basePath}.items.${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AlliancesSection: React.FC<{title: LocalizedText; description: LocalizedText; partners: AlliancePartner[], basePath: string}> = ({ title, description, partners, basePath }) => {
  const { language } = useI18n();
  return (
    <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <Editable localizedText={title} basePath={`${basePath}.title`}>
                  <h2 className="text-4xl font-extrabold text-brand-green-dark mb-4">{title[language]}</h2>
                </Editable>
                <Editable localizedText={description} basePath={`${basePath}.description`} multiline>
                  <p className="text-lg text-brand-gray">{description[language]}</p>
                </Editable>
            </div>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-8 lg:gap-x-16">
                {partners.map(partner => (
                    <div key={partner.id} className="flex justify-center" title={partner.name}>
                        <img className="h-16 lg:h-20 object-contain" src={partner.logoUrl} alt={partner.name} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

const HomePage: React.FC<HomePageProps> = ({ content, uiText, projects }) => {
  const { language } = useI18n();

  const projectOrder = ['project_forest', 'project_agriculture', 'project_turtles', 'project_youth'];
  const projectsById = new Map(projects.map(p => [p.id, p]));
  const latestProjects = projectOrder.map(id => projectsById.get(id)).filter(Boolean) as Project[];

  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsWelcomeVisible(true);
      } else {
        setIsWelcomeVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Hero 
        slides={content.heroSlides}
        uiText={uiText}
      />
      
      {content.welcome && (
        <div className={`relative z-10 -mt-[1px] transition-all duration-700 ease-in-out ${isWelcomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transform: `translateY(-${isWelcomeVisible ? '2rem' : '0'})` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 lg:p-12">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="relative">
                  <img
                    className="rounded-lg shadow-2xl w-full object-cover"
                    src={content.welcome.imageUrl}
                    alt={content.welcome.imageAlt}
                  />
                </div>
                
                <div className="mt-8 lg:mt-0 lg:-ml-16 relative">
                  <div className="bg-brand-green-light p-6 md:p-8 rounded-lg shadow-xl border border-gray-200">
                      <h2 className="text-3xl md:text-4xl text-brand-green-dark mb-4">
                        <Editable localizedText={content.welcome.titlePart1} basePath="homePage.welcome.titlePart1">
                          <span className="font-normal">{content.welcome.titlePart1[language]}</span>
                        </Editable>
                          <br />
                        <Editable localizedText={content.welcome.titlePart2} basePath="homePage.welcome.titlePart2">
                          <span className="font-extrabold">{content.welcome.titlePart2[language]}</span>
                        </Editable>
                      </h2>
                      <Editable localizedText={content.welcome.text} basePath="homePage.welcome.text" multiline>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            {content.welcome.text[language]}
                        </p>
                      </Editable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-brand-green-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <Editable localizedText={content.actionLines.title} basePath="homePage.actionLines.title">
                  <h2 className="text-4xl font-extrabold text-brand-green-dark mb-12">{content.actionLines.title[language]}</h2>
                </Editable>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-28 sm:gap-y-32 pt-24">
                    {content.actionLines.items.map((item, index) => (
                        <ActionLineCard item={item} key={item.id} basePath={`homePage.actionLines.items.${index}`} />
                    ))}
                </div>
            </div>
        </div>
      </div>
      
      {latestProjects.length > 0 && (
        <LatestProjects 
          title={content.latestProjects.title}
          subtitle={content.latestProjects.subtitle}
          projects={latestProjects}
          uiText={uiText} 
        />
      )}
      
      <ParallaxSection 
        title={content.parallax1.title}
        text={content.parallax1.text}
        imageUrl={content.parallax1.imageUrl}
        uiText={uiText}
        basePath="homePage.parallax1"
      />

      <SectionWithCards 
        title={content.values.title} 
        items={content.values.items} 
        basePath="homePage.values"
      />

      <AlliancesSection 
        title={content.alliances.title}
        description={content.alliances.description}
        partners={content.alliances.partners}
        basePath="homePage.alliances"
      />
      
      <ParallaxSection 
        title={content.parallax2.title}
        text={content.parallax2.text}
        imageUrl={content.parallax2.imageUrl}
        uiText={uiText}
        basePath="homePage.parallax2"
      />
    </>
  );
};

export default HomePage;