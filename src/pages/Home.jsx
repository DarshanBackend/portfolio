import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import AllProjects from '../pages/AllProjects';
import ContactPage from '../components/Contact';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight, Server, Database,
    Zap, Shield, Globe, GitBranch
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';

/* ── Floating metric cards data ── */
const metrics = [
    { icon: <Server size={16} />, value: '14+', label: 'Systems Built', color: '#38bdf8' },
    { icon: <Database size={16} />, value: '50+', label: 'APIs Designed', color: '#818cf8' },
    { icon: <Zap size={16} />, value: '10ms', label: 'Avg Latency', color: '#34d399' },
    { icon: <Shield size={16} />, value: '99.9%', label: 'Uptime SLA', color: '#fb923c' },
    { icon: <GitBranch size={16} />, value: '200+', label: 'Commits / Mo', color: '#a78bfa' },
];

/* ── Animated counter pill ── */
const MetricPill = ({ icon, value, label, color, index }) => (
    <motion.div
        className="metric-pill"
        style={{ '--pill-color': color }}
        initial={{ opacity: 0, y: 30, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
            delay: 0.15 + index * 0.08,
            type: 'spring',
            stiffness: 200,
            damping: 18,
        }}
        whileHover={{ y: -5, scale: 1.06 }}
        viewport={{ once: true }}
    >
        <span className="pill-icon">{icon}</span>
        <div className="pill-body">
            <strong className="pill-value">{value}</strong>
            <span className="pill-label">{label}</span>
        </div>
    </motion.div>
);

/* ── Orbiting tag ── */
const OrbitTag = ({ text, angle, radius, duration, delay }) => {
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    return (
        <motion.div
            className="orbit-tag"
            style={{ '--ox': `${x}px`, '--oy': `${y}px` }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{
                y: [y, y - 8, y],
                x: [x, x + 4, x],
            }}
            transition={{
                delay,
                type: 'spring',
                stiffness: 180,
                y: { duration, repeat: Infinity, ease: 'easeInOut', delay },
                x: { duration: duration * 1.3, repeat: Infinity, ease: 'easeInOut', delay },
            }}
            viewport={{ once: true }}
        >
            {text}
        </motion.div>
    );
};

const orbitTags = [
    { text: 'Node.js', angle: -30, radius: 160, duration: 6, delay: 0.2 },
    { text: 'PostgreSQL', angle: 30, radius: 175, duration: 7, delay: 0.4 },
    { text: 'MongoDB', angle: 60, radius: 190, duration: 8, delay: 0.6 },
    { text: 'Postman', angle: 90, radius: 205, duration: 9, delay: 0.8 },
    { text: 'Git', angle: 120, radius: 220, duration: 10, delay: 1 },
];

/* ══════════════════════════════
   HOME PAGE
══════════════════════════════ */
const Home = () => {
    const { scrollYProgress } = useScroll();
    const ctaBgY = useTransform(scrollYProgress, [0.6, 1], [60, -60]);
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <div id="home">
            <Hero />
            <Experience />

            <section id="projects">
                <AllProjects />
            </section>

            <Skills />

            {/* ══════════════════════════════
                CTA SECTION
            ══════════════════════════════ */}
            <section className="cta-section" id="cta">

                {/* Layered backgrounds */}
                <div className="cta-bg">
                    <motion.div className="cta-bg-layer" style={{ y: ctaBgY }} />
                    <div className="cta-grid" />
                    <div className="cta-blob cta-blob-a" />
                    <div className="cta-blob cta-blob-b" />
                    <div className="cta-blob cta-blob-c" />
                    <div className="cta-scanline" />
                </div>

                <div className="cta-container">

                    {/* ── Left: Visual Orb ── */}
                    <motion.div
                        className="cta-visual"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Central orb */}
                        <div className="cta-orb-wrap">
                            <motion.div
                                className="cta-orb"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    boxShadow: [
                                        '0 0 40px rgba(56,189,248,0.2)',
                                        '0 0 80px rgba(129,140,248,0.35)',
                                        '0 0 40px rgba(56,189,248,0.2)',
                                    ],
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <motion.div
                                    className="cta-orb-inner"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                >
                                    <div className="orb-arc arc-1" />
                                    <div className="orb-arc arc-2" />
                                    <div className="orb-arc arc-3" />
                                </motion.div>

                                {/* Center content */}
                                <div className="orb-center">
                                    <Server size={36} />
                                    <span>14+</span>
                                    <span className="orb-sub">Projects</span>
                                </div>
                            </motion.div>

                            {/* Orbit tags */}
                            <div className="orbit-tags-wrap">
                                {orbitTags.map((t) => (
                                    <OrbitTag key={t.text} {...t} />
                                ))}
                            </div>

                            {/* Ring pulses */}
                            {[1, 2, 3].map((r) => (
                                <motion.div
                                    key={r}
                                    className={`cta-ring cta-ring-${r}`}
                                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.15, 0.4] }}
                                    transition={{
                                        duration: 3 + r,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: r * 0.6,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: Content ── */}
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        {/* Eyebrow */}
                        <motion.span
                            className="cta-eyebrow"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <span className="eyebrow-dot" />
                            Project Portfolio
                        </motion.span>

                        {/* Headline */}
                        <motion.h2
                            className="cta-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            I've Built{' '}
                            <span className="cta-highlight">
                                14+ Scalable
                                <svg className="underline-svg" viewBox="0 0 300 12" preserveAspectRatio="none">
                                    <motion.path
                                        d="M0,10 Q75,0 150,8 Q225,16 300,6"
                                        stroke="url(#uGrad)"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ delay: 0.8, duration: 0.9, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                    />
                                    <defs>
                                        <linearGradient id="uGrad" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#38bdf8" />
                                            <stop offset="100%" stopColor="#818cf8" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>{' '}
                            Systems
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="cta-desc"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            From high-concurrency OTT platforms to complex e-commerce
                            engines — explore the full architecture breakdowns, tech
                            decisions, and performance benchmarks.
                        </motion.p>

                        {/* Metric pills */}
                        <div className="metrics-grid">
                            {metrics.map((m, i) => (
                                <MetricPill key={m.label} {...m} index={i} />
                            ))}
                        </div>

                        {/* CTA Buttons - Removed Explore All to avoid confusion since it's already on page */}
                        {/* 
                            <motion.div ...>
                                <Link to="/projects" ...>Explore All Projects</Link>
                            </motion.div> 
                        */}

                        {/* Social proof strip */}
                        <motion.div
                            className="social-proof"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="proof-avatars">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`proof-avatar av-${i}`} />
                                ))}
                            </div>
                            <p>
                                <strong>Trusted by 20+ clients</strong>{' '}
                                across 8 countries
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section id="contact">
                <ContactPage />
            </section>
        </div>
    );
};

export default Home;