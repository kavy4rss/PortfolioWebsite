import { motion } from 'framer-motion';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Tech Grid Lines Layer */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(245, 197, 24, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245, 197, 24, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 2. Micro Dot Matrix Intersections Layer */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* 3. Top Center Golden Glow Mask */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] blur-[120px] opacity-30"
        style={{
          background: 'radial-gradient(circle at center, #F5C518 0%, rgba(245, 158, 11, 0.4) 40%, transparent 70%)',
        }}
      />

      {/* 4. Bottom Corner Ambient Glow */}
      <div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] blur-[140px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #F5C518, transparent 70%)',
        }}
      />

      {/* 5. Radial Vignette Mask to blend edges into deep dark background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, transparent 20%, #0B0C10 90%)',
        }}
      />
    </div>
  );
}
