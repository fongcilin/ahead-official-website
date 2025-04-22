'use client';

import type { HighlightNews } from '@/app/api/news/[tag]/types';

import AutoPlay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselCustomPrevious,
  CarouselCustomNext,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { HighlightNewsItem } from '@/components/custom/news-item';

interface HighlightsCarouselProps {
  newsData: HighlightNews[];
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
            <HighlightNewsItem item={item} className="h-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-x-2 mt-4">
        <CarouselCustomPrevious />
        <CarouselCustomNext />
      </div>
    </Carousel>
  );
};
