import { forwardRef } from 'react';
import Link from 'next/link';

import { type BadgeProps, Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type LinkBadgeItem<TId, TTitle> = {
  id: TId;
  title: TTitle;
  className: string;
};

export interface LinkBadgesProps<TId extends string, TTitle extends string>
  extends BadgeProps {
  page: string;
  data: LinkBadgeItem<TId, TTitle>[];
}

const LinkBadgesWithGeneric = <TId extends string, TTitle extends string>(
  { page, data, className }: LinkBadgesProps<TId, TTitle>,
  ref: React.ForwardedRef<React.ComponentRef<'ul'>>,
) => {
  return (
    <ul ref={ref} className={cn('flex flex-wrap gap-2 p-4', className)}>
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`/${page}/${item.id}`}>
            <Badge variant="outline" className={item.className}>
              {item.title}
            </Badge>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const LinkBadges = forwardRef(
  LinkBadgesWithGeneric as <TId extends string, TTitle extends string>(
    props: LinkBadgesProps<TId, TTitle>,
    ref: React.ForwardedRef<React.ComponentRef<'ul'>>,
  ) => React.ReactElement,
);
LinkBadges.displayName = 'LinkBadges';
