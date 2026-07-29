import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// Dynamically import 3D Canvas with SSR disabled to prevent Core Web Vitals / TTI penalties
const ThreeDCanvas = dynamic(() => import('../src/three/BackgroundCanvas'), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-b from-[#111219] to-[#07080B] animate-pulse opacity-40"
    />
  ),
});

export default function HomePage() {
  return (
    <>
      {/* Heavy 3D canvas safely isolated behind next/dynamic */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ThreeDCanvas />
      </div>

      <header className="relative z-10 border-b border-white/10 backdrop-blur-md bg-[#0B0C10]/80 sticky top-0">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl tracking-tight bg-gradient-to-r from-[#F5C518] to-white bg-clip-text text-transparent"
          >
            Kavya Agrawal
          </Link>
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-300">
            <li><Link href="#about" className="hover:text-white transition">About</Link></li>
            <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="#projects" className="hover:text-white transition">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="relative z-10 min-h-screen">
        {/* HERO SECTION - H1 with Primary Keyword & Intent Mapping */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#F5C518]/10 text-[#F5C518] border border-[#F5C518]/20">
            Kanpur &amp; Global Software Engineering
          </span>

          <h1 className="font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
            Kavya Agrawal — <span className="text-[#F5C518]">Best Website Developer</span> &amp; <span className="text-white">Application Developer in Kanpur</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed">
            Architecting production-grade software, cross-platform mobile apps, and high-throughput enterprise systems. Positioned as Kanpur’s top B2B SaaS developer for scaling modern businesses globally.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold bg-[#F5C518] text-[#0B0C10] hover:bg-[#FFE57F] transition duration-200 shadow-lg shadow-[#F5C518]/20"
            >
              Consult Kanpur&apos;s Top Developer
            </Link>
            <Link
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition duration-200"
            >
              Explore SaaS Architecture
            </Link>
          </div>
        </section>

        {/* SERVICES SECTION - H2 & H3 Semantic Keyword Distribution */}
        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Custom App Development &amp; Software Solutions in Kanpur
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            Delivering performance-scaled digital platforms built with Next.js 14, React, Flutter, and cloud-native backend infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#F5C518]/50 transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Web Application Development
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Ultra-fast, conversion-focused websites and web apps built for Kanpur enterprises and international brands using Next.js 14 App Router.
              </p>
            </article>

            <article className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#F5C518]/50 transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Top B2B SaaS Developer in Kanpur
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Full-stack multi-tenant SaaS architecture, subscription engine integration, real-time analytics, and role-based access security.
              </p>
            </article>

            <article className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#F5C518]/50 transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Cross-Platform Mobile App Engineering
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                High-performance Flutter mobile application development for iOS and Android with offline synchronization and native device integrations.
              </p>
            </article>
          </div>
        </section>

        {/* BIO & TECH STACK SECTION */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Empowering the Kanpur Tech Ecosystem &amp; Global Software Standards
              </h2>
              <p className="text-gray-300 leading-relaxed">
                As a principal full-stack software engineer based in Kanpur, Uttar Pradesh, Kavya Agrawal specializes in bridging the gap between local enterprise growth and silicon-valley grade tech architecture.
              </p>
            </div>
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/media/Kavy/IMG_9062.JPG"
                alt="Kavya Agrawal — Premier Website Developer and B2B SaaS Architect in Kanpur"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 relative z-10 bg-[#07080B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Kavya Agrawal. All rights reserved. Kanpur, Uttar Pradesh, India.</p>
          <div className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="hover:text-white transition">XML Sitemap</Link>
            <Link href="/llms.txt" className="hover:text-white transition">AI Crawler Data (llms.txt)</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
