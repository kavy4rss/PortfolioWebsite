// ── JSON-LD Schema builders for SEO ─────────────────────────────
import {
  SITE_URL, SITE_NAME, PERSON_NAME, JOB_TITLE,
  SOCIAL_PROFILES, EMAIL, LOCATION, OG_IMAGE, KNOWS_ABOUT,
} from '../seo.config';

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON_NAME,
    jobTitle: JOB_TITLE,
    url: SITE_URL,
    image: OG_IMAGE,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: LOCATION.city,
      addressRegion: LOCATION.region,
      addressCountry: LOCATION.country,
    },
    sameAs: Object.values(SOCIAL_PROFILES),
    knowsAbout: KNOWS_ABOUT,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: `Portfolio of ${PERSON_NAME} — Full Stack Developer, SaaS Architect and React Specialist based in India.`,
    author: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'en-IN',
  };
}

export function profilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: `${PERSON_NAME} — Developer Portfolio`,
    about: { '@id': `${SITE_URL}/#person` },
    mainEntity: { '@id': `${SITE_URL}/#person` },
  };
}

export function softwareProjectSchema(project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description || project.tagline,
    abstract: project.tagline,
    author: {
      '@id': `${SITE_URL}/#person`,
    },
    programmingLanguage: project.tech,
    ...(project.liveUrl !== '#' ? { url: project.liveUrl } : {}),
    ...(project.githubUrl !== '#' ? { codeRepository: project.githubUrl } : {}),
    keywords: project.tech.join(', '),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

