'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';

import type {
  NewsTag,
  News,
  GetNewsByIdResponseData,
} from '@/app/api/news/[tag]/types';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { NewsItem } from '@/components/custom/news-item';
import { cn } from '@/lib/utils';

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
  const [newsList, setNewsList] = useState<News[]>(initNewsData);

  const [cursor, setCursor] = useState(initNewsData.length);

  const [hasMoreNews, setHasMoreNews] = useState(initHasMoreNewsData);

  const [isLoading, setIsLoading] = useState(false);

  const perRequestCount = 9;

  const handleLoadMore = async () => {
    setIsLoading(true);
    setCursor((prev) => prev + perRequestCount);
    const response = await fetch(
      `/api/news/${tag}?cursor=${cursor}&count=${perRequestCount}`,
    );
    const { data, hasMore } =
      (await response.json()) as GetNewsByIdResponseData;
    setNewsList((prev) => [...prev, ...data]);
    setHasMoreNews(hasMore);
    setIsLoading(false);
  };

  return (
    <>
      {/* new list */}
      <div className="grid flex-1 grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3">
        {newsList.map((item) => (
          <Fragment key={item.id}>
            <Link
              key={item.id}
              href={item.url}
              target="_blank"
              className="inline-block"
            >
              <NewsItem item={item} />
            </Link>
          </Fragment>
        ))}
      </div>

      {/* load more */}
      {hasMoreNews && !isLoading && (
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
          <Button
            variant="outline"
            className={cn(
              'border-ahead-red-500 text-ahead-red-500',
              'w-full max-w-xs',
              'sm:max-w-sm',
              'md:max-w-md',
              'touch-target',
              'hover:bg-ahead-red-700 hover:border-ahead-red-700 hover:text-white',
              'active:bg-ahead-red-800 active:border-ahead-red-800',
              'transition-colors',
            )}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </div>
      )}

      {/* loading */}
      {isLoading && (
        <div className="mt-20 flex justify-center">
          <Icons.Spinner className="text-ahead-red-800 h-12 w-12 animate-spin" />
        </div>
      )}
    </>
  );
};
