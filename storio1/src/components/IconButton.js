import React from 'react';

const IconButton = ({ icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;