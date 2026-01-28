"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[12vw] md:text-[10vw] lg:text-[8vw] font-normal italic leading-[0.9] mb-8 tracking-tight"
        >
          Arul Nigam
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-base md:text-lg lg:text-xl text-foreground/70 tracking-wide"
        >
          Founder of Circuit Breaker Labs. Building safety for the frontier.
        </motion.p>
      </motion.div>
    </section>
  );
}
