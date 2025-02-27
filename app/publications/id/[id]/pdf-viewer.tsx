'use client';

import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { Icons } from '@/try-stuff/components/icons';
import { Typography } from '@/try-stuff/components/typography';
import { Button } from '@/try-stuff/components/ui/button';

// Get the worker from the cdn
pdfjs.GlobalWorkerOptions.workerSrc = '/pdfs/pdf.worker.min.js';

interface PDFViewerProps {
  file: string;
}

export const PDFViewer = ({ file }: PDFViewerProps) => {
  // Example: /pdfs/ICCS2024.pdf -> ICCS2024.pdf
  const fileName = file.split('/').pop() ?? 'document.pdf';

  const [numPages, setNumPages] = useState<number | null>(null);

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = fileName;
    link.click();
  };

  const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleDocumentLoadError = (error: Error) => {
    console.error(`PDF loading error: ${error}`);
  };

  return (
    <div className="space-y-6">
      {numPages !== null && (
        <div className="flex items-center justify-between">
          <Typography.P className="mb-6">Total pages: {numPages}</Typography.P>
          <Button onClick={downloadPDF}>Download PDF</Button>
        </div>
      )}
      <Document
        file={file}
        loading={
          <Icons.Spinner className="h-12 w-12 animate-spin text-rose-600" />
        }
        onLoadSuccess={handleDocumentLoadSuccess}
        onLoadError={handleDocumentLoadError}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={1080}
            loading={
              <Icons.Spinner className="h-12 w-12 animate-spin text-rose-600" />
            }
          />
        ))}
      </Document>
    </div>
  );
};
