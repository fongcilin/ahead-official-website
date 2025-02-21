import {
  type LinkBadgeItem,
  type LinkBadgesProps,
  LinkBadges,
} from '@/try-stuff/components/custom/link-badges';
import { cn } from '@/try-stuff/lib/utils';

const baseBadgeClassName = cn('text-base font-bold');

const badges: LinkBadgeItem[] = [
  {
    id: 'all',
    title: 'All',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'global-bio-and-investment',
    title: 'Global Bio and Investment',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'yahoo',
    title: 'Yahoo',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'the-hub-news',
    title: 'The Hub News',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'the-storm-media',
    title: 'The Storm Media',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'bnext',
    title: 'BNEXT',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'protocols',
    title: 'Protocols',
    className: cn(baseBadgeClassName),
  },
];

export const NewsLinkBadges = (props: Omit<LinkBadgesProps, 'data'>) => {
  return <LinkBadges {...props} data={badges} />;
};
