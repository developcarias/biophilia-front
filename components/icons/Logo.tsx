import React from 'react';

const Logo: React.FC = () => (
    <svg 
      width="144" 
      height="54" 
      viewBox="0 0 144 54" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-label="Biophilia Institute Logo"
    >
        <style>
            {`.logo-text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-weight: 800; }`}
        </style>
        <text x="0" y="26" className="logo-text" fontSize="28" fill="#10b981">Bio</text>
        <path d="M98.5,2.5c2.3-1,5.1-1.3,7.6-0.8c5.2,1.1,9.2,4.8,11.7,9.3c1.7,3,2.8,6.3,3.5,9.6c0.3,1.5-0.9,2.9-2.4,2.9 c-0.8,0-1.5-0.4-2-1c-2.3-3.1-5-5.9-8.3-7.9c-1.8-1.1-3.8-1.9-5.9-2.2c-2.2-0.3-4.5,0.3-6.4,1.4c-1.4,0.8-2.6,2-3.6,3.4 c-0.7,1-2,1.3-3.1,0.7c-1.1-0.6-1.5-1.9-1-3.1c1.5-3.3,3.7-6.2,6.5-8.5C92.6,3.9,95.4,2.9,98.5,2.5z M122.9,22.4 c-1.6-1.1-3.4-1.9-5.2-2.5c-3.7-1.1-7.5-0.8-11.1,0.8c-2.7,1.2-5,3-6.8,5.3c-0.6,0.8-0.5,2.1,0.3,2.7c0.8,0.6,2.1,0.5,2.7-0.3 c2.9-3.7,6.9-6.3,11.5-7.3c4-0.9,8.1-0.2,11.7,1.8c1.3,0.7,2.8,0.3,3.5-1c0.7-1.3,0.3-2.8-1-3.5L122.9,22.4z" fill="white"></path>
        <text x="0" y="50" className="logo-text" fontSize="28" fill="white">philia</text>
        <rect x="72" y="34" width="72" height="17" fill="#10b981" rx="2"></rect>
        <text x="76" y="48" className="logo-text" fontSize="13" fill="#166534">Institute</text>
    </svg>
);

export default Logo;