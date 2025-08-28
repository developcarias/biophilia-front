

import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './icons/Logo';
import { useTranslate } from '../i18n';
import { ContactContent } from '../types';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import XIcon from './icons/XIcon';

interface FooterProps {
  contact: ContactContent;
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
  const t = useTranslate();

  return (
    <footer className="bg-brand-accent/60 backdrop-blur-md text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Column 1: Logo and Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <NavLink to="/" className="inline-block mb-4">
              <Logo className="h-16" />
            </NavLink>
            <p className="text-sm text-gray-200 max-w-xs">Fostering the love of life and the living world.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('quickLinks')}</h3>
            <ul className="mt-4 space-y-2 columns-2">
              <li><NavLink to="/about" className="text-base text-gray-200 hover:text-white">{t('navAbout')}</NavLink></li>
              <li><NavLink to="/projects" className="text-base text-gray-200 hover:text-white">{t('navProjects')}</NavLink></li>
              <li><NavLink to="/team" className="text-base text-gray-200 hover:text-white">{t('navTeam')}</NavLink></li>
              <li><NavLink to="/blog" className="text-base text-gray-200 hover:text-white">{t('navBlog')}</NavLink></li>
              <li><NavLink to="/contact" className="text-base text-gray-200 hover:text-white">{t('navContact')}</NavLink></li>
              <li><NavLink to="/donate" className="text-base text-gray-200 hover:text-white">{t('navDonate')}</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('contact')}</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-base text-gray-200">{contact.address}</li>
              <li className="text-base text-gray-200">{contact.email}</li>
            </ul>
          </div>
          
          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('followUs')}</h3>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              {contact.socialLinks?.facebook && (
                <a href={contact.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <FacebookIcon className="h-6 w-6" />
                </a>
              )}
              {contact.socialLinks?.instagram && (
                <a href={contact.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon className="h-6 w-6" />
                </a>
              )}
              {contact.socialLinks?.linkedin && (
                <a href={contact.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <LinkedInIcon className="h-6 w-6" />
                </a>
              )}
              {contact.socialLinks?.twitter && (
                <a href={contact.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <span className="sr-only">X</span>
                  <XIcon className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>

        </div>
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} Biophilia Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;