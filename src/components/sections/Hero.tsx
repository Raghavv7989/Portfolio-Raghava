"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { MagneticButton } from "../core/MagneticButton";
import Link from "next/link";

const roles = [
  "AI Engineer",
  "Machine Learning Builder",
  "Full Stack Developer",
  "Problem Solver",
  "Technology Enthusiast",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nameRef.current || !rolesRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial reveal of the name
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, delay: 0.5 }
    );

    // Morphing roles animation loop
    const roleElements = rolesRef.current.children;
    
    gsap.set(roleElements, { opacity: 0, y: 20, filter: "blur(8px)", position: "absolute" });

    const rolesTl = gsap.timeline({ repeat: -1 });

    Array.from(roleElements).forEach((el, index) => {
      rolesTl
        .to(el, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 })
        .to(el, { opacity: 0, y: -20, filter: "blur(8px)", duration: 1, delay: 1.5 });
    });

    tl.add(rolesTl, "-=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden px-6 md:px-12"
    >
      <div className="z-10 flex flex-col items-center text-center space-y-8 mt-16">
        <div className="overflow-hidden">
          <h1 
            ref={nameRef}
            className="font-serif text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight text-accent opacity-0"
          >
            VEERA RAGHAVENDRA <br className="hidden md:block" />
            GODAVARTHI
          </h1>
        </div>

        <div className="relative h-12 md:h-16 w-full flex justify-center items-center">
          <div ref={rolesRef} className="relative w-full flex justify-center">
            {roles.map((role, i) => (
              <h2 
                key={i} 
                className="text-xl md:text-3xl font-medium tracking-wide text-slate/70"
              >
                {role}
              </h2>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          className="pt-8 flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link href="/projects">
            <MagneticButton variant="primary">
              View Portfolio
            </MagneticButton>
          </Link>
          <Link href="/about">
            <MagneticButton variant="outline">
              My Journey
            </MagneticButton>
          </Link>
        </motion.div>
      </div>

      {/* Abstract background shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-secondary/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-accent/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
}
