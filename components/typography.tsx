import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/try-stuff/lib/utils';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
      h5: 'text-lg font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      'thick-blockquote': 'mt-6 border-l-[10px] pl-4 font-bold',
      muted: 'text-sm text-muted-foreground',
    },
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
}

export const Typography = {
  H1: ({ children, className }: TypographyProps) => (
    <h1 className={cn(typographyVariants({ variant: 'h1', className }))}>
      {children}
    </h1>
  ),
  H2: ({ children, className }: TypographyProps) => (
    <h2 className={cn(typographyVariants({ variant: 'h2', className }))}>
      {children}
    </h2>
  ),
  H3: ({ children, className }: TypographyProps) => {
    return (
      <h3 className={cn(typographyVariants({ variant: 'h3', className }))}>
        {children}
      </h3>
    );
  },
  H4: ({ children, className }: TypographyProps) => (
    <h4 className={cn(typographyVariants({ variant: 'h4', className }))}>
      {children}
    </h4>
  ),
  H5: ({ children, className }: TypographyProps) => (
    <h4 className={cn(typographyVariants({ variant: 'h5', className }))}>
      {children}
    </h4>
  ),
  P: ({ children, className }: TypographyProps) => (
    <p className={cn(typographyVariants({ variant: 'p', className }))}>
      {children}
    </p>
  ),
  Blockquote: ({ children, className }: TypographyProps) => {
    return (
      <blockquote
        className={cn(typographyVariants({ variant: 'blockquote', className }))}
      >
        {children}
      </blockquote>
    );
  },
  ThickBlockquote: ({ children, className }: TypographyProps) => {
    return (
      <blockquote
        className={cn(
          typographyVariants({ variant: 'thick-blockquote', className }),
        )}
      >
        {children}
      </blockquote>
    );
  },
  Muted: ({ children, className }: TypographyProps) => {
    return (
      <p className={cn(typographyVariants({ variant: 'muted', className }))}>
        {children}
      </p>
    );
  },
};
