import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  MapPin, Code2, Zap, Heart, Camera, Gamepad2, Video, Palette, Sparkles,
  Film, ZoomIn, ZoomOut, RotateCcw, Download, X, ChevronLeft, ChevronRight, RefreshCw, Instagram, ExternalLink, Wand2
} from 'lucide-react';
import { education, interests } from '../data/education';
import Badge from '../components/ui/Badge';
import profilePhoto from '../media/Kavy/IMG_8209.jpg';

// Import Gaming Logos
import valorantLogo from '../media/Gaming/valorant-black-logo-transparent-free-png.webp';
import robloxLogo from '../media/Gaming/black-roblox-logo-7.jpg';
import gtaLogo from '../media/Gaming/GTA5.webp';
import freefireLogo from '../media/Gaming/901b4ed4eaba1ae9db94fe3c3713b2ef.jpg';

// Import Graphic Design images
import gd1 from '../media/GraphicDesign/1.jpg';
import gd2 from '../media/GraphicDesign/2.jpg';
import gd3 from '../media/GraphicDesign/3.jpg';
import gd4 from '../media/GraphicDesign/4.jpg';
import gd5 from '../media/GraphicDesign/5.jpg';

// Import all 31 Photography images dynamically using Vite glob
const photographyGlobe = import.meta.glob('../media/Photography/*.{jpg,jpeg,png,webp,JPG,JPEG}', { eager: true, import: 'default' });
const photoList = Object.values(photographyGlobe);

const gamingList = [
  { name: 'Valorant', logo: valorantLogo },
  { name: 'Roblox', logo: robloxLogo },
  { name: 'GTA 5', logo: gtaLogo },
  { name: 'Free Fire', logo: freefireLogo },
];

const tabs = [
  { id: 'about', label: 'About Me' },
  { id: 'interests', label: 'Interests' },
  { id: 'education', label: 'Education' },
  { id: 'photography', label: 'Photography' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'video-editing', label: 'Video Editing' },
  { id: 'graphic-designs', label: 'Graphic Designs' },
];

// ── About Tab ─────────────────────────────────────────────────
function AboutTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
    >
      {/* Text */}
      <div className="lg:col-span-3 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Badge variant="success">Open to Opportunities</Badge>
          <span className="flex items-center gap-1.5 text-sm" style={{ color: '#A0A0AA' }}>
            <MapPin size={13} /> India
          </span>
        </div>

        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
          Hey, I'm <span className="gradient-text">Kavy Agrawal</span>
        </h2>

        <div className="flex flex-col gap-4 text-sm leading-7" style={{ color: '#A0A0AA' }}>
          <p>
            I'm a full-stack developer and SaaS architect from India, passionate about turning complex problems
            into elegant, scalable digital products. I specialize in building end-to-end web applications,
            cross-platform mobile apps with Flutter, and robust SaaS platforms that can grow from 0 to 100K users
            without a rewrite.
          </p>
          <p>
            My development philosophy centers on three pillars: <strong className="text-white">performance</strong> (users
            shouldn't wait), <strong className="text-white">maintainability</strong> (code is read more than written),
            and <strong className="text-white">real-world impact</strong> (software should solve actual problems, not
            add complexity).
          </p>
          <p>
            I've integrated custom payment gateways with Stripe and Razorpay, architected multi-tenant SaaS backends,
            shipped production Flutter apps, and embedded AI capabilities via OpenAI APIs — all while keeping user
            experience at the center of every decision.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, riding, or capturing
            street photography. I believe great developers are curious by nature — and I bring that curiosity to every
            project I take on.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-2">
          {[
            { icon: <Code2 size={18} />, label: 'Clean Code', desc: 'Readable & maintainable' },
            { icon: <Zap size={18} />, label: 'Performance', desc: 'Fast by default' },
            { icon: <Heart size={18} />, label: 'User First', desc: 'Delightful UX' },
          ].map((v) => (
            <div key={v.label} className="glass-card p-4 flex flex-col gap-2">
              <div style={{ color: '#F5C518' }}>{v.icon}</div>
              <p className="font-display font-semibold text-sm text-white">{v.label}</p>
              <p className="text-xs" style={{ color: '#6B6B7A' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo container */}
      <div className="lg:col-span-2 flex justify-center lg:justify-end">
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-3xl blur-2xl opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #F5C518, #FFFFFF)' }}
          />
          <div
            className="relative w-64 h-72 rounded-3xl flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #F5C518, #FFFFFF)', padding: '2px' }}
          >
            <div className="w-full h-full rounded-[22px] overflow-hidden" style={{ background: '#13141A' }}>
              <img
                src={profilePhoto}
                alt="Kavy Agrawal"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Interactive Interest Card ─────────────────────────────────────────
function InterestCard({ item, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -12;
    const rotateY = ((x - cx) / cx) * 12;
    setTransform(`perspective(600px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl p-6 h-full flex flex-col justify-between overflow-hidden cursor-pointer select-none"
        style={{
          background: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)',
          border: `1px solid ${isHovered ? `${item.color}77` : 'rgba(255, 255, 255, 0.07)'}`,
          transform,
          transition: 'transform 0.15s ease-out, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
          boxShadow: isHovered ? `0 12px 35px -10px ${item.color}35` : 'none',
          minHeight: '170px',
        }}
      >
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, ${item.color}30, transparent 80%)`,
            }}
          />
        )}

        <div className="flex items-center justify-between mb-4 z-10">
          <motion.span
            className="text-4xl inline-block"
            animate={{ scale: isHovered ? 1.25 : 1, rotate: isHovered ? [0, -8, 8, 0] : 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.icon}
          </motion.span>
          <span
            className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              background: `${item.color}15`,
              color: item.color,
              border: `1px solid ${item.color}35`,
            }}
          >
            {item.tag}
          </span>
        </div>

        <div className="z-10 mt-auto">
          <h3
            className="font-display font-bold text-base mb-1.5 transition-colors"
            style={{ color: isHovered ? '#FFFFFF' : '#F5F5F7' }}
          >
            {item.label}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: isHovered ? '#D0D0D8' : '#6B6B7A' }}>
            {item.description}
          </p>
        </div>

        <div
          className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: item.color,
            opacity: isHovered ? 0.35 : 0.05,
          }}
        />
      </div>
    </motion.div>
  );
}

// ── Interests Tab ─────────────────────────────────────────────
function InterestsTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8">
        <h2 className="font-display font-bold text-2xl mb-2">
          What I'm <span className="gradient-text">Passionate About</span>
        </h2>
        <p className="text-sm" style={{ color: '#A0A0AA' }}>
          Explore my tech interests, creative hobbies, and passions — hover over any card for interactive details.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {interests.map((item, i) => (
          <InterestCard key={item.label} item={item} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

// ── Education Tab ─────────────────────────────────────────────
function EducationTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="font-display font-bold text-2xl mb-10">
        Academic <span className="gradient-text">Timeline</span>
      </h2>
      <div className="relative">
        <div
          className="absolute left-5 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(180deg, #F5C518, #FFFFFF, transparent)' }}
        />

        <div className="flex flex-col gap-10 pl-14">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div
                className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full border-2"
                style={{ background: item.color, borderColor: '#0B0C10', boxShadow: `0 0 12px ${item.color}66` }}
              />

              <div className="glass-card p-6 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-white text-base">{item.institution}</h3>
                    <p className="text-sm mt-0.5" style={{ color: item.color }}>{item.degree}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-pill flex-shrink-0" style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}33` }}>
                    {item.period}
                  </span>
                </div>
                <p className="text-xs" style={{ color: '#6B6B7A' }}>📍 {item.location}</p>
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="flex flex-col gap-1.5 mt-1">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs" style={{ color: '#A0A0AA' }}>
                        <span style={{ color: item.color, marginTop: '2px' }}>→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Interactive Lightbox Popup Modal for Photography & Designs ────
function PhotoLightbox({ photos, currentIndex, onClose, onPrev, onNext }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setZoom(1);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'ArrowRight') onNext();
      else if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(z + 0.3, 3.5));
      else if (e.key === '-') setZoom((z) => Math.max(z - 0.3, 0.5));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const handleDownload = (e) => {
    e.stopPropagation();
    const currentPhotoUrl = photos[currentIndex];
    const link = document.createElement('a');
    link.href = currentPhotoUrl;
    link.download = `preview-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = (e) => { e.stopPropagation(); setZoom((z) => Math.min(z + 0.33, 3.5)); };
  const handleZoomOut = (e) => { e.stopPropagation(); setZoom((z) => Math.max(z - 0.33, 0.5)); };
  const handleResetZoom = (e) => { e.stopPropagation(); setZoom(1); };

  return (
    <AnimatePresence>
      {/* Semi-transparent Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md select-none"
        onClick={onClose}
      >
        {/* Popup Card Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
          style={{
            background: 'linear-gradient(145deg, #181922, #0E0F15)',
            border: '1px solid rgba(245, 197, 24, 0.25)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(245, 197, 24, 0.1)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Popup Header Menu Bar */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0"
            style={{ background: '#12131A', borderColor: 'rgba(255, 255, 255, 0.08)' }}
          >
            {/* Title & Counter */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(245,197,24,0.15)', color: '#F5C518', border: '1px solid rgba(245,197,24,0.3)' }}>
                {currentIndex + 1} / {photos.length}
              </span>
            </div>

            {/* Popup Interactive Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-xl text-sm transition-colors hover:bg-white/10"
                style={{ color: '#A0A0AA' }}
                title="Zoom Out (-)"
              >
                <ZoomOut size={18} />
              </button>

              <span className="text-xs font-mono font-semibold px-2 min-w-[45px] text-center" style={{ color: '#F5C518' }}>
                {Math.round(zoom * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                className="p-2 rounded-xl text-sm transition-colors hover:bg-white/10"
                style={{ color: '#A0A0AA' }}
                title="Zoom In (+)"
              >
                <ZoomIn size={18} />
              </button>

              {zoom !== 1 && (
                <button
                  onClick={handleResetZoom}
                  className="p-2 rounded-xl text-xs font-mono transition-colors hover:bg-white/10"
                  style={{ color: '#F5C518' }}
                  title="Reset Zoom"
                >
                  <RotateCcw size={16} />
                </button>
              )}

              <div className="h-4 w-px bg-white/10 mx-1" />

              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-black transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}
                title="Save Image"
              >
                <Download size={15} /> Save
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl transition-colors hover:bg-white/10 text-[#A0A0AA] hover:text-white ml-1"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Popup Main Viewport */}
          <div className="relative flex-1 flex items-center justify-center p-6 overflow-hidden min-h-[350px] bg-[#0A0B0F]">
            {/* Previous Navigation Button */}
            {photos.length > 1 && (
              <button
                onClick={onPrev}
                className="absolute left-4 z-20 p-3.5 rounded-full transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#FFFFFF' }}
                title="Previous Photo (←)"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Photo */}
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <motion.img
                key={currentIndex}
                src={photos[currentIndex]}
                alt={`Preview ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: zoom }}
                transition={{ duration: 0.2 }}
                className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-lg transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>

            {/* Next Navigation Button */}
            {photos.length > 1 && (
              <button
                onClick={onNext}
                className="absolute right-4 z-20 p-3.5 rounded-full transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#FFFFFF' }}
                title="Next Photo (→)"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* Popup Footer */}
          <div
            className="flex items-center justify-between px-6 py-3 border-t flex-shrink-0 text-xs font-mono"
            style={{ background: '#12131A', borderColor: 'rgba(255, 255, 255, 0.08)', color: '#6B6B7A' }}
          >
            <span>Use ← / → keys or buttons to navigate</span>
            <span>Esc to close</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── 📸 Photography Tab (Clean Grid + Interactive Lightbox Popup Window) ───
function PhotographyTab() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleOpen = (idx) => setLightboxIndex(idx);
  const handleClose = () => setLightboxIndex(null);
  const handlePrev = () => setLightboxIndex((prev) => (prev === 0 ? photoList.length - 1 : prev - 1));
  const handleNext = () => setLightboxIndex((prev) => (prev === photoList.length - 1 ? 0 : prev + 1));

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }}>
      {/* 📷 Camera Gear Showcase Banner */}
      <div
        className="glass-card p-5 rounded-2xl mb-6 border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{
          background: 'linear-gradient(135deg, rgba(245, 197, 24, 0.08), rgba(15, 16, 22, 0.95))',
          borderColor: 'rgba(245, 197, 24, 0.25)',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-white/5 text-[#F5C518]">
            <Camera size={22} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full" style={{ background: 'rgba(245,197,24,0.2)', color: '#F5C518' }}>
              Camera Gear
            </span>
            <h3 className="font-display font-bold text-base text-white mt-1">Sony Alpha ZV-E10 (128GB Storage)</h3>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
          <span className="text-[#F5C518] font-bold">Lens:</span> Sony E PZ 16-50mm f/3.5-5.6 OSS
        </div>
      </div>

      {/* Clean Grid of All 31 Photos — No text added */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {photoList.map((photoUrl, i) => (
          <motion.div
            key={photoUrl}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02, duration: 0.3 }}
            whileHover={{ scale: 1.04, y: -4 }}
            onClick={() => handleOpen(i)}
            className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group glass-card p-1"
          >
            <img
              src={photoUrl}
              alt={`Photograph ${i + 1}`}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-2xl pointer-events-none">
              <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full" style={{ background: 'rgba(245,197,24,0.9)', color: '#000' }}>
                Open Lightbox
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Popup Modal */}
      {lightboxIndex !== null && (
        <PhotoLightbox
          photos={photoList}
          currentIndex={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </motion.div>
  );
}

// ── 🎮 Gaming Tab (Logos & Names Only) ─────────────────────────
function GamingTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto py-4">
        {gamingList.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="glass-card p-8 flex flex-col items-center justify-center gap-6 rounded-3xl text-center group"
            style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            <div className="w-28 h-28 flex items-center justify-center rounded-2xl p-3 bg-white/5 group-hover:bg-white/10 transition-colors">
              <img
                src={g.logo}
                alt={g.name}
                className="max-w-full max-h-full object-contain filter drop-shadow-lg"
              />
            </div>
            <h3 className="font-display font-bold text-xl text-white tracking-wide">{g.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── 🎬 Video Editing Tab (Square Instagram Card & Software/AI Tools) ─
function VideoEditingTab() {
  const tools = [
    {
      name: 'CapCut',
      type: 'Video Editing Software',
      category: 'Software',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M19.5 5.5L12 12L19.5 18.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.5 5.5L12 12L4.5 18.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#F5C518'
    },
    {
      name: 'Filmora',
      type: 'Video Editing Software',
      category: 'Software',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="#00D09C" />
          <path d="M8 7.5h8v3h-5v2.5h4v3h-4V18H8V7.5z" fill="#000000" />
        </svg>
      ),
      color: '#00D09C'
    },
    {
      name: 'ElevenLabs',
      type: 'AI Voice & Audio Generation',
      category: 'AI Tool',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <rect x="7" y="4" width="3.2" height="16" rx="1.6" fill="#FFFFFF" />
          <rect x="13.8" y="4" width="3.2" height="16" rx="1.6" fill="#FFFFFF" />
        </svg>
      ),
      color: '#F59E0B'
    },
    {
      name: 'Gemini',
      type: 'AI Scripting & Storyboarding',
      category: 'AI Tool',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
            fill="url(#gemini-tab-grad)"
          />
          <defs>
            <linearGradient id="gemini-tab-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A73E8" />
              <stop offset="0.5" stopColor="#A142F4" />
              <stop offset="1" stopColor="#F35325" />
            </linearGradient>
          </defs>
        </svg>
      ),
      color: '#A142F4'
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto py-4">
        {/* Square Instagram Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="glass-card aspect-square max-w-md w-full mx-auto p-8 rounded-3xl flex flex-col items-center justify-between text-center relative overflow-hidden group shadow-2xl"
          style={{
            background: 'linear-gradient(145deg, rgba(245, 197, 24, 0.12), rgba(193, 53, 132, 0.1), rgba(15, 16, 22, 0.98))',
            border: '1px solid rgba(245, 197, 24, 0.3)',
            boxShadow: '0 20px 50px -15px rgba(245, 197, 24, 0.2)',
          }}
        >
          {/* Top Tag */}
          <div className="flex items-center gap-2 z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: 'rgba(245,197,24,0.2)', color: '#F5C518', border: '1px solid rgba(245,197,24,0.3)' }}>
              Video Portfolio
            </span>
          </div>

          {/* Center Instagram Badge & Info */}
          <div className="flex flex-col items-center gap-4 z-10 my-auto">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #F5C518, #E1306C, #FD1D1D)' }}>
              <Instagram size={40} className="text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-1">
                @multitaskingkavy.mp3
              </h3>
              <p className="text-xs max-w-xs leading-relaxed" style={{ color: '#A0A0AA' }}>
                Watch my complete video editing portfolio, motion graphics reels, cinematic shorts &amp; promos on Instagram!
              </p>
            </div>
          </div>

          {/* Bottom CTA Button */}
          <a
            href="https://www.instagram.com/multitaskingkavy.mp3/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-black z-10 transition-transform duration-200 hover:scale-105 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}
          >
            <Instagram size={18} />
            <span>Visit Instagram Profile</span>
            <ExternalLink size={15} />
          </a>
        </motion.div>

        {/* Software & Tools Column */}
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Film size={20} style={{ color: '#F5C518' }} />
              <h3 className="font-display font-bold text-xl text-white">Software &amp; AI Tools</h3>
            </div>
            <p className="text-xs" style={{ color: '#A0A0AA' }}>
              Software applications &amp; artificial intelligence tools I use for video editing and content creation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 rounded-2xl flex flex-col gap-3 relative overflow-hidden"
                style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/5" style={{ color: t.color }}>
                    {t.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}35` }}>
                    {t.category}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">{t.name}</h4>
                  <p className="text-xs" style={{ color: '#A0A0AA' }}>{t.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── 🎨 Graphic Designs Tab (Featuring Client Visiting Card 1.png + 2.png) ─
function GraphicDesignsTab() {
  const [visitingCardFlipped, setVisitingCardFlipped] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // All graphic design images
  const designList = [
    { title: 'Client Visiting Card (Front & Back)', isVisitingCard: true, front: gd1, back: gd2 },
    { title: 'Graphic Artwork 3', img: gd3 },
    { title: 'Graphic Artwork 4', img: gd4 },
    { title: 'Graphic Artwork 5', img: gd5 },
  ];

  const lightboxPhotos = [gd2, gd1, gd3, gd4, gd5];

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }}>
      <div className="flex items-center gap-3 mb-3">
        <Palette size={24} style={{ color: '#F5C518' }} />
        <h2 className="font-display font-bold text-2xl">
          Graphic Design &amp; <span className="gradient-text">Brand Assets</span>
        </h2>
      </div>
      <p className="text-sm mb-8" style={{ color: '#A0A0AA' }}>
        Showcase of client branding, visiting cards, posters, and graphic artworks.
      </p>

      {/* 💳 Combined Client Visiting Card (2.png & 1.png together) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6 md:p-8 rounded-3xl mb-8 border border-white/10 relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: 'rgba(245,197,24,0.15)', color: '#F5C518', border: '1px solid rgba(245,197,24,0.3)' }}>
              Client Work
            </span>
            <h3 className="font-display font-bold text-xl text-white mt-2">Client Visiting Card</h3>
            <p className="text-xs mt-1" style={{ color: '#A0A0AA' }}>Complete dual-sided visiting card design (Front &amp; Back sides combined)</p>
          </div>

          <button
            onClick={() => setVisitingCardFlipped(!visitingCardFlipped)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#F5C518' }}
          >
            <RefreshCw size={14} className={visitingCardFlipped ? 'rotate-180 transition-transform duration-500' : 'transition-transform duration-500'} />
            {visitingCardFlipped ? 'View Front Side' : 'View Back Side'}
          </button>
        </div>

        {/* Side by Side Dual View for Visiting Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Front Side Card */}
          <div
            onClick={() => setLightboxIndex(0)}
            className="relative rounded-2xl overflow-hidden glass-card p-2 cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
            style={{ border: visitingCardFlipped ? '1px solid rgba(255,255,255,0.1)' : '2px solid #F5C518' }}
          >
            <div className="absolute top-4 left-4 z-10 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-black/70 text-[#F5C518] backdrop-blur-sm">
              Front Side
            </div>
            <img src={gd2} alt="Visiting Card Front" className="w-full h-auto rounded-xl object-contain max-h-[280px] mx-auto" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-2xl pointer-events-none">
              <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full" style={{ background: 'rgba(245,197,24,0.9)', color: '#000' }}>
                Zoom Front Side
              </span>
            </div>
          </div>

          {/* Back Side Card */}
          <div
            onClick={() => setLightboxIndex(1)}
            className="relative rounded-2xl overflow-hidden glass-card p-2 cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
            style={{ border: visitingCardFlipped ? '2px solid #F5C518' : '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="absolute top-4 left-4 z-10 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-black/70 text-[#F5C518] backdrop-blur-sm">
              Back Side
            </div>
            <img src={gd1} alt="Visiting Card Back" className="w-full h-auto rounded-xl object-contain max-h-[280px] mx-auto" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-2xl pointer-events-none">
              <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full" style={{ background: 'rgba(245,197,24,0.9)', color: '#000' }}>
                Zoom Back Side
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 🖼️ Remaining Graphic Design Works (3.png, 4.png, 5.jpg) */}
      <h3 className="font-display font-bold text-lg text-white mb-4">Other Graphic Artworks</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { img: gd3, title: 'Design Asset 1', idx: 2 },
          { img: gd4, title: 'Design Asset 2', idx: 3 },
          { img: gd5, title: 'Design Asset 3', idx: 4 },
        ].map((item) => (
          <motion.div
            key={item.idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.idx * 0.08, duration: 0.4 }}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={() => setLightboxIndex(item.idx)}
            className="glass-card p-3 rounded-2xl overflow-hidden cursor-pointer group relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-black/30 flex items-center justify-center">
              <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-2xl pointer-events-none">
              <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full" style={{ background: 'rgba(245,197,24,0.9)', color: '#000' }}>
                Open Lightbox
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Popup Modal for Graphic Designs */}
      {lightboxIndex !== null && (
        <PhotoLightbox
          photos={lightboxPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev === 0 ? lightboxPhotos.length - 1 : prev - 1))}
          onNext={() => setLightboxIndex((prev) => (prev === lightboxPhotos.length - 1 ? 0 : prev + 1))}
        />
      )}
    </motion.div>
  );
}

// ── About Page ────────────────────────────────────────────────
export default function About() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (tabs.find((t) => t.id === hash)) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>About — Kavy Agrawal | Full Stack Developer</title>
        <meta name="description" content="Learn about Kavy Agrawal — Full Stack Developer, SaaS Architect, and App Developer from India. Bio, interests, and education." />
        <link rel="canonical" href="https://kavyagrawal.dev/about" />
      </Helmet>

      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#F5C518' }}>Get to know me</p>
            <h1 className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>About</h1>
          </motion.div>

          {/* Tab bar — scrollable on mobile */}
          <div className="overflow-x-auto no-scrollbar max-w-full mb-10 pb-2">
            <div className="flex items-center gap-1.5 p-1.5 rounded-xl w-max border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.06)' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 focus-visible:outline-none whitespace-nowrap shrink-0"
                  style={{ color: activeTab === tab.id ? '#000' : '#A0A0AA' }}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="tab-active-bg"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'linear-gradient(135deg, rgba(245,197,24,0.9), rgba(255,229,127,0.7))' }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {activeTab === 'about' && <AboutTab key="about" />}
            {activeTab === 'interests' && <InterestsTab key="interests" />}
            {activeTab === 'education' && <EducationTab key="education" />}
            {activeTab === 'photography' && <PhotographyTab key="photography" />}
            {activeTab === 'gaming' && <GamingTab key="gaming" />}
            {activeTab === 'video-editing' && <VideoEditingTab key="video-editing" />}
            {activeTab === 'graphic-designs' && <GraphicDesignsTab key="graphic-designs" />}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
