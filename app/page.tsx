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
    <main className="flex flex-col items-center gap-y-10 pt-[56px] safe-area-inset-bottom overflow-x-hidden w-full">
      <div className={cn(
        "relative w-full overflow-hidden",
        "min-h-[400px]",
        "sm:min-h-[500px]",
        "md:min-h-[600px]",
        "lg:min-h-[760px]"
      )}>
        <Image
          src="/images/banner/cell_bg.png"
          alt="cell bg background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ zIndex: -1 }}
        />
        <Image
          src="/images/banner/cell_role.png"
          alt="cell role background"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-contain object-[right_bottom]"
          style={{ zIndex: -1 }}
        />
        <Image
          src="/images/banner/cell_right.png"
          alt="cell right background"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 0vw, 100vw"
          className={cn('hidden object-contain object-[right_top]', 'md:block')}
          style={{ zIndex: -1 }}
        />
        {/* Logo text */}
        <div className={cn(
          "flex items-center justify-center",
          "pt-12",
          "sm:pt-16",
          "md:pt-[calc(120px-56px)]"
        )}>
          <Image
            src="/images/ahead_logo.png"
            alt="Ahead logo"
            width={170}
            height={139}
            priority
            sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 170px"
            className={cn(
              "w-[100px] h-auto",
              "sm:w-[120px]",
              "md:w-[170px]"
            )}
          />
        </div>

        {/* Key visual  */}
        <div className={cn(
          "mx-auto mt-6 flex w-full max-w-[800px] flex-col gap-y-4",
          "px-4",
          "sm:mt-8 sm:px-6",
          "md:px-4"
        )}>
            <Typography.H1
            className={cn(
              'inline-block text-center text-zinc-600',
              'text-2xl',
              'sm:text-3xl',
              'md:text-4xl md:text-left',
              'lg:text-5xl',
              'xl:text-6xl',
            )}
            >
            Your AI Co-pilot in Medicine
            </Typography.H1>
          <Typography.Blockquote className={cn(
            "border-red-800 font-bold",
            "max-w-full",
            "sm:max-w-[90%]",
            "md:max-w-[400px] md:self-start"
          )}>
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
        <div id="cyto-copilot-intro-video" className="w-full px-4 sm:px-6 md:px-4">
          <Typography.H2
            className={cn(
              'text-center text-zinc-500',
              'text-xl',
              'sm:text-2xl',
              'md:text-3xl',
              'mb-1', 
            )}
          >
            Cyto-copilot: AI powered flow cytometry analysis.
          </Typography.H2>
        </div>
      {/* Video */}
      <PinkCellsParallax className="w-full pb-10 mb-10">
        <div className={cn(
          "mx-auto w-full max-w-[800px]",
          "px-4",
          "sm:px-6",
          "md:px-8",
          "lg:px-0"
        )}>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/EG-B5R5tYtQ"
              allowFullScreen
              width="100%"
              height="100%"
              title="intro video"
              loading="lazy"
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
