import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Kavy Agrawal</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main id="main-content" className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Background glow — yellow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,197,24,0.07) 0%, transparent 70%)' }} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 flex flex-col items-center gap-6"
        >
          {/* 404 number — yellow to white */}
          <p
            className="font-display font-bold select-none"
            style={{
              fontSize: 'clamp(6rem, 20vw, 14rem)',
              lineHeight: 1,
              background: 'linear-gradient(135deg, rgba(245,197,24,0.4), rgba(255,255,255,0.25))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </p>

          <h1 className="font-display font-bold text-2xl text-white">Lost in the void</h1>
          <p className="text-sm max-w-sm" style={{ color: '#A0A0AA' }}>
            This page doesn't exist — or it was moved. Let's get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-pill font-semibold text-black text-sm"
              style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}
            >
              <Home size={14} /> Go Home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-pill font-semibold text-sm border"
              style={{ borderColor: 'rgba(245,197,24,0.4)', color: '#A0A0AA' }}
            >
              View Projects <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
