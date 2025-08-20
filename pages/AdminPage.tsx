import React, { useState, useEffect } from 'react';
import { PageContent, Project, TeamMember, BlogPost } from '../types';
import { useTranslate, TranslationKey } from '../i18n';
import { produce } from 'immer';
import PageBanner from '../components/PageBanner';

interface AdminPageProps {
  content: PageContent;
  onUpdateContent: (newContent: PageContent) => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ content, onUpdateContent }) => {
  const [formData, setFormData] = useState<PageContent>(JSON.parse(JSON.stringify(content)));
  const [showSuccess, setShowSuccess] = useState(false);
  const t = useTranslate();

  useEffect(() => {
    setFormData(JSON.parse(JSON.stringify(content)));
  }, [content]);

  const handleInputChange = (path: string, value: string) => {
    setFormData(produce(draft => {
      const keys = path.split('.');
      let current: any = draft;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
    }));
  };
  
  const handleAddItem = (path: 'projects' | 'team' | 'blog') => {
    let newItem: Project | TeamMember | BlogPost;
    const id = `new_${Date.now()}`;

    switch (path) {
      case 'projects':
        newItem = { id, title: { en: '', es: '' }, description: { en: '', es: '' }, imageUrl: '', imageAlt: '' };
        break;
      case 'team':
        newItem = { id, name: '', role: { en: '', es: '' }, bio: { en: '', es: '' }, imageUrl: '', imageAlt: '' };
        break;
      case 'blog':
        newItem = { id, slug: '', title: { en: '', es: '' }, author: '', date: '', summary: { en: '', es: '' }, content: { en: '', es: '' }, imageUrl: '', imageAlt: '' };
        break;
    }

    setFormData(produce(draft => {
      draft[path].push(newItem as any);
    }));
  };

  const handleRemoveItem = (path: 'projects' | 'team' | 'blog', index: number) => {
    setFormData(produce(draft => {
      draft[path].splice(index, 1);
    }));
  };


  const handleSave = () => {
    onUpdateContent(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    window.scrollTo(0, 0);
  };

  const handleDiscard = () => {
    setFormData(JSON.parse(JSON.stringify(content)));
  };

  const renderTextField = (labelKey: TranslationKey, path: string, isTextarea: boolean = false) => {
    const keys = path.split('.');
    let value = formData as any;
    for (const key of keys) {
      if (value === undefined) {
        value = '';
        break;
      }
      value = value[key];
    }

    const InputComponent = isTextarea ? 'textarea' : 'input';

    return (
      <div className="mb-4">
        <label className="block text-brand-gray text-sm font-bold mb-2">{t(labelKey)}</label>
        <InputComponent
          type="text"
          value={value}
          onChange={(e) => handleInputChange(path, e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-brand-gray leading-tight focus:outline-none focus:shadow-outline bg-white"
          rows={isTextarea ? 5 : undefined}
        />
      </div>
    );
  };

  return (
    <>
      <PageBanner
        title={t('adminPageBannerTitle')}
        imageUrl="https://placehold.co/1920x1080/4a5568/ffffff?text=Admin"
      />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center space-x-4 mb-8 sticky top-[136px] bg-white py-4 z-10 border-b">
            <button onClick={handleSave} className="bg-brand-green-dark hover:bg-brand-green-dark/90 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">
              {t('saveChanges')}
            </button>
            <button onClick={handleDiscard} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">
              {t('discardChanges')}
            </button>
            {showSuccess && (
              <div className="bg-brand-accent text-white font-bold py-2 px-4 rounded-lg">
                {t('changesSaved')}
              </div>
            )}
          </div>

          <div className="bg-brand-green-light p-6 rounded-lg mb-8 shadow-md">
            <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionHero')}</h2>
            {renderTextField('titleEn', 'hero.title.en')}
            {renderTextField('titleEs', 'hero.title.es')}
            {renderTextField('subtitleEn', 'hero.subtitle.en', true)}
            {renderTextField('subtitleEs', 'hero.subtitle.es', true)}
          </div>

          <div className="bg-brand-green-light p-6 rounded-lg mb-8 shadow-md">
            <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionHome')}</h2>
            {formData.home.map((block, index) => (
              <div key={block.id} className="border-t pt-4 mt-4 first:border-t-0 first:pt-0 first:mt-0">
                <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Block {index + 1}</h3>
                {renderTextField('titleEn', `home.${index}.title.en`)}
                {renderTextField('titleEs', `home.${index}.title.es`)}
                {renderTextField('textEn', `home.${index}.text.en`, true)}
                {renderTextField('textEs', `home.${index}.text.es`, true)}
                {renderTextField('imageUrl', `home.${index}.imageUrl`)}
                {renderTextField('imageAlt', `home.${index}.imageAlt`)}
              </div>
            ))}
          </div>
          
          <div className="bg-brand-green-light p-6 rounded-lg mb-8 shadow-md">
            <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionAbout')}</h2>
            {renderTextField('titleEn', 'about.title.en')}
            {renderTextField('titleEs', 'about.title.es')}
            {renderTextField('mainTextEn', 'about.mainText.en', true)}
            {renderTextField('mainTextEs', 'about.mainText.es', true)}
            <div className="border-t pt-4 mt-4">
              <h3 className="text-xl font-semibold text-brand-green-dark mb-2">{t('sectionMission')}</h3>
              {renderTextField('titleEn', `about.mission.title.en`)}
              {renderTextField('titleEs', `about.mission.title.es`)}
              {renderTextField('textEn', `about.mission.text.en`, true)}
              {renderTextField('textEs', `about.mission.text.es`, true)}
              {renderTextField('imageUrl', `about.mission.imageUrl`)}
              {renderTextField('imageAlt', `about.mission.imageAlt`)}
            </div>
          </div>
          
          <div className="bg-brand-green-light p-6 rounded-lg mb-8 shadow-md">
            <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionProjects')}</h2>
            {formData.projects.map((project, index) => (
              <div key={project.id} className="border-t pt-4 mt-4 first:border-t-0 first:pt-0 first:mt-0 relative pb-10">
                <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Project {index + 1}</h3>
                {renderTextField('titleEn', `projects.${index}.title.en`)}
                {renderTextField('titleEs', `projects.${index}.title.es`)}
                {renderTextField('descriptionEn', `projects.${index}.description.en`, true)}
                {renderTextField('descriptionEs', `projects.${index}.description.es`, true)}
                {renderTextField('imageUrl', `projects.${index}.imageUrl`)}
                {renderTextField('imageAlt', `projects.${index}.imageAlt`)}
                <button onClick={() => handleRemoveItem('projects', index)} className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 text-sm rounded">{t('remove')}</button>
              </div>
            ))}
            <button onClick={() => handleAddItem('projects')} className="mt-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewProject')}</button>
          </div>
          
          <div className="bg-brand-green-light p-6 rounded-lg mb-8 shadow-md">
            <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionTeam')}</h2>
            {formData.team.map((member, index) => (
              <div key={member.id} className="border-t pt-4 mt-4 first:border-t-0 first:pt-0 first:mt-0 relative pb-10">
                <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Team Member {index + 1}</h3>
                {renderTextField('name', `team.${index}.name`)}
                {renderTextField('roleEn', `team.${index}.role.en`)}
                {renderTextField('roleEs', `team.${index}.role.es`)}
                {renderTextField('bioEn', `team.${index}.bio.en`, true)}
                {renderTextField('bioEs', `team.${index}.bio.es`, true)}
                {renderTextField('imageUrl', `team.${index}.imageUrl`)}
                {renderTextField('imageAlt', `team.${index}.imageAlt`)}
                <button onClick={() => handleRemoveItem('team', index)} className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 text-sm rounded">{t('remove')}</button>
              </div>
            ))}
            <button onClick={() => handleAddItem('team')} className="mt-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewTeamMember')}</button>
          </div>
          
          <div className="bg-brand-green-light p-6 rounded-lg mb-8 shadow-md">
            <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionBlog')}</h2>
            {formData.blog.map((post, index) => (
              <div key={post.id} className="border-t pt-4 mt-4 first:border-t-0 first:pt-0 first:mt-0 relative pb-10">
                <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Blog Post {index + 1}</h3>
                {renderTextField('titleEn', `blog.${index}.title.en`)}
                {renderTextField('titleEs', `blog.${index}.title.es`)}
                {renderTextField('slug', `blog.${index}.slug`)}
                {renderTextField('author', `blog.${index}.author`)}
                {renderTextField('date', `blog.${index}.date`)}
                {renderTextField('summaryEn', `blog.${index}.summary.en`, true)}
                {renderTextField('summaryEs', `blog.${index}.summary.es`, true)}
                {renderTextField('contentEn', `blog.${index}.content.en`, true)}
                {renderTextField('contentEs', `blog.${index}.content.es`, true)}
                {renderTextField('imageUrl', `blog.${index}.imageUrl`)}
                {renderTextField('imageAlt', `blog.${index}.imageAlt`)}
                <button onClick={() => handleRemoveItem('blog', index)} className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 text-sm rounded">{t('remove')}</button>
              </div>
            ))}
            <button onClick={() => handleAddItem('blog')} className="mt-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewPost')}</button>
          </div>

          <div className="bg-brand-green-light p-6 rounded-lg mb-8 shadow-md">
            <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionContact')}</h2>
            {renderTextField('titleEn', 'contact.title.en')}
            {renderTextField('titleEs', 'contact.title.es')}
            {renderTextField('introEn', 'contact.intro.en', true)}
            {renderTextField('introEs', 'contact.intro.es', true)}
            {renderTextField('address', 'contact.address')}
            {renderTextField('phone', 'contact.phone')}
            {renderTextField('email', 'contact.email')}
          </div>

        </div>
      </div>
    </>
  );
};

export default AdminPage;