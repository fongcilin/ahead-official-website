import Image from 'next/image';
import type { Metadata } from 'next';

import { Icons } from '@/components/icons';
import { Typography } from '@/components/typography';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { PinkTextBlock } from '@/components/custom/pink-text-block';
import { PinkBallsParallax } from '@/components/custom/pink-balls-parallax';
import { cn } from '@/lib/utils';

// import { SquirmingCellsBanner } from './squirming-cells-banner';
import { HandleTheRest } from './handle-the-rest';
import { Partnership } from './partnership';
import { Highlights } from './highlights';

export const metadata: Metadata = {
  // The metadata in ./layout.tsx only applies to the child routes of the layout,
  // so we need to define the metadata for the home page here.
  title: {
    absolute: 'Home | AHEAD Medicine',
  },
};

const feats = [
  {
    id: 1,
    image: '',
    title: 'Feature 1',
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 2,
    image: '',
    title: 'Feature 2',
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 3,
    image: '',
    title: 'Feature 3',
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 4,
    image: '',
    title: 'Feature 4',
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 5,
    image: '',
    title: 'Feature 5',
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 6,
    image: '',
    title: 'Feature 6',
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center gap-y-20 pt-[56px]">
      <div className={cn('relative min-h-[600px] w-full', 'md:min-h-[800px]')}>
        <Image
          src="/images/banner/cell_bg.png"
          alt="cell bg background"
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
        />
        <Image
          src="/images/banner/cell_role.png"
          alt="cell role background"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'right bottom',
            zIndex: -1,
          }}
        />
        <Image
          src="/images/banner/cell_right.png"
          alt="cell right background"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'right top',
            zIndex: -1,
          }}
        />
        {/* Logo text */}
        <div className="flex items-center justify-center pt-[calc(120px-56px)]">
          <Icons.Logo className={cn('h-20 w-40', 'md:h-24 md:w-48')} />
        </div>

        {/* Key visual  */}
        <div className="mx-auto flex max-w-[800px] flex-col gap-y-4 px-4">
          <Typography.H1
            className={cn(
              'text-center text-5xl text-zinc-500',
              'md:text-left',
              'lg:text-7xl',
            )}
          >
            Your AI Co-pilot in Medicine
          </Typography.H1>
          <Typography.Blockquote className="max-w-[400px] self-start border-red-800 font-bold">
            AHEAD{`'`}s Cyto-copilot enhances the efficiency, consistency, and
            scalability of flow cytometry analysis, empowering research,
            clinical diagnostics, and cell therapy quality control.
          </Typography.Blockquote>
        </div>
      </div>

      {/* Focus on your proficiency */}
      <HandleTheRest />

      {/* Video */}
      <PinkBallsParallax className="w-screen py-10">
        <div className="mx-auto max-w-[800px]">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/EG-B5R5tYtQ"
              allowFullScreen
              width="100%"
              height="100%"
              title="intro video"
            />
          </AspectRatio>
        </div>
      </PinkBallsParallax>

      {/* Features */}
      <div className="mx-auto flex max-w-[1080px] flex-col gap-y-20 px-4">
        {feats.map((item, i) => (
          <div
            key={item.id}
            className={cn(
              'flex flex-col items-center gap-y-6',
              'md:gap-x-6',
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            )}
          >
            <div className="w-full max-w-[480px]">
              <AspectRatio ratio={1}>
                <div
                  className={cn(
                    'flex h-full w-full items-center justify-center self-center bg-gray-300',
                    'md:self-auto',
                  )}
                >
                  real product snapshot
                </div>
              </AspectRatio>
            </div>
            <PinkTextBlock className={cn('md:flex-[0_0_50%] md:self-center')}>
              <Typography.H3>{item.title}</Typography.H3>
              <Typography.P>{item.intro}</Typography.P>
            </PinkTextBlock>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <Highlights />

      {/* Partnership */}
      <Partnership />
    </main>
  );
}
