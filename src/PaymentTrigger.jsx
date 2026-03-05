import React, { useState, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { usePayment } from './context/PaymentContext';

// Dynamically import the Gateway component ONLY when this variable is evaluated
const loadGateway = () => import('./features/payments/Gateway');

const PaymentTrigger = ({ projectDetails, buttonText = "Acquire Here", className = "" }) => {
    const { globalPaymentIntent, setGlobalPaymentIntent } = usePayment();
    const [GatewayComponent, setGatewayComponent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Default to the global payment intent so the session state is preserved
    const paymentIntent = globalPaymentIntent;
    const setPaymentIntent = setGlobalPaymentIntent;

    const handleTrigger = async (e) => {
        e.preventDefault(); // Prevent default link behavior if wrapped
        setIsLoading(true);
        setHasError(false);

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
                setHasError(true);
                setIsLoading(false);
                return;
            }

            const data = await response.json();
            setPaymentIntent(data);

            // Dynamically fetch the Gateway chunk
            const module = await loadGateway();
            setGatewayComponent(() => module.default);
        } catch (error) {
            console.error("Failed to load payment gateway", error);
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBack = () => {
        setGatewayComponent(null);
        // Optionally, reset checkout intent if you truly want them to start over
        // setPaymentIntent(null); 
    };

    // If there was an error with the fetch
    if (hasError) {
        return (
            <div style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#fff', borderRadius: '0.5rem', border: '1px solid #333', marginTop: '1rem', width: 'fit-content' }}>
                <h3 style={{ color: '#ef4444', margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Maintenance Mode</h3>
                <p style={{ color: '#a3a3a3', margin: 0, fontSize: '0.875rem' }}>Secure checkout is currently undergoing maintenance. Please try again later.</p>
                <button onClick={() => setHasError(false)} style={{ marginTop: '1rem', background: '#333', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.25rem', cursor: 'pointer' }}>Dismiss</button>
            </div>
        );
    }

    // If the Gateway is loaded, render it
    if (GatewayComponent) {
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, backgroundColor: '#0a0a0a', overflowY: 'auto' }}>
                <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black text-white">Loading Gateway...</div>}>
                        <GatewayComponent projectData={projectDetails} paymentIntent={paymentIntent} onBack={handleBack} />
                    </Suspense>
                </ErrorBoundary>
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
