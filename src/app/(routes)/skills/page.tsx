export default function SkillsPage() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Python", "Scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "Pandas", "NumPy"],
    },
    {
      title: "Computer Vision",
      skills: ["OpenCV", "MediaPipe", "YOLO", "Dlib", "Object Detection", "Image Processing"],
    },
    {
      title: "Generative AI & NLP",
      skills: ["Google Gemini", "LLMs", "RAG Systems", "Pinecone", "NLTK", "Spacy"],
    },
    {
      title: "Full Stack Development",
      skills: ["TypeScript", "Next.js", "React", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      title: "Databases & Architecture",
      skills: ["MongoDB", "SQL", "REST APIs", "Dynamic Programming", "System Design"],
    },
    {
      title: "Tools & Deployment",
      skills: ["Git", "Docker", "Vercel", "Linux", "Streamlit"],
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-32">
      <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-center">Skills Ecosystem</h1>
      <p className="text-center text-slate/60 mb-24 max-w-2xl mx-auto text-lg">
        A comprehensive overview of my technical expertise across Artificial Intelligence, Computer Vision, and Full Stack Engineering.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, i) => (
          <div key={i} className="bg-secondary/20 border border-slate/5 rounded-3xl p-8 hover:border-accent/30 transition-colors duration-300">
            <h2 className="font-serif text-2xl font-bold mb-6 text-accent">{category.title}</h2>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, j) => (
                <span 
                  key={j} 
                  className="px-4 py-2 bg-ivory text-slate border border-slate/10 rounded-full text-sm font-medium shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
