import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    tech: "Python, XGBoost, Scikit-learn, SMOTE",
    slug: "fraud-detection",
    image: "/images/img_fraud_new.png",
  },
  {
    title: "LLM Based Data Analysis AI Agent",
    category: "Generative AI",
    tech: "Python, Google Gemini, RAG",
    slug: "llm-data-analysis",
    image: "/images/nlp_analysis.png",
  },
  {
    title: "Vehicle Detection ML",
    category: "Computer Vision",
    tech: "Python, YOLOv8, OpenCV",
    slug: "vehicle-detection",
    image: "/images/computer_vision.png",
  },
  {
    title: "Languify Google Translate API",
    category: "Full Stack",
    tech: "TypeScript, External APIs",
    slug: "languify-google-translate",
    image: "/images/img_languify_translation.png",
  },
  {
    title: "Aerolux AI",
    category: "Full Stack AI",
    tech: "TypeScript",
    slug: "aerolux-ai",
    image: "/images/img_aerolux_flight_booking.png",
  },
  {
    title: "HostelHub",
    category: "Full Stack",
    tech: "TypeScript, Next.js",
    slug: "hostelhub",
    image: "/images/img_hostelhub.png",
  },
  {
    title: "AI Resume Scanner",
    category: "Natural Language Processing",
    tech: "Python",
    slug: "ai-resume-scanner",
    image: "/images/ai_scanner.png",
  },
  {
    title: "Car Plate Detector",
    category: "Computer Vision",
    tech: "Python, OpenCV",
    slug: "car-plate-detector",
    image: "/images/img_car_plate.png",
  },
  {
    title: "Car Measurements Predictor",
    category: "Machine Learning",
    tech: "Python, Deep Learning",
    slug: "car-measurements",
    image: "/images/img_car_measurements.png",
  },
  {
    title: "Spam Email Detector",
    category: "Natural Language Processing",
    tech: "Python, Gmail Integration",
    slug: "spam-email-detector",
    image: "/images/img_spam.png",
  },
  {
    title: "Hand Gesture Puzzle Game",
    category: "Computer Vision / Game",
    tech: "Python, MediaPipe",
    slug: "hand-gesture-puzzle",
    image: "/images/img_hand_gesture.png",
  },
  {
    title: "Face Measurements",
    category: "Computer Vision",
    tech: "Python, Dlib",
    slug: "face-measurements",
    image: "/images/img_face_measurements.png",
  },
  {
    title: "Face Emotions",
    category: "Computer Vision",
    tech: "Python, Keras",
    slug: "face-emotions",
    image: "/images/face_recognition.png",
  },
  {
    title: "HandCalc",
    category: "Computer Vision",
    tech: "Python, MediaPipe",
    slug: "handcalc",
    image: "/images/gaming_ai.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32">
      <h1 className="font-serif text-5xl md:text-7xl font-bold mb-16">Selected Work</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, i) => (
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
            </div>
            
            <div className="flex flex-col items-start gap-2">
              <p className="text-highlight text-xs font-bold tracking-widest uppercase">{project.category}</p>
              <h2 className="text-2xl font-serif font-bold group-hover:text-accent transition-colors line-clamp-1">
                {project.title}
              </h2>
              <p className="text-slate/50 text-sm line-clamp-1">{project.tech}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
