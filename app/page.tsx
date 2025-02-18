import Image from 'next/image';

import { Icons } from '@/try-stuff/components/icons';
import { Typography } from '@/try-stuff/components/typography';
import { AspectRatio } from '@/try-stuff/components/ui/aspect-ratio';
import { RedTextBlock } from '@/try-stuff/components/custom/red-text-block';
import { cn } from '@/try-stuff/lib/utils';

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
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 2,
    image: '',
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 3,
    image: '',
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 4,
    image: '',
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 5,
    image: '',
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 6,
    image: '',
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

const trustBy = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  image: `image-${i + 1}`,
}));

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-y-20 pt-[120px]">
      {/* logo text */}
      <div className="flex items-center justify-center">
        <Icons.Logo className="h-16 w-32" />
      </div>

      {/* key visual  */}
      <div className="mx-auto flex max-w-[800px] flex-col gap-y-4 px-4">
        <Typography.H1 className="text-center text-zinc-500 md:text-left">
          Your AI Co-pilot in Medicine
        </Typography.H1>
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
          <Typography.Blockquote className="self-start border-red-800 font-bold">
            AHEAD&apos;s Cyto-copilot technology revolutionizes workforce
            efficiency and precision medicine by specializing in enhancing flow
            cytometry analysis for research, clinical diagnostics, and cell
            therapy quality control.
          </Typography.Blockquote>
          <Image
            src="/images/erythrocyte.png"
            width={256}
            height={237}
            alt="Ahead logo"
            priority
            className="self-center"
          />
        </div>
      </div>

      {/* make work easier */}
      <div className="mx-auto flex max-w-[800px] flex-col gap-y-10 px-4">
        <Typography.H2 className="text-center text-zinc-500">
          Focus on your proficiency, let us handle the rest
        </Typography.H2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {advantages.map((item) => (
            <div key={item.id} className="flex flex-col gap-y-2 text-center">
              <Typography.H4 className="text-zinc-500">
                {item.title}
              </Typography.H4>
              <RedTextBlock>
                <Typography.P>{item.description}</Typography.P>
              </RedTextBlock>
            </div>
          ))}
        </div>
      </div>

      {/* draggable canvas example */}
      <div className="mx-auto flex w-full max-w-[600px] flex-col gap-y-10 px-4">
        <Typography.H2 className="text-center text-zinc-500">
          Try to drag the polygon or the vertex on the canvas
        </Typography.H2>
        <AspectRatio
          ratio={1}
          className="flex items-center justify-center bg-gray-300"
        >
          draggable canvas example
        </AspectRatio>
      </div>

      {/* video */}
      <div className="w-screen border-y border-red-800 bg-red-50">
        <div className="mx-auto max-w-[800px]">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/EG-B5R5tYtQ"
              allow="autoplay; encrypted-media; fullscreen"
              width="100%"
              height="auto"
              style={{ aspectRatio: '16/9' }}
              title="intro video"
            />
          </AspectRatio>
        </div>
      </div>

      {/* features */}
      <div className="mx-auto flex max-w-[800px] flex-col gap-y-10 px-4">
        {feats.map(({ id, intro }, i) => (
          <div
            key={id}
            className={cn(
              'flex flex-col justify-center gap-y-6',
              'md:gap-x-6',
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            )}
          >
            <div
              className={cn(
                'flex h-[240px] w-[240px] items-center justify-center self-center bg-gray-300',
                'md:self-auto',
              )}
            >
              real product snapshot
            </div>
            <RedTextBlock className={cn('flex-1', 'md:self-center')}>
              <Typography.P>{intro}</Typography.P>
            </RedTextBlock>
          </div>
        ))}
      </div>

      {/* user feedback */}
      <div className="mx-auto flex max-w-[600px] flex-col gap-y-10 px-4">
        <Typography.H2 className="text-center text-zinc-500">
          Feedbacks
        </Typography.H2>
        <div className={cn('grid gap-4', 'md:gap-6')}>
          {feeds.map((item, i) => (
            <div
              key={item.id}
              className={i % 2 === 0 ? 'md:pl-[120px]' : 'md:pr-[120px]'}
            >
              <Typography.P className="rounded-md border-2 border-red-800 p-4">
                {item.description}
              </Typography.P>
            </div>
          ))}
        </div>
      </div>

      {/* trust by */}
      <div className="mx-auto flex w-full max-w-[800px] flex-col gap-y-10 px-4">
        <Typography.H2 className="text-center text-zinc-500">
          Trust by
        </Typography.H2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
          {trustBy.map((item) => (
            <div key={item.id}>
              <AspectRatio ratio={1}>
                <div className="flex h-full w-full items-center justify-center bg-gray-300">
                  {item.image}
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
