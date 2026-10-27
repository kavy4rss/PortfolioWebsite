/**
 * ─────────────────────────────────────────────────────────────────
 *  SEO CONFIG  —  src/seo.config.js
 *  Single source of truth for all SEO / Open Graph / Schema values.
 *  Search for TODO: to find every value you need to fill in.
 * ─────────────────────────────────────────────────────────────────
 */

// ── Site Identity ─────────────────────────────────────────────────
export const SITE_URL = 'https://kavyagrawal.dev'; // TODO: replace with your verified custom domain once live
export const SITE_NAME = 'Kavy Agrawal Portfolio';
export const PERSON_NAME = 'Kavy Agrawal';
export const JOB_TITLE = 'Full Stack Developer & SaaS Architect';

// ── Author Profiles (used in JSON-LD sameAs) ─────────────────────
export const SOCIAL_PROFILES = {
  github:    'https://github.com/kavy4rss',
  linkedin:  'https://www.linkedin.com/in/kavy-agrawal-471739367/',
  instagram: 'https://www.instagram.com/theycallmeaskavya',
  twitter:   'https://x.com/kavyagrawal', // TODO: confirm your X/Twitter handle
};

// ── Contact ───────────────────────────────────────────────────────
export const EMAIL = 'kavyagrawalrss@gmail.com';
export const LOCATION = {
  city:    'Kanpur',
  region:  'Uttar Pradesh',
  country: 'IN',
};

// ── Open Graph Image ──────────────────────────────────────────────
// TODO: Create a 1200x630 px OG image, place it at /public/og-image.jpg,
//       then this path becomes correct automatically.
export const OG_IMAGE = `https://kavyagrawal.dev/og-image.jpg`;
export const OG_IMAGE_ALT = `${PERSON_NAME} — ${JOB_TITLE}`;

// ── Default Meta ──────────────────────────────────────────────────
export const DEFAULT_TITLE = `${PERSON_NAME} | Full Stack, SaaS & React Developer India`;
export const DEFAULT_DESCRIPTION =
  'Kavy Agrawal is a full-stack developer and SaaS architect based in India. ' +
  'He builds scalable React web apps, Flutter mobile apps, and SaaS platforms ' +
  'with Node.js, Python, and custom payment gateway integrations.';

// ── Netlify staging URL ───────────────────────────────────────────
// TODO: Once you buy a custom domain, uncomment the 301 redirect block
//       at the bottom of netlify.toml.
export const NETLIFY_URL = 'https://kavyagrawal.netlify.app';

// ── knowsAbout (Person JSON-LD) ───────────────────────────────────
export const KNOWS_ABOUT = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Flutter', 'Dart',
  'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase',
  'SaaS Development', 'Payment Gateway Integration', 'Stripe', 'Razorpay',
  'Full Stack Development', 'Mobile App Development',
  'Chrome Extension Development', 'AI Integration', 'Framer Motion', 'Three.js',
];
