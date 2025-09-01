

import React, { useState, useEffect } from 'react';
import { PageContent, Project, TeamMember, BlogPost, NavLink, ValueItem, HeroSlide, AlliancePartner, ContentBlockType } from '../types';
import { useTranslate, TranslationKey } from '../i18n';
import { produce } from 'immer';
import PageBanner from '../components/PageBanner';

interface AdminPageProps {
  content: PageContent;
  onUpdateContent: (newContent: PageContent) => void;
}

type AdminTab = 'global' | 'home' | 'about' | 'projects' | 'team' | 'blog' | 'contact' | 'donate';

const AdminPage: React.FC<AdminPageProps> = ({ content, onUpdateContent }) => {
  const [formData, setFormData] = useState<PageContent>(JSON.parse(JSON.stringify(content)));
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('global');
  const t = useTranslate();

  useEffect(() => {
    setFormData(JSON.parse(JSON.stringify(content)));
  }, [content]);
  
  const TABS: { key: AdminTab; labelKey: TranslationKey }[] = [
    { key: 'global', labelKey: 'tabGlobal' },
    { key: 'home', labelKey: 'tabHome' },
    { key: 'about', labelKey: 'tabAbout' },
    { key: 'projects', labelKey: 'tabProjects' },
    { key: 'team', labelKey: 'tabTeam' },
    { key: 'blog', labelKey: 'tabBlog' },
    { key: 'contact', labelKey: 'tabContact' },
    { key: 'donate', labelKey: 'tabDonate' },
  ];

  const handleInputChange = (path: string, value: string | boolean) => {
    setFormData(produce(draft => {
      const keys = path.split('.');
      let current: any = draft;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
    }));
  };
  
  const handleAddItem = (path: string, newItemTemplate: object) => {
    setFormData(produce(draft => {
        const pathParts = path.split('.');
        let current: any = draft;
        for (let i = 0; i < pathParts.length - 1; i++) {
            current = current[pathParts[i]];
        }
        const arrayToModify = current[pathParts[pathParts.length - 1]];
        if (Array.isArray(arrayToModify)) {
            arrayToModify.push({ ...newItemTemplate, id: `new_${Date.now()}` });
        }
    }));
  };

  const handleRemoveItem = (path: string, index: number) => {
    setFormData(produce(draft => {
        const pathParts = path.split('.');
        let arrayToModify: any[];
        let current: any = draft;
        for (let i = 0; i < pathParts.length - 1; i++) {
            current = current[pathParts[i]];
        }
        arrayToModify = current[pathParts[pathParts.length-1]];
        arrayToModify.splice(index, 1);
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

  // RENDER HELPERS
  const renderTextField = (labelKey: TranslationKey | string, path: string, isTextarea: boolean = false) => {
    const keys = path.split('.');
    let value = formData as any;
    for (const key of keys) {
      if (value === undefined || value === null) { value = ''; break; }
      value = value[key];
    }

    const InputComponent = isTextarea ? 'textarea' : 'input';
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
  
  const renderLocalizedTextField = (baseLabel: string, basePath: string, isTextarea: boolean = false) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderTextField(`${baseLabel} (EN)`, `${basePath}.en`, isTextarea)}
        {renderTextField(`${baseLabel} (ES)`, `${basePath}.es`, isTextarea)}
    </div>
  );

  const AdminSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="border-t pt-6 mt-6">
        <h3 className="text-xl font-semibold text-brand-green-dark mb-4">{title}</h3>
        <div className="space-y-4">{children}</div>
    </div>
  );

  const ListItemWrapper: React.FC<{ title: string; onRemove: () => void; children: React.ReactNode }> = ({ title, onRemove, children }) => (
    <div className="border p-4 rounded mb-4 relative bg-white shadow-sm">
        <h4 className="font-bold mb-2 text-brand-gray">{title}</h4>
        {children}
        <button onClick={onRemove} className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 text-sm rounded">{t('remove')}</button>
    </div>
  );

  const renderContentBlockFields = (basePath: string) => (
    <>
      {renderLocalizedTextField('Title', `${basePath}.title`)}
      {renderLocalizedTextField('Text', `${basePath}.text`, true)}
      {renderTextField('Image URL', `${basePath}.imageUrl`)}
      {renderTextField('Image Alt Text', `${basePath}.imageAlt`)}
    </>
  );

  // NEW ITEM TEMPLATES
  const newProjectTemplate: Omit<Project, 'id'> = { title: { en: '', es: '' }, description: { en: '', es: '' }, imageUrl: '', imageAlt: '', details: { en: '', es: '' }, detailImageUrl: '' };
  const newTeamMemberTemplate: Omit<TeamMember, 'id'> = { name: '', role: { en: '', es: '' }, bio: { en: '', es: '' }, imageUrl: '', imageAlt: '' };
  const newBlogPostTemplate: Omit<BlogPost, 'id'> = { slug: '', title: { en: '', es: '' }, author: '', date: '', summary: { en: '', es: '' }, content: { en: '', es: '' }, imageUrl: '', imageAlt: '' };
  const newNavLinkTemplate: Omit<NavLink, 'id'> = { to: '/', label: { en: 'New Link', es: 'Nuevo Enlace' }, end: false };
  const newHeroSlideTemplate: Omit<HeroSlide, 'id'> = { title: { en: '', es: '' }, subtitle: { en: '', es: '' }, imageUrl: '' };
  const newValueItemTemplate: Omit<ValueItem, 'id'> = { title: { en: '', es: '' }, text: { en: '', es: '' }, icon: '', imageUrl: '' };
  const newAlliancePartnerTemplate: Omit<AlliancePartner, 'id'> = { name: '', logoUrl: '' };

  return (
    <>
      <PageBanner title={t('adminPanelTitle')} imageUrl="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920&h=1080&fit=crop" />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center space-x-4 mb-4 sticky top-[176px] bg-white py-4 z-10 border-b">
            <button onClick={handleSave} className="bg-brand-green-dark hover:bg-brand-green-dark/90 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">{t('saveChanges')}</button>
            <button onClick={handleDiscard} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">{t('discardChanges')}</button>
            {showSuccess && <div className="bg-brand-accent text-white font-bold py-2 px-4 rounded-lg">{t('changesSaved')}</div>}
          </div>

          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
              {TABS.map((tab) => (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.key ? 'border-brand-accent text-brand-green-dark' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>{t(tab.labelKey)}</button>
              ))}
            </nav>
          </div>

          <div className="bg-brand-green-light p-6 rounded-lg shadow-inner">
            {activeTab === 'global' && (<>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('tabGlobal')}</h2>
                <AdminSection title="Logo">{renderTextField('Logo URL', 'global.logoUrl')}</AdminSection>
                <AdminSection title={t('sectionNavigation')}>
                  {formData.global.navigation.map((link, index) => (
                    <ListItemWrapper key={link.id} title={`Link: ${link.label.en}`} onRemove={() => handleRemoveItem('global.navigation', index)}>
                        {renderTextField('URL Path (e.g., /about)', `global.navigation.${index}.to`)}
                        {renderLocalizedTextField('Label', `global.navigation.${index}.label`)}
                    </ListItemWrapper>
                  ))}
                  <button onClick={() => handleAddItem('global.navigation', newNavLinkTemplate)} className="mt-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewLink')}</button>
                </AdminSection>
                <AdminSection title={t('sectionSocial')}>
                  {formData.global.socialLinks.map((link, index) => <div key={link.id}>{renderTextField(`${link.id.charAt(0).toUpperCase() + link.id.slice(1)} URL`, `global.socialLinks.${index}.url`)}</div>)}
                </AdminSection>
                <AdminSection title={t('sectionFooter')}>
                    {renderLocalizedTextField('Slogan', 'global.footer.slogan')}
                    {renderLocalizedTextField('Copyright Text', 'global.footer.copyright')}
                    {renderTextField('Contact Address', 'global.footer.contact.address')}
                    {renderTextField('Contact Email', 'global.footer.contact.email')}
                </AdminSection>
                 <AdminSection title="UI Button/Link Texts">
                    {renderLocalizedTextField('Donate Now', 'ui.donateNow')}
                    {renderLocalizedTextField('Support Our Mission', 'ui.supportMission')}
                    {renderLocalizedTextField('View All Projects', 'ui.viewAllProjects')}
                    {renderLocalizedTextField('Learn More', 'ui.learnMore')}
                    {renderLocalizedTextField('Read More', 'ui.readMore')}
                    {renderLocalizedTextField('Contact Us', 'ui.contact')}
                 </AdminSection>
            </>)}
            {activeTab === 'home' && (<>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('tabHome')}</h2>
                <AdminSection title={t('sectionHero')}>
                    {formData.homePage.heroSlides.map((slide, index) => (
                        <ListItemWrapper key={slide.id} title={`Slide: ${slide.title.en || `(Slide ${index+1})`}`} onRemove={() => handleRemoveItem('homePage.heroSlides', index)}>
                            {renderLocalizedTextField('Title', `homePage.heroSlides.${index}.title`)}
                            {renderLocalizedTextField('Subtitle', `homePage.heroSlides.${index}.subtitle`, true)}
                            {renderTextField('Image URL', `homePage.heroSlides.${index}.imageUrl`)}
                        </ListItemWrapper>
                    ))}
                    <button onClick={() => handleAddItem('homePage.heroSlides', newHeroSlideTemplate)} className="mt-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewItem')}</button>
                </AdminSection>
                <AdminSection title={t('sectionWelcome')}>
                    {renderLocalizedTextField('Title Part 1', 'homePage.welcome.titlePart1')}
                    {renderLocalizedTextField('Title Part 2', 'homePage.welcome.titlePart2')}
                    {renderLocalizedTextField('Text', 'homePage.welcome.text', true)}
                    {renderTextField('Image URL', 'homePage.welcome.imageUrl')}
                    {renderTextField('Image Alt Text', 'homePage.welcome.imageAlt')}
                </AdminSection>
                <AdminSection title={t('sectionActionLines')}>
                    {renderLocalizedTextField('Section Title', 'homePage.actionLines.title')}
                    {formData.homePage.actionLines.items.map((item, index) => (
                        <ListItemWrapper key={item.id} title={`Action Line: ${item.title.en || `(Item ${index+1})`}`} onRemove={() => handleRemoveItem('homePage.actionLines.items', index)}>
                            {renderLocalizedTextField('Title', `homePage.actionLines.items.${index}.title`)}
                            {renderLocalizedTextField('Text', `homePage.actionLines.items.${index}.text`, true)}
                            {renderTextField('Icon Name', `homePage.actionLines.items.${index}.icon`)}
                            {renderTextField('Image URL', `homePage.actionLines.items.${index}.imageUrl`)}
                        </ListItemWrapper>
                    ))}
                    <button onClick={() => handleAddItem('homePage.actionLines.items', newValueItemTemplate)} className="mt-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewItem')}</button>
                </AdminSection>
                <AdminSection title={t('sectionLatestProjects')}>
                    {renderLocalizedTextField('Title', 'homePage.latestProjects.title')}
                    {renderLocalizedTextField('Subtitle', 'homePage.latestProjects.subtitle')}
                </AdminSection>
                <AdminSection title={`${t('sectionParallax')} 1`}>
                    {renderLocalizedTextField('Title', 'homePage.parallax1.title')}
                    {renderLocalizedTextField('Text', 'homePage.parallax1.text', true)}
                    {renderTextField('Image URL', 'homePage.parallax1.imageUrl')}
                </AdminSection>
                <AdminSection title={t('sectionValues')}>
                    {renderLocalizedTextField('Section Title', 'homePage.values.title')}
                    {formData.homePage.values.items.map((item, index) => (
                        <ListItemWrapper key={item.id} title={`Value: ${item.title.en || `(Item ${index+1})`}`} onRemove={() => handleRemoveItem('homePage.values.items', index)}>
                            {renderLocalizedTextField('Title', `homePage.values.items.${index}.title`)}
                            {renderLocalizedTextField('Text', `homePage.values.items.${index}.text`, true)}
                            {renderTextField('Icon Name', `homePage.values.items.${index}.icon`)}
                        </ListItemWrapper>
                    ))}
                    <button onClick={() => handleAddItem('homePage.values.items', newValueItemTemplate)} className="mt-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewItem')}</button>
                </AdminSection>
                <AdminSection title={t('sectionAlliances')}>
                    {renderLocalizedTextField('Title', 'homePage.alliances.title')}
                    {renderLocalizedTextField('Description', 'homePage.alliances.description', true)}
                     {formData.homePage.alliances.partners.map((item, index) => (
                        <ListItemWrapper key={item.id} title={`Partner: ${item.name || `(Item ${index+1})`}`} onRemove={() => handleRemoveItem('homePage.alliances.partners', index)}>
                           {renderTextField('Name', `homePage.alliances.partners.${index}.name`)}
                           {renderTextField('Logo URL', `homePage.alliances.partners.${index}.logoUrl`)}
                        </ListItemWrapper>
                    ))}
                    <button onClick={() => handleAddItem('homePage.alliances.partners', newAlliancePartnerTemplate)} className="mt-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewItem')}</button>
                </AdminSection>
                 <AdminSection title={`${t('sectionParallax')} 2`}>
                    {renderLocalizedTextField('Title', 'homePage.parallax2.title')}
                    {renderLocalizedTextField('Text', 'homePage.parallax2.text', true)}
                    {renderTextField('Image URL', 'homePage.parallax2.imageUrl')}
                </AdminSection>
            </>)}
            {activeTab === 'about' && (<>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('tabAbout')}</h2>
                <AdminSection title={t('sectionBanner')}>
                    {renderLocalizedTextField('Title', 'aboutPage.banner.title')}
                    {renderTextField('Image URL', 'aboutPage.banner.imageUrl')}
                </AdminSection>
                <AdminSection title={t('sectionHistory')}>
                    {renderLocalizedTextField('Title', 'aboutPage.history.title')}
                    {renderLocalizedTextField('Text', 'aboutPage.history.text', true)}
                    {renderTextField('Image URL', 'aboutPage.history.imageUrl')}
                </AdminSection>
                <AdminSection title={t('sectionBiophilia')}>
                    {renderLocalizedTextField('Title', 'aboutPage.biophiliaExplanation.title')}
                    {renderLocalizedTextField('Text', 'aboutPage.biophiliaExplanation.text', true)}
                </AdminSection>
                <AdminSection title={t('sectionMission')}>{renderContentBlockFields('aboutPage.mission')}</AdminSection>
                <AdminSection title={t('sectionVision')}>{renderContentBlockFields('aboutPage.vision')}</AdminSection>
                <AdminSection title={t('sectionWork')}>{renderContentBlockFields('aboutPage.work')}</AdminSection>
            </>)}
            {activeTab === 'projects' && (<>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('tabProjects')}</h2>
                <AdminSection title={t('sectionBanner')}>
                    {renderLocalizedTextField('Title', 'projectsPage.banner.title')}
                    {renderTextField('Image URL', 'projectsPage.banner.imageUrl')}
                </AdminSection>
                 <AdminSection title={t('sectionIntro')}>{renderLocalizedTextField('Intro Text', 'projectsPage.intro', true)}</AdminSection>
                <AdminSection title="Project List">
                  {formData.projects.map((project, index) => (
                    <ListItemWrapper key={project.id} title={`Project: ${project.title.en || `(Project ${index+1})`}`} onRemove={() => handleRemoveItem('projects', index)}>
                      {renderLocalizedTextField('Title', `projects.${index}.title`)}
                      {renderLocalizedTextField('Description', `projects.${index}.description`, true)}
                      {renderTextField('Image URL', `projects.${index}.imageUrl`)}
                      {renderTextField('Image Alt Text', `projects.${index}.imageAlt`)}
                      {renderLocalizedTextField('Details Text', `projects.${index}.details`, true)}
                      {renderTextField('Detail Image URL', `projects.${index}.detailImageUrl`)}
                    </ListItemWrapper>
                  ))}
                  <button onClick={() => handleAddItem('projects', newProjectTemplate)} className="mt-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewProject')}</button>
                </AdminSection>
                 <AdminSection title="Project Detail Page">
                    {renderLocalizedTextField('Back to Projects Button', 'projectDetailPage.backToProjects')}
                </AdminSection>
            </>)}
            {activeTab === 'team' && (<>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('tabTeam')}</h2>
                <AdminSection title={t('sectionBanner')}>
                    {renderLocalizedTextField('Title', `teamPage.banner.title`)}
                    {renderTextField('Image URL', `teamPage.banner.imageUrl`)}
                </AdminSection>
                <AdminSection title="Team Members">
                    {formData.team.map((member, index) => (
                        <ListItemWrapper key={member.id} title={`Member: ${member.name || `(Member ${index+1})`}`} onRemove={() => handleRemoveItem('team', index)}>
                            {renderTextField('Name', `team.${index}.name`)}
                            {renderLocalizedTextField('Role', `team.${index}.role`)}
                            {renderLocalizedTextField('Bio', `team.${index}.bio`, true)}
                            {renderTextField('Image URL', `team.${index}.imageUrl`)}
                            {renderTextField('Image Alt Text', `team.${index}.imageAlt`)}
                        </ListItemWrapper>
                    ))}
                    <button onClick={() => handleAddItem('team', newTeamMemberTemplate)} className="mt-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewTeamMember')}</button>
                </AdminSection>
            </>)}
             {activeTab === 'blog' && (<>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('tabBlog')}</h2>
                <AdminSection title={t('sectionBanner')}>
                    {renderLocalizedTextField('Title', `blogPage.banner.title`)}
                    {renderTextField('Image URL', `blogPage.banner.imageUrl`)}
                </AdminSection>
                <AdminSection title="Section Titles">
                    {renderLocalizedTextField('Featured Post Title', `blogPage.featuredPostTitle`)}
                    {renderLocalizedTextField('Recent Posts Title', `blogPage.recentPostsTitle`)}
                    {renderLocalizedTextField('Share Post Title', `blogPage.sharePostTitle`)}
                </AdminSection>
                <AdminSection title="Blog Posts">
                    {formData.blog.map((post, index) => (
                         <ListItemWrapper key={post.id} title={`Post: ${post.title.en || `(Post ${index+1})`}`} onRemove={() => handleRemoveItem('blog', index)}>
                            {renderTextField('URL Slug', `blog.${index}.slug`)}
                            {renderLocalizedTextField('Title', `blog.${index}.title`)}
                            {renderTextField('Author', `blog.${index}.author`)}
                            {renderTextField('Date (YYYY-MM-DD)', `blog.${index}.date`)}
                            {renderLocalizedTextField('Summary', `blog.${index}.summary`, true)}
                            {renderLocalizedTextField('Content', `blog.${index}.content`, true)}
                            {renderTextField('Image URL', `blog.${index}.imageUrl`)}
                            {renderTextField('Image Alt Text', `blog.${index}.imageAlt`)}
                        </ListItemWrapper>
                    ))}
                    <button onClick={() => handleAddItem('blog', newBlogPostTemplate)} className="mt-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded">{t('addNewPost')}</button>
                </AdminSection>
            </>)}
            {activeTab === 'contact' && (<>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('tabContact')}</h2>
                 <AdminSection title={t('sectionBanner')}>
                    {renderLocalizedTextField('Title', `contactPage.banner.title`)}
                    {renderTextField('Image URL', `contactPage.banner.imageUrl`)}
                </AdminSection>
                <AdminSection title={t('sectionIntro')}>{renderLocalizedTextField('Intro Text', 'contactPage.intro', true)}</AdminSection>
                <AdminSection title="Contact Info Titles">
                    {renderLocalizedTextField('Address Title', 'contactPage.addressTitle')}
                    {renderLocalizedTextField('Phone Title', 'contactPage.phoneTitle')}
                    {renderLocalizedTextField('Email Title', 'contactPage.emailTitle')}
                </AdminSection>
                 <AdminSection title={t('sectionForm')}>
                    {renderLocalizedTextField('Form Title', 'contactPage.form.title')}
                    {renderLocalizedTextField('Name Label', 'contactPage.form.nameLabel')}
                    {renderLocalizedTextField('Email Label', 'contactPage.form.emailLabel')}
                    {renderLocalizedTextField('Message Label', 'contactPage.form.messageLabel')}
                    {renderLocalizedTextField('Button Text', 'contactPage.form.buttonText')}
                </AdminSection>
            </>)}
            {activeTab === 'donate' && (<>
                <h2 className="text-2xl font-semibold text-brand-green-dark mb-4">{t('tabDonate')}</h2>
                <AdminSection title={t('sectionBanner')}>
                    {renderLocalizedTextField('Title', `donatePage.banner.title`)}
                    {renderTextField('Image URL', `donatePage.banner.imageUrl`)}
                </AdminSection>
                 <AdminSection title={t('sectionIntro')}>{renderLocalizedTextField('Intro Text', 'donatePage.intro', true)}</AdminSection>
                 <AdminSection title="Donation Form">
                    {renderLocalizedTextField('Choose Amount', 'donatePage.form.chooseAmount')}
                    {renderLocalizedTextField('Custom Amount', 'donatePage.form.customAmount')}
                    {renderLocalizedTextField('First Name', 'donatePage.form.firstName')}
                    {renderLocalizedTextField('Last Name', 'donatePage.form.lastName')}
                    {renderLocalizedTextField('Email Address', 'donatePage.form.emailAddress')}
                    {renderLocalizedTextField('Payment Placeholder', 'donatePage.form.paymentPlaceholder')}
                    {renderLocalizedTextField('Donate Button Text (use {{amount}})', 'donatePage.form.donateAmount')}
                 </AdminSection>
                 <AdminSection title="Thank You Message">
                    {renderLocalizedTextField('Title', 'donatePage.thankYou.title')}
                    {renderLocalizedTextField('Text (use {{amount}})', 'donatePage.thankYou.text', true)}
                 </AdminSection>
            </>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;