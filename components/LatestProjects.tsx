import React from 'react';
import { Project } from '../types';
import { useI18n, useTranslate } from '../i18n';
import { NavLink } from 'react-router-dom';

interface LatestProjectsProps {
  projects: Project[];
}

const LatestProjects: React.FC<LatestProjectsProps> = ({ projects }) => {
  const { language } = useI18n();
  const t = useTranslate();

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-green-dark">{t('latestWorkTitle')}</h2>
          <p className="mt-4 text-lg text-brand-gray">{t('latestWorkSubtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-brand-green-light rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-56">
                <img src={project.imageUrl} alt={project.imageAlt} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 h-14 overflow-hidden">{project.title[language]}</h3>
                <p className="text-brand-gray leading-relaxed text-sm flex-grow h-24 overflow-hidden">{project.description[language]}</p>
                <div className="mt-4">
                  <NavLink to="/projects" className="font-bold text-brand-green hover:text-brand-accent transition-colors">
                    {t('learnMore')} &rarr;
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        { projects.length > 0 && (
            <div className="text-center mt-12">
                <NavLink to="/projects" className="bg-brand-accent text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-brand-accent/90 transition-transform transform hover:scale-105 shadow-lg">
                    {t('viewAllProjects')}
                </NavLink>
            </div>
        )}
      </div>
    </div>
  );
};

export default LatestProjects;
