import type { Metadata } from 'next';

import { Typography } from '@/components/typography';
import { PinkBallsParallax } from '@/components/custom/pink-balls-parallax';
import { ContactForm } from '@/components/custom/contact-form';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <main>
      <PinkBallsParallax className="flex min-h-[calc(100vh-160px)] flex-col gap-y-20 pb-20 pt-40">
        <div className="flex flex-col gap-y-6">
          <Typography.H1 className="mx-auto max-w-[600px] bg-rose-400 px-8 py-6 text-center text-white">
            Contact Us
          </Typography.H1>
        </div>
        <div className={cn('mx-auto min-w-full px-4', 'sm:min-w-[600px]')}>
          <ContactForm namePrefix="[From Contact Page]" />
        </div>
      </PinkBallsParallax>
    </main>
  );
}
