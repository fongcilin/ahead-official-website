'use client';

import Image from 'next/image';

import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/try-stuff/components/ui/carousel';
import { AspectRatio } from '@/try-stuff/components/ui/aspect-ratio';
import { cn } from '@/try-stuff/lib/utils';

const partnerships = [
  {
    id: 1,
    image: '/images/partnership/aplc.png',
    alt: 'aplc image',
  },
  {
    id: 2,
    image: '/images/partnership/bd.png',
    alt: 'bd image',
  },
  {
    id: 3,
    image: '/images/partnership/berkeley-skydeck.png',
    alt: 'berkeley-skydeck image',
  },
  {
    id: 4,
    image: '/images/partnership/dharmais.png',
    alt: 'dharmais image',
  },
  {
    id: 5,
    image: '/images/partnership/flow-logic.png',
    alt: 'flow-logic image',
  },
  {
    id: 6,
    image: '/images/partnership/flowcytometry-solutions.png',
    alt: 'flowcytometry-solutions image',
  },
  {
    id: 7,
    image: '/images/partnership/isac.png',
    alt: 'isac image',
  },
  {
    id: 8,
    image: '/images/partnership/jcvi.png',
    alt: 'jcvi image',
  },
  {
    id: 9,
    image: '/images/partnership/johns-hopkins.png',
    alt: 'johns-hopkins image',
  },
  {
    id: 10,
    image: '/images/partnership/mayo-clinic.png',
    alt: 'mayo-clinic image',
  },
  {
    id: 11,
    image: '/images/partnership/nist.png',
    alt: 'nist image',
  },
  {
    id: 12,
    image: '/images/partnership/ntucc.png',
    alt: 'ntucc image',
  },
  {
    id: 13,
    image: '/images/partnership/roswell-park.png',
    alt: 'roswell-park image',
  },
  {
    id: 14,
    image: '/images/partnership/show-chwan.png',
    alt: 'show-chwan image',
  },
  {
    id: 15,
    image: '/images/partnership/soulcap-initiative.png',
    alt: 'soulcap-initiative image',
  },
  {
    id: 16,
    image: '/images/partnership/tzuchi.png',
    alt: 'tzuchi image',
  },
  {
    id: 17,
    image: '/images/partnership/university-of-rochester.png',
    alt: 'university-of-rochester image',
  },
  {
    id: 18,
    image: '/images/partnership/upmc.png',
    alt: 'upmc image',
  },
  {
    id: 19,
    image: '/images/partnership/vghtc.png',
    alt: 'vghtc image',
  },
];

export const PartnershipCarousel = () => {
  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      plugins={[
        AutoScroll({
          startDelay: 0,
          stopOnInteraction: false,
          speed: 1,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {partnerships.map((item, index) => (
          <CarouselItem
            key={index}
            className={cn(
              'flex max-w-[150px] basis-1/4 items-center',
              'md:basis-1/6',
            )}
          >
            <AspectRatio ratio={1}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="150px"
                priority
                className="rounded-md object-contain"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
