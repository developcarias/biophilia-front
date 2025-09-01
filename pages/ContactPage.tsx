

import React from 'react';
import { ContactPageContent, GlobalContent } from '../types';
import PageBanner from '../components/PageBanner';
import { useI18n } from '../i18n';
import Editable from '../components/Editable';

interface ContactPageProps {
  content: ContactPageContent;
  globalContent: GlobalContent;
}

const ContactPage: React.FC<ContactPageProps> = ({ content, globalContent }) => {
  const { language } = useI18n();

  return (
    <>
      <PageBanner
        title={content.banner.title[language]}
        imageUrl={content.banner.imageUrl}
        basePath="contactPage.banner.title"
        localizedText={content.banner.title}
      />
      
      <div id="contact-form" className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Editable localizedText={content.intro} basePath="contactPage.intro" multiline>
              <p className="text-center text-xl text-brand-gray mb-12">{content.intro[language]}</p>
            </Editable>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-brand-green-light p-8 rounded-lg shadow-lg">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">{content.banner.title[language]}</h3>
                <p className="mb-2"><strong>{content.addressTitle[language]}:</strong> {globalContent.footer.contact.address}</p>
                <p className="mb-4"><strong>{content.emailTitle[language]}:</strong> <a href={`mailto:${globalContent.footer.contact.email}`} className="text-brand-green hover:underline">{globalContent.footer.contact.email}</a></p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">{content.form.title[language]}</h3>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-brand-gray mb-1" htmlFor="name">{content.form.nameLabel[language]}</label>
                        <input type="text" id="name" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green bg-white text-brand-gray"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-brand-gray mb-1" htmlFor="contact-email">{content.form.emailLabel[language]}</label>
                        <input type="email" id="contact-email" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green bg-white text-brand-gray"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-brand-gray mb-1" htmlFor="message">{content.form.messageLabel[language]}</label>
                        <textarea id="message" rows={5} required className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green bg-white text-brand-gray"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-brand-accent text-white font-bold text-lg py-3 rounded-lg hover:bg-brand-accent/90 transition-transform transform hover:scale-105 shadow-lg">
                        {content.form.buttonText[language]}
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
