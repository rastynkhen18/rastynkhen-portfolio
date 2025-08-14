import React, { useEffect, useState } from 'react';

// Component that ensures SVG icons are visible in both light and dark mode
const DarkModeIcon = ({ src, alt, className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if dark mode is active initially
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
    
    // Set up a MutationObserver to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setIsDarkMode(isDark);
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    // Clean up the observer on unmount
    return () => observer.disconnect();
  }, []);
  
  // Apply appropriate filter based on current mode
  const iconStyle = {
    filter: isDarkMode ? 'brightness(0) saturate(100%) invert(1)' : 'brightness(0) saturate(100%)',
  };
  
  return (
    <div className={className || ''} style={{ display: 'inline-flex' }}>
      <img 
        src={src} 
        alt={alt || "Icon"} 
        style={iconStyle} 
        className="adaptive-icon" 
      />
    </div>
  );
};

export default DarkModeIcon;
