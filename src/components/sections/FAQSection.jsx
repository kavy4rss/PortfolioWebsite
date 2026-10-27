import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../../data/faqs';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(245,197,24,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill text-xs font-semibold uppercase tracking-wider mb-3" style={{ background: 'rgba(245,197,24,0.1)', color: '#F5C518' }}>
            <HelpCircle size={13} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 id="faq-heading" className="font-display font-bold text-3xl sm:text-4xl text-white">
            Common Inquiries &amp; <span className="gradient-text">Answers</span>
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: '#A0A0AA' }}>
            Quick answers to frequently asked questions about my development background, technical stack, and availability.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="glass-card rounded-2xl overflow-hidden border transition-colors duration-200"
                style={{
                  borderColor: isOpen ? 'rgba(245,197,24,0.3)' : 'rgba(255,255,255,0.06)',
                  background: isOpen ? 'rgba(245,197,24,0.03)' : 'rgba(255,255,255,0.02)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 rounded-full p-1.5"
                    style={{
                      background: isOpen ? 'rgba(245,197,24,0.2)' : 'rgba(255,255,255,0.05)',
                      color: isOpen ? '#F5C518' : '#A0A0AA',
                    }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm leading-relaxed" style={{ color: '#A0A0AA' }}>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
