import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import type { PublicationTag } from '@/app/api/publications/[tag]/types';
import {
  fetchInitPublicationData,
  fetchHasMorePublicationData,
} from '@/app/api/publications/[tag]/server-fetches';

import { Typography } from '@/components/typography';

import { PublicationsLinkBadges } from './publications-link-badges';
import { PublicationsArea } from './publications-area';

export const metadata: Metadata = {
  title: 'Publications',
};

type Params = Promise<{ tag?: PublicationTag }>;

export default async function PublicationsPage({ params }: { params: Params }) {
  const { tag } = await params;
  const validTag = tag || 'all';
  const publicationsCount = 9;

  const initPublicationData = await fetchInitPublicationData(
    validTag,
    publicationsCount,
  );
  const isPublicationDataEmpty = initPublicationData.length === 0;

  if (isPublicationDataEmpty) {
    redirect('/publications');
  }

  const initHasMorePublicationData = await fetchHasMorePublicationData(
    validTag,
    initPublicationData.length,
  );

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-y-8 self-start px-4 pt-24 pb-16 safe-area-inset-bottom sm:gap-y-10 sm:px-6 sm:pt-28 md:px-8 md:pt-32">
      {/* title */}
      <div className="mx-auto w-full max-w-[600px] px-4 sm:px-6">
        <Typography.H1 className="inline-block font-bold bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text pb-6 text-4xl sm:text-5xl md:text-6xl text-transparent text-center">
          Publications
        </Typography.H1>
        <div className="relative h-2 w-full">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-sm"></div>
        </div>
      </div>

      {/* badges */}
      <PublicationsLinkBadges className="w-full self-start" />

      {/* publications area */}
      <PublicationsArea
        tag={validTag}
        initPublicationData={initPublicationData}
        initHasMorePublicationData={initHasMorePublicationData}
      />
    </main>
  );
}
