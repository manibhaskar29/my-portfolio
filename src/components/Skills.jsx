import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Skills data from Replit portfolio (without proficiency percentages)
const skillsByCategory = {
    Languages: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    Frontend: ['React', 'Tailwind CSS', 'Responsive Design', 'Flexbox'],
    Backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
    Database: ['MySQL', 'MongoDB'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Render', 'Railway', 'Vercel']
};

const categoryColors = {
    Languages: 'from-blue-400 to-cyan-500',
    Frontend: 'from-purple-400 to-pink-500',
    Backend: 'from-green-400 to-emerald-500',
    Database: 'from-orange-400 to-red-500',
    Tools: 'from-yellow-400 to-orange-500'
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="skills"
            ref={ref}
            className="relative py-32 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden"
        >
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category]} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                            <div className="relative backdrop-blur-xl bg-white/5 p-6 rounded-3xl border border-white/10 h-full">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className={`w-1 h-6 rounded-full bg-gradient-to-b ${categoryColors[category]}`}></span>
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + index * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all"
                                        >
                                            <span className="text-white/90 text-sm font-medium">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl border border-white/10 backdrop-blur-sm text-center"
                >
                    <h4 className="text-white font-semibold mb-2">Always Learning</h4>
                    <p className="text-white/60 text-sm">
                        Constantly exploring new technologies and best practices to stay at the cutting edge of development
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
