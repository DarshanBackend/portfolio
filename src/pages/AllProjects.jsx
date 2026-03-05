// AllProjects.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Search, X } from 'lucide-react';
import { projects } from '../data/projects';
import './AllProjects.css';

const FILTERS = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags))).slice(0, 6)];

const AllProjects = () => {
    const [search, setSearch] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [hoveredId, setHoveredId] = useState(null);
    const navigate = useNavigate();

    const handleProjectClick = (id) => {
        navigate(`/projects/${id}`);
    };

    const filtered = projects.filter(p => {
        const matchSearch =
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase()) ||
            p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
        const matchFilter =
            activeFilter === 'All' || p.tags.includes(activeFilter);
        return matchSearch && matchFilter;
    });

    return (
        <motion.div
            className="ap-root"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* ── Ambient background ── */}
            <div className="ap-ambient" aria-hidden="true">
                <div className="ap-blob ap-blob-1" />
                <div className="ap-blob ap-blob-2" />
                <div className="ap-blob ap-blob-3" />
                <div className="ap-grid-overlay" />
            </div>

            <div className="ap-container">

                {/* ══ HERO HEADER ══ */}
                <motion.header
                    className="ap-hero"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="ap-hero-eyebrow">
                        <span className="ap-eyebrow-dot" />
                        <span>All Projects</span>
                        <span className="ap-eyebrow-count">{projects.length}</span>
                    </div>

                    <h1 className="ap-hero-title">
                        Everything I've
                        <br />
                        <span className="ap-hero-accent">Built & Shipped</span>
                    </h1>

                    <p className="ap-hero-sub">
                        Every project, every experiment, every deployed system —
                        the full archive of my engineering work.
                    </p>
                </motion.header>

                {/* ══ CONTROLS ══ */}
                <motion.div
                    className="ap-controls"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Search */}
                    <div className="ap-search-wrap">
                        <Search size={15} className="ap-search-icon" />
                        <input
                            type="text"
                            placeholder="Search projects…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="ap-search"
                            aria-label="Search projects"
                        />
                        <AnimatePresence>
                            {search && (
                                <motion.button
                                    className="ap-search-clear"
                                    onClick={() => setSearch('')}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.7 }}
                                    aria-label="Clear search"
                                >
                                    <X size={13} />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Filter pills */}
                    <div className="ap-filters" role="group" aria-label="Filter by tag">
                        {FILTERS.map(f => (
                            <button
                                key={f}
                                className={`ap-filter-pill ${activeFilter === f ? 'ap-filter-active' : ''}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                                {activeFilter === f && (
                                    <motion.span
                                        className="ap-pill-bg"
                                        layoutId="pill-bg"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* ══ RESULTS META ══ */}
                <motion.div
                    className="ap-meta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                >
                    <span className="ap-meta-count">
                        {filtered.length} project{filtered.length !== 1 ? 's' : ''}
                    </span>
                    {(search || activeFilter !== 'All') && (
                        <button
                            className="ap-meta-reset"
                            onClick={() => { setSearch(''); setActiveFilter('All'); }}
                        >
                            Clear filters
                        </button>
                    )}
                </motion.div>

                {/* ══ GRID ══ */}
                <AnimatePresence mode="wait">
                    {filtered.length > 0 ? (
                        <motion.div
                            key="grid"
                            className="ap-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filtered.map((project, index) => (
                                <motion.article
                                    key={project.id}
                                    className={`ap-card ${index === 0 && activeFilter === 'All' && !search ? 'ap-card-featured' : ''}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.45, delay: index * 0.06 }}
                                    onMouseEnter={() => setHoveredId(project.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    layout
                                    onClick={() => handleProjectClick(project.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {/* Image */}
                                    <div className="ap-card-media">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="ap-card-img"
                                            animate={{
                                                scale: hoveredId === project.id ? 1.07 : 1,
                                                filter: hoveredId === project.id
                                                    ? 'brightness(0.22) saturate(0.4)'
                                                    : 'brightness(0.42) saturate(0.65)',
                                            }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <div className="ap-card-gradient" />

                                        {/* Index badge */}
                                        <span className="ap-card-badge">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        {/* Hover CTA */}
                                        <motion.div
                                            className="ap-card-cta"
                                            animate={{
                                                opacity: hoveredId === project.id ? 1 : 0,
                                                y: hoveredId === project.id ? 0 : 10,
                                            }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <span>View Project</span>
                                            <ArrowUpRight size={15} />
                                        </motion.div>
                                    </div>

                                    {/* Body */}
                                    <div className="ap-card-body">
                                        {/* Tags */}
                                        <div className="ap-card-tags">
                                            {project.tags.slice(0, 3).map(tag => (
                                                <span
                                                    key={tag}
                                                    className={`ap-card-tag ${tag === activeFilter ? 'ap-card-tag-active' : ''}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="ap-card-tag-more">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h2 className="ap-card-title">{project.title}</h2>

                                        {/* Description */}
                                        <p className="ap-card-desc">{project.description}</p>

                                        {/* Divider */}
                                        <div className="ap-card-divider" />

                                        {/* Footer */}
                                        <div className="ap-card-footer">
                                            <div className="ap-card-links">
                                                <a
                                                    href={project.github}
                                                    className="ap-link"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label="GitHub repository"
                                                    onClick={e => e.stopPropagation()}
                                                >
                                                    <Github size={15} />
                                                    <span>Code</span>
                                                </a>
                                                <a
                                                    href={project.link}
                                                    className="ap-link ap-link-primary"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label="Live demo"
                                                    onClick={e => e.stopPropagation()}
                                                >
                                                    <ExternalLink size={15} />
                                                    <span>Live</span>
                                                </a>
                                            </div>

                                            {/* Stack dots */}
                                            <div className="ap-stack-dots" aria-hidden="true">
                                                {project.tags.slice(0, 4).map((_, i) => (
                                                    <span
                                                        key={i}
                                                        className="ap-stack-dot"
                                                        style={{ opacity: 1 - i * 0.2 }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    ) : (
                        /* Empty state */
                        <motion.div
                            key="empty"
                            className="ap-empty"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="ap-empty-icon">
                                <Search size={28} />
                            </div>
                            <h3>No projects found</h3>
                            <p>Try a different search term or filter.</p>
                            <button
                                className="ap-empty-btn"
                                onClick={() => { setSearch(''); setActiveFilter('All'); }}
                            >
                                Reset filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ══ FOOTER BAR ══ */}
                <motion.div
                    className="ap-footer-bar"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="ap-footer-line" />
                    <span className="ap-footer-text">
                        {projects.length} projects · always building
                    </span>
                    <div className="ap-footer-line" />
                </motion.div>

            </div>
        </motion.div>
    );
};

export default AllProjects;