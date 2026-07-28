import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Badge from '../ui/Badge';
import profilePhoto from '../../media/Kavy/IMG_9062.JPG';
import resumePdf from '../../media/Resume/Resume.pdf';

const HeroDecor = lazy(() => import('../../three/HeroDecor'));

const roles = [
  'Full Stack Developer',
  'SaaS Architect',
  'Flutter App Developer',
  'Payment Gateway Expert',
  'React Specialist',
];

function useTypingCycle(items, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (!items || items.length === 0) return;
    const current = items[roleIdx] || '';
    let timeout;

    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2);
      } else {
        setRoleIdx((i) => (i + 1) % items.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, typing, roleIdx, items, speed, pause]);

  return display;
}

const containerVariants = {
  initial: {},
  enter: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] } },
};

export default function Hero() {
  const roleText = useTypingCycle(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background mesh gradient — yellow tones */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(245,197,24,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 60%, rgba(255,255,255,0.04) 0%, transparent 60%),
            #0B0C10
          `,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="enter"
            className="flex flex-col gap-6"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants}>
              <Badge variant="success">Open to Freelance &amp; Full-time</Badge>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-lg font-body text-slate-300"
            >
              Hi, I'm 👋
            </motion.p>

            {/* Name — yellow to white gradient */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold leading-none text-yellow-400 bg-gradient-to-r from-yellow-400 via-amber-200 to-white bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              Kavy Agrawal
            </motion.h1>

            {/* Role cycle */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span
                className="font-display font-semibold text-slate-50"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}
              >
                {roleText}
                <span
                  className="inline-block w-[2px] h-[1em] ml-1 align-middle animate-pulse bg-yellow-400"
                  style={{ verticalAlign: 'middle' }}
                />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed max-w-md text-slate-300"
            >
              Turning Vision Into Reality — I build premium, scalable web apps, SaaS products,
              and mobile applications that solve real problems and delight users.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
              <Link
                to="/projects"
                id="hero-view-projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-pill font-semibold text-black text-sm transition-all duration-200 hover:scale-105 hover:shadow-glow-yellow w-full sm:w-auto"
                style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}
              >
                <ExternalLink size={15} />
                View Projects
              </Link>
              <a
                href={resumePdf}
                download="Kavy_Agrawal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-download-resume"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-pill font-semibold text-sm border border-yellow-400/40 text-slate-300 hover:text-white hover:border-yellow-400 bg-transparent transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                aria-label="Download Kavy Agrawal Resume PDF"
                title="Download Resume PDF"
              >
                <Download size={15} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Photo + 3D Decor ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.83, 0, 0.17, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* 3D decor shapes (behind) */}
            <div className="absolute inset-0">
              <Suspense fallback={null}>
                <HeroDecor />
              </Suspense>
            </div>

            {/* Photo frame */}
            <div className="relative z-10 animate-float">
              {/* Glow blob — yellow */}
              <div
                className="absolute -inset-8 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #F5C518 0%, rgba(255,255,255,0.3) 60%, transparent 100%)' }}
              />

              {/* Gradient border container — yellow to white */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[30px] overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #F5C518, #FFFFFF)',
                  padding: '2px',
                }}
              >
                <div
                  className="w-full h-full rounded-[28px] flex items-center justify-center overflow-hidden"
                  style={{ background: '#13141A' }}
                >
                  {/* Profile photo */}
                  <img
                    src={profilePhoto}
                    alt="Kavy Agrawal — Full Stack Developer"
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#6B6B7A' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} style={{ color: '#F5C518' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
