import { redirect } from 'next/navigation';

import type { PublicationId } from '@/try-stuff/app/api/publications/[tag]/types';

import { PDFViewer } from './pdf-viewer';

const fileMap = new Map<PublicationId, string>([
  ['iccs-2024', `/pdfs/ICCS2024.pdf`],
]);

type Params = Promise<{ id?: string }>;

export default async function PublicationByIdPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  const file = fileMap.get(id as PublicationId);

  if (!file) {
    redirect('/publications');
  }

  return (
    <main className="mx-auto px-4 pt-[120px]">
      <PDFViewer file={file} />
    </main>
  );
}
