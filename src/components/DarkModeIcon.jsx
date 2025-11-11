import React from 'react';

// Component that ensures SVG icons are visible in both light and dark mode
// Uses CSS-based theme switching for instant color changes without delay
const DarkModeIcon = ({ src, alt, className }) => {
  return (
    <div className={className || ''} style={{ display: 'inline-flex' }}>
      <img 
        src={src} 
        alt={alt || "Icon"} 
        className="adaptive-icon" 
      />
    </div>
  );
};

export default DarkModeIcon;
