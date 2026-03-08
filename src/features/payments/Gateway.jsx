import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
// QR Code image: update this URL with your ImageKit link
const QRCodeImg = 'https://ik.imagekit.io/kxnj6nzco/kavyagrawal.netlify.app/Payment-Gateway/QR-Code.jpg?updatedAt=1772694936867';
import './gateway.css';

const Gateway = ({ projectData, paymentIntent, onBack }) => {
    const shouldReduceMotion = useReducedMotion();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Prevent background scrolling while Gateway is active
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);
    // Determine the WhatsApp number to use (prefer secure backend data, fallback to hardcoded)
    const WHATSAPP_NUMBER = paymentIntent?.paymentIntent?.whatsappNumber || '918467078545';
    // Get secure hash and TXN ID
    const secureHash = paymentIntent?.secureHash || 'LOCAL_UNVERIFIED';
    const txnId = paymentIntent?.transactionId || 'PENDING';

    if (!projectData || !paymentIntent) {
        return <div className="gateway-loading">Loading Payment Details...</div>;
    }

    // Default price to "499" if not provided in state
    const basePrice = projectData.price || 499;
    const priceINR = Math.round(basePrice * 85); // Approximate conversion for USD to INR

    const handleAmountPaidClick = () => {
        const message = `Hi! I just paid for the project: *${projectData.title}*.\n\n*Transaction Details:*\n- Total Amount Paid: $${basePrice} (₹${priceINR.toLocaleString('en-IN')})\n- Payment Method: UPI QR Code\n- Secure Hash: ${secureHash}\n- Order Ref: ${txnId}\n\nPlease confirm my payment and share the project files.`;
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
        <div className="gateway-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, backgroundColor: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(8px)', overflowY: 'auto' }}>
            <button onClick={onBack} className="gateway-back-btn">
                ← Back
            </button>
            <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                className="gateway-header"
            >
                <h1>Secure Checkout</h1>
                <p>Complete your payment to acquire {projectData.title} and instantly boost your digital presence.</p>
            </motion.div>

            <div className="gateway-grid">
                {/* Order Summary Column */}
                <motion.div
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
                    className="gateway-card"
                >
                    <h2>Order Summary</h2>
                    <div className="gateway-summary-header">
                        {projectData.img && (
                            <img src={projectData.img} alt={projectData.title} className="gateway-project-img" />
                        )}
                        <div>
                            <h3>{projectData.title}</h3>
                            <p className="gateway-type">{projectData.type || 'Premium Project'}</p>
                        </div>
                    </div>

                    {secureHash !== 'LOCAL_UNVERIFIED' && (
                        <div style={{ backgroundColor: '#052e16', color: '#4ade80', padding: '0.5rem 1rem', borderRadius: '0.5rem', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            Verified Transaction
                        </div>
                    )}

                    <div style={{ backgroundColor: '#1a1a1a', border: '1px dashed #333', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem', fontFamily: 'monospace' }}>
                        <div style={{ color: '#888', marginBottom: '0.25rem', fontSize: '0.75rem' }}>RECEIPT / TXN ID</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.1rem', color: '#e5e5e5' }}>{txnId}</span>
                            <button onClick={() => {
                                navigator.clipboard.writeText(txnId);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                            }} style={{ background: '#333', border: 'none', color: '#fff', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', cursor: 'pointer', fontSize: '0.75rem' }}>
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>

                    <div className="gateway-price-details">
                        <div className="gateway-price-row">
                            <span>Total Amount (USD)</span>
                            <span>${basePrice.toLocaleString()}</span>
                        </div>
                        <div className="gateway-price-row gateway-price-total">
                            <span>Total Amount (INR)</span>
                            <span className="gateway-inr">₹{priceINR.toLocaleString('en-IN')}</span>
                        </div>
                    </div>

                    <div className="gateway-secure-box">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            Secure Transaction
                        </h4>
                        <p>Your payment is secured with industry-standard encryption. Once paid, code access will be granted manually via WhatsApp.</p>
                    </div>

                    <div className="gateway-alt-payment-box">
                        <h4>Payment method not available?</h4>
                        <p>If you wish to use a different payment method (e.g., Wire Transfer, Crypto, PayPal, etc.), let us know.</p>
                        <button onClick={handleAlternativePaymentClick} className="gateway-alt-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            Request Custom Payment URL
                        </button>
                    </div>
                </motion.div>

                {/* Payment Column */}
                <motion.div
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.3 }}
                    className="gateway-card gateway-qr-card"
                >
                    <h2>Scan to Pay</h2>
                    <p className="gateway-subtitle">Use any UPI app (GPay, PhonePe, Paytm) to scan the QR code below.</p>

                    <div className="gateway-qr-wrapper">
                        <img src={QRCodeImg} alt="UPI QR Code" />
                    </div>

                    <div className="gateway-instruction-box">
                        <p>Scan with GPay, PhonePe, or Paytm</p>
                    </div>

                    <div className="gateway-steps">
                        <div className="gateway-step">
                            <div className="gateway-step-num">1</div>
                            <p>Scan & Pay the exact amount.</p>
                        </div>
                        <div className="gateway-step">
                            <div className="gateway-step-num">2</div>
                            <p>Click the button below to notify us.</p>
                        </div>
                    </div>

                    <button onClick={handleAmountPaidClick} className="gateway-pay-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.811.922 3.141.922 3.18 0 5.767-2.586 5.768-5.766 0-3.181-2.587-5.764-5.76-5.764zM19.341 4.66C17.358 2.671 14.712 1.575 11.895 1.575c-5.836 0-10.589 4.755-10.592 10.593-.002 1.865.485 3.682 1.408 5.286l-1.503 5.495 5.626-1.477c1.554.847 3.328 1.294 5.155 1.294h.004c5.836 0 10.589-4.755 10.591-10.592.001-2.828-1.098-5.484-3.048-7.424z"></path></svg>
                        Amount Paid Successfully
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Gateway;
