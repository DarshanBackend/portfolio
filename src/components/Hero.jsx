import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../data/projects';
import { Database, Server, Terminal, Code, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const techStack = [
        { icon: <Database size={18} />, label: 'PostgreSQL' },
        { icon: <Server size={18} />, label: 'Node.js' },
        { icon: <Code size={18} />, label: 'REST APIs' },
        { icon: <Terminal size={18} />, label: 'Docker' },
    ];

    const floatingCards = [
        {
            id: 1,
            icon: <Database size={22} />,
            title: 'Database Cluster',
            value: '99.9%',
            label: 'Uptime',
            color: 'card-blue',
            delay: 0,
        },
        {
            id: 2,
            icon: <Server size={22} />,
            title: 'API Gateway',
            value: '50+',
            label: 'APIs Built',
            color: 'card-purple',
            delay: 0.2,
        },
        {
            id: 3,
            icon: <Code size={22} />,
            title: 'Microservices',
            value: '10ms',
            label: 'Avg Response',
            color: 'card-green',
            delay: 0.4,
        },
    ];

    return (
        <section id="home" className="hero-section">
            {/* Animated Background */}
            <div className="hero-bg">
                <div className="hero-bg-grid" />
                <div className="hero-bg-orb orb-1" />
                <div className="hero-bg-orb orb-2" />
                <div className="hero-bg-orb orb-3" />
                <div className="hero-bg-noise" />
            </div>

            <div className="hero-wrapper">
                <div className="hero-container">

                    {/* ── LEFT CONTENT ── */}
                    <motion.div
                        className="hero-content"
                        style={{ y: y1, opacity }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="role-badge"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="badge-dot" />
                            <Terminal size={13} />
                            <span>Backend Developer</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            Hi, I'm{' '}
                            <span className="gradient-text">
                                {personalInfo.name}
                            </span>
                            <span className="title-line">
                                I Build{' '}
                                <span className="highlight-text">Scalable</span>{' '}
                                Systems
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {personalInfo.description}
                        </motion.p>

                        {/* Tech Stack Pills */}
                        <motion.div
                            className="tech-pills"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45 }}
                        >
                            {techStack.map((tech, i) => (
                                <motion.span
                                    key={tech.label}
                                    className="tech-pill"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                >
                                    {tech.icon}
                                    {tech.label}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="hero-stats"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="stat-item">
                                <span className="stat-number">{personalInfo.experience}</span>
                                <span className="stat-label">Experience</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">APIs Built</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-number">99.9%</span>
                                <span className="stat-label">Uptime</span>
                            </div>
                        </motion.div>

                        {/* CTA + Social */}
                        <motion.div
                            className="hero-actions"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.75 }}
                        >
                            <a href="#projects" className="btn btn-primary">
                                View My Work
                                <ArrowRight size={16} />
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div
                            className="social-links"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            <a href={personalInfo.github || '#'} className="social-link" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href={personalInfo.linkedin || '#'} className="social-link" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
                                <Mail size={18} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT VISUAL ── */}
                    <motion.div
                        className="hero-visual"
                        style={{ y: y2 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {/* Central Orb */}
                        <div className="visual-orb-wrapper">
                            <motion.div
                                className="visual-orb"
                                animate={{ scale: [1, 1.06, 1], rotate: [0, 5, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <div className="orb-inner">
                                    <Server size={52} />
                                    <span>Backend</span>
                                    <span className="orb-sub">Architecture</span>
                                </div>
                                <div className="orb-ring ring-1" />
                                <div className="orb-ring ring-2" />
                                <div className="orb-ring ring-3" />
                            </motion.div>

                            {/* Orbiting Dots */}
                            {[0, 1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    className="orbit-dot"
                                    style={{ '--i': i }}
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 10 + i * 2,
                                        repeat: Infinity,
                                        ease: 'linear',
                                        delay: i * 0.5,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Floating Info Cards */}
                        {floatingCards.map((card) => (
                            <motion.div
                                key={card.id}
                                className={`float-card float-card-${card.id} ${card.color}`}
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, card.id % 2 === 0 ? 12 : -12, 0],
                                }}
                                transition={{
                                    opacity: { delay: 0.8 + card.delay, duration: 0.5 },
                                    scale: { delay: 0.8 + card.delay, duration: 0.5 },
                                    y: {
                                        delay: 1 + card.delay,
                                        duration: 4 + card.id,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    },
                                }}
                                whileHover={{ scale: 1.07, zIndex: 20 }}
                            >
                                <div className="float-card-icon">{card.icon}</div>
                                <div className="float-card-info">
                                    <span className="float-card-title">{card.title}</span>
                                    <div className="float-card-meta">
                                        <strong>{card.value}</strong>
                                        <span>{card.label}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Floating Code Snippet */}
                        <motion.div
                            className="code-snippet"
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.7 }}
                        >
                            <div className="snippet-header">
                                <span className="dot red" />
                                <span className="dot yellow" />
                                <span className="dot green" />
                                <span className="snippet-filename">api.js</span>
                            </div>
                            <pre className="snippet-body">
                                <span className="s-keyword">GET </span>
                                <span className="s-string">/api/v1/users</span>
                                {'\n'}
                                <span className="s-key">Status: </span>
                                <span className="s-success">200 OK</span>
                                {'\n'}
                                <span className="s-key">Time: </span>
                                <span className="s-value">8ms</span>
                            </pre>
                        </motion.div>

                        {/* Status Badge */}
                        <motion.div
                            className="status-badge"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6, type: 'spring' }}
                        >
                            <span className="status-dot" />
                            All systems operational
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ opacity }}
                >
                    <div className="scroll-mouse">
                        <div className="scroll-wheel" />
                    </div>
                    <span>Scroll down</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;