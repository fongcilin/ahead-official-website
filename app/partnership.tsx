'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Typography } from '@/components/typography';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { PinkBallsParallax } from '@/components/custom/pink-balls-parallax';
import { cn, createLinkRel, createLinkTarget } from '@/lib/utils';

type Partner = {
  id: string;
  image: string;
  href: string;
};

const academias: Partner[] = [
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

const societies: Partner[] = [
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
];

const industries: Partner[] = [
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
];

export const Partnership = () => {
  return (
    <PinkBallsParallax className="w-screen py-20">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-y-10 px-4">
        <SubBlock>
          <Typography.H2 className="text-center text-zinc-500">
            Partnership
          </Typography.H2>
          <Typography.P
            className={cn(
              'mx-auto max-w-[400px] text-center text-zinc-400',
              '[&:not(:first-child)]:mt-0',
            )}
          >
            We are proud to work with the following partners, who have been
            instrumental in our journey.
          </Typography.P>
        </SubBlock>
        <SubBlock>
          <Typography.H3 className="text-center text-red-800">
            Academia
          </Typography.H3>
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
              {academias.map((item) => (
                <CarouselItem
                  key={item.id}
                  className={cn(
                    'flex max-w-[150px] basis-1/4 items-center',
                    'md:basis-1/6',
                  )}
                >
                  <ListItemLink item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </SubBlock>
        <SubBlock>
          <Typography.H3 className="text-center text-red-800">
            Society and Authorities
          </Typography.H3>
          <div className="flex justify-center gap-x-4">
            {societies.map((item) => (
              <div key={item.id} className="w-full max-w-[150px]">
                <ListItemLink item={item} />
              </div>
            ))}
          </div>
        </SubBlock>
        <SubBlock>
          <Typography.H3 className="text-center text-red-800">
            Industry
          </Typography.H3>
          <div className="flex justify-center gap-x-4">
            {industries.map((item) => (
              <div key={item.id} className="w-full max-w-[150px]">
                <ListItemLink item={item} />
              </div>
            ))}
          </div>
        </SubBlock>
      </div>
    </PinkBallsParallax>
  );
};

interface SubBlockProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const SubBlock = ({ children, ...props }: SubBlockProps) => {
  return (
    <div className="flex flex-col gap-y-4" {...props}>
      {children}
    </div>
  );
};

interface ListItemLinkProps {
  item: Partner;
}

const ListItemLink = ({ item }: ListItemLinkProps) => {
  return (
    <Link
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
  );
};
