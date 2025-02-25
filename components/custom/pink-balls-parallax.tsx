import { cn } from '@/try-stuff/lib/utils';

interface PinkBallParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PinkBallsParallax = ({
  children,
  className,
}: PinkBallParallaxProps) => {
  return (
    <div
      className={cn(
        `bg-[url('/svgs/pink_bubbles.svg')] bg-cover bg-fixed bg-center bg-no-repeat`,
        className,
      )}
    >
      {children}
    </div>
  );
};
