import React from 'react';

const PrimaryBtn = ({ children, className = '' }) => {
  return (
    <button className={`p-2 sm:py-3 px-6 font-semibold sm:text-lg hover:scale-95 duration-300  ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
