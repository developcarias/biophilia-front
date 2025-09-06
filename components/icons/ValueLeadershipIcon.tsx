import React from 'react';

const ValueLeadershipIcon: React.FC<{ className?: string }> = ({ className = "h-16 w-16" }) => (
  // <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
  //   <path d="M8 8V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  //   <path d="M5 20V15H11V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  //   <path d="M8 11.5L18 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  //   <path d="M15 5.5H18V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  //   <path d="M15 20V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  //   <path d="M18 20V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  //   <path d="M21 20V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  // </svg>
  <img src={"https://biophiliaweb.org/images/valores/liderazgo.png"} alt="Connection with Nature" className="w-auto h-16" />
);

export default ValueLeadershipIcon;