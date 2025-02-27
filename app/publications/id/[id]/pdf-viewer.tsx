'use client';

import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { Icons } from '@/try-stuff/components/icons';
import { Typography } from '@/try-stuff/components/typography';

// Get the worker from the cdn
pdfjs.GlobalWorkerOptions.workerSrc = '/pdfs/pdf.worker.min.js';

interface PDFViewerProps {
  file: string;
}

export const PDFViewer = ({ file }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleDocumentLoadError = (error: Error) => {
    console.error(`PDF loading error: ${error}`);
  };

  return (
    <div>
      {numPages !== null && (
        <Typography.P className="mb-6">Total pages: {numPages}</Typography.P>
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
