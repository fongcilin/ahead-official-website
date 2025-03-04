import { Icons } from '@/try-stuff/components/icons';
import { Typography } from '@/try-stuff/components/typography';
import { AspectRatio } from '@/try-stuff/components/ui/aspect-ratio';
import { PinkTextBlock } from '@/try-stuff/components/custom/pink-text-block';
import { PinkBallsParallax } from '@/try-stuff/components/custom/pink-balls-parallax';
import { cn } from '@/try-stuff/lib/utils';

import { SquirmingCellsBanner } from './squirming-cells-banner';
import { PartnershipCarousel } from './partnership-carousel';

const advantages = [
  {
    id: 1,
    title: 'Efficiency',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur? Laborum, id sint iusto ipsam quaerat repudiandae molestias recusandae tempore hic magnam esse aut provident modi expedita voluptates officiis ad?',
  },
  {
    id: 2,
    title: 'Precision',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur? Laborum, id sint iusto ipsam quaerat repudiandae molestias recusandae tempore hic magnam esse aut provident modi expedita voluptates officiis ad?',
  },
  {
    id: 3,
    title: 'Innovation',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur? Laborum, id sint iusto ipsam quaerat repudiandae molestias recusandae tempore hic magnam esse aut provident modi expedita voluptates officiis ad?',
  },
  {
    id: 4,
    title: 'Quality',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur? Laborum, id sint iusto ipsam quaerat repudiandae molestias recusandae tempore hic magnam esse aut provident modi expedita voluptates officiis ad?',
  },
];

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

const feeds = [
  {
    id: 1,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 2,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 3,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 4,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center gap-y-20 pt-[56px]">
      <SquirmingCellsBanner
        className="min-h-[600px] md:min-h-[800px]"
        contentClassName="flex flex-col gap-y-20"
      >
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
      </SquirmingCellsBanner>

      {/* Focus on your proficiency */}
      <div className="mx-auto flex max-w-[1080px] flex-col gap-y-10 px-4">
        <Typography.H2 className="my-10 text-center text-zinc-500">
          Focus on your proficiency, let us handle the rest
        </Typography.H2>
        <div className="grid gap-4 md:grid-cols-4 md:gap-6">
          {advantages.map((item) => (
            <div key={item.id} className="flex flex-col gap-y-2 text-center">
              <Typography.H4 className="text-zinc-500">
                {item.title}
              </Typography.H4>
              <PinkTextBlock>
                <Typography.P>{item.description}</Typography.P>
              </PinkTextBlock>
            </div>
          ))}
        </div>
      </div>

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

      {/* Feedbacks */}
      <div className="mx-auto flex max-w-[800px] flex-col gap-y-10 px-4">
        <Typography.H2 className="text-center text-zinc-500">
          Feedbacks
        </Typography.H2>
        <div className={cn('grid gap-4', 'md:gap-6')}>
          {feeds.map((item, i) => (
            <div
              key={item.id}
              className={i % 2 === 0 ? 'md:pl-40' : 'md:pr-40'}
            >
              <Typography.P className="rounded-md border-2 border-red-800 p-4">
                {item.description}
              </Typography.P>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership */}
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-y-10 px-4">
        <Typography.H2 className="text-center text-zinc-500">
          Partnership
        </Typography.H2>
        <PartnershipCarousel />
      </div>
    </main>
  );
}
