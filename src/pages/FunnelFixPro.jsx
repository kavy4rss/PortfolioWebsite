import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PaymentTrigger from '../PaymentTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import '../index.css';

const FunnelFixPro = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Animation variants
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="karma-navigator-page">
            {/* Ambient Background Elements */}
            <div className="kn-bg-orb orb-1"></div>
            <div className="kn-bg-orb orb-2"></div>
            <div className="kn-bg-orb orb-3"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="kn-header"
            >
                <div className="kn-title-wrapper">
                    <h1 className="kn-title">Funnel Fix Pro</h1>
                    <div className="kn-title-glow"></div>
                </div>
                <p className="kn-subtitle">A sophisticated web application showcasing AI-driven lead-to-cash automation.</p>
            </motion.div>

            <div className="kn-content-grid">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="kn-main-details"
                >
                    <motion.div variants={itemVariant} className="kn-glass-card hero-card">
                        <div className="kn-card-icon highlight-icon">📈</div>
                        <div className="kn-card-content">
                            <h2>A Blueprint for Lead-to-Cash Automation</h2>
                            <p>
                                Welcome to the Funnel Fix Pro Agency Demo, a visually stunning web application designed to showcase the future of AI-driven lead-to-cash automation. This platform is an interactive experience demonstrating how businesses can capture, qualify, and follow up with leads without human intervention, ultimately plugging revenue leaks.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">🏛️</span>
                            <h2>Architecture: Pages & Functions</h2>
                        </div>
                        <div className="kn-breakdown-grid">
                            <div className="kn-feature-card">
                                <div className="feature-step">01</div>
                                <h3>The Home Page</h3>
                                <div className="feature-badge">The Engine Room</div>
                                <p>Featuring a 3D Hero Section, Client Marquee, Impact Stats, Problem Statement (Revenue Leakage), and Solution breakdown via an interactive BentoGrid.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">02</div>
                                <h3>The Knowledge Hub</h3>
                                <div className="feature-badge">/blog</div>
                                <p>A dedicated educational hub prioritizing deep-dive strategies like AI Lead Qualification, Reactivation, and Revenue Visibility to build authority.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">03</div>
                                <h3>The Conversion Engine</h3>
                                <div className="feature-badge">Contact Form</div>
                                <p>The final touchpoint providing a structured form for requesting a "Free AI Audit," ensuring only quality information flows through the pipeline.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">04</div>
                                <h3>The Safety Net</h3>
                                <div className="feature-badge">/404 Error</div>
                                <p>A beautifully designed fallback mechanism that elegantly guides lost visitors back onto the primary conversion funnel.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">05</div>
                                <h3>Seamless Navigation</h3>
                                <div className="feature-badge">Dynamic</div>
                                <p>Instant page transitions without reloads via React Router, paired with custom cursors, hover states, and scroll-linked animations that make the site feel alive.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">⚙️</span>
                            <h2>Technology Stack: The DNA</h2>
                        </div>
                        <div className="kn-tech-pills">
                            <div className="tech-pill"><span className="tech-dot react"></span>React 18 & TS</div>
                            <div className="tech-pill"><span className="tech-dot tailwind"></span>Tailwind & Radix UI</div>
                            <div className="tech-pill">Framer Motion</div>
                            <div className="tech-pill"><span className="tech-dot motion"></span>React Query & Zod</div>
                            <div className="tech-pill"><span className="tech-dot api"></span>Recharts & Lucide</div>
                        </div>

                        <div className="kn-glass-card highlight-card">
                            <div className="highlight-content">
                                <h3>🎭 Current Backend: The Illusion of State</h3>
                                <p style={{ marginBottom: '10px' }}>The application performs a brilliant sleight of hand. It is entirely a frontend mockup.</p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                    <li>When users submit the "Free AI Audit" form, an illusion of processing is generated using an asynchronous 1.5-second timer.</li>
                                    <li>After loading, a satisfying success screen is displayed, despite no actual data transmission.</li>
                                    <li>This exists solely in the browser's memory—a convincing prototype demonstrating the concept clearly prior to backend engineering.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-glass-card summary-card portfolio-summary">
                        <div className="summary-accent"></div>
                        <h2>The Vision: A True Backend?</h2>
                        <p style={{ textAlign: "left", marginBottom: "15px" }}>What happens when the illusion becomes reality? Integrating a true backend will transform this digital brochure into an autonomous revenue machine:</p>
                        <ul className="vision-list" style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px', textAlign: "left" }}>
                            <li><strong>Central Nervous System:</strong> Integrate PostgreSQL (via Supabase) or MongoDB to permanently store and track arriving leads.</li>
                            <li><strong>The AI Brain:</strong> Hooking into OpenAI or Anthropic to analyze a prospect's "biggest pain point," scoring their quality, and drafting hyper-personalized responses.</li>
                            <li><strong>The Communication Layer:</strong> Utilizing Twilio (SMS) and SendGrid (Email) to dispatch automatic messages and calendar links upon qualification, achieving true Instant AI Response.</li>
                            <li><strong>The Live Dashboard:</strong> Recharts visualizations will parse real-time backend data, displaying actual conversion metrics and turning "Revenue Visibility" into an operational reality.</li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="kn-sidebar"
                >
                    <div className="kn-carousel-container glass-fx">
                        <div className="carousel-glow"></div>
                        <h3 className="carousel-title">Live Preview</h3>
                        <p className="carousel-subtitle">Want to see this website in action?</p>

                        <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "20px" }}>
                            <a href="https://funnelfixpro.netlify.app/" target="_blank" rel="noopener noreferrer" className="sale-button">
                                <span>Preview Live Website</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>

                    <div className="kn-sale-container glass-fx mt-8">
                        <div className="sale-glow"></div>
                        <h3 className="sale-title">Acquire This Project</h3>
                        <p className="sale-description">This comprehensive lead-to-cash system is currently available. Accelerate your agency's growth.</p>
                        <PaymentTrigger
                            projectDetails={{ title: "FunnelFixPro Agency Website", type: "Website", price: 3000 }}
                            buttonText="Acquire Here"
                            className="sale-button"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Popup Modal for Full Image */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 9999,
                            cursor: 'pointer'
                        }}
                    >
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            src={selectedImage}
                            alt="Full Size View"
                            style={{
                                maxWidth: '90%',
                                maxHeight: '90%',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FunnelFixPro;
