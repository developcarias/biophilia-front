import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './icons/Logo';
import { useTranslate } from '../i18n';

const Footer: React.FC = () => {
  const t = useTranslate();

  return (
    <footer className="bg-brand-green-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <NavLink to="/" className="flex items-center space-x-3">
              <Logo />
            </NavLink>
            <p className="mt-4 text-sm text-gray-300">Fostering the love of life and the living world.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('quickLinks')}</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/about" className="text-base text-gray-300 hover:text-white">{t('navAbout')}</NavLink></li>
              <li><NavLink to="/projects" className="text-base text-gray-300 hover:text-white">{t('navProjects')}</NavLink></li>
              <li><NavLink to="/team" className="text-base text-gray-300 hover:text-white">{t('navTeam')}</NavLink></li>
              <li><NavLink to="/blog" className="text-base text-gray-300 hover:text-white">{t('navBlog')}</NavLink></li>
              <li><NavLink to="/contact" className="text-base text-gray-300 hover:text-white">{t('navContact')}</NavLink></li>
              <li><NavLink to="/donate" className="text-base text-gray-300 hover:text-white">{t('navDonate')}</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('contact')}</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-base text-gray-300">123 Nature Lane</li>
              <li className="text-base text-gray-300">Green Valley, USA 12345</li>
              <li className="text-base text-gray-300">contact@biophilia.org</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('followUs')}</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Biophilia Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
