import Image from 'next/image';
import { Mail, ListTodo } from 'lucide-react';

import { Icons } from '@/try-stuff/components/icons';
import { Typography } from '@/try-stuff/components/typography';
import { Button } from '@/try-stuff/components/ui/button';

export const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-t from-gray-300 to-white">
      <div className="flex justify-center gap-x-6 px-4 py-10">
        <Image
          src="/images/ahead_logo.png"
          alt="Ahead logo"
          width={128}
          height={105}
          priority
          className="self-start"
        />
        <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-6 md:gap-y-0">
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
            <Button variant="outline" size="icon">
              <Mail className="h-7 w-7" />
            </Button>
            <Button variant="outline" size="icon">
              <Icons.X className="h-7 w-7" />
            </Button>
            <Button variant="outline" size="icon">
              <Icons.Linkedin className="h-7 w-7" />
            </Button>
            <Button variant="outline" size="icon">
              <ListTodo className="h-7 w-7" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
