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
      opts={{
        align: 'start',
        loop: true,
        slidesToScroll: 3,
      }}
      plugins={[
        AutoPlay({
          delay: 6000,
          stopOnInteraction: false,
        }),
      ]}
      className="flex flex-col gap-y-6 ios-image-fix"
    >
      <CarouselContent className="embla__container !ml-0 items-stretch">
        {newsData.map((item) => (
          <CarouselItem
            key={item.id}
            className={cn(
              'flex embla__slide !pl-0',
              'basis-full',
              // 每個卡片 1/3 寬度，減去間距分攤 (2個gap × 16px ÷ 3 = 10.67px)
              // 加上 margin-right 16px 作為間距
              'md:basis-[calc(33.333%-10.67px)] md:mr-4 md:last:mr-0',
            )}
          >
            <HighlightNewsItem item={item} className="h-full w-full" />
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
