

import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Project, ProjectsPageContent, UIText } from '../types';
import PageBanner from '../components/PageBanner';
import { useI18n } from '../i18n';
import Editable from '../components/Editable';

interface ProjectsPageProps {
  content: ProjectsPageContent;
  projects: Project[];
  uiText: UIText;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ content, projects, uiText }) => {
  const { language } = useI18n();

  return (
    <>
      <PageBanner
        title={content.banner.title[language]}
        imageUrl={content.banner.imageUrl}
        basePath="projectsPage.banner.title"
        localizedText={content.banner.title}
      />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Editable localizedText={content.intro} basePath="projectsPage.intro" multiline>
              <p className="text-xl text-brand-gray">{content.intro[language]}</p>
            </Editable>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 pt-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-brand-green-light rounded-lg shadow-lg flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="px-6 -mt-8">
                  <ReactRouterDOM.NavLink to={`/projects/${project.id}`} className="block rounded-lg shadow-xl group-hover:shadow-2xl overflow-hidden">
                    <img src={project.imageUrl} alt={project.imageAlt} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                  </ReactRouterDOM.NavLink>
                </div>
                <div className="p-6 pt-4 flex-grow flex flex-col">
                  <Editable localizedText={project.title} basePath={`projects.${index}.title`}>
                     <ReactRouterDOM.NavLink to={`/projects/${project.id}`}>
                        <h3 className="text-2xl font-bold text-brand-green-dark mb-2 hover:text-brand-accent transition-colors">{project.title[language]}</h3>
                     </ReactRouterDOM.NavLink>
                  </Editable>
                  <Editable localizedText={project.description} basePath={`projects.${index}.description`} multiline>
                    <p className="text-brand-gray leading-relaxed flex-grow">{project.description[language]}</p>
                  </Editable>
                   <div className="mt-4">
                      <ReactRouterDOM.NavLink to={`/projects/${project.id}`} className="font-bold text-brand-green hover:text-brand-accent transition-colors">
                        {uiText.learnMore[language]} &rarr;
                      </ReactRouterDOM.NavLink>
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