export default function JourneyPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32">
      <h1 className="font-serif text-5xl md:text-7xl font-bold mb-16 text-center">The Journey</h1>
      
      <div className="max-w-3xl mx-auto relative border-l border-accent/20 pb-16">
        {[
          { year: "2023", title: "Started B.Tech AI & ML", desc: "Began my formal education in Computer Science." },
          { year: "2024", title: "Explored AI and Full Stack", desc: "Dived deep into React, Node, and Python." },
          { year: "2025", title: "ML Internship & Building", desc: "Built Fraud Detection Systems and AI Agents." },
        ].map((node, i) => (
          <div key={i} className="mb-16 relative pl-10">
            <div className="absolute w-4 h-4 rounded-full bg-accent -left-[8.5px] top-2" />
            <span className="text-highlight font-bold tracking-widest mb-2 block">{node.year}</span>
            <h3 className="text-2xl font-serif font-bold mb-2">{node.title}</h3>
            <p className="text-slate/70">{node.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
