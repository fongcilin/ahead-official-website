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
 * @param name a string representing the event name of the GA4 event
 * @param params an object representing the event parameters of the GA4 event
 * @example trackEvent("button_click", { "button_id": "cta_button" })
 */

export const trackEvent = (
  name: Gtag.EventNames | (string & {}),
  params?: Gtag.EventParams,
) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', name, params);
  } else {
    console.error('this function should only be called in the browser');
  }
};

/**
 * @param href a string representing the href of the link
 * @example createLinkTarget("https://google.com") //=> "_blank"
 * @example createLinkTarget("/about") //=> "_self"
 */

export const createLinkTarget = (href: string) => {
  return href.startsWith('http') ? '_blank' : '_self';
};
