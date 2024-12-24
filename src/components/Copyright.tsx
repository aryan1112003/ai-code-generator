import React from 'react';

export const Copyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="text-center text-sm text-gray-500 mt-8">
      <p>© {currentYear} AI Code Generator. All rights reserved.</p>
      <p className="mt-1">Created by Aryan Acharya</p>
    </div>
  );
};