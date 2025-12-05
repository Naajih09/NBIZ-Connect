import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-95";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-900 shadow-blue-900/20",
    secondary: "bg-brand-gold text-brand-blue hover:bg-yellow-400 shadow-yellow-500/20",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-blue-50",
    ghost: "text-gray-600 hover:bg-gray-100"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;