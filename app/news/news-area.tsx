'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';

import type {
  NewsTag,
  News,
  AheadSelfNews,
  GetNewsByIdResponseData,
} from '@/try-stuff/app/api/news/[tag]/types';

import { Icons } from '@/try-stuff/components/icons';
import { Button } from '@/try-stuff/components/ui/button';
import {
  NewsItem,
  AheadSelfNewsItem,
} from '@/try-stuff/components/custom/news-item';
import { cn } from '@/try-stuff/lib/utils';

interface NewsAreaProps {
  tag: NewsTag;
  initNewsData: (News | AheadSelfNews)[];
  initHasMoreNewsData: boolean;
}

export const NewsArea = ({
  tag,
  initNewsData,
  initHasMoreNewsData,
}: NewsAreaProps) => {
  const [newsList, setNewsList] =
    useState<(News | AheadSelfNews)[]>(initNewsData);

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
      <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {newsList.map((item) => (
          <Fragment key={item.id}>
            {item.tag !== 'ahead-self' && (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                className="inline-block"
              >
                <NewsItem item={item} />
              </Link>
            )}
            {item.tag === 'ahead-self' && <AheadSelfNewsItem item={item} />}
          </Fragment>
        ))}
      </div>

      {/* load more */}
      {hasMoreNews && !isLoading && (
        <div className="mt-20 flex justify-center">
          <Button
            variant="outline"
            className={cn(
              'w-60 border-rose-800 text-rose-500',
              'sm:w-80',
              'hover:bg-rose-900 hover:text-rose-200',
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
          <Icons.Spinner className="h-12 w-12 animate-spin text-rose-600" />
        </div>
      )}
    </>
  );
};
