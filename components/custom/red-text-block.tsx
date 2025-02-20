import { cn } from '@/try-stuff/lib/utils';

interface RedTextBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const RedTextBlock = ({ children, className }: RedTextBlockProps) => {
  return (
    <div
      className={cn(
        'rounded-md bg-gradient-to-b from-red-200 to-red-50 p-3 text-black',
        className,
      )}
    >
      {children}
    </div>
  );
};
