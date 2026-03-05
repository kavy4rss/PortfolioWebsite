import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../index.css';

const SignalScout = () => {
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <div className="karma-navigator-page">
            {/* Ambient Background Elements */}
            <div className="kn-bg-orb orb-1"></div>
            <div className="kn-bg-orb orb-2"></div>
            <div className="kn-bg-orb orb-3"></div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="kn-header"
            >
                <div className="kn-title-wrapper">
                    <h1 className="kn-title">Signal Scout</h1>
                    <div className="kn-title-glow"></div>
                </div>
                <p className="kn-subtitle">
                    The Noise-Cancelling Layer for the Social Web — a Chrome extension that scores the credibility of content in real-time, directly in your feed.
                </p>
            </motion.div>

            <div className="kn-content-grid">
                {/* Left Column: Detail Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="kn-main-details"
                >
                    {/* Overview */}
                    <motion.div variants={itemVariant} className="kn-glass-card hero-card">
                        <div className="kn-card-icon highlight-icon">📡</div>
                        <div className="kn-card-content">
                            <h2>The Problem It Solves</h2>
                            <p>
                                Every social feed is a river of signal and noise. Viral posts confidently share statistics that are fabricated, screenshots stripped of context, and emotionally charged headlines that omit half the story. Signal Scout is a browser extension that runs silently alongside your browsing, attaching a live credibility badge to every post it analyses using on-device AI — no server, no account, no data leaving your machine.
                            </p>
                        </div>
                    </motion.div>

                    {/* Architecture */}
                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">🏛️</span>
                            <h2>Architecture: Three Layers</h2>
                        </div>
                        <div className="kn-breakdown-grid">
                            <div className="kn-feature-card">
                                <div className="feature-step">01</div>
                                <h3>Content Engine</h3>
                                <div className="feature-badge">DOM Observer</div>
                                <p>
                                    A MutationObserver watches the feed for new posts. When a post enters the viewport, its text is extracted and queued for analysis. The engine batches requests to avoid overwhelming the AI model with concurrent calls, maintaining smooth scroll performance.
                                </p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">02</div>
                                <h3>Intelligence Layer</h3>
                                <div className="feature-badge">Gemini Nano + Cloud</div>
                                <p>
                                    The primary scorer is <strong>Gemini Nano</strong> — Google's on-device model that runs entirely in the browser via the Prompt API. For posts flagged as low-confidence, a "Re-evaluate with Cloud AI" option upgrades to Gemini 1.5 Flash for a deeper, more authoritative analysis.
                                </p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">03</div>
                                <h3>Command Center</h3>
                                <div className="feature-badge">Extension Popup</div>
                                <p>
                                    A clean popup UI displays per-session statistics: total posts scanned, score distribution, and a live feed of flagged content. Users can configure sensitivity thresholds, toggle platforms, and manage their Gemini API key for cloud re-evaluation.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Backend philosophy */}
                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">🔒</span>
                            <h2>The Current Backend: The Illusion of State</h2>
                        </div>
                        <div className="kn-glass-card" style={{ padding: '2rem', marginTop: '1rem' }}>
                            <p style={{ lineHeight: 1.8, marginBottom: '1.2rem' }}>
                                Signal Scout has <strong>no traditional backend</strong>. There is no database of posts, no cloud storage of your reading history, and no analytics pipeline reporting your activity to a server. This is a deliberate, privacy-first architectural decision.
                            </p>
                            <p style={{ lineHeight: 1.8, marginBottom: '1.2rem' }}>
                                All state — scored posts, session stats, user settings — lives in <code>chrome.storage.local</code>, which is sandboxed to your browser and your machine. The extension doesn't know who you are. It processes the text you see, scores it, shows you the badge, and forgets it.
                            </p>
                            <p style={{ lineHeight: 1.8 }}>
                                The Gemini Nano model itself runs inside Chrome's AI runtime, meaning <em>inference happens on your GPU, not on a company's server</em>. The optional Cloud Re-evaluate feature sends only the post text to Google's API, anonymous and transient. This is the illusion of state: the extension feels intelligent and persistent, when really it's stateless and local at its core.
                            </p>
                        </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">🛠️</span>
                            <h2>Technology Stack</h2>
                        </div>
                        <div className="kn-tech-pills">
                            <div className="tech-pill"><span className="tech-dot react"></span>Manifest V3</div>
                            <div className="tech-pill"><span className="tech-dot tailwind"></span>Gemini Nano (On-Device)</div>
                            <div className="tech-pill">Gemini 1.5 Flash (Cloud)</div>
                            <div className="tech-pill"><span className="tech-dot motion"></span>Chrome Extension API</div>
                            <div className="tech-pill"><span className="tech-dot api"></span>Webpack Bundled</div>
                            <div className="tech-pill">MutationObserver</div>
                            <div className="tech-pill">chrome.storage.local</div>
                        </div>

                        <div className="kn-glass-card highlight-card" style={{ marginTop: '1.5rem' }}>
                            <div className="highlight-content">
                                <h3>⚡ Performance Highlights</h3>
                                <div className="highlight-grid">
                                    <div className="highlight-item">
                                        <h4>Zero Latency</h4>
                                        <p>On-device Gemini Nano scores posts in milliseconds — no API round trip, no spinner.</p>
                                    </div>
                                    <div className="highlight-item">
                                        <h4>Zero Data Leak</h4>
                                        <p>No post content leaves the browser unless you explicitly click "Re-evaluate with Cloud".</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Status */}
                    <motion.div variants={itemVariant} className="kn-glass-card summary-card portfolio-summary">
                        <div className="summary-accent"></div>
                        <h2>Current Status</h2>
                        <p>
                            Signal Scout is in <strong>Developer Preview</strong>. It is fully functional and installable as an unpacked Chrome extension. The extension currently supports LinkedIn and X (Twitter) feeds, with more platforms on the roadmap. Source code is publicly available on GitHub.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right Column: Sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                    className="kn-sidebar"
                >
                    {/* How It Looks */}
                    <div className="kn-carousel-container glass-fx" style={{ marginBottom: '2rem' }}>
                        <div className="carousel-glow"></div>
                        <h3 className="carousel-title">Signal Scout Live</h3>
                        <p className="carousel-subtitle">Badges appear inline in your feed</p>
                        {/* Visual demo badges */}
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { score: 92, color: '#22c55e', label: 'High Credibility', icon: '✅' },
                                { score: 61, color: '#f59e0b', label: 'Mixed Signals', icon: '⚠️' },
                                { score: 18, color: '#ef4444', label: 'Low Credibility', icon: '🚨' },
                            ].map(({ score, color, label, icon }) => (
                                <div key={score} style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: `1px solid ${color}33`,
                                    borderLeft: `4px solid ${color}`,
                                    borderRadius: '10px',
                                    padding: '1rem 1.2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{label}</div>
                                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                                            <div style={{ height: '100%', width: `${score}%`, background: color, borderRadius: '3px', transition: 'width 0.8s ease' }}></div>
                                        </div>
                                    </div>
                                    <span style={{ fontWeight: 700, color, fontSize: '1.1rem' }}>{score}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Availability Card */}
                    <div className="kn-sale-container glass-fx">
                        <div className="sale-glow"></div>
                        <h3 className="sale-title">Signal Scout is Live</h3>
                        <p className="sale-description">
                            Free and open source. Install it as a Chrome Developer extension in under 2 minutes. No sign-up, no account, no subscription.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
                            <a
                                href="https://github.com/kavy4rss"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                                    padding: '0.85rem 1.5rem', borderRadius: '10px',
                                    background: 'var(--text-primary)', color: 'var(--bg-color)',
                                    fontWeight: 700, textDecoration: 'none', fontSize: '1rem',
                                    transition: 'opacity 0.2s ease'
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                View on GitHub
                            </a>
                            <Link
                                to="/signal-scout/guide"
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                                    padding: '0.85rem 1.5rem', borderRadius: '10px',
                                    background: 'transparent', color: 'var(--text-primary)',
                                    border: '1.5px solid var(--text-primary)',
                                    fontWeight: 600, textDecoration: 'none', fontSize: '1rem',
                                    transition: 'background 0.2s ease'
                                }}
                            >
                                📖 Installation Guide
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SignalScout;
