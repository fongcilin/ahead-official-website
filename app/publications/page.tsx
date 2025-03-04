import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import type { PublicationTag } from '@/try-stuff/app/api/publications/[tag]/types';
import {
  fetchInitPublicationData,
  fetchHasMorePublicationData,
} from '@/try-stuff/app/api/publications/[tag]/server-fetches';

import { Typography } from '@/try-stuff/components/typography';

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
    <main className="mx-auto flex w-full max-w-[1080px] flex-col gap-y-10 self-start px-4 pt-[120px]">
      {/* title */}
      <div className="mx-auto max-w-[600px] px-4">
        <Typography.H1 className="flex text-center text-zinc-500">
          <span className="bg-rose-500 px-1 text-white">P</span>ublications
        </Typography.H1>
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
