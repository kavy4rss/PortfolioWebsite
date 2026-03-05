import React, { createContext, useState, useContext } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [globalPaymentIntent, setGlobalPaymentIntent] = useState(null);

    return (
        <PaymentContext.Provider value={{ globalPaymentIntent, setGlobalPaymentIntent }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePayment = () => {
    return useContext(PaymentContext);
};
