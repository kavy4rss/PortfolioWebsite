import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import Tag from '../components/ui/Tag';
import { softwareProjectSchema, breadcrumbSchema } from '../lib/schema';

const tagColors = {
  'Web': '#FFFFFF',
  'App': '#F5C518',
  'SaaS': '#F59E0B',
  'AI': '#FDE047',
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-28">
        <h1 className="font-display font-bold text-3xl">Project not found</h1>
        <Link to="/projects" className="text-sm" style={{ color: '#F5C518' }}>← Back to projects</Link>
      </div>
    );
  }

  const related = projects.filter((p) => p.id !== project.id && p.tags.some((t) => project.tags.includes(t))).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{project.title} — Kavy Agrawal</title>
        <meta name="description" content={project.tagline} />
        <link rel="canonical" href={`https://kavyagrawal.dev/projects/${project.slug}`} />
        <script type="application/ld+json">{JSON.stringify(softwareProjectSchema(project))}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([
          { name: 'Home', url: 'https://kavyagrawal.dev/' },
          { name: 'Projects', url: 'https://kavyagrawal.dev/projects' },
          { name: project.title, url: `https://kavyagrawal.dev/projects/${project.slug}` },
        ]))}</script>
      </Helmet>

      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm mb-10 transition-colors hover:text-white"
            style={{ color: '#A0A0AA' }}
          >
            <ArrowLeft size={15} /> Back to Projects
          </motion.button>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 mb-12"
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => <Tag key={t} color={tagColors[t] || '#F5C518'}>{t}</Tag>)}
            </div>

            <h1 className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {project.title}
            </h1>
            <p className="text-lg" style={{ color: '#A0A0AA' }}>{project.tagline}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl !== '#' && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill text-sm font-semibold text-black"
                  style={{ background: 'linear-gradient(135deg, #F5C518, #FFE57F)' }}>
                  <ExternalLink size={14} /> Live Site
                </a>
              )}
              {project.githubUrl !== '#' && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill text-sm font-semibold border"
                  style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#A0A0AA' }}>
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </motion.div>

          {/* Hero placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full h-64 sm:h-80 rounded-2xl flex items-center justify-center mb-12"
            style={{ background: `linear-gradient(135deg, ${project.color}22, rgba(0,0,0,0.4))`, border: `1px solid ${project.color}33` }}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">🖼️</div>
              <p className="text-sm" style={{ color: '#6B6B7A' }}>Project screenshot coming soon</p>
            </div>
          </motion.div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <section>
                <h2 className="font-display font-bold text-xl mb-4">Overview</h2>
                <p className="text-sm leading-7" style={{ color: '#A0A0AA' }}>{project.description}</p>
              </section>

              <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="glass-card p-5">
                  <h3 className="font-display font-bold text-sm mb-3" style={{ color: '#F59E0B' }}>🎯 The Problem</h3>
                  <p className="text-sm leading-6" style={{ color: '#A0A0AA' }}>{project.problem}</p>
                </div>
                <div className="glass-card p-5">
                  <h3 className="font-display font-bold text-sm mb-3" style={{ color: '#F5C518' }}>✅ The Solution</h3>
                  <p className="text-sm leading-6" style={{ color: '#A0A0AA' }}>{project.solution}</p>
                </div>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl mb-5">Key Features</h2>
                <ul className="flex flex-col gap-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#F5C518' }} />
                      <span className="text-sm" style={{ color: '#A0A0AA' }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="glass-card p-5 flex flex-col gap-4">
                <h3 className="font-display font-bold text-sm text-white">Project Info</h3>
                <div className="flex flex-col gap-3 text-sm">
                  <div>
                    <p className="text-xs mb-1" style={{ color: '#6B6B7A' }}>Role</p>
                    <p style={{ color: '#F5F5F7' }}>{project.role}</p>
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: '#6B6B7A' }}>Category</p>
                    <p style={{ color: '#F5F5F7' }}>{project.category}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-5 flex flex-col gap-3">
                <h3 className="font-display font-bold text-sm text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-lg" style={{ background: 'rgba(245,197,24,0.08)', color: '#F5C518', border: '1px solid rgba(245,197,24,0.2)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related projects */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <h2 className="font-display font-bold text-xl mb-6">Related Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((p) => (
                  <Link key={p.id} to={`/projects/${p.slug}`} className="glass-card p-4 flex flex-col gap-2 transition-all duration-200">
                    <p className="font-display font-semibold text-sm text-white">{p.title}</p>
                    <p className="text-xs" style={{ color: '#6B6B7A' }}>{p.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
