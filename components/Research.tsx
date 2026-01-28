"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const researchPapers = [
  {
    title: "From Bootstrapped to Boots on the Ground",
    description: "Defense Tech",
    advisor: "Matthew Kroenig",
  },
  {
    title: "Electoral Fraud: Blocked & Chained",
    description: "Cryptography",
    advisor: "Malhaz Jibladze",
  },
  {
    title: "Defining Fairness",
    description: "AI Ethics",
    advisor: "Reena Aggarwal",
  },
  {
    title: "Coded Bias",
    description: "Algorithmic Bias in Lending",
    advisor: null,
  },
];

export default function Research() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="research"
      className="min-h-screen px-6 md:px-12 lg:px-24 py-32 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal mb-16 md:mb-20">
          Research
        </h2>

        <div className="space-y-8 md:space-y-12">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div className="relative inline-block">
                <motion.h3
                  className={`font-serif text-2xl md:text-3xl lg:text-4xl font-normal mb-2 transition-all duration-300 relative z-10 ${
                    hoveredIndex === index ? "italic" : ""
                  }`}
                >
                  {paper.title}
                </motion.h3>
                <motion.span
                  className="absolute left-0 top-0 bottom-0 -z-10"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: hoveredIndex === index ? "100%" : 0,
                    opacity: hoveredIndex === index ? 0.25 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: "#FFB800",
                    transform: "skewX(-5deg)",
                  }}
                />
              </div>
              <p className="font-mono text-sm md:text-base text-foreground/60 mb-1">
                {paper.description}
              </p>
              {paper.advisor && (
                <p className="font-mono text-sm md:text-base text-foreground/50">
                  Advisor: {paper.advisor}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
