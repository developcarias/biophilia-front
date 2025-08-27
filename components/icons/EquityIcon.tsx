import React from 'react';

const EquityIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-6 6m6-6l6 6M4.5 12.75l7.5-7.5 7.5 7.5M4.5 12.75h15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
    </svg>
);

export default EquityIcon;
