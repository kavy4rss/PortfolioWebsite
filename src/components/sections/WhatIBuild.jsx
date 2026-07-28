import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ─── Terminal script ────────────────────────────────────────────
const LINES = [
  { id: 'a', type: 'cmd', text: 'whoami' },
  { id: 'b', type: 'out', text: 'Kavya Agrawal  ·  Self-taught dev  ·  India 🇮🇳', color: '#F5C518' },
  { id: 'c', type: 'blank' },
  { id: 'd', type: 'cmd', text: 'cat my_story.txt' },
  { id: 'e', type: 'out', text: 'Started with YouTube tutorials & "Hello World".', color: '#D0D0D8' },
  { id: 'f', type: 'out', text: 'Fell in love with building things on the internet.', color: '#D0D0D8' },
  { id: 'g', type: 'out', text: 'Now shipping full-stack apps, SaaS & Flutter projects.', color: '#D0D0D8' },
  { id: 'h', type: 'blank' },
  { id: 'i', type: 'cmd', text: 'ls ./skills' },
  { id: 'j', type: 'out', text: 'React   Node.js   Flutter   Python   PostgreSQL   Figma', color: '#FDE047', mono: true },
  { id: 'k', type: 'blank' },
  { id: 'l', type: 'cmd', text: 'cat goals.txt' },
  { id: 'm', type: 'out', text: '  ✦  Build products people actually use', color: '#F59E0B' },
  { id: 'n', type: 'out', text: '  ✦  Land my first paying client', color: '#F59E0B' },
  { id: 'o', type: 'out', text: '  ✦  Keep learning — every single day', color: '#F59E0B' },
  { id: 'p', type: 'blank' },
  { id: 'q', type: 'cmd', text: 'echo $OPEN_TO_WORK' },
  { id: 'r', type: 'out', text: 'YES ✅  — Let\'s build something together!', color: '#4ade80' },
];

// ─── Hook: sequential terminal animation ────────────────────────
function useTerminal(run) {
  const [shown, setShown] = useState([]);   // fully visible lines
  const [typing, setTyping] = useState(''); // chars typed for current cmd
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!run) return;
    let mounted = true;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    async function animate() {
      setShown([]);
      setTyping('');
      setDone(false);
      await sleep(400);

      for (const line of LINES) {
        if (!mounted) return;

        if (line.type === 'cmd') {
          await sleep(260);
          for (let c = 1; c <= line.text.length; c++) {
            if (!mounted) return;
            setTyping(line.text.slice(0, c));
            await sleep(52);
          }
          setTyping('');
          setShown((s) => [...s, line]);
          await sleep(340);
        } else if (line.type === 'blank') {
          setShown((s) => [...s, line]);
          await sleep(80);
        } else {
          setShown((s) => [...s, line]);
          await sleep(170);
        }
      }

      if (mounted) setDone(true);
    }

    animate();
    return () => { mounted = false; };
  }, [run]);

  return { shown, typing, done };
}

// ─── Render a single terminal line ─────────────────────────────
function TerminalLine({ line }) {
  if (line.type === 'blank') return <div className="h-3" />;

  if (line.type === 'cmd') {
    return (
      <div className="flex items-center gap-2">
        <span style={{ color: '#F5C518', fontWeight: 700 }}>$</span>
        <span style={{ color: '#FFFFFF' }}>{line.text}</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className={`pl-4 ${line.mono ? 'font-mono' : ''}`}
      style={{ color: line.color || '#A0A0AA' }}
    >
      {line.text}
    </motion.div>
  );
}

// ─── Main component ─────────────────────────────────────────────
export default function TerminalAbout() {
  const [runKey, setRunKey] = useState(0);
  const { shown, typing, done } = useTerminal(runKey >= 0);

  return (
    <section className="section-padding" aria-label="About Me Terminal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#F5C518' }}>
            Behind The Code
          </p>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Meet the <span className="gradient-text">Developer</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: '#A0A0AA' }}>
            The real story — no fluff, no buzzwords.
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: '#0D0E14',
            border: '1px solid rgba(245,197,24,0.15)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px -20px rgba(0,0,0,0.7), 0 0 60px rgba(245,197,24,0.06)',
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{ background: '#141520', borderColor: 'rgba(255,255,255,0.06)' }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
            </div>

            {/* Tab title */}
            <span
              className="text-xs font-medium px-4 py-0.5 rounded-md"
              style={{
                color: '#A0A0AA',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                fontFamily: 'monospace',
              }}
            >
              kavya@portfolio — bash
            </span>

            {/* Replay button */}
            <button
              onClick={() => setRunKey((k) => k + 1)}
              title="Replay animation"
              className="text-xs flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all duration-200 hover:scale-105"
              style={{
                color: '#6B6B7A',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              ↺ Replay
            </button>
          </div>

          {/* Terminal body */}
          <div
            className="p-6 font-mono text-sm leading-7 min-h-[380px] relative overflow-hidden"
            style={{ fontSize: '0.82rem' }}
          >
            {/* Subtle scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.015]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 4px)',
                backgroundSize: '100% 4px',
              }}
            />

            {/* Lines */}
            <div className="relative z-10 flex flex-col gap-0.5">
              {/* Prompt at start */}
              <div className="flex items-center gap-2 mb-1" style={{ color: '#3B3B4A' }}>
                kavya@portfolio:~
              </div>

              {shown.map((line) => (
                <TerminalLine key={line.id} line={line} />
              ))}

              {/* Currently typing command */}
              {typing && (
                <div className="flex items-center gap-2">
                  <span style={{ color: '#F5C518', fontWeight: 700 }}>$</span>
                  <span style={{ color: '#FFFFFF' }}>{typing}</span>
                  <span
                    className="inline-block w-[7px] h-[14px] animate-pulse"
                    style={{ background: '#F5C518', verticalAlign: 'middle' }}
                  />
                </div>
              )}

              {/* Idle blinking cursor when done */}
              {done && !typing && (
                <div className="flex items-center gap-2 mt-1">
                  <span style={{ color: '#F5C518', fontWeight: 700 }}>$</span>
                  <span
                    className="inline-block w-[7px] h-[14px] animate-pulse"
                    style={{ background: '#F5C518' }}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Keyboard hint */}
        <p className="text-center text-xs mt-4" style={{ color: '#3B3B4A' }}>
          ↺ Click "Replay" to watch again
        </p>

      </div>
    </section>
  );
}
