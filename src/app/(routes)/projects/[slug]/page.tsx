import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const getProjectData = (slug: string) => {
  const data: Record<string, any> = {
    "fraud-detection": { 
      title: "Credit Card Fraud Detection", 
      category: "Machine Learning", 
      tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "SMOTE"], 
      image: "/images/img_fraud_new.png",
      overview: "A highly precise machine learning model designed to detect fraudulent credit card transactions on highly imbalanced data sets.",
      architecture: "The data pipeline handles severe class imbalance using SMOTE (Synthetic Minority Over-sampling Technique). Feature engineering extracts critical transaction patterns, which are then fed into an XGBoost classifier. The model achieves an impressive 15% increase in precision, drastically reducing false positives for financial risk management."
    },
    "llm-data-analysis": { 
      title: "LLM Based Data Analysis AI Agent", 
      category: "Generative AI", 
      tech: ["Python", "Google Gemini (LLM)", "Streamlit", "Pinecone", "RAG", "NLP"], 
      image: "/images/nlp_analysis.png",
      overview: "An AI-powered Data Analysis Agent that provides automated insights, visualizations, and context-aware data querying using a conversational interface.",
      architecture: "Built with a Streamlit GUI, the agent leverages Google Gemini and Pinecone vector databases to implement a Retrieval-Augmented Generation (RAG) pipeline. Users can upload raw data, and the NLP engine parses, contextualizes, and answers queries while generating relevant visualizations on the fly."
    },
    "vehicle-detection": { 
      title: "Vehicle Detection ML", 
      category: "Computer Vision", 
      tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "NumPy"], 
      image: "/images/computer_vision.png",
      overview: "A real-time vehicle detection system utilizing deep learning to identify, localize, and track vehicles in video streams.",
      architecture: "Powered by the YOLOv8 architecture and implemented via PyTorch and OpenCV. Transfer learning was applied to optimize detection accuracy specifically for high-speed traffic footage, enabling robust real-time inference suitable for smart city and traffic monitoring applications."
    },
    "languify-google-translate": { 
      title: "Languify Google Translate API", 
      category: "Full Stack", 
      tech: ["TypeScript", "Google Translate API", "React"], 
      image: "/images/img_languify_translation.png",
      overview: "A multi-language translation platform integrating seamlessly with Google Translate API to deliver instant, high-quality localization.",
      architecture: "A Next.js frontend interacts with a Node.js backend to batch and cache translation requests. It optimizes API usage by storing frequently requested translations, ensuring rapid delivery and cost-efficiency for large-scale text."
    },
    "aerolux-ai": { 
      title: "Aerolux AI", 
      category: "Full Stack", 
      tech: ["TypeScript", "Next.js", "APIs"], 
      image: "/images/img_aerolux_flight_booking.png",
      overview: "A comprehensive flight ticket booking system integrating modern APIs and luxury design for seamless global travel management.",
      architecture: "Built on a Next.js App Router architecture. It features real-time flight availability polling, secure ticket transaction endpoints, and a sleek interactive dashboard mapping out flight nodes globally."
    },
    "hostelhub": { 
      title: "HostelHub", 
      category: "Full Stack", 
      tech: ["TypeScript", "React", "Node.js", "MongoDB", "Express"], 
      image: "/images/img_hostelhub.png",
      overview: "A comprehensive hostel booking and management system handling student accommodations, room availability, and secure transactions.",
      architecture: "Employs a MERN stack architecture with JWT-based authentication. The backend REST API handles complex relational queries for room allocation while the React frontend provides an intuitive dashboard for both students and administrators."
    },
    "ai-resume-scanner": { 
      title: "AI Resume Scanner", 
      category: "Natural Language Processing", 
      tech: ["Python", "Spacy", "NLTK", "Regex"], 
      image: "/images/ai_scanner.png",
      overview: "An automated resume parsing and scoring system that ranks candidate profiles against job descriptions using NLP.",
      architecture: "The pipeline uses Spacy for Named Entity Recognition (NER) to extract skills, education, and experience. NLTK processes semantic similarity between the resume text and the target job description, outputting a quantified match score."
    },
    "car-plate-detector": { 
      title: "Car Plate Detector", 
      category: "Computer Vision", 
      tech: ["Python", "OpenCV", "Tesseract OCR"], 
      image: "/images/img_car_plate.png",
      overview: "An automatic number-plate recognition (ANPR) system capable of isolating and reading license plates from moving vehicles.",
      architecture: "Image preprocessing applies morphological operations to isolate the rectangular shape of the license plate. Once cropped, Tesseract OCR extracts the alphanumeric characters with high accuracy."
    },

    "car-measurements": { 
      title: "Car Measurements Predictor", 
      category: "Machine Learning", 
      tech: ["Python", "Deep Learning", "TensorFlow"], 
      image: "/images/img_car_measurements.png",
      overview: "A neural network designed to estimate the 3D dimensions of vehicles directly from 2D images for automotive analytics.",
      architecture: "A custom Convolutional Neural Network (CNN) extracts spatial features from vehicle imagery, mapped to a dense layer that outputs width, height, and length regression predictions."
    },
    "spam-email-detector": { 
      title: "Spam Email Detector", 
      category: "NLP", 
      tech: ["Python", "Gmail API", "Scikit-learn"], 
      image: "/images/img_spam.png",
      overview: "An integrated spam detection tool that connects directly to Gmail to filter and flag malicious or unwanted emails in real-time.",
      architecture: "The application authenticates via OAuth2 with the Gmail API. Incoming emails are processed through a Naive Bayes classifier trained on thousands of spam/ham vectors using TF-IDF tokenization."
    },
    "hand-gesture-puzzle": { 
      title: "Hand Gesture Puzzle Game", 
      category: "Computer Vision / Game", 
      tech: ["Python", "MediaPipe", "PyGame"], 
      image: "/images/img_hand_gesture.png",
      overview: "An interactive puzzle game where players manipulate objects entirely through hand gestures, creating an immersive, touchless experience.",
      architecture: "MediaPipe tracks 21 3D hand landmarks in real-time. The spatial coordinates are mapped to PyGame events, allowing users to 'grab', 'rotate', and 'drop' virtual puzzle pieces smoothly."
    },
    "face-measurements": { 
      title: "Face Measurements", 
      category: "Computer Vision", 
      tech: ["Python", "Dlib", "OpenCV"], 
      image: "/images/img_face_measurements.png",
      overview: "A biometric analysis tool that precisely measures facial proportions and landmark distances for security and aesthetic mapping.",
      architecture: "Uses Dlib's 68-point facial landmark predictor to extract geometric relationships across the face, outputting exact pixel-to-real-world ratios."
    },
    "face-emotions": { 
      title: "Face Emotions", 
      category: "Computer Vision", 
      tech: ["Python", "Keras", "OpenCV"], 
      image: "/images/face_recognition.png",
      overview: "A deep learning model capable of detecting and classifying human micro-expressions into distinct emotional states in real-time.",
      architecture: "A lightweight CNN trained on the FER2013 dataset evaluates cropped facial bounding boxes, predicting probabilities for happiness, sadness, anger, surprise, and neutrality."
    },
    "handcalc": { 
      title: "HandCalc", 
      category: "Computer Vision", 
      tech: ["Python", "MediaPipe", "Math parsing"], 
      image: "/images/gaming_ai.png",
      overview: "A touchless calculator application operated by specific finger counts and gestures.",
      architecture: "Combines MediaPipe hand tracking with a custom state machine to interpret finger counts and gesture sequences as mathematical operators and digits."
    },
  };

  return data[slug] || null;
};

export default async function ProjectCaseStudy(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = getProjectData(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 md:px-12 py-32">
      <Link href="/projects" className="inline-flex items-center space-x-2 text-slate/50 hover:text-accent mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </Link>

      <div className="max-w-4xl mx-auto">
        <p className="text-highlight font-bold tracking-widest uppercase mb-4">{project.category}</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">{project.title}</h1>
        
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl bg-secondary/20 border border-slate/5">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate/10 pt-16">
          <div className="col-span-1">
            <h3 className="font-bold text-sm tracking-widest uppercase text-slate/40 mb-6">Tech Stack</h3>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t: string, i: number) => (
                <li key={i} className="text-slate font-medium text-sm bg-secondary/60 border border-slate/5 px-4 py-2 rounded-full inline-block">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2 space-y-12">
            <div>
              <h3 className="font-bold text-sm tracking-widest uppercase text-slate/40 mb-6">Project Overview</h3>
              <div className="text-xl text-slate/80 leading-relaxed">
                {project.overview}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-sm tracking-widest uppercase text-slate/40 mb-6">Architecture & Approach</h3>
              <div className="bg-secondary/10 p-8 rounded-2xl border border-slate/5 text-slate/80 leading-loose text-lg">
                {project.architecture}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
