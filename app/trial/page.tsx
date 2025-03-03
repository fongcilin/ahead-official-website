import { Typography } from '@/try-stuff/components/typography';
import { PinkBallsParallax } from '@/try-stuff/components/custom/pink-balls-parallax';
import { ContactForm } from '@/try-stuff/components/custom/contact-form';
import { cn } from '@/try-stuff/lib/utils';

export default function TrialPage() {
  return (
    <main>
      <PinkBallsParallax className="flex min-h-[calc(100vh-160px)] flex-col gap-y-20 pb-20 pt-40">
        <div className="flex flex-col gap-y-6">
          <Typography.H1 className="mx-auto max-w-[800px] bg-rose-400 px-8 py-6 text-center text-white">
            Request a 30-day free trial
          </Typography.H1>
        </div>
        <div className={cn('mx-auto min-w-full px-4', 'sm:min-w-[600px]')}>
          <ContactForm namePrefix="[From Trial Page]" />
        </div>
      </PinkBallsParallax>
    </main>
  );
}
