import type { Metadata } from 'next';
import StructuredData from './components/StructuredData';
import '../src/index.css';

// Fallback module declaration for TypeScript environments without Next.js installed
declare module 'next' {
  export interface Metadata {
    [key: string]: any;
  }
}

export const metadata: Metadata = {
  metadataBase: new URL('https://kavyagrawal.dev'),
  title: 'Kavy Agrawal | Full Stack, SaaS & React Developer India',
  description:
    'Kavy Agrawal is a full-stack developer and SaaS architect based in India, specializing in React, Node.js, Flutter, and scalable SaaS solutions.',
  keywords: [
    'Kavy Agrawal',
    'React developer India portfolio',
    'full stack developer India',
    'SaaS architect India',
    'Flutter developer Kanpur',
    'Kanpur website developer',
  ],
  authors: [{ name: 'Kavy Agrawal', url: 'https://kavyagrawal.dev' }],
  creator: 'Kavy Agrawal',
  publisher: 'Kavy Agrawal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kavyagrawal.dev',
    title: 'Kavy Agrawal | Full Stack, SaaS & React Developer India',
    description:
      'Kavy Agrawal is a full-stack developer and SaaS architect based in India, specializing in React, Node.js, Flutter, and scalable SaaS solutions.',
    siteName: 'Kavy Agrawal Portfolio',
    images: [
      {
        url: 'https://kavyagrawal.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kavy Agrawal — Full Stack Developer & SaaS Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kavy Agrawal | Full Stack, SaaS & React Developer India',
    description:
      'Kavy Agrawal is a full-stack developer and SaaS architect based in India, specializing in React, Node.js, Flutter, and scalable SaaS solutions.',
    creator: '@kavyagrawal',
    images: ['https://kavyagrawal.dev/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://kavyagrawal.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body className="bg-[#0B0C10] text-[#F5F5F7] antialiased selection:bg-[#F5C518] selection:text-[#0B0C10]">
        {children}
      </body>
    </html>
  );
}
