import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../index.css'

// 1. Website Development: 16:9 carousel
const webDevImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop&q=80",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&h=900&fit=crop&q=80"
];

// 2. App Development: 9:16 carousel
const appDevImages = [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=1600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=1600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&h=1600&fit=crop&q=80"
];

// 3. SaaS development: 16:9 carousel
const saasImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4bcafe4?w=1600&h=900&fit=crop&q=80"
];


// 4. Premium Music Library Playlist (ImageKit CDN)
const playlist = [
    { title: "Deewana Deewana", artist: "A.R. Rahman", duration: "5:04", src: "https://ik.imagekit.io/kxnj6nzco/kavyagrawal.netlify.app/Music-Library/Deewana-Deewana.mp3" },
    { title: "Ranjheya Ve", artist: "Zain Zohaib", duration: "4:24", src: "https://ik.imagekit.io/kxnj6nzco/kavyagrawal.netlify.app/Music-Library/Ranjheya-Ve.mp3" },
    { title: "Yaara Rola Ka", artist: "Masoom Sharma", duration: "3:24", src: "https://ik.imagekit.io/kxnj6nzco/kavyagrawal.netlify.app/Music-Library/Yaara-Rola_Ka.mp3" },
    { title: "Lutt Le Gaya", artist: "Shashwat Sachdev", duration: "3:40", src: "https://ik.imagekit.io/kxnj6nzco/kavyagrawal.netlify.app/Music-Library/Lutt-Le-Gaya.mp3" }
];

// 5. Gaming Icons (Valorant, Roblox, Free Fire, GTA 5)
const gamingImages = [
    "https://seekvectorlogo.net/wp-content/uploads/2020/04/valorant-vector-logo.png",
    "https://tse1.mm.bing.net/th/id/OIP.VnoT2RO1oCuYFVZZn6hQOAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse2.mm.bing.net/th/id/OIP.chZQ1BTq2dFvf9nEXCJCKQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse1.mm.bing.net/th/id/OIP.tUnY4nbJnknaYy7aTpSDMgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
];

const HobbyBlock = ({ title, description, images, ratioClass, reverse, isIconMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="kn-glass-card"
            style={{
                padding: '3rem',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                marginBottom: '5rem',
                borderRadius: '24px'
            }}
        >
            <div className={`hobby-flex ${reverse ? 'reverse' : ''}`}>
                <div className="hobby-text">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: '#1b1b1b', lineHeight: 1.2 }}>
                        {title}
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                        {description}
                    </p>
                </div>

                <div className={`hobby-carousel-wrapper ${ratioClass}`} style={isIconMode ? { background: '#f5f5f5', padding: '2rem', display: 'flex', alignItems: 'center' } : {}}>
                    <Swiper
                        modules={[Autoplay, EffectFade, Pagination]}
                        effect="fade"
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {images.map((src, idx) => (
                            <SwiperSlide key={idx} style={isIconMode ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}}>
                                <img
                                    src={src}
                                    alt={`${title} highlight ${idx + 1}`}
                                    className="hobby-image"
                                    style={isIconMode ? { objectFit: 'contain', maxHeight: '150px', maxWidth: '80%' } : {}}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </motion.div>
    );
};

// Premium Custom Music Player Block with Native Engine
const MusicPlayerBlock = ({ title, description, reverse }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // Persistent Native Audio Engine
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize engine if it doesn't exist
        if (!audioRef.current) {
            audioRef.current = new Audio();
        }

        const audio = audioRef.current;
        const currentSong = playlist[currentSongIndex];

        // Stop current playing audio
        audio.pause();
        audio.src = currentSong.src;
        audio.load();

        if (isPlaying) {
            setIsLoading(true);
            audio.play()
                .then(() => setIsLoading(false))
                .catch(e => {
                    console.error("Audio play failed:", e);
                    setIsLoading(false);
                    setIsPlaying(false);
                });
        }

        // --- Event Listeners ---
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
            setIsLoading(false);
        };
        const handleEnded = () => playNext();
        const handleWaiting = () => setIsLoading(true);
        const handlePlaying = () => setIsLoading(false);

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('waiting', handleWaiting);
        audio.addEventListener('playing', handlePlaying);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('waiting', handleWaiting);
            audio.removeEventListener('playing', handlePlaying);
        };
    }, [currentSongIndex]);

    // Independent Play/Pause Sync
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying && audio.paused) {
            setIsLoading(true);
            audio.play().catch(() => setIsPlaying(false)).finally(() => setIsLoading(false));
        } else if (!isPlaying && !audio.paused) {
            audio.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const playSong = (index) => {
        if (currentSongIndex === index) {
            togglePlay();
        } else {
            setCurrentSongIndex(index);
            setIsPlaying(true);
            setIsLoading(true);
        }
    };

    const playNext = () => {
        const nextIndex = currentSongIndex < playlist.length - 1 ? currentSongIndex + 1 : 0;
        playSong(nextIndex);
    };

    const playPrev = () => {
        if (audioRef.current && audioRef.current.currentTime > 3) {
            // If more than 3 sec in, just restart song
            audioRef.current.currentTime = 0;
        } else {
            const prevIndex = currentSongIndex > 0 ? currentSongIndex - 1 : playlist.length - 1;
            playSong(prevIndex);
        }
    };

    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const currentSong = playlist[currentSongIndex];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="kn-glass-card"
            style={{
                padding: '3rem',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                marginBottom: '5rem',
                borderRadius: '24px'
            }}
        >
            <div className={`hobby-flex ${reverse ? 'reverse' : ''}`}>
                <div className="hobby-text">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: '#1b1b1b', lineHeight: 1.2 }}>
                        {title}
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                        {description}
                    </p>
                </div>

                <div className="aesthetic-music-player" style={{
                    width: '100%',
                    maxWidth: '450px',
                    background: 'linear-gradient(145deg, #1b1b1b, #2a2a2a)',
                    borderRadius: '24px',
                    padding: '2rem',
                    color: '#ffffff',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    pointerEvents: 'auto' // ensure it's clickable regardless of heroes
                }}>

                    {/* Loading Overlay */}
                    {isLoading && (
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'rgba(212, 175, 55, 0.2)', overflow: 'hidden' }}>
                            <div className="music-loader-bar" style={{ height: '100%', width: '30%', background: '#D4AF37', animation: 'music-loading 1.5s infinite linear' }}></div>
                        </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div style={{
                            width: '100px', height: '100px', borderRadius: '50%', background: 'conic-gradient(#D4AF37, #f39c12, #D4AF37)',
                            animation: isPlaying && !isLoading ? 'spin 4s linear infinite' : 'none',
                            border: '5px solid #111', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.3s', flexShrink: 0
                        }}>
                            <div style={{ width: '30px', height: '30px', background: '#111', borderRadius: '50%' }}></div>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{currentSong.title}</h3>
                            <p style={{ color: '#aaa', margin: '4px 0 10px 0', fontSize: '0.9rem' }}>{currentSong.artist}</p>

                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <button
                                    onClick={playPrev}
                                    style={{ background: 'transparent', color: '#D4AF37', border: 'none', cursor: 'pointer', padding: 0 }}
                                    className="hover:scale-110 transition-transform"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                                </button>

                                <button
                                    onClick={togglePlay}
                                    disabled={isLoading}
                                    style={{ background: '#D4AF37', color: '#111', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: isLoading ? 'wait' : 'pointer', opacity: isLoading ? 0.7 : 1 }}
                                    className="hover:scale-110 transition-transform"
                                >
                                    {isPlaying ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zm8 0h4v16h-4z" /></svg>
                                    ) : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                    )}
                                </button>

                                <button
                                    onClick={playNext}
                                    style={{ background: 'transparent', color: '#D4AF37', border: 'none', cursor: 'pointer', padding: 0 }}
                                    className="hover:scale-110 transition-transform"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Scrubbing Timeline */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#888', marginBottom: '8px', fontWeight: 600 }}>
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                        <div className="music-timeline-container">
                            <input
                                type="range"
                                min="0"
                                max={duration || 100}
                                value={currentTime}
                                onChange={handleSeek}
                                className="music-scrubber"
                                style={{
                                    background: `linear-gradient(to right, #D4AF37 ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.1) ${(currentTime / (duration || 1)) * 100}%)`
                                }}
                            />
                        </div>
                    </div>

                    {/* Playlist Sequence */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {playlist.map((song, i) => (
                            <div
                                key={i}
                                onClick={() => playSong(i)}
                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 15px', background: currentSongIndex === i ? 'rgba(212, 175, 55, 0.1)' : 'transparent', border: currentSongIndex === i ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent', borderRadius: '12px', transition: 'all 0.3s', cursor: 'pointer' }}
                                className="hover:bg-white/5"
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '20px', textAlign: 'center', color: currentSongIndex === i ? '#D4AF37' : '#666' }}>
                                        {currentSongIndex === i && isPlaying ? (
                                            <div className="music-playing-bars">
                                                <span></span><span></span><span></span>
                                            </div>
                                        ) : (
                                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{i + 1}</span>
                                        )}
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '0.95rem', color: currentSongIndex === i ? '#fff' : '#ccc', fontWeight: currentSongIndex === i ? 700 : 500 }}>{song.title}</h4>
                                        <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#777' }}>{song.artist}</p>
                                    </div>
                                </div>
                                <span style={{ color: currentSongIndex === i ? '#D4AF37' : '#666', fontSize: '0.85rem', fontWeight: 600 }}>{song.duration}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Hobbies = () => {
    return (
        <div className="karma-navigator-page contact-redesign" style={{
            minHeight: '90vh',
            padding: '2rem 5%',
            backgroundColor: '#ffffff',
            color: '#1b1b1b',
            '--bg-color': '#ffffff',
            '--text-primary': '#1b1b1b',
            '--text-secondary': '#4a4a4a'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ textAlign: 'center', marginBottom: '6rem' }}
            >
                <div className="kn-title-wrapper" style={{ justifyContent: 'center' }}>
                    <h1 className="kn-title" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', color: '#000000' }}>My Hobbies & Interests</h1>
                </div>
                <p className="kn-subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#4a4a4a' }}>
                    When I'm not bringing visions to life through code, here is where my passions and creativity converge.
                </p>
            </motion.div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                <HobbyBlock
                    title="Website Development"
                    description="Creating stunning, highly optimized, and incredibly functional web applications is more than a job—it's a passion. I love exploring the limits of modern front-end design, working on beautiful architectures like component-driven designs, and building interfaces that wow users."
                    images={webDevImages}
                    ratioClass="ratio-16-9"
                    reverse={false}
                />

                <HobbyBlock
                    title="App Development"
                    description="Taking an idea and putting it into the hands of a user anywhere in the world. I enjoy building native and cross-platform mobile apps with a laser focus on smooth animations, seamless UX, and strong backend architectures."
                    images={appDevImages}
                    ratioClass="ratio-9-16"
                    reverse={true}
                />

                <HobbyBlock
                    title="SaaS Development"
                    description="Pioneering systems that scale perfectly and run a business. I build modular software-as-a-service architectures, focusing heavily on secure multi-tenant backends, crisp dashboards, and premium feature delivery methods."
                    images={saasImages}
                    ratioClass="ratio-16-9"
                    reverse={false}
                />

                <MusicPlayerBlock
                    title="Music Listening"
                    description="An endless fascination spanning genres and artists. Great music heavily amplifies productivity and focus, acting as a constant creative backdrop that drives logic, imagination, and day-to-day workflow."
                    reverse={true}
                />

                <HobbyBlock
                    title="Gaming"
                    description="Experiencing bleeding-edge digital art and technical engine marvels. Valuing the strategy in Valorant, creative expressions in Roblox, fast-paced action in Free Fire Mobile, and open-world immersion in Grand Theft Auto 5."
                    images={gamingImages}
                    ratioClass="ratio-16-9"
                    reverse={false}
                    isIconMode={true}
                />


            </div>
        </div>
    )
}

export default Hobbies
