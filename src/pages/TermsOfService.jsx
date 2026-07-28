import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Section({ title, id, children }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="font-display font-bold text-xl mb-4" style={{ color: '#F5F5F7' }}>{title}</h2>
      <div className="text-sm leading-7" style={{ color: '#A0A0AA' }}>{children}</div>
    </section>
  );
}

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Kavy Agrawal</title>
        <meta name="description" content="Terms of Service for Kavy Agrawal's portfolio website." />
        <link rel="canonical" href="https://kavyagrawal.dev/terms-of-service" />
      </Helmet>

      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#F5C518' }}>Legal</p>
            <h1 className="font-display font-bold text-3xl mb-2">Terms of Service</h1>
            <p className="text-xs mb-10" style={{ color: '#6B6B7A' }}>Last updated: July 2026</p>

            <Section title="1. Acceptance of Terms" id="acceptance">
              <p>By accessing kavyagrawal.dev (the "Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use this Site. These terms apply to all visitors, users, and others who access or use the Site.</p>
            </Section>

            <Section title="2. Intellectual Property" id="ip">
              <p className="mb-3">All content on this Site — including but not limited to text, code snippets, design, graphics, and the overall portfolio presentation — is the intellectual property of Kavy Agrawal unless otherwise stated.</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Project screenshots and descriptions are either Kavy's own work or shared with client permission.</li>
                <li>You may not reproduce, distribute, or use any content from this Site for commercial purposes without prior written permission.</li>
                <li>Personal, non-commercial use (e.g., sharing a link to this portfolio) is permitted and encouraged.</li>
              </ul>
            </Section>

            <Section title="3. Use of the Site" id="use">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
                <li>Use automated tools to scrape or harvest content from this Site beyond normal search-engine indexing</li>
                <li>Attempt to gain unauthorized access to any part of the Site or its infrastructure</li>
                <li>Submit false, misleading, or spam content through the contact form</li>
                <li>Use this Site in any way that could damage, disable, or impair its operation</li>
              </ul>
            </Section>

            <Section title="4. External Links" id="links">
              <p>This Site may contain links to external websites (GitHub, LinkedIn, project live demos, etc.). I am not responsible for the content, privacy practices, or availability of those external sites. Linking to a project does not constitute an endorsement of every aspect of that project's current state.</p>
            </Section>

            <Section title="5. Disclaimer of Warranties" id="warranty">
              <p>This Site is provided "as is" without warranties of any kind, express or implied. I do not warrant that the Site will be error-free, uninterrupted, or free of viruses. Your use of this Site is at your own risk.</p>
            </Section>

            <Section title="6. Limitation of Liability" id="liability">
              <p>To the fullest extent permitted by applicable law, Kavy Agrawal shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Site or inability to access it.</p>
            </Section>

            <Section title="7. Governing Law" id="law">
              <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.</p>
            </Section>

            <Section title="8. Changes" id="changes">
              <p>I reserve the right to modify these Terms at any time. Changes take effect upon posting to the Site. Continued use after changes constitutes acceptance. Check the "Last updated" date above for the most recent revision.</p>
            </Section>

            <Section title="9. Contact" id="contact">
              <p>Questions about these Terms? Reach out via the <Link to="/contact" style={{ color: '#F5C518' }}>Contact page</Link>.</p>
            </Section>
          </motion.div>
        </div>
      </main>
    </>
  );
}
