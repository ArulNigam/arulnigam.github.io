"use client";

import { motion } from "framer-motion";

const workItems = {
  primary: {
    title: "Circuit Breaker Labs",
    focus: "Agentic red-teaming and LLM mental health safety",
  },
  institutional: [
    "Artiman Ventures",
    "Chairing $20M+ financial institutions",
    "Leading $12B+ due diligence",
  ],
};

export default function Work() {
  return (
    <section
      id="work"
      className="min-h-screen px-6 md:px-12 lg:px-24 py-32 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal mb-16 md:mb-20">
          Work
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="border border-black/10 p-8 md:p-12 bg-paper/50 backdrop-blur-sm hover:border-black/20 transition-colors duration-300">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
                {workItems.primary.title}
              </h3>
              <p className="font-mono text-base md:text-lg text-foreground/70 leading-relaxed">
                {workItems.primary.focus}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-1"
          >
            <div className="border-t border-black/10 pt-8">
              <h4 className="font-mono text-sm md:text-base text-foreground/50 uppercase tracking-wider mb-6">
                Institutional Impact
              </h4>
              <ul className="space-y-4">
                {workItems.institutional.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-serif text-lg md:text-xl text-foreground/80"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
