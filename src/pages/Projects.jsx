
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../index.css'
import FreelancerCRMImg from '../assets/Freelancer_CRM/Freelancer_CRM.jpeg'
import FunnelFixProImg from '../assets/FunnelFixPro/FunnelFixPro.png'
import CraftStockManagerImg from '../assets/CraftStockManager/CraftStockManager.png'
import VyoamaxImg from '../assets/Vyoamax/Vyoamax.png'
import VedicAiImg from '../assets/Vedic_AI/VedicAi.png'
import SafeguardImg from '../assets/SafeGuard/SafeGuard.png'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="featured-project-card">
            <Link to={link} target="_blank" className="featured-img-link">
                <div className="img-overlay"></div>
                <img src={img} alt={title} className="featured-img" loading="lazy" />
            </Link>

            <div className="featured-content">
                <span className="project-type">{type}</span>
                <Link to={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="project-title">{title}</h2>
                </Link>
                <p className="project-summary">{summary}</p>
                <div className="project-buttons">
                    <Link to={link} target="_blank" className="visit-btn">Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="project-card">
            <Link to={link} target="_blank" className="project-img-link">
                <div className="img-overlay"></div>
                <img src={img} alt={title} className="project-img" loading="lazy" />
            </Link>

            <div className="project-content">
                <span className="project-type">{type}</span>
                <Link to={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="small-project-title">{title}</h2>
                </Link>
                <div className="project-buttons-small">
                    <Link to={link} target="_blank" className="text-link">Visit</Link>
                </div>
            </div>
        </article>
    )
}

function Projects() {
    const [filter, setFilter] = useState('All');

    const projectData = [
        {
            title: "Freelancer CRM",
            img: FreelancerCRMImg,
            summary: "An all-in-one CRM solution designed to empower freelancers by automating tedious administrative tasks. Built with a cutting-edge stack of Next.js and Neon Postgres, it offers seamless client management, project milestone tracking, and dynamic invoicing. Experience a focused workspace that turns complex business management into a simple, high-performance digital experience.",
            link: "/freelancer-crm",
            github: "https://github.com/Kavya-Agrawal/freelancer-crm",
            type: "SaaS",
            isFeatured: true
        },
        {
            title: "FunnelFixPro Agency Website",
            img: FunnelFixProImg,
            summary: "A professional agency website designed for FunnelFixPro, focusing on high-conversion funnel optimizations and marketing strategies. This platform showcases case studies, service offerings, and strategic solutions to help businesses scale their digital presence. Built with precision and high performance in mind, it provides a seamless user journey from discovery to consultation. A perfect digital storefront for an agency dedicated to fixing and scaling marketing funnels for maximum impact.",
            link: "/funnelfixpro",
            github: "https://github.com/Kavya-Agrawal/funnelfixpro",
            type: "Website",
            isFeatured: false
        },
        {
            title: "Vyoamax Event Organiser",
            img: VyoamaxImg,
            summary: "Vyoamax is a dynamic event management platform built with React, designed to simplify the process of discovering and organizing events across various categories like Art, Music, and Business. The application features robust sorting and filtering capabilities, allowing users to prioritize events by date or title for a personalized experience. With its intuitive 'My events' section and multi-language support (English/Ukrainian), it provides a globally accessible solution for event planning and attendance. A high-performance web tool that turns complex schedule management into a smooth, interactive user journey.",
            link: "/vyoamax",
            github: "https://github.com/Kavya-Agrawal/vyoamax",
            type: "App",
            isFeatured: false
        },
        {
            title: "Craft Stock Manager",
            img: CraftStockManagerImg,
            summary: "Craft Stock Manager is a specialized inventory management application designed to help artisans and small-scale manufacturers track their materials and finished products efficiently. The platform features real-time stock updates, supplier management, and low-level alerts to ensure your creative production never hits a bottleneck. Built as a high-performance web application, it offers a clean, intuitive dashboard that simplifies complex supply chain tracking for creative businesses. It's the ultimate tool for crafters looking to scale their operations with data-driven insights and organized inventory control.",
            link: "/craftstockmanager",
            github: "https://github.com/Kavya-Agrawal/craft-stock-manager",
            type: "Micro SaaS",
            isFeatured: true
        },
        {
            title: "Vedic AI Chatbot",
            img: VedicAiImg,
            link: "/karma-navigator",
            github: "/",
            type: "App",
            isFeatured: false
        },
        {
            title: "Safeguard AntiThreat Application",
            img: SafeguardImg,
            link: "/safeguard",
            github: "/",
            type: "Software",
            isFeatured: false
        }
    ];

    const categories = ['All', 'Website', 'App', 'SaaS', 'Micro SaaS', 'Software'];
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = projectData.filter(proj => {
        const matchesFilter = filter === 'All' || proj.type === filter;
        const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            proj.summary?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="projects-page">
            <h2 className="section-title">Imagination Trumps Knowledge!</h2>

            <div className="search-filter-container">
                <div className="search-bar" style={{ display: 'flex', gap: '10px', alignItems: 'center', width: '100%', maxWidth: '600px', margin: '0 auto', background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.6 }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input
                        type="text"
                        placeholder="Search projects by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ flexGrow: 1, background: 'transparent', border: 'none', outline: 'none', color: 'inherit', fontSize: '1rem', padding: '5px' }}
                    />
                    <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)', margin: '0 10px' }}></div>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="filter-select"
                        style={{ background: 'transparent', border: 'none', outline: 'none', color: 'inherit', cursor: 'pointer', fontWeight: 500 }}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat} style={{ color: '#000' }}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div key={index} className={project.isFeatured ? "col-span-12" : "col-span-6"}>
                        {project.isFeatured ? (
                            <FeaturedProject {...project} />
                        ) : (
                            <Project {...project} />
                        )}
                    </div>
                ))}
            </div>
            {filteredProjects.length === 0 && (
                <div className="no-projects">
                    <h3>No projects found in this category.</h3>
                </div>
            )}
        </div>
    )
}

export default Projects
