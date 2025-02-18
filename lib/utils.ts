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
