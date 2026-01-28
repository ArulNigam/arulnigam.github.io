"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-32 pb-40">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-2xl md:text-3xl lg:text-4xl text-center text-foreground/70"
      >
        Out of the darkness into the light.
      </motion.p>
    </footer>
  );
}
