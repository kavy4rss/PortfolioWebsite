import type { Metadata } from 'next';
import StructuredData from './components/StructuredData';
import '../src/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kavyagrawal.dev'),
  title: 'Kavya Agrawal | Best App & SaaS Developer in Kanpur',
  description:
    'Kavya Agrawal is Kanpur\'s top website developer, Flutter app developer, and B2B SaaS architect crafting high-performance, production-grade web solutions.',
  keywords: [
    'best website developers in Kanpur',
    'application developer in Kanpur',
    'Top B2B SaaS developer Kanpur',
    'Kavya Agrawal',
    'Kavy Agrawal',
    'Flutter developer Kanpur',
    'Next.js developer Kanpur',
    'Full Stack Software Engineer Kanpur',
    'Web Application Developer Kanpur',
  ],
  authors: [{ name: 'Kavya Agrawal', url: 'https://kavyagrawal.dev' }],
  creator: 'Kavya Agrawal',
  publisher: 'Kavya Agrawal',
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
    title: 'Kavya Agrawal | Best App & SaaS Developer in Kanpur',
    description:
      'Premier Full-Stack Developer & B2B SaaS Architect in Kanpur, UP, India. Building high-throughput web apps, cross-platform mobile software, and AI systems.',
    siteName: 'Kavya Agrawal Portfolio',
    images: [
      {
        url: 'https://kavyagrawal.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kavya Agrawal — Top Website & B2B SaaS Developer in Kanpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kavya Agrawal | Best App & SaaS Developer in Kanpur',
    description:
      'Kanpur\'s leading software developer specializing in Next.js, Flutter, and B2B SaaS engineering.',
    creator: '@kavy4rss',
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
