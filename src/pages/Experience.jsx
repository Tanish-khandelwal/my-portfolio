import React from "react";
import { FaBriefcase, FaCalendarDays, FaLocationDot, FaCheck } from "react-icons/fa6";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "ITPL, Jaipur",
    location: "Jaipur, Rajasthan",
    period: "Mar 2026 – Present",
    status: "Current Role",
    badgeColor: "bg-purple-950/80 border-purple-700 text-purple-300",
    bullets: [
      "Developed and integrated modular RESTful APIs using Node.js and Express to seamlessly manage application state and complex data workflows.",
      "Designed and optimized flexible database schemas within MongoDB, improving application responsiveness and query performance execution.",
      "Collaborated on modernizing web components to maintain consistency and highly responsive cross-device views across modern web browsers."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "React", "JavaScript"]
  },
  {
    title: "Full-Stack Web Development Intern",
    company: "Biyani Group of Colleges, Jaipur",
    location: "Jaipur, Rajasthan",
    period: "Jun 2025 – Aug 2025",
    status: "Completed",
    badgeColor: "bg-blue-950/80 border-blue-700 text-blue-300",
    bullets: [
      "Engineered a secure, end-to-end Leave Management System from scratch utilizing PHP for backend logic and a MySQL database architecture.",
      "Created a dynamic, highly responsive frontend interface using HTML, CSS, JavaScript, and AJAX to handle real-time user input and approvals without page reloads.",
      "Successfully deployed the fully functional web portal on a live hosting platform to demonstrate end-to-end development workflows."
    ],
    tech: ["PHP", "MySQL", "JavaScript", "AJAX", "HTML5", "CSS3"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold">Career Journey</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Experience & Internships</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 bg-glass-card rounded-2xl border border-white/10 hover:border-purple-500/40 transition duration-300 relative shadow-xl group"
            >
              {/* Header Info */}
              <div className="flex flex-wrap justify-between items-start gap-4 pb-6 border-b border-gray-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-800 text-purple-300">
                      <FaBriefcase className="text-lg" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition">{exp.title}</h4>
                      <p className="text-sm font-semibold text-purple-400">{exp.company}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5 text-xs text-gray-400">
                  <span className={`px-3 py-1 border rounded-full font-mono font-semibold ${exp.badgeColor}`}>
                    {exp.status}
                  </span>
                  <span className="flex items-center gap-1 mt-1 font-mono"><FaCalendarDays className="text-purple-400" /> {exp.period}</span>
                  <span className="flex items-center gap-1"><FaLocationDot className="text-pink-400" /> {exp.location}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="mt-1.5 p-1 rounded-full bg-purple-900/60 border border-purple-500 text-purple-300 text-[10px]">
                      <FaCheck />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Pills */}
              <div className="mt-6 pt-4 border-t border-gray-800/60 flex flex-wrap gap-2">
                {exp.tech.map((t, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-gray-900/80 border border-gray-800 text-gray-300 text-xs rounded-lg font-medium">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
