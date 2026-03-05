import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ fontSize: '6rem', margin: '0', color: 'var(--text-primary)' }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#fff', color: '#000', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;
