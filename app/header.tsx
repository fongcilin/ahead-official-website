'use client';

import { useState, useRef, useEffect, forwardRef } from 'react';
import Link from 'next/link';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useWindowSize } from 'usehooks-ts';

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
import { Button } from '@/try-stuff/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionNavigationMenuStyleTrigger,
} from '@/try-stuff/components/ui/accordion';
import { cn, createLinkTarget, createLinkRel } from '@/try-stuff/lib/utils';

type ListItem = {
  title: string;
  href: string;
  description: string;
};

const company: ListItem[] = [
  {
    title: 'About',
    href: '/about',
    description: 'Learn more about our company.',
  },
  {
    title: 'Partnership',
    href: '/partnership',
    description: 'Interested in partnering with us?',
  },
  {
    title: 'Career',
    href: 'https://aheadmedicine.teamdoor.io/',
    description: 'Want to join our team?',
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Have a question or need help?',
  },
];

const technologies: ListItem[] = [
  {
    title: 'Cyto-Coplot',
    href: '/',
    description: 'AI powered flow cytometry analysis.',
  },
];

const resources: ListItem[] = [
  {
    title: 'Publications',
    href: '/publications',
    description: 'Explore Our Scientific Publications & Research.',
  },
  {
    title: 'News',
    href: '/news',
    description: 'Stay up-to-date with our latest news.',
  },
];

export function Header() {
  const { width = 0 } = useWindowSize({ initializeWithValue: false });
  const isMinWidthMd = width >= 768;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-10 border-b border-red-800 bg-white',
        width === 0 && 'h-[57px]',
      )}
    >
      <div className="flex items-center justify-end px-4">
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
      <NavigationMenuList className="h-14 space-x-0">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[600px] items-stretch">
              <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-red-500 to-orange-400 p-4 text-3xl font-bold text-white">
                Make medical operations easier
              </div>
              <ul className="flex flex-1 flex-col gap-3 gap-y-2 p-4">
                {company.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <ListLink title={item.title} href={item.href}>
                        {item.description}
                      </ListLink>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Technologies</NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* Make the height same as `Company` */}
            <div className="flex min-h-[301px] w-[600px] justify-end">
              <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-red-500 to-orange-400 p-4 text-3xl font-bold text-white">
                Resolve the complexity of medical data
              </div>
              <ul className="flex flex-1 flex-col gap-3 gap-y-2 p-4">
                {technologies.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <ListLink title={item.title} href={item.href}>
                        {item.description}
                      </ListLink>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* Make the height same as `Company` */}
            <div className="flex min-h-[301px] w-[600px] justify-end">
              <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-red-500 to-orange-400 p-4 text-3xl font-bold text-white">
                Read news and publications from media
              </div>
              <ul className="flex flex-1 flex-col gap-3 gap-y-2 p-4">
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
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/trial" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
              Cyto-copilot Trial
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

  const homeLinkRef = useRef<HTMLAnchorElement | null>(null);

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
        <div className="flex flex-col gap-y-4">
          <Link
            ref={homeLinkRef}
            href="/"
            className={cn(navigationMenuTriggerStyle(), 'w-full')}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-y-4 rounded-none"
          >
            <AccordionItem value="company" className={cn('border-b-0')}>
              <AccordionNavigationMenuStyleTrigger>
                Company
              </AccordionNavigationMenuStyleTrigger>
              <AccordionContent>
                <ul className="gap-3 p-4">
                  {company.map((item) => (
                    <li key={item.title} onClick={() => setIsOpen(false)}>
                      <ListLink title={item.title} href={item.href}>
                        {item.description}
                      </ListLink>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="technologies" className={cn('border-b-0')}>
              <AccordionNavigationMenuStyleTrigger>
                Technologies
              </AccordionNavigationMenuStyleTrigger>
              <AccordionContent>
                <ul className="gap-3 p-4">
                  {technologies.map((item) => (
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
              <AccordionNavigationMenuStyleTrigger>
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
            href="/trial"
            className={cn(navigationMenuTriggerStyle(), 'w-full')}
          >
            Cyto-copilot Trial
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const ListLink = forwardRef<
  React.ComponentRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      target={createLinkTarget(props.href as string)}
      rel={createLinkRel(props.href as string)}
      className={cn(
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        'focus:bg-accent focus:text-accent-foreground',
        className,
      )}
      {...props}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="text-sm leading-snug text-muted-foreground">{children}</p>
    </Link>
  );
});

ListLink.displayName = 'ListLink';
