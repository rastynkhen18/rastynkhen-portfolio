import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <svg 
      className={`w-auto h-8 ${className}`} 
      viewBox="0 0 200 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Code bracket symbol </> */}
      <path
        d="M15 15L5 25L15 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--primary-color)]"
      />
      <path
        d="M35 15L45 25L35 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--primary-color)]"
      />
      {/* Added backslash */}
      <path
        d="M30 15L20 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--primary-color)]"
      />
      <text 
        x="55" 
        y="32" 
        className="text-[var(--text-color)]" 
        style={{
          fontFamily: 'monospace', 
          fontWeight: 'bold', 
          fontSize: '24px',
          fill: 'currentColor'
        }}
      >
        rastynkhen.dev
      </text>
    </svg>
  );
};

export default Logo;