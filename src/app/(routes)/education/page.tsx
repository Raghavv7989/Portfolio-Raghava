export default function EducationPage() {
  const education = [
    {
      degree: "Bachelor's Degree",
      field: "Computer Science (Artificial Intelligence & Machine Learning)",
      institution: "SRM University",
      period: "2023 - 2027",
      description: "Focusing on advanced algorithms, data structures, deep learning, and computer vision. Active participant in AI/ML research."
    },
    {
      degree: "Intermediate",
      field: "MPC (Maths, Physics, Chemistry)",
      institution: "Sri Chaitanya Junior College",
      period: "2021 - 2023",
      description: "Secured top grades with a strong foundation in mathematics and analytical problem-solving."
    },
    {
      degree: "Matriculation",
      field: "High School",
      institution: "Sri Chaitanya Techno School",
      period: "till 2021",
      description: "Graduated with honors, establishing early interests in computer science and logical reasoning."
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-32">
      <h1 className="font-serif text-5xl md:text-7xl font-bold mb-16">Education</h1>
      
      <div className="max-w-4xl mx-auto space-y-12 border-l border-slate/10 pl-8">
        {education.map((item, i) => (
          <div key={i} className="relative group">
            <div className="absolute -left-[41px] top-2 h-5 w-5 rounded-full bg-secondary border-4 border-primary group-hover:bg-accent transition-colors duration-300"></div>
            <p className="text-highlight text-sm font-bold tracking-widest uppercase mb-2">{item.period}</p>
            <h2 className="text-3xl font-serif font-bold text-slate mb-1">{item.degree}</h2>
            <h3 className="text-xl text-slate/80 mb-4">{item.field} <span className="text-accent">• {item.institution}</span></h3>
            <p className="text-slate/60 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
