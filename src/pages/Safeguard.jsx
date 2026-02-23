import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import '../index.css';

import SafeGuard1 from '../assets/SafeGuard/1.jpeg';
import SafeGuard2 from '../assets/SafeGuard/2.jpeg';
import SafeGuard3 from '../assets/SafeGuard/3.jpeg';
import SafeGuard4 from '../assets/SafeGuard/4.jpeg';
import SafeGuard5 from '../assets/SafeGuard/5.jpeg';
import SafeGuard6 from '../assets/SafeGuard/6.jpeg';
import SafeGuard7 from '../assets/SafeGuard/7.jpeg';

const Safeguard = () => {
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
                    <h1 className="kn-title">SafeGuard AI</h1>
                    <div className="kn-title-glow"></div>
                </div>
                <p className="kn-subtitle">Your ultimate on-device digital bodyguard. Designed with a cyber-secure aesthetic and unwavering commitment to privacy.</p>
            </motion.div>

            <div className="kn-content-grid">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="kn-main-details"
                >
                    <motion.div variants={itemVariant} className="kn-glass-card hero-card">
                        <div className="kn-card-icon highlight-icon">🛡️</div>
                        <div className="kn-card-content">
                            <h2>Introducing SafeGuard AI</h2>
                            <p>
                                Welcome to SafeGuard AI, your ultimate on-device digital bodyguard. Designed with a cyber-secure aesthetic and unwavering commitment to privacy, SafeGuard AI intercepts, analyzes, and neutralizes mobile-based threats in real-time. Whether it's a sophisticated phishing attempt, a fake government "digital arrest" scheme, or a distressed family emergency scam, SafeGuard AI stands at the perimeter, keeping malicious actors out.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">🌟</span>
                            <h2>Core Features & Capabilities</h2>
                        </div>
                        <div className="kn-breakdown-grid">
                            <div className="kn-feature-card">
                                <div className="feature-step">01</div>
                                <h3>Ultra-Fast Local Scanning</h3>
                                <div className="feature-badge">Aho-Corasick Engine</div>
                                <p>Employs the highly efficient Aho-Corasick algorithm for O(n) speed keyword scanning. It scans incoming SMS, notifications, and calls for threat signatures instantly.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">02</div>
                                <h3>Gemini AI "Judge"</h3>
                                <div className="feature-badge">Zero-Temperature Logic</div>
                                <p>When the local engine detects suspicious activity, it calls upon Google's Gemini 1.5 Flash to act as a final "judge" to differentiate between a casual chat and an actual scam.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">03</div>
                                <h3>System-Wide Overlay</h3>
                                <div className="feature-badge">Dynamic Warning</div>
                                <p>If a severe threat is detected, SafeGuard AI instantly triggers a system-level alert window overlay, warning the user before they can make a compromised decision.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">04</div>
                                <h3>Deep System Integration</h3>
                                <div className="feature-badge">Autonomous Defense</div>
                                <p>Leverages background telephony services, SMS receivers, Android Accessibility Services, and Notification hooks to monitor all vectors of communication autonomously.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">05</div>
                                <h3>Zero-Backend Promise</h3>
                                <div className="feature-badge">Privacy First</div>
                                <p>Architecture designed as a "Zero-Trust Edge System". All algorithms, keyword scanning, local logging, and UI operations happen strictly on the metal of the device.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">06</div>
                                <h3>Data Sovereignty</h3>
                                <div className="feature-badge">Absolute Control</div>
                                <p>Because processing sensitive SMS messages and screen content on a remote server introduces massive privacy risks, no backend database exists. Every decision stays in your pocket.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">📱</span>
                            <h2>The Application Pages</h2>
                        </div>
                        <div className="kn-breakdown-grid">
                            <div className="kn-feature-card">
                                <div className="feature-step">01</div>
                                <h3>Splash & Onboarding</h3>
                                <div className="feature-badge">flutter_animate</div>
                                <p>A visually stunning, animated introduction that guides the user through granting necessary background, accessibility, and overlay permissions.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">02</div>
                                <h3>The Dashboard</h3>
                                <div className="feature-badge">Mission Control</div>
                                <p>Offers a live overview of the user's security posture, recent device scans, and a real-time "Threat Score" status.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">03</div>
                                <h3>Activity Feed</h3>
                                <div className="feature-badge">Detailed Timeline</div>
                                <p>Users can scroll through neutralized threats, flagged SMS messages, and deep-dive into why the AI marked specific communications as dangerous.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">04</div>
                                <h3>Threat Intel</h3>
                                <div className="feature-badge">Education Hub</div>
                                <p>A dedicated hub that educates users on the latest scam typologies (e.g., "Digital Arrests", "KYC Expiry" scams) powered by internal logic structures.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">05</div>
                                <h3>Settings & Control</h3>
                                <div className="feature-badge">Control Room</div>
                                <p>Users can toggle defense mechanisms, manage safe contacts, and input their own Gemini API key for absolute data sovereignty.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">06</div>
                                <h3>Security Audit</h3>
                                <div className="feature-badge">Active-Scan</div>
                                <p>An specialized active-scan page that evaluates the current device for vulnerabilities or exposed permissions.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">🛠️</span>
                            <h2>The Technology Stack</h2>
                        </div>
                        <div className="kn-tech-pills">
                            <div className="tech-pill"><span className="tech-dot react"></span>Flutter (Dart 3.2+)</div>
                            <div className="tech-pill"><span className="tech-dot tailwind"></span>Riverpod State</div>
                            <div className="tech-pill">go_router</div>
                            <div className="tech-pill"><span className="tech-dot motion"></span>google_generative_ai</div>
                            <div className="tech-pill"><span className="tech-dot api"></span>Glassmorphism</div>
                        </div>

                        <div className="kn-glass-card highlight-card">
                            <div className="highlight-content">
                                <h3>🌐 What if SafeGuard AI possessed a Backend?</h3>
                                <p style={{ marginBottom: '10px' }}>Introducing a backend would shift it to a Global Collaborative Defense Network:</p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                    <li><strong>Global Threat Intel:</strong> Anonymous reporting aggregates data for live blocklists globally.</li>
                                    <li><strong>Guardian Dashboard:</strong> Family & Enterprise monitoring pushes emergency alerts to linked devices.</li>
                                    <li><strong>Cloud-Hosted AI:</strong> Proxies requests to large, proprietary Anti-Scam LLMs too heavy for mobile.</li>
                                    <li><strong>Cross-Device Sync:</strong> Sync threat logs and custom settings seamlessly across devices.</li>
                                    <li><strong>Advanced Analytics:</strong> Runs ML on anonymized metadata to predict local physical scams.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-glass-card summary-card portfolio-summary">
                        <div className="summary-accent"></div>
                        <h2>Zero-Trust Edge System</h2>
                        <p>SafeGuard AI is built for speed, security, and beautiful aesthetics, proving that comprehensive on-device security can be transformed into a premium, engaging user journey through careful UI/UX design and modern Flutter patterns.</p>
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
                        <h3 className="carousel-title">Visual Experience</h3>
                        <p className="carousel-subtitle">Swipe to explore the defense</p>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards, Pagination, Autoplay]}
                            pagination={{ clickable: true, dynamicBullets: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            className="kn-swiper"
                        >
                            <SwiperSlide className="kn-slide">
                                <img src={SafeGuard1} alt="Cyber Security Core" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>Cyber Security Core</span></div>
                            </SwiperSlide>
                            <SwiperSlide className="kn-slide">
                                <img src={SafeGuard2} alt="Live Financial Threat Interception" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>Live Financial Threat Interception</span></div>
                            </SwiperSlide>
                            <SwiperSlide className="kn-slide">
                                <img src={SafeGuard3} alt="System-Wide Overlay Alerts" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>System-Wide Overlay Alerts</span></div>
                            </SwiperSlide>
                            <SwiperSlide className="kn-slide">
                                <img src={SafeGuard4} alt="Gemini AI Vulnerability Scan" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>Gemini AI Vulnerability Scan</span></div>
                            </SwiperSlide>
                            <SwiperSlide className="kn-slide">
                                <img src={SafeGuard5} alt="Deep Threat Analysis" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>Deep Threat Analysis</span></div>
                            </SwiperSlide>
                            <SwiperSlide className="kn-slide">
                                <img src={SafeGuard6} alt="Protection Dashboard" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>Protection Dashboard</span></div>
                            </SwiperSlide>
                            <SwiperSlide className="kn-slide">
                                <img src={SafeGuard7} alt="Network Insights" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>Network Insights</span></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="kn-sale-container glass-fx mt-8">
                        <div className="sale-glow"></div>
                        <h3 className="sale-title">Acquire This Project</h3>
                        <p className="sale-description">This premium mobile architecture is currently available for sale. Perfect for your next high-end cybersecurity or personal privacy application.</p>
                        <Link to="/acquire" state={{ projectDetails: { title: "SafeGuard AI", type: "Mobile App", price: 3000 } }} className="sale-button">
                            <span>Acquire Here</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Safeguard;
