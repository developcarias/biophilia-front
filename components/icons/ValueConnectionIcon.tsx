import React from 'react';

const ValueConnectionIcon: React.FC<{ className?: string }> = ({ className = "h-16 w-16" }) => (
  // <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M5 21H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M7 17L10 14L12 16L14 14L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M12 14V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M12 9C14.5 9 16 7 15 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M12 9C9.5 9 8 7 9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  // </svg>
  <img src={"https://biophiliaweb.org/images/valores/conexion.png"} alt="Connection with Nature" className="w-auto h-16" />
);

export default ValueConnectionIcon;