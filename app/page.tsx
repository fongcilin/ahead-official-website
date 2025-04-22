import Image from 'next/image';
import type { Metadata } from 'next';

import { Typography } from '@/components/typography';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { PinkCellsParallax } from '@/components/custom/pink-cells-parallax';
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

export default function HomePage() {
  return (
    <main className="flex flex-col items-center gap-y-10 pt-[56px]">
      <div className="relative min-h-[760px] w-full">
        <Image
          src="/images/banner/cell_bg.png"
          alt="cell bg background"
          fill
          priority
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
          priority
          className={cn('hidden', 'md:block')}
          style={{
            objectFit: 'contain',
            objectPosition: 'right top',
            zIndex: -1,
          }}
        />
        {/* Logo text */}
        <div className="flex items-center justify-center pt-[calc(120px-56px)]">
          <Image
            src="/images/ahead_logo.png"
            alt="Ahead logo"
            width={170}
            height={139}
            priority
          />
        </div>

        {/* Key visual  */}
        <div className="mx-auto mt-8 flex max-w-[800px] flex-col gap-y-4 px-4">
          <Typography.H1
            className={cn(
              'inline-block text-center text-5xl text-zinc-500',
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

      {/* Video anchor */}
      {/* <div id="cyto-copilot-intro-video" /> */}
        <div id="cyto-copilot-intro-video">
          <Typography.H2
            className={cn(
              'inline-block text-center text-zinc-500',
              'md:text-left',
              'text-3xl',
              'lg:text-3xl', 
              'mb-1', 
            )}
          >
            Cyto-copilot: AI powered flow cytometry analysis.
          </Typography.H2>
        </div>
      {/* Video */}
      <PinkCellsParallax className="w-screen pb-10 mb-10">
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
      </PinkCellsParallax>

      {/* Highlights */}
      <Highlights />

      {/* Partnership */}
      <Partnership />
    </main>
  );
}
