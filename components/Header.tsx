import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './icons/Logo';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import { useI18n, useTranslate } from '../i18n';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import XIcon from './icons/XIcon';

interface HeaderProps {
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useI18n();
  const t = useTranslate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const headerBaseStyle = `sticky ${isLoggedIn ? 'top-14' : 'top-0'} left-0 right-0 z-40 transition-all duration-300`;
  const headerScrolledStyle = "bg-brand-green-dark shadow-lg";
  const headerTopStyle = "bg-transparent";

  const headerClass = `${headerBaseStyle} ${isScrolled || isMobileMenuOpen ? headerScrolledStyle : headerTopStyle}`;
  
  const navLinks = [
    { to: "/", label: t('navHome'), end: true },
    { to: "/about", label: t('navAbout') },
    { to: "/projects", label: t('navProjects') },
    { to: "/team", label: t('navTeam') },
    { to: "/blog", label: t('navBlog') },
    { to: "/contact", label: t('navContact') },
  ];

  const renderSocialIcons = (iconSize = "h-5 w-5") => (
    <>
      <a href="#" aria-label="Facebook" className="hover:text-brand-accent transition-colors"><FacebookIcon className={iconSize} /></a>
      <a href="#" aria-label="Instagram" className="hover:text-brand-accent transition-colors"><InstagramIcon className={iconSize} /></a>
      <a href="#" aria-label="LinkedIn" className="hover:text-brand-accent transition-colors"><LinkedInIcon className={iconSize} /></a>
      <a href="#" aria-label="X" className="hover:text-brand-accent transition-colors"><XIcon className={iconSize} /></a>
    </>
  );

  const renderMobileMenu = () => (
    <div className="fixed inset-0 z-50 bg-brand-green-dark text-white md:hidden overflow-y-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <NavLink to="/" onClick={closeMenu} className="flex items-center space-x-3 text-white">
            <Logo />
          </NavLink>
          <button onClick={closeMenu} className="text-white p-2" aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between pb-24">
          <nav className="flex flex-col space-y-4 pt-10">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} onClick={closeMenu} className="text-2xl font-bold py-2 hover:text-brand-accent transition-colors text-center" end={link.end}>{link.label}</NavLink>
            ))}
          </nav>
          <div className="space-y-6 mt-12">
            <div className="flex items-center justify-between">
              <span className="text-lg">Language / Idioma</span>
              <button onClick={toggleLanguage} className="text-white font-semibold text-lg border-2 border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-brand-green-dark transition-colors">
                {language.toUpperCase()}
              </button>
            </div>
            <NavLink to="/donate" onClick={closeMenu} className="block w-full">
              <button className="w-full bg-brand-yellow text-brand-green-dark px-4 py-3 rounded-md text-lg font-bold hover:opacity-90 transition-opacity">
                {t('donateNow')}
              </button>
            </NavLink>
            <div className="flex justify-center space-x-6">
              {renderSocialIcons("h-6 w-6")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            
            {/* Left Side: Logo and Navigation */}
            <div className="flex items-center space-x-16">
              <div className="flex-shrink-0">
                <NavLink to="/" className="flex items-center space-x-3 text-white">
                  <Logo />
                </NavLink>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                {navLinks.map(link => {
                   const navLinkClasses = "text-white text-xl font-medium py-2 border-b-2 transition-colors duration-300";
                   return (
                     <NavLink
                       key={link.to}
                       to={link.to}
                       className={({isActive}) => `${navLinkClasses} ${isActive ? 'border-brand-accent' : 'border-transparent hover:border-brand-accent'}`}
                       end={link.end}
                     >
                       {link.label}
                     </NavLink>
                   );
                })}
              </nav>
            </div>

            {/* Right Side: Controls and Mobile Menu Toggle */}
            <div className="flex items-center">
              <div className="hidden md:flex flex-col items-center">
                {/* Top Row */}
                <div className="flex items-center space-x-4">
                    <button onClick={toggleLanguage} className="text-white font-semibold text-sm border-2 border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-brand-green-dark transition-colors">
                        {language.toUpperCase()}
                    </button>
                    <NavLink to="/donate">
                        <button className="bg-brand-yellow text-brand-green-dark px-5 py-2 rounded-md text-base font-bold hover:opacity-90 transition-opacity shadow-md">
                            {t('donateNow')}
                        </button>
                    </NavLink>
                </div>
                {/* Bottom Row */}
                <div className="flex items-center space-x-4 text-white mt-3">
                    {renderSocialIcons("h-5 w-5")}
                </div>
              </div>

              <div className="md:hidden ml-4">
                <button onClick={() => setIsMobileMenuOpen(true)} className="text-white p-2" aria-label="Open menu">
                  <MenuIcon />
                </button>
              </div>
            </div>

          </div>
        </div>
      </header>
      {isMobileMenuOpen && renderMobileMenu()}
    </>
  );
};

export default Header;
