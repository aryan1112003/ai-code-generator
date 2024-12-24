import React from 'react';
import { Copyright } from './Copyright';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <Copyright />
          <div className="text-xs text-gray-600">
            Powered by Advanced AI Technology
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;