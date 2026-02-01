import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Real projects from Replit portfolio
const projects = [
    {
        title: 'LinkedIn Post Generator',
        description: 'AI-powered tool that generates professional LinkedIn posts automatically with modern UI and API integration.',
        image: '/images/linkedin-post-generator.png',
        tags: ['React', 'Node.js', 'AI APIs', 'FastAPI'],
        gradient: 'from-blue-500 to-cyan-500',
        liveUrl: 'https://linked-in-post-generator-k-manibhaskars-projects.vercel.app',
        githubUrl: 'https://github.com/manibhaskar29/LinkedIn-Post-Generator'
    },
    {
        title: 'WasteZero',
        description: 'Waste management platform to track and optimize waste collection with dashboards and backend APIs.',
        image: '/images/waste-zero.png',
        tags: ['React', 'Express', 'MySQL', 'REST API'],
        gradient: 'from-green-500 to-emerald-500',
        liveUrl: 'https://waste-zero-fawn.vercel.app/',
        githubUrl: 'https://github.com/manibhaskar29/WasteZero'
    },
    {
        title: 'College Event Management System',
        description: 'Full stack system for managing college events, registrations, and admin controls.',
        image: '/images/college-event-management-system.png',
        tags: ['React', 'Node.js', 'MySQL', 'Admin Dashboard'],
        gradient: 'from-purple-500 to-pink-500',
        liveUrl: 'https://college-event-management-system-70klnb8zc.vercel.app/',
        githubUrl: 'https://github.com/manibhaskar29/college-event-management-system'
    },
    {
        title: 'YouTube Downloader',
        description: 'Python-based tool to download YouTube videos using automation and CLI interface.',
        image: '/images/yt-downloader.png',
        tags: ['Python', 'Automation', 'CLI'],
        gradient: 'from-red-500 to-orange-500',
        liveUrl: 'https://manibhaskar29.github.io/yt-downloader/',
        githubUrl: 'https://github.com/manibhaskar29/yt-downloader'
    }
];

function ProjectCard({ project, index }) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out',
            }}
            className="group relative"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
            <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all">
                <div className="relative h-48 overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            <Github className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            <ExternalLink className="w-5 h-5 text-white" />
                        </motion.a>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-500 transition-all">
                        {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="projects"
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
                        Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Real-world deployed applications and coding projects
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
