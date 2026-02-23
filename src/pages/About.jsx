
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import '../index.css'
import profilePic from '../assets/AboutPage.webp'

const SkillCard = ({ skill }) => {
    return (
        <motion.div
            className="skill-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="skill-card-icon">
                <img src={skill.icon} alt={skill.name} />
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
        </motion.div>
    );
};

const SkillCarousel = () => {
    const skills = [
        { name: "HTML", description: "The standard markup language for creating web pages.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", description: "Used for styling and layout of web pages.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JAVA", description: "A high-level, class-based, object-oriented programming language.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Javascript", description: "The core programming language of the interactive web.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "NextJS", description: "The powerful React framework for production-grade apps.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "NodeJS", description: "A JavaScript runtime built on Chrome's V8 engine.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PHP", description: "A popular general-purpose scripting language for servers.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Supabase", description: "The modern open-source alternative to Firebase.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
        { name: "Flutter", description: "Google's UI toolkit for beautiful, natively compiled apps.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "React Native", description: "Framework for building native mobile apps with React.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Dart", description: "A client-optimized language for fast apps on any platform.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "WordPress", description: "The most flexible and widely used CMS in the world.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { name: "Django", description: "A high-level Python web framework for clean design.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Firebase", description: "Google's platform for building and scaling web apps.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Python", description: "A versatile language for AI, data science, and web apps.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = React.useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, [skills.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
    };

    React.useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(timer);
    }, [nextSlide, currentIndex]);

    return (
        <div className="skills-carousel-container">
            <button onClick={prevSlide} className="carousel-btn" aria-label="Previous Skill">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div className="skill-card-wrapper">
                <AnimatePresence mode="wait">
                    <SkillCard key={currentIndex} skill={skills[currentIndex]} />
                </AnimatePresence>
            </div>
            <button onClick={nextSlide} className="carousel-btn" aria-label="Next Skill">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        </div>
    );
};

const AnimatedNumbers = ({ value }) => {
    return <span className="text-4xl font-bold">{value}+</span>
}



// The scroll-driven icon
const LiIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    })

    return (
        <figure className="li-icon-figure">
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="20" className="stroke-primary stroke-1 fill-none" />
                <motion.circle
                    cx="50" cy="50" r="20"
                    className="stroke-[5px] fill-light"
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="50" cy="50" r="10" className="animate-pulse stroke-1 fill-primary" />
            </svg>
        </figure>
    )
}

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="roadmap-item">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl">
                    {position}&nbsp;
                    <a href={companyLink} target="_blank" className="text-primary capitalize">
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className="about-page">
            <h2 className="section-title">Passion Fuels Purpose!</h2>

            <div className="about-grid">
                <div className="biography">
                    <h3>BIOGRAPHY</h3>
                    <p>Hi, I'm Kavya Agrawal, a web developer and Software Developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 5 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.</p>
                    <p>I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.</p>
                    <p>Whether I'm working on a website, mobile app, or other SaaS products, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                </div>

                <div className="profile-image-container">
                    <div className="image-frame"></div>
                    <img
                        src={profilePic}
                        alt="Kavya Agrawal"
                        className="about-profile-img"
                    />
                </div>

                <div className="stats-container">
                    <div className="stat-item">
                        <span className="stat-number">12+</span>
                        <span className="stat-label">Github Repositories</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">5+</span>
                        <span className="stat-label">Years of Experience</span>
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="section-title">Technical Expertise</h2>
                <SkillCarousel />
            </div>

            <div className="roadmap-section">
                <h2 className="section-title mb-16">Experience</h2>

                <div ref={ref} className="roadmap-container">
                    {/* The Scrolling Line */}
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="roadmap-line"
                    />

                    <ul className="roadmap-list">
                        <Details
                            position="Web Developer" company="Saraswati Gyan Mandir Inter College Azad Nagar Kanpur" companyLink="https://www.sgmic.in"
                            time="2024-Present" address="Uttar Pradesh, Kanpur"
                            work="Worked on a School Website for developing new designed website, including improving the speed and performance of the website."
                        />
                        <Details
                            position="Web Developer" company="Saraswati Gyan Mandir Inter College Azad Nagar Kanpur" companyLink="https://www.sgmic.edu.in"
                            time="2024-Present" address="Uttar Pradesh, Kanpur"
                            work="Worked on a School Website for developing new designed website, including improving the speed and performance of the website."
                        />
                    </ul>
                </div>
            </div>

            <div className="roadmap-section mt-32">
                <h2 className="section-title mb-16">Education</h2>
                <div className="roadmap-container">
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="roadmap-line"
                    />
                    <ul className="roadmap-list">
                        <Details
                            position="Class 10th" company="SGM International School" companyLink="https://sgminternational.edu.in/"
                            time="2022-2026" address="Uttar Pradesh, Kanpur"
                            work="Completing my basic education with Commerce Stream."
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
