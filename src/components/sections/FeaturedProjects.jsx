import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import Card from '../ui/Card';
import Tag from '../ui/Tag';

const featured = projects.filter((p) => p.featured);

const tagColors = {
  'Web': '#FFFFFF',
  'App': '#F5C518',
  'SaaS': '#F59E0B',
  'AI': '#FDE047',
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <Card tilt glow className="p-6 h-full flex flex-col gap-5">
        {/* Color bar top */}
        <div className="h-1 w-16 rounded-full" style={{ background: project.color }} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t} color={tagColors[t] || '#F5C518'}>{t}</Tag>
          ))}
        </div>

        {/* Title */}
        <div>
          <h3 className="font-display font-bold text-lg text-white mb-1">{project.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: '#A0A0AA' }}>{project.tagline}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#6B6B7A', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-xs px-2.5 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', color: '#6B6B7A', border: '1px solid rgba(255,255,255,0.06)' }}>
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-white"
            style={{ color: project.color }}
          >
            View Details <ArrowRight size={12} />
          </Link>
          <div className="flex gap-2 ml-auto">
            {project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-white/5 transition-colors" aria-label="GitHub">
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

export default function FeaturedProjects() {
  return (
    <section className="section-padding" aria-label="Featured Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#F5C518' }}>Portfolio</p>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Featured Projects
            </h2>
            <p className="mt-3 text-sm max-w-md" style={{ color: '#A0A0AA' }}>
              A selection of work that demonstrates full-stack depth and SaaS architecture expertise.
            </p>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm font-semibold shrink-0 transition-colors hover:text-white"
            style={{ color: '#F5C518' }}
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
