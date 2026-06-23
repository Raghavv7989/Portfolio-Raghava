import { MagneticButton } from "@/components/core/MagneticButton";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32 flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 text-center tracking-tight">Let's Connect</h1>
      <p className="text-center text-slate/70 text-lg md:text-xl mb-16 max-w-2xl">
        I am currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        <a href="https://www.linkedin.com/in/veera-raghavendra-godavarthi-a59641315/" target="_blank" rel="noopener noreferrer">
          <MagneticButton variant="outline">LinkedIn</MagneticButton>
        </a>
        <a href="https://github.com/Raghavv7989?tab=repositories" target="_blank" rel="noopener noreferrer">
          <MagneticButton variant="outline">GitHub</MagneticButton>
        </a>
        <a href="/resume.pdf" target="_blank">
          <MagneticButton variant="secondary">View Resume</MagneticButton>
        </a>
      </div>
    </div>
  );
}
