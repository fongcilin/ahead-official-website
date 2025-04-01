'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type {
  PublicationTag,
  Publication,
  GetPublicationByIdResponseData,
} from '@/app/api/publications/[tag]/types';

import { Typography } from '@/components/typography';
import { Icons } from '@/components/icons';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { cn, createLinkTarget, createLinkRel } from '@/lib/utils';

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
      <div
        className={cn(
          'grid grid-cols-1 gap-8',
          'sm:grid-cols-2 md:grid-cols-3',
        )}
      >
        {publicationList.map((item) => (
          <Fragment key={item.id}>
            {item.url !== '' && (
              <Link
                href={item.url}
                target={createLinkTarget(item.url)}
                rel={createLinkRel(item.url)}
                className="inline-block"
              >
                <ListItem item={item} />
              </Link>
            )}
            {item.url === '' && <ListItem item={item} />}
          </Fragment>
        ))}
      </div>

      {/* load more */}
      {hasMorePublications && !isLoading && (
        <div className="mt-20 flex justify-center">
          <Button
            variant="outline"
            className={cn(
              'border-ahead-red-500 text-ahead-red-500 w-60',
              'sm:w-80',
              'hover:bg-ahead-red-700 hover:border-ahead-red-700 hover:text-white',
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

interface ListItemProps {
  item: Publication;
}

const ListItem = ({ item }: ListItemProps) => {
  return (
    <div className="flex h-full flex-col gap-y-4 border-[1.5px] border-zinc-200">
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
    </div>
  );
};
