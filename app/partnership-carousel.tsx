'use client';

import Link from 'next/link';
import Image from 'next/image';

import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/try-stuff/components/ui/carousel';
import { AspectRatio } from '@/try-stuff/components/ui/aspect-ratio';
import { cn, createLinkRel, createLinkTarget } from '@/try-stuff/lib/utils';

const partnerships = [
  {
    id: 'ntuh',
    image: '/images/partnership/ntuh.svg',
    href: 'https://www.ntuh.gov.tw/ntuh/ntuhgroup.jsp',
  },
  {
    id: 'ntucc',
    image: '/images/partnership/ntucc.png',
    href: 'https://www.ntucc.gov.tw/ntucc/Index.action',
  },
  {
    id: 'upmc',
    image: '/images/partnership/upmc.png',
    href: 'https://www.upmc.com/',
  },
  {
    id: 'roswell-park',
    image: '/images/partnership/roswell-park.png',
    href: 'https://www.roswellpark.org/',
  },
  {
    id: 'johns-hopkins',
    image: '/images/partnership/johns-hopkins.png',
    href: 'https://www.hopkinsmedicine.org/',
  },
  {
    id: 'mayo-clinic',
    image: '/images/partnership/mayo-clinic.png',
    href: 'https://www.mayoclinic.org/',
  },
  {
    id: 'show-chwan',
    image: '/images/partnership/show-chwan.png',
    href: 'https://www.scmh.org.tw/',
  },
  {
    id: 'jcvi',
    image: '/images/partnership/jcvi.png',
    href: 'https://www.jcvi.org/',
  },
  {
    id: 'berkeley-skydeck',
    image: '/images/partnership/berkeley-skydeck.png',
    href: 'https://skydeck.berkeley.edu/',
  },
  {
    id: 'isac',
    image: '/images/partnership/isac.png',
    href: 'https://isac-net.org/',
  },
  {
    id: 'nist',
    image: '/images/partnership/nist.png',
    href: 'https://www.nist.gov/',
  },
  {
    id: 'bd',
    image: '/images/partnership/bd.png',
    href: 'https://www.bdbiosciences.com/en-us',
  },
  {
    id: 'flowsols',
    image: '/images/partnership/flowsols.png',
    href: 'https://www.flowsols.com/',
  },
  // TODO: Followings are not available
  // {
  //   id: 'aplc',
  //   image: '/images/partnership/aplc.png',
  // },
  // {
  //   id: 'dharmais',
  //   image: '/images/partnership/dharmais.png',
  // },
  // {
  //   id: 'flow-logic',
  //   image: '/images/partnership/flow-logic.png',
  // },
  // {
  //   id: 'soulcap-initiative',
  //   image: '/images/partnership/soulcap-initiative.png',
  // },
  // {
  //   id: 'tzuchi',
  //   image: '/images/partnership/tzuchi.png',
  // },
  // {
  //   id: 'university-of-rochester',
  //   image: '/images/partnership/university-of-rochester.png',
  // },
  // {
  //   id: 'vghtc',
  //   image: '/images/partnership/vghtc.png',
  // },
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
            <Link
              key={item.id}
              href={item.href}
              target={createLinkTarget(item.href)}
              rel={createLinkRel(item.href)}
              className="w-full"
            >
              <AspectRatio ratio={1}>
                <Image
                  src={item.image}
                  alt={`${item.id} image`}
                  fill
                  sizes="150px"
                  priority
                  className="rounded-md object-contain"
                />
              </AspectRatio>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
