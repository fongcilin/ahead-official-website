'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import { AspectRatio } from '@/try-stuff/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/try-stuff/components/ui/carousel';

const trustBy = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  image: `image-${i + 1}`,
}));

export const TrustByCarousel = () => {
  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      plugins={[
        AutoScroll({
          startDelay: 0,
          stopOnInteraction: false,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {trustBy.map((item, index) => (
          <CarouselItem key={index} className="basis-1/4 md:basis-1/6">
            <div key={item.id} className="max-w-[150px]">
              <AspectRatio ratio={1}>
                <div className="flex h-full w-full items-center justify-center bg-gray-300">
                  {item.image}
                </div>
              </AspectRatio>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
