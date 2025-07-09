import React from 'react';
import './CustomTitle.scss';

interface ColorfulHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const CustomTitle: React.FC<ColorfulHeadingProps> = ({ children, className }) => {
  return (
    <span className={`text-colorfull animate-gradient-x font-nyght tracking-wide ${className ?? ''}`}>
      {children}
    </span>
  );
};

export default CustomTitle;