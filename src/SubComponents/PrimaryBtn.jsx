import React from 'react';

const PrimaryBtn = ({ children, className = '' }) => {
  return (
    <button className={`p-2 sm:py-3 px-5  text-white sm:text-lg ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
