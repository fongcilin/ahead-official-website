import { NextRequest } from 'next/server';

import type { PublicationTag } from './types';
import { publicationList } from './data';
import { fetchHasMorePublicationData } from './server-fetches';

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ tag: string }> },
) => {
  const { tag } = await params;
  const validTag = (tag || 'all') as PublicationTag;
  const { searchParams } = new URL(request.url);
  const cursor = Number(searchParams.get('cursor')) || 0;
  const count = Number(searchParams.get('count')) || 9;
  const data = publicationList
    .filter((publication) => (tag === 'all' ? true : publication.tag === tag))
    .slice(cursor, cursor + count);
  const hasMore = await fetchHasMorePublicationData(validTag, cursor + count);

  return Response.json({ data, hasMore });
};
