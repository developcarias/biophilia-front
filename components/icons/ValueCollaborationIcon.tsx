import React from 'react';

const ValueCollaborationIcon: React.FC<{ className?: string }> = ({ className = "h-16 w-16" }) => (
  // <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M15 7H18V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M18 7L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M9 17H6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M6 17L11 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M20.5 15.5C20.5 15.5 19 14 17 14C15 14 14 16 14 18C14 20 16 21 17 21C18 21 18.5 20.5 18.5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M3.5 8.5C3.5 8.5 5 10 7 10C9 10 10 8 10 6C10 4 8 3 7 3C6 3 5.5 3.5 5.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  // </svg>
  <img src={"https://biophiliaweb.org/images/valores/colaboracion.png"} alt="Connection with Nature" className="w-auto h-16" />
);

export default ValueCollaborationIcon;