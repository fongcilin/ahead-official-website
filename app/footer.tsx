import Image from 'next/image';
import Link from 'next/link';
import { Mail, BellPlus  } from 'lucide-react';

import { Icons } from '@/components/icons';
import { Typography } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { cn, createLinkRel, createLinkTarget } from '../lib/utils';

const mediaLinks = {
  mail: 'https://test.aheadmedicine.com/contact',
  facebook: 'https://www.facebook.com/AHEADIntelligence#',
  linkedin:
    'https://www.linkedin.com/company/aheadmedicine/posts/?feedView=all',
  bell: 'https://share.hsforms.com/1IR8OTPZGTmecZGcsWwjIAwcbh0e',
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
        <Link
          href="https://www.aheadmedicine.com/security-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center md:items-start px-8 cursor-pointer"
        >
          <Image
            src="/images/mark-of-trust-certified-ISOIEC-27001-information-security-management-black-logo-En-GB-1019.png"
            alt="ISO 27001 certified by BSI under certificate number IS825167"
            width={192}
            height={97}
            priority={false}
          />
          <Typography.Muted className="text-xs mt-1 pt-2 text-center max-w-[180px] break-words">
            ISO 27001 certified by BSI under certificate number IS825167
          </Typography.Muted>
        </Link>
        <div className="flex gap-x-3">
          <Link href={mediaLinks.mail}>
            <Button variant="gray-outline" size="icon">
              <Mail className="h-7 w-7" />
            </Button>
          </Link>
          <Link
            href={mediaLinks.facebook}
            rel={createLinkRel(mediaLinks.facebook)}
            target={createLinkTarget(mediaLinks.facebook)}
          >
            <Button variant="gray-outline" size="icon">
              <Icons.Facebook className="h-7 w-7" />
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
            href={mediaLinks.bell}
            rel={createLinkRel(mediaLinks.bell)}
            target={createLinkTarget(mediaLinks.bell)}
          >
            <Button variant="gray-outline" size="icon">
              <BellPlus className="h-7 w-7" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
