import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact', to: '/contact' },
];

function KALogo() {
  return (
    <Link to="/" className="flex items-center gap-2 group" aria-label="Kavy Agrawal Home">
      <span
        className="font-display font-bold text-xl tracking-tight"
        style={{ background: 'linear-gradient(135deg, #F5C518, #FFFFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
      >
        Kavy Agrawal
      </span>
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
      {navLinks.map((link) => (
        <div key={link.to} className="relative">
          <NavLink
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors duration-200 py-1 ${
                isActive ? 'text-white' : 'text-[#A0A0AA] hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                    style={{ background: 'linear-gradient(90deg, #F5C518, #FFFFFF)' }}
                  />
                )}
              </>
            )}
          </NavLink>
        </div>
      ))}

      <Link
        to="/contact"
        className="relative ml-2 px-5 py-2.5 rounded-pill text-sm font-semibold text-black overflow-hidden group"
        style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}
      >
        <span className="relative z-10">Let's Talk</span>
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(135deg, #E6B800, #F5C518)' }}
        />
      </Link>
    </nav>
  );
}

function MobileDrawer({ open, onClose }) {
  const drawerVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 280, damping: 30 } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.25 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.06, duration: 0.3 } }),
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 bottom-0 z-50 w-72 md:hidden flex flex-col"
            style={{ background: 'rgba(13,14,20,0.98)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <KALogo />
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="Close menu">
                <X size={20} className="text-[#A0A0AA]" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div key={link.to} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-150 ${
                        isActive ? 'text-black' : 'text-[#A0A0AA] hover:text-white hover:bg-white/5'
                      }`
                    }
                    style={({ isActive }) =>
                      isActive ? { background: 'linear-gradient(135deg, rgba(245,197,24,0.25), rgba(255,255,255,0.08))' } : {}
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="p-4 border-t border-white/5">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center justify-center w-full px-5 py-3 rounded-pill text-sm font-semibold text-black"
                style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <KALogo />
          <DesktopNav />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} className="text-[#A0A0AA]" />
          </button>
        </div>
      </motion.header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
