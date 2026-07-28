import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';

const tagColors = {
  'Web': '#FFFFFF',
  'App': '#F5C518',
  'SaaS': '#F59E0B',
  'AI': '#FDE047',
};

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <Card tilt className="p-6 h-full flex flex-col gap-5 group">
        {/* Color accent top */}
        <div className="h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

        {/* Category + tags + Coming Soon */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t} color={tagColors[t] || '#F5C518'}>{t}</Tag>
            ))}
          </div>
          {project.comingSoon && (
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              Coming Soon
            </span>
          )}
        </div>

        {/* Title & tagline */}
        <div className="flex flex-col gap-1 flex-1">
          <h2 className="font-display font-bold text-lg text-white">{project.title}</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#A0A0AA' }}>{project.tagline}</p>
        </div>

        {/* Problem solved */}
        <p className="text-xs leading-relaxed italic" style={{ color: '#6B6B7A' }}>
          &ldquo;{project.problem}&rdquo;
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', color: '#6B6B7A', border: '1px solid rgba(255,255,255,0.05)' }}>{t}</span>
          ))}
          {project.tech.length > 5 && <span className="text-xs px-2.5 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', color: '#6B6B7A', border: '1px solid rgba(255,255,255,0.05)' }}>+{project.tech.length - 5}</span>}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-white"
            style={{ color: project.color }}
          >
            View Details <ArrowRight size={12} />
          </Link>
          <div className="flex gap-2 ml-auto">
            {project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-white/5 transition-colors" aria-label="GitHub repository">
                <Github size={14} style={{ color: '#6B6B7A' }} />
              </a>
            )}
            {project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-white/5 transition-colors" aria-label="Live site">
                <ExternalLink size={14} style={{ color: '#6B6B7A' }} />
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <>
      <Helmet>
        <title>Projects — Kavy Agrawal | Full Stack Developer</title>
        <meta name="description" content="Browse Kavy Agrawal's portfolio projects — SaaS platforms, Flutter apps, web applications, and AI-integrated products." />
        <link rel="canonical" href="https://kavyagrawal.dev/projects" />
      </Helmet>

      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#F5C518' }}>Portfolio</p>
            <h1 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-sm max-w-lg" style={{ color: '#A0A0AA' }}>
              A curated collection of projects spanning full-stack web, mobile apps, SaaS platforms, and AI integrations.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2.5 rounded-pill text-sm font-medium transition-all duration-200"
                style={{
                  background: activeFilter === cat
                    ? 'linear-gradient(135deg, #F5C518, #FFE57F)'
                    : 'rgba(255,255,255,0.04)',
                  color: activeFilter === cat ? '#000' : '#A0A0AA',
                  border: activeFilter === cat ? 'none' : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: '#6B6B7A' }}>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
