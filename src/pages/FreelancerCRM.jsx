import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import '../index.css';

import FreelancerCRM2Img from '../assets/Freelancer_CRM/2.jpeg';
import FreelancerCRM3Img from '../assets/Freelancer_CRM/3.jpeg';
import FreelancerCRM4Img from '../assets/Freelancer_CRM/4.jpeg';
import FreelancerCRM5Img from '../assets/Freelancer_CRM/5.jpeg';
import FreelancerCRM6Img from '../assets/Freelancer_CRM/6.jpeg';

const FreelancerCRM = () => {
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
                    <h1 className="kn-title">Freelancer CRM</h1>
                    <div className="kn-title-glow"></div>
                </div>
                <p className="kn-subtitle">A comprehensive, intelligent command center designed to orchestrate the chaos of freelance business management.</p>
            </motion.div>

            <div className="kn-content-grid">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="kn-main-details"
                >
                    <motion.div variants={itemVariant} className="kn-glass-card hero-card">
                        <div className="kn-card-icon highlight-icon">🏢</div>
                        <div className="kn-card-content">
                            <h2>The Ultimate Freelancer CRM</h2>
                            <p>
                                More than just a piece of software, this is a comprehensive, intelligent command center designed to orchestrate the chaos of freelance business management. Its purpose is to seamlessly synthesize clients, projects, tasks, and finances into one unified, hyper-efficient ecosystem. Let's dive into the architecture, the technology, and the vision of what this platform is destined to become.
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
                                <h3>The Dashboard (/)</h3>
                                <div className="feature-badge">Nerve Center</div>
                                <p>Aggregates operational data, tracks revenue goals, visualizes financial trajectories using recharts, and provides a bird’s-eye view of pressing tasks.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">02</div>
                                <h3>Clients Hub (/clients)</h3>
                                <div className="feature-badge">Relationship Ledger</div>
                                <p>Securely stores client details, tying them directly to associated projects and invoices, ensuring you never lose track of a crucial contact.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">03</div>
                                <h3>Projects Matrix (/projects)</h3>
                                <div className="feature-badge">Deliverables Engine</div>
                                <p>Tracks project statuses, budgets, and portfolios. Every project is strictly isolated to your specific workspace.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">04</div>
                                <h3>Task Board (/tasks)</h3>
                                <div className="feature-badge">Kanban Flow</div>
                                <p>A fluid, interactive Kanban-style environment powered by dnd-kit. Effortlessly glide tasks across different stages of completion.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">05</div>
                                <h3>Invoices & Billing (/invoices)</h3>
                                <div className="feature-badge">Financial Lifeblood</div>
                                <p>Manages billing cycles, generates invoices, and handles automated email reminders via EmailJS to ensure timely payments.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">06</div>
                                <h3>Settings & Auth (/settings)</h3>
                                <div className="feature-badge">The Fortress</div>
                                <p>Handles secure onboarding, OTP generation, and profile management across isolated workspaces.</p>
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
                            <div className="tech-pill"><span className="tech-dot tailwind"></span>Tailwind + Shadcn</div>
                            <div className="tech-pill">Framer Motion</div>
                            <div className="tech-pill"><span className="tech-dot motion"></span>React Query</div>
                            <div className="tech-pill"><span className="tech-dot api"></span>React Router</div>
                        </div>

                        <div className="kn-glass-card highlight-card">
                            <div className="highlight-content">
                                <h3>🧠 Current Backend: The Illusion of State</h3>
                                <p style={{ marginBottom: '10px' }}>Operating on a sophisticated Simulated Local Storage Backend (`localDb.ts`):</p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                    <li><strong>Zero-Friction Prototyping:</strong> Zero cloud configuring. Deploys instantly and functions in an offline-first environment.</li>
                                    <li><strong>Mocked Multi-Tenancy:</strong> Simulates strict data isolation by authenticating via user_id and space_id.</li>
                                    <li><strong>Prepared for Cloud:</strong> Full schema migrations prepared for Supabase (PostgreSQL) and Firebase (Firestore & Auth).</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-glass-card summary-card portfolio-summary">
                        <div className="summary-accent"></div>
                        <h2>The Vision: A True Backend?</h2>
                        <ul className="vision-list" style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                            <li><strong>True Cross-Device Sync:</strong> Real-time persistence with a live PostgreSQL backend across devices.</li>
                            <li><strong>Autonomous Operations:</strong> Run chron jobs to chase unpaid invoices and dynamically recalculate revenue goals.</li>
                            <li><strong>Advanced Security:</strong> SafeGuard AI monitoring payloads, robust Row Level Security (RLS) and encrypted data.</li>
                            <li><strong>Predictive Analytics:</strong> Analyze project data to predict task bottlenecks and suggest optimal pricing strategies.</li>
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
                            <a href="https://freelancer-crm-neon.vercel.app/" target="_blank" rel="noopener noreferrer" className="sale-button">
                                <span>Preview Live Website</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>

                    <div className="kn-sale-container glass-fx mt-8">
                        <div className="sale-glow"></div>
                        <h3 className="sale-title">Acquire This Project</h3>
                        <p className="sale-description">This comprehensive freelance management system is currently available. Elevate your business efficiency.</p>
                        <Link to="/acquire" state={{ projectDetails: { title: "Freelancer CRM", type: "SaaS", price: 4500 } }} className="sale-button">
                            <span>Acquire Here</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
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

export default FreelancerCRM;
