import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import SkillsMarquee from '../components/sections/SkillsMarquee';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import CTASection from '../components/sections/CTASection';
import { personSchema, websiteSchema } from '../lib/schema';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kavya Agrawal | Website, App &amp; SaaS Developer</title>
        <meta name="description" content="Kavya Agrawal's Professional Portfolio. Turning Vision Into Reality as a Full Stack Developer, SaaS Developer, and App Developer with modern architectures." />
        <link rel="canonical" href="https://kavyagrawal.dev/" />
        <meta property="og:title" content="Kavya Agrawal | Website, App &amp; SaaS Developer" />
        <meta property="og:description" content="Full Stack Developer, SaaS Architect &amp; App Developer based in India. Building premium digital products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kavyaagrawal.dev/" />
        <meta property="og:site_name" content="Kavya Agrawal Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kavya Agrawal | Website, App &amp; SaaS Developer" />
        <meta name="twitter:description" content="Full Stack Developer, SaaS Architect &amp; App Developer based in India. Building premium digital products." />
        <script type="application/ld+json">{JSON.stringify(personSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema())}</script>
      </Helmet>

      <main id="main-content">
        <Hero />
        <SkillsMarquee />
        <FeaturedProjects />
        <CTASection />
      </main>
    </>
  );
}
