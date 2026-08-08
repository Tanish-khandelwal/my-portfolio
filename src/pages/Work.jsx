import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUpRightFromSquare, FaGithub, FaXmark, FaCheck } from "react-icons/fa6";

import petworld from "../assets/image/petworld.jpg";
import event from "../assets/image/events.jpg";
import portfolioImg from "../assets/image/portfolio.png";
import ipl from "../assets/image/IPL_clone.png";
import erp from "../assets/image/ERP.png";

const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "mern", label: "Full Stack & MERN" },
  { id: "frontend", label: "Frontend & React" },
  { id: "business", label: "Web Applications" },
];

const projectsData = [
  {
    title: "IPL Website Clone",
    category: "mern",
    tagline: "Full-Featured Cricket Portal with Real-Time Data Presentation",
    desc: "Engineered a full-featured IPL clone with a modular component hierarchy for dynamic data presentation and real-time state synchronization.",
    bullets: [
      "Modular React component structure for team and match dynamic cards.",
      "Optimized layout fluidity for mobile devices and ironed out cross-browser rendering inconsistencies.",
      "MERN stack architecture with clean backend REST API endpoints."
    ],
    tech: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    live: "https://tanish-ipl-clone.netlify.app",
    github: "https://github.com/Tanish-khandelwal",
    image: ipl,
    featured: true
  },
  {
    title: "Coaching ERP System",
    category: "mern",
    tagline: "Automated Educational Resource Planning & Management System",
    desc: "Engineered a secure full-stack web application to streamline coaching institute operations, student tracking, and role-based administrative workflows.",
    bullets: [
      "Built a dynamic React frontend powered by Vite, Tailwind CSS, and Zustand for seamless state updates.",
      "Architected a secure Node.js & Express REST API with JWT authentication and role-based authorization.",
      "Integrated a cloud PostgreSQL database via Prisma ORM with automated server keep-awake monitoring."
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma"],
    live: "https://educationtracks.netlify.app/",
    github: "https://github.com/Tanish-khandelwal/coaching-erp-frontend",
    image: erp,
    featured: true
  },
  {
    title: "Developer Portfolio Website",
    category: "frontend",
    tagline: "Ultra-Fast Developer Portfolio with Custom Glassmorphism UI",
    desc: "Architected a highly responsive developer portfolio utilizing React and Vite to ensure fast initial page load times and seamless rendering.",
    bullets: [
      "Styled clean interfaces using Tailwind CSS with mobile-first layout methodologies.",
      "Configured automated CI/CD deployment pipelines using Netlify tied directly to version control.",
      "Interactive resume viewer, dark glassmorphism styling, and custom web animations."
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Netlify", "JavaScript"],
    live: "https://tanish-k-portfolio.netlify.app",
    github: "https://github.com/Tanish-khandelwal",
    image: portfolioImg,
    featured: true
  },
  {
    title: "PetWorld — Adoption Platform",
    category: "business",
    tagline: "Healthy Certified Pets Adoption Platform",
    desc: "A sleek adoption web platform designed with React & Tailwind CSS featuring pet listings, search filtering, and responsive UI.",
    bullets: [
      "Category filters for pet adoption listings.",
      "Smooth layout transitions and interactive cards.",
      "Hosted on Vercel with mobile-first responsive layout."
    ],
    tech: ["React", "Tailwind CSS", "Vercel", "JavaScript"],
    live: "https://pet-world-eta.vercel.app/",
    github: "https://github.com/Tanish-khandelwal",
    image: petworld,
    featured: false
  },
  {
    title: "Event Management Web Portal",
    category: "business",
    tagline: "Weddings, Corporate Events & Concerts Platform",
    desc: "Modern event planning and management platform allowing users to explore corporate, wedding, and concert packages.",
    bullets: [
      "Dynamic service cards and event categories.",
      "Interactive inquiry and contact workflow.",
      "Responsive navigation and fast rendering."
    ],
    tech: ["React", "Tailwind CSS", "Responsive UI", "Vercel"],
    live: "https://event-tawny-three.vercel.app/",
    github: "https://github.com/Tanish-khandelwal",
    image: event,
    featured: false
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#0d121f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold">Featured Work</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            Projects & <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Live Applications</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition duration-300 ${activeCategory === cat.id
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/40"
                : "bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
                }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-glass-card rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/40 transition duration-300 group flex flex-col justify-between shadow-xl"
              >
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-transparent to-transparent"></div>

                  {project.featured && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-bold rounded-full shadow-lg">
                      Resume Featured
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
                      {project.title}
                    </h4>
                    <p className="text-xs text-purple-400 font-medium mt-1">{project.tagline}</p>
                    <p className="text-xs text-gray-300 mt-3 leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-0.5 bg-gray-900 border border-gray-800 text-gray-300 text-[11px] rounded-md font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-purple-300 hover:text-white underline transition"
                    >
                      View Details
                    </button>

                    <div className="flex items-center gap-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-purple-500 transition"
                        title="GitHub Repository"
                      >
                        <FaGithub className="text-sm" />
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition"
                      >
                        Live Demo <FaUpRightFromSquare className="text-[10px]" />
                      </motion.a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#0f172a] border border-purple-500/40 rounded-2xl shadow-2xl p-6 md:p-8 text-white space-y-6 max-h-[90vh] overflow-y-auto"
            >

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-xs text-purple-400 mt-1 font-medium">{selectedProject.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-400 hover:text-white bg-gray-800 rounded-xl transition"
                >
                  <FaXmark className="text-xl" />
                </button>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed bg-gray-900/60 p-4 rounded-xl border border-gray-800">
                {selectedProject.desc}
              </p>

              {/* Key Features Bullet points */}
              <div>
                <h4 className="text-sm font-bold text-purple-300 mb-3">Key Highlights & Architecture</h4>
                <ul className="space-y-2">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <span className="mt-0.5 p-1 rounded-full bg-purple-900 border border-purple-500 text-purple-300 text-[8px]">
                        <FaCheck />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-bold text-purple-300 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-950/80 border border-purple-800 text-purple-200 text-xs rounded-lg font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-gray-800 flex justify-end gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold rounded-xl flex items-center gap-2 transition"
                >
                  <FaGithub /> GitHub Code
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-lg transition"
                >
                  Open Live Site <FaUpRightFromSquare />
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
