import React from 'react';

const TermsOfService = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', color: 'var(--text-primary)' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Terms of Service</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last updated: March 2026</p>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Acceptance of Terms</h2>
                <p style={{ lineHeight: '1.6' }}>By accessing and using this website and our digital products, you accept and agree to be bound by the terms and provisions of this agreement.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>2. Intellectual Property</h2>
                <p style={{ lineHeight: '1.6' }}>All original design, content, custom code, and functionality provided through our services are owned by us and protected by copyright, trademark, and other intellectual property laws.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>3. Digital Products and Licenses</h2>
                <p style={{ lineHeight: '1.6' }}>Upon purchase of a digital product or service, you are granted a non-exclusive license to use the developed software as agreed upon. Unauthorized distribution, reselling, or sublicensing without written permission is strictly prohibited.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>4. Limitation of Liability</h2>
                <p style={{ lineHeight: '1.6' }}>In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses arising from your use of our software or services.</p>
            </section>
        </div>
    );
};

export default TermsOfService;
