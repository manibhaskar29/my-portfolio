import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-900 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">
          &copy; {new Date().getFullYear()} Mani Bhaskar. All rights reserved.
        </div>

        <div className="text-white/60 text-sm">
          Built with React & Tailwind.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/manibhaskar29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/manibhaskar29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:kenguva.manibhaskar@gmail.com"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
