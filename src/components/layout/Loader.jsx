import { useEffect, useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderScene = lazy(() => import('../../three/LoaderScene'));

const SESSION_KEY = 'ka_loader_shown';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Loading experience…');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const statuses = [
      'Loading experience…',
      'Crafting pixels…',
      'Almost there…',
      'Welcome.',
    ];

    let statusIdx = 0;
    const statusInterval = setInterval(() => {
      statusIdx = (statusIdx + 1) % statuses.length;
      setStatusText(statuses[statusIdx]);
    }, 600);

    const startTime = Date.now();
    const duration = 2400;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const raw = Math.min(elapsed / duration, 0.95);
      setProgress(1 - Math.pow(1 - raw, 3));
    }, 30);

    const handleLoad = () => {
      clearInterval(progressInterval);
      setProgress(1);
      setTimeout(() => {
        clearInterval(statusInterval);
        setIsExiting(true);
        setTimeout(() => {
          sessionStorage.setItem(SESSION_KEY, '1');
          onComplete?.();
        }, 700);
      }, 400);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
      const fallback = setTimeout(handleLoad, 3000);
      return () => {
        clearInterval(statusInterval);
        clearInterval(progressInterval);
        clearTimeout(fallback);
        window.removeEventListener('load', handleLoad);
      };
    }

    return () => {
      clearInterval(statusInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#0B0C10' }}
        >
          {/* 3D Background Scene */}
          <div className="absolute inset-0">
            <Suspense fallback={null}>
              <LoaderScene />
            </Suspense>
          </div>

          {/* Radial glow — yellow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,197,24,0.10) 0%, transparent 70%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* KA Monogram SVG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'backOut' }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="KA Logo"
              >
                <defs>
                  <linearGradient id="grad-loader" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F5C518" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
                {/* K */}
                <motion.path
                  d="M10 15 L10 65 M10 40 L35 15 M10 40 L35 65"
                  stroke="url(#grad-loader)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                />
                {/* A */}
                <motion.path
                  d="M45 65 L60 15 L75 65 M50 48 L70 48"
                  stroke="url(#grad-loader)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                />
              </svg>
            </motion.div>

            {/* Status text */}
            <motion.p
              key={statusText}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-body tracking-[0.2em] uppercase"
              style={{ color: '#A0A0AA' }}
            >
              {statusText}
            </motion.p>

            {/* Progress bar — yellow to white */}
            <div className="w-48 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #F5C518, #FFFFFF)',
                  width: `${progress * 100}%`,
                  transition: 'width 0.1s ease',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { SESSION_KEY };
