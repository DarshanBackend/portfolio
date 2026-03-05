import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, ChevronDown, Terminal, Copy, Check } from 'lucide-react';
import { projects } from '../data/projects';
import './ProjectDetails.css';

const syntaxHighlight = (json) => {
    const str = JSON.stringify(json, null, 2);
    return str.replace(
        /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
        (match) => {
            let cls = 'json-number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'json-key';
                } else {
                    cls = 'json-string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'json-boolean';
            } else if (/null/.test(match)) {
                cls = 'json-null';
            }
            return `<span class="${cls}">${match}</span>`;
        }
    );
};

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeEndpoint, setActiveEndpoint] = useState(null);
    const [copied, setCopied] = useState(false);

    const project = projects.find(p => String(p.id) === id);

    useEffect(() => {
        if (!project) {
            navigate('/projects');
        }
        window.scrollTo(0, 0);
    }, [project, navigate]);

    const handleEndpointClick = (catIndex, epIndex) => {
        const key = `${catIndex}-${epIndex}`;
        setActiveEndpoint(activeEndpoint === key ? null : key);
        setCopied(false);
    };

    const handleCopy = (json) => {
        navigator.clipboard.writeText(JSON.stringify(json, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!project) return null;

    return (
        <motion.div
            className="pd-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="pd-content-wrapper">
                {/* Back Button */}
                <motion.button
                    onClick={() => {
                        navigate('/');
                        setTimeout(() => {
                            const el = document.getElementById('projects');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }}
                    className="pd-back-btn"
                    whileHover={{ x: -4 }}
                >
                    <ArrowLeft size={16} />
                    <span>Back to all projects</span>
                </motion.button>

                {/* Header */}
                <header className="pd-header">
                    <motion.h1
                        className="pd-title"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        {project.title}
                    </motion.h1>

                    <motion.div
                        className="pd-tags"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {project.tags.map(tag => (
                            <span key={tag} className="pd-tag">{tag}</span>
                        ))}
                    </motion.div>
                </header>

                {/* Hero Image */}
                <motion.div
                    className="pd-hero-image-container"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <img src={project.image} alt={project.title} className="pd-hero-image" />
                    <div className="pd-overlay-gradient" />
                </motion.div>

                {/* Details Grid */}
                <div className="pd-details-grid">
                    {/* Left Column: Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="pd-subtitle">Project Overview</div>
                        <p className="pd-description">
                            {project.description}
                        </p>

                        <div className="pd-subtitle">Key Features</div>
                        <p className="pd-description">
                            This project was built with a focus on performance and scalability.
                            Leveraging modern architectural patterns, it ensures a seamless user experience while maintaining robust backend operations.
                            The system handles complex logic efficiently, making it a reliable solution for real-world scenarios.
                        </p>

                        {/* API Architecture Flow */}
                        {project.apiFlow && (
                            <div className="pd-api-flow">
                                <div className="pd-subtitle">API Architecture & Workflow</div>
                                <p className="pd-api-hint">
                                    <Terminal size={14} />
                                    Click on any endpoint to view its sample response
                                </p>
                                <div className="pd-api-grid">
                                    {project.apiFlow.map((flow, catIndex) => (
                                        <div key={catIndex} className="pd-api-category">
                                            <h3 className="pd-api-cat-title">{flow.category}</h3>
                                            <p className="pd-api-cat-desc">{flow.description}</p>
                                            <div className="pd-endpoint-list">
                                                {flow.endpoints.map((ep, epIndex) => {
                                                    const key = `${catIndex}-${epIndex}`;
                                                    const isActive = activeEndpoint === key;
                                                    const response = ep.response;

                                                    return (
                                                        <div key={epIndex} className="pd-endpoint-wrapper">
                                                            <div
                                                                className={`pd-endpoint-item ${isActive ? 'pd-endpoint-active' : ''}`}
                                                                onClick={() => handleEndpointClick(catIndex, epIndex)}
                                                            >
                                                                <span className={`pd-method ${ep.method.toLowerCase()}`}>
                                                                    {ep.method}
                                                                </span>
                                                                <div className="pd-ep-details">
                                                                    <span className="pd-ep-name">{ep.name}</span>
                                                                    <span className="pd-ep-url">{ep.url}</span>
                                                                </div>
                                                                {ep.description && (
                                                                    <span className="pd-ep-desc">{ep.description}</span>
                                                                )}
                                                                <ChevronDown
                                                                    size={16}
                                                                    className={`pd-ep-chevron ${isActive ? 'pd-ep-chevron-open' : ''}`}
                                                                />
                                                            </div>

                                                            <AnimatePresence>
                                                                {isActive && (
                                                                    <motion.div
                                                                        className="pd-response-panel"
                                                                        initial={{ height: 0, opacity: 0 }}
                                                                        animate={{ height: 'auto', opacity: 1 }}
                                                                        exit={{ height: 0, opacity: 0 }}
                                                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                                    >
                                                                        <div className="pd-response-header">
                                                                            <div className="pd-response-status">
                                                                                <span className="pd-status-dot"></span>
                                                                                <span>200 OK</span>
                                                                                <span className="pd-response-type">application/json</span>
                                                                            </div>
                                                                            <button
                                                                                className="pd-copy-btn"
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation();
                                                                                    handleCopy(response);
                                                                                }}
                                                                            >
                                                                                {copied ? <Check size={14} /> : <Copy size={14} />}
                                                                                {copied ? 'Copied!' : 'Copy'}
                                                                            </button>
                                                                        </div>
                                                                        <pre
                                                                            className="pd-response-body"
                                                                            dangerouslySetInnerHTML={{ __html: syntaxHighlight(response) }}
                                                                        />
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Right Column: Sidebar */}
                    <motion.aside
                        className="pd-sidebar"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="pd-info-group">
                            <div className="pd-info-label">Categories</div>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-sm text-gray-400">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="pd-info-group">
                            <div className="pd-info-label">Platform</div>
                            <div className="text-gray-300 font-medium">Web / API</div>
                        </div>

                        <div className="pd-links-container">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="pd-link-btn pd-link-primary"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="pd-link-btn"
                            >
                                <Github size={18} />
                                View Source
                            </a>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;

