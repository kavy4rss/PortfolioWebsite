import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../index.css'

// ------------------------------------------------------------------
// ImageKit helper — appends optimisation params to live URLs.
// Returns '#' unchanged so skeleton activates when no real URL yet.
// ------------------------------------------------------------------
const getOptimizedSrc = (src, width = 800, quality = 80) => {
    if (!src || src === '#') return '#';
    const sep = src.includes('?') ? '&' : '?';
    return `${src}${sep}tr=w-${width},q-${quality}`;
};

// Shimmer skeleton loader
const SkeletonLoader = ({ height = '220px', style = {} }) => (
    <div style={{
        width: '100%', height,
        borderRadius: '12px',
        background: 'linear-gradient(90deg,rgba(255,255,255,0.04) 25%,rgba(255,255,255,0.09) 50%,rgba(255,255,255,0.04) 75%)',
        backgroundSize: '200% 100%',
        animation: 'imagekit-shimmer 1.6s infinite linear',
        ...style
    }} />
);

// Fallback when src stays '#' or onError fires
const ImagePlaceholder = ({ type, title, height = '220px' }) => (
    <div style={{
        width: '100%', height,
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px dashed rgba(255,255,255,0.12)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '0.6rem', color: 'rgba(255,255,255,0.3)',
        fontSize: '0.85rem', fontWeight: 500
    }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
        </svg>
        Project Preview
    </div>
);

// Lazy loaded project card component with Intersection Observer
const ProjectCard = ({ project }) => {
    const { title, type, summary, img, link, isFeatured } = project;
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const cardRef = useRef(null);

    const isPlaceholder = !img || img === '#';
    const optimizedSrc = getOptimizedSrc(img, isFeatured ? 1200 : 800);

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

    // Renders the correct image state: placeholder / skeleton / real img
    const renderImage = (className, height = '220px') => {
        if (isPlaceholder || imageError) {
            return <ImagePlaceholder type={type} title={title} height={height} />;
        }
        return (
            <div style={{ position: 'relative', width: '100%' }}>
                {!imageLoaded && (
                    <SkeletonLoader height={height} style={{ position: 'absolute', top: 0, left: 0 }} />
                )}
                <img
                    src={optimizedSrc}
                    alt={`Custom ${type} Solution and App Development by Kavy Agrawal - ${title}`}
                    className={className}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    style={{
                        opacity: imageLoaded ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                        position: 'relative', zIndex: 1,
                        display: 'block', width: '100%'
                    }}
                />
            </div>
        );
    };

    if (isFeatured) {
        return (
            <motion.article
                whileHover={isPlaceholder ? {} : { scale: 1.01, transition: { duration: 0.2 } }}
                ref={cardRef} className="featured-project-card"
            >
                {isVisible ? (
                    <>
                        <Link to={link} target="_blank" className="featured-img-link">
                            <div className="img-overlay" style={{ zIndex: 2 }}></div>
                            {renderImage('featured-img', '100%')}
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
                    <SkeletonLoader height="400px" />
                )}
            </motion.article>
        );
    }

    return (
        <motion.article
            whileHover={isPlaceholder ? {} : { scale: 1.05, transition: { duration: 0.2 } }}
            ref={cardRef} className="project-card"
        >
            {isVisible ? (
                <>
                    <Link to={link} target="_blank" className="project-img-link">
                        <div className="img-overlay" style={{ zIndex: 2 }}></div>
                        {renderImage('project-img', '200px')}
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
                <SkeletonLoader height="300px" />
            )}
        </motion.article>
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
                <motion.div
                    className="projects-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={project.isFeatured ? "col-span-12" : "col-span-6"}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
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
