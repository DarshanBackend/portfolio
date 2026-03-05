import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import {
    Mail, Linkedin, Github, Twitter,
    Send, MapPin, Clock, CheckCircle,
    ArrowRight, MessageSquare, Phone
} from 'lucide-react';
import { contactInfo } from '../data/projects';
import './Contact.css';

/* ── Contact method cards ── */
const contactMethods = [
    {
        icon: <Mail size={20} />,
        label: 'Email',
        value: contactInfo.email,
        href: `mailto:${contactInfo.email}`,
        color: '#38bdf8',
        glow: 'rgba(56,189,248,0.15)',
        badge: 'Fastest Response',
    },
    {
        icon: <Linkedin size={20} />,
        label: 'LinkedIn',
        value: 'Connect with me',
        href: contactInfo.linkedin,
        color: '#818cf8',
        glow: 'rgba(129,140,248,0.15)',
        badge: 'Professional',
    },
    {
        icon: <Github size={20} />,
        label: 'GitHub',
        value: 'View my code',
        href: contactInfo.github,
        color: '#34d399',
        glow: 'rgba(52,211,153,0.15)',
        badge: 'Open Source',
    },
];

/* ── Status info chips ── */
const statusChips = [
    { icon: <MapPin size={13} />, text: 'Remote — Worldwide' },
    { icon: <Clock size={13} />, text: 'Replies within 24h' },
    { icon: <CheckCircle size={13} />, text: 'Open to opportunities' },
];

/* ── Contact Method Card ── */
const MethodCard = ({ method, index }) => {
    const isMail = method.href.startsWith('mailto:');
    const [copied, setCopied] = useState(false);

    const handleEmailClick = () => {
        if (isMail) {
            navigator.clipboard.writeText(method.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const content = (
        <>
            {/* glow spot */}
            <div className="method-glow" />

            <div className="method-icon-wrap">
                {isMail && copied ? <CheckCircle size={20} color="#4ade80" /> : method.icon}
            </div>

            <div className="method-body">
                <div className="method-top">
                    <span className="method-label">{method.label}</span>
                    <span className="method-badge">
                        {isMail && copied ? 'Copied!' : method.badge}
                    </span>
                </div>
                <span className="method-value">{method.value}</span>
            </div>

            <motion.div
                className="method-arrow"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.3 }}
            >
                {isMail && copied ? <CheckCircle size={16} /> : <ArrowRight size={16} />}
            </motion.div>
        </>
    );

    if (isMail) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, type: 'spring', stiffness: 180 }}
                viewport={{ once: true }}
                style={{ width: '100%' }} // ensure full width like the card
            >
                <a
                    href={method.href}
                    className="method-card"
                    onClick={handleEmailClick}
                    style={{ '--m-color': copied ? '#4ade80' : method.color, '--m-glow': method.glow, display: 'flex' }}
                >
                    {content}
                </a>
            </motion.div>
        );
    }

    return (
        <motion.a
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="method-card"
            style={{ '--m-color': method.color, '--m-glow': method.glow }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1, type: 'spring', stiffness: 180 }}
            whileHover={{ y: -6, scale: 1.02 }}
            viewport={{ once: true }}
        >
            {content}
        </motion.a>
    );
};

/* ── Quick-Contact Form ── */
const QuickForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent

    const handleChange = e =>
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async e => {
        e.preventDefault();
        setStatus('sending');

        // Construct mailto link
        const subject = `Portfolio Contact from ${form.name}`;
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
        const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Simulate sending delay for effect
        await new Promise(r => setTimeout(r, 1000));

        window.location.href = mailtoLink;

        setStatus('sent');
        setTimeout(() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }); }, 3500);
    };

    if (status === 'sent') {
        return (
            <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
            >
                <motion.div
                    className="success-icon"
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                >
                    <CheckCircle size={40} />
                </motion.div>
                <h3>Message Sent!</h3>
                <p>I'll get back to you within 24 hours.</p>
            </motion.div>
        );
    }

    return (
        <form className="quick-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="cf-name">Name</label>
                    <input
                        id="cf-name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cf-email">Email</label>
                    <input
                        id="cf-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="cf-message">Message</label>
                <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <motion.button
                type="submit"
                className="form-submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
            >
                {status === 'sending' ? (
                    <>
                        <span className="spinner" />
                        Sending…
                    </>
                ) : (
                    <>
                        <Send size={16} />
                        Send Message
                    </>
                )}
            </motion.button>
        </form>
    );
};

/* ══════════════════════════════
   MAIN COMPONENT
══════════════════════════════ */
const Contact = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const titleX = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    return (
        <section
            id="contact"
            className="contact-section"
            ref={sectionRef}
        >
            {/* ── Background ── */}
            <div className="contact-bg">
                <motion.div className="contact-bg-layer" style={{ y: bgY }} />
                <div className="contact-grid" />
                <div className="contact-blob blob-left" />
                <div className="contact-blob blob-right" />
                <div className="contact-blob blob-top" />
            </div>

            <div className="contact-wrapper">

                {/* ══ HEADER ══ */}
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <motion.span className="contact-eyebrow">
                        <span className="eyebrow-dot" />
                        Get In Touch
                    </motion.span>

                    <motion.h2
                        className="contact-title"
                        style={{ x: titleX }}
                    >
                        Let's Build Something{' '}
                        <span className="gradient-text">
                            Amazing
                            <svg className="title-underline" viewBox="0 0 260 10" preserveAspectRatio="none">
                                <motion.path
                                    d="M0,8 Q65,0 130,6 Q195,12 260,4"
                                    stroke="url(#cGrad)"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                />
                                <defs>
                                    <linearGradient id="cGrad" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#38bdf8" />
                                        <stop offset="100%" stopColor="#c084fc" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </motion.h2>

                    <motion.p
                        className="contact-desc"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Available for freelance projects and full-time opportunities.
                        I specialize in high-performance backend systems — let's turn
                        your idea into a scalable reality.
                    </motion.p>

                    {/* Status chips */}
                    <motion.div
                        className="status-chips"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {statusChips.map(chip => (
                            <span key={chip.text} className="status-chip">
                                {chip.icon}
                                {chip.text}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ══ BODY GRID ══ */}
                <div className="contact-body">

                    {/* ── LEFT: Form ── */}
                    <motion.div
                        className="contact-form-panel"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <div className="panel-label">
                            <MessageSquare size={15} />
                            Quick Message
                        </div>
                        <QuickForm />
                    </motion.div>

                    {/* ── RIGHT: Info ── */}
                    <motion.div
                        className="contact-info-panel"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        viewport={{ once: true }}
                    >
                        <div className="panel-label">
                            <Phone size={15} />
                            Contact Methods
                        </div>

                        <div className="methods-list">
                            {contactMethods.map((m, i) => (
                                <MethodCard key={m.label} method={m} index={i} />
                            ))}
                        </div>

                        {/* Availability card */}
                        <motion.div
                            className="availability-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="avail-header">
                                <span className="avail-dot" />
                                <strong>Currently Available</strong>
                            </div>
                            <p>
                                Open to backend contracts, API consulting, and
                                full-time senior roles starting immediately.
                            </p>
                            <div className="avail-tags">
                                {['Freelance', 'Full-time', 'Contract', 'Remote'].map(t => (
                                    <span key={t} className="avail-tag">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ══ FOOTER STRIP ══ */}
                <motion.div
                    className="contact-footer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p className="footer-copy">
                        © {new Date().getFullYear()} · Crafted with care ·{' '}
                        <span className="gradient-text">All rights reserved</span>
                    </p>

                    <div className="footer-socials">
                        {[
                            { icon: <Github size={18} />, href: contactInfo.github, label: 'GitHub' },
                            { icon: <Linkedin size={18} />, href: contactInfo.linkedin, label: 'LinkedIn' },
                            { icon: <Twitter size={18} />, href: contactInfo.twitter ?? '#', label: 'Twitter' },
                            { icon: <Mail size={18} />, href: `mailto:${contactInfo.email}`, label: 'Email' },
                        ].map((s, i) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith('mailto:') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="footer-social-link"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.08 }}
                                whileHover={{ y: -4, scale: 1.15 }}
                                viewport={{ once: true }}
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;