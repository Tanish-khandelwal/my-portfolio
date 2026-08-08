import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";
import { FaArrowRight, FaFileLines, FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa6";

const roles = [
  "Full-Stack Developer (MERN)",
  "UiPath RPA Automation Specialist",
  "REST API & Database Architect",
  "Database Management System Specialist"
];

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden bg-[#0b0f19]"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Column Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >

          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-medium backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Available for Full Stack & Software Roles
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Tanish Khandelwal
            </span>
          </motion.h1>

          {/* Dynamic Role Cycling */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="h-10 flex items-center justify-center lg:justify-start"
          >
            <p className="text-xl sm:text-2xl font-semibold text-purple-300 flex items-center gap-2">
              <FaCode className="text-pink-400 text-lg animate-pulse" />
              <span className="transition-all duration-500 animate-fadeIn font-mono">
                {roles[roleIndex]}
              </span>
            </p>
          </motion.div>

          {/* Short Objective */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            BCA Student & Full Stack Intern specializing in <span className="text-purple-300 font-semibold">MERN Stack (React, Node.js, Express, MongoDB)</span>, <span className="text-blue-300 font-semibold">MySQL/PHP</span>, and <span className="text-pink-300 font-semibold">UiPath RPA Automation</span>. Building scalable REST APIs, responsive UIs, and efficient workflows.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-base shadow-xl shadow-purple-900/30 hover:shadow-purple-700/50 transition flex items-center gap-2 group"
            >
              Explore Projects <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-xl bg-gray-900/80 border border-purple-500/40 hover:bg-purple-950/80 text-purple-200 font-semibold text-base backdrop-blur-md transition flex items-center gap-2 shadow-lg hover:border-purple-400"
            >
              <FaFileLines className="text-purple-400" /> View Resume
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact-me"
              className="px-6 py-3.5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white font-semibold text-base transition"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Quick Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-5 pt-4 text-gray-400"
          >
            <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">Connect:</span>
            <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://github.com/Tanish-khandelwal" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:text-white hover:border-purple-500 transition">
              <FaGithub className="text-lg" />
            </motion.a>
            <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://linkedin.com/in/tanishkhandelwal26" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:text-blue-400 hover:border-blue-500 transition">
              <FaLinkedin className="text-lg" />
            </motion.a>
            <motion.a whileHover={{ y: -3, scale: 1.1 }} href="mailto:tanishkhandelwal2605@gmail.com" className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:text-pink-400 hover:border-pink-500 transition">
              <FaEnvelope className="text-lg" />
            </motion.a>
          </motion.div>

        </motion.div>

        {/* Right Column Profile Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative group">
            {/* Outer Rotating/Pulse Glow Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

            {/* Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-purple-500/40 bg-gray-900 shadow-2xl">
              <img
                src={heroImg}
                alt="Tanish Khandelwal Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Floating Tech Pill 1 */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -left-6 bg-[#0f172a]/90 backdrop-blur-md border border-purple-500/40 text-purple-200 px-4 py-2 rounded-xl text-xs font-semibold shadow-xl flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span> React & MERN
            </motion.div>

            {/* Floating Tech Pill 2 */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-6 -right-6 bg-[#0f172a]/90 backdrop-blur-md border border-pink-500/40 text-pink-200 px-4 py-2 rounded-xl text-xs font-semibold shadow-xl flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-pink-400"></span> UiPath RPA Dev
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Metrics Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-6xl w-full mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-glass-card rounded-2xl border border-white/10 text-center shadow-xl backdrop-blur-lg"
      >
        <div className="p-3">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">7+</h3>
          <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Web & MERN Projects</p>
        </div>

        <div className="p-3">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">2</h3>
          <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Development Internships</p>
        </div>

        <div className="p-3">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">91%</h3>
          <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">12th CBSE Aggregate</p>
        </div>

        <div className="p-3">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">3</h3>
          <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Certifications Earned</p>
        </div>
      </motion.div>

    </section>
  );
}
