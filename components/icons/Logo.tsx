import React from 'react';

const Logo: React.FC = () => (
    <img
        src="/assets/logo.png" // ← Reemplaza con la URL real
        alt="Biophilia Institute Logo"
        style={
            { height: '100px', width: 'auto', margin: '0 80px', padding: '10px' }}
    />
);

export default Logo;