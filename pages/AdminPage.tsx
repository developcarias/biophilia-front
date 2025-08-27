

import React, { useState, useEffect } from 'react';
import { PageContent, Project, TeamMember, BlogPost } from '../types';
import { useTranslate, TranslationKey } from '../i18n';
import { produce } from 'immer';
import PageBanner from '../components/PageBanner';

interface AdminPageProps {
  content: PageContent;
  onUpdateContent: (newContent: PageContent) => void;
}

type AdminTab = 'hero' | 'home' | 'about' | 'projects' | 'team' | 'blog' | 'contact';


const AdminPage: React.FC<AdminPageProps> = ({ content, onUpdateContent }) => {
  const [formData, setFormData] = useState<PageContent>(JSON.parse(JSON.stringify(content)));
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('hero');
  const t = useTranslate();

  useEffect(() => {
    setFormData(JSON.parse(JSON.stringify(content)));
  }, [content]);
  
  const TABS: { key: AdminTab; labelKey: TranslationKey }[] = [
    { key: 'hero', labelKey: 'sectionHero' },
    { key: 'home', labelKey: 'sectionHome' },
    { key: 'about', labelKey: 'sectionAbout' },
    { key: 'projects', labelKey: 'sectionProjects' },
    { key: 'team', labelKey: 'sectionTeam' },
    { key: 'blog', labelKey: 'sectionBlog' },
    { key: 'contact', labelKey: 'sectionContact' },
  ];


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

  const renderTextField = (labelKey: TranslationKey | string, path: string, isTextarea: boolean = false) => {
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
    
    // Check if labelKey is a valid translation key
    const label = t(labelKey as TranslationKey, {});
    const displayLabel = label === labelKey ? labelKey : label;


    return (
      <div className="mb-4">
        <label className="block text-brand-gray text-sm font-bold mb-2">{displayLabel}</label>
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

  const renderContentBlockFields = (basePath: string, title: string) => (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-xl font-semibold text-brand-green-dark mb-2">{title}</h3>
      {renderTextField('Title (EN)', `${basePath}.title.en`)}
      {renderTextField('Title (ES)', `${basePath}.title.es`)}
      {renderTextField('Text (EN)', `${basePath}.text.en`, true)}
      {renderTextField('Text (ES)', `${basePath}.text.es`, true)}
      {renderTextField('Image URL', `${basePath}.imageUrl`)}
      {renderTextField('Image Alt Text', `${basePath}.imageAlt`)}
    </div>
  );

  return (
    <>
      <PageBanner
        title={t('adminPageBannerTitle')}
        imageUrl="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920&h=1080&fit=crop"
      />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center space-x-4 mb-4 sticky top-[176px] bg-white py-4 z-10 border-b">
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

          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.key ? 'border-brand-accent text-brand-green-dark' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  {t(tab.labelKey)}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-brand-green-light p-6 rounded-lg shadow-md">
            {activeTab === 'hero' && (
              <>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionHero')}</h2>
                {formData.hero.map((slide, index) => (
                  <div key={slide.id} className="border-t pt-4 mt-4 first:border-t-0 first:pt-0 first:mt-0">
                    <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Slide {index + 1}</h3>
                    {renderTextField('titleEn', `hero.${index}.title.en`)}
                    {renderTextField('titleEs', `hero.${index}.title.es`)}
                    {renderTextField('subtitleEn', `hero.${index}.subtitle.en`, true)}
                    {renderTextField('subtitleEs', `hero.${index}.subtitle.es`, true)}
                    {renderTextField('imageUrl', `hero.${index}.imageUrl`)}
                  </div>
                ))}
              </>
            )}

            {activeTab === 'home' && (
              <>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionHome')}</h2>
                {formData.home.map((block, index) => (
                  <div key={block.id} className="border-t pt-4 mt-4 first:border-t-0 first:pt-0 first:mt-0">
                    <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Block {index + 1} ({block.id})</h3>
                    {renderTextField('titleEn', `home.${index}.title.en`)}
                    {renderTextField('titleEs', `home.${index}.title.es`)}
                    {renderTextField('textEn', `home.${index}.text.en`, true)}
                    {renderTextField('textEs', `home.${index}.text.es`, true)}
                    {renderTextField('imageUrl', `home.${index}.imageUrl`)}
                    {renderTextField('imageAlt', `home.${index}.imageAlt`)}
                  </div>
                ))}
              </>
            )}
            
            {activeTab === 'about' && (
              <>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionAbout')}</h2>
                {renderTextField('Page Title (EN)', 'about.title.en')}
                {renderTextField('Page Title (ES)', 'about.title.es')}
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="text-xl font-semibold text-brand-green-dark mb-2">History Section</h3>
                  {renderTextField('Title (EN)', 'about.history.title.en')}
                  {renderTextField('Title (ES)', 'about.history.title.es')}
                  {renderTextField('Text (EN)', 'about.history.text.en', true)}
                  {renderTextField('Text (ES)', 'about.history.text.es', true)}
                  {renderTextField('Image URL', 'about.historyImageUrl')}
                </div>

                <div className="border-t pt-4 mt-4">
                  <h3 className="text-xl font-semibold text-brand-green-dark mb-2">"Our Name" Section</h3>
                  {renderTextField('Title (EN)', 'about.biophiliaExplanation.title.en')}
                  {renderTextField('Title (ES)', 'about.biophiliaExplanation.title.es')}
                  {renderTextField('Text (EN)', 'about.biophiliaExplanation.text.en', true)}
                  {renderTextField('Text (ES)', 'about.biophiliaExplanation.text.es', true)}
                </div>

                {renderContentBlockFields('about.mission', 'Mission Section')}
                {renderContentBlockFields('about.vision', 'Vision Section')}
                {renderContentBlockFields('about.work', 'Our Work Section')}

                <div className="border-t pt-4 mt-4">
                  <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Values Section</h3>
                  {renderTextField('Section Title (EN)', 'about.values.title.en')}
                  {renderTextField('Section Title (ES)', 'about.values.title.es')}
                  {formData.about.values.items.map((item, index) => (
                    <div key={item.id} className="border-t pt-4 mt-4">
                      <h4 className="text-lg font-semibold text-brand-green-dark mb-2">Value {index + 1}</h4>
                      {renderTextField('Title (EN)', `about.values.items.${index}.title.en`)}
                      {renderTextField('Title (ES)', `about.values.items.${index}.title.es`)}
                      {renderTextField('Text (EN)', `about.values.items.${index}.text.en`, true)}
                      {renderTextField('Text (ES)', `about.values.items.${index}.text.es`, true)}
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {activeTab === 'projects' && (
              <>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionProjects')}</h2>
                {renderTextField('Intro Text (EN)', 'projectsIntro.en', true)}
                {renderTextField('Intro Text (ES)', 'projectsIntro.es', true)}
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
              </>
            )}
            
            {activeTab === 'team' && (
              <>
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
              </>
            )}
            
            {activeTab === 'blog' && (
              <>
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
              </>
            )}

            {activeTab === 'contact' && (
              <>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('sectionContact')}</h2>
                {renderTextField('titleEn', 'contact.title.en')}
                {renderTextField('titleEs', 'contact.title.es')}
                {renderTextField('introEn', 'contact.intro.en', true)}
                {renderTextField('introEs', 'contact.intro.es', true)}
                {renderTextField('address', 'contact.address')}
                {renderTextField('phone', 'contact.phone')}
                {renderTextField('email', 'contact.email')}
                <div className="border-t pt-4 mt-4">
                  <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Social Media Links</h3>
                  {renderTextField('Facebook URL', 'contact.socialLinks.facebook')}
                  {renderTextField('Instagram URL', 'contact.socialLinks.instagram')}
                  {renderTextField('LinkedIn URL', 'contact.socialLinks.linkedin')}
                  {renderTextField('X (Twitter) URL', 'contact.socialLinks.twitter')}
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default AdminPage;