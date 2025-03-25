import { fetchAllHighlightNewsData } from '@/app/api/news/[tag]/server-fetches';

import { Typography } from '@/components/typography';
import { cn } from '@/lib/utils';

import { HighlightsCarousel } from './highlights-carousel';

export const Highlights = async () => {
  const newsData = await fetchAllHighlightNewsData();

  return (
    <div
      className={cn(
        'mx-auto flex w-screen flex-col gap-y-10 px-4',
        'lg:max-w-[960px]',
      )}
    >
      <Typography.H2 className="my-10 text-center text-zinc-500">
        Highlights
      </Typography.H2>
      <HighlightsCarousel newsData={newsData} />
    </div>
  );
};
