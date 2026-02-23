import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import QRCodeImg from '../assets/Payment/QR Code.jpg';

const AcquireCheckout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState(null);

    // Hardcoded WhatsApp number as requested
    const WHATSAPP_NUMBER = '918467078545';

    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);

        // Check if we have project data in state
        if (location.state && location.state.projectDetails) {
            setProjectData(location.state.projectDetails);
        } else {
            // If no data (e.g., user navigated directly to /acquire), redirect to projects
            navigate('/projects');
        }
    }, [location, navigate]);

    if (!projectData) {
        return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>;
    }

    // Default price to "499" if not provided in state
    const basePrice = projectData.price || 499;
    const priceINR = Math.round(basePrice * 85); // Approximate conversion for USD to INR

    const handleAmountPaidClick = () => {
        const message = `Hi! I just paid for the project: *${projectData.title}*.\n\n*Transaction Details:*\n- Total Amount Paid: $${basePrice} (₹${priceINR.toLocaleString('en-IN')})\n- Payment Method: UPI QR Code\n\nPlease confirm my payment and share the project files.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleAlternativePaymentClick = () => {
        const message = `Hi! The payment method I want is not available for the project: *${projectData.title}*.\n\nThe payment method I can pay with is: `;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="pt-24 min-h-screen" style={{ backgroundColor: '#0a0a0a', color: '#ffffff', paddingBottom: '4rem' }}>
            <div className="kn-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-heading)', background: 'linear-gradient(45deg, #FFD700, #FDB931)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
                        Secure Checkout
                    </h1>
                    <p style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Complete your payment to acquire {projectData.title} and instantly boost your digital presence.
                    </p>
                </motion.div>

                <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>

                    {/* Order Summary Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="kn-glass-card"
                        style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px', padding: '2.5rem' }}
                    >
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Order Summary</h2>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            {projectData.img && (
                                <img src={projectData.img} alt={projectData.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '12px' }} />
                            )}
                            <div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#fff', margin: 0 }}>{projectData.title}</h3>
                                <p style={{ color: '#FFD700', fontSize: '0.9rem', marginTop: '4px' }}>{projectData.type || 'Premium Project'}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#ddd' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '0.5rem', fontWeight: 600, fontSize: '1.2rem', color: '#fff' }}>
                                <span>Total Amount (USD)</span>
                                <span>${basePrice.toLocaleString()}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontSize: '1.4rem', color: '#fff' }}>
                                <span>Total Amount (INR)</span>
                                <span style={{ color: '#FFD700' }}>₹{priceINR.toLocaleString('en-IN')}</span>
                            </div>
                        </div>

                        <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(255,215,0,0.05)', borderRadius: '12px', border: '1px solid rgba(255,215,0,0.2)' }}>
                            <h4 style={{ color: '#FFD700', margin: '0 0 10px 0', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                Secure Transaction
                            </h4>
                            <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                                Your payment is secured with industry-standard encryption. Once paid, code access will be granted manually via WhatsApp.
                            </p>
                        </div>

                        <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
                            <h4 style={{ color: '#fff', margin: '0 0 10px 0', fontSize: '1.1rem' }}>
                                Payment method not available?
                            </h4>
                            <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                                If you wish to use a different payment method (e.g., Wire Transfer, Crypto, PayPal, etc.), let us know.
                            </p>
                            <button
                                onClick={handleAlternativePaymentClick}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid #FFD700',
                                    color: '#FFD700',
                                    padding: '12px 20px',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    width: '100%',
                                    transition: 'all 0.3s ease',
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)' }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                Request Custom Payment URL
                            </button>
                        </div>
                    </motion.div>

                    {/* Payment Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="kn-glass-card"
                        style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Scan to Pay</h2>
                        <p style={{ color: '#aaa', marginBottom: '2rem', textAlign: 'center' }}>Use any UPI app (GPay, PhonePe, Paytm) to scan the QR code below.</p>

                        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '20px', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            <img src={QRCodeImg} alt="UPI QR Code" style={{ width: '250px', height: '250px' }} />
                        </div>

                        <div style={{ width: '100%', marginBottom: '2rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
                            <p style={{ margin: 0, color: '#888', fontSize: '0.9rem', marginBottom: '8px' }}>Scan with GPay, PhonePe, or Paytm</p>
                        </div>

                        <div style={{ width: '100%', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFD700', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px' }}>1</div>
                                <p style={{ margin: 0, color: '#ddd' }}>Scan & Pay the exact amount.</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFD700', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px' }}>2</div>
                                <p style={{ margin: 0, color: '#ddd' }}>Click the button below to notify us.</p>
                            </div>
                        </div>

                        <button
                            onClick={handleAmountPaidClick}
                            style={{
                                background: 'linear-gradient(45deg, #10b981, #059669)',
                                color: 'white',
                                padding: '16px 32px',
                                borderRadius: '12px',
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                border: '1px solid rgba(255,255,255,0.1)',
                                cursor: 'pointer',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4), inset 0 2px 0 rgba(255,255,255,0.2)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.6), inset 0 2px 0 rgba(255,255,255,0.2)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4), inset 0 2px 0 rgba(255,255,255,0.2)'; }}
                            onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(1px)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4), inset 0 2px 0 rgba(255,255,255,0.2)'; }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.811.922 3.141.922 3.18 0 5.767-2.586 5.768-5.766 0-3.181-2.587-5.764-5.76-5.764zM19.341 4.66C17.358 2.671 14.712 1.575 11.895 1.575c-5.836 0-10.589 4.755-10.592 10.593-.002 1.865.485 3.682 1.408 5.286l-1.503 5.495 5.626-1.477c1.554.847 3.328 1.294 5.155 1.294h.004c5.836 0 10.589-4.755 10.591-10.592.001-2.828-1.098-5.484-3.048-7.424z"></path></svg>
                            Amount Paid Successfully
                        </button>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default AcquireCheckout;
