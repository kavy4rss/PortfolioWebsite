import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import '../index.css';

const steps = [
    {
        num: '01',
        icon: '⬇️',
        title: 'Download from GitHub',
        badge: 'Source Code',
        desc: 'Go to the Signal Scout GitHub repository and click the green "Code" button, then "Download ZIP". Extract the ZIP to a convenient folder on your computer (e.g., Desktop/SignalScout).',
        tip: 'Or clone it: git clone https://github.com/kavy4rss/signal-scout'
    },
    {
        num: '02',
        icon: '🧩',
        title: 'Open Extensions Manager',
        badge: 'Chrome / Brave / Edge',
        desc: 'Open your browser and navigate to the extensions page by typing the following in your address bar and pressing Enter:',
        code: 'chrome://extensions/'
    },
    {
        num: '03',
        icon: '🔧',
        title: 'Enable Developer Mode',
        badge: 'Required Step',
        desc: 'In the top-right corner of the Extensions page, you will see a toggle labelled "Developer mode". Click it to turn it ON. The page will refresh and show three new buttons.',
        warning: 'This is safe — Developer Mode simply allows you to load extensions that haven\'t been published to the Chrome Web Store.'
    },
    {
        num: '04',
        icon: '📂',
        title: 'Load the Extension',
        badge: 'Load Unpacked',
        desc: 'Click the "Load unpacked" button that appeared after enabling Developer Mode. A file browser dialog will open. Navigate to the folder you extracted from GitHub and select the "dist" or "extension" subfolder inside it.',
        tip: 'If you are unsure which folder to pick, look for the one that contains a "manifest.json" file.'
    },
    {
        num: '05',
        icon: '📌',
        title: 'Pin Signal Scout & Go Live',
        badge: 'Final Step',
        desc: 'Signal Scout will appear in your extensions list. Click the puzzle-piece icon in the Chrome toolbar, find Signal Scout, and click the pin 📌 icon to add it to your toolbar. Now navigate to LinkedIn or X — Signal Scout will start scoring posts immediately.',
        tip: 'Refresh the tab after installing for the first time so the content script activates.'
    }
];

const SignalScoutGuide = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <div className="karma-navigator-page">
            <div className="kn-bg-orb orb-1"></div>
            <div className="kn-bg-orb orb-2"></div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="kn-header"
                style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}
            >
                <Link
                    to="/signal-scout"
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        color: 'var(--text-secondary)', textDecoration: 'none',
                        fontSize: '0.9rem', marginBottom: '1.5rem',
                        transition: 'color 0.2s'
                    }}
                >
                    ← Back to Signal Scout
                </Link>
                <div className="kn-title-wrapper" style={{ justifyContent: 'center' }}>
                    <h1 className="kn-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                        Installation Guide
                    </h1>
                    <div className="kn-title-glow"></div>
                </div>
                <p className="kn-subtitle">
                    How to Install Signal Scout (Developer Preview) — takes under 2 minutes.
                </p>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: '20px', padding: '0.4rem 1.2rem', marginTop: '1rem',
                    color: '#22c55e', fontSize: '0.85rem', fontWeight: 600
                }}>
                    ✅ No account required · No subscription · 100% free
                </div>
            </motion.div>

            {/* Steps */}
            <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
                {/* Vertical timeline line */}
                <div style={{
                    position: 'absolute', left: '2.5rem', top: '2rem', bottom: '2rem',
                    width: '2px', background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    zIndex: 0
                }}></div>

                {steps.map((step, i) => (
                    <motion.div
                        key={step.num}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-60px' }}
                        style={{
                            display: 'flex', gap: '2rem', marginBottom: '2.5rem',
                            position: 'relative', zIndex: 1
                        }}
                    >
                        {/* Number bubble */}
                        <div style={{
                            flexShrink: 0, width: '5rem', height: '5rem',
                            borderRadius: '50%',
                            background: 'var(--text-primary)',
                            color: 'var(--bg-color)',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.5rem', fontWeight: 900,
                            boxShadow: '0 0 0 4px var(--bg-color), 0 0 0 5px rgba(255,255,255,0.1)'
                        }}>
                            <span style={{ fontSize: '1.4rem' }}>{step.icon}</span>
                        </div>

                        {/* Content card */}
                        <div className="kn-glass-card" style={{ flex: 1, padding: '1.8rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                                <span style={{
                                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                                    color: 'var(--text-secondary)', textTransform: 'uppercase'
                                }}>STEP {step.num}</span>
                                <span className="feature-badge">{step.badge}</span>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
                                {step.title}
                            </h3>
                            <p style={{ lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: step.code || step.tip || step.warning ? '1rem' : 0 }}>
                                {step.desc}
                            </p>
                            {step.code && (
                                <div style={{
                                    background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px', padding: '0.8rem 1.2rem',
                                    fontFamily: 'monospace', fontSize: '0.95rem',
                                    color: '#60a5fa', userSelect: 'all'
                                }}>
                                    {step.code}
                                </div>
                            )}
                            {step.warning && (
                                <div style={{
                                    background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                                    borderRadius: '8px', padding: '0.8rem 1.2rem',
                                    fontSize: '0.88rem', color: '#f59e0b', lineHeight: 1.6
                                }}>
                                    ⚠️ {step.warning}
                                </div>
                            )}
                            {step.tip && (
                                <div style={{
                                    background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.15)',
                                    borderRadius: '8px', padding: '0.8rem 1.2rem',
                                    fontSize: '0.88rem', color: '#60a5fa', lineHeight: 1.6,
                                    fontFamily: step.tip.startsWith('git') ? 'monospace' : 'inherit'
                                }}>
                                    💡 {step.tip}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}

                {/* Done card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="kn-glass-card summary-card"
                    style={{ textAlign: 'center', padding: '3rem 2rem', marginTop: '1rem' }}
                >
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        You're all set!
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
                        Signal Scout is now active. Open LinkedIn or X, scroll through your feed, and watch the credibility badges appear inline — no clicks needed.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                            href="https://github.com/kavy4rss"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '0.8rem 2rem', borderRadius: '10px',
                                background: 'var(--text-primary)', color: 'var(--bg-color)',
                                fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'
                            }}
                        >
                            ⭐ Star on GitHub
                        </a>
                        <Link
                            to="/signal-scout"
                            style={{
                                padding: '0.8rem 2rem', borderRadius: '10px',
                                background: 'transparent', color: 'var(--text-primary)',
                                border: '1.5px solid var(--text-primary)',
                                fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem'
                            }}
                        >
                            ← Project Details
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SignalScoutGuide;
