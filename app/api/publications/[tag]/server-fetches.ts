import type { PublicationTag } from './types';
import { publicationList } from './data';

export const fetchInitPublicationData = async (
  tag: PublicationTag,
  count: number,
) => {
  if (tag === 'all') {
    return publicationList.slice(0, count);
  }
  return publicationList
    .filter((publication) => publication.tag === tag)
    .slice(0, count);
};

export const fetchHasMorePublicationData = async (
  tag: PublicationTag,
  cursor: number,
) => {
  if (tag === 'all') {
    const data = publicationList.slice(cursor, cursor + 1);
    return data.length > 0;
  }
  const data = publicationList
    .filter((publication) => publication.tag === tag)
    .slice(cursor, cursor + 1);
  return data.length > 0;
};
