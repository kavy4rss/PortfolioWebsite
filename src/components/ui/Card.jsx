import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Card({ children, className = '', tilt = false, glow = false, style = {} }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
  };

  return (
    <motion.div
      ref={cardRef}
      className={`glass-card ${glow ? 'hover:glow-yellow' : ''} transition-shadow duration-300 ${className}`}
      style={{
        transform,
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
