import type { NewsTag, NewsTitle } from '@/try-stuff/app/api/news/[tag]/types';
import {
  type LinkBadgeItem,
  type LinkBadgesProps,
  LinkBadges,
} from '@/try-stuff/components/custom/link-badges';
import { cn } from '@/try-stuff/lib/utils';

const baseBadgeClassName = cn('text-base font-bold');

const badges: LinkBadgeItem<NewsTag, NewsTitle>[] = [
  {
    id: 'all',
    title: 'All',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'press_chinese',
    title: 'Press (Chinese)',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'press_english',
    title: 'Press (English)',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'social_media',
    title: 'Social Media',
    className: cn(baseBadgeClassName),
  },
];

export const NewsLinkBadges = (
  props: Omit<LinkBadgesProps<NewsTag, NewsTitle>, 'page' | 'data'>,
) => {
  return <LinkBadges {...props} page="news" data={badges} />;
};
