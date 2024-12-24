import React from 'react';

export const HeaderCopyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="text-xs text-gray-400">
      © {currentYear} AI Code Generator
    </div>
  );
};