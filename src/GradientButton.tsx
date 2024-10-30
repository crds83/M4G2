import React from 'react';

type GradientButtonProps = {
  label: string;
  type?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
};

const GradientButton: React.FC<GradientButtonProps> = ({
  label,
  type = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
}) => {
  // Define gradient styles based on the button type
  const typeStyles = {
    primary: 'bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600',
    secondary: 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800',
    danger: 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600',
    success: 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600',
    warning: 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700',
  };

  // Define padding and text size based on button size
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-7 py-3 text-lg',
  };

  return (
    <button
      className={`${typeStyles[type]} ${sizeStyles[size]} 
        rounded-lg text-white font-semibold transition-transform duration-200 
        transform hover:scale-105 active:scale-95 focus:outline-none 
        focus:ring-2 focus:ring-opacity-50 
        disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default GradientButton;

