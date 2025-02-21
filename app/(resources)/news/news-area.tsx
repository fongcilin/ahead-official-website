'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type {
  NewsTag,
  News,
  GetNewsByIdResponseData,
} from '@/try-stuff/app/api/news/[tag]/types';

import { Typography } from '@/try-stuff/components/typography';
import { AspectRatio } from '@/try-stuff/components/ui/aspect-ratio';
import { Button } from '@/try-stuff/components/ui/button';
import { cn } from '@/try-stuff/lib/utils';

interface NewsAreaProps {
  tag: NewsTag;
  initNewsData: News[];
  initHasMoreNewsData: boolean;
}

export const NewsArea = ({
  tag,
  initNewsData,
  initHasMoreNewsData,
}: NewsAreaProps) => {
  const [newsList, setNewsList] = React.useState<News[]>(initNewsData);

  const [cursor, setCursor] = React.useState(initNewsData.length);

  const [hasMoreNews, setHasMoreNews] = React.useState(initHasMoreNewsData);

  const perRequestCount = 9;

  const handleLoadMore = async () => {
    setCursor((prev) => prev + perRequestCount);

    const response = await fetch(
      `/api/news/${tag}?cursor=${cursor}&count=${perRequestCount}`,
    );
    const { data, hasMore } =
      (await response.json()) as GetNewsByIdResponseData;

    setNewsList((prev) => [...prev, ...data]);
    setHasMoreNews(hasMore);
  };

  return (
    <>
      {/* new list */}
      <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {newsList.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            className="flex flex-col gap-y-2"
          >
            <div className="rounded-md border border-red-800">
              {/* The value of sizes="(max-width: 768px) 600px, 320px" is just an around number observing from browser */}
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 600px, 320px"
                  priority
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography.Blockquote className="mt-0 line-clamp-2 border-red-800 font-bold">
                {item.title}
              </Typography.Blockquote>
              <Typography.Muted>{item.footer}</Typography.Muted>
            </div>
          </Link>
        ))}
      </div>

      {/* load more */}
      {hasMoreNews && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            className={cn(
              'w-80 border-rose-800 text-rose-500',
              'hover:bg-rose-900 hover:text-rose-200',
            )}
            onClick={handleLoadMore}
          >
            LoadMore
          </Button>
        </div>
      )}
    </>
  );
};
