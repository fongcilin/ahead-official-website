import { cn } from '@/try-stuff/lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Typography = {
  H1: ({ children, className }: TypographyProps) => (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
    >
      {children}
    </h1>
  ),
  H2: ({ children, className }: TypographyProps) => (
    <h2
      className={cn(
        'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
    >
      {children}
    </h2>
  ),
  H3: ({ children, className }: TypographyProps) => {
    return (
      <h3
        className={cn(
          'scroll-m-20 text-2xl font-semibold tracking-tight',
          className,
        )}
      >
        {children}
      </h3>
    );
  },
  H4: ({ children, className }: TypographyProps) => (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
    >
      {children}
    </h4>
  ),
  P: ({ children, className }: TypographyProps) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  ),
  Blockquote: ({ children, className }: TypographyProps) => {
    return (
      <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>
        {children}
      </blockquote>
    );
  },
  ThickBlockquote: ({ children, className }: TypographyProps) => {
    return (
      <blockquote className={cn('mt-6 border-l-4 pl-4 font-bold', className)}>
        {children}
      </blockquote>
    );
  },
  Muted: ({ children, className }: TypographyProps) => {
    return (
      <p className={cn('text-sm text-muted-foreground', className)}>
        {children}
      </p>
    );
  },
};
