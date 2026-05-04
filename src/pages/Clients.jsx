import React from 'react'
import { motion } from 'framer-motion'
import clientsData from '../data/clientsData'
import '../index.css'

// ── Empty State SVG ────────────────────────────────────────────────────────────
const EmptyStateIcon = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
        <circle cx="28" cy="28" r="27" stroke="#333" strokeWidth="2" />
        <text x="28" y="35" textAnchor="middle" fill="#444" fontSize="22" fontFamily="sans-serif">?</text>
    </svg>
)

// ── Single Client Card ─────────────────────────────────────────────────────────
const ClientCard = ({ client, index }) => {
    const { name, logo, built, category, projects } = client

    return (
        <article
            className="cc-card"
            style={{ animationDelay: `${index * 0.08}s` }}
        >
            {/* Top row: logo (Badge removed as requested) */}
            <div className="cc-top-row">
                <div className="cc-logo-circle" aria-hidden="true">
                    <img
                        src={logo}
                        alt={`${name} logo`}
                        className="cc-logo-img"
                        onError={e => {
                            e.currentTarget.src =
                                'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&h=200&fit=crop&q=80'
                        }}
                    />
                </div>
            </div>

            {/* Company name */}
            <h3 className="cc-name">{name}</h3>
            
            {/* Category added after name as requested */}
            <p className="cc-category">{category}</p>

            {/* Divider */}
            <div className="cc-divider" aria-hidden="true" />

            {/* What I built */}
            <div className="cc-built-section">
                <p className="cc-built-label">WHAT I BUILT</p>
                <p className="cc-built-text">{built}</p>
            </div>

            {/* Multiple Visit buttons based on projects built */}
            <div className="cc-buttons-row">
                {projects && projects.map((project, pIndex) => (
                    <a
                        key={pIndex}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cc-visit-btn"
                        aria-label={`Visit ${name}'s ${project.label}`}
                    >
                        {project.label} →
                    </a>
                ))}
            </div>
        </article>
    )
}

// ── Main Page ──────────────────────────────────────────────────────────────────
const Clients = () => {
    return (
        <div className="cp-page">

            {/* ── Hero ── */}
            <section className="cp-hero" aria-label="Clients hero">
                <motion.div
                    className="cp-hero-inner"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    {/* Pill badge */}
                    <div className="cp-eyebrow" aria-label="Availability status">
                        <span className="cp-eyebrow-dot" aria-hidden="true" />
                        AVAILABLE FOR NEW PROJECTS
                    </div>

                    {/* Main heading */}
                    <h1 className="cp-heading">
                        Clients &amp;
                        <br />
                        Collaborations
                    </h1>

                    {/* Sub-heading */}
                    <p className="cp-subheading">
                        Brands and businesses I've had the pleasure of building for
                    </p>
                </motion.div>

                {/* Subtle bottom rule */}
                <div className="cp-hero-rule" aria-hidden="true" />
            </section>

            {/* ── Cards Grid ── */}
            <main className="cp-grid-wrapper" aria-label="Client projects">
                {clientsData.length > 0 ? (
                    <div className="cp-grid">
                        {clientsData.map((client, i) => (
                            <ClientCard key={client.id} client={client} index={i} />
                        ))}
                    </div>
                ) : (
                    <div className="cp-empty" role="status" aria-live="polite">
                        <EmptyStateIcon />
                        <p className="cp-empty-title">No clients to show yet.</p>
                        <p className="cp-empty-sub">Check back soon.</p>
                    </div>
                )}
            </main>
        </div>
    )
}

export default Clients
