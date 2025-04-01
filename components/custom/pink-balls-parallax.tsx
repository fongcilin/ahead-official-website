import { cn } from '@/lib/utils';

interface PinkBallParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PinkBallsParallax = ({
  children,
  className,
  ...props
}: PinkBallParallaxProps) => {
  return (
    <div
      {...props}
      className={cn(
        `bg-[url('/svgs/pink_bubbles.svg')] bg-cover bg-fixed bg-center bg-no-repeat`,
        className,
      )}
    >
      {children}
    </div>
  );
};
