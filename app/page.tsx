"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen z-10">
      <Navigation />
      <Hero />
      <Research />
      <Work />
      <Footer />
    </main>
  );
}
