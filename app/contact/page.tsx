import type { Metadata } from 'next';

import { Typography } from '@/components/typography';
import { PinkCellsParallax } from '@/components/custom/pink-cells-parallax';
import { ContactForm } from '@/components/custom/contact-form';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <main className="safe-area-inset-bottom">
      <PinkCellsParallax className="flex min-h-[calc(100vh-160px)] flex-col gap-y-16 pb-16 pt-28 sm:gap-y-20 sm:pb-20 sm:pt-32 md:pt-40">
        <div className="flex flex-col gap-y-6">
          <Typography.H1 className="inline-block font-bold bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text pb-6 text-4xl sm:text-5xl md:text-6xl text-transparent text-center">
            Contact Us
          </Typography.H1>
          <div className="relative h-2 w-full">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-sm"></div>
          </div>
        </div>
        <div className={cn('mx-auto w-full max-w-2xl px-4', 'sm:px-6', 'md:px-8')}>
          <ContactForm namePrefix="[From Contact Page]" />
        </div>
      </PinkCellsParallax>
    </main>
  );
}
