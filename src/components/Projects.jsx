// Projects.jsx
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, X, ArrowUpRight, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
    const [selected, setSelected] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    return (
        <section id="projects" className="ps" ref={sectionRef}>

            {/* ── Ambient background ── */}
            <motion.div className="ps-ambient" style={{ y: bgY }}>
                <div className="ambient-blob blob-1" />
                <div className="ambient-blob blob-2" />
                <div className="ambient-blob blob-3" />
            </motion.div>

            <div className="ps-container">

                {/* ══ HEADER ══ */}
                <motion.div
                    className="ps-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="ps-eyebrow">
                        <span className="eyebrow-line" />
                        <span className="eyebrow-text">Portfolio</span>
                        <span className="eyebrow-line" />
                    </div>
                    <h2 className="ps-title">
                        Selected <br />
                        <span className="ps-title-accent">Projects</span>
                    </h2>
                    <p className="ps-subtitle">
                        A curated collection of things I've designed,
                        engineered, and shipped.
                    </p>
                </motion.div>

                {/* ══ GRID ══ */}
                <div className="ps-grid">

                    {/* ── Featured card (index 0) ── */}
                    {projects[0] && (
                        <motion.div
                            className="pc pc-featured"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            onMouseEnter={() => setHoveredId(projects[0].id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => setSelected(projects[0])}
                        >
                            <CardInner
                                project={projects[0]}
                                index={0}
                                hovered={hoveredId === projects[0].id}
                                featured
                            />
                        </motion.div>
                    )}

                    {/* ── Right column: two stacked ── */}
                    <div className="ps-col">
                        {projects.slice(1, 3).map((project, i) => (
                            <motion.div
                                key={project.id}
                                className="pc pc-half"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.12 * (i + 1) }}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => setSelected(project)}
                            >
                                <CardInner
                                    project={project}
                                    index={i + 1}
                                    hovered={hoveredId === project.id}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* ── Bottom row: remaining cards ── */}
                    {projects.slice(3).map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="pc pc-third"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, delay: 0.1 * i }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => setSelected(project)}
                        >
                            <CardInner
                                project={project}
                                index={i + 3}
                                hovered={hoveredId === project.id}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* ══ COUNT BAR ══ */}
                <motion.div
                    className="ps-count-bar"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="count-label">
                        {projects.length} projects
                    </span>
                    <div className="count-track">
                        <motion.div
                            className="count-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* ══ MODAL ══ */}
            <AnimatePresence>
                {selected && (
                    <ProjectModal
                        project={selected}
                        onClose={() => setSelected(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

/* ─────────────────────────────────────────────
   Card inner — shared between all card sizes
───────────────────────────────────────────── */
const CardInner = ({ project, index, hovered, featured = false }) => (
    <div className="pc-inner">

        {/* Image layer */}
        <div className="pc-media">
            <motion.img
                src={project.image}
                alt={project.title}
                className="pc-img"
                animate={{
                    scale: hovered ? 1.08 : 1,
                    filter: hovered
                        ? 'brightness(0.25) saturate(0.5)'
                        : 'brightness(0.45) saturate(0.7)',
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <div className="pc-gradient" />
        </div>

        {/* Noise texture */}
        <div className="pc-noise" />

        {/* Top row */}
        <div className="pc-head">
            <span className="pc-num">
                {String(index + 1).padStart(2, '0')}
            </span>
            <motion.div
                className="pc-eye-btn"
                animate={{
                    opacity: hovered ? 1 : 0,
                    scale: hovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.25 }}
            >
                <Eye size={14} />
                <span>View</span>
            </motion.div>
        </div>

        {/* Bottom content */}
        <div className="pc-foot">

            {/* Tags */}
            <motion.div
                className="pc-tags"
                animate={{
                    opacity: hovered ? 1 : 0.6,
                    y: hovered ? 0 : 4,
                }}
                transition={{ duration: 0.3 }}
            >
                {project.tags.slice(0, featured ? 4 : 2).map(tag => (
                    <span key={tag} className="pc-tag">{tag}</span>
                ))}
            </motion.div>

            <div className="pc-title-row">
                <h3 className={`pc-title ${featured ? 'pc-title-lg' : ''}`}>
                    {project.title}
                </h3>
                <motion.span
                    className="pc-arrow"
                    animate={{
                        x: hovered ? 0 : -8,
                        y: hovered ? 0 : 8,
                        opacity: hovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                >
                    <ArrowUpRight size={featured ? 22 : 18} />
                </motion.span>
            </div>

            {/* Description — only on hover for non-featured, always for featured */}
            <motion.p
                className="pc-desc"
                animate={{
                    opacity: hovered ? 1 : featured ? 0.7 : 0,
                    y: hovered ? 0 : 8,
                    height: hovered ? 'auto' : featured ? 'auto' : 0,
                }}
                transition={{ duration: 0.35 }}
            >
                {project.description}
            </motion.p>
        </div>
    </div>
);

/* ─────────────────────────────────────────────
   Modal
───────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
    // close on backdrop click
    const handleBackdrop = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <>
            {/* Backdrop */}
            <motion.div
                className="pm-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleBackdrop}
            />

            {/* Sheet */}
            <motion.div
                className="pm"
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 60, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                role="dialog"
                aria-modal="true"
                aria-label={project.title}
            >
                {/* Hero */}
                <div className="pm-hero">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="pm-hero-img"
                    />
                    <div className="pm-hero-overlay" />

                    {/* Close */}
                    <button
                        className="pm-close"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <X size={18} />
                    </button>

                    {/* Hero title */}
                    <div className="pm-hero-title">
                        <h3>{project.title}</h3>
                    </div>
                </div>

                {/* Body */}
                <div className="pm-body">
                    <p className="pm-desc">{project.description}</p>

                    {/* Tags */}
                    <div className="pm-section">
                        <p className="pm-section-label">Tech Stack</p>
                        <div className="pm-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="pm-tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="pm-actions">
                        <a
                            href={project.github}
                            className="pm-btn pm-btn-ghost"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github size={16} />
                            <span>Source Code</span>
                        </a>
                        <a
                            href={project.link}
                            className="pm-btn pm-btn-solid"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;