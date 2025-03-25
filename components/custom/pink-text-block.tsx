import { cn } from '@/lib/utils';

interface PinkTextBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PinkTextBlock = ({ children, className }: PinkTextBlockProps) => {
  return (
    <div
      className={cn(
        'rounded-md bg-gradient-to-b from-red-200 to-red-50 px-6 pb-20 pt-6 text-gray-500',
        className,
      )}
    >
      {children}
    </div>
  );
};
