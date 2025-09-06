import React from 'react';

const ValueEquityIcon: React.FC<{ className?: string }> = ({ className = "h-16 w-16" }) => (
  // <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M12 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M5 8H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M12 14.5V21H14.5C15.8807 21 17 19.8807 17 18.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M12 14.5V18.5C12 19.8807 10.8807 21 9.5 21H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M12 14.5L14.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M12 14.5L9.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M5 8L8 10C8 10 9 12 6 12C3 12 4 10 4 10L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   <path d="M19 8L16 10C16 10 15 12 18 12C21 12 20 10 20 10L19 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  // </svg>
  <img src={"https://biophiliaweb.org/images/valores/social.png"} alt="Connection with Nature" className="w-auto h-16" />
);

export default ValueEquityIcon;