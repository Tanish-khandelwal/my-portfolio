import React, { useState } from "react";
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

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0]">
      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

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
    </div>
  );
}
