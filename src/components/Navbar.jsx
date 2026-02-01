import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            style={{ opacity: navOpacity }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'backdrop-blur-xl bg-slate-900/80 shadow-lg border-b border-white/10'
                    : 'backdrop-blur-md bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                    >
                        Mani.dev
                    </motion.div>

                    <div className="hidden md:flex items-center gap-8">
                        {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, i) => (
                            <motion.button
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => {
                                    const sectionId = item === 'Home' ? 'hero' : item.toLowerCase();
                                    scrollToSection(sectionId);
                                }}
                                className="text-white/90 hover:text-white transition-colors relative group text-sm font-medium"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300" />
                            </motion.button>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {[
                            { icon: Github, href: 'https://github.com/manibhaskar29' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/manibhaskar29' },
                            { icon: Mail, href: 'mailto:kenguva.manibhaskar@gmail.com' },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110"
                            >
                                <social.icon className="w-5 h-5 text-white" />
                            </motion.a>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4 bg-slate-900/90 rounded-2xl border border-white/10 overflow-hidden"
                    >
                        {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    const sectionId = item === 'Home' ? 'hero' : item.toLowerCase();
                                    scrollToSection(sectionId);
                                }}
                                className="block w-full text-left px-6 py-3 text-white/90 hover:bg-white/10 transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                        <div className="flex gap-4 px-6 pt-4 mt-2 border-t border-white/10">
                            <a href="https://github.com/manibhaskar29" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><Github className="w-5 h-5" /></a>
                            <a href="https://www.linkedin.com/in/manibhaskar29" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><Linkedin className="w-5 h-5" /></a>
                            <a href="mailto:kenguva.manibhaskar@gmail.com" className="text-white/70 hover:text-white"><Mail className="w-5 h-5" /></a>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
