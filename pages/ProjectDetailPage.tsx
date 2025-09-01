
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Project, ProjectDetailPageContent } from '../types';
import { useI18n } from '../i18n';
import PageBanner from '../components/PageBanner';
import Editable from '../components/Editable';

interface ProjectDetailPageProps {
  projects: Project[];
  content: ProjectDetailPageContent;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projects, content }) => {
  const { projectId } = ReactRouterDOM.useParams<{ projectId: string }>();
  const { language } = useI18n();
  const project = projects.find(p => p.id === projectId);
  const projectIndex = projects.findIndex(p => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <ReactRouterDOM.NavLink to="/projects" className="text-brand-green hover:underline mt-4 inline-block">
          Back to Projects
        </ReactRouterDOM.NavLink>
      </div>
    );
  }

  const basePath = `projects.${projectIndex}`;

  return (
    <>
      <PageBanner
        title={project.title[language]}
        imageUrl={project.detailImageUrl}
        basePath={`${basePath}.title`}
        localizedText={project.title}
      />
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Editable localizedText={project.details} basePath={`${basePath}.details`} multiline>
              <div className="prose lg:prose-lg max-w-none text-brand-gray whitespace-pre-line leading-relaxed">
                {project.details[language]}
              </div>
            </Editable>

            <div className="mt-12 text-center">
              <ReactRouterDOM.NavLink
                to="/projects"
                className="bg-brand-accent text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-brand-accent/90 transition-transform transform hover:scale-105 shadow-lg"
              >
                {content.backToProjects[language]}
              </ReactRouterDOM.NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
