import React from 'react';
import { PageContent } from '../types';
import Hero from '../components/Hero';
import ContentBlock from '../components/ContentBlock';

interface HomePageProps {
  content: PageContent;
}

const HomePage: React.FC<HomePageProps> = ({ content }) => {
  return (
    <>
      <Hero 
        title={content.hero.title}
        subtitle={content.hero.subtitle}
      />
      <div className="bg-white">
        {content.home.map((block, index) => (
          <ContentBlock 
            key={block.id}
            title={block.title}
            text={block.text}
            imageUrl={block.imageUrl}
            imageAlt={block.imageAlt}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
