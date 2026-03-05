import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PaymentTrigger from '../PaymentTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import '../index.css';
import VedicAi1 from '../assets/Vedic_AI/1.jpeg';
import VedicAi2 from '../assets/Vedic_AI/2.jpeg';
import VedicAi3 from '../assets/Vedic_AI/3.jpeg';
import VedicAi4 from '../assets/Vedic_AI/4.jpeg';

const KarmaNavigator = () => {
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
                    <h1 className="kn-title">Vedic AI Chatbot</h1>
                    <div className="kn-title-glow"></div>
                </div>
                <p className="kn-subtitle">A high-end, "Experience-First" frontend application designed to modernize the world of Vedic astrology.</p>
            </motion.div>

            <div className="kn-content-grid">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="kn-main-details"
                >
                    <motion.div variants={itemVariant} className="kn-glass-card hero-card">
                        <div className="kn-card-icon highlight-icon">🚀</div>
                        <div className="kn-card-content">
                            <h2>The Architecture</h2>
                            <p>
                                The app is built as a Single Page Application (SPA) with a modular, service-oriented architecture. While the frontend logic handles state and UI transitions, the code is structured to be "Backend-Agile," featuring ready-to-use hooks for FastAPI and Google Gemini AI integration.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">📱</span>
                            <h2>Page Breakdown</h2>
                        </div>
                        <div className="kn-breakdown-grid">
                            <div className="kn-feature-card">
                                <div className="feature-step">01</div>
                                <h3>Entry & Splash</h3>
                                <div className="feature-badge">The "Mandala" Intro</div>
                                <p>Custom-coded rotating Mandala logo, dynamic particle star field, and glowing pulse animations. Establishes premium identity.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">02</div>
                                <h3>Auth Hub</h3>
                                <div className="feature-badge">Glassmorphism</div>
                                <p>A beautiful login/registration portal with smooth height transitions, field-level validation, and social auth.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">03</div>
                                <h3>Onboarding Engine</h3>
                                <div className="feature-badge">Cosmic Data</div>
                                <p>5-step interactive flow capturing the user's "Birth Signature" with custom pickers and "Cosmic Alignment" syncing animation.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">04</div>
                                <h3>Interactive UI</h3>
                                <div className="feature-badge">The "Oracle"</div>
                                <p>Sophisticated chat environment with floating input bars, contextual greetings based on time, and dynamic quick actions.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">05</div>
                                <h3>Cosmic Vault</h3>
                                <div className="feature-badge">Saved Wisdom</div>
                                <p>A beautifully organized archive page listing all bookmarked astrological insights using interactive management cards.</p>
                            </div>
                            <div className="kn-feature-card">
                                <div className="feature-step">06</div>
                                <h3>Preferences</h3>
                                <div className="feature-badge">Settings Hub</div>
                                <p>Complete session tracking across chronological interaction logs, dual-languages, and comprehensive privacy oversight.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-creative-section">
                        <div className="section-header-flex">
                            <span className="section-icon">🛠️</span>
                            <h2>Tech Stack & Magic</h2>
                        </div>
                        <div className="kn-tech-pills">
                            <div className="tech-pill"><span className="tech-dot react"></span>React 18 & TS</div>
                            <div className="tech-pill"><span className="tech-dot tailwind"></span>Tailwind + HSL</div>
                            <div className="tech-pill">Shadcn UI</div>
                            <div className="tech-pill"><span className="tech-dot motion"></span>Framer Motion</div>
                            <div className="tech-pill"><span className="tech-dot api"></span>FastAPI Ready</div>
                        </div>

                        <div className="kn-glass-card highlight-card">
                            <div className="highlight-content">
                                <h3>🎨 Design Highlights</h3>
                                <div className="highlight-grid">
                                    <div className="highlight-item">
                                        <h4>Rich Visuals</h4>
                                        <p>Subtle gradients (<code>bg-gradient-cosmic</code>) and glass backdrop blurs to create depth.</p>
                                    </div>
                                    <div className="highlight-item">
                                        <h4>Dynamic UX</h4>
                                        <p>Floating physics-based animations that react seamlessly to user actions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariant} className="kn-glass-card summary-card portfolio-summary">
                        <div className="summary-accent"></div>
                        <h2>Portfolio Excellence</h2>
                        <p>Vedic AI Chatbot is a showcase of high-end frontend engineering, proving that technical data capture (astrology) can be transformed into a premium, engaging user journey through careful UI/UX design and modern React patterns.</p>
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
                        <p className="carousel-subtitle">Swipe to explore the cosmos</p>
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
                                <img src={VedicAi1} alt="Vedic AI Feature 1" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>Core Chat Interface</span></div>
                            </SwiperSlide>
                            <SwiperSlide className="kn-slide">
                                <img src={VedicAi2} alt="Vedic AI Feature 2" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>Cosmic Brand Identity</span></div>
                            </SwiperSlide>
                            <SwiperSlide className="kn-slide">
                                <img src={VedicAi3} alt="Vedic AI Feature 3" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>Data Visualizations</span></div>
                            </SwiperSlide>
                            <SwiperSlide className="kn-slide">
                                <img src={VedicAi4} alt="Vedic AI Feature 4" className="kn-slide-img" loading="lazy" />
                                <div className="slide-overlay"><span>Deep Space Theme</span></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="kn-sale-container glass-fx mt-8">
                        <div className="sale-glow"></div>
                        <h3 className="sale-title">Acquire This Project</h3>
                        <p className="sale-description">This premium frontend architecture is currently available for sale. Perfect for your next high-end AI Chatbot or astrology chatbot application.</p>
                        <PaymentTrigger
                            projectDetails={{ title: "Vedic AI Chatbot", type: "App", price: 2000 }}
                            buttonText="Acquire Here"
                            className="sale-button"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default KarmaNavigator;
