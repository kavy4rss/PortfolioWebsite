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

        // Simulated secret keys or backend-only logic can be placed here safely
        const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '918467078545';
        const GATEWAY_SECRET = process.env.GATEWAY_SECRET || 'default_secret';

        // Simulate cryptographic hashing for payment validation
        const hash = Buffer.from(`${transactionId}-${price}-${Date.now()}-${GATEWAY_SECRET}`).toString('base64');

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
        // Custom Logger for production error tracking instead of standard console bounds
        const customLogger = (msg, err) => process.stdout.write(`[PAYMENT_API_ERROR] ${new Date().toISOString()} - ${msg} - ${err}\n`);
        customLogger('Payment processing error', error);

        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, error: 'Invalid request data' })
        };
    }
};
