import React, { useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { PaymentProvider } from './context/PaymentContext'
import './index.css'
import { AnimatePresence } from 'framer-motion'
import PageWrapper from './components/PageWrapper'
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Hobbies = lazy(() => import('./pages/Hobbies'))
const Contact = lazy(() => import('./pages/Contact'))
const KarmaNavigator = lazy(() => import('./pages/VedicAI'))
const Safeguard = lazy(() => import('./pages/Safeguard'))
const FreelancerCRM = lazy(() => import('./pages/FreelancerCRM'))
const FunnelFixPro = lazy(() => import('./pages/FunnelFixPro'))
const Vyoamax = lazy(() => import('./pages/Vyoamax'))
const CraftStockManager = lazy(() => import('./pages/CraftStockManager'))
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Simple Footer for Legal Links
const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            borderTop: '1px solid rgba(0,0,0,0.1)',
            marginTop: 'auto',
            fontSize: '0.9rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            position: 'relative', /* establish stacking context */
            zIndex: 50            /* sit above all page sections, including hero (z-index: 1) */
        }}>
            <span style={{ color: 'var(--text-secondary)' }}>© 2026 Kavy Agrawal</span>
            <Link to="/privacy-policy" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>Terms of Service</Link>
            <Link to="/contact" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>Contact Us</Link>
            <a href="https://github.com/kavy4rss" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>GitHub</a>
        </footer>
    );
};

// Navigation Component to handle active states
const Navigation = () => {
    const location = useLocation();
    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <header className="header">
            <nav className="nav-links">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
                <Link to="/hobbies" className={location.pathname === '/hobbies' ? 'active' : ''}>Hobbies</Link>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </nav>

            <div className="social-links">
                <a href="https://www.instagram.com/theycallmeaskavy" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                        <defs>
                            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f09433" />
                                <stop offset="25%" stopColor="#e6683c" />
                                <stop offset="50%" stopColor="#dc2743" />
                                <stop offset="75%" stopColor="#cc2366" />
                                <stop offset="100%" stopColor="#bc1888" />
                            </linearGradient>
                        </defs>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
                <a href="https://www.facebook.com/people/Kavy-Agrawal/100078997202642/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/kavy-agrawal-471739367/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg viewBox="0 0 24 24" fill="#0077B5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://github.com/kavy4rss" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg viewBox="0 0 24 24" fill={isDark ? "#fff" : "#333"}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </a>
                <button onClick={toggleDarkMode} className="social-icon" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer' }}>
                    {isDark ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    )}
                </button>
            </div>
        </header>
    );
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
                <Route path="/hobbies" element={<PageWrapper><Hobbies /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="/karma-navigator" element={<PageWrapper><KarmaNavigator /></PageWrapper>} />
                <Route path="/safeguard" element={<PageWrapper><Safeguard /></PageWrapper>} />
                <Route path="/freelancer-crm" element={<PageWrapper><FreelancerCRM /></PageWrapper>} />
                <Route path="/funnelfixpro" element={<PageWrapper><FunnelFixPro /></PageWrapper>} />
                <Route path="/vyoamax" element={<PageWrapper><Vyoamax /></PageWrapper>} />
                <Route path="/craftstockmanager" element={<PageWrapper><CraftStockManager /></PageWrapper>} />
                <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
                <Route path="/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <PaymentProvider>
            <BrowserRouter>
                <div className="app-wrapper">
                    <Navigation />
                    <Suspense fallback={<div style={{ height: '100vh', width: '100vw', background: 'transparent' }} />}>
                        <AnimatedRoutes />
                    </Suspense>
                    <Footer />
                </div>
            </BrowserRouter>
        </PaymentProvider>
    )
}

export default App
