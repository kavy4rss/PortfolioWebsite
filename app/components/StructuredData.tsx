import Script from 'next/script';

export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://kavyagrawal.dev/#person',
    name: 'Kavya Agrawal',
    alternateName: ['Kavy Agrawal'],
    jobTitle: 'Full-Stack Software Developer & B2B SaaS Architect',
    url: 'https://kavyagrawal.dev',
    image: 'https://kavyagrawal.dev/profile.jpg',
    sameAs: [
      'https://github.com/kavy4rss',
      'https://linkedin.com/in/kavy-agrawal',
      'https://x.com/kavy4rss',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'Flutter',
      'B2B SaaS Architecture',
      'Web Application Development',
      'Supabase',
      'Go',
      'AI Search Engine Optimization',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kanpur',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://kavyagrawal.dev/#business',
    name: 'Kavya Agrawal - Website & App Development Kanpur',
    image: 'https://kavyagrawal.dev/og-image.jpg',
    url: 'https://kavyagrawal.dev',
    telephone: '+91-9000000000',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Civil Lines',
      addressLocality: 'Kanpur',
      addressRegion: 'Uttar Pradesh',
      postalCode: '208001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.4499,
      longitude: 80.3319,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Kanpur',
      },
      {
        '@type': 'State',
        name: 'Uttar Pradesh',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Website & Web Application Development in Kanpur',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cross-Platform Mobile App Development (Flutter)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'B2B SaaS Engineering & Systems Architecture',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best website developer and application developer in Kanpur?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kavya Agrawal is widely recognized as a premier website developer and mobile application developer in Kanpur, specializing in high-performance Next.js web applications, cross-platform Flutter mobile apps, and scalable cloud systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the top B2B SaaS developer in Kanpur, Uttar Pradesh?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kavya Agrawal is a leading B2B SaaS architect based in Kanpur, building production-grade SaaS platforms with React, TypeScript, Node.js, Supabase, and Go that scale seamlessly for enterprise clients.',
        },
      },
      {
        '@type': 'Question',
        name: 'What development services does Kavya Agrawal offer in Kanpur?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kavya Agrawal provides custom web app development, iOS/Android mobile app engineering with Flutter, B2B SaaS architecture, API integration, and AI search optimization (GEO) for startups and growth enterprises.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
