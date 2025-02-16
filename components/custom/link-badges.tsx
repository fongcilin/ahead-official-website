import React from 'react';
import Link from 'next/link';

import { type BadgeProps, Badge } from '@/try-stuff/components/ui/badge';
import { cn } from '@/try-stuff/lib/utils';

export type LinkBadgeItem = {
  id: string;
  title: string;
  className: string;
};

export interface LinkBadgesProps extends BadgeProps {
  data: LinkBadgeItem[];
}

export const LinkBadges = React.forwardRef<
  React.ComponentRef<'ul'>,
  LinkBadgesProps
>(({ data, className }, ref) => {
  return (
    <ul ref={ref} className={cn('flex flex-wrap gap-2 p-4', className)}>
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`/news/${item.id}`}>
            <Badge variant="secondary" className={item.className}>
              {item.title}
            </Badge>
          </Link>
        </li>
      ))}
    </ul>
  );
});
LinkBadges.displayName = 'LinkBadges';
