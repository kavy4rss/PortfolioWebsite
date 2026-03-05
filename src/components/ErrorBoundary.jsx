import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#fff', borderRadius: '0.5rem', border: '1px solid #333' }}>
                    <h2 style={{ color: '#ef4444', marginBottom: '1rem' }}>Maintenance Mode</h2>
                    <p style={{ color: '#a3a3a3' }}>Our secure checkout is currently undergoing maintenance. Please try again later or contact support.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
