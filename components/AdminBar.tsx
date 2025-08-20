import React from 'react';
import { useTranslate } from '../i18n';
import { NavLink } from 'react-router-dom';

interface AdminBarProps {
  onLogout: () => void;
}

const AdminBar: React.FC<AdminBarProps> = ({ onLogout }) => {
  const t = useTranslate();
  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-400 text-black h-14 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="font-bold">
          <span className="mr-4">⚠️ {t('adminBarNotice')}</span>
          <NavLink to="/admin" className="text-sm underline hover:text-gray-700">Go to Panel</NavLink>
        </div>
        <button
          onClick={onLogout}
          className="bg-gray-800 text-white text-sm font-bold py-2 px-4 rounded hover:bg-gray-700 transition-colors"
        >
          {t('exitAdminMode')}
        </button>
      </div>
    </div>
  );
};

export default AdminBar;