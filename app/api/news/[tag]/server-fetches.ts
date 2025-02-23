import type { NewsTag } from './types';
import { newsList } from './data';

export const fetchInitNewsData = async (tag: NewsTag, count: number) => {
  if (tag === 'all') {
    return newsList.slice(0, count);
  }
  return newsList.filter((news) => news.tag === tag).slice(0, count);
};

export const fetchHasMoreNewsData = async (tag: NewsTag, cursor: number) => {
  if (tag === 'all') {
    const data = newsList.slice(cursor, cursor + 1);
    return data.length > 0;
  }
  const data = newsList
    .filter((news) => news.tag === tag)
    .slice(cursor, cursor + 1);
  return data.length > 0;
};
