"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useMediaQuery } from "usehooks-ts";

import { cn, getMediaQueryFromBreakpoint } from "@/try-stuff/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/try-stuff/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/try-stuff/components/ui/sheet";
import { Button } from "@/try-stuff/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionNavigationMenuStyleTrigger,
} from "@/try-stuff/components/ui/accordion";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const businessComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "About",
    href: "/about",
    description:
      "Here you'll learn about our history, mission, values, and the passionate team behind our work. ",
  },
  {
    title: "Career",
    href: "/career",
    description:
      "We're a team of passionate and innovative individuals dedicated to solve the problems about flow cytometry.",
  },
  {
    title: "Contact",
    href: "/contact",
    description:
      "Get in touch with us! We'd love to hear from you.  Whether you have questions about our products or services, or you're interested in a partnership, we're here to help.",
  },
  {
    title: "Partnership",
    href: "/partnership",
    description:
      "Interested in partnering with us? We're always looking for innovative and collaborative opportunities to expand our reach and better serve our customers.",
  },
];

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 bg-transparent backdrop-blur-sm">
      <div className="flex justify-between items-center py-3 px-4">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/ahead_logo.svg"
            alt="Ahead logo"
            width={64}
            height={52}
            priority
          />
        </Link>
        <div className="hidden md:block">
          <PCList />
        </div>
        <div className="block md:hidden">
          <MobileList />
        </div>
      </div>
    </header>
  );
}

const PCList = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === "/" && "bg-accent text-accent-foreground"
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Business</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[400px] gap-3 p-4">
              {businessComponents.map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <ListAnchor title={component.title} href={component.href}>
                      {component.description}
                    </ListAnchor>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>News</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[400px] gap-3 p-4">
              {components.map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <ListAnchor title={component.title} href={component.href}>
                      {component.description}
                    </ListAnchor>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Publications</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[400px] gap-3 p-4">
              {components.map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <ListAnchor title={component.title} href={component.href}>
                      {component.description}
                    </ListAnchor>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Cyto-Coplot
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === "/trial" && "bg-accent text-accent-foreground"
              )}
            >
              Sign up Trial
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListAnchor = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </a>
  );
});

ListAnchor.displayName = "ListAnchor";

const MobileList = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const mediaQuery = getMediaQueryFromBreakpoint("md");
  const isMatched = useMediaQuery(mediaQuery);

  useEffect(() => {
    if (isMatched) {
      setIsOpen(false);
    }
  }, [isMatched]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent
        className="h-screen overflow-auto"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader>
          {/* Even show nothing on the screen, this component still need title for web accessibility */}
          <SheetTitle>
            <VisuallyHidden>Navigation</VisuallyHidden>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className={cn(
              navigationMenuTriggerStyle(),
              pathname === "/" && "bg-accent text-accent-foreground",
              "w-full"
            )}
          >
            Home
          </Link>
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col space-y-4"
          >
            <AccordionItem value="business" className={cn("border-b-0")}>
              <AccordionNavigationMenuStyleTrigger>
                Business
              </AccordionNavigationMenuStyleTrigger>
              <AccordionContent>
                <ul className="gap-3 p-4">
                  {businessComponents.map((component) => (
                    <li key={component.title}>
                      <ListAnchor title={component.title} href={component.href}>
                        {component.description}
                      </ListAnchor>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="news" className={cn("border-b-0")}>
              <AccordionNavigationMenuStyleTrigger>
                News
              </AccordionNavigationMenuStyleTrigger>
              <AccordionContent>
                <ul className="gap-3 p-4">
                  {components.map((component) => (
                    <li key={component.title}>
                      <ListAnchor title={component.title} href={component.href}>
                        {component.description}
                      </ListAnchor>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="publications" className={cn("border-b-0")}>
              <AccordionNavigationMenuStyleTrigger>
                Publications
              </AccordionNavigationMenuStyleTrigger>
              <AccordionContent>
                <ul className="gap-3 p-4">
                  {components.map((component) => (
                    <li key={component.title}>
                      <ListAnchor title={component.title} href={component.href}>
                        {component.description}
                      </ListAnchor>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link href="/" className={cn(navigationMenuTriggerStyle(), "w-full")}>
            Cyto-Coplot
          </Link>
          <Link
            href="/"
            className={cn(
              navigationMenuTriggerStyle(),
              pathname === "/trial" && "bg-accent text-accent-foreground",
              "w-full"
            )}
          >
            Sign up Trial
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
