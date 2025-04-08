import { cn } from '@/lib/utils';

interface PinkBallParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PinkCellsParallax = ({
  children,
  className,
  ...props
}: PinkBallParallaxProps) => {
  return (
    <div
      {...props}
      className={cn(
        `bg-[url('/images/parallax/cell_bg.png')] bg-cover bg-fixed bg-left bg-no-repeat`,
        'md:bg-center',
        className,
      )}
    >
      {children}
    </div>
  );
};
