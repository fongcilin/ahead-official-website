import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 *
 * @param inputs an array of class names
 * @returns a string of class names with the tailwind classes merged and deduped
 * @example cn("text-red-500", ["flex", "justify-center", "items-center"], {"border": true, "rounded": false}) //=> "text-red-500 flex justify-center items-center border"
 * @example cn("text-red-500", "text-red-500") //=> "text-red-500"
 * @example cn(true ? "text-red-500" : "text-blue-500") //=> "text-red-500"
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 *
 * @param query a string representing a breakpoint
 * @returns a string representing a media query
 * @example getMediaQueryFromBreakpoint("sm") //=> "(min-width: 640px)"
 */
export const getMediaQueryFromBreakpoint = (query: string) => {
  switch (query) {
    case 'sm':
      return '(min-width: 640px)';
    case 'md':
      return '(min-width: 768px)';
    case 'lg':
      return '(min-width: 1024px)';
    case 'xl':
      return '(min-width: 1280px)';
    case '2xl':
      return '(min-width: 1536px)';
    default:
      return query;
  }
};
