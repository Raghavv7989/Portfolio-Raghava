import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-slate py-16 md:py-24 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Let's build <br className="hidden md:block" />
                the future.
              </h3>
              <p className="text-slate/70 max-w-sm text-lg">
                Available for selected opportunities in AI, ML, and Full Stack Engineering.
              </p>
            </div>
            <div>
              <Link
                href="mailto:raghavgodavarthi@gmail.com"
                className="inline-flex items-center space-x-2 text-xl font-medium hover:text-accent transition-colors group"
              >
                <span>raghavgodavarthi@gmail.com</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between space-y-12">
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div className="flex flex-col space-y-4">
                <h4 className="font-bold tracking-wider uppercase text-slate/50 mb-2">Navigation</h4>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                <Link href="/about" className="hover:text-accent transition-colors">About</Link>
                <Link href="/journey" className="hover:text-accent transition-colors">Journey</Link>
                <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
                <Link href="/education" className="hover:text-accent transition-colors">Education</Link>
                <Link href="/certifications" className="hover:text-accent transition-colors">Certifications</Link>
              </div>
              <div className="flex flex-col space-y-4">
                <h4 className="font-bold tracking-wider uppercase text-slate/50 mb-2">Socials</h4>
                <a href="https://www.linkedin.com/in/veera-raghavendra-godavarthi-a59641315/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                <a href="https://github.com/Raghavv7989?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
              </div>
            </div>

            <div className="text-sm text-slate/50">
              © {new Date().getFullYear()} Veera Raghavendra Godavarthi. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
