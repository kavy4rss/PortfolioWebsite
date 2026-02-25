import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="policy-page"
        >
            <div className="policy-container">
                <h1 className="policy-title">Terms of Service</h1>
                <p className="policy-last-updated">Last Updated: February 2026</p>

                <div className="policy-content">
                    <section>
                        <h2>1. Terms</h2>
                        <p>By accessing this Website (Kavy Agrawal's Portfolio), you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>
                    </section>

                    <section>
                        <h2>2. Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials on Kavy Agrawal's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul>
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose or for any public display;</li>
                            <li>attempt to reverse engineer any software contained on Kavy Agrawal's Website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Disclaimer</h2>
                        <p>All the materials on Kavy Agrawal’s Website are provided "as is". Kavy Agrawal makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Kavy Agrawal does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
                    </section>

                    <section>
                        <h2>4. Limitations</h2>
                        <p>Kavy Agrawal or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Kavy Agrawal’s Website, even if Kavy Agrawal or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
                    </section>

                    <section>
                        <h2>5. Revisions and Errata</h2>
                        <p>The materials appearing on Kavy Agrawal’s Website may include technical, typographical, or photographic errors. Kavy Agrawal will not promise that any of the materials in this Website are accurate, complete, or current. Kavy Agrawal may change the materials contained on its Website at any time without notice.</p>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default TermsOfService;
