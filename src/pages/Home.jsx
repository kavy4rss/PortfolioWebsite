import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import SkillsMarquee from '../components/sections/SkillsMarquee';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import { personSchema, websiteSchema, profilePageSchema, faqSchema } from '../lib/schema';
import { SITE_URL, OG_IMAGE } from '../seo.config';
import { faqs } from '../data/faqs';

const TITLE = 'Kavy Agrawal | Full Stack, SaaS & React Developer India';
const DESCRIPTION =
  'Kavy Agrawal is a full-stack developer and SaaS architect based in India. ' +
  'He builds scalable React web apps, Flutter mobile apps, and SaaS platforms ' +
  'with Node.js, Python, and custom payment gateway integrations.';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Kavy Agrawal Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(personSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(profilePageSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema(faqs))}</script>
      </Helmet>

      <main id="main-content">
        <Hero />
        <SkillsMarquee />
        <FeaturedProjects />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}

