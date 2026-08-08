import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaUserCheck, FaBullseye, FaCode } from "react-icons/fa6";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "JECRC University, Jaipur",
    duration: "2024 – 2027 (Pursuing)",
    status: "Pursuing Degree",
    highlight: "Core Focus: Software Engineering, Data Structures, Web Development & Database Architecture."
  },
  {
    degree: "Senior Secondary (CBSE 12th)",
    institution: "MPS International School, Jaipur",
    duration: "2023 – 2024",
    status: "91% Aggregate",
    highlight: "Scored 91% Aggregate with strong background in Mathematics and Computer Science."
  }
];

const strengths = [
  {
    title: "Full-Stack Development",
    desc: "Building scalable web apps using React, Node.js, Express, MongoDB, PHP, and MySQL.",
    icon: <FaCode className="text-purple-400 text-2xl" />
  },
  {
    title: "Automation & RPA",
    desc: "Certified UiPath RPA Developer creating automated web workflows and bot automations.",
    icon: <FaBullseye className="text-pink-400 text-2xl" />
  },
  {
    title: "Database Management",
    desc: "Designing optimized schemas in MongoDB, MySQL, and PostgreSQL for fast data queries.",
    icon: <FaAward className="text-blue-400 text-2xl" />
  },
  {
    title: "Agile & Teamwork",
    desc: "Collaborative, adaptable problem solver with strong technical communication skills.",
    icon: <FaUserCheck className="text-emerald-400 text-2xl" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#0b0f19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            Passionate About Building <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Digital Products</span> & Automation
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Top Grid: Bio + Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Bio text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 bg-glass-card rounded-2xl border border-white/10 shadow-xl">
              <h4 className="text-2xl font-bold text-white mb-4">Who I Am</h4>
              <p className="text-gray-300 leading-relaxed text-base">
                I am a <span className="text-purple-300 font-semibold">BCA student at JECRC University</span> and an active Full-Stack Developer Intern. I specialize in building end-to-end web architectures using the MERN Stack (React, Node.js, Express, MongoDB) as well as PHP & MySQL.
              </p>
              <p className="text-gray-300 leading-relaxed text-base mt-4">
                Beyond full-stack web development, I am a certified UiPath RPA Developer, combining software engineering with process automation to streamline business workflows, reduce manual overhead, and optimize data pipelines.
              </p>

              {/* Soft Skills Badges */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">Soft Skills & Capabilities</span>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Technical Communication", "Team Leadership", "Adaptability", "Time Management"].map((skill, idx) => (
                    <motion.span 
                      key={idx} 
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 bg-purple-950/60 border border-purple-800/60 text-purple-200 text-xs rounded-lg font-medium shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Core Strengths Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 bg-glass-card rounded-2xl border border-white/10 hover:border-purple-500/40 transition duration-300 group shadow-lg"
              >
                <div className="mb-3 p-3 w-fit rounded-xl bg-gray-900 border border-gray-800 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
                <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Education Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaGraduationCap className="text-3xl text-purple-400" />
            <h4 className="text-2xl font-bold text-white">Educational Qualification</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 bg-glass-card rounded-2xl border border-white/10 relative overflow-hidden shadow-xl hover:border-purple-500/40 transition duration-300"
              >
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <div>
                    <h5 className="text-lg font-bold text-white">{edu.degree}</h5>
                    <p className="text-sm text-purple-400 font-medium">{edu.institution}</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-950/80 border border-purple-700 text-purple-300 text-xs font-bold rounded-full font-mono">
                    {edu.status}
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-mono mb-3">{edu.duration}</p>
                <p className="text-xs text-gray-300 bg-gray-900/60 p-3 rounded-xl border border-gray-800">
                  {edu.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
