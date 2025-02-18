'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useWindowSize } from 'usehooks-ts';

import { Icons } from '@/try-stuff/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/try-stuff/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/try-stuff/components/ui/sheet';
import { Button, buttonVariants } from '@/try-stuff/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionNavigationMenuStyleTrigger,
} from '@/try-stuff/components/ui/accordion';
import { cn } from '@/try-stuff/lib/utils';

type ListItem = {
  title: string;
  href: string;
  description: string;
};

const resources: ListItem[] = [
  {
    title: 'News',
    href: '/news',
    description:
      'Stay up-to-date with the latest news and announcements from our team.',
  },
  {
    title: 'Publications',
    href: '/publications',
    description:
      'Explore our collection of research papers, articles, and other publications.',
  },
];

const companyInfos: ListItem[] = [
  {
    title: 'About',
    href: '/about',
    description:
      'Learn more about our company, our mission, and our commitment to innovation.',
  },
  {
    title: 'Career',
    href: '/career',
    description:
      "Join our team! We're always looking for talented and passionate individuals to help us build the future of healthcare.",
  },
  {
    title: 'Contact',
    href: '/contact',
    description:
      "Have a question or need help? Get in touch with our team and we'll be happy to assist you.",
  },
  {
    title: 'Partnership',
    href: '/partnership',
    description:
      'Interested in partnering with us? Learn more about our partnership opportunities and how we can work together.',
  },
];

export function Header() {
  const { width = 0 } = useWindowSize({ initializeWithValue: false });
  const isMinWidthMd = width >= 768;

  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-red-800 bg-white">
      <div className="flex items-center justify-between px-4">
        <Link href="/" className="text-primary">
          <Icons.Logo className="h-14 w-28" />
        </Link>
        {width !== 0 && (
          <>
            {isMinWidthMd && <PCList />}
            {!isMinWidthMd && <MobileList isMinWidthMd={isMinWidthMd} />}
          </>
        )}
      </div>
    </header>
  );
}

const PCList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-0">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), 'h-14 rounded-none')}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn('h-14 rounded-none')}>
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[400px] gap-3 p-4">
              {companyInfos.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink asChild>
                    <ListLink title={item.title} href={item.href}>
                      {item.description}
                    </ListLink>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn('h-14 rounded-none')}>
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[400px] gap-3 p-4">
              {resources.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink asChild>
                    <ListLink title={item.title} href={item.href}>
                      {item.description}
                    </ListLink>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(buttonVariants(), 'h-14 rounded-none')}
            >
              Cyto-Coplot
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), 'h-14 rounded-none')}
            >
              Sign up Trial
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

interface MobileListProps {
  isMinWidthMd: boolean;
}

const MobileList = ({ isMinWidthMd }: MobileListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const homeLinkRef = React.useRef<HTMLAnchorElement | null>(null);

  // Radix UI just focus on their own components,
  // so we need to handle focus manually,
  // if we want to focus on a non-Radix UI component.
  const handleOpenAutoFocus = (e: Event) => {
    e.preventDefault();
    homeLinkRef.current?.focus();
  };

  useEffect(() => {
    if (isMinWidthMd) {
      setIsOpen(false);
    }
  }, [isMinWidthMd]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="h-14 rounded-none border-none">
          Open
        </Button>
      </SheetTrigger>
      <SheetContent
        onOpenAutoFocus={handleOpenAutoFocus}
        className="h-screen overflow-auto px-0"
      >
        <SheetHeader>
          {/* Even show nothing on the screen, this component still need title for web accessibility */}
          <SheetTitle>
            <VisuallyHidden>Navigation</VisuallyHidden>
          </SheetTitle>
          <SheetDescription>
            <VisuallyHidden>
              This is mobile version of navigation
            </VisuallyHidden>
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          <Link
            ref={homeLinkRef}
            href="/"
            className={cn(navigationMenuTriggerStyle(), 'w-full rounded-none')}
          >
            Home
          </Link>
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col space-y-4 rounded-none"
          >
            <AccordionItem value="company" className={cn('border-b-0')}>
              <AccordionNavigationMenuStyleTrigger className="rounded-none">
                Company
              </AccordionNavigationMenuStyleTrigger>
              <AccordionContent>
                <ul className="gap-3 p-4">
                  {companyInfos.map((item) => (
                    <li key={item.title} onClick={() => setIsOpen(false)}>
                      <ListLink title={item.title} href={item.href}>
                        {item.description}
                      </ListLink>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resources" className={cn('border-b-0')}>
              <AccordionNavigationMenuStyleTrigger className="rounded-none">
                Resources
              </AccordionNavigationMenuStyleTrigger>
              <AccordionContent>
                <ul className="gap-3 p-4">
                  {resources.map((item) => (
                    <li key={item.title} onClick={() => setIsOpen(false)}>
                      <ListLink title={item.title} href={item.href}>
                        {item.description}
                      </ListLink>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href="/"
            className={cn(cn(buttonVariants()), 'w-full rounded-none')}
          >
            Cyto-Coplot
          </Link>
          <Link
            href="/"
            className={cn(navigationMenuTriggerStyle(), 'w-full rounded-none')}
          >
            Sign up Trial
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const ListLink = React.forwardRef<
  React.ComponentRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      className={cn(
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        className,
      )}
      {...props}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </Link>
  );
});

ListLink.displayName = 'ListLink';
