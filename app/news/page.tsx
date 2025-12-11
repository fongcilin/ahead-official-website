import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import type { NewsTag } from '@/app/api/news/[tag]/types';
import {
  fetchInitNewsData,
  fetchHasMoreNewsData,
} from '@/app/api/news/[tag]/server-fetches';

import { Typography } from '@/components/typography';

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
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-y-8 self-start px-4 pt-24 pb-16 safe-area-inset-bottom sm:gap-y-10 sm:px-6 sm:pt-28 md:px-8 md:pt-32">
      {/* title */}
      <div className="mx-auto w-full max-w-[600px] px-4 sm:px-6">
        <Typography.H1 className="inline-block font-bold bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text pb-6 text-4xl sm:text-5xl md:text-6xl text-transparent text-center">
          News
        </Typography.H1>
        <div className="relative h-2 w-full">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-sm"></div>
        </div>
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
