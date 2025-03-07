import Image from 'next/image';
import Link from 'next/link';
import { Mail, ListTodo } from 'lucide-react';

import { Icons } from '@/try-stuff/components/icons';
import { Typography } from '@/try-stuff/components/typography';
import { Button } from '@/try-stuff/components/ui/button';
import { cn, createLinkRel, createLinkTarget } from '../lib/utils';

const mediaLinks = {
  mail: 'mailto:team@aheadmedicine.com',
  x: 'https://x.com/AHEAD_Medicine',
  linkedin:
    'https://www.linkedin.com/company/aheadmedicine/posts/?feedView=all',
  newsletter: 'https://news.aheadmedicine.com/signup',
};

export const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-t from-gray-300 to-white">
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-x-6 gap-y-3 px-4 py-10',
          'md:flex-row md:gap-y-0',
        )}
      >
        <div className="md:self-start">
          <Image
            src="/images/ahead_logo.png"
            alt="Ahead logo"
            width={128}
            height={105}
            priority
          />
        </div>
        <div className="max-w-[240px]">
          <Typography.Muted>AHEAD Medicine</Typography.Muted>
          <Typography.Muted>
            2880 Zanker Rd, Suite 103, San Jose, CA, 95134
          </Typography.Muted>
          <Typography.Muted>
            Taipei office: Room 437, 4F, No. 19-13, Sanchong Rd, Nangang
            District, Taipei City, Taiwan, 115
          </Typography.Muted>
        </div>
        <div className="flex gap-x-3">
          <Link href={mediaLinks.mail}>
            <Button variant="gray-outline" size="icon">
              <Mail className="h-7 w-7" />
            </Button>
          </Link>
          <Link
            href={mediaLinks.x}
            rel={createLinkRel(mediaLinks.x)}
            target={createLinkTarget(mediaLinks.x)}
          >
            <Button variant="gray-outline" size="icon">
              <Icons.X className="h-7 w-7" />
            </Button>
          </Link>
          <Link
            href={mediaLinks.linkedin}
            rel={createLinkRel(mediaLinks.linkedin)}
            target={createLinkTarget(mediaLinks.linkedin)}
          >
            <Button variant="gray-outline" size="icon">
              <Icons.Linkedin className="h-7 w-7" />
            </Button>
          </Link>
          <Link
            href={mediaLinks.newsletter}
            rel={createLinkRel(mediaLinks.newsletter)}
            target={createLinkTarget(mediaLinks.newsletter)}
          >
            <Button variant="gray-outline" size="icon">
              <ListTodo className="h-7 w-7" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
