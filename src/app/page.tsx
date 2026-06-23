import { Hero } from "@/components/sections/Hero";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const showcaseProjects = [
  {
    title: "LLM Based Data Analysis AI Agent",
    category: "Generative AI",
    slug: "llm-data-analysis",
    image: "/images/nlp_analysis.png",
  },
  {
    title: "Vehicle Speed Detection ML",
    category: "Computer Vision",
    slug: "vehicle-detection",
    image: "/images/computer_vision.png",
  },
  {
    title: "Aerolux AI",
    category: "Full Stack",
    slug: "aerolux-ai",
    image: "/images/img_aerolux_flight_booking.png", 
  },
  {
    title: "Languify Google Translate API",
    category: "Full Stack",
    slug: "languify-google-translate",
    image: "/images/img_languify_translation.png",
  },
  {
    title: "EcoRewards",
    category: "Full Stack",
    slug: "ecorewards",
    image: "/images/img_ecorewards_custom.png",
  }
];

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <section className="py-24 px-6 md:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate mb-12">Experience</h2>
          <div className="max-w-4xl border-l border-slate/10 pl-8 space-y-12">
            <div className="relative group">
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-secondary border-4 border-primary group-hover:bg-accent transition-colors duration-300"></div>
              <p className="text-highlight text-sm font-bold tracking-widest uppercase mb-2">Research Intern</p>
              <h3 className="text-2xl font-serif font-bold text-slate mb-2">SRM University</h3>
              <p className="text-slate/70 leading-relaxed">
                Worked extensively on Credit Card Fraud Detection using advanced machine learning algorithms. 
                Developed and optimized models using Python, XGBoost, and Scikit-learn, handling severe class imbalance 
                with SMOTE to significantly improve precision and reduce false positives in transaction data.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-32 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate mb-4">Selected Work</h2>
              <p className="text-slate/60 text-lg max-w-xl">
                A showcase of my recent explorations in AI, Machine Learning, and Full Stack Engineering.
              </p>
            </div>
            <Link 
              href="/projects" 
              className="group flex items-center space-x-2 text-accent hover:text-accent2 font-bold tracking-widest uppercase text-sm mt-8 md:mt-0 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {showcaseProjects.map((project, i) => (
              <Link 
                key={i} 
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-secondary/20">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
                </div>
                
                <div className="flex flex-col items-start gap-2">
                  <p className="text-highlight text-xs font-bold tracking-widest uppercase">{project.category}</p>
                  <h2 className="text-2xl font-serif font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
