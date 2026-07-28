import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  primary: {
    className: 'text-black font-semibold',
    style: { background: 'linear-gradient(135deg, #F5C518, #FFE57F)' },
  },
  secondary: {
    className: 'text-white font-semibold border',
    style: { background: 'transparent', borderColor: 'rgba(245,197,24,0.5)', color: '#A0A0AA' },
  },
  ghost: {
    className: 'text-[#A0A0AA] font-medium',
    style: { background: 'rgba(255,255,255,0.04)' },
  },
  amber: {
    className: 'text-white font-semibold',
    style: { background: 'linear-gradient(135deg, #F59E0B, #FBBF24)' },
  },
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  external = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  ...props
}) {
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;

  const baseClass = `
    relative inline-flex items-center justify-center gap-2
    rounded-pill font-body transition-all duration-200
    select-none overflow-hidden
    ${s} ${v.className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  const inner = (
    <>
      {Icon && <Icon size={16} />}
      {children}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: disabled ? 1 : 1.03 }} whileTap={{ scale: disabled ? 1 : 0.97 }}>
        <Link to={to} className={baseClass} style={v.style} {...props}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <a href={href} className={baseClass} style={v.style} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} {...props}>
          {inner}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClass}
      style={v.style}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      {...props}
    >
      {inner}
    </motion.button>
  );
}
