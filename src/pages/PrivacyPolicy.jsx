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

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Kavy Agrawal</title>
        <meta name="description" content="Privacy Policy for Kavy Agrawal's portfolio website. Learn how your data is collected and used." />
        <link rel="canonical" href="https://kavyagrawal.dev/privacy-policy" />
      </Helmet>

      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#F5C518' }}>Legal</p>
            <h1 className="font-display font-bold text-3xl mb-2">Privacy Policy</h1>
            <p className="text-xs mb-10" style={{ color: '#6B6B7A' }}>Last updated: July 2026</p>

            <Section title="1. Introduction" id="intro">
              <p>Welcome to kavyagrawal.dev (the "Site"), operated by Kavy Agrawal ("I", "me", or "my"). This Privacy Policy explains how I collect, use, and protect your personal information when you visit my portfolio website or contact me through the contact form. I take your privacy seriously and am committed to handling your data responsibly.</p>
            </Section>

            <Section title="2. Information I Collect" id="info-collected">
              <p className="mb-3">I collect information you provide directly when you use the contact form:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li><strong className="text-white">Name</strong> — so I can address you personally in my response</li>
                <li><strong className="text-white">Email address</strong> — to reply to your inquiry</li>
                <li><strong className="text-white">Project type & message content</strong> — to understand your needs and respond meaningfully</li>
              </ul>
              <p className="mt-3">I also collect limited non-personal technical data through analytics (see §4): page views, country, browser type. This data is aggregated and never linked to your identity.</p>
            </Section>

            <Section title="3. How I Use Your Information" id="use">
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>To respond to your inquiries and project requests</li>
                <li>To understand aggregate site usage and improve content</li>
                <li>I do not use your data for advertising, lead generation, or any commercial purpose beyond responding to you</li>
                <li>I never sell or rent your personal data to third parties</li>
              </ul>
            </Section>

            <Section title="4. Third-Party Services" id="third-party">
              <p className="mb-3">This site uses the following third-party services that may process data:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li><strong className="text-white">EmailJS</strong> — processes contact form submissions to deliver them to my inbox. Subject to <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{ color: '#F5C518' }}>EmailJS Privacy Policy</a>.</li>
                <li><strong className="text-white">Google Fonts / Fontshare</strong> — font delivery CDNs that may log your IP during font loading.</li>
                <li><strong className="text-white">Analytics (Plausible or GA4, if enabled)</strong> — privacy-respecting page-level analytics. No cookies, no cross-site tracking with Plausible.</li>
              </ul>
            </Section>

            <Section title="5. Cookies" id="cookies">
              <p>This site uses minimal cookies. Session storage is used only to remember whether you've seen the loading screen (to avoid replaying it on every click) — this data never leaves your browser and is not transmitted to any server.</p>
            </Section>

            <Section title="6. Data Retention & Your Rights" id="rights">
              <p>Contact form submissions are retained only as long as necessary to address your inquiry. You may request deletion of your data at any time by emailing me directly at the address listed on the Contact page. If you're in the EU/EEA, you additionally have rights under the GDPR, including access, rectification, and erasure.</p>
            </Section>

            <Section title="7. Security" id="security">
              <p>I implement reasonable technical measures to protect your information. All data in transit is encrypted via HTTPS. However, no internet transmission is 100% secure — please use discretion when sharing sensitive business information via the contact form.</p>
            </Section>

            <Section title="8. Changes to This Policy" id="changes">
              <p>I may update this Privacy Policy from time to time. Changes will be reflected by updating the "Last updated" date above. Continued use of the site after changes constitutes acceptance of the updated policy.</p>
            </Section>

            <Section title="9. Contact" id="contact">
              <p>For any privacy-related questions or data requests, contact me via the <Link to="/contact" style={{ color: '#F5C518' }}>Contact page</Link>.</p>
            </Section>
          </motion.div>
        </div>
      </main>
    </>
  );
}
