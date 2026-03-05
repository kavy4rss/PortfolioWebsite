import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../index.css'

// Lazy loaded project card component with Intersection Observer
const ProjectCard = ({ project }) => {
    const { title, type, summary, img, link, isFeatured } = project;
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    if (isFeatured) {
        return (
            <article ref={cardRef} className="featured-project-card">
                {isVisible ? (
                    <>
                        <Link to={link} target="_blank" className="featured-img-link" style={{ position: 'relative' }}>
                            <div className="img-overlay" style={{ zIndex: 2 }}></div>
                            {!imageLoaded && (
                                <div style={{ position: 'absolute', inset: 0, backgroundColor: '#1a1a1a', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', zIndex: 1 }}></div>
                            )}
                            <img
                                src={img}
                                alt={title}
                                className="featured-img"
                                loading="lazy"
                                onLoad={() => setImageLoaded(true)}
                                style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.4s ease', position: 'relative', zIndex: 1 }}
                            />
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
                    </>
                ) : (
                    <div style={{ height: '400px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}></div>
                )}
            </article>
        );
    }

    return (
        <article ref={cardRef} className="project-card">
            {isVisible ? (
                <>
                    <Link to={link} target="_blank" className="project-img-link" style={{ position: 'relative' }}>
                        <div className="img-overlay" style={{ zIndex: 2 }}></div>
                        {!imageLoaded && (
                            <div style={{ position: 'absolute', inset: 0, backgroundColor: '#1a1a1a', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', zIndex: 1 }}></div>
                        )}
                        <img
                            src={img}
                            alt={title}
                            className="project-img"
                            loading="lazy"
                            onLoad={() => setImageLoaded(true)}
                            style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.4s ease', position: 'relative', zIndex: 1 }}
                        />
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
                </>
            ) : (
                <div style={{ height: '300px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}></div>
            )}
        </article>
    );
};

function Projects() {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [projectData, setProjectData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch externalized project data (Simulated CDN Edge)
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjectData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to load projects", err);
                setIsLoading(false);
            });
    }, []);

    const categories = ['All', 'Website', 'App', 'SaaS', 'Micro SaaS', 'Software'];

    const filteredProjects = projectData.filter(proj => {
        const matchesFilter = filter === 'All' || proj.type === filter;
        const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (proj.summary && proj.summary.toLowerCase().includes(searchQuery.toLowerCase()));
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

            {isLoading ? (
                <div className="min-h-[50vh] flex items-center justify-center">
                    <p>Loading projects...</p>
                </div>
            ) : (
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className={project.isFeatured ? "col-span-12" : "col-span-6"}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            )}

            {!isLoading && filteredProjects.length === 0 && (
                <div className="no-projects">
                    <h3>No projects found in this category.</h3>
                </div>
            )}
        </div>
    )
}

export default Projects
