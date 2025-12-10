'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { News, HighlightNews } from '@/app/api/news/[tag]/types';

import { typographyVariants, Typography } from '@/components/typography';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn, createLinkTarget, createLinkRel } from '@/lib/utils';

interface NewsItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: News | HighlightNews;
  priority?: boolean;
}

export const NewsItem = ({ item, className, priority = false }: NewsItemProps) => {
  return (
    <div
      className={cn(
        'flex h-full flex-col gap-y-4 border-[1.5px] border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow',
        className,
      )}
    >
      <div className="border-b-[1.5px] border-zinc-200">
        {/* The value of sizes="(max-width: 768px) 600px, 320px" is just an around number observing from browser */}
        <AspectRatio ratio={16 / 9}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 600px, 320px"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            className="object-cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={(e) => {
              console.error('Image failed to load:', item.image);
              e.currentTarget.style.display = 'none';
            }}
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-y-4 px-3 pb-9">
        <Typography.H5 className="mt-0 line-clamp-2 border-red-800">
          {item.title}
        </Typography.H5>
        <Typography.Muted className="flex flex-wrap">
          {item.footer.map((subItem, i) => (
            <span
              key={i}
              className={cn({
                'border-ahead-red-700 text-ahead-red-700 border px-2':
                  subItem.variant === 'border',
                'px-1': subItem.variant === 'normal',
              })}
            >
              {subItem.text}
            </span>
          ))}
        </Typography.Muted>
      </div>
    </div>
  );
};

interface HighlightNewsItemProps
  extends React.ComponentPropsWithRef<typeof DialogTrigger> {
  item: HighlightNews;
  priority?: boolean;
}

export const HighlightNewsItem = ({
  item,
  className,
  priority = false,
}: HighlightNewsItemProps) => {
  if (item.content === undefined) {
    return (
      <Link
        key={item.id}
        href={item.url}
        target="_blank"
        className="block w-full"
      >
        <NewsItem item={item} className={className} priority={priority} />
      </Link>
    );
  }

  return (
    <Dialog>
      <DialogTrigger className={cn('block w-full text-left', className)}>
        <NewsItem item={item} priority={priority} />
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh*2/3)] max-w-xl overflow-auto sm:rounded-none">
        <DialogHeader className="space-y-6">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 600px, 320px"
              loading="lazy"
              className="object-cover"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                console.error('Image failed to load in dialog:', item.image);
                e.currentTarget.style.display = 'none';
              }}
            />
          </AspectRatio>
          <DialogTitle className={cn(typographyVariants({ variant: 'h2' }))}>
            {item.title}
          </DialogTitle>
          <DialogDescription
            className={cn(
              typographyVariants({
                variant: 'p',
                className: 'text-justify',
              }),
            )}
          >
            {item.content.text}
          </DialogDescription>
          {!!item.content.link && (
            <Link
              href={item.content.link}
              rel={createLinkRel(item.content.link)}
              target={createLinkTarget(item.content.link)}
              className="text-red-800"
            >
              {item.content.link}
            </Link>
          )}
          <Typography.Muted className="flex flex-wrap">
            {item.footer.map((subItem, i) => (
              <span
                key={i}
                className={cn({
                  'border-ahead-red-700 text-ahead-red-700 border px-2':
                    subItem.variant === 'border',
                  'px-1': subItem.variant === 'normal',
                })}
              >
                {subItem.text}
              </span>
            ))}
          </Typography.Muted>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
