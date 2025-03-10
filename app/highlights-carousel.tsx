'use client';

import Link from 'next/link';

import type { News, AheadSelfNews } from '@/try-stuff/app/api/news/[tag]/types';

import AutoPlay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselCustomPrevious,
  CarouselCustomNext,
} from '@/try-stuff/components/ui/carousel';
import { cn } from '@/try-stuff/lib/utils';
import {
  NewsItem,
  AheadSelfNewsItem,
} from '@/try-stuff/components/custom/news-item';

interface HighlightsCarouselProps {
  newsData: (News | AheadSelfNews)[];
}

export const HighlightsCarousel = ({ newsData }: HighlightsCarouselProps) => {
  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      plugins={[
        AutoPlay({
          delay: 6000,
          stopOnInteraction: false,
        }),
      ]}
      className="flex flex-col gap-y-6"
    >
      <CarouselContent>
        {newsData.map((item) => (
          <CarouselItem
            key={item.id}
            className={cn(
              'flex max-w-[300px] basis-[100%] items-center',
              'md:basis-1/3',
            )}
          >
            <>
              {item.tag !== 'ahead-self' && (
                <Link
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="inline-block h-full"
                >
                  <NewsItem item={item} />
                </Link>
              )}
              {item.tag === 'ahead-self' && (
                <AheadSelfNewsItem item={item} className="h-full" />
              )}
            </>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-x-2">
        <CarouselCustomPrevious />
        <CarouselCustomNext />
      </div>
    </Carousel>
  );
};
