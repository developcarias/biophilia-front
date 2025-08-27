

import React from 'react';
import { ContactContent } from '../types';
import PageBanner from '../components/PageBanner';
import { useI18n, useTranslate } from '../i18n';

interface ContactPageProps {
  content: ContactContent;
}

const ContactPage: React.FC<ContactPageProps> = ({ content }) => {
  const { language } = useI18n();
  const t = useTranslate();

  return (
    <>
      <PageBanner
        title={content.title[language]}
        imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920&h=1080&fit=crop"
      />
      
      <div id="contact-form" className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-xl text-brand-gray mb-12">{content.intro[language]}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-brand-green-light p-8 rounded-lg shadow-lg">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Contact Information</h3>
                <p className="mb-2"><strong>{t('address')}:</strong> {content.address}</p>
                <p className="mb-2"><strong>{t('phone')}:</strong> {content.phone}</p>
                <p className="mb-4"><strong>{t('email')}:</strong> <a href={`mailto:${content.email}`} className="text-brand-green hover:underline">{content.email}</a></p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Send us a Message</h3>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-brand-gray mb-1" htmlFor="name">{t('name')}</label>
                        <input type="text" id="name" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green bg-white text-brand-gray"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-brand-gray mb-1" htmlFor="contact-email">{t('emailAddress')}</label>
                        <input type="email" id="contact-email" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green bg-white text-brand-gray"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-brand-gray mb-1" htmlFor="message">Message</label>
                        <textarea id="message" rows={5} required className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green bg-white text-brand-gray"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-brand-accent text-white font-bold text-lg py-3 rounded-lg hover:bg-brand-accent/90 transition-transform transform hover:scale-105 shadow-lg">
                        Send Message
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