import React from "react";

import { cn } from "@/try-stuff/lib/utils";

interface RedTextBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const RedTextBlock = ({ children, className }: RedTextBlockProps) => {
  return (
    <div className={cn("bg-red-800 text-white rounded-md p-3", className)}>
      {children}
    </div>
  );
};
