

import React from 'react';
import { TeamMember } from '../types';
import PageBanner from '../components/PageBanner';
import { useI18n, useTranslate } from '../i18n';

interface TeamPageProps {
  team: TeamMember[];
}

const TeamPage: React.FC<TeamPageProps> = ({ team }) => {
  const { language } = useI18n();
  const t = useTranslate();

  return (
    <>
      <PageBanner
        title={t('teamPageTitle')}
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&h=1080&fit=crop"
      />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {team.map((member) => (
              <div key={member.id} className="bg-brand-green-light p-8 rounded-lg shadow-md">
                <img src={member.imageUrl} alt={member.imageAlt} className="w-40 h-40 rounded-full mx-auto object-cover mb-4 border-4 border-white shadow-lg" />
                <h3 className="text-xl font-bold text-brand-green-dark">{member.name}</h3>
                <p className="text-brand-accent font-semibold mb-2">{member.role[language]}</p>
                <p className="text-brand-gray text-sm">{member.bio[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;