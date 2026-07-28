import { motion } from 'framer-motion';

export default function Badge({ children, variant = 'success', className = '' }) {
  const styles = {
    success: { bg: 'rgba(0,200,100,0.12)', border: 'rgba(0,200,100,0.3)', color: '#00c864' },
    warning: { bg: 'rgba(245,197,24,0.12)', border: 'rgba(245,197,24,0.3)', color: '#F5C518' },
    info: { bg: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.2)', color: '#FFFFFF' },
    amber: { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', color: '#F59E0B' },
  };
  const s = styles[variant] || styles.info;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-semibold ${className}`}
      style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ background: s.color }}
      />
      {children}
    </motion.span>
  );
}
