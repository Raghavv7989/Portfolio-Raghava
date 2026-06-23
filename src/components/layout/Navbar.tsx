"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Journey", href: "/journey" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Certifications", href: "/certifications" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-4 bg-ivory/80 backdrop-blur-md border-b border-slate/5" : "py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-accent">
          VRG<span className="text-highlight">.</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate/80 hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link href="/contact" className="text-sm font-medium bg-accent text-ivory px-5 py-2.5 rounded-full hover:bg-accent2 transition-colors">
            Let's Talk
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
