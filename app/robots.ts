import type { MetadataRoute } from 'next';

declare module 'next' {
  export namespace MetadataRoute {
    export type Robots = {
      rules:
        | {
            userAgent?: string | string[];
            allow?: string | string[];
            disallow?: string | string[];
            crawlDelay?: number;
          }
        | Array<{
            userAgent?: string | string[];
            allow?: string | string[];
            disallow?: string | string[];
            crawlDelay?: number;
          }>;
      sitemap?: string | string[];
      host?: string;
    };
  }
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://kavyagrawal.dev';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'PerplexityBot',
          'OAI-SearchBot',
          'GPTBot',
          'anthropic-ai',
          'CCBot',
          'Claude-Web',
          'Google-Extended',
          'Applebot-Extended',
        ],
        allow: ['/', '/llms.txt', '/sitemap.xml'],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
    ],
  };
}
