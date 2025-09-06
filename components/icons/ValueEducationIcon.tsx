import React from 'react';

const ValueEducationIcon: React.FC<{ className?: string }> = ({ className = "h-16 w-16" }) => (
  // <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M2 6.5C2 6.22386 2.22386 6 2.5 6H21.5C21.7761 6 22 6.22386 22 6.5V18.5C22 18.7761 21.7761 19 21.5 19H2.5C2.22386 19 2 18.7761 2 18.5V6.5Z" stroke="currentColor" strokeWidth="1.5" />
  //   <path d="M12 6V19" stroke="currentColor" strokeWidth="1.5"/>
  //   <path d="M2 18.5C2 18.5 4.5 17 12 17C19.5 17 22 18.5 22 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  //   <path d="M7 9.5L12 7L17 9.5L12 12L7 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M17 9.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  // </svg>
  <img src={"https://biophiliaweb.org/images/valores/eucation.png"} alt="Connection with Nature" className="w-auto h-16" />
);

export default ValueEducationIcon;