import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Award, GraduationCap, Calendar, Briefcase, ExternalLink } from 'lucide-react';

const timeline = [
    {
        year: "Oct 2025 - Dec 2025",
        title: "Web Development Intern",
        company: "Infosys Springboard",
        desc: "Developed 'WasteZero', a smart waste pickup & recycling platform. Built React frontend, Node.js/Express backend with JWT auth, and role-based access control for 10+ APIs. Deployed on Vercel & Render.",
        icon: Briefcase,
        color: "from-blue-500 to-indigo-600",
        certificateUrl: "/certificates/Internship-Certificate.png"
    },
    {
        year: "2025",
        title: "AI Agents Course",
        desc: "Completed AI Agents Course offered by MentiBY. Learned to build AI-powered applications and workflows.",
        icon: Award,
        color: "from-pink-500 to-rose-500",
        certificateUrl: "/certificates/AI-Agents-Course.png"
    },
    {
        year: "2024",
        title: "Mentiby Bootcamp",
        desc: "Intensive training in modern web technologies and software development practices.",
        icon: GraduationCap,
        color: "from-green-400 to-emerald-500"
    },
];

function TimelineItem({ item, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
        >
            <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group "
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-mono mb-3 text-white/80">
                            {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        {item.company && <h4 className="text-blue-400 font-medium mb-2">{item.company}</h4>}
                        <p className="text-white/70 text-sm mb-4">{item.desc}</p>

                        {item.certificateUrl && (
                            <a
                                href={item.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors ${isLeft ? 'ml-auto' : 'mr-auto'}`}
                            >
                                <ExternalLink className="w-3 h-3" />
                                View Certificate
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>

            <div className="relative flex items-center justify-center flex-shrink-0">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} z-10 flex items-center justify-center`}
                >
                    <item.icon className="w-5 h-5 text-white" />
                </motion.div>
                {index < timeline.length - 1 && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: '100%' } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                        className="absolute top-4 w-0.5 bg-gradient-to-b from-slate-700 to-slate-800"
                        style={{ height: 'calc(100% + 4rem)', zIndex: 0 }}
                    />
                )}
            </div>

            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
}

export default function Timeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="experience"
            ref={ref}
            className="relative py-32 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden"
        >
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Experience, Internships & Certifications
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {timeline.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
