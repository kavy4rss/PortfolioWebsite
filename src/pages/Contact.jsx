import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import '../index.css'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "3514dd96-a87a-4727-93af-d5db50caecbb",
                    ...formData
                }),
            });
            const result = await response.json();
            if (result.success) {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 5000); // Hide success message after 5 seconds
            } else {
                console.error("Form submission failed", result);
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="karma-navigator-page contact-redesign" style={{
            minHeight: '90vh',
            padding: '2rem 5%',
            backgroundColor: '#ffffff',
            color: '#1b1b1b',
            '--bg-color': '#ffffff',
            '--text-primary': '#1b1b1b',
            '--text-secondary': '#4a4a4a'
        }}>
            {/* Ambient Background Elements matching Karma/Projects pages removed for pure white aesthetic */}

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="contact-header"
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <div className="kn-title-wrapper" style={{ justifyContent: 'center' }}>
                    <h1 className="kn-title" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', color: '#000000' }}>Let's Connect</h1>
                </div>
                <p className="kn-subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#4a4a4a' }}>
                    Have a project in mind, a question about my work, or just want to say hi? I'm currently open to new opportunities.
                </p>
            </motion.div>

            <div className="contact-grid-container" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1fr) minmax(400px, 2fr)',
                gap: '4rem',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 10
            }}>

                {/* Left Side: Contact Information */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="contact-info-panel"
                    style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                >
                    <motion.div variants={itemVariants} className="kn-glass-card info-card" style={{ padding: '2.5rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2rem', fontFamily: 'var(--font-heading)', color: '#1b1b1b' }}>Contact Information</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div className="icon-wrapper" style={{
                                    background: 'var(--text-primary)',
                                    color: 'var(--bg-color)',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: '#4a4a4a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Email</h4>
                                    <a href="mailto:hello@example.com" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1b1b1b', textDecoration: 'none' }} className="hover:underline underline-offset-4">kavyagrawalrss@gmail.com</a>
                                </div>
                            </div>



                            <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div className="icon-wrapper" style={{
                                    background: 'var(--text-primary)',
                                    color: 'var(--bg-color)',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: '#4a4a4a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Location</h4>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1b1b1b' }}>Uttar Pradesh, India <br /> (Remote Worldwide)</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Mini-Grid */}
                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                            <h4 style={{ fontSize: '0.9rem', color: '#4a4a4a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Follow Me</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {/* Reusing existing social SVGs but styling them beautifully */}
                                <a href="https://www.instagram.com/theycallmeaskavy" target="_blank" rel="noopener noreferrer" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(128,128,128,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="social-pill hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)]">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="https://www.facebook.com/people/Kavy-Agrawal/100078997202642/" target="_blank" rel="noopener noreferrer" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(128,128,128,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="social-pill hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)]">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/kavy-agrawal-471739367/" target="_blank" rel="noopener noreferrer" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(128,128,128,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="social-pill hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)]">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="https://github.com/kavy4rss" target="_blank" rel="noopener noreferrer" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(128,128,128,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="social-pill hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)]">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Creative Form */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="contact-form-wrapper"
                    style={{ width: '100%', maxWidth: 'none' }}
                >
                    <form onSubmit={handleSubmit} className="kn-glass-card stylish-form" style={{ padding: '3rem', position: 'relative', overflow: 'hidden', background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>

                        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', fontFamily: 'var(--font-heading)', color: '#1b1b1b' }}>Send a Message</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div className="new-form-group">
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: '#4a4a4a' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="modern-input"
                                />
                            </div>

                            <div className="new-form-group">
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: '#4a4a4a' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="modern-input"
                                />
                            </div>
                        </div>

                        <div className="new-form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: '#4a4a4a' }}>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="How can I help you?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="modern-input"
                            />
                        </div>

                        <div className="new-form-group" style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: '#4a4a4a' }}>Message</label>
                            <textarea
                                name="message"
                                placeholder="I'd love to talk about..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="modern-input textarea-modern"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            style={{
                                width: '100%',
                                padding: '1.2rem',
                                background: isSubmitted ? '#10b981' : 'var(--text-primary)',
                                color: 'var(--bg-color)',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                cursor: (isSubmitting || isSubmitted) ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                            className="hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {isSubmitting ? (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div className="spinner" style={{ width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTop: '3px solid white', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                                    Sending...
                                </span>
                            ) : isSubmitted ? (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} /> Message Sent!
                                </span>
                            ) : (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    Send Message <Send size={20} />
                                </span>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
