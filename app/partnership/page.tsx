import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/try-stuff/components/typography';
import { AspectRatio } from '@/try-stuff/components/ui/aspect-ratio';
import { PinkTextBlock } from '@/try-stuff/components/custom/pink-text-block';
import { PinkBallsParallax } from '@/try-stuff/components/custom/pink-balls-parallax';
import { cn } from '@/try-stuff/lib/utils';

export const metadata: Metadata = {
  title: 'Partnership',
};

type Partnership = {
  id: string;
  image: string;
  title: string;
  href: string;
  intro: string;
};

const academiaList: Partnership[] = [
  {
    id: 'ntuh',
    image: '/images/partnership/ntuh.svg',
    title: 'NTUH',
    href: 'https://www.ntuh.gov.tw/ntuh/ntuhgroup.jsp',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
  {
    id: 'ntucc',
    image: '/images/partnership/ntucc.png',
    title: 'NTUCC',
    href: 'https://www.ntucc.gov.tw/ntucc/Index.action',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
  {
    id: 'upmc',
    image: '/images/partnership/upmc.png',
    title: 'UPMC',
    href: 'https://www.upmc.com/',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
  {
    id: 'roswell-park',
    image: '/images/partnership/roswell-park.png',
    title: 'Roswell Park',
    href: 'https://www.roswellpark.org/',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
  {
    id: 'johns-hopkins',
    image: '/images/partnership/johns-hopkins.png',
    title: 'Johns Hopkins Medicine',
    href: 'https://www.hopkinsmedicine.org/',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
  {
    id: 'mayo-clinic',
    image: '/images/partnership/mayo-clinic.png',
    title: 'Mayo Clinic',
    href: 'https://www.mayoclinic.org/',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
  {
    id: 'show-chwan',
    image: '/images/partnership/show-chwan.png',
    title: 'Chang Bing Show Chwan Memorial Hospital',
    href: 'https://www.scmh.org.tw/',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
  {
    id: 'jcvi',
    image: '/images/partnership/jcvi.png',
    title: 'JCVI',
    href: 'https://www.jcvi.org/',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
  {
    id: 'berkeley-skydeck',
    image: '/images/partnership/berkeley-skydeck.png',
    title: 'Berkeley SKYDECK',
    href: 'https://skydeck.berkeley.edu/',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
];

const societyAndAuthorities: Partnership[] = [
  {
    id: 'isac',
    image: '/images/partnership/isac.png',
    title: 'ISAC',
    href: 'https://isac-net.org/',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
  {
    id: 'nist',
    image: '/images/partnership/nist.png',
    title: 'NIST',
    href: 'https://www.nist.gov/',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
];

const industries: Partnership[] = [
  {
    id: 'bd',
    image: '/images/partnership/bd.png',
    title: 'BD Biosciences',
    href: 'https://www.bdbiosciences.com/en-us',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
  {
    id: 'flowsols',
    image: '/images/partnership/flowsols.png',
    title: 'Flowcytometry Solutions',
    href: 'https://www.flowsols.com/',
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero similique maiores laboriosam in autem officia sed nobis eos odit ipsam est veniam, voluptate expedita unde, adipisci itaque. Iusto natus beatae architecto perferendis minus veniam, quod temporibus a! Optio blanditiis earum ab commodi maiores magni ullam quas quam at aspernatur!`,
  },
];

export default function PartnershipPage() {
  return (
    <main>
      <PinkBallsParallax className="flex min-h-full flex-col gap-y-20 px-4 pb-20 pt-40">
        <div className="mx-auto max-w-[600px] text-center">
          <Typography.H1 className="bg-rose-400 px-8 py-6 text-white">
            Partnership
          </Typography.H1>
        </div>
        <div className="mx-auto max-w-[600px]">
          <Typography.H2 className="text-red-800">Academia</Typography.H2>
        </div>
        {academiaList.map((academia) => (
          <ListItem key={academia.id} item={academia} />
        ))}
        <div className="mx-auto max-w-[600px]">
          <Typography.H2 className="text-red-800">
            Society and Authorities
          </Typography.H2>
        </div>
        {societyAndAuthorities.map((academia) => (
          <ListItem key={academia.id} item={academia} />
        ))}
        <div className="mx-auto max-w-[600px]">
          <Typography.H2 className="text-red-800">Industry</Typography.H2>
        </div>
        {industries.map((industry) => (
          <ListItem key={industry.id} item={industry} />
        ))}
      </PinkBallsParallax>
    </main>
  );
}

interface ListItemProps {
  item: Partnership;
}

const ListItem = ({ item }: ListItemProps) => (
  <div
    className={cn(
      'mx-auto flex w-full max-w-[960px] flex-col gap-y-6',
      'md:gay-y-0 md:flex-row md:gap-x-6',
    )}
  >
    <div
      className={cn(
        'w-full max-w-[200px] self-center rounded-md border-2 border-red-800 bg-white p-2',
        'md:self-start',
      )}
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
    </div>
    <PinkTextBlock className="flex-[1_1_50%] self-start">
      <Link href={item.href} target="_blank" className="inline-block">
        <Typography.H3
          className={cn('underline underline-offset-4', 'hover:text-red-900')}
        >
          {item.title}
        </Typography.H3>
      </Link>
      <Typography.P>{item.intro}</Typography.P>
    </PinkTextBlock>
  </div>
);
