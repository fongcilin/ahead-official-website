import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // TODO: Update this to the actual base URL when we deploy
  const baseUrl =
    process.env.NEXT_PUBLIC_NGROK_BASE_URL || 'https://yourwebsite.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
