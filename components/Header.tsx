import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './icons/Logo';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import { useI18n, useTranslate } from '../i18n';

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

  const linkStyle = "text-white hover:text-brand-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkStyle = "text-brand-accent bg-white bg-opacity-10";
  const headerBaseStyle = `fixed ${isLoggedIn ? 'top-14' : 'top-0'} left-0 right-0 z-40 transition-all duration-300`;
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

  const renderMobileMenu = () => (
    <div className="fixed inset-0 z-30 bg-brand-green-dark text-white md:hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 h-full">
        <div className="flex flex-col justify-between pb-24 h-full">
          <nav className="flex flex-col space-y-4 pt-10">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} onClick={closeMenu} className="text-2xl font-bold py-2 hover:text-brand-accent transition-colors text-center" end={link.end}>{link.label}</NavLink>
            ))}
          </nav>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-lg">Language / Idioma</span>
              <button onClick={toggleLanguage} className="text-white font-semibold text-lg border-2 border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-brand-green-dark transition-colors">
                {language.toUpperCase()}
              </button>
            </div>
            <NavLink to="/donate" onClick={closeMenu} className="block w-full">
              <button className="w-full bg-brand-accent text-white px-4 py-3 rounded-md text-lg font-medium hover:bg-brand-accent/90 transition-colors">
                {t('donateNow')}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <NavLink to="/" onClick={isMobileMenuOpen ? closeMenu : undefined} className="flex items-center space-x-3 text-white">
                <Logo />
              </NavLink>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => (
                <NavLink key={link.to} to={link.to} className={({isActive}) => isActive ? `${linkStyle} ${activeLinkStyle}`: linkStyle} end={link.end}>{link.label}</NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button onClick={toggleLanguage} className="text-white font-semibold text-sm border-2 border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-brand-green-dark transition-colors">
                {language.toUpperCase()}
              </button>
              <NavLink to="/donate">
                <button className="bg-brand-accent text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-accent/90 transition-colors">
                  {t('donateNow')}
                </button>
              </NavLink>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2" aria-label="Toggle menu">
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && renderMobileMenu()}
    </>
  );
};

export default Header;