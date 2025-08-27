

import React from 'react';
import { Project, LocalizedText } from '../types';
import PageBanner from '../components/PageBanner';
import { useI18n, useTranslate } from '../i18n';

interface ProjectsPageProps {
  intro: LocalizedText;
  projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ intro, projects }) => {
  const { language } = useI18n();
  const t = useTranslate();

  return (
    <>
      <PageBanner
        title={t('projectsPageTitle')}
        imageUrl="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1920&h=1080&fit=crop"
      />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-brand-gray">{intro[language]}</p>
          </div>
          <div className="flex flex-wrap justify-center -m-6">
            {projects.map((project) => (
              <div key={project.id} className="w-full md:w-1/2 p-6">
                <div className="bg-brand-green-light rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-2xl h-full">
                  <img src={project.imageUrl} alt={project.imageAlt} className="w-full h-64 object-cover" />
                  <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-bold text-brand-green-dark mb-2">{project.title[language]}</h3>
                    <p className="text-brand-gray leading-relaxed">{project.description[language]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;