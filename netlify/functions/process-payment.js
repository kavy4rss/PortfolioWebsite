exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        const data = JSON.parse(event.body);
        const { projectId, price } = data;

        // SIMULATED HEAVY LOGIC
        // Generate a secure transaction ID
        const transactionId = 'TXN-' + Math.random().toString(36).substr(2, 9).toUpperCase();

        // Simulate cryptographic hashing for payment validation
        const hash = Buffer.from(`${transactionId}-${price}-${Date.now()}`).toString('base64');

        // Simulated secret keys or backend-only logic can be placed here safely
        const WHATSAPP_NUMBER = '918467078545'; // Hardcoded number previously on client

        // Simulate a delay for processing the heavy payment logic
        await new Promise(resolve => setTimeout(resolve, 800));

        // Return the Payment Intent data
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                transactionId,
                secureHash: hash,
                paymentIntent: {
                    whatsappNumber: WHATSAPP_NUMBER,
                    status: 'INITIATED',
                    processedAt: new Date().toISOString()
                }
            })
        };
    } catch (error) {
        console.error('Payment processing error:', error);
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, error: 'Invalid request data' })
        };
    }
};
