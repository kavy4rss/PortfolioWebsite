import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { socialLinks, contactInfo } from '../data/social';
import Badge from '../components/ui/Badge';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000, 'Message is too long'),
  _honey: z.string().max(0).optional(),
});

const projectTypes = [
  'Full Stack Web App',
  'SaaS Platform',
  'Mobile App (Flutter)',
  'Payment Gateway Integration',
  'AI Integration',
  'Technical Consultation',
  'Other',
];

function InputField({ label, id, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#A0A0AA' }}>
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs" style={{ color: '#F59E0B' }}>
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    if (data._honey) return;
    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '3514dd96-a87a-4727-93af-d5db50caecbb',
          name: data.name,
          email: data.email,
          project_type: data.projectType,
          message: data.message,
          subject: `New Portfolio Contact Form Submission from ${data.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl text-base sm:text-sm text-white placeholder-[#6B6B7A]
    transition-all duration-200 outline-none
    focus:ring-1 focus:ring-[#F5C518]
  `;
  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' };

  return (
    <>
      <Helmet>
        <title>Contact — Kavy Agrawal | Let's Work Together</title>
        <meta name="description" content="Get in touch with Kavy Agrawal — Full Stack Developer available for freelance projects, SaaS development, and technical consultation." />
        <link rel="canonical" href="https://kavyagrawal.dev/contact" />
      </Helmet>

      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-12"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#F5C518' }}>Get in touch</p>
            <h1 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-sm max-w-lg" style={{ color: '#A0A0AA' }}>
              Have a project in mind? Let's build something great. Fill out the form or reach out directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* ── Left: Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <div className="glass-card p-5 sm:p-6 flex flex-col gap-4">
                <Badge variant="success">Available for Work</Badge>
                <p className="text-sm" style={{ color: '#A0A0AA' }}>{contactInfo.availability}</p>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex items-center gap-3">
                    <Mail size={15} style={{ color: '#F5C518' }} />
                    <a href={`mailto:${contactInfo.email}`} className="text-sm transition-colors hover:text-white" style={{ color: '#A0A0AA' }}>
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={15} style={{ color: '#F5C518' }} />
                    <span className="text-sm" style={{ color: '#A0A0AA' }}>{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={15} style={{ color: '#F5C518' }} />
                    <span className="text-sm" style={{ color: '#A0A0AA' }}>IST (UTC+5:30)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-semibold text-sm mb-4" style={{ color: '#A0A0AA' }}>Find me on</h3>
                <div className="flex flex-col gap-2">
                  {socialLinks.map(({ name, href, Icon }) => (
                    <motion.a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-white/5"
                    >
                      <Icon size={16} style={{ color: '#F5C518' }} />
                      <span className="text-sm" style={{ color: '#A0A0AA' }}>{name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass-card p-5 sm:p-8 flex flex-col gap-5 sm:gap-6" aria-label="Contact form">
                <input type="text" aria-hidden="true" tabIndex={-1} className="hidden" {...register('_honey')} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Your Name" id="contact-name" error={errors.name?.message}>
                    <input id="contact-name" type="text" placeholder="Kavy Agrawal" autoComplete="name" className={inputClass} style={inputStyle} {...register('name')} />
                  </InputField>
                  <InputField label="Email Address" id="contact-email" error={errors.email?.message}>
                    <input id="contact-email" type="email" placeholder="hello@example.com" autoComplete="email" className={inputClass} style={inputStyle} {...register('email')} />
                  </InputField>
                </div>

                <InputField label="Project Type" id="contact-type" error={errors.projectType?.message}>
                  <select id="contact-type" className={inputClass} style={{ ...inputStyle, color: '#F5F5F7' }} {...register('projectType')}>
                    <option value="" style={{ background: '#13141A' }}>Select a project type…</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} style={{ background: '#13141A' }}>{t}</option>
                    ))}
                  </select>
                </InputField>

                <InputField label="Message" id="contact-message" error={errors.message?.message}>
                  <textarea id="contact-message" rows={5} placeholder="Tell me about your project, timeline, and budget…" className={`${inputClass} resize-none`} style={inputStyle} {...register('message')} />
                </InputField>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(0,200,100,0.1)', border: '1px solid rgba(0,200,100,0.2)' }}>
                      <CheckCircle size={18} style={{ color: '#00c864' }} />
                      <div>
                        <p className="text-sm font-semibold text-white">Message sent!</p>
                        <p className="text-xs" style={{ color: '#A0A0AA' }}>I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  ) : status === 'error' ? (
                    <motion.div key="error" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
                      <AlertCircle size={18} style={{ color: '#F59E0B' }} />
                      <p className="text-sm" style={{ color: '#A0A0AA' }}>Something went wrong. Please email me directly.</p>
                    </motion.div>
                  ) : (
                    <motion.button key="submit" type="submit" disabled={isSubmitting || status === 'sending'}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-pill font-semibold text-black text-sm transition-all duration-200 disabled:opacity-60"
                      style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}>
                      {status === 'sending' ? (
                        <>
                          <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full" />
                          Sending…
                        </>
                      ) : (
                        <><Send size={15} />Send Message</>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>

                <p className="text-xs text-center" style={{ color: '#6B6B7A' }}>
                  Your information is kept private and never shared.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
