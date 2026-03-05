import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const PageWrapper = ({ children }) => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%' }}
            >
                {children}
            </m.div>
        </LazyMotion>
    );
};

export default PageWrapper;
