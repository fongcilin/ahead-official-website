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
    id: 'global-bio-and-investment',
    title: 'Global Bio and Investment',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'yahoo-news',
    title: 'Yahoo News',
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
  {
    id: 'linkedin',
    title: 'LinkedIn',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'pr-newswire',
    title: 'PR Newswire',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'science-direct',
    title: 'Science Direct',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'cna',
    title: 'CNA',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'ahead-self',
    title: 'Ahead Self',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'meet',
    title: 'Meet',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'escca',
    title: 'ESCCA',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'nist',
    title: 'NIST',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'aacr',
    title: 'AACR',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'life-science-nation',
    title: 'Life Science Nation',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'berkeley-public-health',
    title: 'Berkeley Public Health',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'ee-taiwan',
    title: 'EE Taiwan',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'world-journal',
    title: 'World Journal',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'futurology-life',
    title: 'Futurology Life',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'teamdoor',
    title: 'Teamdoor',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'ctee',
    title: 'CTEE',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'app-works',
    title: 'App Works',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'hlth',
    title: 'HLTH',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'live-remo',
    title: 'Live Remo',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'digitimes',
    title: 'Digitimes',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'tech-orange',
    title: 'Tech Orange',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'ltn',
    title: 'LTN',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'berkeley-skydeck',
    title: 'Berkeley Skydeck',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'ustv',
    title: 'USTV',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'ithome',
    title: 'iThome',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'eet',
    title: 'EE Times',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'facebook',
    title: 'Facebook',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'technews',
    title: 'TechNews',
    className: cn(baseBadgeClassName),
  },
];

export const NewsLinkBadges = (
  props: Omit<LinkBadgesProps<NewsTag, NewsTitle>, 'page' | 'data'>,
) => {
  return <LinkBadges {...props} page="news" data={badges} />;
};
