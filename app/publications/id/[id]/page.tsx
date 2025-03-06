import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { PDFViewer } from './pdf-viewer';

export const metadata: Metadata = {
  title: 'Publications',
};

const fileMap = new Map<string, string>([
  ['iccs-2024', `/pdfs/ICCS2024.pdf`],
  ['escca-2024', `/pdfs/ESCCA2024.pdf`],
  ['cyto-2024', `/pdfs/CYTO2024.pdf`],
  ['ash-2023', `/pdfs/ASH2023.pdf`],
  ['iccs-2023', `/pdfs/ICCS2023.pdf`],
  ['escca-2023', `/pdfs/ESCCA2023.pdf`],
  ['cyto-2023', `/pdfs/ICCS2023.pdf`],
  ['iccs-2022', `/pdfs/ICCS2022.pdf`],
  ['iccs-2021', `/pdfs/ICCS2021.pdf`],
]);

type Params = Promise<{ id?: string }>;

export default async function PublicationByIdPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  const file = fileMap.get(id || '');

  if (!file) {
    redirect('/publications');
  }

  return (
    <main className="mx-auto px-4 pt-[120px]">
      <PDFViewer file={file} />
    </main>
  );
}
