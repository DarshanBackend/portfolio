
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';
import { personalInfo, skills, experience, projects } from '../data/projects';
import './Terminal.css';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { type: 'info', content: `Welcome to ${personalInfo.name}'s interactive terminal v1.0.0` },
        { type: 'info', content: 'Type "help" to see available commands.' }
    ]);
    const inputRef = useRef(null);
    const scrollRef = useRef(null);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = [];

        switch (cleanCmd) {
            case 'help':
                response = [
                    { type: 'success', content: 'Available commands:' },
                    { type: 'info', content: '  about    - Display personal info' },
                    { type: 'info', content: '  skills   - List technical skills' },
                    { type: 'info', content: '  exp      - Show work experience' },
                    { type: 'info', content: '  projects - List featured projects' },
                    { type: 'info', content: '  contact  - Show contact details' },
                    { type: 'info', content: '  clear    - Clear terminal' },
                ];
                break;
            case 'about':
                response = [
                    { type: 'success', content: `User: ${personalInfo.name}` },
                    { type: 'info', content: `Role: ${personalInfo.role}` },
                    { type: 'info', content: personalInfo.description }
                ];
                break;
            case 'skills':
                response = skills.map(s => ({ type: 'info', content: `> ${s.name}: ${s.items.join(', ')}` }));
                break;
            case 'exp':
                response = experience.map(e => ({ type: 'info', content: `[${e.period}] ${e.role} @ ${e.company}` }));
                break;
            case 'projects':
                response = projects.map(p => ({ type: 'info', content: `* ${p.title} - ${p.tags.join(', ')}` }));
                break;
            case 'contact':
                response = [
                    { type: 'info', content: `Email: ${personalInfo.email}` },
                    { type: 'info', content: `GitHub: ${personalInfo.github}` },
                    { type: 'info', content: `LinkedIn: ${personalInfo.linkedin}` }
                ];
                break;
            case 'clear':
                setOutput([]);
                return;
            case '':
                return;
            default:
                response = [{ type: 'error', content: `Command not found: ${cleanCmd}. Type "help" for assistance.` }];
        }

        setOutput(prev => [...prev, { type: 'command', content: `> ${cmd}` }, ...response]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCommand(input);
        setInput('');
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [output]);

    return (
        <section className="section terminal-section">
            <div className="container">
                <motion.div
                    className="terminal-window"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <div className="t-btn close"><X size={10} /></div>
                            <div className="t-btn minimize"><Minus size={10} /></div>
                            <div className="t-btn maximize"><Square size={8} /></div>
                        </div>
                        <div className="terminal-title">
                            <TerminalIcon size={14} className="mr-2" />
                            developer_console.exe
                        </div>
                    </div>

                    <div className="terminal-body" ref={scrollRef} onClick={() => inputRef.current?.focus()}>
                        {output.map((line, i) => (
                            <div key={i} className={`terminal-line ${line.type}`}>
                                {line.content}
                            </div>
                        ))}
                        <form onSubmit={handleSubmit} className="terminal-form">
                            <span className="prompt">{'>'}</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="terminal-input"
                                autoFocus
                                spellCheck="false"
                            />
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Terminal;
