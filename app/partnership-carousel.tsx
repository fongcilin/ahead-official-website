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
    alt: 'ntuh image',
    href: 'https://www.ntuh.gov.tw/ntuh/ntuhgroup.jsp',
  },
  {
    id: 'ntucc',
    image: '/images/partnership/ntucc.png',
    alt: 'ntucc image',
    href: 'https://www.ntucc.gov.tw/ntucc/Index.action',
  },
  {
    id: 'upmc',
    image: '/images/partnership/upmc.png',
    alt: 'upmc image',
    href: 'https://www.upmc.com/',
  },
  {
    id: 'johns-hopkins',
    image: '/images/partnership/johns-hopkins.png',
    alt: 'johns-hopkins image',
    href: 'https://www.hopkinsmedicine.org/',
  },
  {
    id: 'mayo-clinic',
    image: '/images/partnership/mayo-clinic.png',
    alt: 'mayo-clinic image',
    href: 'https://www.mayoclinic.org/',
  },
  {
    id: 'show-chwan',
    image: '/images/partnership/show-chwan.png',
    alt: 'show-chwan image',
    href: 'https://www.scmh.org.tw/',
  },
  {
    id: 'jcvi',
    image: '/images/partnership/jcvi.png',
    alt: 'jcvi image',
    href: 'https://www.jcvi.org/',
  },
  {
    id: 'berkeley-skydeck',
    image: '/images/partnership/berkeley-skydeck.png',
    alt: 'berkeley-skydeck image',
    href: 'https://skydeck.berkeley.edu/',
  },
  {
    id: 'isac',
    image: '/images/partnership/isac.png',
    alt: 'isac image',
    href: 'https://isac-net.org/',
  },
  {
    id: 'nist',
    image: '/images/partnership/nist.png',
    alt: 'nist image',
    href: 'https://www.nist.gov/',
  },
  {
    id: 'bd',
    image: '/images/partnership/bd.png',
    alt: 'bd image',
    href: 'https://www.bd.com/',
  },
  {
    id: 'flowsols',
    image: '/images/partnership/flowsols.png',
    alt: 'flowsols image',
    href: 'https://www.flowsols.com/',
  },
  // TODO: Followings are not sure how to do sorting
  // {
  //   id: 'aplc',
  //   image: '/images/partnership/aplc.png',
  //   alt: 'aplc image',
  // },
  // {
  //   id: 'dharmais',
  //   image: '/images/partnership/dharmais.png',
  //   alt: 'dharmais image',
  // },
  // {
  //   id: 'flow-logic',
  //   image: '/images/partnership/flow-logic.png',
  //   alt: 'flow-logic image',
  // },
  // {
  //   id: 'roswell-park',
  //   image: '/images/partnership/roswell-park.png',
  //   alt: 'roswell-park image',
  // },
  // {
  //   id: 'soulcap-initiative',
  //   image: '/images/partnership/soulcap-initiative.png',
  //   alt: 'soulcap-initiative image',
  // },
  // {
  //   id: 'tzuchi',
  //   image: '/images/partnership/tzuchi.png',
  //   alt: 'tzuchi image',
  // },
  // {
  //   id: 'university-of-rochester',
  //   image: '/images/partnership/university-of-rochester.png',
  //   alt: 'university-of-rochester image',
  // },
  // {
  //   id: 'vghtc',
  //   image: '/images/partnership/vghtc.png',
  //   alt: 'vghtc image',
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
                  alt={item.alt}
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
