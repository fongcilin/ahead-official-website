'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type {
  PublicationTag,
  Publication,
  GetPublicationByIdResponseData,
} from '@/try-stuff/app/api/publications/[tag]/types';

import { Typography } from '@/try-stuff/components/typography';
import { Icons } from '@/try-stuff/components/icons';
import { AspectRatio } from '@/try-stuff/components/ui/aspect-ratio';
import { Button } from '@/try-stuff/components/ui/button';
import { cn } from '@/try-stuff/lib/utils';

interface PublicationsAreaProps {
  tag: PublicationTag;
  initPublicationData: Publication[];
  initHasMorePublicationData: boolean;
}

export const PublicationsArea = ({
  tag,
  initPublicationData,
  initHasMorePublicationData,
}: PublicationsAreaProps) => {
  const [publicationList, setPublicationList] =
    useState<Publication[]>(initPublicationData);

  const [cursor, setCursor] = useState(initPublicationData.length);

  const [hasMorePublications, setHasMorePublications] = useState(
    initHasMorePublicationData,
  );

  const [isLoading, setIsLoading] = useState(false);

  const perRequestCount = 9;

  const handleLoadMore = async () => {
    setIsLoading(true);
    setCursor((prev) => prev + perRequestCount);
    const response = await fetch(
      `/api/publications/${tag}?cursor=${cursor}&count=${perRequestCount}`,
    );
    const { data, hasMore } =
      (await response.json()) as GetPublicationByIdResponseData;
    setPublicationList((prev) => [...prev, ...data]);
    setHasMorePublications(hasMore);
    setIsLoading(false);
  };

  return (
    <>
      {/* new list */}
      <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {publicationList.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target={item.url.startsWith('http') ? '_blank' : '_self'}
            className="flex flex-col gap-y-4 border-[1.5px] border-zinc-200"
          >
            <div className="relative border-b-[1.5px] border-zinc-200">
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
              <div className="absolute -right-2 bottom-2 text-nowrap bg-red-800 px-2 py-1 text-xs text-white">
                {item.tagName}
              </div>
            </div>
            <div className="flex flex-col gap-y-4 px-3 pb-9">
              <Typography.H5 className="mt-0 line-clamp-2 border-red-800">
                {item.title}
              </Typography.H5>
              <Typography.Muted className="flex flex-wrap">
                {item.author}
              </Typography.Muted>
              <Typography.Muted className="flex flex-wrap">
                {item.footer}
              </Typography.Muted>
            </div>
          </Link>
        ))}
      </div>

      {/* load more */}
      {hasMorePublications && !isLoading && (
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
