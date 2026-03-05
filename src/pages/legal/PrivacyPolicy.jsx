import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', color: '#e5e5e5' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Privacy Policy</h1>
            <p style={{ color: '#888', marginBottom: '3rem' }}>Last updated: March 2026</p>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>1. Information We Collect</h2>
                <p style={{ lineHeight: '1.6' }}>We only collect information that you voluntarily provide to us when you contact us or use our digital services. This includes your name, email address, and any project-specific details required for custom software development.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>2. How We Use Your Information</h2>
                <p style={{ lineHeight: '1.6' }}>Your information is used strictly to provide and improve our professional services, process transactions securely, and communicate with you regarding your projects. We do not sell or share your personal data with third parties without your explicit consent.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>3. Security</h2>
                <p style={{ lineHeight: '1.6' }}>We implement industry-standard security measures to protect your personal information. All payment processing is handled through secure, compliant third-party gateways or verified direct methods.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>4. Contact Us</h2>
                <p style={{ lineHeight: '1.6' }}>If you have any questions about this Privacy Policy, please reach out via our Contact page or WhatsApp.</p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
