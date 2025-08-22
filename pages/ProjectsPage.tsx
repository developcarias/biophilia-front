

import React from 'react';
import { Project } from '../types';
import PageBanner from '../components/PageBanner';
import { useI18n, useTranslate } from '../i18n';

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-brand-green-light rounded-lg shadow-lg overflow-hidden">
                <img src={project.imageUrl} alt={project.imageAlt} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brand-green-dark mb-2">{project.title[language]}</h3>
                  <p className="text-brand-gray leading-relaxed">{project.description[language]}</p>
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