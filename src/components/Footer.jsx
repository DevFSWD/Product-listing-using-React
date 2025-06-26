import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Dev's OS Store. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
        </div>
      </div>
    </footer>
  );
};

export default Footer