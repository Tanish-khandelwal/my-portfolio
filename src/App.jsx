import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import ResumeModal from "./components/ResumeModal";
import Hero from "./components/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import RpaSpotlight from "./pages/RpaSpotlight";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0]">
      {/* Entry Point Animated Preloader */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Main Website View with Smooth Entrance */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Navigation Header */}
            <Navbar onOpenResume={() => setIsResumeOpen(true)} />

            {/* Core Sections */}
            <main>
              <Hero onOpenResume={() => setIsResumeOpen(true)} />
              <About />
              <Skills />
              <Experience />
              <Work />
              <RpaSpotlight />
              <Certificates />
              <Contact />
            </main>

            {/* Footer */}
            <Footer onOpenResume={() => setIsResumeOpen(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
