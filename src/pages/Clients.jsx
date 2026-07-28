import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Building2,
  ExternalLink,
  GraduationCap,
  Globe,
  Sparkles,
  ArrowRight,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import sgmicLogo from '../media/Client/Sgmic.jpg';

const sgmicFeatures = [
  {
    icon: Globe,
    title: 'Dual-Language Architecture',
    desc: 'Seamless English & Hindi language switcher for accessible multi-lingual communication across students and parents.',
  },
  {
    icon: GraduationCap,
    title: 'Academic & Admission Portal',
    desc: 'Structured 3-step admission guide (Application, Assessment, Confirmation) for Classes PG to 12th with document checklists.',
  },
  {
    icon: Building2,
    title: 'Digital Facilities Showcase',
    desc: 'Interactive virtual tours of Computer Labs, Science Labs (Physics, Chemistry, Biology), Library, and AV Learning Rooms.',
  },
  {
    icon: Users,
    title: 'Leadership & Faculty Hub',
    desc: 'Dedicated portals honoring Founder Late Shri Ram Narayan Agrawal and Manager Shri Amit Agrawal.',
  },
];

const workflowSteps = [
  {
    step: '01',
    title: 'Discovery & Vision Alignment',
    desc: 'In-depth analysis of school goals, target audience demographics, and core brand values.',
  },
  {
    step: '02',
    title: 'UI/UX Architecture',
    desc: 'Crafting responsive layouts, accessible typography, and intuitive navigation flows.',
  },
  {
    step: '03',
    title: 'High-Performance Build',
    desc: 'Developing modular, zero-bloat web portals optimized for speed, mobile devices, and SEO.',
  },
  {
    step: '04',
    title: 'Launch & Evolution',
    desc: 'Domain setup, SSL security, search engine indexing, and ongoing technical support.',
  },
];

export default function Clients() {
  return (
    <>
      <Helmet>
        <title>Clients &amp; Partnerships — Kavy Agrawal | Full Stack &amp; Web Developer</title>
        <meta
          name="description"
          content="Explore client partnerships and web solutions delivered by Kavy Agrawal, featuring Saraswati Gyan Mandir Inter College (SGMIC)."
        />
        <link rel="canonical" href="https://kavyagrawal.dev/clients" />
      </Helmet>

      <main id="main-content" className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── 1. Hero Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <Badge icon={Building2} variant="yellow">
              Client Partnerships &amp; Impact
            </Badge>
            <h1 className="font-display font-bold mt-4 mb-3 sm:mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Empowering <span className="gradient-text">Visionary</span> Organizations
            </h1>
            <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#A0A0AA' }}>
              Partnering with schools, businesses, and enterprises to build high-performance web applications, modern digital portals, and seamless user experiences.
            </p>
          </motion.div>

          {/* ── 2. Flagship Client Showcase: SGMIC ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-24"
          >
            <div
              className="glass-card p-5 sm:p-8 lg:p-12 rounded-3xl border relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(245, 197, 24, 0.06), rgba(19, 20, 26, 0.95))',
                borderColor: 'rgba(245, 197, 24, 0.25)',
              }}
            >
              {/* Subtle Ambient Radial Light */}
              <div
                className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #F5C518, transparent 70%)' }}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left: Info */}
                <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <span
                      className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ background: 'rgba(245, 197, 24, 0.2)', color: '#F5C518', border: '1px solid rgba(245, 197, 24, 0.3)' }}
                    >
                      ⭐ Flagship Client School
                    </span>
                    <span className="text-xs font-mono text-[#A0A0AA]">Azad Nagar, Kanpur, India</span>
                  </div>

                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <img
                      src={sgmicLogo}
                      alt="SGMIC Kanpur Logo"
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-[#F5C518]/40 shadow-xl shrink-0"
                    />
                    <div>
                      <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-tight">
                        Saraswati Gyan Mandir Inter College (SGMIC)
                      </h2>
                      <p className="text-xs font-mono text-[#F5C518] mt-0.5 sm:mt-1">Kanpur, Uttar Pradesh</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#A0A0AA' }}>
                    Established in 1968, SGMIC is a premier educational school dedicated to Bharatiya values, moral excellence, and academic distinction for over 56+ years (Classes PG to 12th). Designed and developed their complete modern web presence and administrative portal.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-1 sm:my-2">
                    {sgmicFeatures.map((f) => {
                      const IconComp = f.icon;
                      return (
                        <div key={f.title} className="flex gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/5">
                          <div className="p-2 rounded-xl bg-[#F5C518]/10 text-[#F5C518] shrink-0 h-fit">
                            <IconComp size={18} />
                          </div>
                          <div>
                            <h4 className="font-display font-semibold text-xs text-white mb-0.5">{f.title}</h4>
                            <p className="text-[11px] leading-relaxed" style={{ color: '#A0A0AA' }}>{f.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                    <a
                      href="https://sgmic.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-black transition-all duration-200 hover:scale-[1.02] shadow-lg w-full sm:w-auto"
                      style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}
                    >
                      <Globe size={16} />
                      <span>Visit Live Website (sgmic.in)</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href="https://sgmic.edu.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-xs sm:text-sm border border-white/10 text-white hover:border-[#F5C518] hover:text-[#F5C518] bg-white/5 transition-all duration-200 w-full sm:w-auto"
                    >
                      <GraduationCap size={16} />
                      <span>Educational Portal (sgmic.edu.in)</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Right: Showcase Card Preview */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div
                    className="p-5 sm:p-6 rounded-3xl border flex flex-col gap-5 sm:gap-6 shadow-2xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(11, 12, 16, 0.95))',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="flex items-center justify-between border-b pb-3.5" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                      <div className="flex items-center gap-3">
                        <img
                          src={sgmicLogo}
                          alt="SGMIC Logo"
                          className="w-10 h-10 rounded-xl object-cover border border-[#F5C518]/30"
                        />
                        <div>
                          <h4 className="font-display font-bold text-sm text-white">SGMIC Kanpur</h4>
                          <span className="text-[10px] text-[#A0A0AA]">School Client</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        ● Active Client
                      </span>
                    </div>

                    <div className="space-y-2.5 sm:space-y-3">
                      <div className="flex items-center justify-between gap-2 text-xs py-1.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <span className="text-[#A0A0AA] shrink-0">Project Type:</span>
                        <span className="font-semibold text-white text-right">School Web System</span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs py-1.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <span className="text-[#A0A0AA] shrink-0">Classes Offered:</span>
                        <span className="font-semibold text-[#F5C518] text-right">Classes PG to 12th</span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs py-1.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <span className="text-[#A0A0AA] shrink-0">Key Deliverables:</span>
                        <span className="font-semibold text-white text-right">School Website, Admissions Portal</span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs py-1.5">
                        <span className="text-[#A0A0AA] shrink-0">Tech Stack:</span>
                        <span className="font-semibold text-[#F5C518] text-right">HTML, CSS, JavaScript, Web3Forms</span>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-300 italic leading-relaxed">
                      &ldquo;Delivered a high-speed, accessible digital portal connecting students, parents, and alumni with SGMIC Kanpur.&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── 3. Partnership Workflow ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-24"
          >
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5C518]">How I Work</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">The Client Partnership Process</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {workflowSteps.map((wf) => (
                <div key={wf.step} className="glass-card p-5 sm:p-6 rounded-2xl border border-white/5 relative flex flex-col gap-2.5 sm:gap-3">
                  <span className="font-mono font-bold text-2xl text-[#F5C518] opacity-50">{wf.step}</span>
                  <h3 className="font-display font-bold text-base text-white">{wf.title}</h3>
                  <p className="text-xs leading-relaxed text-[#A0A0AA]">{wf.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 4. Call To Action ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-10 md:p-14 rounded-3xl text-center relative overflow-hidden border"
            style={{
              background: 'linear-gradient(135deg, rgba(245, 197, 24, 0.1), rgba(19, 20, 26, 0.98))',
              borderColor: 'rgba(245, 197, 24, 0.3)',
            }}
          >
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 sm:gap-5">
              <Sparkles size={32} className="text-[#F5C518] sm:w-9 sm:h-9" />
              <h2 className="font-display font-bold text-xl sm:text-3xl lg:text-4xl text-white leading-tight">
                Ready to Build Your Organization's Next Digital Milestone?
              </h2>
              <p className="text-xs sm:text-sm text-[#A0A0AA] leading-relaxed">
                Whether you represent a school, a growing business, or a tech startup, let's create a custom web solution tailored to your exact vision.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-black transition-all duration-200 hover:scale-[1.02] shadow-xl w-full sm:w-auto"
                  style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-xs sm:text-sm border border-white/10 text-slate-200 hover:text-white hover:border-[#F5C518] bg-white/5 transition-all duration-200 w-full sm:w-auto"
                >
                  <span>Explore Skills &amp; Experience</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
