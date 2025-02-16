import React from 'react';

import { cn } from '@/try-stuff/lib/utils';

interface RedTextBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const RedTextBlock = ({ children, className }: RedTextBlockProps) => {
  return (
    <div className={cn('rounded-md bg-red-800 p-3 text-white', className)}>
      {children}
    </div>
  );
};
