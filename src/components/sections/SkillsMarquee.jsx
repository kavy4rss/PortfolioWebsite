import { motion } from 'framer-motion';
import { skillsMarqueeRow1, skillsMarqueeRow2 } from '../../data/skills';
import { TechIcon } from '../ui/TechIcons';

function SkillPill({ name }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-xl mx-2 flex-shrink-0 select-none transition-all duration-200 hover:border-[#F5C518]/40 hover:bg-white/[0.07]"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.06)',
        minWidth: 'max-content',
      }}
    >
      <div className="flex items-center justify-center w-6 h-6 shrink-0">
        <TechIcon name={name} />
      </div>
      <span className="text-sm font-semibold tracking-wide" style={{ color: '#F5F5F7' }}>{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((name, i) => (
          <SkillPill key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section className="section-padding" aria-label="Technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#F5C518' }}>
            Tech Stack
          </p>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Tools &amp; Technologies
          </h2>
          <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: '#A0A0AA' }}>
            The 28 core technologies I use to build modern, production-grade applications.
          </p>
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #0B0C10, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(-90deg, #0B0C10, transparent)' }} />

        <div className="flex flex-col gap-4">
          <MarqueeRow items={skillsMarqueeRow1} />
          <MarqueeRow items={skillsMarqueeRow2} reverse />
        </div>
      </div>
    </section>
  );
}
