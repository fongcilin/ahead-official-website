import { NextRequest } from 'next/server';

import type { NewsTag } from './types';
import { newsList } from './data';
import { fetchHasMoreNewsData } from './server-fetches';

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ tag: string }> },
) => {
  const { tag } = await params;
  const validTag = (tag || 'all') as NewsTag;
  const { searchParams } = new URL(request.url);
  const cursor = Number(searchParams.get('cursor')) || 0;
  const count = Number(searchParams.get('count')) || 9;
  const data = newsList
    .filter((news) => (tag === 'all' ? true : news.tag === tag))
    .slice(cursor, cursor + count);
  const hasMore = await fetchHasMoreNewsData(validTag, cursor + count);

  return Response.json({ data, hasMore });
};
