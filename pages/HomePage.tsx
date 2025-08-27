
import React from 'react';
import { PageContent, ValueItem, AlliancePartner } from '../types';
import Hero from '../components/Hero';
import ContentBlock from '../components/ContentBlock';
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

interface HomePageProps {
  content: PageContent;
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

const SectionWithCards: React.FC<{title: string, items: ValueItem[]}> = ({ title, items }) => (
  <div className="bg-brand-green-light py-16 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-brand-green-dark mb-12">{title}</h2>
        <div className="flex flex-wrap justify-center -m-4">
          {items.map(item => (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <ValueCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AlliancesSection: React.FC<{title: string, description: string, partners: AlliancePartner[]}> = ({ title, description, partners }) => (
    <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-brand-green-dark mb-4">{title}</h2>
                <p className="text-lg text-brand-gray">{description}</p>
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

const HomePage: React.FC<HomePageProps> = ({ content }) => {
  const { language } = useI18n();
  const latestProjects = content.projects.slice(0, 4);

  return (
    <>
      <Hero 
        slides={content.hero}
      />
      
      <div className="bg-white pt-12">
        {content.home.length > 0 && (
          <ContentBlock 
            key={content.home[0].id}
            title={content.home[0].title}
            text={content.home[0].text}
            imageUrl={content.home[0].imageUrl}
            imageAlt={content.home[0].imageAlt}
            imagePosition={'left'}
          />
        )}
      </div>

      <SectionWithCards 
        title={content.actionLines.title[language]} 
        items={content.actionLines.items} 
      />
      
      {latestProjects.length > 0 && (
        <LatestProjects projects={latestProjects} />
      )}
      
      <ParallaxSection 
        title={{ en: 'Make a Difference', es: 'Haz la Diferencia' }}
        text={{ en: 'Your generous contribution helps us continue our work of connecting communities with nature and building a sustainable future.', es: 'Tu generosa contribución nos ayuda a continuar nuestro trabajo de conectar comunidades con la naturaleza y construir un futuro sostenible.' }}
        imageUrl={'https://biophiliaweb.org/images/parallax/1.jpg'}
      />

      <SectionWithCards 
        title={content.about.values.title[language]} 
        items={content.about.values.items} 
      />

      <AlliancesSection 
        title={content.alliances.title[language]}
        description={content.alliances.description[language]}
        partners={content.alliances.partners}
      />
      
      <ParallaxSection 
        title={{ en: 'Join our EcoVolunteer Network', es: 'Únete a nuestra Red de EcoVoluntarios' }}
        text={{ en: 'Become part of the change. Volunteer your time and skills to help restore ecosystems and educate our communities.', es: 'Sé parte del cambio. Ofrece tu tiempo y habilidades como voluntario para ayudar a restaurar ecosistemas y educar a nuestras comunidades.' }}
        imageUrl={'https://biophiliaweb.org/images/parallax/2.jpg'}
      />
    </>
  );
};

export default HomePage;
