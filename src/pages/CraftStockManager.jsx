import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PaymentTrigger from '../PaymentTrigger';
import '../index.css';

// Importing local image for Craft Stock Manager
import CraftStockManagerImg from '../assets/CraftStockManager/CraftStockManager.png';

const CraftStockManager = () => {
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
                    <h1 className="kn-title">Craft Stock Manager</h1>
                    <div className="kn-title-glow"></div>
                </div>
                <p className="kn-subtitle">A lightweight, robust Micro SaaS built to meticulously track inventory.</p>
            </motion.div>

            <div className="kn-content-grid">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="kn-main-details"
                >
                    <motion.div variants={itemVariant} className="kn-glass-card hero-card">
                        <div className="kn-card-icon highlight-icon">🏭</div>
                        <div className="kn-card-content">
                            <h2>An Architectural Anatomy</h2>
                            <p>
                                Welcome to the Craft Stock Manager, a lightweight, robust Micro SaaS built to meticulously track inventory, stock levels, and expiration dates. Behind its polished interface lies an intricate web of modern tools and an ingenious workaround for persistence. Let's dive into its DNA.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">🏛️</span>
                            <h2>The Architecture: Pages & Functions</h2>
                        </div>
                        <p style={{ marginBottom: "20px" }}>Designed as a Single Page Application (SPA), emphasizing speed, clarity, and fluid user experience.</p>
                        <div className="kn-breakdown-grid">
                            <div className="kn-feature-card">
                                <div className="feature-step">01</div>
                                <h3>The Command Center</h3>
                                <div className="feature-badge">Dashboard (/)</div>
                                <p>The heartbeat of the app. Provides an eagle-eye view of operations using intuitive charts, recent transaction streams, and critical alert modules that spot low-stock and expiring items before they become issues.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">02</div>
                                <h3>The Vault</h3>
                                <div className="feature-badge">/inventory</div>
                                <p>A master list of all raw materials, components, and items. Offers filterable, sortable access to current stock levels across various categories.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">03</div>
                                <h3>The Microcosm</h3>
                                <div className="feature-badge">/inventory/:id</div>
                                <p>A drill-down into specific materials. Handles batch-level tracking, letting users view individual entry dates, manage expiry dates, and leverage built-in FIFO deduction logic.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">04</div>
                                <h3>The Intake</h3>
                                <div className="feature-badge">/inventory/new</div>
                                <p>Two pathways for procurement. "Add Material" is a robust form for establishing new items, while "Scan In" acts as a rapid-entry point designed for quick receiving, optimized for speed.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">05</div>
                                <h3>The Control Room</h3>
                                <div className="feature-badge">/settings</div>
                                <p>Application configuration and category administration, allowing users to tailor the environment (like custom color-coded categories) to their specific manufacturing needs.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">⚙️</span>
                            <h2>Technology Stack: The DNA</h2>
                        </div>
                        <p style={{ marginBottom: "20px" }}>The application is built on a cutting-edge frontend stack, prioritizing developer velocity and a premium user interface.</p>
                        <div className="kn-tech-pills">
                            <div className="tech-pill"><span className="tech-dot react"></span>React 18 & TS</div>
                            <div className="tech-pill"><span className="tech-dot tailwind"></span>Tailwind & Radix</div>
                            <div className="tech-pill">Context API</div>
                            <div className="tech-pill"><span className="tech-dot motion"></span>React Query & Zod</div>
                            <div className="tech-pill"><span className="tech-dot api"></span>Recharts & Sonner</div>
                        </div>

                        <div className="kn-glass-card highlight-card">
                            <div className="highlight-content">
                                <h3>🎭 Current Backend: The Illusion of State</h3>
                                <p style={{ marginBottom: '10px' }}>Right now, the Craft Stock Manager operates under a brilliant sleight of hand—an Illusion of State. There is no cloud database. Yet, the app behaves exactly like a cloud-native SaaS.</p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                    <li><strong>The Local Engine:</strong> Deep within <code>useInventory.ts</code>, the app relies on the browser's localStorage as its "database"—parsing and manipulating JSON strings.</li>
                                    <li><strong>Phantom Synchronization:</strong> A <code>simulatePendingSync</code> function flashes a "Syncing..." state when adding items, giving the comforting feedback of cloud redundancy.</li>
                                    <li><strong>Algorithmic Intelligence:</strong> The client-side app handles heavy lifting natively, calculating real-time low-stock/expiry alerts and dynamic FIFO array deductions.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-glass-card summary-card portfolio-summary">
                        <div className="summary-accent"></div>
                        <h2>The Vision: A True Backend?</h2>
                        <p style={{ textAlign: "left", marginBottom: "15px" }}>The localized "Illusion of State" is an excellent strategy for a rapid MVP with zero server costs. But what happens when the Craft Stock Manager evolves?</p>
                        <ul className="vision-list" style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px', textAlign: "left" }}>
                            <li><strong>The Great Convergence:</strong> Transitioning to PostgreSQL or NoSQL (via Supabase/Firebase) unlocks multi-device synchronization. Scans from mobile update the dashboard via WebSockets instantly.</li>
                            <li><strong>Role-Based Command (RBAC):</strong> Introduce Admin, Manager, and Floor Worker roles, ensuring only authorized personnel override stock or change categories.</li>
                            <li><strong>Data Immortality & Export:</strong> Ensure data immortality, scheduled backups, and the ability to export complex analytical reports (CSV/PDF) on historical usage trends.</li>
                            <li><strong>Push & Webhook Intelligence:</strong> Instead of client-side calculation, a cron job monitors expiry dates at midnight and dispatches automated emails/SMS warnings days in advance.</li>
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
                            <a href="https://craftstockmanager.netlify.app/" target="_blank" rel="noopener noreferrer" className="sale-button">
                                <span>Preview Live Website</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>

                    <div className="kn-sale-container glass-fx mt-8">
                        <div className="sale-glow"></div>
                        <h3 className="sale-title">Acquire This Project</h3>
                        <p className="sale-description">This comprehensive inventory SaaS system is currently available. Elevate your operations today.</p>
                        <PaymentTrigger
                            projectDetails={{ title: "Craft Stock Manager", type: "Micro SaaS", price: 3500 }}
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

export default CraftStockManager;
