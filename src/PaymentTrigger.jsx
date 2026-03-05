import React, { useState, Suspense } from 'react';

// Dynamically import the Gateway component ONLY when this variable is evaluated
const loadGateway = () => import('./features/payments/Gateway');

const PaymentTrigger = ({ projectDetails, buttonText = "Acquire Here", className = "" }) => {
    const [GatewayComponent, setGatewayComponent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentIntent, setPaymentIntent] = useState(null);

    const handleTrigger = async (e) => {
        e.preventDefault(); // Prevent default link behavior if wrapped
        setIsLoading(true);

        try {
            // Call Netlify serverless function to process payment intent
            const response = await fetch('/.netlify/functions/process-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    projectId: projectDetails.title,
                    price: projectDetails.price || 499
                })
            });

            if (!response.ok) {
                throw new Error('Failed to process payment');
            }

            const data = await response.json();
            setPaymentIntent(data);

            // Dynamically fetch the Gateway chunk
            const module = await loadGateway();
            setGatewayComponent(() => module.default);
        } catch (error) {
            console.error("Failed to load payment gateway", error);
            alert("Error initializing secure checkout. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleBack = () => {
        setGatewayComponent(null);
        setPaymentIntent(null);
    };

    // If the Gateway is loaded, render it
    if (GatewayComponent) {
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, backgroundColor: '#0a0a0a', overflowY: 'auto' }}>
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black text-white">Loading Gateway...</div>}>
                    <GatewayComponent projectData={projectDetails} paymentIntent={paymentIntent} onBack={handleBack} />
                </Suspense>
            </div>
        );
    }

    return (
        <button
            onClick={handleTrigger}
            className={className}
            disabled={isLoading}
            style={isLoading ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
        >
            <span>{isLoading ? 'Processing Secure Checkout...' : buttonText}</span>
            {!isLoading && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            )}
        </button>
    );
};

export default PaymentTrigger;
