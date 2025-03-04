import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import type { NewsTag } from '@/try-stuff/app/api/news/[tag]/types';
import {
  fetchInitNewsData,
  fetchHasMoreNewsData,
} from '@/try-stuff/app/api/news/[tag]/server-fetches';

import { Typography } from '@/try-stuff/components/typography';

import { NewsLinkBadges } from './news-link-badges';
import { NewsArea } from './news-area';

export const metadata: Metadata = {
  title: 'News',
};

type Params = Promise<{ tag?: NewsTag }>;

export default async function NewsPage({ params }: { params: Params }) {
  const { tag } = await params;
  const validTag = tag || 'all';
  const newsCount = 9;

  const initNewsData = await fetchInitNewsData(validTag, newsCount);
  const isNewsDataEmpty = initNewsData.length === 0;

  if (isNewsDataEmpty) {
    redirect('/news');
  }

  const initHasMoreNewsData = await fetchHasMoreNewsData(
    validTag,
    initNewsData.length,
  );

  return (
    <main className="mx-auto flex w-full max-w-[1080px] flex-col gap-y-10 self-start px-4 pt-[120px]">
      {/* title */}
      <div className="mx-auto max-w-[600px] px-4">
        <Typography.H1 className="flex text-center text-zinc-500">
          <span className="bg-rose-500 px-1 text-white">N</span>ews
        </Typography.H1>
      </div>

      {/* badges */}
      <NewsLinkBadges className="w-full self-start" />

      {/* news area */}
      <NewsArea
        tag={validTag}
        initNewsData={initNewsData}
        initHasMoreNewsData={initHasMoreNewsData}
      />
    </main>
  );
}
