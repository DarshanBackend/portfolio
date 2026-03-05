
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../data/projects';
import '../components/Contact.css';

const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen bg-[#0b1120] flex items-center justify-center p-4"
        >
            <div className="container max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

                    {/* Info Column */}
                    <div className="flex flex-col justify-between order-2 md:order-1">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h1>
                            <p className="text-slate-400 text-lg mb-8">
                                Discuss a project, collaboration, or just say hi.
                            </p>

                            <div className="space-y-6">
                                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group p-3 rounded-xl hover:bg-slate-800/50">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <span className="text-lg">{contactInfo.email}</span>
                                </a>

                                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group p-3 rounded-xl hover:bg-slate-800/50">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                        <Github size={24} />
                                    </div>
                                    <span className="text-lg">github.com/darshandhameliya</span>
                                </a>

                                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group p-3 rounded-xl hover:bg-slate-800/50">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                        <Linkedin size={24} />
                                    </div>
                                    <span className="text-lg">linkedin.com/in/darshandhameliya</span>
                                </a>

                                <div className="flex items-center gap-4 text-slate-300 p-3">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                                        <MapPin size={24} />
                                    </div>
                                    <span className="text-lg">Surat, Gujarat, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Column */}
                    <div className="order-1 md:order-2 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10 group-hover:opacity-20 transition-opacity"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold text-white mb-4">Open to Opportunities</h3>
                            <p className="text-slate-400 mb-8 max-w-sm">
                                Looking for a backend architect to scale your next big idea? I'm available for freelance and full-time roles.
                            </p>
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:scale-105 shadow-lg shadow-blue-600/30"
                            >
                                Send Email Now
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
