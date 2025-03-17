import type { NewsTag, News, HighlightNews } from './types';
import { newsList } from './data';

export const fetchInitNewsData = async (tag: NewsTag, count: number) => {
  const filteredNews = newsList.filter(
    (item) => item.tag !== 'conference' && item.tag !== 'publication',
  ) as News[];
  if (tag === 'all') {
    return filteredNews.slice(0, count);
  }
  return filteredNews.filter((news) => news.tag === tag).slice(0, count);
};

export const fetchHasMoreNewsData = async (tag: NewsTag, cursor: number) => {
  const filteredNews = newsList.filter(
    (item) => item.tag !== 'conference' && item.tag !== 'publication',
  ) as News[];
  if (tag === 'all') {
    const data = filteredNews.slice(cursor, cursor + 1);
    return data.length > 0;
  }
  const data = filteredNews
    .filter((news) => news.tag === tag)
    .slice(cursor, cursor + 1);
  return data.length > 0;
};

export const fetchAllHighlightNewsData = async () => {
  const filteredNews = newsList.filter(
    (item) => item.tag === 'conference' || item.tag === 'publication',
  ) as HighlightNews[];
  return filteredNews;
};
