import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../index.css';

// Importing local image for Vyoamax
import VyoamaxImg from '../assets/Vyoamax/Vyoamax.png';

const Vyoamax = () => {
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
                    <h1 className="kn-title">Vyoamax Event Organiser</h1>
                    <div className="kn-title-glow"></div>
                </div>
                <p className="kn-subtitle">A breathtaking experiential portfolio and lead-generation portal.</p>
            </motion.div>

            <div className="kn-content-grid">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="kn-main-details"
                >
                    <motion.div variants={itemVariant} className="kn-glass-card hero-card">
                        <div className="kn-card-icon highlight-icon">🎉</div>
                        <div className="kn-card-content">
                            <h2>The Architecture: Pages & Functions</h2>
                            <p>
                                The Vyoamax portal is architected to be primarily an experiential portfolio and lead-generation tool. It heavily leans on rich aesthetics and micro-interactions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">🏛️</span>
                            <h2>Platform Overview</h2>
                        </div>
                        <div className="kn-breakdown-grid">
                            <div className="kn-feature-card">
                                <div className="feature-step">01</div>
                                <h3>The Vanguard (Home)</h3>
                                <div className="feature-badge">Entry Point</div>
                                <p>A breathtaking entry point that utilizes smooth scrolling (Lenis) and deep micro-animations. It hosts the Hero section, dynamic Marquees, Service Previews, and a dedicated CTA. Designed specifically to capture attention within seconds of engagement.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">02</div>
                                <h3>Proof of Excellence</h3>
                                <div className="feature-badge">Verify</div>
                                <p>A standout interactive page where clients can verify awarded certificates. It features a real-time search interface, complete with loading animations and beautifully staged success/failure response states.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">03</div>
                                <h3>The Core</h3>
                                <div className="feature-badge">Dynamic Routes</div>
                                <p>Using dynamic routes (/services/:slug), the portal intelligently renders specific deep dives for robust offerings like Influencer Marketing, Destination Weddings, Kitty Parties, and Celebrity Management.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">04</div>
                                <h3>The Visionaries</h3>
                                <div className="feature-badge">About Page</div>
                                <p>A beautifully structured section illuminating the people behind the curtain—showcasing the founders and directors with interactive hover cards revealing social credentials and professional backgrounds.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">05</div>
                                <h3>The Bridge</h3>
                                <div className="feature-badge">Contact Page</div>
                                <p>The conversion engine. Includes a comprehensive inquiry form handling nuanced requests and features a stunning 3D-perspective "Connect with Us" card that houses local addresses and social links.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">⚙️</span>
                            <h2>Technology Stack: The DNA</h2>
                        </div>
                        <p style={{ marginBottom: "20px" }}>The application isn't just visually striking; it is built on a highly modern, incredibly fast foundation.</p>
                        <div className="kn-tech-pills">
                            <div className="tech-pill"><span className="tech-dot react"></span>Vite + React 18</div>
                            <div className="tech-pill"><span className="tech-dot tailwind"></span>Tailwind + Shadcn UI</div>
                            <div className="tech-pill">TypeScript</div>
                            <div className="tech-pill"><span className="tech-dot motion"></span>Framer Motion & Lenis</div>
                            <div className="tech-pill"><span className="tech-dot api"></span>React Hook Form & Zod</div>
                        </div>

                        <div className="kn-glass-card highlight-card">
                            <div className="highlight-content">
                                <h3>🎭 Current Backend: The Illusion of State</h3>
                                <p style={{ marginBottom: '10px' }}>Right now, Vyoamax performs a brilliant "sleight of hand." It feels like a fully functional CRM and database-backed platform, but it operates on The Illusion of State.</p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                    <li><strong>The Database Mirage:</strong> On the Certificate Verification page, entering a serial number (like VYO123) simulates a network delay before querying a hardcoded mock dictionary.</li>
                                    <li><strong>The Silent Submission:</strong> The Contact page tracks form inputs and gracefully triggers a Toast notification—but the data vanishes the moment the component unmounts.</li>
                                    <li><strong>The Fleeting Memory:</strong> State only exists momentarily inside the browser memory. A page refresh wipes the slate entirely clean.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-glass-card summary-card portfolio-summary">
                        <div className="summary-accent"></div>
                        <h2>The Vision: A True Backend?</h2>
                        <p style={{ textAlign: "left", marginBottom: "15px" }}>What happens when we breathe true life into Vyoamax? It transforms from a digital brochure into an automated, revenue-generating Command Center.</p>
                        <ul className="vision-list" style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px', textAlign: "left" }}>
                            <li><strong>A Genuine CRM:</strong> Inquiries inject directly into PostgreSQL/Firebase, automatically pinging the Vyoamax sales team on Slack/Email with details: "New Destination Wedding inquiry from Mumbai."</li>
                            <li><strong>Verification Ledger:</strong> Securely upload attendee names post-event. Users can download dynamically generated PDF certificates fetched from AWS S3 or Google Cloud Storage.</li>
                            <li><strong>Headless CMS:</strong> Integration with Sanity or Strapi allows founders to add new team members, PR campaigns, or services dynamically without writing any code.</li>
                            <li><strong>Analytics & Lead Scoring:</strong> Track how long users spend on "Influencer Marketing" before contacting, generating instant Lead Scores to prioritize high-value clients.</li>
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
                            <a href="https://vyoamax.netlify.app/" target="_blank" rel="noopener noreferrer" className="sale-button">
                                <span>Preview Live Website</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>

                    <div className="kn-sale-container glass-fx mt-8">
                        <div className="sale-glow"></div>
                        <h3 className="sale-title">Acquire This Project</h3>
                        <p className="sale-description">This comprehensive lead-to-cash system is currently available. Accelerate your agency's growth.</p>
                        <Link to="/acquire" state={{ projectDetails: { title: "Vyoamax Event Organiser", type: "App", price: 2500 } }} className="sale-button">
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
                            width: '100%',
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

export default Vyoamax;
