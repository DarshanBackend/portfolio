import { motion, useScroll, useTransform } from 'framer-motion';
import { experience } from '../data/projects';
import { Briefcase, Calendar, Server, Database, Code } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section id="experience" className="section experience-section">
            <div className="experience-bg-grid"></div>
            <div className="container">
                <motion.div
                    className="section-header"
                    style={{ scale, opacity }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Backend <span className="gradient-text">Journey</span></h2>
                    <p className="section-desc">Architecting robust systems since 2022.</p>
                </motion.div>

                <div className="timeline">
                    <div className="timeline-line"></div>

                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? 45 : -45 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 50 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="timeline-content card-3d">
                                <div className="card-shine"></div>
                                <div className="timeline-header">
                                    <span className="timeline-date">
                                        <Calendar size={14} className="mr-2" /> {item.period}
                                    </span>
                                    <div className="tech-stack-mini">
                                        {index % 2 === 0 ? <Server size={16} /> : <Database size={16} />}
                                    </div>
                                </div>
                                <h3 className="timeline-role">{item.role}</h3>
                                <h4 className="timeline-company">{item.company}</h4>
                                <p className="timeline-desc">{item.description}</p>
                                <div className="card-border-glow"></div>
                            </div>
                            <div className="timeline-dot">
                                <Code size={20} color="#0f172a" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
