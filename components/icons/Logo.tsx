
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <img
        src="https://biophiliaweb.org/images/logos/biophilia_png-blanco.png"
        alt="Biophilia Institute Logo"
        className={`w-auto ${className || 'h-20'}`}
    />
);

export default Logo;