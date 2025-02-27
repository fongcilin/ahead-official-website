import type {
  PublicationTag,
  PublicationTagName,
} from '@/try-stuff/app/api/publications/[tag]/types';
import {
  type LinkBadgeItem,
  type LinkBadgesProps,
  LinkBadges,
} from '@/try-stuff/components/custom/link-badges';
import { cn } from '@/try-stuff/lib/utils';

const baseBadgeClassName = cn('text-base font-bold');

const badges: LinkBadgeItem<PublicationTag, PublicationTagName>[] = [
  {
    id: 'all',
    title: 'All',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'peer-reviewed-conference-workshop-paper',
    title: 'PEER-REVIEWED CONFERENCE / WORKSHOP PAPER',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'journal',
    title: 'JOURNAL',
    className: cn(baseBadgeClassName),
  },
  {
    id: 'conference-speech',
    title: 'CONFERENCE SPEECH',
    className: cn(baseBadgeClassName),
  },
];

export const PublicationsLinkBadges = (
  props: Omit<
    LinkBadgesProps<PublicationTag, PublicationTagName>,
    'page' | 'data'
  >,
) => {
  return <LinkBadges {...props} page="publications" data={badges} />;
};
