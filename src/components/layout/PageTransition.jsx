import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Map pathnames to friendly display names
const PAGE_NAMES = {
  '/':                'Home',
  '/about':           'About',
  '/projects':        'Projects',
  '/clients':         'Clients',
  '/contact':         'Contact',
  '/privacy-policy':  'Privacy Policy',
  '/terms-of-service':'Terms of Service',
};

function getPageName(pathname) {
  if (PAGE_NAMES[pathname]) return PAGE_NAMES[pathname];
  if (pathname.startsWith('/projects/')) return 'Project Details';
  return 'Loading';
}

// ── Spinner ──────────────────────────────────────────────────
function SpinnerRing() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
      style={{ animationDuration: '0.8s' }}
    >
      {/* Track ring */}
      <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.12)" strokeWidth="3.5" />
      {/* Active arc */}
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="url(#spinner-grad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="90 170"
        strokeDashoffset="-10"
      />
      <defs>
        <linearGradient id="spinner-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5C518" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ── Sweep Overlay ─────────────────────────────────────────────
function SweepOverlay({ pageName, onComplete }) {
  // Phase 0 → sweep in from left covering screen
  // Phase 1 → hold briefly (show page name)
  // Phase 2 → sweep out to right revealing new page
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 550);   // after sweep-in done
    const t2 = setTimeout(() => setPhase(2), 1150);  // hold 600ms then sweep-out
    const t3 = setTimeout(() => onComplete(), 1600); // fully off-screen
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
      style={{ isolation: 'isolate' }}
    >
      {/* ── Yellow fill panel ── */}
      <motion.div
        className="absolute inset-0 origin-left"
        initial={{ scaleX: 0 }}
        animate={
          phase === 0 ? { scaleX: 1 } :
          phase === 1 ? { scaleX: 1 } :
          { scaleX: 0, originX: '100%' }
        }
        transition={{
          duration: phase === 2 ? 0.48 : 0.52,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          background: 'linear-gradient(135deg, #F5C518 0%, #FFE57F 40%, #F59E0B 100%)',
          originX: phase === 2 ? '100%' : '0%',
        }}
      />

      {/* ── Subtle noise / grain over yellow ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ scaleX: 0 }}
        animate={phase < 2 ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.52, ease: [0.76, 0, 0.24, 1] }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          originX: phase === 2 ? '100%' : '0%',
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />

      {/* ── Page name + spinner centred on overlay ── */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            key="label"
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.92 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center gap-5 select-none"
          >
            {/* Spinner */}
            <SpinnerRing />

            {/* Page title */}
            <div className="flex flex-col items-center gap-1">
              <span
                className="font-display font-black tracking-tighter leading-none"
                style={{
                  fontSize: 'clamp(2rem, 8vw, 4rem)',
                  color: '#0B0C10',
                  textShadow: '0 2px 12px rgba(0,0,0,0.18)',
                }}
              >
                {pageName}
              </span>
              {/* thin KA rule below */}
              <span
                className="block h-[3px] rounded-full w-16"
                style={{ background: 'rgba(11,12,16,0.25)' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Diagonal decorative stripe ── */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.12) 50%)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );
}

// ── Main PageTransition component ──────────────────────────────
export default function PageTransition({ children }) {
  const location = useLocation();
  const prefersReduced = useReducedMotion();

  const [overlay, setOverlay] = useState(null);   // { pageName, key }
  const [showPage, setShowPage] = useState(true);
  const prevPathRef = { current: location.pathname };

  useEffect(() => {
    // On mount skip; only fire on subsequent navigations
    return () => {};
  }, []);

  // Fire sweep every time the route changes
  useEffect(() => {
    if (prefersReduced) return;
    const pageName = getPageName(location.pathname);
    setOverlay({ pageName, key: location.pathname + Date.now() });
  }, [location.pathname]);

  const handleOverlayComplete = () => setOverlay(null);

  return (
    <>
      {/* The actual page content — just fades normally */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, delay: 0.55, ease: 'easeOut' }}
        style={{ willChange: 'opacity' }}
      >
        {children}
      </motion.div>

      {/* The sweep overlay renders on top */}
      <AnimatePresence>
        {overlay && (
          <SweepOverlay
            key={overlay.key}
            pageName={overlay.pageName}
            onComplete={handleOverlayComplete}
          />
        )}
      </AnimatePresence>
    </>
  );
}
