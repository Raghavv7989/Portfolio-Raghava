import Image from "next/image";

export default function CertificationsPage() {
  const certifications = [
    {
      title: "MongoDB Certified Associate Developer",
      image: "/images/certifications/mongodb.jpg"
    },
    {
      title: "SAP Certified - Generative AI Developer",
      image: "/images/certifications/sap.png"
    },
    {
      title: "Google Analytics Certification",
      image: "/images/certifications/google_analytics.png"
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-32">
      <h1 className="font-serif text-5xl md:text-7xl font-bold mb-16">Certifications</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {certifications.map((cert, i) => (
          <div key={i} className="group block">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white/5 shadow-lg border border-slate/5 hover:border-accent/30 transition-colors duration-500">
              <Image 
                src={cert.image} 
                alt={cert.title} 
                fill 
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-xl font-serif font-bold text-slate/90 group-hover:text-accent transition-colors">
                {cert.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
