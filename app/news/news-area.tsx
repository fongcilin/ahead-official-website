'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type {
  NewsTag,
  News,
  AheadSelfNews,
  GetNewsByIdResponseData,
} from '@/try-stuff/app/api/news/[tag]/types';

import {
  typographyVariants,
  Typography,
} from '@/try-stuff/components/typography';
import { Icons } from '@/try-stuff/components/icons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/try-stuff/components/ui/dialog';
import { AspectRatio } from '@/try-stuff/components/ui/aspect-ratio';
import { Button } from '@/try-stuff/components/ui/button';
import { cn, createLinkTarget, createLinkRel } from '@/try-stuff/lib/utils';

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
                <Listitem item={item} />
              </Link>
            )}
            {item.tag === 'ahead-self' && <AheadSelfNews item={item} />}
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

interface ListitemProps {
  item: News | AheadSelfNews;
}

const Listitem = ({ item }: ListitemProps) => {
  return (
    <div className="flex h-full flex-col gap-y-4 border-[1.5px] border-zinc-200">
      <div className="border-b-[1.5px] border-zinc-200">
        {/* The value of sizes="(max-width: 768px) 600px, 320px" is just an around number observing from browser */}
        <AspectRatio ratio={16 / 9}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 600px, 320px"
            priority
            className="object-cover"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-y-4 px-3 pb-9">
        <Typography.H5 className="mt-0 line-clamp-2 border-red-800">
          {item.title}
        </Typography.H5>
        <Typography.Muted className="flex flex-wrap">
          {item.footer.map((subItem, i) => (
            <span
              key={i}
              className={cn({
                'border border-rose-200 px-2 text-rose-500':
                  subItem.variant === 'border',
                'px-1': subItem.variant === 'normal',
              })}
            >
              {subItem.text}
            </span>
          ))}
        </Typography.Muted>
      </div>
    </div>
  );
};

interface AheadSelfNewsProps {
  item: AheadSelfNews;
}

const AheadSelfNews = ({ item }: AheadSelfNewsProps) => {
  return (
    <Dialog>
      <DialogTrigger className="inline-block text-left">
        <Listitem item={item} />
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh*2/3)] max-w-xl overflow-auto sm:rounded-none">
        <DialogHeader className="space-y-6">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 600px, 320px"
              priority
              className="object-cover"
            />
          </AspectRatio>
          <DialogTitle className={cn(typographyVariants({ variant: 'h2' }))}>
            {item.title}
          </DialogTitle>
          <DialogDescription
            className={cn(
              typographyVariants({
                variant: 'p',
                className: 'text-justify',
              }),
            )}
          >
            {item.content.text}
          </DialogDescription>
          {!!item.content.link && (
            <Link
              href={item.content.link}
              rel={createLinkRel(item.content.link)}
              target={createLinkTarget(item.content.link)}
              className="text-red-800"
            >
              {item.content.link}
            </Link>
          )}
          <Typography.Muted className="flex flex-wrap">
            {item.footer.map((subItem, i) => (
              <span
                key={i}
                className={cn({
                  'border border-rose-200 px-2 text-rose-500':
                    subItem.variant === 'border',
                  'px-1': subItem.variant === 'normal',
                })}
              >
                {subItem.text}
              </span>
            ))}
          </Typography.Muted>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
