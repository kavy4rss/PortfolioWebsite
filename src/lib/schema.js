// JSON-LD Schema builders for SEO

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kavy Agrawal',
    jobTitle: 'Full Stack Developer & SaaS Architect',
    url: 'https://kavyagrawal.dev',
    sameAs: [
      'https://github.com/kavyagrawal',
      'https://linkedin.com/in/kavyagrawal',
      'https://x.com/kavyagrawal',
    ],
    knowsAbout: [
      'React', 'Next.js', 'Node.js', 'Flutter', 'Python',
      'SaaS Development', 'Payment Gateway Integration',
      'Full Stack Development', 'App Development',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kavy Agrawal Portfolio',
    url: 'https://kavyagrawal.dev',
    description: "Kavy Agrawal's Professional Portfolio — Full Stack, SaaS & App Developer",
  };
}

export function softwareProjectSchema(project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.tagline,
    author: {
      '@type': 'Person',
      name: 'Kavy Agrawal',
    },
    programmingLanguage: project.tech,
    url: project.liveUrl !== '#' ? project.liveUrl : undefined,
    codeRepository: project.githubUrl !== '#' ? project.githubUrl : undefined,
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
