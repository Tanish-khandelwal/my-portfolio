import React, { useState, useEffect } from "react";
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
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-medium backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Available for Full Stack & Software Roles
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Tanish Khandelwal
            </span>
          </h1>

          {/* Dynamic Role Cycling */}
          <div className="h-10 flex items-center justify-center lg:justify-start">
            <p className="text-xl sm:text-2xl font-semibold text-purple-300 flex items-center gap-2">
              <FaCode className="text-pink-400 text-lg" />
              <span className="transition-all duration-500 animate-fadeIn font-mono">
                {roles[roleIndex]}
              </span>
            </p>
          </div>

          {/* Short Objective */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            BCA Student & Full Stack Intern specializing in <span className="text-purple-300 font-semibold">MERN Stack (React, Node.js, Express, MongoDB)</span>, <span className="text-blue-300 font-semibold">MySQL/PHP</span>, and <span className="text-pink-300 font-semibold">UiPath RPA Automation</span>. Building scalable REST APIs, responsive UIs, and efficient workflows.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-base shadow-xl shadow-purple-900/30 hover:shadow-purple-700/50 transition transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Explore Projects <FaArrowRight className="text-xs" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-xl bg-gray-900/80 border border-purple-500/40 hover:bg-purple-950/80 text-purple-200 font-semibold text-base backdrop-blur-md transition flex items-center gap-2 shadow-lg hover:border-purple-400"
            >
              <FaFileLines className="text-purple-400" /> View Resume
            </button>

            <a
              href="#contact-me"
              className="px-6 py-3.5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white font-semibold text-base transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center justify-center lg:justify-start gap-5 pt-4 text-gray-400">
            <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">Connect:</span>
            <a href="https://github.com/Tanish-khandelwal" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:text-white hover:border-purple-500 transition">
              <FaGithub className="text-lg" />
            </a>
            <a href="https://linkedin.com/in/tanishkhandelwal26" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:text-blue-400 hover:border-blue-500 transition">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="mailto:tanishkhandelwal2605@gmail.com" className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:text-pink-400 hover:border-pink-500 transition">
              <FaEnvelope className="text-lg" />
            </a>
          </div>

        </div>

        {/* Right Column Profile Visual */}
        <div className="lg:col-span-5 flex justify-center items-center">
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
            <div className="absolute top-4 -left-6 bg-[#0f172a]/90 backdrop-blur-md border border-purple-500/40 text-purple-200 px-4 py-2 rounded-xl text-xs font-semibold shadow-xl flex items-center gap-2 animate-float">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span> React & MERN
            </div>

            {/* Floating Tech Pill 2 */}
            <div className="absolute bottom-6 -right-6 bg-[#0f172a]/90 backdrop-blur-md border border-pink-500/40 text-pink-200 px-4 py-2 rounded-xl text-xs font-semibold shadow-xl flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="w-2 h-2 rounded-full bg-pink-400"></span> UiPath RPA Dev
            </div>
          </div>
        </div>

      </div>

      {/* Metrics Banner */}
      <div className="max-w-6xl w-full mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-glass-card rounded-2xl border border-white/10 text-center shadow-xl">
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
      </div>

    </section>
  );
}
