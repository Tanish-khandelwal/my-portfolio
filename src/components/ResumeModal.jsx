import React from "react";
import { FaXmark, FaDownload, FaEnvelope, FaPhone, FaLocationDot, FaLinkedin, FaGithub, FaBriefcase, FaGraduationCap, FaCode, FaAward } from "react-icons/fa6";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0f172a] border border-purple-500/30 rounded-2xl shadow-2xl overflow-y-auto p-6 md:p-8 text-gray-200">

        {/* Header Bar */}
        <div className="flex justify-between items-center pb-6 border-b border-gray-800">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Tanish Khandelwal
            </h2>
            <p className="text-sm text-purple-400 font-medium mt-1">Full-Stack & RPA Developer Resume</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/14RURsGaW5myL12tuQsf5-SXhJBNw4haC/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-xs md:text-sm rounded-xl shadow-lg transition transform hover:scale-105"
            >
              <FaDownload /> Download CV
            </a>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-xl transition"
            >
              <FaXmark className="text-xl" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="mt-6 space-y-8">

          {/* Contact Bar */}
          <div className="flex flex-wrap gap-4 p-4 bg-gray-900/70 border border-gray-800 rounded-xl text-xs md:text-sm text-gray-300">
            <span className="flex items-center gap-2"><FaEnvelope className="text-purple-400" /> tanishkhandelwal2605@gmail.com</span>
            <span className="flex items-center gap-2"><FaPhone className="text-emerald-400" /> +91 63768-72253</span>
            <span className="flex items-center gap-2"><FaLocationDot className="text-pink-400" /> Jaipur, Rajasthan</span>
            <a href="https://linkedin.com/in/tanishkhandelwal26" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline"><FaLinkedin /> linkedin.com/in/tanishkhandelwal26</a>
            <a href="https://github.com/Tanish-khandelwal" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:underline"><FaGithub /> github.com/Tanish-khandelwal</a>
          </div>

          {/* Career Objective */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 flex items-center gap-2 mb-2">
              <FaBriefcase className="text-purple-400" /> Career Objective
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed bg-gray-900/40 p-4 rounded-xl border border-gray-800/60">
              BCA student with hands-on experience in Python, MERN stack, and MySQL, seeking a Full Stack Developer role to build scalable software solutions and support data-driven decision-making. Specializes in web architectures, optimized RESTful APIs, and responsive user interfaces with a drive to deliver clean, maintainable code within a collaborative team.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 flex items-center gap-2 mb-4">
              <FaBriefcase className="text-purple-400" /> Work Experience
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-gray-900/60 border border-purple-500/20 rounded-xl">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h4 className="font-bold text-white text-base">Full Stack Developer Intern</h4>
                    <p className="text-xs text-purple-400">ITPL, Jaipur</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-purple-950/80 border border-purple-800 text-purple-300 rounded-full font-mono">Mar 2026 – Present</span>
                </div>
                <ul className="mt-3 text-xs md:text-sm text-gray-300 list-disc list-inside space-y-1">
                  <li>Developed and integrated modular RESTful APIs using Node.js and Express to seamlessly manage application state and complex data workflows.</li>
                  <li>Designed and optimized flexible database schemas within MongoDB, improving application responsiveness and query performance execution.</li>
                  <li>Collaborated on modernizing web components to maintain consistency and highly responsive cross-device views.</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-900/60 border border-gray-800 rounded-xl">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h4 className="font-bold text-white text-base">Full-Stack Web Development Intern</h4>
                    <p className="text-xs text-purple-400">Biyani Group of Colleges, Jaipur</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full font-mono">Jun 2025 – Aug 2025</span>
                </div>
                <ul className="mt-3 text-xs md:text-sm text-gray-300 list-disc list-inside space-y-1">
                  <li>Engineered a secure, end-to-end Leave Management System from scratch utilizing PHP for backend logic and a MySQL database architecture.</li>
                  <li>Created a dynamic, highly responsive frontend interface using HTML, CSS, JavaScript, and AJAX to handle real-time user input and dynamic approvals without page reloads.</li>
                  <li>Successfully deployed the fully functional web portal on a live hosting platform to demonstrate end-to-end development workflows.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 flex items-center gap-2 mb-3">
              <FaGraduationCap className="text-purple-400" /> Educational Qualification
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-900/40 border border-gray-800 rounded-xl">
                <h4 className="font-bold text-white text-sm">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-xs text-gray-400 mt-1">JECRC University, Jaipur</p>
                <p className="text-xs text-purple-400 mt-2 font-semibold">Pursuing (2024 – 2027)</p>
              </div>

              <div className="p-4 bg-gray-900/40 border border-gray-800 rounded-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-sm">Senior Secondary (CBSE)</h4>
                    <p className="text-xs text-gray-400 mt-1">MPS International School, Jaipur</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-lg font-bold">91%</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">2023 – 2024</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 flex items-center gap-2 mb-3">
              <FaCode className="text-purple-400" /> Skills Summary
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg">
                <span className="font-bold text-purple-400 block mb-1">Languages</span>
                <span className="text-gray-300">JavaScript, C++, Python, HTML/CSS, SQL</span>
              </div>

              <div className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg">
                <span className="font-bold text-purple-400 block mb-1">Frameworks & Libs</span>
                <span className="text-gray-300">React, Node.js, Express, Vite, Tailwind, AJAX</span>
              </div>

              <div className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg">
                <span className="font-bold text-purple-400 block mb-1">Databases</span>
                <span className="text-gray-300">MongoDB, MySQL, PostgreSQL</span>
              </div>

              <div className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg">
                <span className="font-bold text-purple-400 block mb-1">Tools & Automation</span>
                <span className="text-gray-300">Git, GitHub, UiPath RPA, Netlify, XAMPP</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 flex items-center gap-2 mb-3">
              <FaAward className="text-purple-400" /> Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3.5 py-2 bg-purple-900/30 border border-purple-500/30 text-purple-200 text-xs rounded-xl font-medium">
                Full Stack Development Internship — Biyani Group of Colleges (2025)
              </span>
              <span className="px-3.5 py-2 bg-blue-900/30 border border-blue-500/30 text-blue-200 text-xs rounded-xl font-medium">
                Data Analytics Simulation — Accenture via Forage (2025)
              </span>
              <span className="px-3.5 py-2 bg-amber-900/30 border border-amber-500/30 text-amber-200 text-xs rounded-xl font-medium">
                UiPath RPA Developer — Certified Automation Developer
              </span>
            </div>
          </div>

        </div>

        {/* Footer Close */}
        <div className="mt-8 pt-4 border-t border-gray-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-medium text-sm rounded-xl transition"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
}
