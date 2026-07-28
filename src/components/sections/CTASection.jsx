import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="Call to action">
      {/* Background — yellow glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 100% at 50% 50%, rgba(245,197,24,0.08) 0%, transparent 70%),
            linear-gradient(180deg, transparent 0%, rgba(245,197,24,0.03) 100%)
          `,
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.5), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#F5C518' }}>
            Let's Collaborate
          </p>

          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Let's build something{' '}
            <span className="gradient-text">great</span>{' '}
            together
          </h2>

          <p className="text-base max-w-xl" style={{ color: '#A0A0AA' }}>
            Whether you have a project in mind, need a technical co-founder, or just want to
            talk tech — my inbox is always open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link
              to="/contact"
              id="cta-contact-link"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-pill font-semibold text-black text-sm transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}
            >
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              id="cta-projects-link"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-pill font-semibold text-sm border transition-all duration-200 hover:scale-105"
              style={{ borderColor: 'rgba(245,197,24,0.4)', color: '#A0A0AA' }}
            >
              See My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
