import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="policy-page"
        >
            <div className="policy-container">
                <h1 className="policy-title">Privacy Policy</h1>
                <p className="policy-last-updated">Last Updated: February 2026</p>

                <div className="policy-content">
                    <section>
                        <h2>1. Introduction</h2>
                        <p>Welcome to Kavy Agrawal's Portfolio ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                    </section>

                    <section>
                        <h2>2. Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                        <ul>
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes email address and telephone numbers (e.g., when you use the contact form or checkout page).</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Cookies and Web Beacons</h2>
                        <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                        <p><strong>Google AdSense:</strong> Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</p>
                    </section>

                    <section>
                        <h2>4. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul>
                            <li>To present our website and its contents to you.</li>
                            <li>To notify you about changes to our website or any products or services we offer or provide though it.</li>
                            <li>To allow you to participate in interactive features on our website.</li>
                            <li>To provide customer support.</li>
                            <li>To gather analysis or valuable information so that we can improve our Website.</li>
                            <li>To monitor the usage of our Website.</li>
                            <li>To detect, prevent and address technical issues.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Data Security</h2>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
                    </section>

                    <section>
                        <h2>6. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us via the <a href="/contact">Contact Page</a>.</p>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
