import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const siteMap = [
  {
    section: 'Main Pages',
    links: [
      { label: 'Home', to: '/', desc: 'Portfolio home — hero, skills, featured projects' },
      { label: 'About', to: '/about', desc: 'Bio, interests, and education timeline' },
      { label: 'Projects', to: '/projects', desc: 'All portfolio projects with filter' },
      { label: 'Contact', to: '/contact', desc: 'Get in touch or start a project' },
    ],
  },
  {
    section: 'About Sub-sections',
    links: [
      { label: 'About Me', to: '/about#about', desc: 'Personal bio and development philosophy' },
      { label: 'Interests', to: '/about#interests', desc: 'Hobbies and personal interests' },
      { label: 'Education', to: '/about#education', desc: 'Academic background and timeline' },
    ],
  },
  {
    section: 'Projects',
    links: projects.map((p) => ({
      label: p.title,
      to: `/projects/${p.slug}`,
      desc: p.tagline,
    })),
  },
  {
    section: 'Legal & Utility',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy', desc: 'How your data is handled' },
      { label: 'Terms of Service', to: '/terms-of-service', desc: 'Site usage terms' },
      { label: 'Sitemap (this page)', to: '/sitemap', desc: 'Human-readable site map' },
    ],
  },
];

export default function Sitemap() {
  return (
    <>
      <Helmet>
        <title>Sitemap — Kavy Agrawal</title>
        <meta name="description" content="Complete sitemap of kavyagrawal.dev — all pages and sections." />
        <link rel="canonical" href="https://kavyagrawal.dev/sitemap" />
      </Helmet>

      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#F5C518' }}>Navigation</p>
            <h1 className="font-display font-bold text-3xl mb-10">Sitemap</h1>

            <div className="flex flex-col gap-10">
              {siteMap.map((group) => (
                <div key={group.section}>
                  <h2 className="font-display font-bold text-lg mb-4 pb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', color: '#F5F5F7' }}>
                    {group.section}
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {group.links.map((link) => (
                      <li key={link.to} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                        <Link
                          to={link.to}
                          className="text-sm font-medium transition-colors hover:text-white min-w-[200px]"
                          style={{ color: '#F5C518' }}
                        >
                          {link.label}
                        </Link>
                        <span className="text-xs" style={{ color: '#6B6B7A' }}>{link.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
