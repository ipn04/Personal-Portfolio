import React from 'react';

type CustomContainerProps = {
  children: React.ReactNode;
};

function CustomContainer({ children }: CustomContainerProps) {
  return (
    <div className="custom-container vh-100">
      {children}
    </div>
  );
}

export default CustomContainer;