import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { skills } from '../data/projects';
import {
    Server, Database, Cloud, Shield,
    Cpu, GitBranch, Layers, Zap
} from 'lucide-react';
import './Skills.css';

/* Map category names → icons + accent colors */
const categoryMeta = {
    'Languages':       { icon: <Cpu size={20} />,       color: '#38bdf8', glow: 'rgba(56,189,248,0.15)'  },
    'Frameworks':      { icon: <Layers size={20} />,    color: '#818cf8', glow: 'rgba(129,140,248,0.15)' },
    'Databases':       { icon: <Database size={20} />,  color: '#34d399', glow: 'rgba(52,211,153,0.15)'  },
    'DevOps':          { icon: <Cloud size={20} />,     color: '#fb923c', glow: 'rgba(251,146,60,0.15)'  },
    'Tools':           { icon: <GitBranch size={20} />, color: '#f472b6', glow: 'rgba(244,114,182,0.15)' },
    'Security':        { icon: <Shield size={20} />,    color: '#a78bfa', glow: 'rgba(167,139,250,0.15)' },
    'Architecture':    { icon: <Server size={20} />,    color: '#fbbf24', glow: 'rgba(251,191,36,0.15)'  },
    'Performance':     { icon: <Zap size={20} />,       color: '#f87171', glow: 'rgba(248,113,113,0.15)' },
};

/* Fallback for unlisted categories */
const fallback = { icon: <Cpu size={20} />, color: '#38bdf8', glow: 'rgba(56,189,248,0.15)' };

/* ── Skill Progress Bar ── */
const SkillBar = ({ skill, index, color }) => (
    <motion.div
        className="skill-bar-row"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 + index * 0.06 }}
        viewport={{ once: true }}
    >
        <div className="skill-bar-label">
            <span className="skill-bar-name">{skill.name ?? skill}</span>
            {skill.level && (
                <span className="skill-bar-pct" style={{ color }}>
                    {skill.level}%
                </span>
            )}
        </div>
        {skill.level && (
            <div className="skill-bar-track">
                <motion.div
                    className="skill-bar-fill"
                    style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.06, ease: 'easeOut' }}
                    viewport={{ once: true }}
                />
            </div>
        )}
    </motion.div>
);

/* ── Skill Tag (pill) ── */
const SkillTag = ({ skill, index, color, glow }) => (
    <motion.span
        className="skill-tag"
        style={{ '--tag-color': color, '--tag-glow': glow }}
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 + index * 0.05, type: 'spring', stiffness: 260 }}
        whileHover={{ scale: 1.1, y: -2 }}
        viewport={{ once: true }}
    >
        {skill.name ?? skill}
    </motion.span>
);

/* ── Single Skill Card ── */
const SkillCard = ({ category, index }) => {
    const meta  = categoryMeta[category.name] ?? fallback;
    const hasBars = category.items.some(i => i.level !== undefined);

    return (
        <motion.div
            className="skill-card"
            style={{ '--card-color': meta.color, '--card-glow': meta.glow }}
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.08, duration: 0.55, type: 'spring', stiffness: 120 }}
            whileHover="hover"
            viewport={{ once: true, amount: 0.15 }}
        >
            {/* Glint sweep */}
            <motion.div
                className="card-glint"
                variants={{
                    hover: { x: ['−100%', '200%'], opacity: [0, 0.6, 0] },
                }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
            />

            {/* Glow spot */}
            <div className="card-glow-spot" />

            {/* Header */}
            <div className="skill-card-header">
                <motion.div
                    className="skill-icon-wrap"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                >
                    {meta.icon}
                </motion.div>

                <div className="skill-card-title-block">
                    <h3 className="skill-category">{category.name}</h3>
                    <span className="skill-count">
                        {category.items.length} skill{category.items.length !== 1 ? 's' : ''}
                    </span>
                </div>

                {/* Corner accent */}
                <div className="card-corner-badge">
                    <motion.div
                        className="corner-dot"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                    />
                </div>
            </div>

            {/* Divider */}
            <motion.div
                className="card-divider"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
            />

            {/* Skills: bars or pills */}
            <div className="skill-items">
                {hasBars
                    ? category.items.map((skill, i) => (
                        <SkillBar
                            key={skill.name ?? skill}
                            skill={skill}
                            index={i}
                            color={meta.color}
                        />
                    ))
                    : category.items.map((skill, i) => (
                        <SkillTag
                            key={skill.name ?? skill}
                            skill={skill}
                            index={i}
                            color={meta.color}
                            glow={meta.glow}
                        />
                    ))
                }
            </div>
        </motion.div>
    );
};

/* ══════════════════════════════
   MAIN COMPONENT
══════════════════════════════ */
const Skills = () => {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
    const titleX = useTransform(smoothProgress, [0, 1], [-40, 40]);

    const totalSkills = skills.reduce((acc, c) => acc + c.items.length, 0);

    return (
        <section id="skills" className="section skills-section">

            {/* Ambient background blobs */}
            <div className="skills-bg">
                <div className="skills-blob blob-a" />
                <div className="skills-blob blob-b" />
            </div>

            <div className="container">

                {/* ── Section Header ── */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <motion.span className="section-eyebrow">
                        Technical Expertise
                    </motion.span>

                    <motion.h2
                        className="section-title"
                        style={{ x: titleX }}
                    >
                        Backend{' '}
                        <span className="gradient-text">Arsenal</span>
                    </motion.h2>

                    <p className="section-desc">
                        Battle-tested tools and technologies I use to craft
                        robust, scalable backend architectures.
                    </p>

                    {/* Quick stat pills */}
                    <motion.div
                        className="header-stats"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="header-stat">
                            <strong>{skills.length}</strong>
                            <span>Categories</span>
                        </div>
                        <div className="header-stat-sep" />
                        <div className="header-stat">
                            <strong>{totalSkills}+</strong>
                            <span>Technologies</span>
                        </div>
                        <div className="header-stat-sep" />
                        <div className="header-stat">
                            <strong>3+</strong>
                            <span>Years Mastery</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── Skills Grid ── */}
                <div className="skills-grid">
                    {skills.map((category, index) => (
                        <SkillCard
                            key={category.name}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                {/* <motion.div
                    className="skills-footer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p>Always learning — currently exploring</p>
                    {['Rust', 'WebAssembly', 'eBPF'].map((tech, i) => (
                        <motion.span
                            key={tech}
                            className="learning-badge"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.08 }}
                        >
                            🚀 {tech}
                        </motion.span>
                    ))}
                </motion.div> */}
            </div>
        </section>
    );
};

export default Skills;