import { redirect } from 'next/navigation';

import {
  fetchInitNewsData,
  fetchHasMoreNewsData,
} from '@/try-stuff/app/api/news/[tag]/route';
import type { NewsTag, News } from '@/try-stuff/app/api/news/[tag]/types';

import { Typography } from '@/try-stuff/components/typography';

import { NewsLinkBadges } from './news-link-badges';
import { NewsArea } from './news-area';

type Params = Promise<{ tag?: NewsTag }>;

export default async function News({ params }: { params: Params }) {
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
    <main className="mx-auto flex w-full max-w-[1080px] flex-col gap-10 px-4 pt-[120px]">
      {/* title */}
      <Typography.H1 className="mx-auto max-w-[600px] px-4 text-center text-zinc-500">
        News
      </Typography.H1>

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
