'use client';

import { Suspense } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  gaMeasurementId: string;
}

export const GoogleAnalytics = ({ gaMeasurementId }: GoogleAnalyticsProps) => {
  // Why wrapped in Suspense?
  // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
  return (
    <Suspense>
      <GoogleAnalyticsScripts gaMeasurementId={gaMeasurementId} />
    </Suspense>
  );
};

const GoogleAnalyticsScripts = ({ gaMeasurementId }: GoogleAnalyticsProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Send pageview event to Google Analytics
    if (pathname) {
      window.gtag('config', gaMeasurementId, {
        page_path: `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`,
      });
    }
  }, [gaMeasurementId, pathname, searchParams]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', {
              page_path: window.location.pathname + window.location.search,
            });
          `,
        }}
      />
    </>
  );
};
