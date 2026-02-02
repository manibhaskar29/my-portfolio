import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Globe, Laptop } from 'lucide-react';

const features = [
    {
        icon: Code2,
        title: 'Full Stack',
        desc: 'MERN Stack & Python'
    },
    {
        icon: Database,
        title: 'Database',
        desc: 'MySQL & MongoDB'
    },
    {
        icon: Globe,
        title: 'Web Tech',
        desc: 'Modern Web Apps'
    },
    {
        icon: Laptop,
        title: 'Problem Solving',
        desc: 'Active Coder'
    }
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="about"
            ref={ref}
            className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 mb-16 items-center">
                    <div className="flex justify-center md:justify-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6 }}
                            className="w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl rotate-3 hover:rotate-0 transition-all duration-300"
                        >
                            <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
                                <img
                                    src="/images/my-profile.png"
                                    alt="Mani Bhaskar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-2 space-y-6"
                    >
                        <div className="relative backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/20">
                            <p className="text-lg text-white/80 leading-relaxed mb-4">
                                I'm a <span className="text-white font-medium">CSE student</span> passionate about building scalable web applications.
                                With a strong foundation in <span className="text-blue-400">Python problem solving</span> and expertise in full stack development
                                using React, Node, Express, and MySQL, I strive to create impactful digital experiences.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed">
                                I've built multiple real-world deployed projects and stay active in bootcamps and daily coding contests to sharpen my skills.
                                Currently looking for <span className="text-purple-400 font-medium">internships</span> and opportunities to collaborate on innovative projects.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:scale-105">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                                <p className="text-white/60 text-sm">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
