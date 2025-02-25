import * as React from 'react';
import Link from 'next/link';

import { type BadgeProps, Badge } from '@/try-stuff/components/ui/badge';
import { cn } from '@/try-stuff/lib/utils';

export type LinkBadgeItem<T> = {
  id: T;
  title: string;
  className: string;
};

export interface LinkBadgesProps<T extends string> extends BadgeProps {
  data: LinkBadgeItem<T>[];
}

const LinkBadgesWithGeneric = <T extends string>(
  { data, className }: LinkBadgesProps<T>,
  ref: React.ForwardedRef<React.ComponentRef<'ul'>>,
) => {
  return (
    <ul ref={ref} className={cn('flex flex-wrap gap-2 p-4', className)}>
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`/news/${item.id}`}>
            <Badge variant="outline" className={item.className}>
              {item.title}
            </Badge>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const LinkBadges = React.forwardRef(
  LinkBadgesWithGeneric as <T extends string>(
    props: LinkBadgesProps<T>,
    ref: React.ForwardedRef<React.ComponentRef<'ul'>>,
  ) => React.ReactElement,
);
LinkBadges.displayName = 'LinkBadges';
