import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/social';
import { useCopyrightYear } from '../../hooks/useCopyrightYear';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact', to: '/contact' },
];

const utilLinks = [
  { label: 'Sitemap', to: '/sitemap.xml' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-service' },
];

function KALogoSmall() {
  return (
    <div className="flex items-center gap-2">
      <span
        className="font-display font-bold text-lg"
        style={{ background: 'linear-gradient(135deg, #F5C518, #FFFFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
      >
        Kavy Agrawal
      </span>
    </div>
  );
}

export default function Footer() {
  const year = useCopyrightYear();

  return (
    <footer
      className="relative z-20 overflow-hidden border-t"
      style={{
        background: 'linear-gradient(180deg, #111219 0%, #07080B 100%)',
        borderColor: 'rgba(245, 197, 24, 0.15)',
      }}
    >
      {/* 🌟 Distinct Ambient Light Beam behind Footer (No Grid Lines) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-40 blur-3xl select-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(245, 197, 24, 0.18), rgba(245, 158, 11, 0.05), transparent 75%)',
        }}
      />

      {/* ⚡ Glowing Top Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(245, 197, 24, 0.8) 30%, rgba(255, 255, 255, 0.95) 50%, rgba(245, 158, 11, 0.8) 70%, transparent 100%)',
          boxShadow: '0 0 15px rgba(245, 197, 24, 0.6)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link to="/"><KALogoSmall /></Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#A0A0AA' }}>
              Turning Vision Into Reality — Full Stack Developer, SaaS Architect &amp; App Developer
              crafting premium digital experiences from India.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ name, href, Icon }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Icon size={16} style={{ color: '#A0A0AA' }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wide uppercase">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: '#A0A0AA' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wide uppercase">Legal</h4>
            <ul className="flex flex-col gap-2">
              {utilLinks.map((l) => (
                <li key={l.to}>
                  {l.to.endsWith('.xml') ? (
                    <a
                      href={l.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: '#A0A0AA' }}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.to}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: '#A0A0AA' }}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-xs" style={{ color: '#6B6B7A' }}>
            © {year} Kavy Agrawal. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#6B6B7A' }}>
            Designed &amp; Developed by{' '}
            <span style={{ color: '#F5C518' }}>Kavy Agrawal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
