import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/try-stuff/components/typography';
import { buttonVariants } from '@/try-stuff/components/ui/button';
import { cn } from '@/try-stuff/lib/utils';

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-8">
      <Image
        src="/images/erythrocyte.png"
        width={256}
        height={237}
        alt="Ahead logo"
        priority
        className="self-center"
      />
      <Typography.H3>
        Can{`'`}t found this page {`:(`}
      </Typography.H3>
      <Link href="/" className={cn(buttonVariants({ variant: 'outline' }))}>
        Return to Home
      </Link>
    </div>
  );
}
