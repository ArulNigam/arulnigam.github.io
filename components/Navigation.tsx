"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Research", href: "#research" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "https://arulium.substack.com", external: true },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "research", "work"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-4 md:gap-6 px-6 md:px-8 py-3 md:py-4 bg-paper/80 backdrop-blur-sm border border-black/10 rounded-full shadow-lg">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            onClick={(e) => !item.external && handleClick(e, item.href)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`font-mono text-xs md:text-sm tracking-wider transition-colors relative ${
              activeSection === item.href.substring(1) && !item.external
                ? "text-foreground"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {item.label}
            {item.external && (
              <span className="ml-1 text-circuit-orange">↗</span>
            )}
            {activeSection === item.href.substring(1) && !item.external && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-circuit-orange"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
