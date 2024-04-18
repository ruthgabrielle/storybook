import React from 'react';

interface TextProps {
  children: React.ReactNode;
}
export default function Text({ children, ...props }: TextProps) {
  return (
    <h2
      {...props}
    >
      {children}
    </h2>
  );
}

