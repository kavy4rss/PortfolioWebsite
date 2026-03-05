import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import Bulb from '../assets/Bulb.svg'
import HomepagePic from '../assets/Homepage.png'
import ResumePDF from '../assets/Resume.pdf'

function Home() {
    return (
        <main className="hero">
            <div className="container hero-grid">
                <div className="hero-image-container" style={{ pointerEvents: 'none' }}>
                    <img
                        src={HomepagePic}
                        alt="Artistic Avatar"
                        className="hero-image"
                        style={{ pointerEvents: 'none' }}
                    />
                </div>
                <div className="hero-content">
                    <h1>Website Developer & App Developer | Turning Vision Into Reality.</h1>
                    <p>
                        As a skilled Full Stack Developer and SaaS Developer, I am dedicated to turning ideas into innovative, high-performance web applications.
                        Explore my latest projects and articles, showcasing my expertise in modern web and mobile development.
                    </p>
                    <div className="cta-group">
                        <a href={ResumePDF} download="Resume.pdf" className="btn-primary">
                            Resume
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                        <Link to="/contact" className="btn-ghost">Contact</Link>
                    </div>
                </div>
            </div>

            {/* Bulb - Deep Corner Anchored */}
            <div className="bulb-container">
                <img src={Bulb} alt="Lightbulb Idea" className="bulb-svg" />
            </div>
        </main>
    )
}

export default Home
