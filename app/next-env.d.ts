// Type declarations for Next.js files when running in a Vite/vanilla-React environment without the 'next' package installed.

declare module 'next' {
  export interface Metadata {
    metadataBase?: URL;
    title?: string | { default: string; template: string };
    description?: string | null;
    applicationName?: string | null;
    authors?: Array<{ name: string; url?: string }>;
    generator?: string | null;
    keywords?: string[] | null;
    referrer?: string | null;
    themeColor?: string | null;
    colorScheme?: string | null;
    viewport?: string | null;
    creator?: string | null;
    publisher?: string | null;
    robots?: any;
    icons?: any;
    openGraph?: any;
    twitter?: any;
    alternates?: any;
    [key: string]: any;
  }

  export namespace MetadataRoute {
    export type Robots = any;
    export type Sitemap = any;
  }
}

declare module 'next/server' {
  export class NextResponse extends Response {
    static json(data: any, init?: ResponseInit): NextResponse;
  }
}
